-- ============================================================
-- MIGRATION 003: Invite link / family join fixes (v154)
-- Run this in the Supabase SQL Editor. Safe to run multiple times.
--
-- WHY THIS EXISTS
-- 1. "View own family" only let EXISTING members read a families row,
--    so an invitee could never look up a family by invite code →
--    every invite showed "Invalid invite code".
-- 2. createFamily() does insert(...).select() before the creator's
--    family_members row exists → the select was blocked by RLS.
-- 3. "Admin update family" compared family_members.family_id to
--    family_members.id (unqualified `id`), so it never matched.
-- 4. family_members had NO update policy → every upsert/edit of an
--    existing member silently failed.
-- 5. "Add members" allowed ANY signed-in user to insert rows into ANY
--    family. Joining now goes through join_family_by_code() /
--    the /api/family/join route instead.
--
-- The app's /api/family/join route uses the service-role key when it
-- is configured, and falls back to these RPCs when it is not.
-- ============================================================

-- Case-insensitive invite lookups
create index if not exists idx_families_invite_code_upper on families (upper(invite_code));

-- ── Helper: is the current user the creator of a family? ──
create or replace function is_family_creator(fam_id uuid)
returns boolean as $$
  select exists (select 1 from families where id = fam_id and created_by = auth.uid());
$$ language sql security definer stable set search_path = public;

-- ── Helper: is the current user an admin of a family? ──
create or replace function is_family_admin(fam_id uuid)
returns boolean as $$
  select exists (
    select 1 from family_members
    where family_id = fam_id and user_id = auth.uid() and role = 'Admin'
  ) or exists (select 1 from families where id = fam_id and created_by = auth.uid());
$$ language sql security definer stable set search_path = public;

-- ── Families policies ──
drop policy if exists "View own family" on families;
create policy "View own family" on families for select
  using (is_family_member(id) or created_by = auth.uid());

drop policy if exists "Admin update family" on families;
create policy "Admin update family" on families for update
  using (is_family_admin(id));

-- ── Family members policies ──
drop policy if exists "Add members" on family_members;
create policy "Add members" on family_members for insert
  with check (
    auth.uid() is not null and (
      is_family_member(family_id)        -- existing members add relatives
      or is_family_creator(family_id)    -- creator adds their own first row
    )
  );

drop policy if exists "Update members" on family_members;
create policy "Update members" on family_members for update
  using (is_family_member(family_id) or is_family_creator(family_id));

drop policy if exists "Admin delete members" on family_members;
create policy "Admin delete members" on family_members for delete
  using (
    is_family_admin(family_id)
    or user_id = auth.uid()              -- anyone can leave a family
  );

-- ── RPC: preview an invite (works for signed-out visitors) ──
create or replace function get_invite_preview(p_code text)
returns table (id uuid, name text) as $$
  select f.id, f.name from families f
  where upper(f.invite_code) = upper(trim(p_code))
  limit 1;
$$ language sql security definer stable set search_path = public;

grant execute on function get_invite_preview(text) to anon, authenticated;

-- ── RPC: join a family by invite code ──
-- Returns the family plus whether the user was already a member.
-- Claims a placeholder member row (added earlier by an admin with the
-- same email, or same name and no email) instead of creating a duplicate.
create or replace function join_family_by_code(p_code text, p_name text default null)
returns table (
  family_id uuid, family_name text, religion text, region text,
  invite_code text, created_at timestamptz, created_by uuid,
  member_role text, already_member boolean
) as $$
declare
  v_uid uuid := auth.uid();
  v_email text;
  v_family families%rowtype;
  v_member_id uuid;
  v_name text;
  v_try text;
  v_n int := 1;
begin
  if v_uid is null then
    raise exception 'NOT_AUTHENTICATED';
  end if;

  select * into v_family from families f
  where upper(f.invite_code) = upper(trim(p_code)) limit 1;
  if not found then
    raise exception 'INVALID_CODE';
  end if;

  select email into v_email from auth.users where id = v_uid;

  -- Already a member?
  select id into v_member_id from family_members
  where family_members.family_id = v_family.id and user_id = v_uid limit 1;
  if v_member_id is not null then
    return query select v_family.id, v_family.name, v_family.religion, v_family.region,
      v_family.invite_code, v_family.created_at, v_family.created_by,
      (select fm.role from family_members fm where fm.id = v_member_id), true;
    return;
  end if;

  -- Claim a placeholder with the same email
  if v_email is not null then
    select id into v_member_id from family_members
    where family_members.family_id = v_family.id and user_id is null
      and lower(email) = lower(v_email)
    limit 1;
  end if;

  v_name := coalesce(nullif(trim(p_name), ''), split_part(coalesce(v_email, 'Member'), '@', 1));

  -- Or a placeholder with the same name and no email
  if v_member_id is null then
    select id into v_member_id from family_members
    where family_members.family_id = v_family.id and user_id is null
      and lower(name) = lower(v_name) and (email is null or email = '')
    limit 1;
  end if;

  if v_member_id is not null then
    update family_members
      set user_id = v_uid,
          email = coalesce(nullif(email, ''), v_email),
          joined_at = now()
      where id = v_member_id;
  else
    -- Make the name unique within the family (unique (family_id, name))
    v_try := v_name;
    while exists (select 1 from family_members
                  where family_members.family_id = v_family.id and lower(name) = lower(v_try)) loop
      v_n := v_n + 1;
      v_try := v_name || ' (' || v_n || ')';
    end loop;
    insert into family_members (family_id, user_id, name, relation, role, religion, region, email, joined_at)
    values (v_family.id, v_uid, v_try, 'Member',
            case when v_family.created_by = v_uid then 'Admin' else 'Contributor' end,
            coalesce(v_family.religion, 'Hindu'), coalesce(v_family.region, 'India'), v_email, now());
  end if;

  return query select v_family.id, v_family.name, v_family.religion, v_family.region,
    v_family.invite_code, v_family.created_at, v_family.created_by,
    (select fm.role from family_members fm where fm.family_id = v_family.id and fm.user_id = v_uid limit 1),
    false;
end;
$$ language plpgsql security definer set search_path = public;

grant execute on function join_family_by_code(text, text) to authenticated;

-- ── Verify ──
--   select polname from pg_policy where polrelid = 'family_members'::regclass;
--   select * from get_invite_preview('YOUR-CODE');

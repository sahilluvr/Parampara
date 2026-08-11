-- ============================================================
-- MIGRATION: Fix missing unique constraints on family_members
-- and rituals (family_id, name) — THE ROOT CAUSE of members and
-- rituals silently failing to sync to Supabase.
--
-- BACKGROUND: The app's upsert calls (members/page.tsx,
-- lib/autoSync.ts) have always used
--   .upsert(payload, { onConflict: "family_id,name" })
-- but no unique constraint on (family_id, name) ever existed on
-- either table. Without it, Postgres has nothing to match an
-- ON CONFLICT clause against, so every one of these upserts threw
-- an error — caught by a silent try/catch in the app, so members
-- appeared to save (because they're also written to localStorage)
-- but never actually reached the family_members table in Supabase.
-- This is why Vansh Vriksha (which reads members straight from
-- Supabase) showed nothing, and why members were invisible to
-- anyone joining the family from a different device.
--
-- Run this in Supabase SQL Editor. Safe to run multiple times.
-- ============================================================

-- ── Step 1: De-duplicate existing rows before adding the constraint ──
-- If any (family_id, name) pairs already have multiple rows (possible
-- from retried inserts before this bug was caught), keep only the
-- most recently created one per pair and drop the rest. Without this,
-- adding the unique constraint below would fail outright.

with ranked_members as (
  select id, row_number() over (
    partition by family_id, name
    order by joined_at desc nulls last, id desc
  ) as rn
  from family_members
)
delete from family_members
where id in (select id from ranked_members where rn > 1);

with ranked_rituals as (
  select id, row_number() over (
    partition by family_id, name
    order by created_at desc nulls last, id desc
  ) as rn
  from rituals
)
delete from rituals
where id in (select id from ranked_rituals where rn > 1);

-- ── Step 2: Add the unique constraints the app's upsert calls assume ──
-- ON CONFLICT (family_id, name) can now actually match something.

alter table family_members
  drop constraint if exists family_members_family_id_name_key;
alter table family_members
  add constraint family_members_family_id_name_key unique (family_id, name);

alter table rituals
  drop constraint if exists rituals_family_id_name_key;
alter table rituals
  add constraint rituals_family_id_name_key unique (family_id, name);

-- ── Step 3: Verify ──
-- After running, confirm with:
--   select conname from pg_constraint where conrelid = 'family_members'::regclass;
--   select conname from pg_constraint where conrelid = 'rituals'::regclass;
-- You should see family_members_family_id_name_key and
-- rituals_family_id_name_key in the results.

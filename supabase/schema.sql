-- ============================================================
-- PARAMPARA DATABASE SCHEMA
-- Run this entire file in Supabase SQL Editor
-- ============================================================

create extension if not exists "uuid-ossp";

-- FAMILIES
create table families (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  invite_code text unique not null,
  religion text default 'Hindu',
  region text default 'North India',
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

-- FAMILY MEMBERS
create table family_members (
  id uuid primary key default uuid_generate_v4(),
  family_id uuid references families(id) on delete cascade not null,
  user_id uuid references auth.users(id),
  name text not null,
  role text not null default 'Contributor' check (role in ('Admin','Elder','Parent','Contributor','Viewer')),
  relation text,
  religion text,
  region text,
  email text,
  initials text,
  color text default 'saffron',
  birthdate date,
  anniversary date,
  photo_url text,
  -- Vansh Vriksha (family tree) relationship graph — see lib/store.ts
  -- FamilyMember.parentIds/spouseId for the client-side type and how
  -- these are used to lay out a real multi-generation tree.
  parent_ids uuid[] default '{}',
  spouse_id uuid references family_members(id) on delete set null,
  deceased boolean default false,
  joined_at timestamptz default now()
);

-- RITUALS
create table rituals (
  id uuid primary key default uuid_generate_v4(),
  family_id uuid references families(id) on delete cascade not null,
  name text not null,
  subtitle text,
  category text not null,
  religion text[] default array['Hindu'],
  region text,
  language text,
  steps jsonb default '[]',
  samagri jsonb default '[]',
  mantras jsonb default '[]',
  elder_notes text,
  preparation_days int default 7,
  performed_count int default 0,
  is_template boolean default false,
  created_by uuid references auth.users(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- RITUAL PERFORMANCES
create table ritual_performances (
  id uuid primary key default uuid_generate_v4(),
  ritual_id uuid references rituals(id) on delete cascade not null,
  performed_by uuid references auth.users(id),
  performed_date date default current_date,
  notes text,
  created_at timestamptz default now()
);

-- FESTIVALS
create table festivals (
  id uuid primary key default uuid_generate_v4(),
  family_id uuid references families(id) on delete cascade,
  name text not null,
  date date not null,
  religion text default 'Hindu',
  significance text,
  ritual_steps jsonb default '[]',
  food text,
  samagri jsonb default '[]',
  is_custom boolean default false,
  created_at timestamptz default now()
);

-- FESTIVAL REMINDERS
create table festival_reminders (
  id uuid primary key default uuid_generate_v4(),
  festival_id uuid references festivals(id) on delete cascade not null,
  family_id uuid references families(id) on delete cascade not null,
  enabled boolean default true,
  unique(festival_id, family_id)
);

-- MEDIA ITEMS
create table media_items (
  id uuid primary key default uuid_generate_v4(),
  family_id uuid references families(id) on delete cascade not null,
  ritual_id uuid references rituals(id) on delete set null,
  type text not null check (type in ('photo','video','audio')),
  emoji text default '📷',
  label text,
  url text,
  ritual_label text default 'General',
  reactions_count int default 0,
  uploaded_by uuid references auth.users(id),
  created_at timestamptz default now()
);

-- MEDIA REACTIONS
create table media_reactions (
  id uuid primary key default uuid_generate_v4(),
  media_id uuid references media_items(id) on delete cascade not null,
  user_id uuid references auth.users(id) not null,
  created_at timestamptz default now(),
  unique(media_id, user_id)
);

-- AI USAGE LOG
create table ai_usage_log (
  id uuid primary key default uuid_generate_v4(),
  family_id uuid references families(id) on delete cascade,
  user_id uuid references auth.users(id),
  feature text not null,
  tokens_used int,
  created_at timestamptz default now()
);

-- ── RLS ──────────────────────────────────────────────────────
alter table families enable row level security;
alter table family_members enable row level security;
alter table rituals enable row level security;
alter table ritual_performances enable row level security;
alter table festivals enable row level security;
alter table festival_reminders enable row level security;
alter table media_items enable row level security;
alter table media_reactions enable row level security;
alter table ai_usage_log enable row level security;

create or replace function is_family_member(fam_id uuid)
returns boolean as $$
  select exists (select 1 from family_members where family_id = fam_id and user_id = auth.uid());
$$ language sql security definer;

-- Families
create policy "View own family" on families for select using (is_family_member(id));
create policy "Create family" on families for insert with check (auth.uid() = created_by);
create policy "Admin update family" on families for update using (exists (select 1 from family_members where family_id = id and user_id = auth.uid() and role = 'Admin'));

-- Members
create policy "View members" on family_members for select using (is_family_member(family_id));
create policy "Add members" on family_members for insert with check (auth.uid() is not null);
create policy "Admin delete members" on family_members for delete using (exists (select 1 from family_members fm where fm.family_id = family_members.family_id and fm.user_id = auth.uid() and fm.role = 'Admin'));

-- Rituals
create policy "View rituals" on rituals for select using (is_family_member(family_id));
create policy "Create rituals" on rituals for insert with check (is_family_member(family_id));
create policy "Update rituals" on rituals for update using (is_family_member(family_id));
create policy "Delete rituals" on rituals for delete using (is_family_member(family_id));

-- Performances
create policy "View performances" on ritual_performances for select using (exists (select 1 from rituals r where r.id = ritual_id and is_family_member(r.family_id)));
create policy "Log performance" on ritual_performances for insert with check (auth.uid() = performed_by);

-- Festivals
create policy "View festivals" on festivals for select using (family_id is null or is_family_member(family_id));
create policy "Create custom festivals" on festivals for insert with check (family_id is null or is_family_member(family_id));
create policy "Delete custom festivals" on festivals for delete using (is_custom = true and is_family_member(family_id));

-- Festival reminders
create policy "View reminders" on festival_reminders for select using (is_family_member(family_id));
create policy "Set reminders" on festival_reminders for insert with check (is_family_member(family_id));
create policy "Update reminders" on festival_reminders for update using (is_family_member(family_id));
create policy "Delete reminders" on festival_reminders for delete using (is_family_member(family_id));

-- Media
create policy "View media" on media_items for select using (is_family_member(family_id));
create policy "Upload media" on media_items for insert with check (is_family_member(family_id));
create policy "Delete media" on media_items for delete using (uploaded_by = auth.uid() or exists (select 1 from family_members where family_id = media_items.family_id and user_id = auth.uid() and role = 'Admin'));

-- Reactions
create policy "View reactions" on media_reactions for select using (exists (select 1 from media_items m where m.id = media_id and is_family_member(m.family_id)));
create policy "Add reaction" on media_reactions for insert with check (auth.uid() = user_id);
create policy "Remove reaction" on media_reactions for delete using (user_id = auth.uid());

-- AI log
create policy "View AI usage" on ai_usage_log for select using (is_family_member(family_id));
create policy "Log AI usage" on ai_usage_log for insert with check (auth.uid() is not null);

-- ── SEED FESTIVALS ───────────────────────────────────────────
insert into festivals (name, date, religion, significance, ritual_steps, food, samagri, is_custom) values
('Guru Purnima','2026-07-10','Hindu','A sacred day to honor spiritual and academic teachers. Disciples fast, visit their guru, and seek blessings.','["Wake early, take a purifying bath","Visit your guru","Offer flowers, fruits, and dakshina","Fast or eat sattvic food","Evening puja and aarti"]','Sattvic food — fruits, milk, kheer.','["Flowers","Fruits","Dakshina","Agarbatti","Diya"]',false),
('Raksha Bandhan','2026-08-16','Hindu','Sisters tie a sacred thread on their brother''s wrist, symbolizing love and protection.','["Sister performs aarti","Applies tilak","Ties rakhi on right wrist","Brother gives gift","Sweets exchanged"]','Sweets — ladoo, barfi, kheer.','["Rakhi thread","Roli/kumkum","Akshat","Diya","Sweets"]',false),
('Janmashtami','2026-08-23','Hindu','Birth of Lord Krishna at midnight. Devotees fast all day and celebrate at midnight.','["Fast from sunrise","Decorate jhula for Krishna","Sing bhajans all day","At midnight: bathe Krishna idol","Break fast with panchamrit"]','Panchamrit, fruits, makhana after midnight.','["Krishna idol","Jhula","Panchamrit ingredients","Flowers","Conch"]',false),
('Navratri','2026-10-03','Hindu','Nine nights of worship of Goddess Durga with fasting, garba/dandiya, and daily puja.','["Set up Devi altar","Plant jau in a pot","Aarti twice daily for 9 days","Eat vrat foods","Garba/dandiya evenings"]','Sabudana khichdi, kuttu poori, fruits.','["Durga murti","Red chunri","Coconut","Red flowers","Ghee diya"]',false),
('Diwali','2026-10-20','Hindu','Festival of lights with diyas, Lakshmi puja, sweets, and family gatherings.','["Clean and decorate home","Make rangoli","Light diyas at dusk","Lakshmi-Ganesha puja","Exchange sweets and gifts"]','Mithai: kaju katli, ladoo, gulab jamun.','["Clay diyas","Mustard oil","Cotton wicks","Lakshmi-Ganesha idol","Rangoli colors"]',false);

-- ── TRIGGER for updated_at ────────────────────────────────────
create or replace function update_updated_at()
returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

create trigger rituals_updated_at
  before update on rituals
  for each row execute function update_updated_at();

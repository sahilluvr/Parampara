-- ============================================================
-- MIGRATION: Vansh Vriksha (Family Tree) relationship columns
-- Run this in Supabase SQL Editor on the EXISTING production
-- database — schema.sql already has these for fresh installs.
-- Safe to run multiple times (all guarded with IF NOT EXISTS).
-- ============================================================

-- Tree relationship graph
alter table family_members add column if not exists parent_ids uuid[] default '{}';
alter table family_members add column if not exists spouse_id uuid references family_members(id) on delete set null;
alter table family_members add column if not exists deceased boolean default false;

-- These were already being read/written by the app (members/page.tsx)
-- but were missing from the original schema.sql — adding them here too
-- so production matches what the code has assumed all along.
alter table family_members add column if not exists birthdate date;
alter table family_members add column if not exists anniversary date;
alter table family_members add column if not exists photo_url text;

-- Helpful for tree queries (find all children of a person)
create index if not exists idx_family_members_parent_ids on family_members using gin (parent_ids);
create index if not exists idx_family_members_spouse_id on family_members (spouse_id);

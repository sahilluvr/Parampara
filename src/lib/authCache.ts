// ── Fast auth lookups for the browser ───────────────────────────
// supabase.auth.getUser() makes a network round-trip to Supabase Auth every
// time. A single dashboard load was calling it 6+ times (AppShell, plan sync,
// data hooks, sync, families…), adding seconds on slow connections.
//
// getUserFast(): reads the signed-in user from the local session — no network.
//   Safe for deciding *who* is signed in on the client; every database read
//   and write is still verified server-side by Supabase RLS.
// getUserFresh(): real getUser() (fresh app_metadata, e.g. the plan), but
//   de-duplicated so parallel callers share one request.
import type { SupabaseClient, User } from "@supabase/supabase-js";

type Res = { data: { user: User | null }; error: null };
let fast: { t: number; p: Promise<Res> } | null = null;
let fresh: { t: number; p: Promise<Res> } | null = null;
let listening = false;

function listen(sb: SupabaseClient) {
  if (listening) return;
  listening = true;
  sb.auth.onAuthStateChange(() => { fast = null; fresh = null; });
}

export function getUserFast(sb: SupabaseClient): Promise<Res> {
  listen(sb);
  if (fast && Date.now() - fast.t < 60_000) return fast.p;
  const p = sb.auth.getSession()
    .then(({ data }) => ({ data: { user: data.session?.user ?? null }, error: null as null }))
    .catch(() => ({ data: { user: null }, error: null as null }));
  fast = { t: Date.now(), p };
  return p;
}

export function getUserFresh(sb: SupabaseClient): Promise<Res> {
  listen(sb);
  if (fresh && Date.now() - fresh.t < 15_000) return fresh.p;
  const p = sb.auth.getUser()
    .then(({ data }) => ({ data: { user: data.user ?? null }, error: null as null }))
    .catch(() => ({ data: { user: null }, error: null as null }));
  fresh = { t: Date.now(), p };
  return p;
}

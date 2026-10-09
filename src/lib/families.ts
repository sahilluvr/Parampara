import { getUserFast } from "./authCache";
// ── Multi-Family Space Manager ────────────────────────────────
// Handles all family space operations in localStorage
// Works without Supabase — upgrade to real DB later

export type FamilySpace = {
  id: string;
  name: string;
  religion: string;
  region: string;
  inviteCode: string;
  role: "Admin" | "Member"; // current user's role
  createdAt: string;
  joinedAt: string;
  photoUrl?: string;
  memberCount: number;
  ritualCount: number;
};

const KEY_SPACES   = "parampara_family_spaces";
const KEY_ACTIVE   = "parampara_active_family_id";
const KEY_PLAN     = "parampara_plan";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** True for families that exist in Supabase (legacy local-only spaces use ids like "family-default"). */
export function isRealFamilyId(id: string | null | undefined): id is string {
  return !!id && UUID_RE.test(id);
}

export function newUuid(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

/** Normalise what a user typed/pasted (code or full invite link) into a stored invite code. */
export function normalizeInviteCode(raw: string | null | undefined): string {
  let s = String(raw ?? "").trim();
  if (!s) return "";
  if (s.includes("code=")) {
    try { s = new URL(s.startsWith("http") ? s : `https://x.y/${s.replace(/^\/+/, "")}`).searchParams.get("code") || s; } catch { /* keep */ }
  }
  return s.replace(/\s+/g, "").toUpperCase().slice(0, 40);
}

export function generateInviteCode(familyName: string): string {
  const letters = familyName.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 4) || "FMLY";
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${letters}-${rand}`;
}

// ── Per-account local state ──
// All of this lives in localStorage, which is per-BROWSER, not per-account.
// When a different person signs in on the same device (very common when
// family members test an invite on a parent's phone), the previous person's
// family spaces leaked in — invite links then said "already a member", or
// joins landed in the wrong family. Call this whenever we learn who's signed in.
const ACCOUNT_SCOPED_KEYS = [
  KEY_SPACES, KEY_ACTIVE, KEY_PLAN, "parampara_plan_expires_at",
  "parampara_family_id", "parampara_family_name", "parampara_family_settings", "parampara_family_photo",
  "parampara_members", "parampara_rituals", "parampara_members_default", "parampara_rituals_default",
  "parampara_members_local_modified", "parampara_last_push", "parampara_last_sync",
  "parampara_notifications", "parampara_user_name", "parampara_user_email", "parampara_user_id",
];

export function clearAccountLocalState() {
  try {
    for (const k of ACCOUNT_SCOPED_KEYS) localStorage.removeItem(k);
    for (const k of Object.keys(localStorage)) {
      if (k.startsWith("parampara_members_") || k.startsWith("parampara_rituals_")) localStorage.removeItem(k);
    }
  } catch { /* ignore */ }
}

/** Returns true if local state was reset because a different account signed in. */
export function ensureLocalOwner(userId: string | null | undefined): boolean {
  if (!userId) return false;
  try {
    const prev = localStorage.getItem("parampara_owner_id");
    let reset = false;
    if (prev && prev !== userId) { clearAccountLocalState(); reset = true; }
    localStorage.setItem("parampara_owner_id", userId);
    return reset;
  } catch { return false; }
}

// ── Get all family spaces ──
export function getAllFamilies(): FamilySpace[] {
  try {
    const raw = localStorage.getItem(KEY_SPACES);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

// ── Get active family ──
export function getActiveFamily(): FamilySpace | null {
  const all = getAllFamilies();
  if (!all.length) return null;
  const activeId = localStorage.getItem(KEY_ACTIVE);
  return all.find(f => f.id === activeId) || all[0];
}

// ── Set active family ──
export function setActiveFamily(id: string) {
  localStorage.setItem(KEY_ACTIVE, id);
  // Keep the legacy keys in step — several pages and sync helpers still read
  // parampara_family_id / parampara_family_name directly. Previously these
  // were left pointing at the OLD family after a switch or a join.
  if (isRealFamilyId(id)) localStorage.setItem("parampara_family_id", id);
  const f = getAllFamilies().find(x => x.id === id);
  if (f) localStorage.setItem("parampara_family_name", f.name);
}

// ── Create new family space ──
export async function createFamily(name: string, religion: string, region: string): Promise<FamilySpace> {
  const plan = localStorage.getItem(KEY_PLAN) || "free";
  const all = getAllFamilies();
  const limit = plan === "pro" ? Infinity : 2;
  if (all.length >= limit) throw new Error(`Free plan allows up to 2 family spaces. Upgrade to Pro for unlimited families.`);

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Service unavailable. Please try again in a moment.");
  }

  const { createBrowserClient } = await import("@supabase/ssr");
  const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
  const { data: { user } } = await getUserFast(sb as unknown as import("@supabase/supabase-js").SupabaseClient);
  if (!user) throw new Error("You must be signed in to create a family space.");

  // Generate the id client-side so we don't need insert().select() — that
  // select ran BEFORE the creator's member row existed and was blocked by
  // the "View own family" RLS policy. Retry once on an invite-code clash.
  const id = newUuid();
  let inviteCode = generateInviteCode(name);
  let error: { message?: string; code?: string } | null = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    ({ error } = await sb.from("families").insert({
      id, name, invite_code: inviteCode, religion, region, created_by: user.id,
    }));
    if (!error) break;
    if (error.code === "23505" && /invite_code/.test(error.message || "")) { inviteCode = generateInviteCode(name); continue; }
    break;
  }

  if (error) {
    console.error("createFamily: Supabase insert failed", error);
    throw new Error(
      error?.message?.includes("row-level security") || error?.code === "42501"
        ? "Permission error creating family space. Please contact support — this is a configuration issue, not something you did wrong."
        : `Could not create family space: ${error?.message || "unknown error"}. Please try again.`
    );
  }

  // Add the admin's own family_members row for this new family
  const { error: memberErr } = await sb.from("family_members").insert({
    family_id: id, user_id: user.id,
    name: user.user_metadata?.full_name || user.user_metadata?.name || localStorage.getItem("parampara_user_name") || user.email?.split("@")[0] || "Admin",
    relation: "Self", role: "Admin", religion, region, email: user.email,
    joined_at: new Date().toISOString(),
  });
  if (memberErr) {
    console.warn("createFamily: family created but admin family_members row failed", memberErr);
    // Non-fatal — the family exists and lookups fall back to families.created_by.
  }

  const space: FamilySpace = {
    id, name, religion, region,
    inviteCode,
    role: "Admin",
    createdAt: new Date().toISOString(),
    joinedAt: new Date().toISOString(),
    memberCount: 1,
    ritualCount: 0,
  };
  localStorage.setItem(KEY_SPACES, JSON.stringify([...all, space]));
  setActiveFamily(space.id);
  return space;
}

// ── Join family via invite code ──
// The actual join runs server-side (/api/family/join) because RLS stops a
// non-member reading the family row — the old client-side lookup therefore
// failed for EVERY invitee with "Invalid invite code".
export type JoinResult = FamilySpace & { alreadyMember: boolean };

export async function joinFamily(inviteCode: string, familyNameHint = "", displayName?: string): Promise<JoinResult> {
  const code = normalizeInviteCode(inviteCode);
  if (!code) throw new Error("Please enter an invite code.");

  let res: Response;
  try {
    res = await fetch("/api/family/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ code, name: displayName || localStorage.getItem("parampara_user_name") || undefined }),
    });
  } catch {
    throw new Error("Network error — please check your connection and try again.");
  }

  let data: { success?: boolean; alreadyMember?: boolean; error?: string; family?: { id: string; name: string; religion: string; region: string; inviteCode: string; createdAt?: string; role: "Admin" | "Member" } } = {};
  try { data = await res.json(); } catch { /* non-JSON */ }

  if (!res.ok || !data.success || !data.family) {
    const err = new Error(data.error || "Could not join this family. Please try again.");
    (err as Error & { status?: number }).status = res.status;
    throw err;
  }

  const f = data.family;
  registerFamilySpace({
    id: f.id,
    name: f.name || familyNameHint || "Family Space",
    inviteCode: f.inviteCode || code,
    religion: f.religion, region: f.region,
    role: f.role,
    createdAt: f.createdAt || undefined,
  });

  return { ...(getAllFamilies().find(x => x.id === f.id) as FamilySpace), alreadyMember: !!data.alreadyMember };
}

// ── Update family ──
export function updateFamily(id: string, updates: Partial<FamilySpace>) {
  const all = getAllFamilies();
  const updated = all.map(f => f.id === id ? { ...f, ...updates } : f);
  localStorage.setItem(KEY_SPACES, JSON.stringify(updated));
  // Sync name
  const f = updated.find(x => x.id === id);
  if (f && localStorage.getItem(KEY_ACTIVE) === id) {
    localStorage.setItem("parampara_family_name", f.name);
  }
}

// ── Delete family ──
export function deleteFamily(id: string) {
  const all = getAllFamilies().filter(f => f.id !== id);
  localStorage.setItem(KEY_SPACES, JSON.stringify(all));
  // Clear family-specific data
  localStorage.removeItem(`parampara_members_${id}`);
  localStorage.removeItem(`parampara_rituals_${id}`);
  if (localStorage.getItem("parampara_family_id") === id) localStorage.removeItem("parampara_family_id");
  // Switch to another family (only if the removed one was active)
  const activeId = localStorage.getItem(KEY_ACTIVE);
  if (all.length > 0) {
    if (!activeId || activeId === id || !all.some(f => f.id === activeId)) setActiveFamily(all[0].id);
  } else {
    localStorage.removeItem(KEY_ACTIVE);
    localStorage.removeItem("parampara_family_name");
  }
  window.dispatchEvent(new CustomEvent("parampara_families_changed"));
}

// ── Get family-specific storage key ──
export function familyKey(base: string, familyId?: string): string | null {
  const id = familyId || localStorage.getItem(KEY_ACTIVE);
  if (!id) return null;
  return `${base}_${id}`;
}

// ── Check if can create more families ──
export function canCreateFamily(): { allowed: boolean; current: number; limit: number } {
  const plan = localStorage.getItem(KEY_PLAN) || "free";
  const current = getAllFamilies().length;
  const limit = plan === "pro" ? 999 : 2;
  return { allowed: current < limit, current, limit };
}

// ── Generate shareable invite link ──
export function getInviteLink(family: FamilySpace): string {
  // Always share the production domain — links copied from a preview or
  // localhost build were being sent to family members and didn't work.
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const base = /ourparampara\.com$/.test(origin.replace(/^https?:\/\//, "")) ? origin : "https://www.ourparampara.com";
  return `${base}/join?code=${encodeURIComponent(family.inviteCode)}&family=${encodeURIComponent(family.name)}`;
}

/** Whether a family can actually be shared (exists in Supabase with a real code). */
export function canShareInvite(family: FamilySpace | null | undefined): boolean {
  return !!family && isRealFamilyId(family.id) && !!family.inviteCode;
}

// ── Migrate legacy single-family data ──
// Only runs if user had a named family AND actual data (members/rituals)
// Fresh new users get NO default family — they must create one
export function migrateLegacyData() {
  const all = getAllFamilies();
  if (all.length > 0) return; // already migrated or already has a family

  const legacyName = localStorage.getItem("parampara_family_name");
  const legacyMembers = localStorage.getItem("parampara_members");
  const legacyRituals = localStorage.getItem("parampara_rituals");

  // Only migrate if there was REAL data — don't create phantom family for new users
  const hasRealData = (legacyMembers && legacyMembers !== "[]")
    || (legacyRituals && legacyRituals !== "[]");

  if (!legacyName || !hasRealData) return;

  // Migrate real legacy data to a proper family space
  const space: FamilySpace = {
    id: "family-default",
    name: legacyName,
    religion: "Hindu",
    region: "Chandigarh",
    inviteCode: generateInviteCode(legacyName),
    role: "Admin",
    createdAt: new Date().toISOString(),
    joinedAt: new Date().toISOString(),
    memberCount: 1,
    ritualCount: 0,
  };
  localStorage.setItem(KEY_SPACES, JSON.stringify([space]));
  localStorage.setItem(KEY_ACTIVE, space.id);
  if (legacyRituals) localStorage.setItem(`parampara_rituals_${space.id}`, legacyRituals);
  if (legacyMembers) localStorage.setItem(`parampara_members_${space.id}`, legacyMembers);
}

// ── Backfill: for existing users signed up before family spaces existed ──
// If no space is registered locally (so getActiveFamily() returns null),
// fetch the user's real families from Supabase and register them so invite
// codes / links work correctly.
export async function backfillFamilySpace(): Promise<FamilySpace | null> {
  const existing = getActiveFamily();
  if (existing) return existing;
  await backfillAllFamilySpaces();
  const preferred = localStorage.getItem("parampara_family_id");
  const all = getAllFamilies();
  const pick = all.find(f => f.id === preferred) || all[0];
  if (pick) setActiveFamily(pick.id);
  return pick || null;
}

// ── Sync the local family-space list with Supabase ──
// • adds families the user created or belongs to that aren't registered locally
// • refreshes name / invite code / role of ones that are (a stale local invite
//   code was a major reason shared links said "Invalid invite code")
// • drops families the user no longer belongs to (left, removed, or deleted)
// Legacy local-only spaces (non-UUID ids) are left alone.
let _backfillInFlight: Promise<FamilySpace[]> | null = null;

export function backfillAllFamilySpaces(): Promise<FamilySpace[]> {
  if (_backfillInFlight) return _backfillInFlight;
  _backfillInFlight = _backfillAll().finally(() => { _backfillInFlight = null; });
  return _backfillInFlight;
}

async function _backfillAll(): Promise<FamilySpace[]> {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!SUPABASE_URL || !SUPABASE_KEY) return getAllFamilies();

  try {
    const { createBrowserClient } = await import("@supabase/ssr");
    const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
    const { data: { user } } = await getUserFast(sb as unknown as import("@supabase/supabase-js").SupabaseClient);
    if (!user) return getAllFamilies();

    // 1. Families this user is linked to (family_members rows)
    const { data: memberRows, error: mErr } = await sb.from("family_members").select("family_id, role").eq("user_id", user.id);
    // 2. Families this user created (covers admins who may lack a member row)
    const { data: createdRows, error: cErr } = await sb.from("families").select("id").eq("created_by", user.id);
    if (mErr || cErr) return getAllFamilies(); // don't prune on a failed query

    const roleByFamily = new Map<string, string>();
    for (const r of memberRows || []) if (r.family_id) roleByFamily.set(r.family_id, r.role);
    const allIds = Array.from(new Set([...roleByFamily.keys(), ...(createdRows || []).map(r => r.id)]));

    let familyRows: Record<string, string | null>[] = [];
    if (allIds.length) {
      const { data, error } = await sb.from("families").select("*").in("id", allIds);
      if (error) return getAllFamilies();
      familyRows = data || [];
    }
    const rowById = new Map(familyRows.map(r => [r.id as string, r]));

    const existing = getAllFamilies();
    const next: FamilySpace[] = [];
    // Keep local order; refresh or drop
    for (const f of existing) {
      if (!isRealFamilyId(f.id)) { next.push(f); continue; }
      const row = rowById.get(f.id);
      if (!row) {
        // A joined family that's gone means the user left / was removed / it was
        // deleted. Admin spaces are kept: a creator without a member row can't
        // always read their family under older RLS policies, so absence there
        // isn't proof it's gone.
        if (f.role === "Admin") next.push(f);
        continue;
      }
      next.push({
        ...f,
        name: (row.name as string) || f.name,
        inviteCode: (row.invite_code as string) || f.inviteCode,
        religion: (row.religion as string) || f.religion,
        region: (row.region as string) || f.region,
        role: row.created_by === user.id || roleByFamily.get(f.id) === "Admin" ? "Admin" : "Member",
      });
    }
    // Add missing
    for (const row of familyRows) {
      const id = row.id as string;
      if (next.some(f => f.id === id)) continue;
      next.push({
        id,
        name: (row.name as string) || "Family Space",
        religion: (row.religion as string) || "Hindu",
        region: (row.region as string) || "India",
        inviteCode: row.invite_code as string,
        role: row.created_by === user.id || roleByFamily.get(id) === "Admin" ? "Admin" : "Member",
        createdAt: (row.created_at as string) || new Date().toISOString(),
        joinedAt: new Date().toISOString(),
        memberCount: 1,
        ritualCount: 0,
      });
    }

    localStorage.setItem(KEY_SPACES, JSON.stringify(next));
    const activeId = localStorage.getItem(KEY_ACTIVE);
    if (!next.some(f => f.id === activeId)) {
      const preferred = localStorage.getItem("parampara_family_id");
      const pick = next.find(f => f.id === preferred) || next[0];
      if (pick) setActiveFamily(pick.id);
      else {
        localStorage.removeItem(KEY_ACTIVE);
        localStorage.removeItem("parampara_family_id");
      }
    } else if (activeId) {
      // refresh the cached name in case it was renamed
      setActiveFamily(activeId);
    }
    window.dispatchEvent(new CustomEvent("parampara_families_changed"));
    return next;
  } catch (e) {
    console.warn("backfillAllFamilySpaces failed:", e);
    return getAllFamilies();
  }
}

// ── Register (or refresh) one family space locally and make it active ──
// Used after signup / join so the invite code shown in the app always
// matches the real Supabase families.invite_code.
export function registerFamilySpace(opts: {
  id: string;
  name: string;
  inviteCode: string;
  religion?: string;
  region?: string;
  role: "Admin" | "Member";
  createdAt?: string;
  activate?: boolean;
}) {
  const all = getAllFamilies();
  const prev = all.find(f => f.id === opts.id);
  const space: FamilySpace = {
    id: opts.id,
    name: opts.name,
    religion: opts.religion || prev?.religion || "Hindu",
    region: opts.region || prev?.region || "India",
    inviteCode: opts.inviteCode,
    role: opts.role,
    createdAt: prev?.createdAt || opts.createdAt || new Date().toISOString(),
    joinedAt: prev?.joinedAt || new Date().toISOString(),
    photoUrl: prev?.photoUrl,
    memberCount: prev?.memberCount ?? 1,
    ritualCount: prev?.ritualCount ?? 0,
  };
  const updated = prev ? all.map(f => f.id === opts.id ? space : f) : [...all, space];
  localStorage.setItem(KEY_SPACES, JSON.stringify(updated));
  if (opts.activate !== false) setActiveFamily(space.id);
  window.dispatchEvent(new CustomEvent("parampara_families_changed"));
}

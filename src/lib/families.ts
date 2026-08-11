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

export function generateInviteCode(familyName: string): string {
  const letters = familyName.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 4) || "FMLY";
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${letters}-${rand}`;
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
  // Sync family name for legacy components
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
  const inviteCode = generateInviteCode(name);

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Service unavailable. Please try again in a moment.");
  }

  const { createBrowserClient } = await import("@supabase/ssr");
  const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
  const { data: { user } } = await sb.auth.getUser();
  if (!user) throw new Error("You must be signed in to create a family space.");

  const { data: familyRow, error } = await sb.from("families").insert({
    name, invite_code: inviteCode, religion, region, created_by: user.id,
  }).select().single();

  if (error || !familyRow?.id) {
    console.error("createFamily: Supabase insert failed", error);
    throw new Error(
      error?.message?.includes("row-level security") || error?.code === "42501"
        ? "Permission error creating family space. Please contact support — this is a configuration issue, not something you did wrong."
        : `Could not create family space: ${error?.message || "unknown error"}. Please try again.`
    );
  }

  const id = familyRow.id;

  // Add the admin's own family_members row for this new family
  const { error: memberErr } = await sb.from("family_members").insert({
    family_id: id, user_id: user.id, name: user.user_metadata?.name || user.email?.split("@")[0] || "Admin",
    relation: "Self", role: "Admin", religion, region, email: user.email,
    joined_at: new Date().toISOString(),
  });
  if (memberErr) {
    console.warn("createFamily: family created but admin family_members row failed", memberErr);
    // Non-fatal — the family exists and getOrCreateFamily/getSupabaseFamily
    // fall back to families.created_by, so this is recoverable.
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
  const updated = [...all, space];
  localStorage.setItem(KEY_SPACES, JSON.stringify(updated));
  setActiveFamily(space.id);
  // IMPORTANT: switch parampara_family_id to the new family so that
  // getSupabaseFamily()/syncMemberToCloud() and other Supabase lookups
  // (which key off this value, not KEY_SPACES) resolve to the new family.
  localStorage.setItem("parampara_family_id", space.id);
  localStorage.setItem("parampara_family_name", space.name);
  return space;
}

// ── Join family via invite code (writes to Supabase) ──
export async function joinFamily(inviteCode: string, familyNameHint: string): Promise<FamilySpace> {
  const all = getAllFamilies();
  // Already a member locally?
  const existingLocal = all.find(f => f.inviteCode === inviteCode);
  if (existingLocal) throw new Error("You are already a member of this family.");

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Service unavailable. Please try again later.");

  const { createBrowserClient } = await import("@supabase/ssr");
  const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);

  const { data: { user } } = await sb.auth.getUser();
  if (!user) throw new Error("You must be signed in to join a family.");

  // 1. Find the real family by invite code
  const { data: familyRow, error: famErr } = await sb
    .from("families")
    .select("*")
    .eq("invite_code", inviteCode)
    .maybeSingle();

  if (famErr || !familyRow) {
    throw new Error("Invalid invite code. Please check and try again.");
  }

  // 2. Check if already a Supabase member
  const { data: existingMember } = await sb
    .from("family_members")
    .select("id")
    .eq("family_id", familyRow.id)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existingMember) throw new Error("You are already a member of this family.");

  // 3. Insert family_members row for this user
  const userName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split("@")[0] || "New Member";
  const { error: insertErr } = await sb.from("family_members").insert({
    family_id: familyRow.id,
    user_id: user.id,
    name: userName,
    relation: "Member",
    role: "Contributor",
    religion: familyRow.religion || "Hindu",
    region: familyRow.region || "India",
    joined_at: new Date().toISOString(),
  });

  if (insertErr) {
    console.error("Join insert error:", insertErr);
    throw new Error("Could not join family. Please try again.");
  }

  // 4. Add to local family spaces list
  const space: FamilySpace = {
    id: familyRow.id,
    name: familyRow.name || familyNameHint || "Family Space",
    religion: familyRow.religion || "Hindu",
    region: familyRow.region || "India",
    inviteCode,
    role: "Member",
    createdAt: familyRow.created_at || new Date().toISOString(),
    joinedAt: new Date().toISOString(),
    memberCount: 1,
    ritualCount: 0,
  };
  const updated = [...all, space];
  localStorage.setItem(KEY_SPACES, JSON.stringify(updated));
  setActiveFamily(space.id);

  // 5. Notify the inviter (best-effort, fire-and-forget via API)
  try {
    fetch("/api/notify-join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ familyId: familyRow.id, joinerName: userName, familyName: space.name }),
    }).catch(() => {});
  } catch {}

  return space;
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
  // Switch to another family
  if (all.length > 0) setActiveFamily(all[0].id);
  else localStorage.removeItem(KEY_ACTIVE);
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
  const base = typeof window !== "undefined" ? window.location.origin : "https://www.ourparampara.com";
  return `${base}/join?code=${family.inviteCode}&family=${encodeURIComponent(family.name)}`;
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
// If localStorage has parampara_family_id but no registered space (so
// getActiveFamily() returns null), fetch the real family from Supabase
// and register it so invite codes / links work correctly.
export async function backfillFamilySpace(): Promise<FamilySpace | null> {
  const existing = getActiveFamily();
  if (existing) return existing;

  const familyId = localStorage.getItem("parampara_family_id");
  if (!familyId || familyId === "local") return null;

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!SUPABASE_URL || !SUPABASE_KEY) return null;

  try {
    const { createBrowserClient } = await import("@supabase/ssr");
    const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return null;

    const { data: familyRow } = await sb.from("families").select("*").eq("id", familyId).maybeSingle();
    if (!familyRow) return null;

    // Determine role: Admin if user created this family, else Member
    const role: "Admin" | "Member" = familyRow.created_by === user.id ? "Admin" : "Member";

    registerFamilySpace({
      id: familyRow.id,
      name: familyRow.name,
      inviteCode: familyRow.invite_code,
      religion: familyRow.religion, region: familyRow.region,
      role,
    });
    return getActiveFamily();
  } catch (e) {
    console.warn("backfillFamilySpace failed:", e);
    return null;
  }
}

// ── Backfill ALL family spaces a user belongs to ──
// Fetches every family the user created or is a member of from Supabase
// and registers any that are missing from local KEY_SPACES, without
// disturbing the existing list or the currently-active family.
// Use this on /spaces page load so users with multiple families (created
// across devices, or via the "Aggarwal" / "MLA" multi-family scenario)
// see all of them, not just whichever one happened to be registered locally.
export async function backfillAllFamilySpaces(): Promise<FamilySpace[]> {
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!SUPABASE_URL || !SUPABASE_KEY) return getAllFamilies();

  try {
    const { createBrowserClient } = await import("@supabase/ssr");
    const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return getAllFamilies();

    const existing = getAllFamilies();
    const existingIds = new Set(existing.map(f => f.id));
    const toAdd: FamilySpace[] = [];

    // 1. Families this user is a member of (family_members rows)
    const { data: memberRows } = await sb.from("family_members").select("family_id").eq("user_id", user.id);
    const memberFamilyIds = (memberRows || []).map(r => r.family_id).filter(Boolean);

    // 2. Families this user created (covers admins who may lack a family_members row)
    const { data: createdRows } = await sb.from("families").select("id").eq("created_by", user.id);
    const createdFamilyIds = (createdRows || []).map(r => r.id);

    const allFamilyIds = Array.from(new Set([...memberFamilyIds, ...createdFamilyIds]))
      .filter(id => !existingIds.has(id));

    if (allFamilyIds.length === 0) return existing;

    const { data: familyRows } = await sb.from("families").select("*").in("id", allFamilyIds);
    for (const familyRow of familyRows || []) {
      const role: "Admin" | "Member" = familyRow.created_by === user.id ? "Admin" : "Member";
      toAdd.push({
        id: familyRow.id,
        name: familyRow.name,
        religion: familyRow.religion || "Hindu",
        region: familyRow.region || "India",
        inviteCode: familyRow.invite_code,
        role,
        createdAt: familyRow.created_at || new Date().toISOString(),
        joinedAt: new Date().toISOString(),
        memberCount: 1,
        ritualCount: 0,
      });
    }

    if (toAdd.length === 0) return existing;

    const updated = [...existing, ...toAdd];
    localStorage.setItem(KEY_SPACES, JSON.stringify(updated));
    // If no active family was set, default to the first one
    if (!localStorage.getItem(KEY_ACTIVE) && updated.length > 0) {
      localStorage.setItem(KEY_ACTIVE, updated[0].id);
    }
    return updated;
  } catch (e) {
    console.warn("backfillAllFamilySpaces failed:", e);
    return getAllFamilies();
  }
}
// Used during signup so the invite code shown in family-invite emails
// always matches the real Supabase families.invite_code.
export function registerFamilySpace(opts: {
  id: string;
  name: string;
  inviteCode: string;
  religion?: string;
  region?: string;
  role: "Admin" | "Member";
}) {
  const all = getAllFamilies().filter(f => f.id !== opts.id); // avoid duplicates
  const space: FamilySpace = {
    id: opts.id,
    name: opts.name,
    religion: opts.religion || "Hindu",
    region: opts.region || "India",
    inviteCode: opts.inviteCode,
    role: opts.role,
    createdAt: new Date().toISOString(),
    joinedAt: new Date().toISOString(),
    memberCount: 1,
    ritualCount: 0,
  };
  const updated = [...all, space];
  localStorage.setItem(KEY_SPACES, JSON.stringify(updated));
  localStorage.setItem(KEY_ACTIVE, space.id);
}

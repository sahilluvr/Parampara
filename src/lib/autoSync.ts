// ── Cloud Sync ────────────────────────────────────────────────
// Bidirectional sync between localStorage and Supabase
// Runs on every dashboard + members page load

import { getUserFast } from "@/lib/authCache";
import { getActiveFamily, isRealFamilyId } from "./families";
import { normalizeCloudMember } from "./memberNormalize";

async function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  const { createBrowserClient } = await import("@supabase/ssr");
  return createBrowserClient(url, key);
}

// Resolve which Supabase family to sync with. ONLY the active family — the
// old version fell back to "any family the user is in" and even created new
// families, which pushed one family's members into another.
async function resolveFamily(sb: Awaited<ReturnType<typeof getSupabase>>, userId: string, activeFamilyId?: string | null) {
  if (!sb || !isRealFamilyId(activeFamilyId)) return null;
  try {
    const { data: am } = await sb.from("family_members").select("family_id").eq("user_id", userId).eq("family_id", activeFamilyId).maybeSingle();
    if (am?.family_id) return am.family_id as string;
    const { data: af } = await sb.from("families").select("id").eq("id", activeFamilyId).eq("created_by", userId).maybeSingle();
    if (af?.id) return af.id as string;
  } catch { /* fall through */ }
  return null;
}

// ── PUSH local data → Supabase ─────────────────────────────────
export async function autoSyncToCloud() {
  const sb = await getSupabase();
  if (!sb) return;

  // Throttle: once per 3 minutes max
  const lastSync = localStorage.getItem("parampara_last_push");
  if (lastSync && Date.now() - parseInt(lastSync) < 180000) return;

  try {
    const { data: { user } } = await getUserFast(sb as unknown as import("@supabase/supabase-js").SupabaseClient);
    if (!user) return;

    // Only the ACTIVE family's local data. Previously every
    // parampara_members_* / parampara_rituals_* key (every family on this
    // device) was merged and pushed into the active family.
    const activeFamilyId = getActiveFamily()?.id || null;
    if (!isRealFamilyId(activeFamilyId)) return;
    const read = (k: string): Record<string,unknown>[] => {
      try { const v = JSON.parse(localStorage.getItem(k) || "[]"); return Array.isArray(v) ? v : []; } catch { return []; }
    };
    const members = read(`parampara_members_${activeFamilyId}`);
    const rituals = read(`parampara_rituals_${activeFamilyId}`);
    if (members.length === 0 && rituals.length === 0) return;

    const fid = await resolveFamily(sb, user.id, activeFamilyId);
    if (!fid) return;

    // Upsert members (skip duplicates)
    const uniqueMembers = members.filter((m,i,a)=>a.findIndex(x=>x.name===m.name)===i);
    let memberSyncFailures = 0;
    for (const m of uniqueMembers) {
      if (!m.name) continue;
      try {
        const { error } = await sb.from("family_members").upsert({ family_id:fid, name:m.name, role:m.role||"Contributor", relation:m.relation||null, email:m.email||null }, { onConflict:"family_id,name", ignoreDuplicates:true });
        // (ignoreDuplicates: existing rows — including joined users — are never modified)
        if (error) { memberSyncFailures++; console.warn(`autoSync: member "${m.name}" upsert failed:`, error.message); }
      } catch (e) { memberSyncFailures++; console.warn(`autoSync: member "${m.name}" upsert threw:`, e); }
    }

    // Upsert rituals
    const uniqueRituals = rituals.filter((r,i,a)=>a.findIndex(x=>x.name===r.name)===i);
    let ritualSyncFailures = 0;
    for (const r of uniqueRituals) {
      if (!r.name) continue;
      try {
        const { error } = await sb.from("rituals").upsert({ family_id:fid, name:r.name, subtitle:r.subtitle||null, category:r.category||"General", religion:Array.isArray(r.religion)?r.religion:[r.religion||"Hindu"], steps:Array.isArray(r.steps)?r.steps:[], samagri:Array.isArray(r.samagri)?r.samagri:[], created_by:user.id }, { onConflict:"family_id,name", ignoreDuplicates:true });
        if (error) { ritualSyncFailures++; console.warn(`autoSync: ritual "${r.name}" upsert failed:`, error.message); }
      } catch (e) { ritualSyncFailures++; console.warn(`autoSync: ritual "${r.name}" upsert threw:`, e); }
    }

    // These failures were previously completely invisible (bare `catch {}`)
    // — this is the exact bug that let the missing family_id+name unique
    // constraint go undetected. We don't toast here since autoSync runs as
    // a silent background push, but logging means it now shows up in the
    // browser console and any error-tracking tool, instead of vanishing.
    if (memberSyncFailures > 0 || ritualSyncFailures > 0) {
      console.error(`autoSync: ${memberSyncFailures} member(s) and ${ritualSyncFailures} ritual(s) failed to sync to cloud. Run supabase/migrations/002_fix_member_sync_constraint.sql if this persists.`);
    }

    localStorage.setItem("parampara_last_push", String(Date.now()));
  } catch (err) { console.warn("Push to cloud failed:", err); }
}

// ── PULL Supabase data → localStorage ──────────────────────────
export async function pullFromCloud(activeId: string): Promise<boolean> {
  const sb = await getSupabase();
  if (!sb) return false;

  try {
    const { data: { user } } = await getUserFast(sb as unknown as import("@supabase/supabase-js").SupabaseClient);
    if (!user) return false;

    // Only ever pull the active family. Falling back to "any family" wrote a
    // different family's members under this family's key.
    const fid = await resolveFamily(sb, user.id, activeId);
    if (!fid) return false;
    const { data: fRow } = await sb.from("families").select("id,name,religion,region").eq("id", fid).maybeSingle();

    // Pull members — skip if locally modified (modified flag may be a future timestamp)
    const localModified = localStorage.getItem("parampara_members_local_modified");
    const skipPull = !!localModified && parseInt(localModified) > Date.now(); // short guard while a local write is in flight

    if (!skipPull) {
      const { data: cloudMembers } = await sb.from("family_members").select("*").eq("family_id", fid);
      if (cloudMembers && cloudMembers.length > 0) {
        localStorage.setItem(`parampara_members_${activeId}`, JSON.stringify(cloudMembers.map(normalizeCloudMember)));
      }
    }

    // Pull rituals
    const { data: cloudRituals } = await sb.from("rituals").select("*").eq("family_id", fid);
    if (cloudRituals && cloudRituals.length > 0) {
      localStorage.setItem(`parampara_rituals_${activeId}`, JSON.stringify(cloudRituals));
    }

    // Sync family name
    if (fRow?.name) localStorage.setItem("parampara_family_name", fRow.name);

    // Check what ended up in localStorage
    const hasMembers = !!(localStorage.getItem(`parampara_members_${activeId}`));
    const hasRituals = !!(localStorage.getItem(`parampara_rituals_${activeId}`));
    return hasMembers || hasRituals;
  } catch (err) {
    console.warn("Pull from cloud failed:", err);
    return false;
  }
}

// ── FULL SYNC: pull first, then push ────────────────────────────
export async function fullSync(activeId: string) {
  const pulled = await pullFromCloud(activeId);
  // If nothing in cloud, push local data up
  if (!pulled) await autoSyncToCloud();
  else {
    // Also push in background to keep cloud updated
    setTimeout(() => autoSyncToCloud(), 2000);
  }
}

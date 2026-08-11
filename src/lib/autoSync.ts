// ── Cloud Sync ────────────────────────────────────────────────
// Bidirectional sync between localStorage and Supabase
// Runs on every dashboard + members page load

import { getActiveFamily } from "./families";

async function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  const { createBrowserClient } = await import("@supabase/ssr");
  return createBrowserClient(url, key);
}

async function getOrCreateFamily(sb: Awaited<ReturnType<typeof getSupabase>>, userId: string, familyName: string, activeFamilyId?: string | null) {
  if (!sb) return null;
  try {
    // Prefer the locally-active family if the user belongs to multiple
    if (activeFamilyId) {
      const { data: am } = await sb.from("family_members").select("family_id").eq("user_id", userId).eq("family_id", activeFamilyId).maybeSingle();
      if (am?.family_id) return am.family_id;
      const { data: af } = await sb.from("families").select("id").eq("id", activeFamilyId).maybeSingle();
      if (af?.id) return af.id;
    }
    // Check member table first
    const { data: m } = await sb.from("family_members").select("family_id").eq("user_id", userId).limit(1).maybeSingle();
    if (m?.family_id) return m.family_id;
    // Check families table
    const { data: f } = await sb.from("families").select("id").eq("created_by", userId).limit(1).maybeSingle();
    if (f?.id) return f.id;
    // Create new family
    const code = familyName.toUpperCase().replace(/[^A-Z]/g,"").slice(0,4)+"-"+Math.random().toString(36).slice(2,6).toUpperCase();
    const { data: nf } = await sb.from("families").insert({ name:familyName, invite_code:code, religion:"Hindu", region:"Chandigarh", created_by:userId }).select("id").single();
    if (!nf?.id) return null;
    await sb.from("family_members").insert({ family_id:nf.id, user_id:userId, name:familyName, role:"Admin" });
    return nf.id;
  } catch { return null; }
}

// ── PUSH local data → Supabase ─────────────────────────────────
export async function autoSyncToCloud() {
  const sb = await getSupabase();
  if (!sb) return;

  // Throttle: once per 3 minutes max
  const lastSync = localStorage.getItem("parampara_last_push");
  if (lastSync && Date.now() - parseInt(lastSync) < 180000) return;

  try {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return;

    // Collect all localStorage members + rituals
    const members: Record<string,unknown>[] = [];
    const rituals: Record<string,unknown>[] = [];
    for (const key of Object.keys(localStorage)) {
      try {
        const val = localStorage.getItem(key);
        if (!val || val === "[]") continue;
        if (key.startsWith("parampara_members_")) members.push(...JSON.parse(val));
        if (key.startsWith("parampara_rituals_")) rituals.push(...JSON.parse(val));
      } catch {}
    }
    if (members.length === 0 && rituals.length === 0) return;

    const familyName = localStorage.getItem("parampara_family_name") || "My Family";
    const activeFamilyId = getActiveFamily()?.id || null;
    const fid = await getOrCreateFamily(sb, user.id, familyName, activeFamilyId);
    if (!fid) return;

    // Upsert members (skip duplicates)
    const uniqueMembers = members.filter((m,i,a)=>a.findIndex(x=>x.name===m.name)===i);
    let memberSyncFailures = 0;
    for (const m of uniqueMembers) {
      if (!m.name) continue;
      try {
        const { error } = await sb.from("family_members").upsert({ family_id:fid, name:m.name, role:m.role||"Contributor", relation:m.relation||null, email:m.email||null }, { onConflict:"family_id,name", ignoreDuplicates:true });
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
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return false;

    // Find family — prefer the locally-active family if user belongs to multiple
    let fid: string | null = null;
    if (activeId && activeId !== "default") {
      const { data: activeMember } = await sb.from("family_members").select("family_id").eq("user_id", user.id).eq("family_id", activeId).maybeSingle();
      if (activeMember?.family_id) fid = activeMember.family_id;
      else {
        const { data: activeFamily } = await sb.from("families").select("id").eq("id", activeId).maybeSingle();
        if (activeFamily?.id) fid = activeFamily.id;
      }
    }
    if (!fid) {
      const { data: mRow } = await sb.from("family_members").select("family_id").eq("user_id", user.id).limit(1).maybeSingle();
      const { data: fRowFallback } = await sb.from("families").select("id").eq("created_by", user.id).limit(1).maybeSingle();
      fid = mRow?.family_id || fRowFallback?.id || null;
    }
    if (!fid) return false;
    const { data: fRow } = await sb.from("families").select("id,name,religion,region").eq("id", fid).maybeSingle();

    // Pull members — skip if locally modified (modified flag may be a future timestamp)
    const localModified = localStorage.getItem("parampara_members_local_modified");
    const skipPull = localModified && (
      parseInt(localModified) > Date.now() ||           // future-dated (set by delete)
      (Date.now() - parseInt(localModified)) < 600000   // within 10 min
    );

    if (!skipPull) {
      const { data: cloudMembers } = await sb.from("family_members").select("*").eq("family_id", fid);
      if (cloudMembers && cloudMembers.length > 0) {
        localStorage.setItem(`parampara_members_${activeId}`, JSON.stringify(cloudMembers));
        localStorage.setItem(`parampara_members_default`, JSON.stringify(cloudMembers));
      }
    }

    // Pull rituals
    const { data: cloudRituals } = await sb.from("rituals").select("*").eq("family_id", fid);
    if (cloudRituals && cloudRituals.length > 0) {
      localStorage.setItem(`parampara_rituals_${activeId}`, JSON.stringify(cloudRituals));
      localStorage.setItem(`parampara_rituals_default`, JSON.stringify(cloudRituals));
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

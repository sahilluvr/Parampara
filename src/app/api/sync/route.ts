import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { members = [], rituals = [], familyName = "My Family", religion = "Hindu", region = "Chandigarh", replaceMembers = false } = body;

    const cookieStore = await cookies();
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
    }

    const sb = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (c) => c.forEach(({ name, value, options }) => cookieStore.set(name, value, options)),
      },
    });

    const { data: { user }, error: authErr } = await sb.auth.getUser();
    if (authErr || !user) {
      return NextResponse.json({ error: "Not authenticated — please sign in first" }, { status: 401 });
    }

    // Sync into the family the client says is active — and only if this user
    // belongs to it. (It used to pick the user's FIRST family, merging data
    // across families.)
    let familyId: string | null = typeof body.familyId === "string" ? body.familyId : null;
    if (familyId) {
      const { data: m } = await sb.from("family_members").select("family_id").eq("family_id", familyId).eq("user_id", user.id).maybeSingle();
      const { data: f } = await sb.from("families").select("id").eq("id", familyId).eq("created_by", user.id).maybeSingle();
      if (!m && !f) return NextResponse.json({ error: "You're not a member of this family space." }, { status: 403 });
    } else {
      const { data: mRow } = await sb.from("family_members").select("family_id").eq("user_id", user.id).limit(1).maybeSingle();
      familyId = mRow?.family_id || null;
      if (!familyId) {
        const { data: fRow } = await sb.from("families").select("id").eq("created_by", user.id).limit(1).maybeSingle();
        familyId = fRow?.id || null;
      }
    }

    if (!familyId) {
      const code = familyName.toUpperCase().replace(/[^A-Z]/g,"").slice(0,4)+"-"+Math.random().toString(36).slice(2,6).toUpperCase();
      const newId = crypto.randomUUID();
      const { error: nfErr } = await sb.from("families")
        .insert({ id:newId, name:familyName, invite_code:code, religion, region, created_by:user.id });
      if (nfErr) return NextResponse.json({ error: `Family creation failed: ${nfErr.message}` }, { status: 500 });
      familyId = newId;
      await sb.from("family_members").insert({ family_id:familyId, user_id:user.id, name:user.user_metadata?.name||user.email?.split("@")[0]||"Admin", role:"Admin", email:user.email });
    }

    let membersSynced = 0;
    let ritualsSynced = 0;
    const errors: string[] = [];

    // replaceMembers: remove PLACEHOLDER relatives (no account) that are no
    // longer in the list. The old code deleted every row whose user_id wasn't
    // the caller's — i.e. every family member who had joined by invite.
    if (replaceMembers) {
      const keep = new Set((members as { name?: string }[]).map(m => (m?.name || "").trim().toLowerCase()).filter(Boolean));
      const { data: placeholders } = await sb.from("family_members").select("id,name").eq("family_id", familyId).is("user_id", null);
      const toDelete = (placeholders || []).filter((p: { name?: string }) => !keep.has((p.name || "").toLowerCase())).map((p: { id: string }) => p.id);
      if (toDelete.length) await sb.from("family_members").delete().in("id", toDelete);
    }

    // Get existing members to avoid duplicates
    const { data: existingMembers } = await sb.from("family_members").select("name").eq("family_id", familyId);
    const existingNames = new Set((existingMembers||[]).map((m: {name?: string})=>m.name?.toLowerCase()));

    // Sync members
    for (const m of members) {
      if (!m?.name?.trim()) continue;
      if (existingNames.has(m.name.trim().toLowerCase())) { membersSynced++; continue; }
      const { error: me } = await sb.from("family_members").insert({
        family_id: familyId,
        name: m.name.trim(),
        role: m.role || "Contributor",
        relation: m.relation || null,
        email: m.email || null,
      });
      if (!me) membersSynced++;
      else errors.push(`Member ${m.name}: ${me.message}`);
    }

    // Get existing rituals
    const { data: existingRituals } = await sb.from("rituals").select("name").eq("family_id", familyId);
    const existingRitualNames = new Set((existingRituals||[]).map(r=>r.name?.toLowerCase()));

    // Sync rituals
    for (const r of rituals) {
      if (!r?.name?.trim()) continue;
      if (existingRitualNames.has(r.name.trim().toLowerCase())) { ritualsSynced++; continue; }
      const { error: re } = await sb.from("rituals").insert({
        family_id: familyId,
        name: r.name.trim(),
        subtitle: r.subtitle || null,
        category: r.category || "General",
        religion: Array.isArray(r.religion) ? r.religion : [r.religion || religion],
        region: r.region || null,
        steps: Array.isArray(r.steps) ? r.steps : [],
        samagri: Array.isArray(r.samagri) ? r.samagri : [],
        mantras: Array.isArray(r.mantras) ? r.mantras : [],
        elder_notes: r.elder_notes || null,
        created_by: user.id,
      });
      if (!re) ritualsSynced++;
      else errors.push(`Ritual ${r.name}: ${re.message}`);
    }

    return NextResponse.json({ success: true, familyId, membersSynced, ritualsSynced, errors: errors.length ? errors : undefined });
  } catch (err) {
    console.error("Sync error:", err);
    return NextResponse.json({ error: `Sync failed: ${String(err)}` }, { status: 500 });
  }
}

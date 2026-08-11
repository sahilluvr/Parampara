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

    // Find or create family
    let familyId: string | null = null;

    const { data: mRow } = await sb.from("family_members").select("family_id").eq("user_id", user.id).limit(1).maybeSingle();
    if (mRow?.family_id) familyId = mRow.family_id;

    if (!familyId) {
      const { data: fRow } = await sb.from("families").select("id").eq("created_by", user.id).limit(1).maybeSingle();
      if (fRow?.id) familyId = fRow.id;
    }

    if (!familyId) {
      const code = familyName.toUpperCase().replace(/[^A-Z]/g,"").slice(0,4)+"-"+Math.random().toString(36).slice(2,6).toUpperCase();
      const { data: nf, error: nfErr } = await sb.from("families")
        .insert({ name:familyName, invite_code:code, religion, region, created_by:user.id })
        .select("id").single();
      if (nfErr || !nf) return NextResponse.json({ error: `Family creation failed: ${nfErr?.message}` }, { status: 500 });
      familyId = nf.id;
      await sb.from("family_members").insert({ family_id:familyId, user_id:user.id, name:user.email?.split("@")[0]||"Admin", role:"Admin", email:user.email });
    }

    let membersSynced = 0;
    let ritualsSynced = 0;
    const errors: string[] = [];

    // If replaceMembers, delete all non-user members first (handles deletions)
    if (replaceMembers) {
      await sb.from("family_members")
        .delete()
        .eq("family_id", familyId)
        .neq("user_id", user.id); // keep the admin user row
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

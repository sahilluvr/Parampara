import { NextRequest, NextResponse } from "next/server";
import { getAdminClient, getRouteClient } from "@/lib/supabaseServer";

// POST /api/family/delete { familyId } — creator / Admin only
export async function POST(req: NextRequest) {
  try {
    const { familyId } = await req.json();
    if (!familyId) return NextResponse.json({ error: "Missing familyId" }, { status: 400 });

    const sb = await getRouteClient();
    if (!sb) return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
    const { data: { user } } = await sb.auth.getUser();
    if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

    const admin = await getAdminClient();
    const db = admin || sb;
    const { data: family } = await db.from("families").select("id,created_by").eq("id", familyId).maybeSingle();
    const { data: memberRow } = await db.from("family_members").select("role").eq("family_id", familyId).eq("user_id", user.id).maybeSingle();
    const isAdmin = family?.created_by === user.id || memberRow?.role === "Admin";
    if (!family) return NextResponse.json({ success: true }); // already gone
    if (!isAdmin) return NextResponse.json({ error: "Only the admin can delete a family space" }, { status: 403 });

    await db.from("family_members").delete().eq("family_id", familyId);
    const { error } = await db.from("families").delete().eq("id", familyId);
    if (error) {
      console.error("delete family failed", error);
      return NextResponse.json({ error: "Could not delete the family space. Please try again." }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete family error:", err);
    return NextResponse.json({ error: "Could not delete the family space. Please try again." }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { getAdminClient, getRouteClient, normalizeInviteCode, likeExact } from "@/lib/supabaseServer";

// GET /api/family/invite?code=XXXX-XXXX
// Public: tells the join page whether a code is valid and which family it
// belongs to, so signed-out visitors see the real family name (not just
// whatever was in the URL) and a bad code is caught BEFORE they sign up.
export async function GET(req: NextRequest) {
  const code = normalizeInviteCode(req.nextUrl.searchParams.get("code"));
  if (!code) return NextResponse.json({ valid: false, error: "Missing invite code" }, { status: 400 });

  try {
    const admin = await getAdminClient();
    if (admin) {
      const { data } = await admin.from("families").select("id,name").ilike("invite_code", likeExact(code)).limit(1).maybeSingle();
      if (data) return NextResponse.json({ valid: true, code, familyId: data.id, familyName: data.name });
      return NextResponse.json({ valid: false, code, error: "This invite code doesn't match any family." });
    }

    // No service key — try the RPC from migration 003
    const sb = await getRouteClient();
    if (sb) {
      const { data, error } = await sb.rpc("get_invite_preview", { p_code: code });
      if (!error) {
        const row = Array.isArray(data) ? data[0] : data;
        if (row) return NextResponse.json({ valid: true, code, familyId: row.id, familyName: row.name });
        return NextResponse.json({ valid: false, code, error: "This invite code doesn't match any family." });
      }
    }
    // Can't verify — let the join attempt decide
    return NextResponse.json({ valid: null, code });
  } catch (err) {
    console.error("invite preview failed:", err);
    return NextResponse.json({ valid: null, code });
  }
}

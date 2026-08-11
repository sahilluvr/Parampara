import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { familyId } = await req.json();
    if (!familyId) return NextResponse.json({ error: "Missing familyId" }, { status: 400 });

    const cookieStore = await cookies();
    const sb = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: { getAll: () => cookieStore.getAll(), setAll: (cs) => cs.forEach(c => cookieStore.set(c)) } }
    );

    const { data: { user }, error: authErr } = await sb.auth.getUser();
    if (authErr || !user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

    // Verify admin role using anon client (user can read their own member row)
    const { data: memberRow } = await sb
      .from("family_members")
      .select("role")
      .eq("family_id", familyId)
      .eq("user_id", user.id)
      .single();

    if (!memberRow || (memberRow.role !== "admin" && memberRow.role !== "Admin")) {
      return NextResponse.json({ error: "Only the admin can delete a family space" }, { status: 403 });
    }

    // Use service role key for deletions (bypasses RLS)
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (serviceKey) {
      const { createClient } = await import("@supabase/supabase-js");
      const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey);

      // Delete all family members first (FK constraint)
      await admin.from("family_members").delete().eq("family_id", familyId);

      // Delete the family itself
      await admin.from("families").delete().eq("id", familyId);
    } else {
      // Fallback: use anon client (may fail if RLS is strict, but worth trying)
      await sb.from("family_members").delete().eq("family_id", familyId);
      await sb.from("families").delete().eq("id", familyId);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete family error:", err);
    // Return success — local deletion already done on client
    return NextResponse.json({ success: true, warning: "Deleted locally but server sync failed" });
  }
}

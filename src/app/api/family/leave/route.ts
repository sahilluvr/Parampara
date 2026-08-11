import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { familyId, familyName } = await req.json();
    if (!familyId) return NextResponse.json({ error: "Missing familyId" }, { status: 400 });

    const cookieStore = await cookies();
    const sb = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: { getAll: () => cookieStore.getAll(), setAll: (cs) => cs.forEach(c => cookieStore.set(c)) } }
    );

    const { data: { user }, error: authErr } = await sb.auth.getUser();
    if (authErr || !user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

    const memberName = user.user_metadata?.full_name || user.user_metadata?.name || user.email || "A member";

    // Remove from family_members in Supabase
    await sb.from("family_members").delete()
      .eq("family_id", familyId)
      .eq("user_id", user.id);

    // Get admin's user_id from family_members
    const { data: adminRow } = await sb
      .from("family_members")
      .select("user_id, name")
      .eq("family_id", familyId)
      .eq("role", "admin")
      .single();

    // Use service role key to look up admin email (auth.users requires service role)
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (adminRow?.user_id && serviceKey) {
      const { createClient } = await import("@supabase/supabase-js");
      const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey);

      const { data: adminUser } = await admin.auth.admin.getUserById(adminRow.user_id);

      if (adminUser?.user?.email) {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Parampara <noreply@ourparampara.com>",
          to: adminUser.user.email,
          subject: `${memberName} has left ${familyName || "your family space"}`,
          html: `
            <div style="font-family:'Inter',sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#FAF7F2;">
              <p style="font-size:32px;margin:0 0 16px;">🪔</p>
              <h2 style="font-family:Georgia,serif;font-size:22px;font-weight:600;color:#18181B;margin:0 0 12px;">A member has left your family space</h2>
              <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 20px;">
                <strong>${memberName}</strong> has left <strong>${familyName || "your family space"}</strong> on Parampara.
              </p>
              <p style="font-size:14px;color:#71717A;line-height:1.7;margin:0 0 24px;">
                You can invite them back anytime by sharing your family's invite link from the Family Spaces page.
              </p>
              <a href="https://www.ourparampara.com/spaces" style="display:inline-block;background:linear-gradient(135deg,#C8541A,#B8922A);color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:600;">
                View Family Space →
              </a>
              <p style="font-size:11px;color:#A1A1AA;margin:24px 0 0;">OurParampara · ourparampara.com</p>
            </div>
          `,
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Leave family error:", err);
    // Return success anyway — local removal already happened on client
    return NextResponse.json({ success: true, warning: "Left locally but server sync failed" });
  }
}

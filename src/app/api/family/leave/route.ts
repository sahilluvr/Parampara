import { NextRequest, NextResponse } from "next/server";
import { getAdminClient, getRouteClient } from "@/lib/supabaseServer";

function esc(s: string) {
  return s.replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&#39;" }[c]!));
}

// POST /api/family/leave { familyId }
// The old version deleted with the user's own client — but RLS only let
// ADMINS delete member rows, so "Leave" silently did nothing and the family
// came back on the next load. It also looked for role "admin" (lower-case),
// so the admin was never emailed.
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

    const { data: family } = await db.from("families").select("id,name,created_by").eq("id", familyId).maybeSingle();
    if (family?.created_by === user.id) {
      return NextResponse.json({ error: "You created this family space. Delete it instead, or ask support to transfer ownership." }, { status: 400 });
    }

    const { error: delErr } = await db.from("family_members").delete().eq("family_id", familyId).eq("user_id", user.id);
    if (delErr) {
      console.error("leave: delete failed", delErr);
      return NextResponse.json({ error: "Could not leave the family. Please try again." }, { status: 500 });
    }

    const memberName = user.user_metadata?.full_name || user.user_metadata?.name || user.email || "A member";
    if (admin && family?.created_by && process.env.RESEND_API_KEY) {
      try {
        const { data: creator } = await admin.auth.admin.getUserById(family.created_by);
        if (creator?.user?.email) {
          const { Resend } = await import("resend");
          await new Resend(process.env.RESEND_API_KEY).emails.send({
            from: "Parampara <noreply@ourparampara.com>",
            to: creator.user.email,
            subject: `${memberName} has left ${family.name}`,
            html: `<div style="font-family:'Inter',sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#F8F6FC;">
              <p style="font-size:32px;margin:0 0 16px;">🪔</p>
              <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 20px;"><strong>${esc(memberName)}</strong> has left <strong>${esc(family.name)}</strong> on Parampara.</p>
              <p style="font-size:14px;color:#625C7A;line-height:1.7;margin:0 0 24px;">You can invite them back anytime from the Family Spaces page.</p>
              <a href="https://www.ourparampara.com/spaces" style="display:inline-block;background:#D6246E;color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:600;">Open Family Spaces</a>
            </div>`,
          });
        }
      } catch (e) { console.warn("leave: notify failed", e); }
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Leave family error:", err);
    return NextResponse.json({ error: "Could not leave the family. Please try again." }, { status: 500 });
  }
}

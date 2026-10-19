import { NextRequest, NextResponse } from "next/server";
import type { SupabaseClient } from "@supabase/supabase-js";
import { getAdminClient, getRouteClient, normalizeInviteCode, likeExact } from "@/lib/supabaseServer";

// POST /api/family/join   { code, name? }
//
// Joins the signed-in user to the family that owns `code`.
// Runs server-side because RLS (correctly) stops a non-member from reading a
// family row, which is why the old client-side join always failed with
// "Invalid invite code". Also:
//  • idempotent — joining a family you're already in returns success
//  • claims a placeholder member the admin already added (same email, or
//    same name with no email) instead of creating a duplicate person
//  • avoids the unique (family_id, name) clash that made joins fail when
//    two people shared a name
//  • emails the family creator that someone joined

type FamilyRow = { id: string; name: string; religion: string | null; region: string | null; invite_code: string; created_at: string | null; created_by: string | null };

function esc(s: string) {
  return s.replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "\"":"&quot;", "'":"&#39;" }[c]!));
}

async function uniqueName(admin: SupabaseClient, familyId: string, base: string): Promise<string> {
  const { data } = await admin.from("family_members").select("name").eq("family_id", familyId);
  const taken = new Set((data || []).map((r: { name: string }) => (r.name || "").toLowerCase()));
  if (!taken.has(base.toLowerCase())) return base;
  for (let n = 2; n < 100; n++) {
    const candidate = `${base} (${n})`;
    if (!taken.has(candidate.toLowerCase())) return candidate;
  }
  return `${base} (${Date.now().toString(36)})`;
}

async function notifyCreator(admin: SupabaseClient, family: FamilyRow, joinerName: string) {
  try {
    if (!family.created_by || !process.env.RESEND_API_KEY) return;
    const { data } = await admin.auth.admin.getUserById(family.created_by);
    const to = data?.user?.email;
    if (!to) return;
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Parampara <noreply@ourparampara.com>",
      to,
      subject: `${joinerName} joined ${family.name} on Parampara 🎉`,
      html: `
        <div style="font-family:'Inter',sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#F8F6FC;">
          <p style="font-size:32px;margin:0 0 16px;">🪔</p>
          <h2 style="font-family:Georgia,serif;font-size:22px;font-weight:600;color:#1C1733;margin:0 0 12px;">A new member joined your family space</h2>
          <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 24px;">
            <strong>${esc(joinerName)}</strong> accepted your invite and joined <strong>${esc(family.name)}</strong>.
          </p>
          <a href="https://www.ourparampara.com/members" style="display:inline-block;background:linear-gradient(135deg,#D6246E,#7A3FD9);color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:600;">
            View family members →
          </a>
          <p style="font-size:11px;color:#A1A1AA;margin:24px 0 0;">OurParampara · ourparampara.com</p>
        </div>`,
    });
  } catch (e) {
    console.warn("join: creator notification failed", e);
  }
}

function respond(family: FamilyRow, memberRole: string | null, userId: string, alreadyMember: boolean) {
  const role = memberRole === "Admin" || family.created_by === userId ? "Admin" : "Member";
  return NextResponse.json({
    success: true,
    alreadyMember,
    family: {
      id: family.id, name: family.name, religion: family.religion || "Hindu", region: family.region || "India",
      inviteCode: family.invite_code, createdAt: family.created_at, role,
    },
  });
}

export async function POST(req: NextRequest) {
  let body: { code?: string; name?: string } = {};
  try { body = await req.json(); } catch { /* empty */ }
  const code = normalizeInviteCode(body.code);
  if (!code) return NextResponse.json({ error: "Please enter an invite code." }, { status: 400 });

  const sb = await getRouteClient();
  if (!sb) return NextResponse.json({ error: "Service unavailable. Please try again later." }, { status: 503 });

  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Please sign in to join this family.", code: "NOT_AUTHENTICATED" }, { status: 401 });

  const displayName = String(
    body.name?.trim() || user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split("@")[0] || "New Member"
  ).slice(0, 80);

  const admin = await getAdminClient();

  // ── Path A: service role (preferred) ──
  if (admin) {
    try {
      const { data: family } = await admin.from("families")
        .select("id,name,religion,region,invite_code,created_at,created_by")
        .ilike("invite_code", likeExact(code)).limit(1).maybeSingle<FamilyRow>();
      if (!family) return NextResponse.json({ error: "This invite code doesn't match any family. Please check it with the person who invited you.", code: "INVALID_CODE" }, { status: 404 });

      // Already linked?
      const { data: existing } = await admin.from("family_members")
        .select("id,role").eq("family_id", family.id).eq("user_id", user.id).limit(1).maybeSingle();
      if (existing) return respond(family, existing.role, user.id, true);

      const isCreator = family.created_by === user.id;
      const email = user.email || null;

      // Claim a placeholder the admin already added for this person
      let claimId: string | null = null;
      if (email) {
        const { data } = await admin.from("family_members").select("id")
          .eq("family_id", family.id).is("user_id", null).ilike("email", likeExact(email)).limit(1).maybeSingle();
        claimId = data?.id || null;
      }
      if (!claimId) {
        const { data } = await admin.from("family_members").select("id,email")
          .eq("family_id", family.id).is("user_id", null).ilike("name", likeExact(displayName)).limit(5);
        const match = (data || []).find((r: { email: string | null }) => !r.email);
        claimId = match?.id || null;
      }

      let role = isCreator ? "Admin" : "Contributor";
      if (claimId) {
        const { data: claimed, error } = await admin.from("family_members")
          .update({ user_id: user.id, email, joined_at: new Date().toISOString(), ...(isCreator ? { role: "Admin" } : {}) })
          .eq("id", claimId).select("role").maybeSingle();
        if (error) throw error;
        role = claimed?.role || role;
      } else {
        const name = await uniqueName(admin, family.id, displayName);
        const { error } = await admin.from("family_members").insert({
          family_id: family.id, user_id: user.id, name,
          relation: isCreator ? "Self" : "Member", role,
          religion: family.religion || "Hindu", region: family.region || "India",
          email, joined_at: new Date().toISOString(),
        });
        if (error) {
          // Lost a race with a parallel request? Treat as already joined.
          const { data: again } = await admin.from("family_members").select("role")
            .eq("family_id", family.id).eq("user_id", user.id).limit(1).maybeSingle();
          if (again) return respond(family, again.role, user.id, true);
          throw error;
        }
      }

      if (!isCreator) await notifyCreator(admin, family, displayName);
      return respond(family, role, user.id, isCreator);
    } catch (err) {
      console.error("join (service role) failed:", err);
      return NextResponse.json({ error: "We couldn't add you to this family right now. Please try again in a minute." }, { status: 500 });
    }
  }

  // ── Path B: RPC from migration 003 ──
  const { data: rpcData, error: rpcErr } = await sb.rpc("join_family_by_code", { p_code: code, p_name: displayName });
  if (!rpcErr) {
    const row = Array.isArray(rpcData) ? rpcData[0] : rpcData;
    if (row) {
      return respond({
        id: row.family_id, name: row.family_name, religion: row.religion, region: row.region,
        invite_code: row.invite_code, created_at: row.created_at, created_by: row.created_by,
      }, row.member_role, user.id, !!row.already_member);
    }
  } else if (rpcErr.message?.includes("INVALID_CODE")) {
    return NextResponse.json({ error: "This invite code doesn't match any family. Please check it with the person who invited you.", code: "INVALID_CODE" }, { status: 404 });
  }

  console.error("join: no service key and RPC unavailable", rpcErr);
  return NextResponse.json({
    error: "Joining is temporarily unavailable. Please try again later.",
  }, { status: 503 });
}

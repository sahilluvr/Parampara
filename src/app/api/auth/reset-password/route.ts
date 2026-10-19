import { NextRequest, NextResponse } from "next/server";

// POST /api/auth/reset-password { email }
//
// Sends a branded reset email whose link points at OUR page with a one-time
// token_hash (/auth/reset?token_hash=…&type=recovery). The token is only
// redeemed when the person submits their new password, so email security
// scanners that pre-open links (Outlook, Gmail, corporate filters) can no
// longer burn the link before the user clicks it — the main reason "reset
// link expired / not working" happened.
//
// Always answers with the same success message so nobody can probe which
// emails have accounts. (The old "debug" mode that revealed this is removed.)
// If the service key / Resend aren't configured, it tells the page to fall
// back to Supabase's own email from the browser (which keeps the PKCE
// verifier in the right place — doing that on the server never worked).

const APP = "https://www.ourparampara.com";
const recent = new Map<string, number>(); // naive per-instance throttle

function esc(s: string) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]!));
}

export async function POST(req: NextRequest) {
  const ok = NextResponse.json({ success: true });
  try {
    const { email: raw } = await req.json().catch(() => ({}));
    const email = String(raw || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });

    const last = recent.get(email) || 0;
    if (Date.now() - last < 60_000) return ok; // one email per minute per address
    recent.set(email, Date.now());

    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    if (!serviceKey || !resendKey || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ success: true, fallback: true });
    }

    const { createClient } = await import("@supabase/supabase-js");
    const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } });
    const { data, error } = await admin.auth.admin.generateLink({ type: "recovery", email });
    const tokenHash = data?.properties?.hashed_token;
    if (error || !tokenHash) {
      // Unknown email (or Supabase error): respond identically
      if (error && !/not found|user/i.test(error.message)) console.error("reset: generateLink failed", error.message);
      return ok;
    }

    const name = (data.user?.user_metadata?.full_name || data.user?.user_metadata?.name || email.split("@")[0]) as string;
    const link = `${APP}/auth/reset?token_hash=${encodeURIComponent(tokenHash)}&type=recovery`;

    const { Resend } = await import("resend");
    const { error: sendErr } = await new Resend(resendKey).emails.send({
      from: "OurParampara <noreply@ourparampara.com>",
      to: email,
      subject: "Reset your OurParampara password",
      html: `<!DOCTYPE html><html><body style="margin:0;background:#F8F6FC;font-family:Inter,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 16px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#fff;border-radius:20px;overflow:hidden;">
<tr><td style="background:#120C2E;padding:32px;text-align:center;">
<img src="${APP}/logo.png" width="56" height="56" alt="OurParampara" style="border-radius:50%;display:block;margin:0 auto 12px;"/>
<h1 style="font-size:22px;color:#fff;margin:0;">Reset your password</h1></td></tr>
<tr><td style="padding:32px;">
<p style="font-size:15px;color:#1C1733;line-height:1.7;margin:0 0 16px;">Hi ${esc(name)},</p>
<p style="font-size:15px;color:#625C7A;line-height:1.7;margin:0 0 28px;">Tap the button to choose a new password for <strong>${esc(email)}</strong>. The link works once and expires in 1 hour.</p>
<p style="text-align:center;margin:0 0 28px;"><a href="${link}" style="display:inline-block;background:#FFB224;color:#120C2E;text-decoration:none;padding:14px 36px;border-radius:12px;font-size:15px;font-weight:700;">Choose a new password</a></p>
<p style="font-size:13px;color:#8A84A3;line-height:1.6;margin:0;">Didn't ask for this? Ignore this email — your password stays the same.</p>
</td></tr></table></td></tr></table></body></html>`,
    });
    if (sendErr) {
      console.error("reset: Resend failed", sendErr);
      return NextResponse.json({ success: true, fallback: true });
    }
    return ok;
  } catch (err) {
    console.error("reset error:", err);
    return NextResponse.json({ error: "Couldn't send the email right now. Please try again in a minute." }, { status: 500 });
  }
}

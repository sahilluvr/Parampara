import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, debug } = await req.json();
    if (!email?.trim()) return NextResponse.json({ error: "Email is required" }, { status: 400 });

    const APP = "https://www.ourparampara.com";
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendKey  = process.env.RESEND_API_KEY;

    // ── Debug mode: report config + whether the user exists, without sending ──
    if (debug) {
      const report: Record<string, unknown> = {
        hasServiceKey: !!serviceKey,
        hasResendKey: !!resendKey,
      };
      if (serviceKey) {
        try {
          const { createClient } = await import("@supabase/supabase-js");
          const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey, { auth: { autoRefreshToken:false, persistSession:false } });
          // Search for the user by email
          const { data, error } = await admin.auth.admin.listUsers();
          if (error) { report.userLookupError = error.message; }
          else {
            const found = data.users.find(u => u.email?.toLowerCase() === email.trim().toLowerCase());
            report.userExists = !!found;
            if (found) {
              report.emailConfirmed = !!found.email_confirmed_at;
              report.createdAt = found.created_at;
            }
          }
        } catch (e) { report.serviceKeyError = String(e); }
      }
      return NextResponse.json(report);
    }

    // ── Path 1: Service role + Resend (fully branded) ──────────
    if (serviceKey && resendKey) {
      const { createClient } = await import("@supabase/supabase-js");
      const admin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        serviceKey,
        { auth: { autoRefreshToken: false, persistSession: false } }
      );

      // Generate a password reset link
      const { data, error: linkErr } = await admin.auth.admin.generateLink({
        type: "recovery",
        email: email.trim(),
        options: { redirectTo: `${APP}/auth/reset` },
      });

      if (linkErr || !data?.properties?.action_link) {
        console.error("generateLink error:", linkErr);
        // Fall through to Supabase default
      } else {
        // Send via Resend with OurParampara branding
        const { Resend } = await import("resend");
        const resend = new Resend(resendKey);
        const resetLink = data.properties.action_link;
        const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:Inter,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF7F2;min-height:100vh;">
<tr><td align="center" style="padding:40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#C8541A,#B8922A);padding:32px 32px 28px;text-align:center;">
    <img src="${APP}/logo.png" width="64" height="64" alt="OurParampara" style="border-radius:50%;object-fit:cover;display:block;margin:0 auto 14px;"/>
    <h1 style="font-family:Georgia,serif;font-size:22px;font-weight:600;color:#fff;margin:0;letter-spacing:-0.3px;">Reset your password</h1>
    <p style="font-size:13px;color:rgba(255,255,255,0.7);margin:8px 0 0;">OurParampara · Family Heritage Platform</p>
  </td></tr>

  <!-- Body -->
  <tr><td style="padding:32px;">
    <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 20px;">
      We received a request to reset the password for your OurParampara account (<strong>${email.trim()}</strong>).
    </p>
    <p style="font-size:14px;color:#374151;line-height:1.7;margin:0 0 28px;">
      Click the button below to set a new password. This link expires in <strong>1 hour</strong>.
    </p>
    <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center">
      <a href="${resetLink}" style="display:inline-block;background:linear-gradient(135deg,#C8541A,#B8922A);color:#fff;text-decoration:none;padding:14px 40px;border-radius:12px;font-size:15px;font-weight:700;letter-spacing:-0.2px;">
        Reset password →
      </a>
    </td></tr>
    </table>
    <p style="font-size:13px;color:#9CA3AF;margin:24px 0 0;text-align:center;line-height:1.7;">
      If you didn't request this, you can safely ignore this email.<br/>
      Your password won't change until you click the button above.
    </p>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#FAF7F2;padding:20px 32px;text-align:center;border-top:1px solid #F0EBE1;">
    <p style="font-size:12px;color:#9CA3AF;margin:0;line-height:1.6;">
      © ${new Date().getFullYear()} OurParampara · ourparampara.com<br/>
      Preserving Indian family traditions 🪔
    </p>
  </td></tr>

</table></td></tr></table>
</body></html>`;

        const { error: emailErr } = await resend.emails.send({
          from: "OurParampara <noreply@ourparampara.com>",
          to: email.trim(),
          subject: "Reset your OurParampara password",
          html,
        });

        if (emailErr) {
          console.error("Resend error, falling back to Supabase default email:", emailErr);
          // Don't fail the request — fall through to Path 2 below
        } else {
          return NextResponse.json({ success: true, method: "resend" });
        }
      }
    }

    // ── Path 2: Fallback to Supabase default email ──────────────
    const { createBrowserClient } = await import("@supabase/ssr");
    const sb = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { error } = await sb.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${APP}/auth/reset`,
    });
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ success: true, method: "supabase" });

  } catch (err) {
    console.error("Reset error:", err);
    return NextResponse.json({ error: "Failed to send reset email. Please try again." }, { status: 500 });
  }
}

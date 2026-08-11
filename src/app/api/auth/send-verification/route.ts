import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, name, familyName } = await req.json();
    const APP = "https://www.ourparampara.com";
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendKey  = process.env.RESEND_API_KEY;

    if (!serviceKey || !resendKey) {
      // Can't send custom — Supabase default will handle it
      return NextResponse.json({ success: true, method: "supabase_default" });
    }

    const { createClient } = await import("@supabase/supabase-js");
    const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    });

    // Use Supabase to resend the confirmation email and intercept with our branding
    // Generate a signup confirmation link
    const { data, error } = await admin.auth.admin.generateLink({
      type: "invite" as const,
      email,
      options: { redirectTo: `${APP}/auth/verify` },
    });

    let confirmLink = `${APP}/auth/login`;
    if (!error && data?.properties?.action_link) {
      confirmLink = data.properties.action_link;
    }
    const displayName = name || email.split("@")[0];
    const displayFamily = familyName || "Your Family";

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:Inter,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" style="padding:40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.1);">

  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#1A0800,#2D1810);padding:40px 36px 36px;text-align:center;">
    <img src="${APP}/logo.png" width="72" height="72" alt="OurParampara" style="border-radius:50%;object-fit:cover;display:block;margin:0 auto 16px;box-shadow:0 8px 28px rgba(200,84,26,0.5);"/>
    <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:600;color:#fff;margin:0 0 8px;">Namaste, ${displayName}! 🙏</h1>
    <p style="font-size:14px;color:rgba(255,255,255,0.55);margin:0;">Welcome to OurParampara</p>
  </td></tr>

  <!-- Gold bar -->
  <tr><td style="background:linear-gradient(90deg,#C8541A,#B8922A,#C8541A);height:3px;font-size:0;">&nbsp;</td></tr>

  <!-- Body -->
  <tr><td style="padding:36px;text-align:center;">
    <p style="font-size:32px;margin:0 0 16px;">🪔</p>
    <h2 style="font-family:Georgia,serif;font-size:20px;font-weight:600;color:#18181B;margin:0 0 14px;">Verify your email address</h2>
    <p style="font-size:15px;color:#374151;line-height:1.8;margin:0 0 12px;">
      You're one step away from preserving <strong>${displayFamily}</strong>'s heritage. Click below to verify your email and start your journey.
    </p>
    <p style="font-size:13px;color:#9CA3AF;margin:0 0 28px;">This link expires in 24 hours.</p>
    <a href="${confirmLink}" style="display:inline-block;background:linear-gradient(135deg,#C8541A,#B8922A);color:#fff;text-decoration:none;padding:15px 48px;border-radius:14px;font-size:15px;font-weight:700;box-shadow:0 8px 28px rgba(200,84,26,0.35);">
      Verify email →
    </a>
    <p style="font-size:12px;color:#9CA3AF;margin:24px 0 0;line-height:1.7;">
      If you didn't create an account, you can safely ignore this email.
    </p>
  </td></tr>

  <!-- What you can do -->
  <tr><td style="padding:0 36px 32px;">
    <div style="background:#FAF7F2;border-radius:14px;padding:20px 24px;">
      <p style="font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#C8541A;margin:0 0 14px;">After verifying, you can:</p>
      ${["📜 Document your family's rituals and traditions",
         "👨‍👩‍👧‍👦 Build your complete family tree",
         "🎂 Never miss a birthday or anniversary",
         "🪔 Preserve your heritage for generations",
      ].map(f => `<p style="font-size:13px;color:#374151;margin:0 0 8px;line-height:1.5;">${f}</p>`).join("")}
    </div>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#1A0800;padding:24px 36px;text-align:center;">
    <p style="font-family:Georgia,serif;font-size:14px;color:rgba(255,255,255,0.55);margin:0 0 6px;">🪔 OurParampara</p>
    <p style="font-size:11px;color:rgba(255,255,255,0.3);margin:0;line-height:1.6;">
      © ${new Date().getFullYear()} OurParampara · ourparampara.com<br/>
      Preserving Indian family traditions
    </p>
  </td></tr>

</table></td></tr></table>
</body></html>`;

    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);
    const { error: emailErr } = await resend.emails.send({
      from: "OurParampara <noreply@ourparampara.com>",
      to: email,
      subject: `Namaste ${displayName}! Verify your OurParampara email 🪔`,
      html,
    });

    if (emailErr) {
      console.error("Verification email error:", emailErr);
      return NextResponse.json({ success: true, method: "supabase_default" });
    }

    return NextResponse.json({ success: true, method: "resend" });
  } catch (err) {
    console.error("Verification error:", err);
    return NextResponse.json({ success: true, method: "error_fallback" });
  }
}

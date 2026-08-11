import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Demo mode — log and return success
      console.log(`[CONTACT FORM] From: ${name} <${email}> | Subject: ${subject} | Message: ${message}`);
      return NextResponse.json({ demo: true, success: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    // Send to Parampara team
    await resend.emails.send({
      from: "Parampara Contact <noreply@ourparampara.com>",
      to: "ourparamparaofficial@gmail.com",
      replyTo: email,
      subject: `[Contact] ${subject || "New message"} — from ${name}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#FAF7F2;border-radius:16px;">
          <h2 style="color:#C8541A;font-family:Georgia,serif;margin:0 0 20px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-size:13px;color:#71717A;width:100px;">Name</td><td style="padding:8px 0;font-size:14px;font-weight:600;color:#18181B;">${name}</td></tr>
            <tr><td style="padding:8px 0;font-size:13px;color:#71717A;">Email</td><td style="padding:8px 0;font-size:14px;color:#C8541A;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;font-size:13px;color:#71717A;">Subject</td><td style="padding:8px 0;font-size:14px;color:#18181B;">${subject || "—"}</td></tr>
          </table>
          <div style="margin-top:20px;padding:20px;background:#fff;border-radius:10px;border-left:3px solid #C8541A;">
            <p style="font-size:13px;color:#71717A;margin:0 0 8px;font-weight:600;">MESSAGE</p>
            <p style="font-size:14px;color:#18181B;line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="font-size:11px;color:#A1A1AA;margin-top:20px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: "Parampara <noreply@ourparampara.com>",
      to: email,
      subject: "We received your message 🙏",
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#FAF7F2;border-radius:16px;">
          <div style="text-align:center;margin-bottom:24px;">
            <div style="font-size:40px;">🪔</div>
            <h2 style="color:#18181B;font-family:Georgia,serif;margin:8px 0 0;">Thank you, ${name}!</h2>
          </div>
          <p style="font-size:15px;color:#4B5563;line-height:1.7;">We've received your message and will reply within <strong>24 hours</strong>.</p>
          <div style="background:#fff;border-radius:10px;padding:16px 20px;margin:20px 0;border-left:3px solid #C8541A;">
            <p style="font-size:13px;color:#71717A;margin:0 0 6px;">Your message:</p>
            <p style="font-size:13px;color:#18181B;margin:0;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="font-size:13px;color:#71717A;">If urgent, WhatsApp us at <a href="https://wa.me/919878966563" style="color:#C8541A;text-decoration:none;">+91 98789 66563</a></p>
          <p style="font-size:12px;color:#A1A1AA;margin-top:20px;text-align:center;">Parampara · Chandigarh, India · ourparampara.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

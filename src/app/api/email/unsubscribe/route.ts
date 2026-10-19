import { NextRequest, NextResponse } from "next/server";
import { getAdmin } from "@/lib/billing";
import { verifyUnsub } from "@/lib/engagement";

// One-click unsubscribe from tips & reminder emails (GET from the footer link,
// POST from Gmail/Yahoo's built-in "Unsubscribe" button — RFC 8058).
async function optOut(req: NextRequest, resubscribe = false) {
  const u = req.nextUrl.searchParams.get("u") || "", t = req.nextUrl.searchParams.get("t") || "";
  if (!u || !verifyUnsub(u, t)) return false;
  const admin = await getAdmin();
  if (!admin) return false;
  const { data } = await admin.auth.admin.getUserById(u);
  if (!data?.user) return false;
  await admin.auth.admin.updateUserById(u, { user_metadata: { ...(data.user.user_metadata || {}), email_opt_out: !resubscribe } });
  return true;
}

const page = (title: string, body: string, link = "") => new NextResponse(`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head>
<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#120C2E;font-family:Arial,sans-serif;padding:20px;">
<div style="background:#fff;border-radius:20px;padding:32px;max-width:420px;text-align:center;color:#1C1733;">
<img src="/logo-64.png" width="48" height="48" alt="" style="border-radius:12px"/><h1 style="font-size:22px;margin:14px 0 8px;">${title}</h1>
<p style="color:#625C7A;line-height:1.6;">${body}</p>${link}</div></body></html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });

export async function GET(req: NextRequest) {
  const re = req.nextUrl.searchParams.get("re") === "1";
  const ok = await optOut(req, re);
  if (!ok) return page("Link not valid", "This unsubscribe link is invalid or expired. Email ourparamparaofficial@gmail.com and we'll remove you.");
  const q = `u=${encodeURIComponent(req.nextUrl.searchParams.get("u")!)}&t=${req.nextUrl.searchParams.get("t")}`;
  return re
    ? page("You're subscribed again", "You'll get occasional tips and reminders from OurParampara.")
    : page("You're unsubscribed", "You won't get tips or reminder emails any more. Password and billing emails will still reach you.", `<a href="/api/email/unsubscribe?${q}&re=1" style="color:#D6246E;font-weight:700;">Undo</a>`);
}
export async function POST(req: NextRequest) {
  await optOut(req);
  return NextResponse.json({ ok: true });
}

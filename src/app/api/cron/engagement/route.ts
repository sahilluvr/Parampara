import { NextRequest, NextResponse } from "next/server";
import { getAdmin } from "@/lib/billing";
import { runEngagement } from "@/lib/engagement";

// Daily lifecycle emails (Cloudflare cron 04:00 UTC = 09:30 IST). ?dry=1 previews.
export async function GET(req: NextRequest) {
  const s = process.env.CRON_SECRET;
  if (s && req.headers.get("authorization") !== `Bearer ${s}`) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const admin = await getAdmin();
  if (!admin) return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
  try {
    const r = await runEngagement(admin, { dryRun: req.nextUrl.searchParams.get("dry") === "1" });
    console.log("engagement:", { ...r, emails: r.emails.length });
    return NextResponse.json({ ok: true, ...r });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 500 });
  }
}

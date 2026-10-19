import { NextRequest, NextResponse } from "next/server";
import { getAdminUser } from "@/lib/adminAuth";
import { getAdmin } from "@/lib/billing";
import { runEngagement } from "@/lib/engagement";

// GET = preview today's emails, POST = send them now (admin only)
async function handle(dryRun: boolean) {
  const { isAdmin } = await getAdminUser();
  if (!isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const admin = await getAdmin();
  if (!admin) return NextResponse.json({ error: "Server not configured" }, { status: 503 });
  try { return NextResponse.json(await runEngagement(admin, { dryRun })); }
  catch (e) { return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 500 }); }
}
export async function GET() { return handle(true); }
export async function POST(_req: NextRequest) { return handle(false); }

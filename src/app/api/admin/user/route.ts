import { NextRequest, NextResponse } from "next/server";
import { getAdminUser } from "@/lib/adminAuth";
import { getAdmin, readPlanState, writePlanState } from "@/lib/billing";

// POST /api/admin/user { userId, action: "grant30" | "grant365" | "revoke" }
export async function POST(req: NextRequest) {
  const { isAdmin, user: me } = await getAdminUser();
  if (!isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { userId, action } = await req.json().catch(() => ({}));
  if (!userId || !["grant30", "grant365", "revoke"].includes(action)) return NextResponse.json({ error: "Bad request" }, { status: 400 });
  const admin = await getAdmin();
  if (!admin) return NextResponse.json({ error: "Server not configured" }, { status: 503 });
  try {
    const { data } = await admin.auth.admin.getUserById(userId);
    if (!data?.user) return NextResponse.json({ error: "User not found" }, { status: 404 });
    const cur = readPlanState(data.user);
    if (action === "revoke") {
      const { next } = await writePlanState(admin, userId, { plan_expires_at: new Date(Date.now() - 1000).toISOString() });
      console.log(`admin ${me?.email} revoked Pro for ${data.user.email}`);
      return NextResponse.json({ ok: true, plan: next.plan, planUntil: next.plan_expires_at, note: cur.subscription_id ? "Their Razorpay subscription is unchanged — cancel it in Razorpay if they shouldn't be charged again." : undefined });
    }
    const days = action === "grant365" ? 365 : 30;
    const base = Math.max(Date.now(), cur.plan_expires_at ? new Date(cur.plan_expires_at).getTime() : 0);
    const { next } = await writePlanState(admin, userId, { plan_expires_at: new Date(base + days * 86400000).toISOString(), plan_source: cur.plan_source || "override" });
    console.log(`admin ${me?.email} granted ${days}d Pro to ${data.user.email}`);
    return NextResponse.json({ ok: true, plan: next.plan, planUntil: next.plan_expires_at });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Failed" }, { status: 500 });
  }
}

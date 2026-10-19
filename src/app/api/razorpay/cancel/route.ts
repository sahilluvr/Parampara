import { NextRequest, NextResponse } from "next/server";
import { getRouteClient } from "@/lib/supabaseServer";
import { getAdmin, readPlanState, rzp, writePlanState, type RzpSubscription } from "@/lib/billing";

// POST /api/razorpay/cancel
// Cancels auto-renewal at the end of the current paid period — they keep Pro
// until then. To turn renewal back on, the user subscribes again from
// /upgrade; billing then starts only when their paid time runs out.
export async function POST(_req: NextRequest) {
  try {
    const sb = await getRouteClient();
    const { data: { user } } = sb ? await sb.auth.getUser() : { data: { user: null } };
    if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    const admin = await getAdmin();
    if (!admin) return NextResponse.json({ error: "Server not configured" }, { status: 503 });

    const state = readPlanState(user);
    if (!state.subscription_id) return NextResponse.json({ error: "You don't have an auto-renewing subscription." }, { status: 400 });

    const sub = await rzp<RzpSubscription>(`/subscriptions/${state.subscription_id}/cancel`, { method: "POST", body: { cancel_at_cycle_end: 1 } });
    await writePlanState(admin, user.id, { cancel_at_period_end: true, subscription_status: sub.status, next_charge_at: null });
    return NextResponse.json({ success: true, accessUntil: state.plan_expires_at });
  } catch (err) {
    console.error("cancel failed:", err);
    const msg = err instanceof Error ? err.message : "";
    return NextResponse.json({ error: msg.includes("cancel") ? msg : "Couldn't update your subscription. Please try again or email ourparamparaofficial@gmail.com." }, { status: 500 });
  }
}

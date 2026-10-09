import { NextRequest, NextResponse } from "next/server";
import { getRouteClient } from "@/lib/supabaseServer";
import { APP_TAG, getAdmin, getPlanId, razorpayConfigured, readPlanState, rzp, type BillingCycle, type RzpSubscription } from "@/lib/billing";

// POST /api/razorpay/subscription { billingCycle: "monthly" | "yearly" }
// Creates an auto-renewing Razorpay subscription and returns what Checkout
// needs. Replaces the old one-time order flow.
export async function POST(req: NextRequest) {
  try {
    if (!razorpayConfigured()) return NextResponse.json({ error: "payment_not_configured" }, { status: 503 });
    const admin = await getAdmin();
    if (!admin) return NextResponse.json({ error: "payment_not_configured" }, { status: 503 });

    const { billingCycle, changeMethod } = await req.json().catch(() => ({}));
    const cycle: BillingCycle = billingCycle === "yearly" ? "yearly" : "monthly";

    const sb = await getRouteClient();
    const { data: { user } } = sb ? await sb.auth.getUser() : { data: { user: null } };
    if (!user) return NextResponse.json({ error: "not_authenticated" }, { status: 401 });

    const state = readPlanState(user);
    let replaces: string | undefined;

    // Already subscribed? Don't create a second mandate / double charge.
    if (state.subscription_id && ["active", "authenticated", "pending"].includes(state.subscription_status || "")) {
      try {
        const live = await rzp<RzpSubscription>(`/subscriptions/${state.subscription_id}`);
        if (["active", "authenticated", "pending"].includes(live.status)) {
          if (changeMethod) {
            // "Change payment method": a new mandate that starts when the
            // current paid period ends; the old one is cancelled only after
            // the new card / UPI is authorised. No charge today.
            replaces = state.subscription_id;
          } else if (!state.cancel_at_period_end) {
            return NextResponse.json({ error: "already_subscribed", message: "You already have an active Pro subscription. Manage it from Account & Plan." }, { status: 409 });
          }
          // They scheduled a cancellation and changed their mind: start a new
          // subscription below. The old one is cancelled only once the new one
          // is confirmed (see applySubscription → notes.replaces).
          replaces = state.subscription_id;
        }
      } catch { /* stale id — continue */ }
    }

    // If they still have paid time left (old one-time purchase, or a cancelled
    // subscription), start billing when that runs out — no double charge.
    const paidUntil = state.plan_expires_at ? new Date(state.plan_expires_at).getTime() : 0;
    const startAt = paidUntil > Date.now() + 24 * 3600 * 1000 ? Math.floor(paidUntil / 1000) : undefined;

    const planId = await getPlanId(cycle);
    const sub = await rzp<RzpSubscription>("/subscriptions", {
      method: "POST",
      body: {
        plan_id: planId,
        total_count: cycle === "monthly" ? 120 : 10,
        quantity: 1,
        customer_notify: 1,
        ...(startAt ? { start_at: startAt } : {}),
        notes: { app: APP_TAG, userId: user.id, email: user.email || "", billingCycle: cycle, ...(replaces ? { replaces } : {}) },
      },
    });
    // Nothing is written to the user until checkout succeeds (verify / webhook),
    // so an abandoned checkout never touches their current plan.

    return NextResponse.json({
      subscriptionId: sub.id,
      razorpayKey: process.env.RAZORPAY_KEY_ID,
      startsAt: startAt ? new Date(startAt * 1000).toISOString() : null,
      userEmail: user.email,
      userName: user.user_metadata?.full_name || user.user_metadata?.name || "",
    });
  } catch (err) {
    console.error("create subscription failed:", err);
    return NextResponse.json({ error: "subscription_failed", message: "We couldn't start the payment. Please try again in a minute." }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { getRouteClient } from "@/lib/supabaseServer";
import { applySubscription, getAdmin, isOurs, PRICE_LABEL, readPlanState, rzp, verifySubscriptionSignature, type RzpSubscription } from "@/lib/billing";

// POST /api/razorpay/verify
// { razorpay_payment_id, razorpay_subscription_id, razorpay_signature }
// Called by Checkout's success handler. The signature proves Razorpay
// processed the payment — the old version upgraded anyone who posted any
// paymentId. Webhooks remain the source of truth for renewals.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const paymentId = body.razorpay_payment_id, subscriptionId = body.razorpay_subscription_id, signature = body.razorpay_signature;
    if (!paymentId || !subscriptionId || !signature) return NextResponse.json({ error: "Missing payment details" }, { status: 400 });

    const sb = await getRouteClient();
    const { data: { user } } = sb ? await sb.auth.getUser() : { data: { user: null } };
    if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

    if (!verifySubscriptionSignature(paymentId, subscriptionId, signature)) {
      console.warn("verify: bad signature", { userId: user.id, subscriptionId });
      return NextResponse.json({ error: "Payment could not be verified" }, { status: 400 });
    }

    const admin = await getAdmin();
    if (!admin) return NextResponse.json({ error: "Server not configured" }, { status: 503 });

    const sub = await rzp<RzpSubscription>(`/subscriptions/${subscriptionId}`);
    if (!isOurs(sub.notes) || sub.notes?.userId !== user.id) {
      return NextResponse.json({ error: "This payment belongs to a different account" }, { status: 403 });
    }

    const wasPro = !!readPlanState(user).plan_expires_at && new Date(readPlanState(user).plan_expires_at!).getTime() > Date.now();
    const { next } = (await applySubscription(admin, sub, { userId: user.id, provisional: true })) as { next: { plan_expires_at?: string | null; billing_cycle?: "monthly" | "yearly"; next_charge_at?: string | null } };

    // Confirmation email (first activation only)
    if (!wasPro && user.email) {
      const name = user.user_metadata?.full_name || user.email.split("@")[0];
      const famName = user.user_metadata?.family_name || "Your Family";
      const cycle = next.billing_cycle || "monthly";
      import("@/lib/email").then(({ sendUpgradeEmail }) => sendUpgradeEmail(user.email!, name, famName, cycle, PRICE_LABEL[cycle])).catch(() => {});
    }

    return NextResponse.json({ success: true, plan: "pro", expiresAt: next.plan_expires_at, nextChargeAt: next.next_charge_at, status: sub.status });
  } catch (err) {
    console.error("Verify error:", err);
    return NextResponse.json({ error: "Verification failed. If you were charged, your plan will activate automatically within a few minutes." }, { status: 500 });
  }
}

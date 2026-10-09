import { NextResponse } from "next/server";
import { getRouteClient } from "@/lib/supabaseServer";
import { applySubscription, getAdmin, isOurs, isProUser, PRO_OVERRIDE_EMAILS, razorpayConfigured, readPlanState, rzp, writePlanState, type RzpSubscription } from "@/lib/billing";

// GET  /api/billing/status — the signed-in user's plan, straight from the server.
// POST /api/billing/status — same, but first reconciles with Razorpay:
//   • refreshes an existing subscription (covers a missed webhook)
//   • migrates customers who paid under the old one-time flow, whose plan was
//     only recorded in (user-editable) user_metadata — verified against
//     Razorpay before it's trusted.
async function load(reconcile: boolean) {
  const sb = await getRouteClient();
  const { data: { user } } = sb ? await sb.auth.getUser() : { data: { user: null } };
  if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  if (user.email && PRO_OVERRIDE_EMAILS.includes(user.email.toLowerCase())) {
    return NextResponse.json({ plan: "pro", source: "override", expiresAt: null });
  }

  let state = readPlanState(user);
  const admin = reconcile && razorpayConfigured() ? await getAdmin() : null;

  if (admin) {
    try {
      if (state.subscription_id) {
        const sub = await rzp<RzpSubscription>(`/subscriptions/${state.subscription_id}`);
        if (isOurs(sub.notes) && sub.notes?.userId === user.id) {
          const r = await applySubscription(admin, sub, { userId: user.id });
          if ("next" in r) state = r.next;
        }
      } else if (!state.plan_expires_at) {
        const meta = user.user_metadata || {};
        const legacyPayment = meta.razorpay_payment_id as string | undefined;
        if (meta.plan === "pro" && legacyPayment) {
          const p = await rzp<{ status: string; amount: number; created_at: number; notes?: Record<string, string>; email?: string }>(`/payments/${legacyPayment}`);
          const ownedByUser = p.notes?.userId ? p.notes.userId === user.id : (!!p.email && p.email.toLowerCase() === user.email?.toLowerCase());
          if (p.status === "captured" && ownedByUser) {
            const yearly = p.amount >= 47000;
            const expires = new Date(p.created_at * 1000 + (yearly ? 365 : 30) * 86400000).toISOString();
            const { next } = await writePlanState(admin, user.id, { plan_expires_at: expires, billing_cycle: yearly ? "yearly" : "monthly", plan_source: "razorpay_order" });
            state = next;
          }
        }
      }
    } catch (e) {
      console.warn("billing reconcile failed:", e);
    }
  }

  const pro = isProUser({ email: user.email, app_metadata: { billing: state } });
  return NextResponse.json({
    plan: pro ? "pro" : "free",
    expiresAt: state.plan_expires_at || null,
    billingCycle: state.billing_cycle || null,
    source: state.plan_source || null,
    subscriptionId: state.subscription_id || null,
    subscriptionStatus: state.subscription_status || null,
    autoRenew: !!state.subscription_id && ["active", "authenticated", "pending"].includes(state.subscription_status || "") && !state.cancel_at_period_end,
    cancelAtPeriodEnd: !!state.cancel_at_period_end,
    nextChargeAt: state.next_charge_at || null,
    paymentIssue: state.subscription_status === "pending" || state.subscription_status === "halted",
  });
}

export async function GET() { return load(false); }
export async function POST() { return load(true); }

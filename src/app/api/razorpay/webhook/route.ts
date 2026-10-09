import { NextRequest, NextResponse } from "next/server";
import { applySubscription, getAdmin, isOurs, readPlanState, verifyWebhookSignature, type RzpSubscription } from "@/lib/billing";

// Razorpay webhook — the source of truth for renewals.
//
// IMPORTANT: this Razorpay account is shared with another product, and
// Razorpay sends every account event to every webhook. We only act on
// subscriptions Parampara created (notes.app === "parampara") and
// acknowledge everything else with 200 without touching it — returning an
// error for the other product's events would make Razorpay retry and could
// get this webhook disabled.
//
// Dashboard → Account & Settings → Webhooks:
//   URL:    https://www.ourparampara.com/api/razorpay/webhook
//   Secret: RAZORPAY_WEBHOOK_SECRET
//   Events: subscription.authenticated, subscription.activated, subscription.charged,
//           subscription.pending, subscription.halted, subscription.cancelled,
//           subscription.completed, subscription.paused, subscription.resumed,
//           subscription.updated
export async function POST(req: NextRequest) {
  if (!process.env.RAZORPAY_WEBHOOK_SECRET) return NextResponse.json({ error: "Webhook secret not configured" }, { status: 503 });

  const body = await req.text();
  if (!verifyWebhookSignature(body, req.headers.get("x-razorpay-signature") || "")) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  let event: { event: string; payload: Record<string, { entity: Record<string, unknown> }> };
  try { event = JSON.parse(body); } catch { return NextResponse.json({ received: true }); }

  if (!event.event?.startsWith("subscription.")) return NextResponse.json({ received: true, ignored: "not a subscription event" });

  const sub = event.payload?.subscription?.entity as unknown as RzpSubscription | undefined;
  if (!sub || !isOurs(sub.notes) || !sub.notes?.userId) {
    return NextResponse.json({ received: true, ignored: "not a Parampara subscription" });
  }

  const admin = await getAdmin();
  if (!admin) return NextResponse.json({ error: "Server not configured" }, { status: 503 }); // our config problem → let Razorpay retry

  try {
    const result = await applySubscription(admin, sub);
    console.log(`webhook ${event.event} ${sub.id} → ${sub.status}`, "skipped" in result ? "(stale, skipped)" : "");

    if (event.event === "subscription.halted" && !("skipped" in result)) {
      const { data } = await admin.auth.admin.getUserById(sub.notes.userId);
      const u = data?.user;
      if (u?.email) {
        const st = readPlanState(u);
        import("@/lib/email").then(({ sendPlanExpiringEmail }) =>
          sendPlanExpiringEmail(u.email!, u.user_metadata?.full_name || u.email!.split("@")[0], u.user_metadata?.family_name || "Your Family", st.plan_expires_at || new Date().toISOString())
        ).catch(() => {});
      }
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    if (/not found/i.test(msg)) {
      console.warn(`webhook ${event.event} ${sub.id}: ${msg} — acknowledged`);
      return NextResponse.json({ received: true, ignored: "unknown user" });
    }
    console.error(`webhook ${event.event} failed:`, err);
    return NextResponse.json({ error: "processing failed" }, { status: 500 }); // transient → Razorpay retries
  }

  return NextResponse.json({ received: true });
}

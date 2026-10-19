import { NextRequest, NextResponse } from "next/server";

// NOTE: OurParampara currently uses Razorpay only — this route is dormant
// scaffolding for if Stripe is ever turned on for international billing
// (STRIPE_SECRET_KEY is unset in production, so checkout/route.ts never
// reaches Stripe and this webhook never receives real traffic). Kept as a
// passive logger rather than fully wired up, so it doesn't reference plan
// logic that would go stale unnoticed. See api/razorpay/webhook for the
// real (active) subscription lifecycle handling.
export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey || !webhookSecret) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Stripe = require("stripe");
  const stripe = new Stripe(stripeKey);

  const body = await req.text();
  const sig = req.headers.get("stripe-signature") || "";

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      console.log(`✅ Payment completed — ${session.customer_email} upgraded to Pro`);
      break;
    }
    case "customer.subscription.updated": {
      console.log(`🔄 Subscription updated — ${event.data.object.status}`);
      break;
    }
    case "customer.subscription.deleted": {
      console.log(`❌ Subscription cancelled — ${event.data.object.id}`);
      break;
    }
    case "invoice.payment_failed": {
      console.log(`💳 Payment failed — ${event.data.object.customer_email}`);
      break;
    }
  }

  return NextResponse.json({ received: true });
}

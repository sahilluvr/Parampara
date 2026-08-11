import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 503 });
  }

  const body = await req.text();
  const signature = req.headers.get("x-razorpay-signature") || "";

  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(body)
    .digest("hex");

  if (expectedSignature !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(body);
  console.log("Razorpay webhook event:", event.event);

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  switch (event.event) {
    case "payment.captured": {
      const payment = event.payload.payment.entity;
      const userId = payment.notes?.userId;
      const billingCycle = payment.notes?.billingCycle || "monthly";
      console.log(`✅ Payment captured — ₹${payment.amount / 100} from ${payment.email}`);

      // Razorpay is one-time payment today — we own the expiry window.
      const days = billingCycle === "yearly" ? 365 : 30;
      const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();

      if (serviceKey && supabaseUrl && userId) {
        try {
          const { createClient } = await import("@supabase/supabase-js");
          const admin = createClient(supabaseUrl, serviceKey);
          const { data: { user } } = await admin.auth.admin.getUserById(userId);
          if (user) {
            await admin.auth.admin.updateUserById(userId, {
              user_metadata: {
                ...user.user_metadata,
                plan: "pro",
                plan_updated_at: new Date().toISOString(),
                plan_expires_at: expiresAt,
                billing_cycle: billingCycle,
                razorpay_payment_id: payment.id,
              }
            });
            // Send upgrade email
            const email = payment.email || user.email;
            const name = user.user_metadata?.full_name || email?.split("@")[0] || "User";
            const famName = user.user_metadata?.family_name || "Your Family";
            const amount = billingCycle === "yearly" ? "₹470/year" : "₹49/month";
            if (email) {
              const { sendUpgradeEmail } = await import("@/lib/email");
              sendUpgradeEmail(email, name, famName, billingCycle, amount).catch(() => {});
            }
            console.log(`✅ User ${userId} upgraded to Pro via webhook`);
          }
        } catch (err) {
          console.error("Webhook plan update error:", err);
        }
      }
      break;
    }
    case "payment.failed": {
      const payment = event.payload.payment.entity;
      console.log(`❌ Payment failed — ${payment.email}`);
      break;
    }
    case "subscription.activated": {
      const sub = event.payload.subscription.entity;
      console.log(`🔄 Subscription activated — ${sub.id}`);
      break;
    }
    case "subscription.cancelled":
    case "subscription.completed": {
      const sub = event.payload.subscription.entity;
      const userId = sub.notes?.userId;
      console.log(`❌ Subscription ended — ${sub.id}`);

      if (serviceKey && supabaseUrl && userId) {
        try {
          const { createClient } = await import("@supabase/supabase-js");
          const admin = createClient(supabaseUrl, serviceKey);
          const { data: { user } } = await admin.auth.admin.getUserById(userId);
          if (user) {
            await admin.auth.admin.updateUserById(userId, {
              user_metadata: {
                ...user.user_metadata,
                plan: "free",
                plan_cancelled_at: new Date().toISOString(),
                plan_expires_at: null,
              }
            });
            console.log(`⬇️ User ${userId} downgraded to Free`);
          }
        } catch (err) {
          console.error("Webhook downgrade error:", err);
        }
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}

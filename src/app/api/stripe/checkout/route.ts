import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { billingCycle, currency, country } = body;

    const cookieStore = await cookies();
    const sb = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: { getAll: () => cookieStore.getAll(), setAll: (cs) => cs.forEach(({name,value,options}) => cookieStore.set(name,value,options)) } }
    );

    // Verify user is authenticated
    const { data: { user } } = await sb.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "not_authenticated" }, { status: 401 });
    }

    const appUrl = "https://www.ourparampara.com";

    // ── Razorpay (India) ──────────────────────────────────────
    const razorpayKey = process.env.RAZORPAY_KEY_ID;
    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET;

    if (razorpayKey && razorpaySecret) {
      const amountPaise = billingCycle === "yearly" ? 47000 : 4900; // ₹470 or ₹49 in paise
      const authHeader = Buffer.from(`${razorpayKey}:${razorpaySecret}`).toString("base64");
      const orderRes = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Basic ${authHeader}` },
        body: JSON.stringify({
          amount: amountPaise,
          currency: "INR",
          receipt: `order_${user.id.slice(0,8)}_${Date.now()}`,
          notes: { userId: user.id, email: user.email, billingCycle, plan: "pro" },
        }),
      });
      const order = await orderRes.json();
      if (order.id) {
        return NextResponse.json({
          razorpayOrderId: order.id,
          razorpayKey,
          amount: amountPaise,
          currency: "INR",
          userEmail: user.email,
          userName: user.user_metadata?.full_name || user.email?.split("@")[0] || "User",
        });
      }
    }

    // ── Stripe (International) ────────────────────────────────
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (stripeKey) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const Stripe = require("stripe");
      const stripe = new Stripe(stripeKey);
      const priceId = billingCycle === "yearly" ? process.env.STRIPE_PRICE_YEARLY : process.env.STRIPE_PRICE_MONTHLY;
      if (!priceId) return NextResponse.json({ error: "Stripe price IDs not configured in Vercel env vars." }, { status: 500 });
      const session = await stripe.checkout.sessions.create({
        customer_email: user.email,
        payment_method_types: ["card"],
        line_items: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        success_url: `${appUrl}/dashboard?upgraded=true`,
        cancel_url: `${appUrl}/pricing`,
        allow_promotion_codes: true,
        metadata: { userId: user.id, plan: "pro", billingCycle },
      });
      return NextResponse.json({ url: session.url });
    }

    // ── Neither configured — guide the user ──────────────────
    return NextResponse.json({
      error: "payment_not_configured",
      message: "Add RAZORPAY_KEY_ID + RAZORPAY_KEY_SECRET (India) or STRIPE_SECRET_KEY (international) to Vercel environment variables."
    }, { status: 503 });

  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Checkout failed. Please try again." }, { status: 500 });
  }
}

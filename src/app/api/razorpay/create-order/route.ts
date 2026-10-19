import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // One-time orders are retired: they charged "monthly" customers once and
  // never renewed. Checkout now uses /api/razorpay/subscription.
  if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
    return Response.json({ error: "use_subscription", message: "Please refresh the page and try again." }, { status: 410 });
  }
  try {
    const { billingCycle } = await req.json();

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Demo mode
    if (!keyId || !keySecret) {
      return NextResponse.json({ demo: true, message: "Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to Vercel env vars." });
    }

    const Razorpay = require("razorpay");
    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

    // Amount in paise (INR) — ₹499/month or ₹4999/year
    const amount = billingCycle === "yearly" ? 499900 : 49900;
    const currency = "INR";

    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt: `receipt_${Date.now()}`,
      notes: { plan: "pro", billingCycle },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    });
  } catch (error) {
    console.error("Razorpay order error:", error);
    return NextResponse.json({ error: "Could not create order" }, { status: 500 });
  }
}

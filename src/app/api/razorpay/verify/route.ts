import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { paymentId, billingCycle } = await req.json();
    const cookieStore = await cookies();

    // Razorpay is one-time payment (no recurring billing today), so we set
    // our own expiry: 30 days for monthly, 365 for yearly. A daily cron
    // (api/cron/check-expirations) downgrades anyone past this date, and
    // syncPlanFromSupabase() also self-corrects on next login as a backstop.
    const days = billingCycle === "yearly" ? 365 : 30;
    const expiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();

    // Use anon client to get current user
    const sb = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: { getAll: () => cookieStore.getAll(), setAll: (cs) => cs.forEach(({name,value,options}) => cookieStore.set(name,value,options)) } }
    );

    const { data: { user } } = await sb.auth.getUser();
    if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

    // Try service role key first (can update any user)
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (serviceKey) {
      const { createClient } = await import("@supabase/supabase-js");
      const admin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceKey);
      const { error } = await admin.auth.admin.updateUserById(user.id, {
        user_metadata: {
          ...user.user_metadata,
          plan: "pro",
          plan_updated_at: new Date().toISOString(),
          plan_expires_at: expiresAt,
          billing_cycle: billingCycle,
          razorpay_payment_id: paymentId,
        }
      });
      if (error) {
        console.error("Admin plan update error:", error);
        // Fall through to user-level update
      } else {
        // Send beautiful upgrade confirmation email
        const email = user.email;
        const name = user.user_metadata?.full_name || email?.split("@")[0] || "User";
        const famName = user.user_metadata?.family_name || "Your Family";
        const amount = billingCycle === "yearly" ? "₹470/year" : "₹49/month";
        if (email) {
          const { sendUpgradeEmail } = await import("@/lib/email");
          sendUpgradeEmail(email, name, famName, billingCycle, amount).catch(() => {});
        }
        return NextResponse.json({ success: true });
      }
    }

    // Fallback: user-level update (only works for current user's own metadata)
    const { error } = await sb.auth.updateUser({
      data: {
        plan: "pro",
        plan_updated_at: new Date().toISOString(),
        plan_expires_at: expiresAt,
        billing_cycle: billingCycle,
        razorpay_payment_id: paymentId,
      }
    });

    if (error) {
      console.error("Plan update error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Verify error:", err);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}

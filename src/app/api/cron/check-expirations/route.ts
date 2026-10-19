import { NextRequest, NextResponse } from "next/server";
import { applySubscription, getAdmin, isOurs, razorpayConfigured, readPlanState, rzp, writePlanState, type RzpSubscription } from "@/lib/billing";

// ── Daily billing check (vercel.json cron) ───────────────────────
// Renewals are driven by Razorpay webhooks. This job is the safety net:
//  1. Pro has lapsed but the user has a renewing subscription → re-fetch it
//     from Razorpay (in case a webhook was missed) before downgrading.
//  2. Still lapsed → mark Free and send the "Pro has ended" email.
//  3. Pro ends within 3 days and WON'T auto-renew (cancelled, failed payment,
//     or an old one-time purchase) → one reminder per period.
// Protected by CRON_SECRET.

const WARNING_WINDOW_MS = 3 * 24 * 60 * 60 * 1000;
const RENEWING = ["active", "authenticated", "pending"];

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && req.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const admin = await getAdmin();
  if (!admin) return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });

  const results = { checked: 0, refreshed: 0, downgraded: 0, warned: 0, errors: [] as string[] };
  const now = Date.now();

  try {
    for (let page = 1; ; page++) {
      const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
      if (error) { results.errors.push(`listUsers ${page}: ${error.message}`); break; }
      const users = data?.users || [];
      if (!users.length) break;

      for (const user of users) {
        let state = readPlanState(user);
        if (!state.plan_expires_at) continue;
        results.checked++;
        let exp = new Date(state.plan_expires_at).getTime();
        if (Number.isNaN(exp)) continue;

        try {
          // 1. Lapsed but should be renewing → reconcile with Razorpay
          if (exp <= now && state.subscription_id && RENEWING.includes(state.subscription_status || "") && razorpayConfigured()) {
            const sub = await rzp<RzpSubscription>(`/subscriptions/${state.subscription_id}`);
            const r = isOurs(sub.notes) && sub.notes?.userId === user.id ? await applySubscription(admin, sub, { userId: user.id }) : { skipped: true };
            if ("next" in r) { state = r.next; exp = new Date(state.plan_expires_at || 0).getTime(); results.refreshed++; }
          }

          const name = user.user_metadata?.full_name || user.email?.split("@")[0] || "there";
          const fam = user.user_metadata?.family_name || "Your Family";

          // 2. Lapsed → Free
          if (exp <= now) {
            if (state.plan === "pro") {
              await writePlanState(admin, user.id, {}); // recomputes plan → free
              results.downgraded++;
              if (user.email) {
                const { sendPlanExpiredEmail } = await import("@/lib/email");
                await sendPlanExpiredEmail(user.email, name, fam).catch(() => {});
              }
            }
            continue;
          }

          // 3. Ending soon without renewal → remind once per period
          const willRenew = !!state.subscription_id && ["active", "authenticated"].includes(state.subscription_status || "") && !state.cancel_at_period_end;
          if (!willRenew && exp - now <= WARNING_WINDOW_MS && state.expiry_warned_for !== state.plan_expires_at) {
            await writePlanState(admin, user.id, { expiry_warned_for: state.plan_expires_at });
            results.warned++;
            if (user.email) {
              const { sendPlanExpiringEmail } = await import("@/lib/email");
              await sendPlanExpiringEmail(user.email, name, fam, state.plan_expires_at!).catch(() => {});
            }
          }
        } catch (e) {
          results.errors.push(`${user.id}: ${e instanceof Error ? e.message : String(e)}`);
        }
      }
      if (users.length < 1000) break;
    }
  } catch (e) {
    results.errors.push(e instanceof Error ? e.message : String(e));
  }

  console.log("billing cron:", results);
  return NextResponse.json({ ok: true, ...results });
}

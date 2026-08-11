import { NextRequest, NextResponse } from "next/server";

// ── Daily plan expiration check ──────────────────────────────────
// Razorpay (our only payment provider) does one-time orders, not
// recurring subscriptions — so there is no webhook that fires when a
// "month" or "year" of Pro access naturally runs out. plan_expires_at
// (set in api/razorpay/verify and api/razorpay/webhook on payment) is
// the only signal we have, and this cron is what actually acts on it:
//
//   1. Users whose plan_expires_at has passed → downgrade to free,
//      send "your Pro plan has ended" email.
//   2. Users expiring in the next 3 days → send a renewal reminder
//      (once — guarded by plan_expiry_warned_at so we don't spam).
//
// syncPlanFromSupabase() in lib/plan.ts is a client-side backstop that
// does the same downgrade on next login if this cron is ever delayed,
// so a stale cron run never leaves someone with Pro access they didn't
// pay for — but relying on that alone means a user who doesn't open
// the app for weeks keeps Pro access past what they paid for, which is
// why this cron exists to catch it proactively every day regardless of
// whether the user logs in.
//
// Wired up in vercel.json to run daily. Protected by CRON_SECRET so it
// can't be triggered by anyone who finds the URL.

const WARNING_WINDOW_MS = 3 * 24 * 60 * 60 * 1000; // 3 days before expiry

export async function GET(req: NextRequest) {
  // Vercel Cron sends this header automatically; also accept a manual
  // Authorization: Bearer <CRON_SECRET> for local/manual testing.
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!serviceKey || !supabaseUrl) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
  }

  const { createClient } = await import("@supabase/supabase-js");
  const admin = createClient(supabaseUrl, serviceKey);

  const results = { checked: 0, downgraded: 0, warned: 0, errors: [] as string[] };

  try {
    // Page through all users — fine at this scale (early-stage product).
    // If the user base grows large enough for this to matter, switch to
    // a Postgres function queried directly instead of the admin API.
    let page = 1;
    const perPage = 1000;
    const now = Date.now();

    for (;;) {
      const { data, error } = await admin.auth.admin.listUsers({ page, perPage });
      if (error) {
        results.errors.push(`listUsers page ${page}: ${error.message}`);
        break;
      }
      const users = data?.users || [];
      if (users.length === 0) break;

      for (const user of users) {
        const meta = user.user_metadata || {};
        if (meta.plan !== "pro") continue;
        const expiresAt = meta.plan_expires_at as string | undefined;
        if (!expiresAt) continue; // no expiry set — lifetime/override account, skip

        results.checked++;
        const expiresAtMs = new Date(expiresAt).getTime();
        if (Number.isNaN(expiresAtMs)) continue;

        const email = user.email;
        const name = meta.full_name || email?.split("@")[0] || "User";
        const famName = meta.family_name || "Your Family";

        // ── Already expired → downgrade ──────────────────────────
        if (expiresAtMs <= now) {
          try {
            await admin.auth.admin.updateUserById(user.id, {
              user_metadata: {
                ...meta,
                plan: "free",
                plan_expired_at: new Date().toISOString(),
                plan_expires_at: null,
              },
            });
            results.downgraded++;
            if (email) {
              const { sendPlanExpiredEmail } = await import("@/lib/email");
              await sendPlanExpiredEmail(email, name, famName).catch(() => {});
            }
          } catch (e) {
            results.errors.push(`downgrade ${user.id}: ${e instanceof Error ? e.message : String(e)}`);
          }
          continue;
        }

        // ── Expiring within the warning window → warn once ───────
        const alreadyWarned = !!meta.plan_expiry_warned_at;
        if (!alreadyWarned && expiresAtMs - now <= WARNING_WINDOW_MS) {
          try {
            await admin.auth.admin.updateUserById(user.id, {
              user_metadata: { ...meta, plan_expiry_warned_at: new Date().toISOString() },
            });
            results.warned++;
            if (email) {
              const { sendPlanExpiringEmail } = await import("@/lib/email");
              await sendPlanExpiringEmail(email, name, famName, expiresAt).catch(() => {});
            }
          } catch (e) {
            results.errors.push(`warn ${user.id}: ${e instanceof Error ? e.message : String(e)}`);
          }
        }
      }

      if (users.length < perPage) break; // last page
      page++;
    }
  } catch (e) {
    results.errors.push(e instanceof Error ? e.message : String(e));
  }

  console.log("Plan expiration cron run:", results);
  return NextResponse.json({ ok: true, ...results });
}

// ── Plan Management ─────────────────────────────────────────
// Plan is PER USER — stored in Supabase user_metadata.plan
// NEVER inherited from family membership
//
// Expiry model (Razorpay only — no Stripe in production today):
// Razorpay does one-time orders, not recurring subscriptions, so there's
// no webhook that fires when a "month" or "year" of access naturally
// runs out. Instead: plan_expires_at = paid_at + 30/365 days is set
// ourselves at payment time (api/razorpay/verify, api/razorpay/webhook),
// and a daily cron (api/cron/check-expirations) downgrades anyone past
// that date and emails them. syncPlanFromSupabase() below is the final
// backstop: even if the cron run is ever delayed, a user whose
// plan_expires_at has passed is always treated as free on next page
// load, regardless of what's still sitting in their metadata.

const PRO_OVERRIDE_EMAILS = [
  "sahilaggarwal43@gmail.com",
];

function isExpired(expiresAt?: string | null): boolean {
  if (!expiresAt) return false; // no expiry set — treat as not expired (legacy users)
  const t = new Date(expiresAt).getTime();
  if (Number.isNaN(t)) return false;
  return Date.now() > t;
}

// On every page load, sync plan from Supabase for the CURRENT logged-in user
export async function syncPlanFromSupabase(): Promise<"pro"|"free"> {
  try {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_KEY) return "free";

    const { createBrowserClient } = await import("@supabase/ssr");
    const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
    const { data: { user } } = await sb.auth.getUser();

    if (!user) {
      // No logged in user — clear plan so it doesn't bleed to next user
      if (typeof window !== "undefined") {
        localStorage.removeItem("parampara_plan");
        localStorage.removeItem("parampara_plan_expires_at");
      }
      return "free";
    }

    const email = user.email?.toLowerCase().trim() || "";
    const userId = user.id;

    // Store current user ID — used to detect user switches
    const storedUserId = localStorage.getItem("parampara_user_id");
    if (storedUserId && storedUserId !== userId) {
      // Different user logged in — clear all plan/user data
      localStorage.removeItem("parampara_plan");
      localStorage.removeItem("parampara_plan_expires_at");
      localStorage.removeItem("parampara_user_email");
      localStorage.removeItem("parampara_user_name");
    }
    localStorage.setItem("parampara_user_id", userId);
    localStorage.setItem("parampara_user_email", email);

    const fullName = user.user_metadata?.full_name || user.user_metadata?.name || "";
    if (fullName) localStorage.setItem("parampara_user_name", fullName);

    // Check hardcoded override (owner account) — never expires
    if (PRO_OVERRIDE_EMAILS.includes(email)) {
      localStorage.setItem("parampara_plan", "pro");
      localStorage.removeItem("parampara_plan_expires_at");
      return "pro";
    }

    // Plan comes ONLY from THIS user's Supabase metadata
    const metaPlan = user.user_metadata?.plan as string | undefined;
    const expiresAt = user.user_metadata?.plan_expires_at as string | undefined;

    if (metaPlan === "pro" && !isExpired(expiresAt)) {
      localStorage.setItem("parampara_plan", "pro");
      if (expiresAt) localStorage.setItem("parampara_plan_expires_at", expiresAt);
      return "pro";
    }

    // Either never was pro, or subscription has expired — explicitly set free.
    // If it just expired, also flip it in Supabase so other devices/sessions
    // see the correct state immediately rather than waiting for the cron.
    if (metaPlan === "pro" && isExpired(expiresAt)) {
      try {
        await sb.auth.updateUser({ data: { plan: "free", plan_expired_at: new Date().toISOString() } });
      } catch { /* best-effort — cron will catch it too */ }
    }

    localStorage.setItem("parampara_plan", "free");
    localStorage.removeItem("parampara_plan_expires_at");
    return "free";

  } catch {
    return "free";
  }
}

export function getLocalPlan(): "pro"|"free" {
  if (typeof window === "undefined") return "free";
  return (localStorage.getItem("parampara_plan") as "pro"|"free") || "free";
}

// Returns the ISO expiry date for the current local session's plan, if any.
// Null means either free, or pro with no expiry (e.g. lifetime/override).
export function getLocalPlanExpiresAt(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("parampara_plan_expires_at");
}

export function isPlanPro(): boolean {
  return getLocalPlan() === "pro";
}

// Only sets pro for override emails — never for family members
export function initPlanFromEmail(email?: string | null) {
  if (!email) return;
  if (typeof window === "undefined") return;
  // Only override for known pro accounts — everyone else starts as free
  if (PRO_OVERRIDE_EMAILS.includes(email.toLowerCase().trim())) {
    localStorage.setItem("parampara_plan", "pro");
  }
  // Do NOT touch plan for other emails — let syncPlanFromSupabase handle it
}

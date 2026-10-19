// ── Billing (server only) ──────────────────────────────────────
// Razorpay Subscriptions: real auto-renewing monthly / yearly plans.
//
// WHY THIS REWRITE
// • Checkout used Razorpay *orders* — one-time charges. "Monthly" buyers were
//   charged once and never again, then silently dropped to Free after 30 days.
// • /api/razorpay/verify trusted any paymentId posted to it (no signature
//   check), so anyone could grant themselves Pro.
// • The plan lived in user_metadata, which every signed-in user can edit from
//   the browser. The source of truth is now app_metadata (service-role only);
//   user_metadata keeps a mirror purely for display / older code.
//
// Access model: a user is Pro while plan_expires_at is in the future.
// plan_expires_at = the end of the period Razorpay says they've paid for
// (subscription.current_end), plus a short grace while Razorpay retries a
// failed renewal. Webhooks extend it on every successful charge; it is never
// shortened by an out-of-order webhook (we always take the later date).

import crypto from "crypto";
import type { SupabaseClient, User } from "@supabase/supabase-js";

export type BillingCycle = "monthly" | "yearly";

export const PRICES_PAISE: Record<BillingCycle, number> = { monthly: 4900, yearly: 47000 };
export const PRICE_LABEL: Record<BillingCycle, string> = { monthly: "₹49/month", yearly: "₹470/year" };
const PLAN_NAMES: Record<BillingCycle, string> = { monthly: "Parampara Pro Monthly", yearly: "Parampara Pro Yearly" };
const TOTAL_COUNT: Record<BillingCycle, number> = { monthly: 120, yearly: 10 }; // ~10 years; Razorpay requires a count
const GRACE_MS = 3 * 24 * 60 * 60 * 1000; // Razorpay retries a failed renewal for a few days
const CYCLE_MS: Record<BillingCycle, number> = { monthly: 31 * 86400000, yearly: 366 * 86400000 };

export const PRO_OVERRIDE_EMAILS = ["sahilaggarwal43@gmail.com"];

// This Razorpay account is SHARED with another product. Webhooks are
// account-wide, so every subscription/payment event from the other product
// also arrives here. Everything Parampara creates is tagged with notes.app
// and anything without the tag is ignored (acknowledged with 200, untouched).
export const APP_TAG = "parampara";
export function isOurs(notes?: Record<string, string> | null): boolean {
  return notes?.app === APP_TAG;
}

// ── Razorpay API ──
export function razorpayConfigured() {
  return !!(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
}

export async function rzp<T = Record<string, unknown>>(path: string, init: { method?: string; body?: unknown } = {}): Promise<T> {
  const key = process.env.RAZORPAY_KEY_ID!, secret = process.env.RAZORPAY_KEY_SECRET!;
  const res = await fetch(`https://api.razorpay.com/v1${path}`, {
    method: init.method || "GET",
    headers: { "Content-Type": "application/json", Authorization: `Basic ${Buffer.from(`${key}:${secret}`).toString("base64")}` },
    body: init.body ? JSON.stringify(init.body) : undefined,
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = (data as { error?: { description?: string } })?.error?.description || `Razorpay ${res.status}`;
    throw new Error(msg);
  }
  return data as T;
}

export type RzpSubscription = {
  id: string; plan_id: string; status: string; current_start?: number | null; current_end?: number | null;
  charge_at?: number | null; start_at?: number | null; ended_at?: number | null; paid_count?: number;
  remaining_count?: number; short_url?: string; notes?: Record<string, string>; has_scheduled_changes?: boolean;
};

// Find-or-create the Razorpay plan for a cycle. Override with env
// RAZORPAY_PLAN_ID_MONTHLY / RAZORPAY_PLAN_ID_YEARLY if you create them in the dashboard.
const planCache: Partial<Record<BillingCycle, string>> = {};
export async function getPlanId(cycle: BillingCycle): Promise<string> {
  const envId = cycle === "monthly" ? process.env.RAZORPAY_PLAN_ID_MONTHLY : process.env.RAZORPAY_PLAN_ID_YEARLY;
  if (envId) return envId;
  if (planCache[cycle]) return planCache[cycle]!;
  const list = await rzp<{ items: { id: string; period: string; interval: number; item: { name: string; amount: number; currency: string } }[] }>("/plans?count=100");
  const found = list.items?.find(p => p.item?.name === PLAN_NAMES[cycle] && p.item.amount === PRICES_PAISE[cycle] && p.item.currency === "INR" && p.period === cycle && p.interval === 1);
  if (found) return (planCache[cycle] = found.id);
  const created = await rzp<{ id: string }>("/plans", {
    method: "POST",
    body: { period: cycle, interval: 1, item: { name: PLAN_NAMES[cycle], amount: PRICES_PAISE[cycle], currency: "INR", description: "OurParampara Pro" } },
  });
  return (planCache[cycle] = created.id);
}

export function cycleOfPlan(planId: string): BillingCycle {
  if (planId && planId === (process.env.RAZORPAY_PLAN_ID_YEARLY || planCache.yearly)) return "yearly";
  return "monthly";
}

// ── Signatures ──
function safeEqual(a: string, b: string) {
  const ba = Buffer.from(a), bb = Buffer.from(b);
  return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
}
export function verifySubscriptionSignature(paymentId: string, subscriptionId: string, signature: string) {
  const expected = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!).update(`${paymentId}|${subscriptionId}`).digest("hex");
  return safeEqual(expected, signature || "");
}
export function verifyWebhookSignature(body: string, signature: string) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) return false;
  const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");
  return safeEqual(expected, signature || "");
}

// ── Plan state on the user ──
export type PlanState = {
  plan?: "pro" | "free";
  plan_expires_at?: string | null;
  billing_cycle?: BillingCycle;
  plan_source?: "razorpay_subscription" | "razorpay_order" | "override";
  subscription_id?: string | null;
  subscription_status?: string | null;
  cancel_at_period_end?: boolean;
  next_charge_at?: string | null;
  plan_updated_at?: string;
  expiry_warned_for?: string | null;
};

export function readPlanState(user: Pick<User, "app_metadata" | "email">): PlanState {
  return ((user.app_metadata || {}) as { billing?: PlanState }).billing || {};
}

/** Server-side Pro check. Never trust user_metadata (user-editable). */
export function isProUser(user: Pick<User, "app_metadata" | "email"> | null | undefined): boolean {
  if (!user) return false;
  if (user.email && PRO_OVERRIDE_EMAILS.includes(user.email.toLowerCase())) return true;
  const s = readPlanState(user);
  return !!s.plan_expires_at && new Date(s.plan_expires_at).getTime() > Date.now();
}

export async function writePlanState(admin: SupabaseClient, userId: string, patch: PlanState) {
  const { data } = await admin.auth.admin.getUserById(userId);
  const user = data?.user;
  if (!user) throw new Error(`user ${userId} not found`);
  const prev = readPlanState(user);
  const next: PlanState = { ...prev, ...patch, plan_updated_at: new Date().toISOString() };
  const expMs = next.plan_expires_at ? new Date(next.plan_expires_at).getTime() : 0;
  next.plan = expMs > Date.now() ? "pro" : "free";
  const { error } = await admin.auth.admin.updateUserById(userId, {
    app_metadata: { ...(user.app_metadata || {}), billing: next },
    // display mirror only — the app reads app_metadata
    user_metadata: {
      ...(user.user_metadata || {}),
      plan: next.plan, plan_expires_at: next.plan_expires_at ?? null, billing_cycle: next.billing_cycle,
      subscription_status: next.subscription_status ?? null, plan_expiry_warned_at: patch.plan_expires_at ? null : user.user_metadata?.plan_expiry_warned_at ?? null,
    },
  });
  if (error) throw error;
  return { prev, next, user };
}

const toIso = (sec?: number | null) => (sec ? new Date(sec * 1000).toISOString() : null);
const later = (a?: string | null, b?: string | null) => {
  const am = a ? new Date(a).getTime() : 0, bm = b ? new Date(b).getTime() : 0;
  return (am >= bm ? a : b) || null;
};

/**
 * Apply a Razorpay subscription entity to the owning user. Idempotent and
 * safe with out-of-order webhooks: access is only ever extended here.
 * `provisional` = signature-verified checkout before Razorpay reports the period.
 */
export async function applySubscription(admin: SupabaseClient, sub: RzpSubscription, opts: { userId?: string; provisional?: boolean } = {}) {
  const userId = opts.userId || sub.notes?.userId;
  if (!userId) throw new Error(`subscription ${sub.id} has no userId`);
  const cycle: BillingCycle = (sub.notes?.billingCycle as BillingCycle) || cycleOfPlan(sub.plan_id);

  const { data } = await admin.auth.admin.getUserById(userId);
  if (!data?.user) throw new Error(`user ${userId} not found`);
  const prev = readPlanState(data.user);

  // Ignore stale events for an older subscription the user has replaced
  if (prev.subscription_id && prev.subscription_id !== sub.id && ["active", "authenticated", "pending"].includes(prev.subscription_status || "")) {
    if (["cancelled", "completed", "expired", "halted"].includes(sub.status)) return { skipped: true };
  }

  let periodEnd = toIso(sub.current_end);
  // Checkout just succeeded (signature verified) but Razorpay hasn't reported the
  // period yet. If billing starts now, the first charge was taken at checkout —
  // grant one cycle; the subscription.charged webhook replaces it with the exact
  // date. If billing is deferred (start_at in the future), access is unchanged.
  const billsNow = !sub.start_at || sub.start_at * 1000 <= Date.now() + 5 * 60 * 1000;
  if (!periodEnd && opts.provisional && billsNow && !["cancelled", "halted", "completed", "expired"].includes(sub.status)) {
    periodEnd = new Date(Date.now() + CYCLE_MS[cycle]).toISOString();
  }
  const renewing = ["active", "pending", "authenticated"].includes(sub.status);
  const graceEnd = periodEnd ? new Date(new Date(periodEnd).getTime() + (renewing ? GRACE_MS : 0)).toISOString() : null;

  // A re-subscription replaces an old, cancel-scheduled one: stop the old
  // mandate now that the new one is authorised (paid time is kept).
  const replaces = sub.notes?.replaces;
  if (replaces && replaces !== sub.id && ["active", "authenticated"].includes(sub.status)) {
    await rzp(`/subscriptions/${replaces}/cancel`, { method: "POST", body: { cancel_at_cycle_end: 0 } }).catch(() => {});
  }

  return writePlanState(admin, userId, {
    plan_expires_at: later(prev.plan_expires_at, graceEnd),
    billing_cycle: cycle,
    plan_source: "razorpay_subscription",
    subscription_id: sub.id,
    subscription_status: sub.status,
    next_charge_at: renewing ? toIso(sub.charge_at) : null,
    cancel_at_period_end: sub.status === "cancelled" ? false : prev.subscription_id === sub.id ? !!prev.cancel_at_period_end : false,
  });
}

export async function getAdmin(): Promise<SupabaseClient | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  const { createClient } = await import("@supabase/supabase-js");
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

/**
 * For Pro-only API routes. Returns null when allowed, or a 401/402 response.
 * (The AI and Heritage Book APIs were callable by anyone before — the Pro
 * check only existed in the browser.)
 */
export async function requirePro(): Promise<Response | null> {
  const { getRouteClient } = await import("./supabaseServer");
  const sb = await getRouteClient();
  const { data: { user } } = sb ? await sb.auth.getUser() : { data: { user: null } };
  if (!user) return Response.json({ error: "Please sign in." }, { status: 401 });
  if (!isProUser(user)) return Response.json({ error: "This is a Pro feature.", upgrade: "/upgrade" }, { status: 402 });
  return null;
}

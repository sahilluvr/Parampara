// ── Engagement engine (server only) ───────────────────────────────
// One daily run decides who should hear from us, sends at most ONE email per
// person per day, never repeats a message, respects unsubscribes, and stays
// under the Resend free-plan limit (ENGAGEMENT_DAILY_CAP, default 60).
//
// Campaigns, in priority order:
//   pro_ended / pro_ended_2  — Pro lapsed and isn't renewing (incl. early
//                              one-time customers), +10-day follow-up
//   nudge_family             — day 1–14 after sign-up, no family added yet
//   nudge_ritual             — day 4–21, family added but no ritual saved
//   winback_15/30/60         — inactive 15 / 30 / 60 days (resets when they
//                              come back, so a later lapse gets emails again)
import crypto from "crypto";
import type { SupabaseClient, User } from "@supabase/supabase-js";
import { readPlanState, rzp, razorpayConfigured, writePlanState } from "./billing";
import { PRESET_FESTIVALS } from "./store";

const DAY = 86400000;
const APP = "https://www.ourparampara.com";

export type PlannedEmail = { userId: string; email: string; name: string; campaign: string; reason: string };
type Sent = Record<string, string>;

function secret() { return process.env.CRON_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || "parampara"; }
export function unsubToken(userId: string) { return crypto.createHmac("sha256", secret()).update(`unsub:${userId}`).digest("hex").slice(0, 32); }
export function unsubUrl(userId: string) { return `${APP}/api/email/unsubscribe?u=${encodeURIComponent(userId)}&t=${unsubToken(userId)}`; }
export function verifyUnsub(userId: string, token: string) {
  const a = Buffer.from(unsubToken(userId)), b = Buffer.from(token || "");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function lastActive(u: User): number {
  const a = u.last_sign_in_at ? new Date(u.last_sign_in_at).getTime() : 0;
  const b = u.user_metadata?.last_active_at ? new Date(u.user_metadata.last_active_at as string).getTime() : 0;
  return Math.max(a, b, new Date(u.created_at).getTime());
}

function nextFestival(): string | null {
  const now = Date.now();
  const f = PRESET_FESTIVALS.map(x => ({ n: x.name, t: new Date(x.date).getTime() })).filter(x => x.t > now && x.t - now < 30 * DAY).sort((a, b) => a.t - b.t)[0];
  return f ? f.n : null;
}

// Early customers paid with one-time orders and were only recorded in
// user_metadata; verify with Razorpay and record their (now past) Pro period.
async function migrateLegacyPayer(admin: SupabaseClient, u: User): Promise<User> {
  const b = readPlanState(u);
  const meta = u.user_metadata || {};
  if (b.plan_expires_at || meta.plan !== "pro" || !meta.razorpay_payment_id || !razorpayConfigured()) return u;
  try {
    const p = await rzp<{ status: string; amount: number; created_at: number; notes?: Record<string, string>; email?: string }>(`/payments/${meta.razorpay_payment_id}`);
    const owned = p.notes?.userId ? p.notes.userId === u.id : (!!p.email && p.email.toLowerCase() === u.email?.toLowerCase());
    if (p.status !== "captured" || !owned) return u;
    const yearly = p.amount >= 47000;
    const { next } = await writePlanState(admin, u.id, {
      plan_expires_at: new Date(p.created_at * 1000 + (yearly ? 365 : 30) * DAY).toISOString(),
      billing_cycle: yearly ? "yearly" : "monthly", plan_source: "razorpay_order",
    });
    return { ...u, app_metadata: { ...(u.app_metadata || {}), billing: next } } as User;
  } catch { return u; }
}

export async function runEngagement(admin: SupabaseClient, opts: { dryRun?: boolean; cap?: number } = {}) {
  const cap = opts.cap ?? parseInt(process.env.ENGAGEMENT_DAILY_CAP || "60");
  const now = Date.now();

  const users: User[] = [];
  for (let page = 1; page < 50; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    users.push(...(data?.users || []));
    if (!data || data.users.length < 1000) break;
  }

  // Family activity per user (families they created or belong to)
  const [{ data: fams }, { data: mems }, { data: rits }] = await Promise.all([
    admin.from("families").select("id,name,created_by").limit(10000),
    admin.from("family_members").select("family_id,user_id").limit(100000),
    admin.from("rituals").select("family_id").limit(100000),
  ]);
  const famsOf = new Map<string, Set<string>>();
  const add = (uid: string, fid: string) => { if (!famsOf.has(uid)) famsOf.set(uid, new Set()); famsOf.get(uid)!.add(fid); };
  for (const f of fams || []) if (f.created_by) add(f.created_by, f.id);
  for (const m of mems || []) if (m.user_id) add(m.user_id, m.family_id);
  const memberCount = new Map<string, number>(), ritualCount = new Map<string, number>();
  for (const m of mems || []) memberCount.set(m.family_id, (memberCount.get(m.family_id) || 0) + 1);
  for (const r of rits || []) ritualCount.set(r.family_id, (ritualCount.get(r.family_id) || 0) + 1);
  const famName = new Map((fams || []).map(f => [f.id, f.name as string]));
  const festival = nextFestival();

  const planned: (PlannedEmail & { priority: number; send: () => Promise<boolean> })[] = [];
  const { sendNudgeAddFamilyEmail, sendNudgeFirstRitualEmail, sendWeMissYouEmail, sendProWinBackEmail } = await import("./email");

  for (let u of users) {
    if (!u.email || u.user_metadata?.email_opt_out) continue;
    if (!opts.dryRun) u = await migrateLegacyPayer(admin, u);
    const sent: Sent = ((u.app_metadata || {}) as { engagement?: Sent }).engagement || {};
    const name = String(u.user_metadata?.full_name || u.user_metadata?.name || (u.email || "").split("@")[0]).split(" ")[0];
    const fids = [...(famsOf.get(u.id) || [])];
    const members = fids.reduce((n, f) => n + (memberCount.get(f) || 0), 0);
    const rituals = fids.reduce((n, f) => n + (ritualCount.get(f) || 0), 0);
    const family = famName.get(fids[0]) || "your family";
    const age = (now - new Date(u.created_at).getTime()) / DAY;
    const inactive = (now - lastActive(u)) / DAY;
    const lastAct = lastActive(u);
    const unsub = unsubUrl(u.id);
    const b = readPlanState(u);
    const proLapsed = !!b.plan_expires_at && new Date(b.plan_expires_at).getTime() < now && now - new Date(b.plan_expires_at).getTime() < 120 * DAY;
    const renewing = !!b.subscription_id && ["active", "authenticated", "pending"].includes(b.subscription_status || "");
    const sentAfterActivity = (k: string) => !!sent[k] && new Date(sent[k]).getTime() > lastAct;

    const push = (campaign: string, priority: number, reason: string, send: () => Promise<boolean>) =>
      planned.push({ userId: u.id, email: u.email!, name, campaign, reason, priority, send });

    if (proLapsed && !renewing) {
      const forExpiry = `pro_ended:${b.plan_expires_at}`;
      if (!sent[forExpiry]) { push(forExpiry, 1, `Pro ended ${new Date(b.plan_expires_at!).toLocaleDateString("en-IN")}`, () => sendProWinBackEmail(u.email!, name, family, false, unsub)); continue; }
      const f2 = `pro_ended_2:${b.plan_expires_at}`;
      if (!sent[f2] && now - new Date(sent[forExpiry]).getTime() > 10 * DAY) { push(f2, 2, "Pro win-back follow-up", () => sendProWinBackEmail(u.email!, name, family, true, unsub)); continue; }
    }
    if (age >= 1 && age < 14 && members <= 1 && !sent.nudge_family) { push("nudge_family", 3, "Signed up, no family added", () => sendNudgeAddFamilyEmail(u.email!, name, unsub)); continue; }
    if (age >= 4 && age < 21 && members > 1 && rituals === 0 && !sent.nudge_ritual) { push("nudge_ritual", 4, "Family added, no ritual yet", () => sendNudgeFirstRitualEmail(u.email!, name, unsub)); continue; }
    for (const d of [60, 30, 15]) {
      const k = `winback_${d}`;
      if (inactive >= d && !sentAfterActivity(k)) {
        // only the highest stage reached, and never two stages within 10 days
        const recent = ["winback_15", "winback_30", "winback_60"].some(x => sent[x] && now - new Date(sent[x]).getTime() < 10 * DAY);
        if (!recent) push(k, 5, `Inactive ${Math.floor(inactive)} days`, () => sendWeMissYouEmail(u.email!, name, family, Math.floor(inactive), festival, unsub));
        break;
      }
    }
  }

  planned.sort((a, b) => a.priority - b.priority);
  const todays = planned.slice(0, cap);
  const result = { candidates: planned.length, scheduled: todays.length, sent: 0, failed: 0, byCampaign: {} as Record<string, number>, emails: todays.map(({ userId, email, name, campaign, reason }) => ({ userId, email, name, campaign: campaign.split(":")[0], reason })) };
  for (const e of todays) { const k = e.campaign.split(":")[0]; result.byCampaign[k] = (result.byCampaign[k] || 0) + 1; }
  if (opts.dryRun) return result;

  for (const e of todays) {
    const ok = await e.send().catch(() => false);
    if (!ok) { result.failed++; continue; }
    result.sent++;
    const { data } = await admin.auth.admin.getUserById(e.userId);
    const cur = data?.user;
    if (!cur) continue;
    const eng: Sent = { ...(((cur.app_metadata || {}) as { engagement?: Sent }).engagement || {}), [e.campaign]: new Date().toISOString() };
    await admin.auth.admin.updateUserById(e.userId, { app_metadata: { ...(cur.app_metadata || {}), engagement: eng } });
  }
  return result;
}

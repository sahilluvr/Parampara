// Loads everything the admin dashboard needs with the service-role client.
import type { User } from "@supabase/supabase-js";
import { getAdmin, readPlanState, PRO_OVERRIDE_EMAILS } from "./billing";

export type AdminUserRow = {
  id: string; email: string; name: string; createdAt: string; lastSignIn: string | null; confirmed: boolean;
  plan: "pro" | "free"; planUntil: string | null; cycle: string | null; subStatus: string | null; autoRenew: boolean;
  paymentIssue: boolean; source: string | null; families: number; provider: string;
  familyNames: string[]; membersAdded: number; ritualsSaved: number; subscriptionId: string | null; nextCharge: string | null;
  stage: "signed_up" | "family" | "members" | "ritual" | "pro";
};
export type AdminFamilyRow = { id: string; name: string; createdAt: string; members: number; accounts: number; rituals: number; owner: string };

export async function loadAdminData() {
  const admin = await getAdmin();
  if (!admin) throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured");

  const users: User[] = [];
  for (let page = 1; page < 50; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;
    users.push(...(data?.users || []));
    if (!data || data.users.length < 1000) break;
  }

  const [{ data: families }, { data: members }, { data: rituals }] = await Promise.all([
    admin.from("families").select("id,name,created_at,created_by").limit(10000),
    admin.from("family_members").select("family_id,user_id").limit(100000),
    admin.from("rituals").select("id,family_id,created_at").limit(100000),
  ]);

  const memberCount = new Map<string, number>(), accountCount = new Map<string, number>(), familiesOfUser = new Map<string, number>();
  const famIdsOfUser = new Map<string, Set<string>>();
  for (const m of members || []) {
    memberCount.set(m.family_id, (memberCount.get(m.family_id) || 0) + 1);
    if (m.user_id) {
      accountCount.set(m.family_id, (accountCount.get(m.family_id) || 0) + 1);
      familiesOfUser.set(m.user_id, (familiesOfUser.get(m.user_id) || 0) + 1);
      if (!famIdsOfUser.has(m.user_id)) famIdsOfUser.set(m.user_id, new Set());
      famIdsOfUser.get(m.user_id)!.add(m.family_id);
    }
  }
  for (const f of families || []) {
    if (!f.created_by) continue;
    if (!famIdsOfUser.has(f.created_by)) famIdsOfUser.set(f.created_by, new Set());
    famIdsOfUser.get(f.created_by)!.add(f.id);
  }
  const famName = new Map((families || []).map(f => [f.id, f.name as string]));
  const ritualCount = new Map<string, number>();
  for (const r of rituals || []) ritualCount.set(r.family_id, (ritualCount.get(r.family_id) || 0) + 1);
  const emailById = new Map(users.map(u => [u.id, u.email || ""]));

  const now = Date.now();
  const userRows: AdminUserRow[] = users.map(u => {
    const b = readPlanState(u);
    const override = !!u.email && PRO_OVERRIDE_EMAILS.includes(u.email.toLowerCase());
    const pro = override || (!!b.plan_expires_at && new Date(b.plan_expires_at).getTime() > now);
    return {
      id: u.id, email: u.email || "", name: (u.user_metadata?.full_name || u.user_metadata?.name || "") as string,
      createdAt: u.created_at, lastSignIn: u.last_sign_in_at || null, confirmed: !!u.email_confirmed_at,
      plan: (pro ? "pro" : "free") as "pro" | "free", planUntil: override ? null : (b.plan_expires_at || null), cycle: b.billing_cycle || null,
      subStatus: b.subscription_status || null, source: override ? "override" : (b.plan_source || null),
      autoRenew: !!b.subscription_id && ["active", "authenticated", "pending"].includes(b.subscription_status || "") && !b.cancel_at_period_end,
      paymentIssue: b.subscription_status === "pending" || b.subscription_status === "halted",
      families: famIdsOfUser.get(u.id)?.size || familiesOfUser.get(u.id) || 0, provider: (u.app_metadata?.provider as string) || "email",
      familyNames: [...(famIdsOfUser.get(u.id) || [])].map(id => famName.get(id) || "").filter(Boolean),
      membersAdded: [...(famIdsOfUser.get(u.id) || [])].reduce((n, id) => n + (memberCount.get(id) || 0), 0),
      ritualsSaved: [...(famIdsOfUser.get(u.id) || [])].reduce((n, id) => n + (ritualCount.get(id) || 0), 0),
      subscriptionId: b.subscription_id || null, nextCharge: b.next_charge_at || null,
      stage: "signed_up" as AdminUserRow["stage"],
    };
  }).map(r => ({ ...r, stage: (r.plan === "pro" ? "pro" : r.ritualsSaved > 0 ? "ritual" : r.membersAdded > 1 ? "members" : r.families > 0 ? "family" : "signed_up") as AdminUserRow["stage"] }))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const familyRows: AdminFamilyRow[] = (families || []).map(f => ({
    id: f.id, name: f.name, createdAt: f.created_at, members: memberCount.get(f.id) || 0, accounts: accountCount.get(f.id) || 0,
    rituals: ritualCount.get(f.id) || 0, owner: emailById.get(f.created_by) || "—",
  })).sort((a, b) => b.members - a.members);

  const day = 86400000;
  const since = (d: number) => userRows.filter(u => now - new Date(u.createdAt).getTime() < d * day).length;
  const pros = userRows.filter(u => u.plan === "pro" && u.source !== "override");
  const monthly = pros.filter(u => u.autoRenew && u.cycle === "monthly").length;
  const yearly = pros.filter(u => u.autoRenew && u.cycle === "yearly").length;

  // Signups per day, last 30 days
  const signups: { date: string; count: number }[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now - i * day); const key = d.toISOString().slice(0, 10);
    signups.push({ date: key, count: userRows.filter(u => u.createdAt.slice(0, 10) === key).length });
  }

  // Onboarding funnel (how far each user has got)
  const order = ["signed_up", "family", "members", "ritual", "pro"] as const;
  const reached = (st: (typeof order)[number]) => userRows.filter(u => order.indexOf(u.stage) >= order.indexOf(st)).length;
  const funnel = [
    { label: "Signed up", count: reached("signed_up") },
    { label: "Has a family space", count: reached("family") },
    { label: "Added family members", count: reached("members") },
    { label: "Saved a ritual", count: reached("ritual") },
    { label: "Upgraded to Pro", count: reached("pro") },
  ];

  return {
    users: userRows, families: familyRows, signups, funnel,
    kpi: {
      users: userRows.length, new7: since(7), new30: since(30),
      active7: userRows.filter(u => u.lastSignIn && now - new Date(u.lastSignIn).getTime() < 7 * day).length,
      unconfirmed: userRows.filter(u => !u.confirmed).length,
      families: familyRows.length, members: (members || []).length, rituals: (rituals || []).length,
      pro: pros.length, monthly, yearly, mrr: monthly * 49 + Math.round((yearly * 470) / 12),
      paymentIssues: userRows.filter(u => u.paymentIssue).length,
      conversion: userRows.length ? Math.round((pros.length / userRows.length) * 1000) / 10 : 0,
      expiringSoon: pros.filter(u => !u.autoRenew && u.planUntil && new Date(u.planUntil).getTime() - now < 7 * day).length,
    },
  };
}

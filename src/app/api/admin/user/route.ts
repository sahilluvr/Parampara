import { NextRequest, NextResponse } from "next/server";
import { getAdminUser, ADMIN_EMAIL } from "@/lib/adminAuth";
import { getAdmin, readPlanState, writePlanState } from "@/lib/billing";

// POST /api/admin/user { userId, action: "grant30" | "grant365" | "revoke" }
export async function POST(req: NextRequest) {
  const { isAdmin, user: me } = await getAdminUser();
  if (!isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { userId, action } = await req.json().catch(() => ({}));
  if (!userId || !["grant30", "grant365", "revoke", "delete"].includes(action)) return NextResponse.json({ error: "Bad request" }, { status: 400 });
  const admin = await getAdmin();
  if (!admin) return NextResponse.json({ error: "Server not configured" }, { status: 503 });
  try {
    const { data } = await admin.auth.admin.getUserById(userId);
    if (!data?.user) return NextResponse.json({ error: "User not found" }, { status: 404 });
    const cur = readPlanState(data.user);
    if (action === "delete") {
      if (data.user.email?.toLowerCase() === ADMIN_EMAIL) return NextResponse.json({ error: "You can't delete the admin account." }, { status: 400 });
      // Families they created: hand over to another member with an account, or delete if nobody else has one
      const { data: owned } = await admin.from("families").select("id").eq("created_by", userId);
      let removedFamilies = 0, transferred = 0;
      for (const f of owned || []) {
        const { data: others } = await admin.from("family_members").select("id,user_id").eq("family_id", f.id).not("user_id", "is", null).neq("user_id", userId).limit(1);
        if (others && others[0]) {
          await admin.from("families").update({ created_by: others[0].user_id }).eq("id", f.id);
          await admin.from("family_members").update({ role: "Admin" }).eq("id", others[0].id);
          transferred++;
        } else {
          await admin.from("rituals").delete().eq("family_id", f.id);
          await admin.from("family_members").delete().eq("family_id", f.id);
          await admin.from("families").delete().eq("id", f.id);
          removedFamilies++;
        }
      }
      // In other families, keep them in the tree but unlink the account
      await admin.from("family_members").update({ user_id: null }).eq("user_id", userId);
      if (cur.subscription_id) {
        const { rzp, razorpayConfigured } = await import("@/lib/billing");
        if (razorpayConfigured()) await rzp(`/subscriptions/${cur.subscription_id}/cancel`, { method: "POST", body: { cancel_at_cycle_end: 0 } }).catch(() => {});
      }
      const { error: delErr } = await admin.auth.admin.deleteUser(userId);
      if (delErr) return NextResponse.json({ error: delErr.message }, { status: 500 });
      console.log(`admin ${me?.email} deleted user ${data.user.email}`);
      return NextResponse.json({ ok: true, deleted: true, removedFamilies, transferred });
    }
    if (action === "revoke") {
      const { next } = await writePlanState(admin, userId, { plan_expires_at: new Date(Date.now() - 1000).toISOString() });
      console.log(`admin ${me?.email} revoked Pro for ${data.user.email}`);
      return NextResponse.json({ ok: true, plan: next.plan, planUntil: next.plan_expires_at, note: cur.subscription_id ? "Their Razorpay subscription is unchanged — cancel it in Razorpay if they shouldn't be charged again." : undefined });
    }
    const days = action === "grant365" ? 365 : 30;
    const base = Math.max(Date.now(), cur.plan_expires_at ? new Date(cur.plan_expires_at).getTime() : 0);
    const { next } = await writePlanState(admin, userId, { plan_expires_at: new Date(base + days * 86400000).toISOString(), plan_source: cur.plan_source || "override" });
    console.log(`admin ${me?.email} granted ${days}d Pro to ${data.user.email}`);
    return NextResponse.json({ ok: true, plan: next.plan, planUntil: next.plan_expires_at });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Failed" }, { status: 500 });
  }
}

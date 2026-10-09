import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminUser } from "@/lib/adminAuth";
import { loadAdminData } from "@/lib/adminData";
import AdminUsers from "./AdminUsers";
import SignOutButton from "./SignOutButton";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin · OurParampara", robots: { index: false, follow: false } };

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default async function AdminPage() {
  const { user, isAdmin, reason } = await getAdminUser();
  // Not signed in, signed in as someone else, or signed in via Google → admin login (with the reason)
  if (!user || !isAdmin) redirect(`/admin/login?reason=${reason || "signed_out"}`);

  let data: Awaited<ReturnType<typeof loadAdminData>> | null = null;
  let error = "";
  try { data = await loadAdminData(); } catch (e) { error = e instanceof Error ? e.message : String(e); }

  if (!data) {
    return <main className="ad"><div className="ad-wrap"><h1>Admin</h1><p className="ad-err">Couldn&apos;t load data: {error}</p></div><style>{CSS}</style></main>;
  }
  const { kpi, signups, families, users, funnel } = data;
  const max = Math.max(1, ...signups.map(s => s.count));
  const issues = users.filter(u => u.paymentIssue);
  const expiring = users.filter(u => u.plan === "pro" && !u.autoRenew && u.source !== "override" && u.planUntil && new Date(u.planUntil).getTime() - Date.now() < 7 * 86400000);

  const CARDS: { label: string; value: string; sub?: string; tone?: string }[] = [
    { label: "Total users", value: kpi.users.toLocaleString("en-IN"), sub: `+${kpi.new7} this week · +${kpi.new30} in 30 days`, tone: "indigo" },
    { label: "Active this week", value: kpi.active7.toLocaleString("en-IN"), sub: `${kpi.users ? Math.round((kpi.active7 / kpi.users) * 100) : 0}% of users signed in` },
    { label: "Pro subscribers", value: kpi.pro.toLocaleString("en-IN"), sub: `${kpi.conversion}% conversion · ${kpi.monthly} monthly · ${kpi.yearly} yearly`, tone: "gold" },
    { label: "Est. MRR", value: inr(kpi.mrr), sub: "auto-renewing subscriptions", tone: "gold" },
    { label: "Families", value: kpi.families.toLocaleString("en-IN"), sub: `${kpi.members.toLocaleString("en-IN")} members in total` },
    { label: "Rituals saved", value: kpi.rituals.toLocaleString("en-IN"), sub: "synced to the cloud" },
    { label: "Payment issues", value: String(kpi.paymentIssues), sub: "renewal failed / retrying", tone: kpi.paymentIssues ? "red" : undefined },
    { label: "Signed up today", value: String(users.filter(u => u.createdAt.slice(0, 10) === new Date().toISOString().slice(0, 10)).length), sub: `${users.filter(u => u.provider === "google").length} use Google sign-in` },
  ];

  return (
    <main className="ad">
      <header className="ad-top">
        <div className="ad-wrap ad-top-row">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-64.png" width={36} height={36} alt="" style={{ borderRadius: 10 }}/>
            <div><b>OurParampara Admin</b><small>Signed in as {user.email}</small></div>
          </div>
          <nav><Link href="/dashboard">Open app</Link><a href="https://dashboard.razorpay.com/app/subscriptions" target="_blank" rel="noreferrer">Razorpay ↗</a><SignOutButton/></nav>
        </div>
      </header>

      <div className="ad-wrap">
        <section className="ad-cards">
          {CARDS.map(c => (
            <div key={c.label} className={`ad-card ${c.tone || ""}`}>
              <span>{c.label}</span><b>{c.value}</b>{c.sub && <small>{c.sub}</small>}
            </div>
          ))}
        </section>

        <section className="ad-grid">
          <div className="ad-panel">
            <h2>Sign-ups, last 30 days</h2>
            <div className="ad-chart" role="img" aria-label={`Sign-ups per day; peak ${max}`}>
              {signups.map(s => (
                <div key={s.date} className="ad-bar" title={`${s.date}: ${s.count}`}>
                  <i style={{ height: `${(s.count / max) * 100}%` }}/>
                </div>
              ))}
            </div>
            <div className="ad-axis"><span>{signups[0].date.slice(5)}</span><span>peak {max}/day</span><span>today</span></div>
          </div>

          <div className="ad-panel">
            <h2>Needs attention</h2>
            {issues.length === 0 && expiring.length === 0 && <p className="ad-ok">✓ All clear — no failed renewals or expiring plans.</p>}
            {issues.map(u => <div key={u.id} className="ad-row"><span className="dot red"/>{u.email}<small>renewal failing · {u.cycle}</small></div>)}
            {expiring.map(u => <div key={u.id} className="ad-row"><span className="dot gold"/>{u.email}<small>Pro ends {new Date(u.planUntil!).toLocaleDateString("en-IN")} · not renewing</small></div>)}
          </div>
        </section>

        <section className="ad-panel">
          <h2>Onboarding funnel</h2>
          <div className="ad-funnel">
            {funnel.map((f, i) => {
              const pct = funnel[0].count ? Math.round((f.count / funnel[0].count) * 100) : 0;
              return (
                <div key={f.label} className="ad-fstep">
                  <div className="ad-fbar"><i style={{ width: `${Math.max(pct, 2)}%`, background: ["#1E1546", "#7A3FD9", "#D6246E", "#0F7A73", "#FFB224"][i] }}/></div>
                  <span><b>{f.label}</b>{f.count.toLocaleString("en-IN")} · {pct}%</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="ad-panel">
          <h2>Users</h2>
          <AdminUsers initial={users}/>
        </section>

        <section className="ad-panel">
          <h2>Largest families</h2>
          <div className="au-table-wrap">
            <table className="au-table">
              <thead><tr><th>Family</th><th>Owner</th><th>Members</th><th>With accounts</th><th>Rituals</th><th>Created</th></tr></thead>
              <tbody>
                {families.slice(0, 25).map(f => (
                  <tr key={f.id}><td><b>{f.name}</b></td><td>{f.owner}</td><td>{f.members}</td><td>{f.accounts}</td><td>{f.rituals}</td><td>{new Date(f.createdAt).toLocaleDateString("en-IN")}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <style>{CSS}</style>
    </main>
  );
}

const CSS = `
  .ad { min-height:100vh; background:#F8F6FC; font-family:'Inter',system-ui,sans-serif; color:#1C1733; padding-bottom:60px; }
  .ad-wrap { max-width:1200px; margin:0 auto; padding:0 20px; }
  .ad-err { background:#FEF2F2; color:#B42318; padding:14px; border-radius:12px; }
  .ad-top { background:#120C2E; color:#fff; padding:16px 0; margin-bottom:24px; background-image:radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.6px); background-size:20px 20px; }
  .ad-top-row { display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; }
  .ad-top b { display:block; font-family:'Bricolage Grotesque',system-ui,sans-serif; font-size:20px; }
  .ad-top small { color:rgba(255,255,255,0.6); font-size:13px; }
  .ad-top nav { display:flex; gap:10px; }
  .ad-top nav a { color:#fff; text-decoration:none; font-weight:600; font-size:14px; padding:8px 14px; border:1px solid rgba(255,255,255,0.2); border-radius:10px; }
  .ad-cards { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:18px; }
  .ad-card { background:#fff; border:1px solid #E6E1F0; border-radius:18px; padding:16px 18px; display:flex; flex-direction:column; gap:4px; }
  .ad-card span { font-size:13px; color:#625C7A; font-weight:600; }
  .ad-card b { font-family:'Bricolage Grotesque',system-ui,sans-serif; font-size:30px; font-weight:800; letter-spacing:-0.02em; }
  .ad-card small { font-size:12px; color:#625C7A; }
  .ad-card.indigo { background:#1E1546; color:#fff; border-color:#1E1546; } .ad-card.indigo span, .ad-card.indigo small { color:rgba(255,255,255,0.7); }
  .ad-card.gold { background:#FFF4DC; border-color:#FFE1A3; }
  .ad-card.red { background:#FEF2F2; border-color:#FECACA; } .ad-card.red b { color:#B42318; }
  .ad-grid { display:grid; grid-template-columns:1.6fr 1fr; gap:14px; margin-bottom:14px; }
  .ad-panel { background:#fff; border:1px solid #E6E1F0; border-radius:20px; padding:18px 20px; margin-bottom:14px; }
  .ad-panel h2 { font-family:'Bricolage Grotesque',system-ui,sans-serif; font-size:19px; font-weight:800; margin:0 0 14px; }
  .ad-chart { display:flex; align-items:flex-end; gap:4px; height:160px; }
  .ad-bar { flex:1; height:100%; display:flex; align-items:flex-end; }
  .ad-bar i { display:block; width:100%; min-height:2px; background:#D6246E; border-radius:5px 5px 2px 2px; }
  .ad-bar:hover i { background:#FFB224; }
  .ad-axis { display:flex; justify-content:space-between; font-size:12px; color:#625C7A; margin-top:6px; }
  .ad-ok { color:#0F7A73; font-weight:600; }
  .ad-funnel { display:grid; gap:10px; }
  .ad-fstep { display:grid; grid-template-columns:1fr 260px; gap:14px; align-items:center; }
  .ad-fbar { height:14px; background:#F1EDF8; border-radius:8px; overflow:hidden; }
  .ad-fbar i { display:block; height:100%; border-radius:8px; }
  .ad-fstep span { font-size:14px; color:#625C7A; } .ad-fstep b { color:#1C1733; margin-right:8px; }
  @media (max-width:700px) { .ad-fstep { grid-template-columns:1fr; gap:4px; } }
  .ad-row { display:flex; align-items:center; gap:8px; padding:9px 0; border-top:1px solid #F1EDF8; font-size:14px; flex-wrap:wrap; }
  .ad-row small { color:#625C7A; margin-left:auto; }
  .dot { width:9px; height:9px; border-radius:50%; } .dot.red { background:#DC2626; } .dot.gold { background:#FFB224; }
  .au-bar { display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:8px; }
  .au-search { flex:1; min-width:220px; padding:11px 14px; border:1.5px solid #E6E1F0; border-radius:12px; font-size:15px; font-family:inherit; background:#F8F6FC; outline:none; }
  .au-search:focus { border-color:#D6246E; background:#fff; }
  .au-filters { display:flex; gap:6px; flex-wrap:wrap; }
  .au-filters button { border:1px solid #E6E1F0; background:#fff; border-radius:999px; padding:7px 12px; font-size:13px; font-weight:600; cursor:pointer; font-family:inherit; color:#1C1733; }
  .au-filters button.on { background:#1E1546; color:#fff; border-color:#1E1546; }
  .au-export { font-size:13px; font-weight:700; color:#D6246E; text-decoration:none; padding:8px 4px; }
  .au-count { font-size:13px; color:#625C7A; margin:6px 0; }
  .au-table-wrap { overflow-x:auto; }
  .au-table { width:100%; border-collapse:collapse; font-size:14px; }
  .au-table th { text-align:left; font-size:12px; color:#625C7A; font-weight:700; padding:10px 10px; border-bottom:1px solid #E6E1F0; white-space:nowrap; }
  .au-table td { padding:10px; border-bottom:1px solid #F1EDF8; vertical-align:top; white-space:nowrap; }
  .au-table td small { display:block; color:#625C7A; font-size:12px; }
  .au-table td em { color:#B45309; font-style:normal; }
  .au-table tr:hover td { background:#FAF8FE; }
  .au-pill { font-size:12px; font-weight:800; padding:2px 9px; border-radius:999px; }
  .au-pill.pro { background:#FFB224; color:#120C2E; } .au-pill.free { background:#F1EDF8; color:#625C7A; }
  .au-warn { color:#B42318; font-weight:700; }
  .au-actions { text-align:right; }
  .au-actions button { border:1px solid #E6E1F0; background:#fff; border-radius:8px; padding:5px 9px; font-size:12px; font-weight:600; cursor:pointer; margin-left:4px; font-family:inherit; }
  .au-actions button:hover { border-color:#D6246E; color:#D6246E; }
  .au-detail td { background:#FAF8FE; white-space:normal; }
  .au-dgrid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px 18px; padding:6px 4px; font-size:14px; }
  .au-dgrid span { display:block; font-size:12px; color:#625C7A; font-weight:700; }
  .au-dgrid a { color:#D6246E; font-weight:600; } .au-dgrid code { font-size:12px; }
  @media (max-width:800px) { .au-dgrid { grid-template-columns:1fr; } }
  .au-more { margin-top:12px; width:100%; padding:10px; border:1px dashed #CFC6E6; background:none; border-radius:12px; cursor:pointer; font-weight:700; color:#625C7A; font-family:inherit; }
  @media (max-width:960px) { .ad-cards { grid-template-columns:repeat(2,1fr); } .ad-grid { grid-template-columns:1fr; } }
`;

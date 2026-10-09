"use client";
import { Fragment, useMemo, useState } from "react";
import toast from "react-hot-toast";
import type { AdminUserRow } from "@/lib/adminData";

const fmt = (iso?: string | null) => iso ? new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "2-digit" }) : "—";
const ago = (iso?: string | null) => {
  if (!iso) return "never";
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  return d <= 0 ? "today" : d === 1 ? "yesterday" : d < 30 ? `${d}d ago` : fmt(iso);
};

type Filter = "all" | "pro" | "free" | "issues" | "new" | "inactive";

export default function AdminUsers({ initial }: { initial: AdminUserRow[] }) {
  const [rows, setRows] = useState(initial);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [busy, setBusy] = useState<string | null>(null);
  const [limit, setLimit] = useState(50);
  const [open, setOpen] = useState<string | null>(null);
  const STAGE: Record<AdminUserRow["stage"], [string, string]> = {
    signed_up: ["Just signed up", "#625C7A"], family: ["Created family", "#7A3FD9"], members: ["Added members", "#D6246E"], ritual: ["Saved rituals", "#0F7A73"], pro: ["Pro", "#B7791F"],
  };

  const shown = useMemo(() => {
    const now = Date.now();
    return rows.filter(u => {
      if (q && !(`${u.email} ${u.name}`.toLowerCase().includes(q.toLowerCase()))) return false;
      if (filter === "pro") return u.plan === "pro";
      if (filter === "free") return u.plan === "free";
      if (filter === "issues") return u.paymentIssue;
      if (filter === "new") return now - new Date(u.createdAt).getTime() < 7 * 86400000;
      if (filter === "inactive") return !u.lastSignIn || now - new Date(u.lastSignIn).getTime() > 30 * 86400000;
      return true;
    });
  }, [rows, q, filter]);

  async function act(u: AdminUserRow, action: "grant30" | "grant365" | "revoke") {
    if (action === "revoke" && !confirm(`Remove Pro from ${u.email}?`)) return;
    setBusy(u.id);
    try {
      const r = await fetch("/api/admin/user", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userId: u.id, action }) });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Failed");
      setRows(rs => rs.map(x => x.id === u.id ? { ...x, plan: d.plan, planUntil: d.planUntil } : x));
      toast.success(action === "revoke" ? "Pro removed" : "Pro granted");
      if (d.note) toast(d.note, { duration: 8000 });
    } catch (e) { toast.error(e instanceof Error ? e.message : "Failed"); }
    setBusy(null);
  }

  const FILTERS: [Filter, string][] = [["all", "All"], ["pro", "Pro"], ["free", "Free"], ["new", "New this week"], ["issues", "Payment issues"], ["inactive", "Inactive 30d+"]];

  return (
    <div>
      <div className="au-bar">
        <input className="au-search" placeholder="Search name or email…" value={q} onChange={e => { setQ(e.target.value); setLimit(50); }}/>
        <div className="au-filters">
          {FILTERS.map(([k, l]) => <button key={k} className={filter === k ? "on" : ""} onClick={() => { setFilter(k); setLimit(50); }}>{l}</button>)}
        </div>
        <a className="au-export" href="/api/admin/export">⬇ Export CSV</a>
      </div>
      <p className="au-count">{shown.length} user{shown.length === 1 ? "" : "s"}</p>
      <div className="au-table-wrap">
        <table className="au-table">
          <thead><tr><th>User</th><th>Joined</th><th>Last login</th><th>Onboarding</th><th>Plan</th><th>Billing</th><th></th></tr></thead>
          <tbody>
            {shown.slice(0, limit).map(u => (
              <Fragment key={u.id}><tr onClick={() => setOpen(o => o === u.id ? null : u.id)} style={{ cursor: "pointer" }}>
                <td><b>{open === u.id ? "▾ " : "▸ "}{u.name || u.email.split("@")[0]}</b><small>{u.email}{!u.confirmed && <em> · unverified</em>}{u.provider === "google" && " · Google"}</small></td>
                <td>{fmt(u.createdAt)}</td>
                <td>{ago(u.lastSignIn)}{u.lastSignIn && <small>{new Date(u.lastSignIn).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</small>}</td>
                <td><span style={{ color: STAGE[u.stage][1], fontWeight: 700 }}>{STAGE[u.stage][0]}</span><small>{u.membersAdded} members · {u.ritualsSaved} rituals</small></td>
                <td><span className={`au-pill ${u.plan}`}>{u.plan === "pro" ? "Pro" : "Free"}</span>{u.planUntil && u.plan === "pro" && <small>until {fmt(u.planUntil)}</small>}</td>
                <td>{u.source === "override" ? "Lifetime" : u.subStatus ? <>{u.cycle || ""} · {u.autoRenew ? "auto-renew" : u.subStatus}{u.paymentIssue && <span className="au-warn"> ⚠ payment</span>}</> : "—"}</td>
                <td className="au-actions" onClick={e => e.stopPropagation()}>
                  {u.source !== "override" && (u.plan === "pro"
                    ? <button disabled={busy === u.id} onClick={() => act(u, "revoke")}>Remove Pro</button>
                    : <><button disabled={busy === u.id} onClick={() => act(u, "grant30")}>+30d Pro</button><button disabled={busy === u.id} onClick={() => act(u, "grant365")}>+1y</button></>)}
                </td>
              </tr>
              {open === u.id && (
                <tr className="au-detail"><td colSpan={7}>
                  <div className="au-dgrid">
                    <div><span>Email</span>{u.email} {u.confirmed ? "✓ verified" : "· not verified"}</div>
                    <div><span>Signed up with</span>{u.provider === "google" ? "Google" : "Email & password"}</div>
                    <div><span>Joined</span>{new Date(u.createdAt).toLocaleString("en-IN")}</div>
                    <div><span>Last login</span>{u.lastSignIn ? new Date(u.lastSignIn).toLocaleString("en-IN") : "Never"}</div>
                    <div><span>Families</span>{u.familyNames.length ? u.familyNames.join(", ") : "None yet"}</div>
                    <div><span>Members · rituals</span>{u.membersAdded} · {u.ritualsSaved}</div>
                    <div><span>Plan</span>{u.plan === "pro" ? `Pro${u.planUntil ? ` until ${new Date(u.planUntil).toLocaleDateString("en-IN")}` : " (lifetime)"}` : "Free"}</div>
                    <div><span>Billing</span>{u.subStatus ? `${u.cycle || ""} · ${u.subStatus}${u.autoRenew ? " · auto-renew" : ""}${u.nextCharge ? ` · next charge ${new Date(u.nextCharge).toLocaleDateString("en-IN")}` : ""}` : "No subscription"}</div>
                    {u.subscriptionId && <div><span>Razorpay</span><a href={`https://dashboard.razorpay.com/app/subscriptions/${u.subscriptionId}`} target="_blank" rel="noreferrer">{u.subscriptionId} ↗</a></div>}
                    <div><span>User ID</span><code>{u.id}</code></div>
                  </div>
                </td></tr>
              )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {shown.length > limit && <button className="au-more" onClick={() => setLimit(l => l + 100)}>Show more</button>}
    </div>
  );
}

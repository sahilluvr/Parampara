"use client";
import { useState } from "react";
import toast from "react-hot-toast";

type Res = { candidates: number; scheduled: number; sent?: number; failed?: number; byCampaign: Record<string, number>; emails: { email: string; name: string; campaign: string; reason: string }[] };
const LABEL: Record<string, string> = { pro_ended: "Pro ended — win back", pro_ended_2: "Pro win-back follow-up", nudge_family: "Add your family", nudge_ritual: "Save first ritual", winback_15: "We miss you (15d)", winback_30: "We miss you (30d)", winback_60: "Still here (60d)" };

export default function EngagementPanel() {
  const [res, setRes] = useState<Res | null>(null);
  const [busy, setBusy] = useState(false);
  async function run(send: boolean) {
    if (send && !confirm("Send today's lifecycle emails now? (They also go out automatically every day at 9:30 AM IST.)")) return;
    setBusy(true);
    try {
      const r = await fetch("/api/admin/engagement", { method: send ? "POST" : "GET" });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Failed");
      setRes(d);
      if (send) toast.success(`Sent ${d.sent} email${d.sent === 1 ? "" : "s"}${d.failed ? ` · ${d.failed} failed` : ""}`);
    } catch (e) { toast.error(e instanceof Error ? e.message : "Failed"); }
    setBusy(false);
  }
  return (
    <div>
      <p style={{ color: "#625C7A", fontSize: 14, margin: "0 0 12px", lineHeight: 1.6 }}>
        Automatic every day at 9:30 AM IST: win-back for lapsed Pro (incl. early one-time payers), &ldquo;add your family&rdquo; and &ldquo;first ritual&rdquo; nudges for new users, and &ldquo;we miss you&rdquo; at 15 / 30 / 60 days inactive. One email per person per day, never repeated, unsubscribes respected.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button className="ep-btn" onClick={() => run(false)} disabled={busy}>{busy ? "Working…" : "Preview today's emails"}</button>
        <button className="ep-btn ep-send" onClick={() => run(true)} disabled={busy}>Send now</button>
      </div>
      {res && (
        <div style={{ marginTop: 14 }}>
          <p style={{ fontSize: 14, margin: "0 0 8px" }}><b>{res.scheduled}</b> to send today{res.candidates > res.scheduled ? ` (of ${res.candidates} — the rest roll over to tomorrow)` : ""}{res.sent !== undefined ? ` · sent ${res.sent}` : ""}</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            {Object.entries(res.byCampaign).map(([k, v]) => <span key={k} className="ep-chip">{LABEL[k] || k}: {v}</span>)}
          </div>
          {res.emails.length > 0 && (
            <div className="au-table-wrap"><table className="au-table"><thead><tr><th>To</th><th>Email</th><th>Why</th></tr></thead><tbody>
              {res.emails.slice(0, 100).map((e, i) => <tr key={i}><td><b>{e.name}</b><small>{e.email}</small></td><td>{LABEL[e.campaign] || e.campaign}</td><td>{e.reason}</td></tr>)}
            </tbody></table></div>
          )}
        </div>
      )}
      <style>{`
        .ep-btn { border:1px solid #E6E1F0; background:#fff; border-radius:10px; padding:9px 14px; font-weight:700; font-size:14px; cursor:pointer; font-family:inherit; color:#1C1733; }
        .ep-send { background:#1E1546; color:#fff; border-color:#1E1546; }
        .ep-btn:disabled { opacity:.6; }
        .ep-chip { font-size:12px; font-weight:700; background:#FFF4DC; color:#7A4A00; border-radius:999px; padding:4px 10px; }
      `}</style>
    </div>
  );
}

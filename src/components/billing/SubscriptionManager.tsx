"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

type Status = {
  plan: "pro" | "free"; expiresAt: string | null; billingCycle: "monthly" | "yearly" | null; source: string | null;
  subscriptionId: string | null; subscriptionStatus: string | null; autoRenew: boolean; cancelAtPeriodEnd: boolean;
  nextChargeAt: string | null; paymentIssue: boolean;
};

const fmt = (iso?: string | null) => iso ? new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "";
const K = { ink: "#1C1733", muted: "#625C7A", line: "#E6E1F0", sindoor: "#D6246E", tulsi: "#0F7A73", tulsiLight: "#E3F4F2", warn: "#9A3412", warnBg: "#FFF4E5" };

// Self-service subscription management. (The old Account page sent customers
// to dashboard.razorpay.com — Razorpay's *merchant* dashboard, which customers
// can't use — and cancelling meant emailing support.)
export default function SubscriptionManager() {
  const [s, setS] = useState<Status | null>(null);
  const [busy, setBusy] = useState(false);
  const [confirming, setConfirming] = useState(false);

  async function load(reconcile = true) {
    try {
      const r = await fetch("/api/billing/status", { method: reconcile ? "POST" : "GET", credentials: "include" });
      if (r.ok) setS(await r.json());
    } catch { /* ignore */ }
  }
  useEffect(() => { load(true); }, []);

  async function cancel() {
    setBusy(true);
    try {
      const r = await fetch("/api/razorpay/cancel", { method: "POST", credentials: "include" });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || "Couldn't cancel. Please try again.");
      toast.success(`Auto-renew turned off. You keep Pro until ${fmt(s?.expiresAt)}.`, { duration: 7000 });
      setConfirming(false);
      await load(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Couldn't cancel. Please try again.");
    }
    setBusy(false);
  }

  const card: React.CSSProperties = { background: "#fff", border: `1px solid ${K.line}`, borderRadius: 16, padding: 20, fontFamily: "'Inter',system-ui,sans-serif", color: K.ink };
  if (!s) return <div style={card}><p style={{ margin: 0, color: K.muted, fontSize: 14 }}>Loading your plan…</p></div>;

  if (s.plan !== "pro") {
    return (
      <div style={card}>
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 6px" }}>You&apos;re on the Free plan</h3>
        <p style={{ fontSize: 14, color: K.muted, margin: "0 0 14px", lineHeight: 1.55 }}>
          {s.expiresAt ? `Your Pro ended on ${fmt(s.expiresAt)}. Everything you saved is still here.` : "Pro adds the Heritage Book, the AI ritual assistant, Mannats and unlimited family spaces."}
        </p>
        <Link href="/upgrade?billing=yearly" className="pp-btn-primary" style={{ display: "inline-block", padding: "11px 22px", fontSize: 14 }}>See Pro plans</Link>
      </div>
    );
  }

  const cycleLabel = s.billingCycle === "yearly" ? "₹470 / year" : "₹49 / month";
  const isOverride = s.source === "override";

  return (
    <div style={card}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>Parampara Pro {s.billingCycle && !isOverride && <span style={{ fontWeight: 500, color: K.muted }}>· {cycleLabel}</span>}</h3>
          <p style={{ fontSize: 14, color: K.muted, margin: 0, lineHeight: 1.55 }}>
            {isOverride ? "Lifetime access."
              : s.autoRenew ? <>Renews automatically on <strong style={{ color: K.ink }}>{fmt(s.nextChargeAt || s.expiresAt)}</strong>.</>
              : s.cancelAtPeriodEnd ? <>Auto-renew is off. Pro ends on <strong style={{ color: K.ink }}>{fmt(s.expiresAt)}</strong>.</>
              : <>Pro until <strong style={{ color: K.ink }}>{fmt(s.expiresAt)}</strong>. It won&apos;t renew on its own.</>}
          </p>
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, background: K.tulsiLight, color: K.tulsi, padding: "4px 10px", borderRadius: 999 }}>Active</span>
      </div>

      {s.paymentIssue && (
        <div role="alert" style={{ background: K.warnBg, color: K.warn, borderRadius: 12, padding: "12px 14px", fontSize: 14, lineHeight: 1.55, marginTop: 14 }}>
          Your last renewal didn&apos;t go through. Razorpay will retry automatically over the next few days. If your card or UPI changed, <Link href={`/upgrade?billing=${s.billingCycle || "monthly"}&change=1`} style={{ color: K.warn, fontWeight: 700 }}>update your payment method</Link> — you won&apos;t be charged twice.
        </div>
      )}

      {!isOverride && (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          {!s.autoRenew && (
            <Link href={`/upgrade?billing=${s.billingCycle || "yearly"}`} className="pp-btn-primary" style={{ display: "inline-block", padding: "10px 18px", fontSize: 14 }}>
              Turn on auto-renew
            </Link>
          )}
          {s.autoRenew && (
            <Link href={`/upgrade?billing=${s.billingCycle || "monthly"}&change=1`} className="pp-btn-primary" style={{ display: "inline-block", padding: "10px 18px", fontSize: 14 }}>
              💳 Change payment method
            </Link>
          )}
          {s.autoRenew && !confirming && (
            <button onClick={() => setConfirming(true)} className="pp-btn-secondary" style={{ padding: "10px 18px", fontSize: 14 }}>Cancel auto-renew</button>
          )}
        </div>
      )}

      {confirming && (
        <div style={{ border: `1px solid ${K.line}`, borderRadius: 12, padding: 14, marginTop: 14 }}>
          <p style={{ fontSize: 14, margin: "0 0 12px", lineHeight: 1.55 }}>
            You&apos;ll keep Pro until <strong>{fmt(s.expiresAt)}</strong> and won&apos;t be charged again. Your rituals, members and memories stay saved.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button onClick={cancel} disabled={busy} className="pp-btn-secondary" style={{ padding: "10px 16px", fontSize: 14, color: "#B42318" }}>{busy ? "Cancelling…" : "Yes, cancel auto-renew"}</button>
            <button onClick={() => setConfirming(false)} className="pp-btn-primary" style={{ padding: "10px 16px", fontSize: 14 }}>Keep Pro</button>
          </div>
        </div>
      )}

      {!isOverride && <p style={{ fontSize: 13, color: K.muted, margin: "14px 0 0" }}>Receipts for every payment are emailed to you by Razorpay.</p>}
    </div>
  );
}

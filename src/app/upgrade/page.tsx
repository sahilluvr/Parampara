"use client";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import Link from "next/link";
import { Check } from "lucide-react";
import toast from "react-hot-toast";
import { formatPrice } from "@/lib/usePricing";
import { getActiveFamily } from "@/lib/families";
import { PRO_OUTCOMES, PRO_SUMMARY } from "@/lib/planFeatures";
import HeritageBookCover from "@/components/pricing/HeritageBookCover";
import { BillingToggle, useBillingMath, P, PF } from "@/components/pricing/PricingPlans";

export default function UpgradePage() {
  const [billing, setBilling] = useState<"monthly"|"yearly">("yearly");
  const [changeMethod, setChangeMethod] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [familyName, setFamilyName] = useState("Your Family");
  const [counts, setCounts] = useState({ rituals: 0, members: 0 });
  const { pricing, loading: pricingLoading, saving, monthsFree, perDayText } = useBillingMath(billing);

  useEffect(() => {
    const b = new URLSearchParams(window.location.search).get("billing");
    if (b === "monthly" || b === "yearly") setBilling(b);
    if (new URLSearchParams(window.location.search).get("change") === "1") setChangeMethod(true);
    const active = getActiveFamily();
    if (active?.name) setFamilyName(active.name);
    try {
      const id = active?.id || "default";
      const r = JSON.parse(localStorage.getItem(`parampara_rituals_${id}`) || "[]");
      const m = JSON.parse(localStorage.getItem(`parampara_members_${id}`) || "[]");
      setCounts({ rituals: Array.isArray(r) ? r.length : 0, members: Array.isArray(m) ? m.length : 0 });
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    // Check if user is logged in — if not, send to login then back here
    const checkAuth = async () => {
      const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!SUPABASE_URL || !SUPABASE_KEY) { setAuthChecked(true); return; }
      try {
        const { createBrowserClient } = await import("@supabase/ssr");
        const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
        const { data: { user } } = await sb.auth.getUser();
        if (!user) {
          window.location.href = `/auth/login?redirect=${encodeURIComponent("/upgrade" + window.location.search)}`;
          return;
        }
      } catch {}
      setAuthChecked(true);
    };
    checkAuth();
  }, []);

  const yearlyTotal = pricing.yearly;
  const charge = pricing.charge;
  const chargeDiffers = !!charge && charge.currency !== pricing.currency;

  const [billingStatus, setBillingStatus] = useState<{ plan: string; autoRenew: boolean; expiresAt: string | null } | null>(null);
  useEffect(() => {
    fetch("/api/billing/status", { credentials: "include" }).then(r => r.ok ? r.json() : null).then(setBillingStatus).catch(() => {});
  }, []);

  function loadRazorpay(): Promise<boolean> {
    return new Promise(resolve => {
      if ((window as unknown as { Razorpay?: unknown }).Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  // Auto-renewing Razorpay subscription (replaces the old one-time order,
  // which charged "monthly" customers once and never again).
  async function handleUpgrade() {
    setLoading(true);
    try {
      const res = await fetch("/api/razorpay/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ billingCycle: billing, changeMethod }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 401) { window.location.href = `/auth/login?redirect=${encodeURIComponent(`/upgrade?billing=${billing}`)}`; return; }
      if (data.error === "already_subscribed") { toast.success("You're already on Pro — manage it from Account & Plan."); window.location.href = "/account"; return; }
      if (data.error === "payment_not_configured") { toast.error("Payments are being set up. Please email ourparamparaofficial@gmail.com and we'll upgrade you.", { duration: 8000 }); setLoading(false); return; }
      if (!res.ok || !data.subscriptionId) { toast.error(data.message || "Couldn't start the payment. Please try again."); setLoading(false); return; }

      if (!(await loadRazorpay())) { toast.error("Couldn't load the payment window. Please check your connection and try again."); setLoading(false); return; }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rz = new (window as any).Razorpay({
        key: data.razorpayKey,
        subscription_id: data.subscriptionId,
        name: "OurParampara",
        description: billing === "yearly" ? "Pro — renews yearly" : "Pro — renews monthly",
        image: "/logo.png",
        prefill: { email: data.userEmail, name: data.userName },
        notes: { billingCycle: billing },
        theme: { color: "#D6246E" },
        handler: async (response: { razorpay_payment_id: string; razorpay_subscription_id: string; razorpay_signature: string }) => {
          toast.loading("Activating Pro…", { id: "activate" });
          try {
            const v = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify(response),
            });
            const vd = await v.json().catch(() => ({}));
            if (!v.ok) {
              toast.error(vd.error || "We received your payment but couldn't confirm it yet. Pro will activate automatically in a few minutes.", { id: "activate", duration: 9000 });
              setLoading(false);
              return;
            }
            if (changeMethod) {
              toast.success("Payment method updated ✅", { id: "activate" });
              window.location.href = "/account";
              return;
            }
            toast.success("Pro is active 🎉", { id: "activate" });
            window.location.href = "/dashboard?upgraded=1";
          } catch {
            toast.error("Payment received — Pro will activate automatically in a few minutes.", { id: "activate", duration: 9000 });
            setLoading(false);
          }
        },
        modal: { ondismiss: () => setLoading(false) },
      });
      rz.on?.("payment.failed", (resp: { error?: { description?: string } }) => {
        toast.error(resp?.error?.description || "Payment failed. No money was taken — please try again or use another method.", { duration: 8000 });
        setLoading(false);
      });
      rz.open();
      if (data.startsAt) toast(`You won't be charged until ${new Date(data.startsAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}, when your current Pro ends.`, { duration: 8000 });
    } catch (err) {
      console.error("Upgrade error:", err);
      toast.error("Couldn't open the payment window. Please check your connection and try again.");
      setLoading(false);
    }
  }

  const hasContent = counts.rituals > 0 || counts.members > 0;

  if (changeMethod) {
    const until = billingStatus?.expiresAt ? new Date(billingStatus.expiresAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "the end of your current period";
    return (
      <AppShell>
        <div style={{ padding: "36px 20px 60px", maxWidth: 520, margin: "0 auto", fontFamily: PF.sans, color: P.text }}>
          <div style={{ background: "#fff", border: `1px solid ${P.line}`, borderRadius: 24, padding: "28px 24px" }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>💳</div>
            <h1 style={{ fontFamily: PF.serif, fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Change payment method</h1>
            <p style={{ fontSize: 16, color: P.muted, lineHeight: 1.6, margin: "0 0 18px" }}>
              Add a new card or UPI ID. <b style={{ color: P.text }}>You won&apos;t be charged today</b> — your Pro stays active until {until}, and the next renewal uses the new method.
            </p>
            <div style={{ marginBottom: 18 }}><BillingToggle billing={billing} setBilling={setBilling} monthsFree={monthsFree}/></div>
            <button onClick={handleUpgrade} disabled={loading || !authChecked} className="pp-btn-primary" style={{ width: "100%", fontSize: 16, padding: 16 }}>
              {loading ? "Opening secure payment…" : "Continue to secure payment"}
            </button>
            <p style={{ fontSize: 13, color: P.muted, textAlign: "center", margin: "12px 0 0", lineHeight: 1.5 }}>🔒 Handled by Razorpay. Your bank may show a small verification that&apos;s returned immediately.</p>
            <p style={{ textAlign: "center", margin: "16px 0 0" }}><Link href="/account" style={{ color: P.sindoor, fontWeight: 700, fontSize: 14 }}>Cancel</Link></p>
          </div>
        </div>
      </AppShell>
    );
  }
  const priceLabel = formatPrice(billing === "yearly" ? yearlyTotal : pricing.monthly, pricing);

  return (
    <AppShell>
      <div style={{ padding: "28px 20px 48px", maxWidth: 880, margin: "0 auto", fontFamily: PF.sans, color: P.text }}>
        <div className="up-grid">
          {/* Left: the thing they're buying */}
          <div className="up-visual">
            <HeritageBookCover familyName={familyName} width={200} />
            {hasContent && (
              <p style={{ fontSize: 14, color: P.muted, textAlign: "center", margin: "28px 0 0", lineHeight: 1.6, maxWidth: 240 }}>
                Already inside: {counts.rituals} ritual{counts.rituals === 1 ? "" : "s"} and {counts.members} family member{counts.members === 1 ? "" : "s"}.
              </p>
            )}
          </div>

          {/* Right: decision */}
          <div>
            <h1 style={{ fontFamily: PF.serif, fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, lineHeight: 1.12, margin: "0 0 12px" }}>
              Keep {familyName}&apos;s traditions in a book
            </h1>
            <p style={{ fontSize: 16, color: P.muted, lineHeight: 1.6, margin: "0 0 24px" }}>
              Pro turns everything you save into a print-ready Heritage Book, and adds an assistant that knows the rituals.
            </p>

            {billingStatus?.plan === "pro" && (
              <div style={{ background: P.tulsiLight, color: P.tulsi, borderRadius: 12, padding: "12px 14px", fontSize: 14, marginBottom: 18, lineHeight: 1.5 }}>
                {billingStatus.autoRenew
                  ? <>You&apos;re already on Pro and it renews automatically. <Link href="/account" style={{ color: P.tulsi, fontWeight: 700 }}>Manage your plan</Link></>
                  : <>You have Pro until {billingStatus.expiresAt ? new Date(billingStatus.expiresAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : "the end of your period"}. Turn on auto-renew below — you won&apos;t be charged until then.</>}
              </div>
            )}
            <div style={{ marginBottom: 20 }}>
              <BillingToggle billing={billing} setBilling={setBilling} monthsFree={monthsFree} />
            </div>

            <div style={{ background: P.white, border: `1px solid ${P.line}`, borderRadius: 16, padding: "20px 22px", marginBottom: 16 }}>
              {pricingLoading ? <p style={{ color: P.muted, margin: 0 }}>Loading price…</p> : (
                <>
                  <p style={{ margin: 0, display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: PF.serif, fontSize: 44, fontWeight: 700, lineHeight: 1 }}>{priceLabel}</span>
                    <span style={{ fontSize: 15, color: P.muted }}>{billing === "yearly" ? "per year · renews yearly" : "per month · renews monthly"}</span>
                  </p>
                  <p style={{ fontSize: 14, color: P.tulsi, fontWeight: 600, margin: "8px 0 0" }}>
                    {billing === "yearly" ? `About ${perDayText} — you save ${formatPrice(saving, pricing)} vs monthly` : `Switch to yearly and get ${monthsFree} months free`}
                  </p>
                  {chargeDiffers && charge && (
                    <p style={{ fontSize: 13, color: P.muted, margin: "10px 0 0", lineHeight: 1.5 }}>
                      Payments are processed in Indian rupees: you&apos;ll be charged {charge.symbol}{billing === "yearly" ? charge.yearly : charge.monthly}. Your bank converts it.
                    </p>
                  )}
                </>
              )}
            </div>

            <button onClick={handleUpgrade} disabled={loading || pricingLoading || !authChecked} className="pp-btn-primary" style={{ width: "100%", fontSize: 16, padding: "16px" }}>
              {loading ? "Opening secure payment…" : `Subscribe — ${priceLabel} ${billing === "yearly" ? "/ year" : "/ month"}`}
            </button>
            <p style={{ fontSize: 13, color: P.muted, textAlign: "center", margin: "12px 0 0", lineHeight: 1.5 }}>
              🔒 Renews {billing === "yearly" ? "every year" : "every month"} via UPI Autopay or card. Cancel anytime from Account &amp; Plan — you keep Pro until the period ends.
            </p>
          </div>
        </div>

        {/* What you get */}
        <div style={{ marginTop: 48, display: "grid", gap: 28 }} className="up-features">
          <div>
            <h2 style={{ fontFamily: PF.serif, fontSize: 24, fontWeight: 700, margin: "0 0 18px" }}>What you get with Pro</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
              {PRO_SUMMARY.map(f => (
                <li key={f} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.45 }}>
                  <Check size={18} color={P.tulsi} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 1 }} />{f}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "grid", gap: 20 }}>
            {PRO_OUTCOMES.map(o => (
              <div key={o.title}>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 4px" }}>{o.title}</h3>
                <p style={{ fontSize: 14, color: P.muted, lineHeight: 1.6, margin: 0 }}>{o.body}</p>
              </div>
            ))}
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: 14, color: P.muted, marginTop: 40 }}>
          If Pro isn&apos;t right for you, nothing you&apos;ve saved is ever removed. <Link href="/pricing" style={{ color: P.sindoor, fontWeight: 600 }}>Compare plans</Link>
        </p>
      </div>
      <style>{`
        .up-grid { display:grid; grid-template-columns:260px 1fr; gap:48px; align-items:center; }
        .up-visual { display:flex; flex-direction:column; align-items:center; }
        .up-features { grid-template-columns:1fr 1fr; }
        @media (max-width: 760px) {
          .up-grid { grid-template-columns:1fr; gap:28px; }
          .up-features { grid-template-columns:1fr; }
        }
      `}</style>
    </AppShell>
  );
}

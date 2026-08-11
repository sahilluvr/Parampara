"use client";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import Link from "next/link";
import { Check } from "lucide-react";
import { usePricing, formatPrice } from "@/lib/usePricing";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", gold:"#B8922A", goldLight:"#F9F3E3", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", cream:"#F5F0E8" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

const FEATURES = [
  "Unlimited family spaces",
  "Unlimited family members",
  "Unlimited rituals & traditions",
  "AI Ritual Assistant (Knolli powered)",
  "Heritage Book PDF export",
  "Elder Voice Archive",
  "Family Calendar with WhatsApp reminders",
  "Family Mannats tracker",
  "Cross-device sync — web, mobile, tablet",
  "Memory Vault — photos, videos, voice memos",
  "Invite family members with link",
  "Priority support",
];

export default function UpgradePage() {
  const [billing, setBilling] = useState<"monthly"|"yearly">("monthly");
  const [loading, setLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const { pricing, loading: pricingLoading } = usePricing();

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
          window.location.href = "/auth/login?redirect=/upgrade";
          return;
        }
      } catch {}
      setAuthChecked(true);
    };
    checkAuth();
  }, []);

  const displayPrice  = billing === "yearly" ? pricing.yearlyPerMonth : pricing.monthly;
  const yearlyTotal   = pricing.yearly;
  const monthlySaving = Math.round(pricing.monthly * 12 - pricing.yearly);

  async function handleUpgrade() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ billingCycle: billing, currency: pricing.currency, country: pricing.country }),
      });

      const data = await res.json();

      // Not authenticated
      if (res.status === 401 || data.error === "not_authenticated") {
        window.location.href = "/auth/login?redirect=/upgrade";
        return;
      }

      // Payment not configured
      if (data.error === "payment_not_configured") {
        alert("Payment is being set up. Please email ourparamparaofficial@gmail.com to upgrade.");
        setLoading(false);
        return;
      }

      // Generic error
      if (data.error && !data.razorpayOrderId && !data.url) {
        alert(data.message || data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      // Stripe — redirect to Stripe checkout
      if (data.url) {
        window.location.href = data.url;
        return;
      }

      // Razorpay — open inline
      if (data.razorpayOrderId) {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const rz = new (window as any).Razorpay({
            key: data.razorpayKey,
            order_id: data.razorpayOrderId,
            name: "OurParampara",
            description: `Pro Plan — ${billing === "yearly" ? "Annual" : "Monthly"}`,
            image: "/logo.png",
            currency: "INR",
            amount: data.amount,
            prefill: { email: data.userEmail, name: data.userName },
            theme: { color: "#C8541A" },
            handler: async (response: { razorpay_payment_id: string }) => {
              // Payment success — update plan in Supabase
              await fetch("/api/razorpay/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ paymentId: response.razorpay_payment_id, billingCycle: billing }),
              });
              window.location.href = "/dashboard?upgraded=1";
            },
            modal: { ondismiss: () => setLoading(false) },
          });
          rz.open();
        };
        document.body.appendChild(script);
        return;
      }

    } catch (err) {
      console.error("Upgrade error:", err);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  return (
    <AppShell>
      <div style={{ padding:"24px 20px", maxWidth:520, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:24 }}>
          <div style={{ fontSize:40, marginBottom:12 }}>✨</div>
          <h1 style={{ fontFamily:F.serif, fontSize:26, fontWeight:700, color:C.charcoal, margin:"0 0 8px" }}>
            Upgrade to Pro
          </h1>
          <p style={{ fontSize:14, color:C.gray, margin:0 }}>
            Preserve your family&apos;s complete heritage — unlimited access to everything
          </p>
        </div>

        {/* Billing toggle */}
        <div style={{ background:C.ivory, borderRadius:12, padding:4, display:"flex", marginBottom:24, border:`1px solid ${C.border}` }}>
          {(["monthly","yearly"] as const).map(b=>(
            <button key={b} onClick={()=>setBilling(b)} style={{ flex:1, padding:"10px", borderRadius:9, border:"none", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:F.sans, background:billing===b?C.charcoal:"transparent", color:billing===b?C.white:C.gray, transition:"all 0.2s", position:"relative" }}>
              {b==="monthly" ? "Monthly" : "Yearly"}
              {b==="yearly" && <span style={{ position:"absolute", top:-10, right:-4, background:C.forest, color:"#fff", fontSize:9, fontWeight:700, padding:"2px 7px", borderRadius:10, whiteSpace:"nowrap" }}>Save 20%</span>}
            </button>
          ))}
        </div>

        {/* Price card */}
        <div style={{ background:"linear-gradient(135deg,#18181B,#2D1810)", borderRadius:20, padding:"28px 24px", marginBottom:20, textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, opacity:0.06, background:"radial-gradient(circle at 50% 50%,#C8541A,transparent 70%)" }}/>
          <div style={{ position:"relative" }}>
            {pricingLoading ? (
              <div style={{ height:60, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <p style={{ color:"rgba(255,255,255,0.4)", fontSize:14 }}>Loading pricing…</p>
              </div>
            ) : (
              <>
                <div style={{ display:"flex", alignItems:"baseline", justifyContent:"center", gap:4, marginBottom:4 }}>
                  <span style={{ fontSize:18, color:"rgba(255,255,255,0.6)", fontWeight:600 }}>{pricing.symbol}</span>
                  <span style={{ fontFamily:F.serif, fontSize:52, fontWeight:700, color:"#fff", lineHeight:1 }}>
                    {Math.round(displayPrice)}
                  </span>
                  <span style={{ fontSize:14, color:"rgba(255,255,255,0.4)" }}>/month</span>
                </div>
                {billing === "yearly" && (
                  <p style={{ fontSize:13, color:"#B8922A", margin:"0 0 4px", fontWeight:600 }}>
                    {formatPrice(yearlyTotal, pricing)}/year — save {formatPrice(monthlySaving, pricing)}
                  </p>
                )}
                <p style={{ fontSize:11, color:"rgba(255,255,255,0.3)", margin:0 }}>
                  {pricing.currency} · {billing === "yearly" ? "billed annually" : "billed monthly"} · cancel anytime
                </p>
              </>
            )}
          </div>
        </div>

        {/* Features */}
        <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:"18px 20px", marginBottom:20 }}>
          <p style={{ fontSize:11, fontWeight:700, color:C.charcoal, margin:"0 0 14px", letterSpacing:0.8 }}>EVERYTHING IN PRO</p>
          {FEATURES.map(f=>(
            <div key={f} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"6px 0", borderBottom:`1px solid ${C.border}` }}>
              <span style={{ width:18, height:18, borderRadius:"50%", background:C.forestLight, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                <Check size={10} color={C.forest} strokeWidth={3}/>
              </span>
              <span style={{ fontSize:13, color:C.charcoal }}>{f}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button onClick={handleUpgrade} disabled={loading || pricingLoading}
          style={{ width:"100%", padding:"15px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:14, fontSize:15, fontWeight:700, cursor:loading?"not-allowed":"pointer", fontFamily:F.sans, opacity:loading?0.8:1, boxShadow:"0 6px 24px rgba(200,84,26,0.35)" }}>
          {loading ? "Opening payment…" : pricingLoading ? "Loading…" : `Upgrade to Pro — ${formatPrice(billing==="yearly"?yearlyTotal:pricing.monthly, pricing)}${billing==="monthly"?"/month":"/year"} →`}
        </button>
        <p style={{ fontSize:11, color:C.gray, textAlign:"center", marginTop:10 }}>
          🔒 Secure payment · Cancel anytime · Instant access
        </p>

        <Link href="/pricing" style={{ display:"block", textAlign:"center", fontSize:13, color:C.saffron, marginTop:12, textDecoration:"none" }}>
          See full pricing comparison →
        </Link>
      </div>
    </AppShell>
  );
}

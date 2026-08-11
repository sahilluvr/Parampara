"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Check, X } from "lucide-react";
import { usePricing, formatPrice } from "@/lib/usePricing";


const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", gold:"#B8922A", goldLight:"#F9F3E3", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", cream:"#F5F0E8" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif", display:"'Playfair Display',Georgia,serif" };

const FEATURES = [
  { label:"Family spaces",          free:"2 spaces",       pro:"Unlimited" },
  { label:"Family members",         free:"Unlimited",      pro:"Unlimited" },
  { label:"Ritual entries",         free:"5 rituals",      pro:"Unlimited" },
  { label:"AI Ritual Assistant",    free:"5 queries/month",pro:"Unlimited" },
  { label:"Heritage Book PDF",      free:false,            pro:true  },
  { label:"Elder Voice Archive",    free:false,            pro:true  },
  { label:"Family Calendar",        free:true,             pro:true  },
  { label:"Mannats tracker",        free:true,             pro:true  },
  { label:"Memory Vault",           free:"500MB",          pro:"10GB" },
  { label:"Cross-device sync",      free:false,            pro:true  },
  { label:"WhatsApp reminders",     free:false,            pro:true  },
  { label:"Family invite links",    free:true,             pro:true  },
  { label:"Priority support",       free:false,            pro:true  },
];

function FeatureCell({ val }: { val: boolean | string }) {
  if (typeof val === "boolean") {
    return val
      ? <span style={{ width:22, height:22, borderRadius:"50%", background:C.forestLight, display:"flex", alignItems:"center", justifyContent:"center" }}><Check size={11} color={C.forest} strokeWidth={3}/></span>
      : <span style={{ width:22, height:22, borderRadius:"50%", background:"#FEF2F2", display:"flex", alignItems:"center", justifyContent:"center" }}><X size={11} color="#DC2626" strokeWidth={3}/></span>;
  }
  return <span style={{ fontSize:12, color:C.charcoal, fontWeight:500 }}>{val}</span>;
}

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly"|"yearly">("monthly");
  const { pricing, loading } = usePricing();

  const displayPrice = billing === "yearly" ? pricing.yearlyPerMonth : pricing.monthly;
  const saving       = Math.round(pricing.monthly * 12 - pricing.yearly);

  return (
    <>
      <Navbar/>
      <main style={{ background:C.ivory, minHeight:"100vh" }}>
        {/* Hero */}
        <section style={{ background:"linear-gradient(135deg,#18181B,#2D1810)", padding:"100px 24px 60px", textAlign:"center" }}>
          <p style={{ fontSize:11, fontWeight:700, color:C.saffron, letterSpacing:2, marginBottom:12, textTransform:"uppercase" }}>Simple Pricing</p>
          <h1 style={{ fontFamily:F.display, fontSize:"clamp(30px,5vw,52px)", fontWeight:700, color:"#fff", margin:"0 0 14px", lineHeight:1.1 }}>
            Preserve your family&apos;s heritage.<br/>
            <em style={{ color:"#E8894A" }}>Free to start.</em>
          </h1>
          <p style={{ fontSize:16, color:"rgba(255,255,255,0.5)", maxWidth:460, margin:"0 auto" }}>
            Upgrade when you&apos;re ready for unlimited access and AI features.
          </p>
        </section>

        <div style={{ maxWidth:900, margin:"0 auto", padding:"0 20px 80px" }}>
          {/* Billing toggle */}
          <div style={{ display:"flex", justifyContent:"center", marginTop:40, marginBottom:40 }}>
            <div style={{ background:C.white, borderRadius:12, padding:4, display:"inline-flex", border:`1px solid ${C.border}`, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
              {(["monthly","yearly"] as const).map(b=>(
                <button key={b} onClick={()=>setBilling(b)}
                  style={{ padding:"10px 28px", borderRadius:9, border:"none", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:F.sans, background:billing===b?C.charcoal:"transparent", color:billing===b?C.white:C.gray, position:"relative", transition:"all 0.2s" }}>
                  {b==="monthly" ? "Monthly" : "Yearly"}
                  {b==="yearly" && <span style={{ position:"absolute", top:-10, right:-4, background:C.forest, color:"#fff", fontSize:9, fontWeight:700, padding:"2px 7px", borderRadius:10 }}>-20%</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Plan cards */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:40 }}>
            {/* Free */}
            <div style={{ background:C.white, borderRadius:20, border:`1px solid ${C.border}`, padding:"28px 24px" }}>
              <p style={{ fontSize:11, fontWeight:700, color:C.gray, letterSpacing:1.5, textTransform:"uppercase", marginBottom:12 }}>Free</p>
              <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:6 }}>
                <span style={{ fontFamily:F.serif, fontSize:40, fontWeight:700, color:C.charcoal }}>0</span>
                <span style={{ fontSize:14, color:C.gray }}>/month</span>
              </div>
              <p style={{ fontSize:13, color:C.gray, marginBottom:24 }}>Get started preserving your family history</p>
              <Link href="/auth/signup" style={{ display:"block", padding:"12px", textAlign:"center", background:C.ivory, border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, fontWeight:600, color:C.charcoal, textDecoration:"none" }}>
                Start free →
              </Link>
            </div>

            {/* Pro */}
            <div style={{ background:"linear-gradient(135deg,#18181B,#2D1810)", borderRadius:20, padding:"28px 24px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", inset:0, opacity:0.08, background:"radial-gradient(circle at 70% 30%,#C8541A,transparent 60%)" }}/>
              <div style={{ position:"relative" }}>
                <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:12 }}>
                  <p style={{ fontSize:11, fontWeight:700, color:C.saffron, letterSpacing:1.5, textTransform:"uppercase", margin:0 }}>Pro</p>
                  <span style={{ fontSize:9, fontWeight:700, background:"rgba(200,84,26,0.2)", color:C.saffron, padding:"2px 8px", borderRadius:10, border:"1px solid rgba(200,84,26,0.3)" }}>MOST POPULAR</span>
                </div>
                {loading ? (
                  <div style={{ height:50, display:"flex", alignItems:"center" }}>
                    <p style={{ color:"rgba(255,255,255,0.3)", fontSize:13 }}>Loading price…</p>
                  </div>
                ) : (
                  <>
                    <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:4 }}>
                      <span style={{ fontSize:16, color:"rgba(255,255,255,0.5)", fontWeight:600 }}>{pricing.symbol}</span>
                      <span style={{ fontFamily:F.serif, fontSize:40, fontWeight:700, color:"#fff", lineHeight:1 }}>{Math.round(displayPrice)}</span>
                      <span style={{ fontSize:14, color:"rgba(255,255,255,0.4)" }}>/month</span>
                    </div>
                    {billing === "yearly" ? (
                      <p style={{ fontSize:12, color:"#B8922A", margin:"0 0 4px", fontWeight:600 }}>
                        {formatPrice(pricing.yearly, pricing)}/year — save {formatPrice(saving, pricing)}
                      </p>
                    ) : (
                      <p style={{ fontSize:12, color:"rgba(255,255,255,0.3)", margin:"0 0 4px" }}>
                        or {formatPrice(pricing.yearly, pricing)}/year (save 20%)
                      </p>
                    )}
                    <p style={{ fontSize:11, color:"rgba(255,255,255,0.25)", margin:"0 0 20px" }}>
                      {pricing.currency} · cancel anytime
                    </p>
                  </>
                )}
                <Link href="/upgrade" style={{ display:"block", padding:"12px", textAlign:"center", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, border:"none", borderRadius:10, fontSize:13, fontWeight:700, color:"#fff", textDecoration:"none" }}>
                  Upgrade to Pro →
                </Link>
              </div>
            </div>
          </div>

          {/* Comparison table */}
          <div style={{ background:C.white, borderRadius:20, border:`1px solid ${C.border}`, overflow:"hidden" }}>
            {/* Header */}
            <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", padding:"16px 20px", borderBottom:`1px solid ${C.border}`, background:C.ivory }}>
              <p style={{ fontSize:11, fontWeight:700, color:C.gray, margin:0, textTransform:"uppercase", letterSpacing:0.8 }}>Feature</p>
              <p style={{ fontSize:11, fontWeight:700, color:C.gray, margin:0, textAlign:"center", textTransform:"uppercase", letterSpacing:0.8 }}>Free</p>
              <p style={{ fontSize:11, fontWeight:700, color:C.saffron, margin:0, textAlign:"center", textTransform:"uppercase", letterSpacing:0.8 }}>Pro ✨</p>
            </div>
            {FEATURES.map((f, i) => (
              <div key={f.label} style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", padding:"12px 20px", borderBottom:i<FEATURES.length-1?`1px solid rgba(0,0,0,0.04)`:"none", alignItems:"center", background:i%2===0?"transparent":"rgba(0,0,0,0.01)" }}>
                <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{f.label}</p>
                <div style={{ display:"flex", justifyContent:"center" }}><FeatureCell val={f.free}/></div>
                <div style={{ display:"flex", justifyContent:"center" }}><FeatureCell val={f.pro}/></div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ marginTop:48 }}>
            <h2 style={{ fontFamily:F.serif, fontSize:26, fontWeight:600, color:C.charcoal, textAlign:"center", marginBottom:24 }}>Common questions</h2>
            {[
              ["Can I cancel anytime?", "Yes — no contracts, no questions asked. Cancel from your account settings and you keep Pro access until the end of the billing period."],
              ["What happens to my data if I cancel?", "Your data is yours. It stays in the app on the free plan — you just lose access to Pro features like Heritage Book and unlimited rituals."],
              ["Is there a family plan?", "Not yet — Pro covers unlimited family members and spaces under one account. A family plan is on our roadmap."],
              ["Which payment methods are accepted?", "India: UPI, cards, net banking via Razorpay. International: cards via Stripe."],
            ].map(([q,a])=>(
              <div key={q} style={{ padding:"16px 0", borderBottom:`1px solid ${C.border}` }}>
                <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 6px" }}>{q}</p>
                <p style={{ fontSize:13, color:C.gray, margin:0, lineHeight:1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

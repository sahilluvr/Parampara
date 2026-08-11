"use client";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import Link from "next/link";
import { initPlanFromEmail, syncPlanFromSupabase } from "@/lib/plan";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", forestLight:"#E8F4EE", forest:"#1A5C42" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

// Correct Knolli copilot ID — clean URL, no system prompt exposed
const KNOLLI_SRC = "https://chat.knolli.ai/knolli/45965";

function UpgradeWall() {
  return (
    <div style={{ flex:1, overflowY:"auto", padding:"24px 20px", background:C.ivory }}>
      {/* Hero */}
      <div style={{ background:"linear-gradient(135deg,#18181B,#2D1810)", borderRadius:20, padding:"40px 28px", textAlign:"center", position:"relative", overflow:"hidden", marginBottom:16 }}>
        <div style={{ position:"absolute", inset:0, opacity:0.08, background:"radial-gradient(circle at 50% 50%,#C8541A,transparent 70%)" }}/>
        <div style={{ position:"relative" }}>
          <div style={{ width:72, height:72, borderRadius:"50%", background:"linear-gradient(135deg,rgba(200,84,26,0.3),rgba(184,146,42,0.2))", border:"1px solid rgba(200,84,26,0.4)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:34 }}>✨</div>
          <h2 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:"#fff", marginBottom:10 }}>AI Ritual Assistant</h2>
          <p style={{ fontSize:14, color:"rgba(255,255,255,0.55)", maxWidth:360, margin:"0 auto 28px", lineHeight:1.8 }}>
            Your personal guide to Indian rituals, traditions and cultural heritage — available instantly, anytime.
          </p>
          <Link href="/upgrade" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", padding:"14px 36px", borderRadius:12, fontSize:14, fontWeight:700, textDecoration:"none", boxShadow:"0 8px 28px rgba(200,84,26,0.45)" }}>
            Unlock with Pro — ₹49/month →
          </Link>
          <p style={{ fontSize:11, color:"rgba(255,255,255,0.25)", marginTop:12 }}>Cancel anytime · Instant access</p>
        </div>
      </div>

      {/* Benefits grid */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:16 }}>
        {[
          ["🙏", "Ritual Guidance", "Step-by-step help for any puja, havan, or ceremony"],
          ["🛒", "Samagri Lists", "Complete ingredient lists with quantities for any ritual"],
          ["📿", "Ceremony Steps", "Detailed vidhi for Namkaran, Vivah, Griha Pravesh & more"],
          ["🗓️", "Festival Meanings", "Deep significance behind every Indian festival"],
          ["⭐", "Astrology Basics", "Muhurat guidance, nakshatra, rashi explanations"],
          ["🕉️", "Regional Customs", "Traditions specific to your region and community"],
        ].map(([emoji, title, desc]) => (
          <div key={title} style={{ background:C.white, borderRadius:14, padding:"16px 14px", border:`1px solid ${C.border}` }}>
            <div style={{ fontSize:24, marginBottom:8 }}>{emoji}</div>
            <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:"0 0 4px" }}>{title}</p>
            <p style={{ fontSize:11, color:C.gray, margin:0, lineHeight:1.5 }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* Pro plan features */}
      <div style={{ background:C.white, borderRadius:14, border:`1px solid ${C.border}`, padding:"18px 20px" }}>
        <p style={{ fontSize:12, fontWeight:700, color:C.charcoal, marginBottom:12, letterSpacing:0.5 }}>✨ EVERYTHING IN PRO</p>
        {[
          "Unlimited AI ritual questions",
          "Complete samagri lists with quantities",
          "Unlimited family spaces",
          "Unlimited members & rituals",
          "Memory vault — photos, videos, voice memos",
          "Cross-device sync — web, mobile, tablet",
          "Priority support",
        ].map(f => (
          <div key={f} style={{ display:"flex", alignItems:"center", gap:10, padding:"7px 0", borderBottom:`1px solid ${C.border}` }}>
            <span style={{ width:18, height:18, borderRadius:"50%", background:C.forestLight, color:C.forest, fontSize:10, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>✓</span>
            <span style={{ fontSize:13, color:C.charcoal }}>{f}</span>
          </div>
        ))}
        <Link href="/upgrade" style={{ display:"block", marginTop:16, padding:"12px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", borderRadius:10, fontSize:13, fontWeight:700, textDecoration:"none", textAlign:"center" }}>
          Upgrade to Pro →
        </Link>
      </div>
    </div>
  );
}

export default function AIPage() {
  const [isPro, setIsPro] = useState(false);
  const [planLoading, setPlanLoading] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("parampara_user_email");
    initPlanFromEmail(email);
    syncPlanFromSupabase().then(p => {
      setIsPro(p === "pro");
      setPlanLoading(false);
    });
  }, []);

  return (
    <AppShell>
      <div style={{ display:"flex", flexDirection:"column", height:"calc(100vh - 56px)" }}>

        {/* Header */}
        <div style={{ padding:"14px 20px", borderBottom:`1px solid ${C.border}`, background:C.white, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:36, height:36, borderRadius:10, background:"linear-gradient(135deg,#C8541A,#B8922A)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>✨</div>
            <div>
              <h1 style={{ fontFamily:F.serif, fontSize:17, fontWeight:600, color:C.charcoal, margin:0 }}>AI Ritual Assistant</h1>
              <p style={{ fontSize:11, color:C.gray, margin:0 }}>
                {planLoading ? "Checking access…" : isPro ? "🟢 Pro · Powered by Knolli AI" : "🔒 Upgrade to Pro to unlock"}
              </p>
            </div>
          </div>
          {isPro && !planLoading && (
            <span style={{ fontSize:11, background:C.saffronLight, color:C.saffron, padding:"4px 10px", borderRadius:20, fontWeight:600 }}>
              ✨ PRO
            </span>
          )}
        </div>

        {/* Plan loading */}
        {planLoading && (
          <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", background:C.ivory }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ width:48, height:48, borderRadius:"50%", background:"linear-gradient(135deg,#C8541A,#B8922A)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", fontSize:24 }}>✨</div>
              <p style={{ fontSize:14, color:C.gray }}>Checking access…</p>
            </div>
          </div>
        )}

        {/* Free user — benefits wall */}
        {!planLoading && !isPro && <UpgradeWall/>}

        {/* Pro user — Knolli iframe */}
        {!planLoading && isPro && (
          <div style={{ flex:1, position:"relative", minHeight:0 }}>
            {/* Loading screen */}
            {!iframeLoaded && (
              <div style={{ position:"absolute", inset:0, background:C.ivory, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", zIndex:10 }}>
                <div style={{ fontSize:56, marginBottom:16 }}>🪔</div>
                <p style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Starting AI Assistant…</p>
                <p style={{ fontSize:13, color:C.gray, margin:"0 0 28px" }}>Connecting to Knolli — usually takes 5-10 seconds</p>
                <div style={{ display:"flex", gap:10 }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width:10, height:10, borderRadius:"50%", background:C.saffron, animation:`bounce 1.2s ease-in-out ${i*0.2}s infinite` }}/>
                  ))}
                </div>
                <p style={{ fontSize:11, color:C.gray, marginTop:24, opacity:0.6 }}>Powered by Knolli AI</p>
              </div>
            )}
            <iframe
              src={KNOLLI_SRC}
              id="knolli-embed"
              onLoad={() => setIframeLoaded(true)}
              style={{ width:"100%", height:"100%", border:"none", display:"block", opacity:iframeLoaded?1:0, transition:"opacity 0.5s ease" }}
              allow="microphone"
              title="Parampara AI — Knolli"
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes bounce {
          0%,100%{transform:translateY(0);opacity:0.4}
          50%{transform:translateY(-10px);opacity:1}
        }
      `}</style>
    </AppShell>
  );
}

"use client";
import { useState } from "react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import Link from "next/link";
import { C, F, WHATWEDO_CARDS } from "@/lib/constants";


// CSS gradient card — premium, no random faces ever
function SectionVisual({ idx, img, alt }: { idx:number; img:string; alt:string }) {
  const [failed, setFailed] = useState(false);
  const card = WHATWEDO_CARDS[idx];
  return (
    <div style={{ borderRadius:24, overflow:"hidden", aspectRatio:"4/3", position:"relative", background:card.grad, boxShadow:"0 24px 60px rgba(0,0,0,0.15)" }}>
      {!failed && (
        <img src={img} alt={alt} loading="lazy"
          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
          onError={()=>setFailed(true)}/>
      )}
      {!failed && <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(0,0,0,0.05),rgba(0,0,0,0.1))" }}/>}
      {failed && (
        <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16, padding:24 }}>
          <span style={{ fontSize:80, filter:"drop-shadow(0 8px 24px rgba(0,0,0,0.3))" }}>{card.emoji}</span>
          <p style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.85)", letterSpacing:2, textTransform:"uppercase", textAlign:"center" }}>{card.label}</p>
        </div>
      )}
      <div style={{ position:"absolute", top:16, right:16, width:48, height:48, borderRadius:"50%", background:"rgba(255,255,255,0.12)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>{card.emoji}</div>
    </div>
  );
}

const OFFERINGS = [
  { icon:"📜", title:"Ritual Documentation", imgKey:0,
    img:"https://images.unsplash.com/photo-1574026912140-05f64e7c60c0?w=900&q=85&auto=format&fit=crop",
    features:["Step-by-step ritual builder","Rich text with elder notes","Multiple family contributors","Voice memo recording","Version history"] },
  { icon:"🛒", title:"Samagri Management", imgKey:1,
    img:"https://images.unsplash.com/photo-1490750967868-88df5691cc5e?w=900&q=85&auto=format&fit=crop",
    features:["AI-generated samagri lists","Quantities by guest count","Shareable checklist","Save & reuse","Regional item variations"] },
  { icon:"🗓️", title:"Festival Calendar", imgKey:2,
    img:"https://images.unsplash.com/photo-1604605801370-2656da8568c2?w=900&q=85&auto=format&fit=crop",
    features:["Auto-populated by religion","Countdown timers","Birthday & anniversary alerts","Custom festivals","Family-wide reminders"] },
  { icon:"✨", title:"AI Ritual Assistant", imgKey:3,
    img:"https://images.unsplash.com/photo-1545696968-1a5245650b36?w=900&q=85&auto=format&fit=crop",
    features:["Ritual explainer (Claude AI)","Samagri generator","Missing steps finder","Cultural context","Regional variations"] },
  { icon:"📸", title:"Memory Vault", imgKey:4,
    img:"https://images.unsplash.com/photo-1511895426328-dc8714191011?w=900&q=85&auto=format&fit=crop",
    features:["Photo & video uploads","Voice memo recording","Album organisation","Download & share","Family reactions"] },
  { icon:"👨‍👩‍👧‍👦", title:"Family Space", imgKey:5,
    img:"https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=900&q=85&auto=format&fit=crop",
    features:["Role-based access","Invite via link or email","Birthday & anniversary reminders","Family tree with download","Shared ritual visibility"] },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar/>
      <main>
        <section style={{ paddingTop:140, paddingBottom:80, background:C.ivory, textAlign:"center" }}>
          <div style={{ maxWidth:700, margin:"0 auto", padding:"0 24px" }}>
            <p style={{ fontSize:12, fontWeight:600, letterSpacing:2.5, textTransform:"uppercase", color:C.saffron, marginBottom:16 }}>Our Platform</p>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(38px,5.5vw,68px)", fontWeight:600, color:C.charcoal, lineHeight:1.12, marginBottom:24, letterSpacing:"-1px" }}>
              Everything your family<br/><em style={{ fontStyle:"italic", color:C.saffronMid }}>needs in one place</em>
            </h1>
            <p style={{ fontSize:17, color:C.gray, lineHeight:1.8, maxWidth:560, margin:"0 auto 40px" }}>
              Six deeply integrated modules that work together to preserve, share, and celebrate your family&apos;s cultural heritage.
            </p>
            <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", padding:"15px 36px", borderRadius:12, fontSize:15, fontWeight:600, textDecoration:"none", boxShadow:"0 8px 28px rgba(200,84,26,0.35)" }}>
              Try it free →
            </Link>
          </div>
        </section>

        {OFFERINGS.map(({ icon, title, img, imgKey, features }, i) => (
          <section key={title} style={{ padding:"80px 24px", background: i%2===0 ? C.cream : C.ivory }}>
            <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }} className="wwd-grid">
              <div style={{ order: i%2===0 ? 0 : 1 }}>
                <div style={{ width:52, height:52, borderRadius:16, background:`${C.saffron}18`, border:`1px solid ${C.saffron}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, marginBottom:20 }}>{icon}</div>
                <h2 style={{ fontFamily:F.display, fontSize:"clamp(26px,3.5vw,42px)", fontWeight:600, color:C.charcoal, lineHeight:1.2, marginBottom:20 }}>{title}</h2>
                <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:28 }}>
                  {features.map(f=>(
                    <div key={f} style={{ display:"flex", gap:12, alignItems:"center" }}>
                      <div style={{ width:22, height:22, borderRadius:"50%", background:`${C.saffron}12`, border:`1px solid ${C.saffron}25`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <span style={{ fontSize:10, color:C.saffron, fontWeight:700 }}>✓</span>
                      </div>
                      <span style={{ fontSize:15, color:C.charcoal }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", padding:"12px 24px", borderRadius:12, fontSize:14, fontWeight:600, textDecoration:"none" }}>
                  Get started →
                </Link>
              </div>
              <div style={{ order: i%2===0 ? 1 : 0 }}>
                <SectionVisual idx={imgKey} img={img} alt={title}/>
              </div>
            </div>
          </section>
        ))}

        <section style={{ padding:"80px 24px", background:C.charcoal, textAlign:"center" }}>
          <div style={{ maxWidth:600, margin:"0 auto" }}>
            <p style={{ fontFamily:F.display, fontSize:48, marginBottom:14 }}>🪔</p>
            <h2 style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:C.white, marginBottom:14 }}>Ready to preserve your heritage?</h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.45)", marginBottom:36, lineHeight:1.7 }}>Free to start. No credit card required.</p>
            <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", padding:"16px 40px", borderRadius:14, fontSize:16, fontWeight:700, textDecoration:"none", boxShadow:"0 8px 32px rgba(200,84,26,0.4)" }}>
              Create Family Space →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
      <style>{`@media(max-width:768px){.wwd-grid{grid-template-columns:1fr!important}.wwd-grid>div{order:unset!important}}`}</style>
    </>
  );
}

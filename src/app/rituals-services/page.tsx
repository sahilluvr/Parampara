"use client";
import { useState } from "react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import Link from "next/link";
import { C, F, IMGS } from "@/lib/constants";


// Each ritual has unique gradient + emoji — always looks premium even without image
const RITUALS = [
  { name:"Namkaran",          sub:"Naming Ceremony",        emoji:"👶",  grad:"linear-gradient(135deg,#7B3A00,#C8541A)",  accent:"#C8541A", bg:"#FDF0E6",
    img: IMGS.flowers,
    desc:"Sacred ritual of formally naming your newborn, performed 10–12 days after birth with priest, nakshatra guidance, and family blessings." },
  { name:"Annaprashan",       sub:"First Rice Feeding",     emoji:"🍚",  grad:"linear-gradient(135deg,#1A3A1A,#16A34A)",  accent:"#16A34A", bg:"#F0FDF4",
    img: IMGS.diya,
    desc:"Your child's first solid food ceremony — a joyful milestone celebrating new growth, performed with rice, family, and blessings." },
  { name:"Mundan",            sub:"First Haircut Ceremony", emoji:"✂️",  grad:"linear-gradient(135deg,#7A2E00,#EA580C)",  accent:"#EA580C", bg:"#FFF7ED",
    img: IMGS.incense,
    desc:"The sacred tonsure ceremony, believed to cleanse the child of past-life influences and bless them with health and new beginnings." },
  { name:"Yagnopavitam",      sub:"Sacred Thread Ceremony", emoji:"🧵",  grad:"linear-gradient(135deg,#1A2A5C,#2563EB)",  accent:"#2563EB", bg:"#EFF6FF",
    img: IMGS.temple,
    desc:"Upanayana — the sacred thread ceremony marking a boy's initiation into Vedic education and spiritual life. One of the most important samskaras." },
  { name:"Vivah",             sub:"Wedding Ceremony",       emoji:"💒",  grad:"linear-gradient(135deg,#4A1A6A,#9333EA)",  accent:"#9333EA", bg:"#FDF4FF",
    img: IMGS.wedding,
    desc:"Complete Vedic wedding rituals — from Ganesh puja and Saptapadi to sindoor daan. Every step documented for your family tradition." },
  { name:"Griha Pravesh",     sub:"Housewarming Ceremony",  emoji:"🏠",  grad:"linear-gradient(135deg,#1A3A1A,#1A5C42)",  accent:"#1A5C42", bg:"#F0FDF4",
    img: IMGS.diya,
    desc:"Vastu puja and housewarming ceremony for entering a new home — with kalash, diya, muhurat guidance and complete samagri list." },
  { name:"Satyanarayan Katha",sub:"Monthly Vrat & Puja",    emoji:"🙏",  grad:"linear-gradient(135deg,#7A5500,#B8922A)",  accent:"#B8922A", bg:"#FFFBEB",
    img: IMGS.incense,
    desc:"The beloved monthly katha and puja to Lord Satyanarayan — complete steps, mantras, prasad recipe and family participation guide." },
  { name:"Shraddha",          sub:"Ancestor Remembrance",   emoji:"🕊️", grad:"linear-gradient(135deg,#2A2A3A,#475569)",  accent:"#475569", bg:"#F8FAFC",
    img: IMGS.rangoli,
    desc:"Pitru paksha and ancestor remembrance rituals — documented with deep respect, cultural depth, and regional variations across India." },
];

function RitualImage({ img, emoji, grad, name }: { img:string; emoji:string; grad:string; name:string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div style={{ aspectRatio:"16/9", overflow:"hidden", position:"relative", background:grad }}>
      {!failed && (
        <img src={img} alt={name} loading="lazy"
          style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
          onError={()=>setFailed(true)}
        />
      )}
      {failed && (
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:64, filter:"drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}>{emoji}</span>
        </div>
      )}
      {!failed && <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,0.5),transparent 50%)" }}/>}
      <span style={{ position:"absolute", bottom:12, left:14, fontSize:28 }}>{emoji}</span>
    </div>
  );
}

export default function RitualsServicesPage() {
  return (
    <>
      <Navbar/>
      <main>
        {/* Hero */}
        <section style={{ paddingTop:140, paddingBottom:80, background:C.charcoal, textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, opacity:0.06, backgroundImage:`url(${IMGS.rangoli})`, backgroundSize:"cover" }}/>
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(24,24,27,0.7),rgba(24,24,27,0.95))" }}/>
          <div style={{ position:"relative", maxWidth:700, margin:"0 auto", padding:"0 24px" }}>
            <p style={{ fontSize:12, fontWeight:600, letterSpacing:2.5, textTransform:"uppercase", color:C.gold, marginBottom:16 }}>16 Samskaras</p>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(38px,5vw,68px)", fontWeight:600, color:C.white, lineHeight:1.12, marginBottom:24, letterSpacing:"-1px" }}>
              Rituals &amp; Ceremonies
            </h1>
            <p style={{ fontSize:17, color:"rgba(255,255,255,0.5)", lineHeight:1.8, maxWidth:520, margin:"0 auto" }}>
              From birth to beyond — all 16 samskaras documented with cultural depth, AI guidance, and your family&apos;s own variations.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section style={{ padding:"80px 24px", background:C.ivory }}>
          <div style={{ maxWidth:1140, margin:"0 auto" }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:24 }}>
              {RITUALS.map(({ name, sub, emoji, desc, img, grad, accent, bg }) => (
                <div key={name} style={{ background:C.white, borderRadius:20, overflow:"hidden", border:`1px solid ${C.border}`, display:"flex", flexDirection:"column" }}>
                  {/* Accent bar */}
                  <div style={{ height:3, background:accent }}/>
                  {/* Image / fallback */}
                  <RitualImage img={img} emoji={emoji} grad={grad} name={name}/>
                  {/* Content */}
                  <div style={{ padding:"18px 20px", flex:1, display:"flex", flexDirection:"column" }}>
                    <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:bg, borderRadius:20, padding:"4px 10px", marginBottom:10, alignSelf:"flex-start" }}>
                      <span style={{ fontSize:11, fontWeight:700, letterSpacing:1, textTransform:"uppercase", color:accent }}>{sub}</span>
                    </div>
                    <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:10 }}>{name}</h2>
                    <p style={{ fontSize:13, color:C.gray, lineHeight:1.75, marginBottom:16, flex:1 }}>{desc}</p>
                    <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:13, fontWeight:600, color:accent, textDecoration:"none" }}>
                      Document this ritual →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign:"center", marginTop:64, padding:"48px 32px", background:"linear-gradient(135deg,#18181B,#2D1810)", borderRadius:24, position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", inset:0, opacity:0.05, backgroundImage:`url(${IMGS.rangoli})`, backgroundSize:"cover" }}/>
              <div style={{ position:"relative" }}>
                <p style={{ fontFamily:F.display, fontSize:48, marginBottom:12 }}>🪔</p>
                <h2 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:C.white, marginBottom:14 }}>
                  Don&apos;t see your ritual?
                </h2>
                <p style={{ fontSize:16, color:"rgba(255,255,255,0.5)", marginBottom:32, maxWidth:460, margin:"0 auto 32px" }}>
                  Create any custom ritual — regional variations, family-specific traditions, or lesser-known ceremonies.
                </p>
                <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", padding:"14px 32px", borderRadius:14, fontSize:15, fontWeight:700, textDecoration:"none", boxShadow:"0 8px 28px rgba(200,84,26,0.4)" }}>
                  Start documenting for free →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

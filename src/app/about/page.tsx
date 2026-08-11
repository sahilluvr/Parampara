"use client";
import { useState } from "react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import Link from "next/link";
import { C, F, IMGS } from "@/lib/constants";


function FallbackImage({ img, alt, emoji, grad, style }: { img:string; alt:string; emoji:string; grad:string; style?:React.CSSProperties }) {
  const [failed, setFailed] = useState(false);
  return (
    <div style={{ position:"relative", overflow:"hidden", ...style, background:grad }}>
      {!failed && (
        <img src={img} alt={alt} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block" }}
          onError={()=>setFailed(true)}/>
      )}
      {failed && (
        <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12 }}>
          <span style={{ fontSize:64 }}>{emoji}</span>
          <p style={{ fontSize:11, fontWeight:600, color:"rgba(255,255,255,0.6)", letterSpacing:2, textTransform:"uppercase" }}>{alt}</p>
        </div>
      )}
      {!failed && <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,0.15),transparent 60%)" }}/>}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar/>
      <main>
        {/* Hero */}
        <section style={{ paddingTop:140, paddingBottom:100, background:C.charcoal, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0 }}>
            <FallbackImage img={IMGS.temple} alt="Sacred Temple" emoji="🛕" grad="linear-gradient(135deg,#18181B,#2D1810)"
              style={{ width:"100%", height:"100%", borderRadius:0 }}/>
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(24,24,27,0.6),rgba(24,24,27,0.92))" }}/>
          </div>
          <div style={{ position:"relative", maxWidth:800, margin:"0 auto", padding:"0 28px", textAlign:"center" }}>
            <p style={{ fontSize:11, fontWeight:700, letterSpacing:3, textTransform:"uppercase", color:C.gold, marginBottom:18 }}>The Story Behind Parampara</p>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(36px,5.5vw,72px)", fontWeight:600, color:"#fff", lineHeight:1.1, marginBottom:20, letterSpacing:"-1.5px" }}>
              A grandmother in Chandigarh,<br/>
              <em style={{ fontStyle:"italic", background:"linear-gradient(135deg,#D4A843,#C8541A)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                and the knowledge she took with her
              </em>
            </h1>
            <p style={{ fontSize:18, color:"rgba(255,255,255,0.5)", lineHeight:1.8, maxWidth:560, margin:"0 auto" }}>
              A platform born from personal loss, built so every Indian family preserves what matters most.
            </p>
          </div>
        </section>

        {/* Story */}
        <section style={{ padding:"clamp(60px,10vw,120px) 24px", background:C.ivory }}>
          <div style={{ maxWidth:1100, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }} className="about-grid">

            {/* Image stack */}
            <div style={{ position:"relative", minHeight:520 }}>
              {/* Large: warm Indian family */}
              <div style={{ borderRadius:24, overflow:"hidden", width:"82%", aspectRatio:"3/4" }}>
                <FallbackImage img={IMGS.diya} alt="Indian Family Together" emoji="👨‍👩‍👧‍👦"
                  grad="linear-gradient(135deg,#7B3A00,#C8541A)"
                  style={{ width:"100%", height:"100%", borderRadius:0 }}/>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(200,84,26,0.2),transparent 55%)" }}/>
              </div>
              {/* Small: Granth / scripture */}
              <div style={{ position:"absolute", bottom:-20, right:0, width:"50%", aspectRatio:"1/1", borderRadius:20, overflow:"hidden", border:"4px solid #fff", boxShadow:"0 20px 60px rgba(0,0,0,0.18)" }}>
                <FallbackImage img={IMGS.flowers} alt="Sacred Scripture" emoji="📖"
                  grad="linear-gradient(135deg,#2D1810,#7B3A00)"
                  style={{ width:"100%", height:"100%", borderRadius:0 }}/>
                <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"10px 12px", background:"linear-gradient(to top,rgba(0,0,0,0.6),transparent)" }}>
                  <p style={{ fontSize:10, fontWeight:600, color:"rgba(255,255,255,0.85)", letterSpacing:1.5, margin:0, textTransform:"uppercase" }}>Sacred Scripture</p>
                </div>
              </div>
              {/* Year badge */}
              <div style={{ position:"absolute", top:24, right:0, background:"linear-gradient(135deg,#C8541A,#B8922A)", borderRadius:16, padding:"16px 22px", color:"#fff", boxShadow:"0 12px 32px rgba(200,84,26,0.35)", zIndex:2 }}>
                <p style={{ fontFamily:F.display, fontSize:32, fontWeight:700, lineHeight:1, margin:0 }}>2016</p>
                <p style={{ fontSize:11, opacity:0.8, marginTop:3, margin:0 }}>Chandigarh, India</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:C.saffron, marginBottom:16 }}>Our Origin</p>
              <h2 style={{ fontFamily:F.display, fontSize:"clamp(28px,3.5vw,44px)", fontWeight:600, color:C.charcoal, lineHeight:1.15, marginBottom:24, letterSpacing:"-0.5px" }}>
                The knowledge that<br/><em style={{ fontStyle:"italic", color:C.gold }}>walked out with her</em>
              </h2>
              <p style={{ fontSize:16, color:C.gray, lineHeight:1.9, marginBottom:16 }}>
                In 2016, our founder&apos;s Dadi passed away in Chandigarh. She had spent a lifetime performing every puja, every ritual, every ceremony with absolute precision. Guests would travel hours to have her bless their newborns. She knew the exact flowers, the specific mantras, the right muhurat.
              </p>
              <p style={{ fontSize:16, color:C.gray, lineHeight:1.9, marginBottom:16 }}>
                When she passed, that knowledge went with her. At the first family ceremony after, no one could agree on a single step. The priest had one version. The aunts had another. Something irreplaceable had been lost.
              </p>
              <p style={{ fontSize:16, color:C.gray, lineHeight:1.9, marginBottom:28 }}>
                That grief led to a realisation: this wasn&apos;t unique. Across India, across the diaspora, thousands of families were losing their cultural knowledge every year — not because they didn&apos;t care, but because no one had thought to write it down.
              </p>
              <blockquote style={{ borderLeft:`3px solid ${C.saffron}`, paddingLeft:20, marginBottom:28 }}>
                <p style={{ fontFamily:F.display, fontSize:20, fontStyle:"italic", color:C.charcoal, lineHeight:1.5, margin:0 }}>
                  &ldquo;Parampara was built in Chandigarh, for her, and for every Dadi whose wisdom deserves to outlive them.&rdquo;
                </p>
              </blockquote>
              <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"13px 28px", borderRadius:12, fontSize:14, fontWeight:600, textDecoration:"none" }}>
                Start preserving yours →
              </Link>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding:"clamp(60px,8vw,100px) 24px", background:C.cream }}>
          <div style={{ maxWidth:1000, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:56 }}>
              <p style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:C.saffron, marginBottom:14 }}>What We Stand For</p>
              <h2 style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:C.charcoal, letterSpacing:"-0.5px" }}>Our values</h2>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:20 }}>
              {[
                { icon:"🪔", title:"Cultural reverence", desc:"We approach every ritual with deep respect for its spiritual and cultural significance." },
                { icon:"🔒", title:"Family privacy", desc:"Your traditions are sacred. Everything is private and visible only to your family." },
                { icon:"🌍", title:"Diaspora-first", desc:"Built for Indian families everywhere — whether in Chandigarh or Chicago." },
                { icon:"🤝", title:"Intergenerational", desc:"Connecting the eldest elders with the youngest grandchildren through shared tradition." },
              ].map(({icon,title,desc}) => (
                <div key={title} style={{ background:C.white, borderRadius:18, padding:"24px 22px", border:`1px solid ${C.border}` }}>
                  <span style={{ fontSize:28, display:"block", marginBottom:14 }}>{icon}</span>
                  <h3 style={{ fontFamily:F.serif, fontSize:16, fontWeight:600, color:C.charcoal, marginBottom:8 }}>{title}</h3>
                  <p style={{ fontSize:13, color:C.gray, lineHeight:1.7, margin:0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding:"clamp(60px,10vw,120px) 24px", background:C.charcoal, textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 50%,rgba(200,84,26,0.1),transparent 65%)", pointerEvents:"none" }}/>
          <div style={{ maxWidth:600, margin:"0 auto", position:"relative" }}>
            <p style={{ fontFamily:F.display, fontSize:48, marginBottom:16 }}>🪔</p>
            <h2 style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,52px)", fontWeight:600, color:"#fff", marginBottom:14, letterSpacing:"-0.5px" }}>
              Your family has a story too
            </h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.45)", marginBottom:40, lineHeight:1.8 }}>
              Don&apos;t wait for the moment to pass. Start documenting your family&apos;s rituals, traditions, and heritage today.
            </p>
            <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", padding:"16px 40px", borderRadius:14, fontSize:16, fontWeight:700, textDecoration:"none", boxShadow:"0 12px 40px rgba(200,84,26,0.4)" }}>
              Begin your family&apos;s story →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}

"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import FestivalTools from "@/components/marketing/FestivalTools";
import BabyNameFinder from "@/components/marketing/BabyNameFinder";
import { C, F, IMGS, GALLERY_CARDS } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog";

// Premium gallery card — local image with gradient fallback
function GalleryCard({ card, col, row }: { card:typeof GALLERY_CARDS[0]; col:string; row:string }) {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <div style={{ borderRadius:16, overflow:"hidden", position:"relative", gridColumn:col, gridRow:row }}>
      <div style={{ position:"absolute", inset:0, background:card.grad }}/>
      {!imgFailed && (
        <img src={card.img} alt={card.label} loading="lazy"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", display:"block" }}
          onError={()=>setImgFailed(true)}
        />
      )}
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.05) 50%,transparent 100%)" }}/>
      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"16px" }}>
        <p style={{ fontSize:14, fontWeight:700, color:"#fff", margin:0 }}>{card.label}</p>
        <p style={{ fontSize:11, color:"rgba(255,255,255,0.65)", margin:"3px 0 0" }}>{card.sublabel}</p>
      </div>
    </div>
  );
}

const FEATURES = [
  { icon:"📜", title:"Ritual Vault", desc:"Document every ceremony step by step — samagri, mantras, elder notes, and photos. Never lose a tradition again." },
  { icon:"🤖", title:"AI Ritual Guide", desc:"Ask our AI to explain any ritual, generate samagri lists with quantities, or find missing steps in your ceremony." },
  { icon:"🗓", title:"Festival Calendar", desc:"Track upcoming festivals with countdowns, ritual guides, and reminders for your entire family." },
  { icon:"📸", title:"Memory Vault", desc:"Upload photos, videos, and voice memos from ceremonies. Your family's most sacred moments, preserved forever." },
  { icon:"👨‍👩‍👧‍👦", title:"Family Tree", desc:"Build your family tree, assign roles, and invite members. Share your heritage across generations and oceans." },
  { icon:"🎂", title:"Birthday Reminders", desc:"Add birthdays for every family member. Automatic reminders ensure no one is ever forgotten." },
];

const STATS = [
  { value:"2,400+", label:"Families joined" },
  { value:"14,000+", label:"Rituals documented" },
  { value:"23+", label:"Samskaras covered" },
  { value:"4.9★", label:"Family rating" },
];

const TESTIMONIALS = [
  { text:"We used Parampara to document our family's Satyanarayan Katha step by step. My son in Canada performed it correctly for the first time without calling us at 2 AM. That was the moment I knew this was worth it.", name:"Sunita Arora", role:"Mother of 2 · Ludhiana", initials:"SA", avatar:"" },
  { text:"The AI samagri generator saved us before our Griha Pravesh. I had a complete list with quantities in under a minute — showed it to the pandit and he added just two items. Nothing was forgotten.", name:"Vikram Malhotra", role:"IT Professional · Bengaluru", initials:"VM", avatar:"" },
  { text:"My dadi is 84. She has more ritual knowledge in her head than I could write in a year. We're finally capturing it — her voice, her words, her way of explaining things. I can't put a price on that.", name:"Priya Nair", role:"NRI · Toronto, Canada", initials:"PN", avatar:"" },
  { text:"Three branches of our family — Punjab, Maharashtra, Tamil Nadu — now share one space. The Navratri guide resolved a debate we've had for years. Now we all know which colour goes on which day.", name:"Ananya Krishnan", role:"Teacher · Chennai", initials:"AK", avatar:"" },
];

const FAQS = [
  { q:"What is Parampara?", a:"Parampara is a digital heritage platform for Indian and South Asian families to document, preserve, and pass down rituals, ceremonies, and traditions across generations — powered by AI and built with cultural depth." },
  { q:"How does the AI Ritual Assistant work?", a:"Our AI (powered by Anthropic Claude) can explain any ritual's significance, generate complete samagri lists with quantities, and identify missing steps in your documented ceremony — all in seconds." },
  { q:"Is my family's data private?", a:"Yes, completely. Each family has their own isolated space with row-level security. Your traditions, photos, and voice memos are only visible to the members you invite." },
  { q:"Can I use Parampara for any religion?", a:"Absolutely. Parampara supports Hindu, Sikh, Muslim, Christian, Jain, Buddhist, and all other traditions equally. Document any ceremony, festival, or custom from any faith — the platform is built for every South Asian family." },
  { q:"What's included in the free plan?", a:"The free plan includes 2 family spaces, unlimited family members, 5 ritual entries, the festival calendar, family calendar, Mannats tracker, and 5 AI queries per month — everything you need to start preserving your family heritage." },
  { q:"How do I invite family members?", a:"Simply create your family space, then share the unique invite link. Members can join with one click and you assign their role — Elder, Parent, Contributor, or Viewer." },
];


  // FAQ Schema for Google rich results
  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Parampara?", "acceptedAnswer": { "@type": "Answer", "text": "Parampara is a digital heritage platform for Indian families to document, preserve and share their rituals, traditions, and cultural heritage." } },
      { "@type": "Question", "name": "Is Parampara free to use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Parampara offers a free plan with up to 2 family spaces, unlimited family members, and 5 ritual entries per family. Pro plan is available at ₹49/month for unlimited access." } },
      { "@type": "Question", "name": "Can I use Parampara for all religions?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Parampara supports Hindu, Sikh, Muslim, Christian, Jain, Buddhist, and custom traditions." } },
      { "@type": "Question", "name": "Can I access my family data on multiple devices?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when you sign in with your email or Google account, your family data syncs across all devices — phone, tablet, and computer." } },
      { "@type": "Question", "name": "How do I invite family members?", "acceptedAnswer": { "@type": "Answer", "text": "From the Family Members section, add a member with their email — they will receive an invite email with a link and invite code to join your family space." } },
    ]
  };

function HomePWAButton() {
  const [canInstall, setCanInstall] = React.useState(false);
  const [prompt, setPrompt] = React.useState<{prompt:()=>void}|null>(null);

  React.useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e as unknown as {prompt:()=>void});
      setCanInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!canInstall) return (
    <p style={{ fontSize:12, color:"rgba(255,255,255,0.25)", margin:0 }}>
      Already installed? Open from your home screen 🪔
    </p>
  );

  return (
    <button
      onClick={()=>{ prompt?.prompt(); }}
      style={{ display:"inline-flex", alignItems:"center", gap:10, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", border:"none", borderRadius:14, padding:"14px 32px", fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"Inter,sans-serif", boxShadow:"0 8px 28px rgba(200,84,26,0.45)" }}>
      📲 Install App — Free
    </button>
  );
}

function HomepagePrice() {
  const [price, setPrice] = React.useState("49");
  const [symbol, setSymbol] = React.useState("₹");
  const [yearly, setYearly] = React.useState("470");

  React.useEffect(() => {
    fetch("/api/pricing").then(r=>r.json()).then(d => {
      setPrice(String(d.monthly));
      setSymbol(d.symbol);
      setYearly(String(d.yearly));
    }).catch(()=>{});
  }, []);

  return (
    <div style={{ marginBottom:4 }}>
      <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:4 }}>
        <span style={{ fontFamily:"inherit", fontSize:32, fontWeight:600, color:"rgba(255,255,255,0.6)" }}>{symbol}</span>
        <span style={{ fontFamily:"Georgia,serif", fontSize:52, fontWeight:700, color:"#fff", lineHeight:1 }}>{price}</span>
        <span style={{ fontSize:14, color:"rgba(255,255,255,0.35)" }}>/mo</span>
      </div>
      <p style={{ fontSize:12, color:"#B8922A", marginBottom:6, fontWeight:500 }}>or {symbol}{yearly}/year — save 20%</p>
    </div>
  );
}

export default function HomePage() {
  const [activeFAQ, setActiveFAQ] = useState<number|null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  // ── Premium Havan animation ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    type P = { x:number; y:number; vx:number; vy:number; life:number; maxLife:number; size:number; type:"flame"|"ember"|"smoke"; };
    const particles: P[] = [];

    function spawn(W: number, H: number) {
      const kundX = W * 0.5;
      const kundY = H * 0.78;
      // Flames — slower, fewer
      if (Math.random() < 0.35) {
        particles.push({ x: kundX+(Math.random()-0.5)*W*0.04, y: kundY, vx:(Math.random()-0.5)*0.5, vy:-(Math.random()*2.2+1.2), life:0, maxLife:Math.random()*80+60, size:Math.random()*18+8, type:"flame" });
      }
      // Embers — rare
      if (Math.random() < 0.06) {
        particles.push({ x: kundX+(Math.random()-0.5)*W*0.03, y: kundY-10, vx:(Math.random()-0.5)*2, vy:-(Math.random()*4+1.5), life:0, maxLife:Math.random()*50+25, size:2, type:"ember" });
      }
      // Smoke — gentle
      if (Math.random() < 0.12) {
        particles.push({ x: kundX+(Math.random()-0.5)*W*0.03, y: kundY-H*0.06, vx:(Math.random()-0.5)*0.35, vy:-(Math.random()*0.7+0.25), life:0, maxLife:Math.random()*140+100, size:Math.random()*24+16, type:"smoke" });
      }
    }

    const diyas = [
      {x:0.15,y:0.86},{x:0.85,y:0.86},{x:0.08,y:0.68},{x:0.92,y:0.68},{x:0.28,y:0.92},{x:0.72,y:0.92},
    ];

    function draw() {
      const W = canvas!.width, H = canvas!.height;
      ctx!.clearRect(0, 0, W, H);
      t += 0.006; // slow, calming
      spawn(W, H);

      const kundX = W*0.5, kundY = H*0.78;

      // Deep background sacred glow
      const bgG = ctx!.createRadialGradient(kundX, kundY, 0, kundX, kundY, W*0.4);
      bgG.addColorStop(0, `rgba(180,60,8,${0.13+0.04*Math.sin(t*1.2)})`);
      bgG.addColorStop(0.5, `rgba(140,40,5,0.05)`);
      bgG.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.fillStyle = bgG; ctx!.fillRect(0,0,W,H);

      // Warm ambient top glow
      const topG = ctx!.createRadialGradient(W*0.5, H*0.1, 0, W*0.5, H*0.1, W*0.6);
      topG.addColorStop(0, `rgba(184,146,42,0.04)`);
      topG.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.fillStyle = topG; ctx!.fillRect(0,0,W,H);

      // Draw smoke (behind flames)
      particles.filter(p=>p.type==="smoke").forEach(p=>{
        p.x += p.vx + Math.sin(t*0.8+p.life*0.05)*0.4;
        p.y += p.vy; p.size += 0.35; p.life++;
        if (p.life > p.maxLife) return;
        const prog = p.life/p.maxLife;
        const a = Math.sin(prog*Math.PI)*0.055;
        ctx!.beginPath(); ctx!.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx!.fillStyle = `rgba(120,100,80,${a})`; ctx!.fill();
      });

      // Havan kund base — warm pulsing glow
      const kp = 0.88 + 0.12*Math.sin(t*2.2);
      const kg = ctx!.createRadialGradient(kundX,kundY,0,kundX,kundY,W*0.16*kp);
      kg.addColorStop(0, `rgba(255,200,50,${0.40*kp})`);
      kg.addColorStop(0.25, `rgba(240,90,10,${0.28*kp})`);
      kg.addColorStop(0.6, `rgba(180,35,5,${0.10})`);
      kg.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.fillStyle = kg; ctx!.fillRect(0,0,W,H);

      // Samagri — subtle items around kund base
      ctx!.save(); ctx!.translate(kundX, kundY+H*0.012);
      const items = [{dx:-W*0.09,r:W*0.025,c:"rgba(200,160,80,0.12)"},{dx:W*0.09,r:W*0.025,c:"rgba(200,160,80,0.12)"},{dx:-W*0.05,r:W*0.018,c:"rgba(180,120,60,0.10)"},{dx:W*0.05,r:W*0.018,c:"rgba(180,120,60,0.10)"}];
      items.forEach(it=>{
        ctx!.beginPath(); ctx!.ellipse(it.dx,0,it.r,it.r*0.35,0,0,Math.PI*2);
        ctx!.fillStyle = it.c; ctx!.fill();
      });
      ctx!.restore();

      // Draw flames
      particles.filter(p=>p.type==="flame").forEach(p=>{
        p.x += p.vx + Math.sin(t*4+p.life*0.12)*0.8;
        p.y += p.vy; p.vx *= 0.985; p.life++;
        if (p.life > p.maxLife) return;
        const prog = p.life/p.maxLife;
        const a = (1-prog)*0.9; const sz = p.size*(1-prog*0.55);
        // White-yellow core
        const c1 = ctx!.createRadialGradient(p.x,p.y,0,p.x,p.y,sz*0.35);
        c1.addColorStop(0,`rgba(255,255,230,${a*0.95})`); c1.addColorStop(1,"rgba(255,255,200,0)");
        ctx!.fillStyle=c1; ctx!.beginPath(); ctx!.arc(p.x,p.y,sz*0.35,0,Math.PI*2); ctx!.fill();
        // Orange mid
        const c2 = ctx!.createRadialGradient(p.x,p.y,0,p.x,p.y,sz);
        c2.addColorStop(0,`rgba(255,150,20,${a*0.85})`); c2.addColorStop(0.5,`rgba(220,65,5,${a*0.55})`); c2.addColorStop(1,"rgba(180,15,0,0)");
        ctx!.fillStyle=c2; ctx!.beginPath(); ctx!.arc(p.x,p.y,sz,0,Math.PI*2); ctx!.fill();
        // Deep outer
        const c3 = ctx!.createRadialGradient(p.x,p.y,0,p.x,p.y,sz*1.8);
        c3.addColorStop(0,`rgba(200,50,0,${a*0.28})`); c3.addColorStop(1,"rgba(0,0,0,0)");
        ctx!.fillStyle=c3; ctx!.beginPath(); ctx!.arc(p.x,p.y,sz*1.8,0,Math.PI*2); ctx!.fill();
      });

      // Embers
      particles.filter(p=>p.type==="ember").forEach(p=>{
        p.x+=p.vx; p.y+=p.vy; p.vy+=0.1; p.vx+=(Math.random()-0.5)*0.25; p.life++;
        if(p.life>p.maxLife) return;
        const prog=p.life/p.maxLife; const a=(1-prog)*0.95;
        ctx!.beginPath(); ctx!.arc(p.x,p.y,1.8*(1-prog*0.5),0,Math.PI*2);
        ctx!.fillStyle=`rgba(255,${Math.floor(210-prog*160)},20,${a})`; ctx!.fill();
        const eg=ctx!.createRadialGradient(p.x,p.y,0,p.x,p.y,6);
        eg.addColorStop(0,`rgba(255,170,0,${a*0.4})`); eg.addColorStop(1,"rgba(0,0,0,0)");
        ctx!.fillStyle=eg; ctx!.beginPath(); ctx!.arc(p.x,p.y,6,0,Math.PI*2); ctx!.fill();
      });

      // Clean up dead particles
      for(let i=particles.length-1;i>=0;i--){ if(particles[i].life>=particles[i].maxLife) particles.splice(i,1); }

      // Diya flames
      diyas.forEach((d,di)=>{
        const dx=d.x*W, dy=d.y*H;
        const pulse=0.72+0.28*Math.sin(t*3.5+di*1.4);
        const flicker=0.8+0.2*Math.sin(t*9+di*2.8);
        // Glow pool
        const dg=ctx!.createRadialGradient(dx,dy,0,dx,dy,W*0.075*pulse);
        dg.addColorStop(0,`rgba(255,170,35,${0.20*pulse*flicker})`);
        dg.addColorStop(0.4,`rgba(210,80,10,${0.09*pulse})`);
        dg.addColorStop(1,"rgba(0,0,0,0)");
        ctx!.fillStyle=dg; ctx!.fillRect(0,0,W,H);
        // Flame shape
        const fh=H*0.025*pulse*flicker;
        const ff=ctx!.createRadialGradient(dx,dy-fh*0.5,0,dx,dy-fh*0.5,fh*1.4);
        ff.addColorStop(0,`rgba(255,250,200,${0.95*flicker})`);
        ff.addColorStop(0.3,`rgba(255,170,35,${0.75*flicker})`);
        ff.addColorStop(0.65,`rgba(220,70,5,${0.35*flicker})`);
        ff.addColorStop(1,"rgba(0,0,0,0)");
        ctx!.fillStyle=ff;
        ctx!.beginPath(); ctx!.ellipse(dx,dy-fh*0.4,fh*0.45,fh*1.2,Math.sin(t*2.5+di)*0.18,0,Math.PI*2); ctx!.fill();
      });

      // Mandala rings
      ctx!.save(); ctx!.translate(W*0.5,H*0.5);
      for(let r=0;r<5;r++){
        const radius=W*(0.12+r*0.10)+Math.sin(t*0.25+r)*W*0.008;
        const a=(0.022-r*0.004)*(0.5+0.5*Math.sin(t*0.35+r));
        ctx!.strokeStyle=`rgba(184,146,42,${a})`; ctx!.lineWidth=0.6;
        ctx!.beginPath(); ctx!.arc(0,0,radius,0,Math.PI*2); ctx!.stroke();
        const dots=6+r*4;
        for(let d=0;d<dots;d++){
          const angle=(d/dots)*Math.PI*2+t*0.08*(r%2===0?1:-1);
          ctx!.beginPath(); ctx!.arc(Math.cos(angle)*radius,Math.sin(angle)*radius,1.2,0,Math.PI*2);
          ctx!.fillStyle=`rgba(212,168,67,${a*2.5})`; ctx!.fill();
        }
      }
      ctx!.restore();

      animRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize",resize); };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p+1)%TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <Navbar/>
      <main>

        {/* ══ HERO ══ */}
        <section style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden", background:"#080608" }}>
          {/* Canvas — full background havan animation */}
          <canvas ref={canvasRef} style={{ position:"absolute", inset:0, zIndex:1, width:"100%", height:"100%" }}/>
          {/* Left vignette so text is readable */}
          <div style={{ position:"absolute", inset:0, zIndex:2, background:"linear-gradient(to right, rgba(8,6,8,0.92) 0%, rgba(8,6,8,0.75) 45%, rgba(8,6,8,0.15) 100%)" }}/>
          {/* Bottom fade */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:200, zIndex:3, background:"linear-gradient(to top,rgba(8,6,8,1),transparent)" }}/>

          {/* Two-column layout */}
          <div style={{ position:"relative", zIndex:4, maxWidth:1200, margin:"0 auto", padding:"clamp(100px,14vw,160px) 40px 80px", width:"100%", display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center" }} className="hero-grid">

            {/* LEFT — text */}
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(184,146,42,0.1)", border:"1px solid rgba(184,146,42,0.22)", borderRadius:100, padding:"7px 18px", marginBottom:28 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:C.goldBright, display:"inline-block", boxShadow:`0 0 10px ${C.goldBright}` }}/>
                <span style={{ fontSize:11, fontWeight:500, color:C.goldBright, letterSpacing:0.8 }}>Chandigarh · 2,400+ families preserving traditions</span>
              </div>
              <h1 style={{ fontFamily:F.display, fontSize:"clamp(42px,5.5vw,80px)", fontWeight:600, color:"#fff", lineHeight:1.08, marginBottom:22, letterSpacing:"-1.5px" }}>
                Where family<br/>
                <em style={{ fontStyle:"italic", background:"linear-gradient(135deg,#D4A843,#C8541A)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  traditions live on
                </em>
              </h1>
              {/* SEO subheading — keyword-rich, visually styled as body text */}
              <p style={{ fontSize:"clamp(14px,1.6vw,18px)", color:"rgba(255,255,255,0.52)", maxWidth:480, lineHeight:1.9, marginBottom:40 }}>
                The digital home for South Asian families — document ceremonies, preserve traditions, and pass the wisdom of your elders to every generation. Hindu, Sikh, Muslim, Christian, Jain or Buddhist.
              </p>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:48 }}>
                <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", padding:"14px 32px", borderRadius:14, fontSize:15, fontWeight:700, textDecoration:"none", boxShadow:"0 8px 40px rgba(200,84,26,0.45)" }}>
                  Start for Free →
                </Link>
                <Link href="/auth/login" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.82)", padding:"14px 26px", borderRadius:14, fontSize:15, fontWeight:500, textDecoration:"none" }}>
                  Sign In →
                </Link>
              </div>
              <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
                {[["🔒","Private & secure"],["🇮🇳","Made in India"],["✨","AI powered"],["📱","Mobile ready"]].map(([icon,text]) => (
                  <div key={text as string} style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, color:"rgba(255,255,255,0.32)" }}>
                    <span>{icon}</span>{text}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Havan Kund visual box */}
            <div className="hero-right" style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:20 }}>
              {/* Glass card surrounding the havan kund */}
              <div style={{ width:"100%", maxWidth:380, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(184,146,42,0.18)", borderRadius:24, padding:"28px 24px", backdropFilter:"blur(12px)", textAlign:"center", position:"relative", overflow:"hidden" }}>
                {/* Top glow */}
                <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(184,146,42,0.5),transparent)" }}/>
                {/* Label */}
                <p style={{ fontSize:10, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:"rgba(184,146,42,0.6)", marginBottom:16 }}>Sacred Havan · हवन कुंड</p>
                {/* Havan kund illustration area — canvas renders behind this */}
                <div style={{ width:200, height:200, margin:"0 auto", position:"relative" }}>
                  {/* Kund base */}
                  <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", width:160, height:32, background:"rgba(120,60,20,0.5)", borderRadius:"50%", filter:"blur(4px)" }}/>
                  <div style={{ position:"absolute", bottom:8, left:"50%", transform:"translateX(-50%)", width:130, height:60, background:"linear-gradient(to top,rgba(100,50,15,0.6),rgba(80,35,8,0.3))", borderRadius:"8px 8px 16px 16px", border:"1px solid rgba(180,100,30,0.3)" }}/>
                  {/* Fire glow emanating from kund — CSS animated */}
                  <div style={{ position:"absolute", bottom:50, left:"50%", transform:"translateX(-50%)", width:80, height:80 }}>
                    <div className="fire-core" style={{ width:"100%", height:"100%", borderRadius:"50% 50% 50% 50% / 60% 60% 40% 40%", background:"radial-gradient(ellipse,rgba(255,200,50,0.7) 0%,rgba(220,80,10,0.4) 40%,transparent 70%)", filter:"blur(6px)" }}/>
                  </div>
                  <div style={{ position:"absolute", bottom:60, left:"50%", transform:"translateX(-50%)", width:50, height:70 }}>
                    <div className="fire-mid" style={{ width:"100%", height:"100%", borderRadius:"50% 50% 50% 50% / 60% 60% 40% 40%", background:"radial-gradient(ellipse,rgba(255,230,120,0.85) 0%,rgba(255,140,20,0.5) 45%,transparent 70%)", filter:"blur(3px)" }}/>
                  </div>
                  <div style={{ position:"absolute", bottom:80, left:"50%", transform:"translateX(-50%)", width:24, height:48 }}>
                    <div className="fire-tip" style={{ width:"100%", height:"100%", borderRadius:"50% 50% 50% 50% / 60% 60% 40% 40%", background:"radial-gradient(ellipse,rgba(255,255,220,0.95) 0%,rgba(255,200,60,0.6) 50%,transparent 80%)", filter:"blur(2px)" }}/>
                  </div>
                  {/* Samagri items around kund */}
                  <div style={{ position:"absolute", bottom:4, left:10, width:28, height:18, background:"rgba(180,140,60,0.35)", borderRadius:4, border:"1px solid rgba(200,160,80,0.25)" }}/>
                  <div style={{ position:"absolute", bottom:4, right:10, width:22, height:22, background:"rgba(160,120,50,0.3)", borderRadius:"50%", border:"1px solid rgba(190,150,70,0.2)" }}/>
                  <div style={{ position:"absolute", bottom:6, left:48, width:16, height:12, background:"rgba(200,80,20,0.4)", borderRadius:3 }}/>
                  {/* Smoke wisps */}
                  <div className="smoke-1" style={{ position:"absolute", bottom:130, left:"45%", width:4, height:40, background:"linear-gradient(to top,rgba(180,160,140,0.3),transparent)", borderRadius:4, filter:"blur(3px)" }}/>
                  <div className="smoke-2" style={{ position:"absolute", bottom:130, left:"55%", width:3, height:30, background:"linear-gradient(to top,rgba(180,160,140,0.2),transparent)", borderRadius:4, filter:"blur(3px)" }}/>
                </div>
                {/* Stats row */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginTop:24, borderTop:"1px solid rgba(184,146,42,0.1)", paddingTop:18 }}>
                  {[["14K+","Rituals"],["2.4K+","Families"],["23+","Samskaras"]].map(([val,lbl]) => (
                    <div key={lbl} style={{ textAlign:"center" }}>
                      <p style={{ fontFamily:F.display, fontSize:18, fontWeight:700, color:"rgba(212,168,67,0.9)", margin:0 }}>{val}</p>
                      <p style={{ fontSize:10, color:"rgba(255,255,255,0.35)", margin:0, marginTop:2 }}>{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Feature pills */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:8, justifyContent:"center" }}>
                {["Ritual Vault","AI Guide","Festival Calendar","Family Tree","Memory Vault"].map(feat => (
                  <span key={feat} style={{ fontSize:11, fontWeight:500, color:"rgba(255,255,255,0.45)", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:20, padding:"5px 12px" }}>{feat}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{ position:"absolute", bottom:28, left:"50%", transform:"translateX(-50%)", zIndex:5, display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
            <div style={{ width:1, height:40, background:"linear-gradient(to bottom,rgba(184,146,42,0.7),transparent)" }}/>
            <div style={{ width:5, height:5, borderRadius:"50%", background:"rgba(184,146,42,0.5)" }}/>
          </div>

          <style>{`
            @keyframes firePulse { 0%,100%{transform:translateX(-50%) scaleX(1) scaleY(1);opacity:0.85} 50%{transform:translateX(-50%) scaleX(1.08) scaleY(1.12);opacity:1} }
            @keyframes fireMid { 0%,100%{transform:translateX(-50%) scaleX(1) scaleY(1) translateY(0);opacity:0.9} 33%{transform:translateX(-52%) scaleX(0.92) scaleY(1.1) translateY(-3px);opacity:1} 66%{transform:translateX(-48%) scaleX(1.08) scaleY(0.95) translateY(-1px);opacity:0.85} }
            @keyframes fireTip { 0%,100%{transform:translateX(-50%) scaleY(1) translateY(0);opacity:0.95} 50%{transform:translateX(-50%) scaleY(1.15) translateY(-4px);opacity:0.8} }
            @keyframes smokeRise { 0%{transform:translateY(0) translateX(0) scaleX(1);opacity:0.4} 50%{transform:translateY(-20px) translateX(4px) scaleX(1.4);opacity:0.2} 100%{transform:translateY(-40px) translateX(-2px) scaleX(1.8);opacity:0} }
            .fire-core { animation: firePulse 3.5s ease-in-out infinite; transform-origin: 50% 100%; }
            .fire-mid  { animation: fireMid  2.8s ease-in-out infinite; transform-origin: 50% 100%; }
            .fire-tip  { animation: fireTip  2.2s ease-in-out infinite; transform-origin: 50% 100%; }
            .smoke-1   { animation: smokeRise 4s ease-out infinite; }
            .smoke-2   { animation: smokeRise 4s ease-out 1.5s infinite; }
            @media(max-width:768px) { .hero-right { display:none!important; } }
          `}</style>
        </section>

        {/* ══ STATS ══ */}
        <section style={{ background:`linear-gradient(135deg,${C.saffron} 0%,#9A3E10 100%)`, padding:"36px 24px" }}>
          <div style={{ maxWidth:900, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:24, textAlign:"center" }}>
            {STATS.map(({value,label}) => (
              <div key={label}>
                <p style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,40px)", fontWeight:700, color:"#fff", lineHeight:1, marginBottom:5 }}>{value}</p>
                <p style={{ fontSize:12, color:"rgba(255,255,255,0.65)", letterSpacing:0.5 }}>{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FESTIVAL TOOLS ══ */}
        <section style={{ padding:"clamp(50px,8vw,90px) 24px", background:C.cream }}>
          <div style={{ maxWidth:1140, margin:"0 auto 40px", textAlign:"center" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:7, marginBottom:10 }}>
              <span style={{ position:"relative", display:"inline-flex", width:6, height:6 }}>
                <span style={{ position:"absolute", inset:0, borderRadius:"50%", background:C.saffron, opacity:0.5, animation:"ppHomeLivePulse 1.8s ease-out infinite" }}/>
                <span style={{ position:"absolute", inset:0, borderRadius:"50%", background:C.saffron }}/>
              </span>
              <p style={{ fontSize:13, fontWeight:700, color:C.saffron, letterSpacing:1.5, textTransform:"uppercase", margin:0 }}>Free Tools · Updated Live</p>
            </div>
            <style>{`@keyframes ppHomeLivePulse { 0%{transform:scale(1);opacity:0.5;} 70%{transform:scale(2.8);opacity:0;} 100%{opacity:0;} }`}</style>
            <h2 style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,40px)", fontWeight:600, color:C.charcoal, marginBottom:12 }}>Plan your celebrations</h2>
            <p style={{ fontSize:15, color:C.gray, maxWidth:520, margin:"0 auto" }}>Track upcoming festivals and find auspicious dates — no signup required.</p>
          </div>
          <FestivalTools/>

          <div style={{ maxWidth:1140, margin:"56px auto 32px", textAlign:"center" }}>
            <h3 style={{ fontFamily:F.display, fontSize:"clamp(22px,3vw,30px)", fontWeight:600, color:C.charcoal, marginBottom:10 }}>Naming a new arrival?</h3>
            <p style={{ fontSize:14, color:C.gray, maxWidth:480, margin:"0 auto" }}>Find names rooted in tradition, organized by Rashi.</p>
          </div>
          <BabyNameFinder/>
        </section>

        {/* ══ STORY ══ */}
        <section style={{ padding:"clamp(60px,10vw,120px) 24px", background:C.ivory, overflow:"hidden" }}>
          <div style={{ maxWidth:1140, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:64, alignItems:"center" }}>

            {/* Image stack */}
            <div style={{ position:"relative", minHeight:500 }}>
              {/* Large image: happy Indian family */}
              <div style={{ borderRadius:24, overflow:"hidden", width:"82%", aspectRatio:"3/4", position:"relative" }}>
                <img src={IMGS.diya} alt="Happy Indian family together" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }}
                  onError={e=>{(e.target as HTMLImageElement).src=IMGS.flowers;}}/>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(200,84,26,0.2),transparent 55%)" }}/>
              </div>
              {/* Small image: Granth / holy scripture */}
              <div style={{ position:"absolute", bottom:-20, right:0, width:"50%", aspectRatio:"1/1", borderRadius:20, overflow:"hidden", border:"4px solid #fff", boxShadow:"0 20px 60px rgba(0,0,0,0.18)" }}>
                <img src={IMGS.flowers} alt="Sacred Granth — holy scripture" style={{ width:"100%", height:"100%", objectFit:"cover" }}
                  onError={e=>{(e.target as HTMLImageElement).src=IMGS.diya;}}/>
                <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.15)" }}/>
                <div style={{ position:"absolute", bottom:10, left:10, right:10, textAlign:"center" }}>
                  <p style={{ fontSize:10, fontWeight:600, color:"rgba(255,255,255,0.9)", letterSpacing:1 }}>SACRED SCRIPTURE</p>
                </div>
              </div>
              {/* Year card */}
              <div style={{ position:"absolute", top:24, right:0, background:"linear-gradient(135deg,#C8541A,#B8922A)", borderRadius:16, padding:"16px 22px", color:"#fff", boxShadow:"0 12px 32px rgba(200,84,26,0.35)" }}>
                <p style={{ fontFamily:F.display, fontSize:32, fontWeight:700, lineHeight:1 }}>2016</p>
                <p style={{ fontSize:11, opacity:0.8, marginTop:3 }}>When it began</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:C.saffron, marginBottom:16 }}>Our Story</p>
              <h2 style={{ fontFamily:F.display, fontSize:"clamp(32px,4vw,52px)", fontWeight:600, color:C.charcoal, lineHeight:1.12, marginBottom:24, letterSpacing:"-0.5px" }}>
                Born in Chandigarh,<br/><em style={{ fontStyle:"italic", color:C.gold }}>from personal loss</em>
              </h2>
              <p style={{ fontSize:16, color:C.gray, lineHeight:1.9, marginBottom:18 }}>
                In 2016, our founder&apos;s Dadi passed away in Chandigarh. She had spent a lifetime performing every ceremony, every tradition, every ritual — perfectly. When she was gone, so was that irreplaceable knowledge.
              </p>
              <p style={{ fontSize:16, color:C.gray, lineHeight:1.9, marginBottom:32 }}>
                At the first family ceremony after, no one could agree on a single step. <strong style={{ color:C.charcoal }}>Parampara was born so no family ever faces that loss again.</strong>
              </p>
              <Link href="/about" style={{ display:"inline-flex", alignItems:"center", gap:8, fontSize:14, fontWeight:600, color:C.saffron, textDecoration:"none", borderBottom:`1.5px solid ${C.saffron}`, paddingBottom:2 }}>
                Read the full story →
              </Link>
            </div>
          </div>
        </section>

        {/* ══ FEATURES ══ */}
        <section style={{ padding:"clamp(60px,10vw,120px) 24px", background:C.cream }}>
          <div style={{ maxWidth:1140, margin:"0 auto" }}>
            {/* Two-column: features left, family image right */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 420px", gap:72, alignItems:"center", marginBottom:64 }} className="features-grid">
              <div>
                <p style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:C.saffron, marginBottom:14 }}>What&apos;s Inside</p>
                <h2 style={{ fontFamily:F.display, fontSize:"clamp(32px,4vw,54px)", fontWeight:600, color:C.charcoal, lineHeight:1.1, letterSpacing:"-0.5px", marginBottom:20 }}>
                  Everything your<br/>family needs
                </h2>
                <p style={{ fontSize:16, color:C.gray, lineHeight:1.8, marginBottom:32, maxWidth:480 }}>
                  From the first ceremony to the last blessing — every tradition, every memory, every story — preserved together and shared with everyone you love.
                </p>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                  <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:6, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"12px 28px", borderRadius:12, fontSize:14, fontWeight:600, textDecoration:"none" }}>Start Free →</Link>
                  <Link href="/what-we-do" style={{ display:"inline-flex", alignItems:"center", gap:6, background:C.white, border:`1px solid ${C.border}`, color:C.charcoal, padding:"12px 24px", borderRadius:12, fontSize:14, fontWeight:500, textDecoration:"none" }}>See all features</Link>
                </div>
              </div>
              {/* Happy family image */}
              <div style={{ borderRadius:28, overflow:"hidden", aspectRatio:"4/5", position:"relative", boxShadow:"0 32px 80px rgba(0,0,0,0.12)" }}>
                <img src={IMGS.temple} alt="Happy Indian family celebrating traditions together" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }}
                  onError={e=>{ (e.target as HTMLImageElement).src=IMGS.flowers; }}/>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(200,84,26,0.15),transparent 60%)" }}/>
                <div style={{ position:"absolute", bottom:20, left:20, right:20, background:"rgba(255,255,255,0.12)", backdropFilter:"blur(12px)", borderRadius:14, padding:"14px 16px", border:"1px solid rgba(255,255,255,0.2)" }}>
                  <p style={{ fontSize:14, fontWeight:600, color:"#fff", margin:0 }}>Every family has a story</p>
                  <p style={{ fontSize:12, color:"rgba(255,255,255,0.75)", margin:"3px 0 0" }}>Parampara helps you preserve it</p>
                </div>
              </div>
            </div>

            {/* Feature cards */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:18 }}>
              {FEATURES.map(({icon,title,desc},i) => (
                <div key={title} style={{ background:C.white, borderRadius:20, padding:"24px 24px", border:`1px solid ${C.border}`, position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:i%3===0?`linear-gradient(90deg,${C.saffron},#E8894A)`:i%3===1?`linear-gradient(90deg,${C.gold},#D4A843)`:`linear-gradient(90deg,${C.forest},#2D7A5A)` }}/>
                  <div style={{ width:48, height:48, borderRadius:14, background:i%3===0?C.saffronLight:i%3===1?C.goldLight:C.forestLight, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, marginBottom:16 }}>{icon}</div>
                  <h3 style={{ fontFamily:F.serif, fontSize:17, fontWeight:600, color:C.charcoal, marginBottom:8 }}>{title}</h3>
                  <p style={{ fontSize:13, color:C.gray, lineHeight:1.75 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.features-grid{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* ══ VISUAL GALLERY ══ */}
        <section style={{ padding:"clamp(60px,10vw,120px) 24px", background:C.ivory }}>
          <div style={{ maxWidth:1140, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:56 }}>
              <p style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:C.saffron, marginBottom:14 }}>Sacred Traditions</p>
              <h2 style={{ fontFamily:F.display, fontSize:"clamp(30px,4vw,52px)", fontWeight:600, color:C.charcoal, lineHeight:1.12, letterSpacing:"-0.5px" }}>
                Every ritual has a story
              </h2>
            </div>
            {/* Gallery grid */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gridTemplateRows:"240px 240px", gap:14 }}>
              {[
                { card:GALLERY_CARDS[0], col:"1/2", row:"1/3" },
                { card:GALLERY_CARDS[1], col:"2/3", row:"1/2" },
                { card:GALLERY_CARDS[2], col:"3/4", row:"1/2" },
                { card:GALLERY_CARDS[3], col:"2/3", row:"2/3" },
                { card:GALLERY_CARDS[4], col:"3/4", row:"2/3" },
              ].map(({card,col,row}) => (
                <GalleryCard key={card.key} card={card} col={col} row={row}/>
              ))}
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ══ */}
        <section style={{ padding:"clamp(60px,10vw,120px) 24px", background:C.dark, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 30% 60%,rgba(200,84,26,0.07),transparent 60%),radial-gradient(ellipse at 70% 40%,rgba(184,146,42,0.05),transparent 60%)", pointerEvents:"none" }}/>
          <div style={{ maxWidth:1000, margin:"0 auto", position:"relative" }}>
            <div style={{ textAlign:"center", marginBottom:72 }}>
              <p style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:C.gold, marginBottom:14 }}>How It Works</p>
              <h2 style={{ fontFamily:F.display, fontSize:"clamp(30px,4vw,52px)", fontWeight:600, color:"#fff", lineHeight:1.12, letterSpacing:"-0.5px" }}>
                Start in 2 minutes
              </h2>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:40, position:"relative" }}>
              {[
                ["01","Create Space","Sign up and name your family. Your private heritage vault is ready instantly."],
                ["02","Invite Family","Share a link. Assign roles — Elder, Parent, Contributor — to the right people."],
                ["03","Document","Add rituals, steps, samagri, mantras, photos and voice memos together."],
                ["04","Preserve Forever","Your complete heritage lives on, accessible to every generation."],
              ].map(([num,title,desc]) => (
                <div key={num} style={{ textAlign:"center" }}>
                  <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(200,84,26,0.1)", border:"1px solid rgba(200,84,26,0.22)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontFamily:F.display, fontSize:20, fontWeight:700, color:C.saffronMid }}>{num}</div>
                  <h3 style={{ fontFamily:F.serif, fontSize:17, fontWeight:600, color:"#fff", marginBottom:10 }}>{title}</h3>
                  <p style={{ fontSize:13, color:"rgba(255,255,255,0.42)", lineHeight:1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PRICING ══ */}
        <section id="pricing" style={{ padding:"clamp(60px,10vw,120px) 24px", background:C.cream }}>
          <div style={{ maxWidth:1000, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:64 }}>
              <p style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:C.saffron, marginBottom:14 }}>Pricing</p>
              <h2 style={{ fontFamily:F.display, fontSize:"clamp(30px,4vw,52px)", fontWeight:600, color:C.charcoal, lineHeight:1.12, letterSpacing:"-0.5px", marginBottom:12 }}>
                Simple, honest pricing
              </h2>
              <p style={{ fontSize:15, color:C.gray }}>Start free. No credit card required.</p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20, alignItems:"start" }}>
              {/* Free */}
              <div style={{ background:C.white, borderRadius:24, border:`1px solid ${C.border}`, padding:36 }}>
                <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:C.gray, marginBottom:12 }}>Free</p>
                <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:6 }}>
                  <span style={{ fontFamily:F.display, fontSize:48, fontWeight:700, color:C.charcoal }}>₹0</span>
                  <span style={{ fontSize:14, color:C.gray }}>/mo</span>
                </div>
                <p style={{ fontSize:13, color:C.gray, marginBottom:28 }}>Perfect to get started</p>
                {[
                  "2 family spaces",
                  "Unlimited family members",
                  "5 ritual entries",
                  "Festival calendar",
                  "Family calendar",
                  "Family Mannats tracker",
                  "5 AI queries / month",
                  "500MB memory vault",
                ].map(f=>(
                  <div key={f} style={{ display:"flex", gap:10, padding:"9px 0", borderBottom:`1px solid ${C.border}`, fontSize:13, color:C.charcoal }}>
                    <span style={{ color:C.forest, fontWeight:700 }}>✓</span>{f}
                  </div>
                ))}
                <Link href="/auth/signup" style={{ display:"block", textAlign:"center", marginTop:24, padding:"12px", border:`1.5px solid ${C.saffron}`, borderRadius:12, fontSize:14, fontWeight:600, color:C.saffron, textDecoration:"none" }}>
                  Start for free
                </Link>
              </div>

              {/* Pro */}
              <div style={{ background:C.charcoal, borderRadius:24, padding:"40px 36px", position:"relative", boxShadow:"0 32px 80px rgba(0,0,0,0.2)" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:3, borderRadius:"24px 24px 0 0", background:"linear-gradient(90deg,#C8541A,#B8922A,#C8541A)" }}/>
                <div style={{ position:"absolute", top:20, right:20, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", fontSize:10, fontWeight:700, letterSpacing:1, padding:"4px 12px", borderRadius:20, textTransform:"uppercase" }}>Popular</div>
                <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:12 }}>Pro</p>
                <HomepagePrice/>
                <p style={{ fontSize:13, color:"rgba(255,255,255,0.4)", marginBottom:28 }}>Complete heritage platform</p>
                {[
                  "Everything in Free",
                  "Unlimited family spaces",
                  "Unlimited rituals",
                  "AI Ritual Assistant (unlimited)",
                  "Heritage Book PDF export",
                  "Elder Voice Archive",
                  "Cross-device sync",
                  "10GB memory vault",
                  "WhatsApp reminders",
                  "Priority support",
                ].map(f=>(
                  <div key={f} style={{ display:"flex", gap:10, padding:"9px 0", borderBottom:"1px solid rgba(255,255,255,0.06)", fontSize:13, color:"rgba(255,255,255,0.75)" }}>
                    <span style={{ color:C.saffronMid, fontWeight:700 }}>✓</span>{f}
                  </div>
                ))}
                <Link href="/upgrade" style={{ display:"block", textAlign:"center", marginTop:24, padding:"14px", background:"linear-gradient(135deg,#C8541A,#B8922A)", borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none", boxShadow:"0 8px 24px rgba(200,84,26,0.35)" }}>
                  Start Pro
                </Link>
              </div>

              {/* Custom */}
              <div style={{ background:C.white, borderRadius:24, border:`1px solid ${C.border}`, padding:36 }}>
                <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:C.gray, marginBottom:12 }}>Custom</p>
                <p style={{ fontFamily:F.display, fontSize:36, fontWeight:700, color:C.charcoal, lineHeight:1, marginBottom:6 }}>Let&apos;s talk</p>
                <p style={{ fontSize:13, color:C.gray, marginBottom:28 }}>Temples, orgs &amp; large families</p>
                {[
                  "Everything in Pro",
                  "50+ family members",
                  "Custom branding",
                  "API access",
                  "Dedicated support",
                ].map(f=>(
                  <div key={f} style={{ display:"flex", gap:10, padding:"9px 0", borderBottom:`1px solid ${C.border}`, fontSize:13, color:C.charcoal }}>
                    <span style={{ color:C.gold, fontWeight:700 }}>✓</span>{f}
                  </div>
                ))}
                <a href="mailto:ourparamparaofficial@gmail.com" style={{ display:"block", textAlign:"center", marginTop:24, padding:"12px", border:`1.5px solid ${C.gold}`, borderRadius:12, fontSize:14, fontWeight:600, color:C.gold, textDecoration:"none" }}>
                  Contact us →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section id="testimonials" style={{ padding:"clamp(60px,10vw,120px) 24px", background:C.ivory }}>
          <div style={{ maxWidth:900, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:C.saffron, marginBottom:14 }}>Testimonials</p>
            <h2 style={{ fontFamily:F.display, fontSize:"clamp(30px,4vw,52px)", fontWeight:600, color:C.charcoal, lineHeight:1.12, marginBottom:56, letterSpacing:"-0.5px" }}>
              Families love Parampara
            </h2>
            <div style={{ background:C.charcoal, borderRadius:24, padding:"clamp(32px,5vw,56px)", position:"relative", overflow:"hidden", marginBottom:28 }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,#B8922A,transparent)" }}/>
              <p style={{ fontFamily:F.display, fontSize:52, color:C.gold, lineHeight:0.8, marginBottom:20 }}>❝</p>
              <p style={{ fontFamily:F.display, fontSize:"clamp(17px,2.5vw,26px)", color:"#fff", lineHeight:1.65, fontStyle:"italic", maxWidth:660, margin:"0 auto 32px" }}>
                {TESTIMONIALS[activeTestimonial].text}
              </p>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
                <div style={{ width:52, height:52, borderRadius:"50%", flexShrink:0, border:"2px solid rgba(184,146,42,0.4)", background:"linear-gradient(135deg,#C8541A,#B8922A)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontSize:16, fontWeight:700, color:"#fff" }}>{TESTIMONIALS[activeTestimonial].initials}</span>
                </div>
                <div style={{ textAlign:"left" }}>
                  <p style={{ fontSize:14, fontWeight:600, color:"#fff", margin:0 }}>{TESTIMONIALS[activeTestimonial].name}</p>
                  <p style={{ fontSize:12, color:"rgba(255,255,255,0.4)", margin:0 }}>{TESTIMONIALS[activeTestimonial].role}</p>
                </div>
              </div>
              <div style={{ display:"flex", gap:8, justifyContent:"center", marginTop:28 }}>
                {TESTIMONIALS.map((_,i) => (
                  <button key={i} onClick={()=>setActiveTestimonial(i)}
                    style={{ width:i===activeTestimonial?24:8, height:8, borderRadius:4, border:"none", background:i===activeTestimonial?C.saffron:"rgba(255,255,255,0.18)", cursor:"pointer", transition:"all 0.3s" }}/>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section id="faq" style={{ padding:"clamp(60px,10vw,120px) 24px", background:C.cream }}>
          <div style={{ maxWidth:720, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:56 }}>
              <p style={{ fontSize:11, fontWeight:700, letterSpacing:2.5, textTransform:"uppercase", color:C.saffron, marginBottom:14 }}>FAQ</p>
              <h2 style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:C.charcoal, letterSpacing:"-0.5px" }}>Questions &amp; answers</h2>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {FAQS.map(({q,a},i) => (
                <div key={i} style={{ background:C.white, borderRadius:16, border:`1px solid ${activeFAQ===i?C.saffron:C.border}`, overflow:"hidden", transition:"border-color 0.2s" }}>
                  <button onClick={()=>setActiveFAQ(activeFAQ===i?null:i)}
                    style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"18px 22px", background:"none", border:"none", cursor:"pointer", textAlign:"left", gap:16 }}>
                    <span style={{ fontSize:14, fontWeight:600, color:C.charcoal }}>{q}</span>
                    <span style={{ fontSize:20, color:activeFAQ===i?C.saffron:C.gray, transition:"transform 0.2s", transform:activeFAQ===i?"rotate(45deg)":"none", flexShrink:0, lineHeight:1 }}>+</span>
                  </button>
                  {activeFAQ===i && (
                    <div style={{ padding:"0 22px 18px", borderTop:`1px solid ${C.border}`, paddingTop:16 }}>
                      <p style={{ fontSize:14, color:C.gray, lineHeight:1.8 }}>{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ POPULAR GUIDES ══ */}
        <section style={{ padding:"clamp(50px,8vw,90px) 24px", background:C.ivory }}>
          <div style={{ maxWidth:1140, margin:"0 auto" }}>
            <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:36, flexWrap:"wrap", gap:12 }}>
              <div>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, letterSpacing:1.5, textTransform:"uppercase", marginBottom:8 }}>Free Guides</p>
                <h2 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,38px)", fontWeight:600, color:C.charcoal, margin:0 }}>Learn the traditions</h2>
              </div>
              <Link href="/blog" style={{ fontSize:14, fontWeight:700, color:C.saffron, textDecoration:"none", whiteSpace:"nowrap" }}>
                See all {BLOG_POSTS.length} guides →
              </Link>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:20 }}>
              {[
                "diwali-puja-steps-for-family",
                "indian-wedding-rituals-step-by-step",
                "how-to-celebrate-diwali-abroad-nri-guide",
                "raising-indian-kids-abroad-cultural-identity-guide",
                "how-to-perform-puja-at-home-without-priest-abroad",
                "connecting-with-grandparents-in-india-from-abroad",
              ].map(slug => {
                const post = BLOG_POSTS.find(p => p.slug === slug);
                if (!post) return null;
                return (
                  <Link key={slug} href={`/blog/${slug}`} style={{ textDecoration:"none", display:"block", background:C.white, border:`1px solid ${C.border}`, borderRadius:14, padding:"20px 22px", transition:"box-shadow 0.15s" }}>
                    <p style={{ fontSize:26, margin:"0 0 10px" }}>{post.emoji}</p>
                    <p style={{ fontSize:11, fontWeight:700, color:C.saffron, textTransform:"uppercase", letterSpacing:0.8, margin:"0 0 6px" }}>{post.category}</p>
                    <p style={{ fontSize:15, fontWeight:600, color:C.charcoal, lineHeight:1.4, margin:"0 0 8px" }}>{post.title}</p>
                    <p style={{ fontSize:12, color:C.gray, margin:0, lineHeight:1.5 }}>{post.description.slice(0, 90)}…</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section style={{ padding:"clamp(80px,12vw,140px) 24px", background:C.dark, textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 50%,rgba(200,84,26,0.12),transparent 65%)", pointerEvents:"none" }}/>
          <div style={{ maxWidth:620, margin:"0 auto", position:"relative" }}>
            <p style={{ fontFamily:F.display, fontSize:52, marginBottom:16 }}>🪔</p>
            <h2 style={{ fontFamily:F.display, fontSize:"clamp(32px,5vw,64px)", fontWeight:600, color:"#fff", lineHeight:1.1, marginBottom:18, letterSpacing:"-1px" }}>
              Begin preserving<br/>
              <em style={{ fontStyle:"italic", background:"linear-gradient(135deg,#D4A843,#C8541A)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                your legacy today
              </em>
            </h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.45)", marginBottom:44, lineHeight:1.7 }}>
              Free to start · Takes 2 minutes · Your grandchildren will thank you
            </p>
            <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
              <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#C8541A,#B8922A)", color:"#fff", padding:"16px 44px", borderRadius:16, fontSize:16, fontWeight:700, textDecoration:"none", boxShadow:"0 12px 40px rgba(200,84,26,0.45)" }}>
                Create Family Space →
              </Link>
              <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.75)", padding:"16px 32px", borderRadius:16, fontSize:15, fontWeight:500, textDecoration:"none" }}>
                Talk to us
              </Link>
            </div>
            <p style={{ fontSize:11, color:"rgba(255,255,255,0.18)", marginTop:24 }}>परंपरा · Founded in Chandigarh 🇮🇳 · For every Indian family, everywhere</p>
          </div>
        </section>

      </main>
      <Footer/>
    </>
  );
}

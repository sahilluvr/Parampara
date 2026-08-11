import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mundan Ceremony — First Haircut Ritual Guide for New Parents | Parampara",
  description: "Everything about the Mundan ceremony — auspicious age, muhurat selection, samagri list, step-by-step ritual, and what to do with the cut hair.",
  keywords: "Mundan ceremony guide, Chudakarana samskara, baby first haircut Hindu, mundan muhurat, mundan samagri list, mundan age",
  openGraph: {
    title: "Mundan Ceremony — First Haircut Ritual Guide for New Parents | Parampara",
    description: "Everything about the Mundan ceremony — auspicious age, muhurat selection, samagri list, step-by-step ritual, and what to do with the cut hair.",
    url: "https://www.ourparampara.com/blog/mundan-ceremony-complete-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=mundan-ceremony-complete-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=mundan-ceremony-complete-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/mundan-ceremony-complete-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="mundan-ceremony-complete-guide"
        title="Mundan Ceremony — First Haircut Ritual Guide for New Parents | Parampara"
        description="Everything about the Mundan ceremony — auspicious age, muhurat selection, samagri list, step-by-step ritual, and what to do with the cut hair."
        date="2026-06-01"
        category="Festival Guide"
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Samskara Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>✂️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Mundan Ceremony — First Haircut Ritual Guide for New Parents</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 9, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Mundan (also called Chudakarana) is the 7th of the 16 Hindu samskaras — the sacred rites of passage. It is the ceremony of a child&apos;s first haircut, believed to remove the impurities of past lives and bless the child with a fresh, pure start.</p>

          <h2 style={h2}>When to Perform Mundan</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>Auspicious ages by tradition:</p>
            {[["1st year","7th, 9th, or 11th month — most common"],["3rd year","Most widely followed across India"],["5th year","Some communities prefer odd years only"],["7th year","Maximum age in most traditions"],["Note","Always avoid the child's birth month"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:0, minWidth:80, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Mundan Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Havan samagri","Havan kund","Ghee (250g)","Coconut","New razor/scissors","Sacred thread (mauli)","Roli, akshat","Flowers — marigold","Kalash with water","Mango leaves","Fruits","Sweets for prasad","Camphor","Incense sticks","Yellow cloth","Paan, supari"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Ritual</h2>
          {["Choose auspicious muhurat with help of a pandit or Panchang app","Bathe the child and dress in new clothes — traditionally yellow or white","Set up havan kund and perform Ganesh puja first","Sankalp — father states the child's name, gotra, and purpose of the ceremony","Apply turmeric paste to the child's head","The father (or eldest male relative) makes the first cut with a sacred razor — typically 5 symbolic cuts","The barber completes the haircut","The cut hair is mixed with turmeric and cow dung, then immersed in a river or buried under a Peepal tree","Havan is performed with mantras for the child's long life, health and intellect","Feed Brahmins or give charity as per family tradition"].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>What to Do With the Cut Hair</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Immerse in a flowing river — most auspicious","Bury under a Peepal or Banyan tree","Some families keep the first lock as a keepsake","Do NOT throw in the dustbin or drain — considered inauspicious"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Ask your Dadi or Nani how they did Mundan in your family — regional variations are significant. Some families have a specific mantra or add a step passed down for generations. Record it before it&apos;s forgotten.</p>
          </div>
        
<h2 style={h2}>Mundan at Sacred Sites</h2>
          <p style={s}>Many Hindu families travel to sacred pilgrimage sites for their child's Mundan — offering the baby's first hair to the deity as a mark of gratitude for the child's birth and a prayer for their future. Tirupati (Lord Venkateswara — the most popular site for Mundan nationally), Vaishno Devi (Mata Vaishno Devi), Vrindavan (Lord Krishna), Nasik (Trimbakeshwar), and Ujjain (Mahakaleshwar) are among the most popular Mundan sites. The hair offering represents the surrender of ego and attachment at the feet of the divine.</p>
<h2 style={h2}>The Hair Offering</h2>
          <p style={s}>The Mundan hair is carefully collected and treated as sacred — it is offered at the temple or immersed in a sacred river. The act of offering the first hair — something as intimate and personal as the baby's hair — to the divine is an act of profound trust: giving back to God the most innocent and precious thing one has received. Many families keep a small lock of the Mundan hair as a family memento.</p>
<h2 style={h2}>Mundan Abroad</h2>
          <p style={s}>NRI families perform Mundan in various ways abroad: at local Hindu temples that accommodate the ceremony; by travelling to India specifically for the Mundan (many grandparents insist on this for the first grandchild); or by performing a simplified home ceremony with a Pandit performing the puja and a barber (or family member with clippers) performing the shaving. The ceremony can be adapted to any setting while maintaining the essential elements: the Ganesh Puja, the mantras, and the offering of the hair.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your children's Mundan ceremonies — the date, the age of the child, the specific temple or location, the Pandit who performed the ceremony, the specific mantras recited. Photograph the ceremony and preserve the hair lock if kept. Many parents describe the Mundan as unexpectedly emotional — the child's transformation in appearance mirrors the ritual's deeper significance.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="mundan-ceremony-complete-guide" category="Festival Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>✂️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family&apos;s Mundan tradition</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20 }}>Save your family&apos;s specific Mundan customs, mantras, and elder notes for your children.</p>
            <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"12px 28px", borderRadius:12, fontSize:14, fontWeight:600, textDecoration:"none" }}>Save in Parampara — Free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

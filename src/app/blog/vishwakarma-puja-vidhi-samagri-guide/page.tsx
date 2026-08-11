import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vishwakarma Puja — Complete Vidhi, Samagri List & Significance | OurParampara",
  description: "Complete Vishwakarma Puja guide — date, samagri list, step-by-step vidhi for blessing tools, machinery, and workplaces, and why this festival matters for working families.",
  keywords: "Vishwakarma puja vidhi, Vishwakarma puja samagri list, Vishwakarma puja date 2026, tools puja, workplace puja Vishwakarma, Vishwakarma jayanti",
  openGraph: {
    title: "Vishwakarma Puja — Complete Vidhi, Samagri List & Significance | OurParampara",
    description: "Complete Vishwakarma Puja guide — date, samagri list, step-by-step vidhi for blessing tools, machinery, and workplaces, and why this festival matters for working families.",
    url: "https://www.ourparampara.com/blog/vishwakarma-puja-vidhi-samagri-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=vishwakarma-puja-vidhi-samagri-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=vishwakarma-puja-vidhi-samagri-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/vishwakarma-puja-vidhi-samagri-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="vishwakarma-puja-vidhi-samagri-guide"
        title="Vishwakarma Puja — Complete Vidhi, Samagri List & Significance | OurParampara"
        description="Complete Vishwakarma Puja guide — date, samagri list, step-by-step vidhi for blessing tools, machinery, and workplaces, and why this festival matters for working families."
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Festival Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🛠️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Vishwakarma Puja — Complete Vidhi, Samagri List &amp; Significance</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 17, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Vishwakarma Puja honors Lord Vishwakarma — the divine architect and craftsman of the gods, credited in Hindu mythology with building everything from Lanka to the weapons of the Devas. Celebrated primarily by artisans, engineers, factory workers, and business owners, this festival blesses the tools, machines, and workplaces that sustain a family's livelihood.</p>

          <h2 style={h2}>When is Vishwakarma Puja 2026</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 6px" }}>September 17, 2026</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Vishwakarma Puja is observed on the last day of the Bengali month of Bhadra — typically falling the day after Ganesh Visarjan. Unlike most Hindu festivals which follow the lunar calendar, this one follows the solar (Bhadra Sankranti) calendar, so the date is fixed each year.</p>
          </div>

          <h2 style={h2}>Why This Festival Matters for Families</h2>
          <p style={s}>While often associated with factories and workshops, Vishwakarma Puja has a meaningful place in everyday family life too. Many households perform a small puja for tools used at home — kitchen equipment, sewing machines, computers, vehicles, and even children's study desks and laptops — as a way of acknowledging the instruments that support the family's daily work and learning.</p>

          <h2 style={h2}>Vishwakarma Puja Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Vishwakarma idol or photo","Flowers — marigold","Roli, chandan, akshat","Diya and ghee/oil","Incense sticks","Coconut","Fruits for prasad","Sweets — peda, boondi ladoo","Havan samagri (if performing havan)","Mango wood for havan","Red cloth","Turmeric and vermillion (for marking tools)","Yellow thread (mauli)","Panchamrit (for abhishekam, if performed)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Puja Vidhi</h2>
          {[
            "Clean the workspace, workshop, or the area where tools/machines are kept",
            "Place a photo or small idol of Lord Vishwakarma on a decorated altar",
            "Arrange all tools, machines, or work instruments around the altar — at home this could be kitchen tools, sewing machines, laptops, or vehicles",
            "Apply turmeric and vermillion (kumkum) marks on each tool or machine as a symbolic blessing",
            "Tie a yellow mauli thread around key tools or machines",
            "Light the diya and incense, and perform aarti facing the altar and tools",
            "If performing a havan, recite Vishwakarma mantras while offering ghee and samagri into the fire",
            "Offer prasad — fruits and sweets — to the deity and distribute to family/employees",
            "Many businesses keep tools/machines switched off for the day as a mark of rest and respect",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Simple Home Version</h2>
          <p style={s}>For families without a dedicated workshop, a simplified version works well: place a small photo of Vishwakarma in the puja room, light a diya, and place a few representative items — a kitchen knife, sewing kit, laptop, or car keys — near the altar. Apply tilak to each item and offer a short prayer of gratitude for the tools that help the family each day. This takes just 10-15 minutes but carries the same spirit.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family runs a business — a shop, workshop, or trade passed down through generations — Vishwakarma Puja is a meaningful day to record the history of the business itself: who started it, what tools were first used, and how it has evolved.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Looking for the next festival in this season? Check our <Link href="/blog/durga-ashtami-mahashtami-puja-guide" style={{ color:C.saffron, fontWeight:600 }}>Durga Ashtami / Mahashtami guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="vishwakarma-puja-vidhi-samagri-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🛠️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family business&apos;s story</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your family traditions, business history, and rituals on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>
              Start preserving for free →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vastu Shastra for Your New Home — Complete Room-by-Room Guide | OurParampara",
  description: "Practical Vastu Shastra guide for your new home — direction-wise placement for the kitchen, bedroom, pooja room, and main entrance, common Vastu remedies, and how Vastu complements Griha Pravesh rituals.",
  keywords: "Vastu Shastra tips new home, Vastu for kitchen direction, Vastu pooja room placement, Vastu remedies for home, Vastu main entrance direction, Vastu Shastra room by room guide",
  openGraph: {
    title: "Vastu Shastra for Your New Home — Complete Room-by-Room Guide | OurParampara",
    description: "Practical Vastu Shastra guide for your new home — direction-wise placement for the kitchen, bedroom, pooja room, and main entrance, common Vastu remedies, and how Vastu complements Griha Pravesh ritua",
    url: "https://www.ourparampara.com/blog/vastu-shastra-tips-new-home",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=vastu-shastra-tips-new-home", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=vastu-shastra-tips-new-home"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/vastu-shastra-tips-new-home" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="vastu-shastra-tips-new-home"
        title="Vastu Shastra for Your New Home — Complete Room-by-Room Guide | OurParampara"
        description="Practical Vastu Shastra guide for your new home — direction-wise placement for the kitchen, bedroom, pooja room, and main entrance, common Vastu remedies, and how Vastu complements Griha Pravesh ritua"
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Heritage Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🧭</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Vastu Shastra for Your New Home — Complete Room-by-Room Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 4, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Vastu Shastra is the traditional Indian system of architecture that aligns living spaces with natural energies — primarily through the cardinal directions, the five elements, and the flow of positive energy through a home. Whether you're moving into a new home, renovating, or simply rearranging furniture, these room-by-room guidelines are a practical starting point rooted in centuries of tradition.</p>

          <h2 style={h2}>The Eight Directions &amp; Their Significance</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["North (Uttar)","Associated with wealth and career — ruled by Kubera, god of wealth"],["North-East (Ishan)","Considered the most sacred direction — ideal for pooja room and meditation"],["East (Purva)","Associated with health and new beginnings — good for main entrance"],["South-East (Agneya)","Ruled by the fire element — ideal for kitchen placement"],["South (Dakshin)","Associated with ancestors and stability"],["South-West (Nairutya)","The heaviest direction — best for master bedroom and storage"],["West (Paschim)","Associated with gains and savings — good for dining areas"],["North-West (Vayavya)","Associated with relationships and travel — suitable for guest rooms"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Main Entrance</h2>
          <p style={s}>The main door is considered the primary entry point for energy into the home. East-facing or North-facing entrances are generally considered most favorable. The entrance should be well-lit, free of clutter, and ideally larger than other doors in the house. A Vastu remedy commonly used for entrances facing less favorable directions is placing a Tulsi plant, Ganesha idol, or auspicious symbols like Swastik near the door.</p>

          <h2 style={h2}>Kitchen Placement</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 6px" }}>Ideal direction: South-East</p>
            <p style={{ fontSize:13, color:"#374151", margin:"0 0 10px" }}>The kitchen represents the fire element (Agni) and is ideally placed in the South-East corner. East is considered the next best option.</p>
            {["The cook should ideally face East while cooking","The stove and sink should not be directly adjacent — fire and water elements should be separated","Avoid placing the kitchen directly under a bathroom or bedroom on the floor above","Keep the kitchen well-ventilated with natural light if possible"].map(i=>(
              <div key={i} style={{ display:"flex", gap:8, padding:"4px 0" }}>
                <span style={{ color:C.saffron, fontSize:13 }}>•</span><span style={{ fontSize:13, color:"#374151" }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Pooja Room</h2>
          <p style={s}>The North-East corner (Ishan) is considered the most sacred and is the traditional placement for the pooja room or home temple. Idols and pictures of deities should generally face East or West (so the worshipper faces East or North while praying). The pooja room should be kept clean, uncluttered, and separate from the bedroom or kitchen where possible — though in smaller homes, a dedicated corner or shelf in the North-East of any room is a practical adaptation.</p>

          <h2 style={h2}>Bedroom Placement</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Master bedroom","South-West — the most stable and grounding direction, suited for the head of the household"],["Children's bedroom","West or North-West"],["Guest bedroom","North-West"],["Bed placement","Headboard against the South or West wall, so you sleep with your head toward South or West"],["Avoid","Sleeping with feet pointing toward the door or mirrors reflecting the bed"],["Avoid","Beams directly above the bed"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Common Vastu Remedies for Compromised Layouts</h2>
          <p style={s}>Most modern homes — apartments especially — don't perfectly align with traditional Vastu directions. Rather than major structural changes, many families use simple remedies:</p>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Mirrors strategically placed to 'redirect' perceived energy flow without structural changes",
              "Wind chimes near entrances or windows in less favorable directions to balance energy",
              "Specific plants — Tulsi (holy basil) near entrances, money plants in the South-East",
              "Crystal pyramids or Vastu yantras placed at the center of the home (Brahmasthan) to balance overall energy",
              "Keeping the center of the home (Brahmasthan) open and uncluttered, avoiding heavy furniture or pillars there",
              "Salt water remedies — bowls of rock salt placed in corners, changed periodically, believed to absorb negative energy",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Vastu &amp; Griha Pravesh</h2>
          <p style={s}>Vastu considerations are often addressed before or during the Griha Pravesh (housewarming) ceremony — the Vastu Puja performed at this time is specifically meant to harmonize the home's energy with its occupants, regardless of how closely the layout follows ideal Vastu principles. Many families view the Griha Pravesh rituals themselves as a practical complement to structural Vastu — addressing energy alignment through ritual where physical changes aren't feasible.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Many families have specific Vastu adjustments passed down through generations — a particular plant by the door, a specific spot reserved for the pooja corner, or where the family keeps important documents. Document these family-specific practices, as they often carry both Vastu wisdom and personal family history.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Moving into a new home? See our <Link href="/blog/griha-pravesh-puja-samagri-list" style={{ color:C.saffron, fontWeight:600 }}>Griha Pravesh puja samagri guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="vastu-shastra-tips-new-home" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🧭</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your home&apos;s traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your family&apos;s Vastu practices, pooja room setup, and home stories on OurParampara.</p>
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

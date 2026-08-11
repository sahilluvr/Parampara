import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ganpati Visarjan — Complete Guide to Vidhi, Significance & Eco-Friendly Immersion | OurParampara",
  description: "Complete Ganpati Visarjan guide — significance of the immersion ritual, step-by-step vidhi, eco-friendly idol and immersion options, and how families bid farewell to Ganesha at home.",
  keywords: "Ganpati Visarjan vidhi, Ganesh immersion ritual, eco-friendly Ganpati visarjan, Ganpati Visarjan at home, Ganesh Chaturthi visarjan significance, Anant Chaturdashi rituals",
  openGraph: {
    title: "Ganpati Visarjan — Complete Guide to Vidhi, Significance & Eco-Friendly Immersion | OurParampara",
    description: "Complete Ganpati Visarjan guide — significance of the immersion ritual, step-by-step vidhi, eco-friendly idol and immersion options, and how families bid farewell to Ganesha at home.",
    url: "https://www.ourparampara.com/blog/ganpati-visarjan-vidhi-complete-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=ganpati-visarjan-vidhi-complete-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=ganpati-visarjan-vidhi-complete-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/ganpati-visarjan-vidhi-complete-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="ganpati-visarjan-vidhi-complete-guide"
        title="Ganpati Visarjan — Complete Guide to Vidhi, Significance & Eco-Friendly Immersion | OurParampara"
        description="Complete Ganpati Visarjan guide — significance of the immersion ritual, step-by-step vidhi, eco-friendly idol and immersion options, and how families bid farewell to Ganesha at home."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🙏</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ganpati Visarjan — Complete Guide to Vidhi, Significance &amp; Eco-Friendly Immersion</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 3, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Ganpati Visarjan is the ceremonial immersion of the Ganesha idol in water, marking the end of the Ganesh Chaturthi festival. Whether observed on the 1.5th, 3rd, 5th, 7th, or the final 10th day (Anant Chaturdashi), Visarjan is an emotional moment for families — a farewell to the deity who has been welcomed as an honored guest into the home.</p>

          <h2 style={h2}>The Significance of Visarjan</h2>
          <p style={s}>The immersion symbolizes the cycle of creation and dissolution — Ganesha, formed from clay or natural materials, returns to the elements from which he came. Philosophically, Visarjan teaches non-attachment: even the divine form we've welcomed, decorated, and worshipped for days must eventually be let go, reflecting the impermanence at the heart of existence. The popular chant "Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya" ("Come again next year, soon") expresses both farewell and the promise of return.</p>

          <h2 style={h2}>When Do Families Perform Visarjan</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["Day 1.5 (Dedh Diwas)","Some families immerse the idol after just one and a half days"],["Day 3","A common choice for smaller home idols"],["Day 5, 7","Chosen by families who wish to extend the celebration"],["Day 10 — Anant Chaturdashi","The most significant and widely observed Visarjan day, marking the official end of the festival across India"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:0, minWidth:160, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Visarjan Vidhi</h2>
          {[
            "Perform a final aarti for Ganesha — this is typically more elaborate than the daily aartis, often including all family members and any guests present",
            "Offer Modak and other sweets one last time as prasad before the journey",
            "Apply a final tilak and offer flowers, durva grass, and any remaining puja items",
            "Seek forgiveness for any mistakes made during the worship — a common practice is to recite a short prayer asking Ganesha to forgive any shortcomings in the rituals performed",
            "Lift the idol respectfully — traditionally carried by family members in a small procession, often accompanied by drumming, singing, and dancing",
            "Immerse the idol in a water body — a river, lake, sea, or in many urban homes, a large tub or artificial pond set up specifically for eco-friendly immersion",
            "As the idol is immersed, chant 'Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya' — wishing for Ganesha's return next year",
            "Return home and clean the puja space, symbolically completing the cycle until the next year's welcome (Aagman)",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Eco-Friendly Immersion Options</h2>
          <p style={s}>Growing concerns about plaster-of-Paris idols and paint chemicals polluting natural water bodies have led many families and communities to adopt eco-friendly alternatives without losing the ritual's meaning:</p>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Clay (shadu mati) idols that dissolve naturally and safely in water",
              "Immersing the idol in a bucket or tub at home, allowing it to dissolve, and later using the resulting clay/soil for a household plant — a popular practice that turns the idol into a living memory",
              "Community-organized artificial ponds set up specifically for immersion, which are then properly treated rather than discharged into natural water bodies",
              "Idols made from natural materials like turmeric, cow dung, or papier-mâché, which are biodegradable",
              "Symbolic immersion — placing a small amount of the idol's material (or a coconut) in water while keeping a treasured clay idol at home for reuse next year",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Visarjan is often an emotional day, especially for children who form an attachment to "Bappa" over the festival days. Record the songs sung during the procession, who carried the idol, and any family rituals around this farewell — these memories often become some of the most cherished from the entire festival.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Planning the full festival? See our <Link href="/blog/ganesh-chaturthi-puja-vidhi-samagri" style={{ color:C.saffron, fontWeight:600 }}>Ganesh Chaturthi puja guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ganpati-visarjan-vidhi-complete-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🙏</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Remember every Bappa, every year</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save photos of your idol, decorations, and Visarjan procession on OurParampara — a yearly tradition worth preserving.</p>
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

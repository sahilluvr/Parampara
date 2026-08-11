import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Char Dham Yatra — Complete Guide to Kedarnath, Badrinath, Gangotri & Yamunotri | OurParampara",
  description: "The Chota Char Dham (small four abodes) of Uttarakhand are: Yamunotri (source of the Yamuna river), Gangotri (source of the Ganga), Kedarnath (one of the 12 Jyotirlingas, dedicated to Shiva), and Badr",
  keywords: "Char Dham Yatra guide, Kedarnath pilgrimage guide, Badrinath temple guide, Char Dham 2026 registration, Gangotri Yamunotri guide, Chota Char Dham pilgrimage",
  openGraph: { title: "Char Dham Yatra — Complete Guide to Kedarnath, Badrinath, Gangotri & Yamunotri", description: "The Chota Char Dham (small four abodes) of Uttarakhand are: Yamunotri (source of the Yamuna river), Gangotri (source of the Ganga), Kedarnath (one of the 12 Jyotirlingas, dedicated to Shiva), and Badr", url: "https://www.ourparampara.com/blog/char-dham-yatra-complete-guide-kedarnath-badrinath", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=char-dham-yatra-complete-guide-kedarnath-badrinath", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=char-dham-yatra-complete-guide-kedarnath-badrinath"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/char-dham-yatra-complete-guide-kedarnath-badrinath" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="char-dham-yatra-complete-guide-kedarnath-badrinath" title="Char Dham Yatra — Complete Guide to Kedarnath, Badrinath, Gangotri & Yamunotri" description="The Chota Char Dham (small four abodes) of Uttarakhand are: Yamunotri (source of the Yamuna river), Gangotri (source of the Ganga), Kedarnath (one of the 12 Jyotirlingas, dedicated to Shiva), and Badr" date="2026-06-02" category="Heritage Guide"
        faqs={[
          { q: "What are the four Char Dhams of Uttarakhand?", a: "The Chota Char Dham (small four abodes) of Uttarakhand are: Yamunotri (source of the Yamuna river), Gangotri (source of the Ganga), Kedarnath (one of the 12 Jyotirlingas, dedicated to Shiva), and Badrinath (dedicated to Lord Vishnu). The yatra traditionally proceeds in this order — west to east, starting from Yamunotri." },
          { q: "When is the best time for Char Dham Yatra?", a: "The Char Dham temples are open from May to October/November. The best time is May-June (before monsoon) and September-October (after monsoon). The Kapat (opening) typically happens in April/May on auspicious dates announced by the temple committees. The temples close in November for winter. Pre-registration on the official Uttarakhand government portal is mandatory." },
          { q: "How many days does Char Dham Yatra take?", a: "A complete Char Dham Yatra typically takes 10-12 days for all four dhams. Individual dhams: Yamunotri (2 days), Gangotri (1-2 days), Kedarnath (2-3 days), Badrinath (2 days). Many families do Kedarnath and Badrinath (Do Dham) in 5-6 days. Helicopter services are available for Kedarnath and can significantly reduce time." },
        ]}
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
            <div style={{ fontSize:40, marginBottom:14 }}>🏔️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Char Dham Yatra — Complete Guide to Kedarnath, Badrinath, Gangotri & Yamunotri</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 2, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>The Char Dham Yatra — the pilgrimage to the four sacred abodes of Uttarakhand — is considered one of the most spiritually significant journeys a Hindu can undertake. Nestled in the Himalayas at altitudes between 3,000 and 3,900 metres, the four dhams (Yamunotri, Gangotri, Kedarnath, and Badrinath) represent the four cardinal directions of the sacred geography of the Hindu tradition. Completing the Char Dham is believed to cleanse all sins and lead the soul toward moksha (liberation).</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Char Dham Yatra 2026: temples open May onwards. Order — Yamunotri → Gangotri → Kedarnath → Badrinath. Total duration: 10-12 days. Mandatory registration on registrationandtouristcare.uk.gov.in. Best time: May-June or September-October. Helicopter available for Kedarnath from Phata/Sitapur.</p>
          </div>

          <h2 style={h2}>The Four Dhams</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:20 }}>
            {[["Yamunotri (3,293m)","Source of the Yamuna river. The temple is dedicated to Goddess Yamuna. The trek is 6km from Janki Chatti. Natural hot springs (Surya Kund) near the temple. Best visited May-June before monsoon."],["Gangotri (3,100m)","Source of the Ganga. The temple is dedicated to Goddess Ganga. The actual source (Gaumukh glacier) is 19km further on a trek. Gangotri town has accommodation options for families."],["Kedarnath (3,583m)","One of the 12 Jyotirlingas — the most important Shiva shrine in the Himalayas. The 16km trek from Gaurikund is the most physically demanding of the four dhams. Helicopter service available from Phata and Sitapur. The rebuilt temple after the 2013 floods has a striking new structure."],["Badrinath (3,133m)","Dedicated to Lord Vishnu (Badrinarayan). One of the four Char Dhams of all India. Accessible by road from Joshimath. The hot springs (Tapt Kund) next to the temple are used for ritual bathing before darshan."]].map(([k,v])=>(
              <div key={k} style={{ padding:"14px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:14, fontWeight:700, color:C.saffron, margin:"0 0 6px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Planning Your Char Dham Yatra</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Register online at registrationandtouristcare.uk.gov.in — mandatory for all pilgrims","Book accommodation in advance especially for Kedarnath (options in Gaurikund/Sonprayag) and Badrinath","Carry warm clothes regardless of season — temperatures drop significantly at night at all four dhams","For elderly or those with health conditions — helicopter services to Kedarnath and a doctor's fitness certificate is advisable","The traditional Char Dham route is by road through Rishikesh → Barkot → Janki Chatti → Gangotri → Uttarkashi → Rudraprayag → Gaurikund → Kedarnath → Joshimath → Badrinath","Travel insurance is strongly recommended for Himalayan pilgrimages"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your Char Dham Yatra in detail — the dates, which family members came, the challenges faced, the moments of grace experienced. Many families who complete Char Dham describe it as the most significant journey of their lives. This record becomes one of the most treasured family documents across generations.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="char-dham-yatra-complete-guide-kedarnath-badrinath" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🏔️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s pilgrimage traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your sacred journeys and spiritual traditions on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

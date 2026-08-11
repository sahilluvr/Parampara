import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Durga Ashtami (Mahashtami) — Puja Vidhi, Samagri & Kanya Puja Guide | OurParampara",
  description: "Complete Mahashtami guide — significance of Durga Ashtami, samagri list, step-by-step puja vidhi, Kanya Puja rituals, and how it concludes Navratri celebrations.",
  keywords: "Mahashtami puja vidhi, Durga Ashtami samagri, Kanya puja Ashtami, Mahashtami significance, Durga Ashtami date 2026, Ashtami puja at home",
  openGraph: {
    title: "Durga Ashtami (Mahashtami) — Puja Vidhi, Samagri & Kanya Puja Guide | OurParampara",
    description: "Complete Mahashtami guide — significance of Durga Ashtami, samagri list, step-by-step puja vidhi, Kanya Puja rituals, and how it concludes Navratri celebrations.",
    url: "https://www.ourparampara.com/blog/durga-ashtami-mahashtami-puja-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=durga-ashtami-mahashtami-puja-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=durga-ashtami-mahashtami-puja-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/durga-ashtami-mahashtami-puja-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="durga-ashtami-mahashtami-puja-guide"
        title="Durga Ashtami (Mahashtami) — Puja Vidhi, Samagri & Kanya Puja Guide | OurParampara"
        description="Complete Mahashtami guide — significance of Durga Ashtami, samagri list, step-by-step puja vidhi, Kanya Puja rituals, and how it concludes Navratri celebrations."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🔱</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Durga Ashtami (Mahashtami) — Puja Vidhi, Samagri &amp; Kanya Puja Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 19, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Durga Ashtami — also called Mahashtami — is the eighth day of Navratri and one of the most powerful days of the festival. Dedicated to Goddess Durga in her fierce form, this day is marked by elaborate puja, the iconic Kanya Puja (worship of young girls as forms of the Goddess), and for many families, the spiritual peak of the nine-day celebration.</p>

          <h2 style={h2}>When is Mahashtami 2026</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 6px" }}>October 19, 2026</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Mahashtami falls on the 8th day of Sharad Navratri (Ashwina, Shukla Ashtami) — the day before Maha Navami and Vijayadashami (Dussehra). The most auspicious puja time is typically in the morning hours, between 6:30 AM and 11:30 AM.</p>
          </div>

          <h2 style={h2}>Significance</h2>
          <p style={s}>Mahashtami marks the day Goddess Durga is believed to have intensified her battle against the demon Mahishasura, embodying the triumph of good over evil at its peak. In Bengali tradition, this is also the day of "Sandhi Puja" — performed at the exact transition between Ashtami and Navami tithis, considered an extremely powerful 48-minute window. For many families, Mahashtami is the most elaborately celebrated day of Durga Puja/Navratri.</p>

          <h2 style={h2}>Mahashtami Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Durga idol or photo","Red cloth (chunri)","Red flowers — hibiscus preferred","Roli, kumkum, akshat","Diya and ghee/oil","Incense sticks and dhoop","Coconut","Fruits — variety for offering","Sweets — halwa, puri, chana","Panchamrit","Betel leaves and supari","Bangles, bindi, alta (for Kanya Puja gifts)","New clothes/cloth (for Kanya Puja)","Holy water (Gangajal)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Mahashtami Puja Vidhi</h2>
          {[
            "Wake early, take a purifying bath, and wear clean/new clothes — red is traditional",
            "Clean and decorate the Devi altar with fresh flowers, especially red hibiscus",
            "Light the diya and incense, offer roli, akshat, and flowers to the Durga idol/photo",
            "Recite Durga Saptashati or Devi Mahatmya verses, or the simple mantra 'Om Dum Durgayei Namah'",
            "Offer panchamrit and prasad to the deity",
            "Perform Kanya Puja (detailed below) — typically done before or after the main aarti",
            "If observing Sandhi Puja (Bengali tradition), perform this at the precise Ashtami-Navami transition with 108 diyas, flowers, and special offerings",
            "Conclude with aarti, sung by the whole family",
            "Distribute prasad to all family members and guests",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Kanya Puja — Step by Step</h2>
          <p style={s}>Kanya Puja involves inviting young girls (typically aged 2-10, before they reach puberty) into the home and worshipping them as living embodiments of Goddess Durga's energy (Shakti). This is one of the most cherished traditions of Mahashtami.</p>
          {[
            "Invite an odd number of young girls (commonly 9, representing the Navadurga, though any number works)",
            "Wash the girls' feet as a gesture of respect — symbolizing washing the feet of the Goddess herself",
            "Apply tilak on their foreheads",
            "Tie a red thread (mauli) on their wrists",
            "Seat them and offer a meal — typically puri, chana (chickpea curry), and halwa",
            "Offer gifts — new clothes, bangles, bindis, money, or sweets",
            "Touch their feet and seek blessings before they leave",
            "Some families also include a young boy (Langoor/Bhairav) representing Lord Bhairav alongside the girls",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.forestLight, border:`2px solid ${C.forest}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.forest, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family hosts Kanya Puja each year, photograph the girls who attend and note their names — many families find it meaningful that the same families' daughters participate year after year, becoming part of an ongoing community tradition.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>New to Navratri? Start with our <Link href="/blog/navratri-puja-guide-9-days" style={{ color:C.saffron, fontWeight:600 }}>complete 9-day Navratri guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="durga-ashtami-mahashtami-puja-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🔱</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your Mahashtami traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your Kanya Puja photos, family puja steps, and prasad recipes on OurParampara.</p>
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

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hanuman Jayanti — Complete Guide to Rituals, Significance & Celebrations | OurParampara",
  description: "Complete Hanuman Jayanti guide — the birth story of Hanuman, significance of devotion and strength, puja vidhi, Hanuman Chalisa recitation, and how families observe this celebration.",
  keywords: "Hanuman Jayanti rituals, Hanuman Jayanti significance, Hanuman Jayanti puja vidhi, Hanuman Chalisa benefits, Hanuman Jayanti date 2026, Hanuman birth story",
  openGraph: {
    title: "Hanuman Jayanti — Complete Guide to Rituals, Significance & Celebrations | OurParampara",
    description: "Complete Hanuman Jayanti guide — the birth story of Hanuman, significance of devotion and strength, puja vidhi, Hanuman Chalisa recitation, and how families observe this celebration.",
    url: "https://www.ourparampara.com/blog/hanuman-jayanti-rituals-significance-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=hanuman-jayanti-rituals-significance-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=hanuman-jayanti-rituals-significance-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/hanuman-jayanti-rituals-significance-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="hanuman-jayanti-rituals-significance-guide"
        title="Hanuman Jayanti — Complete Guide to Rituals, Significance & Celebrations | OurParampara"
        description="Complete Hanuman Jayanti guide — the birth story of Hanuman, significance of devotion and strength, puja vidhi, Hanuman Chalisa recitation, and how families observe this celebration."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪷</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Hanuman Jayanti — Complete Guide to Rituals, Significance &amp; Celebrations</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Hanuman Jayanti celebrates the birth of Lord Hanuman — the devoted disciple of Lord Rama, revered for his strength, courage, wisdom, and unwavering devotion (bhakti). Observed on the full moon day (Purnima) of the Chaitra month in most North Indian traditions (though dates and the specific tithi vary regionally), the day is marked by temple visits, Hanuman Chalisa recitations, and acts of strength and service.</p>

          <h2 style={h2}>The Birth Story of Hanuman</h2>
          <p style={s}>Hanuman was born to Anjana and Kesari, with his birth often described as a divine blessing from Vayu, the wind god — hence Hanuman is also called "Vayuputra" (son of the wind). As a child, Hanuman was extraordinarily powerful and mischievous; one popular story tells of young Hanuman leaping toward the sun, mistaking it for a fruit, until Indra struck him with his thunderbolt, causing his jaw (hanu) to be injured — giving him the name "Hanuman." Despite this, the gods blessed him with immense strength, wisdom, and immortality.</p>

          <h2 style={h2}>Why Hanuman Is So Revered</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["Devotion (Bhakti)","Hanuman's complete devotion to Lord Rama is held as the ultimate example of selfless service and faith"],["Strength & Courage","His leap to Lanka, lifting of mountains, and battles in the Ramayana symbolize overcoming impossible obstacles through faith and determination"],["Protection","Many believe reciting Hanuman Chalisa or visiting Hanuman temples removes fear, negative energy, and obstacles (especially related to Shani/Saturn's influence)"],["Humility despite power","Despite his immense strength, Hanuman remains humble — a quality widely emphasized in stories told to children"]].map(([k,v])=>(
              <div key={k} style={{ marginBottom:10 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 4px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.6 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Hanuman Jayanti Puja Vidhi</h2>
          {[
            "Wake early and take a bath, wearing clean (often saffron-coloured) clothes",
            "Visit a Hanuman temple if possible — many temples organize special events, processions, and bhajans on this day",
            "At home, clean and decorate the puja area, placing a picture or idol of Hanuman",
            "Offer sindoor (vermillion) — a distinctive Hanuman ritual, as Hanuman is said to favor this offering, often applied to the idol's body",
            "Light a diya with sesame oil and offer incense",
            "Recite the Hanuman Chalisa — a 40-verse devotional hymn praising Hanuman's virtues, considered especially powerful when recited on this day",
            "Offer prasad — boondi laddoo, bananas, or other sweets are common offerings",
            "Many devotees observe a fast, especially those seeking relief from difficulties or Shani-related troubles",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Hanuman Chalisa — Why It's Significant</h2>
          <p style={s}>Composed by the poet-saint Tulsidas, the Hanuman Chalisa is one of the most widely recited devotional texts in Hindu tradition — not limited to Hanuman Jayanti alone, but recited daily by millions. Many families have a tradition of reciting it together, especially on Tuesdays and Saturdays (days associated with Hanuman), and particularly during times of difficulty, exams, or important life events, believing it brings courage and removes obstacles.</p>

          <h2 style={h2}>Celebrating With Children</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Share stories from the Ramayana — Hanuman's leap to Lanka, his service to Rama, and the burning of Lanka's tail are popular tales for children",
              "Many children enjoy dressing up as Hanuman during school or community events around this time",
              "Teaching the Hanuman Chalisa, even a few verses, is a common tradition passed down through generations",
              "Discussing the values Hanuman represents — devotion, humility despite strength, and selfless service — offers age-appropriate lessons for children of all ages",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has a tradition of reciting the Hanuman Chalisa together — whether daily, weekly, or on special occasions — record who taught it to whom, and any memories associated with learning it. These oral traditions are some of the most meaningful to preserve across generations.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Looking for more devotional guides? See our <Link href="/blog/how-to-perform-satyanarayan-katha" style={{ color:C.saffron, fontWeight:600 }}>Satyanarayan Katha guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="hanuman-jayanti-rituals-significance-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪷</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Pass down devotional traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Record your family&apos;s prayers, stories, and Hanuman Jayanti traditions on OurParampara — for the next generation.</p>
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

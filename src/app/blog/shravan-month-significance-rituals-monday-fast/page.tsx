import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Shravan Month — Complete Guide to Significance, Monday Fasts & Rituals | OurParampara",
  description: "Shravan is the most sacred month in the Hindu calendar for Lord Shiva devotees. Observed from July to August, it includes Shravan Somwar (Monday) fasts, Kanwar Yatra, daily Shiva abhishekam, and multiple festivals including Naag Panchami, Hariyali Teej, and Raksha Bandhan.",
  keywords: "Shravan month significance, Shravan Somwar fast, Shravan Monday fasting rules, Kanwar Yatra guide, Sawan month significance, Shravan 2026 dates",
  openGraph: { title: "Shravan Month — Complete Guide to Significance, Monday Fasts & Rituals", description: "Shravan is the most sacred month in the Hindu calendar for Lord Shiva devotees. Observed from July to August, it includes Shravan Somwar (Monday) fasts, Kanwar Yatra, daily Shiva abhishekam, and multi", url: "https://www.ourparampara.com/blog/shravan-month-significance-rituals-monday-fast", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=shravan-month-significance-rituals-monday-fast", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=shravan-month-significance-rituals-monday-fast"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/shravan-month-significance-rituals-monday-fast" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="shravan-month-significance-rituals-monday-fast" title="Shravan Month — Complete Guide to Significance, Monday Fasts & Rituals" description="Shravan is the most sacred month in the Hindu calendar for Lord Shiva devotees. Observed from July to August, it includes Shravan Somwar (Monday) fasts, Kanwar Yatra, daily Shiva abhishekam, and multi" date="2026-06-05" category="Heritage Guide"
        faqs={[
          { q: "Why is Shravan month sacred to Lord Shiva?", a: "According to Hindu tradition, during the churning of the cosmic ocean (Samudra Manthan), the poison Halahala emerged and Lord Shiva swallowed it to protect the universe. This happened in the Shravan month. Parvati held Shiva's throat to prevent the poison from spreading — the throat turned blue (giving Shiva the name Neelkanth). Devotees offer water, milk, and bilva leaves to Shiva in Shravan as gratitude for this sacrifice." },
          { q: "What can you eat during Shravan fasting?", a: "Shravan fasting typically involves avoiding non-vegetarian food for the entire month. Many devotees also avoid onion, garlic, and certain vegetables on Mondays. Permitted foods include fruits, milk, curd, sabudana, kuttu atta, singhara flour, and rock salt (sendha namak). Some devotees fast only on Mondays; others maintain restrictions throughout the month." },
          { q: "What is Kanwar Yatra?", a: "Kanwar Yatra is a pilgrimage undertaken by Shiva devotees (Kanwariyas) during Shravan month. Devotees walk hundreds of kilometres barefoot to collect sacred Ganga water from Haridwar, Gangotri, or Gaumukh, then carry it in decorated pots (Kanwar) to their local Shiva temple to perform abhishekam (ritual bathing of the Shiva lingam)." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌙</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Shravan Month — Complete Guide to Significance, Monday Fasts & Rituals</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 5, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Shravan — the fifth month of the Hindu calendar — is considered the most sacred month for Lord Shiva devotees. Falling between July and August, it is a month of rain, renewal, and devotion. The entire month carries heightened spiritual significance, with Mondays (Somwar) being particularly sacred, multiple important festivals falling within it, and millions undertaking the Kanwar Yatra pilgrimage to offer Ganga water to Shiva.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Shravan 2026 runs from July 10 to August 8. Shravan Somwar (Monday) fasts involve visiting a Shiva temple, performing abhishekam with water and milk, offering bilva leaves, and fasting until evening. The month includes Naag Panchami (July 29), Hariyali Teej (August 15), and Raksha Bandhan (August 28).</p>
          </div>
          <h2 style={h2}>Why Shravan Is Sacred</h2>
          <p style={s}>The sacredness of Shravan is rooted in the story of Samudra Manthan — the cosmic churning of the ocean by gods and demons to obtain amrita (nectar of immortality). When the deadly poison Halahala emerged, threatening all creation, Lord Shiva consumed it to protect the universe. Goddess Parvati held his throat to prevent the poison from descending — turning his throat blue and earning him the name Neelkanth. This event is believed to have occurred in Shravan. The water, milk, and bilva offerings of Shravan are acts of gratitude and cooling — soothing the Neelkanth through the month when his sacrifice is most remembered.</p>
          <h2 style={h2}>Shravan Somwar — Monday Fast</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Who observes it","Both men and women — particularly young unmarried women praying for a good husband, and married women for their husband's wellbeing. Shiva devotees of all ages observe it."],["Morning ritual","Visit a Shiva temple early morning. Perform abhishekam — bathe the Shiva lingam with water, milk, curd, honey, and gangajal. Offer bilva (bel) leaves — three-leafed and particularly sacred to Shiva."],["Fasting rules","Fast from sunrise to sunset or until after the evening puja. Permitted: fruits, milk, sabudana, kuttu atta. Avoid non-vegetarian food, onion, and garlic."],["Evening puja","Perform evening Shiva puja at home or temple. Light a diya with ghee. Recite Om Namah Shivaya or Shiva Chalisa."],["Breaking the fast","After the evening puja and aarti. The first food is traditionally prasad — often sabudana khichdi or fruit."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>
          <h2 style={h2}>Festivals in Shravan 2026</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Naag Panchami","July 29 — snake worship festival"],["Hariyali Teej","August 15 — monsoon festival for married women"],["Shravan Purnima","August 8 — full moon, sacred for Shiva worship"],["Raksha Bandhan","August 28 — sibling bond festival (Bhadra Purnima)"],["Onam","August 26 — Kerala harvest festival"],["Kajari Teej","August 18 — Madhya Pradesh monsoon Teej"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific Shravan traditions — which Shiva temple you visit each Monday, the specific abhishekam sequence your family follows, the foods prepared for breaking the fast. These specific family practices are living heritage worth preserving.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="shravan-month-significance-rituals-monday-fast" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌙</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your family&apos;s ceremonies, rituals and memories on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

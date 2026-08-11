import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indian Astrology & Kundali — A Family Guide to Jyotish, Nakshatras & Muhurat | OurParampara",
  description: "A practical family guide to Indian astrology — what Kundali is, the 27 Nakshatras explained, how Muhurat is chosen for ceremonies, Rashi guide, and how families use Jyotish for life decisions.",
  keywords: "Indian astrology family guide, Kundali explained, 27 Nakshatras guide, Muhurat selection guide, Jyotish for families, Rashi guide Indian astrology, Indian horoscope traditions",
  openGraph: { title: "Indian Astrology & Kundali — A Family Guide to Jyotish, Nakshatras & Muhurat", description: "A practical family guide to Indian astrology — what Kundali is, the 27 Nakshatras explained, how Muhurat is chosen for ceremonies, Rashi guide, and how families use Jyotish for life decisions.", url: "https://www.ourparampara.com/blog/indian-astrology-kundali-guide-for-families", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-astrology-kundali-guide-for-families", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-astrology-kundali-guide-for-families"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-astrology-kundali-guide-for-families" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-astrology-kundali-guide-for-families" title="Indian Astrology & Kundali — A Family Guide to Jyotish, Nakshatras & Muhurat" description="A practical family guide to Indian astrology — what Kundali is, the 27 Nakshatras explained, how Muhurat is chosen for ceremonies, Rashi guide, and how families use Jyotish for life decisions." date="2026-06-10" category="Heritage Guide"
        faqs={[
          { q: "What is a Kundali and how is it made?", a: "A Kundali (birth chart) in Jyotish (Indian astrology) is a map of the sky at the exact moment of birth — showing the position of the Sun, Moon, and planets across the 12 houses and 12 rashis (zodiac signs). It is calculated using the exact birth date, time, and place. A Kundali is used to understand personality, predict life events, choose auspicious times (muhurat) for ceremonies, and match compatibility for marriage (kundali milan)." },
          { q: "What are the 27 Nakshatras in Indian astrology?", a: "Nakshatras are the 27 lunar mansions in Jyotish — the path of the Moon divided into 27 equal parts. Each Nakshatra has a specific ruling deity, planet, quality, and meaning. A person's birth Nakshatra (the Nakshatra in which the Moon was placed at birth) is considered their primary astrological identity in many rituals — especially for naming ceremonies (Namkaran) where the first letter of the name is chosen based on the Nakshatra." },
          { q: "How is Muhurat chosen for Indian ceremonies?", a: "Muhurat (auspicious time) is chosen by a Jyotishi (astrologer) or using a panchang (Hindu almanac) based on several factors: the tithi (lunar day), nakshatra (lunar mansion), day of the week, yoga (astrological combination), and karan (half-day unit). For weddings, Griha Pravesh, Namkaran, and business launches, an auspicious muhurat is considered essential for a positive beginning." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>⭐</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Indian Astrology & Kundali — A Family Guide to Jyotish, Nakshatras & Muhurat</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 10, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Indian astrology — Jyotish, literally &apos;the science of light&apos; — has been woven into Indian family life for thousands of years. A baby is born and a Kundali is made. A wedding is planned and a Muhurat is chosen. A business launches on an auspicious date. A home is entered at the right moment. For many Indian families, Jyotish is not superstition — it is a framework for understanding time, personality, and the relationship between the individual and the cosmos.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>A Kundali is a birth chart mapping planetary positions at birth. The 12 Rashis (zodiac signs) and 27 Nakshatras (lunar mansions) form the framework of Jyotish. Muhurat is an auspicious time chosen using the panchang for ceremonies. Kundali Milan (chart matching) is used in arranged marriage compatibility assessment.</p>
          </div>
          <h2 style={h2}>The 12 Rashis (Zodiac Signs)</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Mesh (Aries)","March 21 - April 19"],["Vrishabh (Taurus)","April 20 - May 20"],["Mithun (Gemini)","May 21 - June 20"],["Kark (Cancer)","June 21 - July 22"],["Simha (Leo)","July 23 - Aug 22"],["Kanya (Virgo)","Aug 23 - Sep 22"],["Tula (Libra)","Sep 23 - Oct 22"],["Vrishchik (Scorpio)","Oct 23 - Nov 21"],["Dhanu (Sagittarius)","Nov 22 - Dec 21"],["Makar (Capricorn)","Dec 22 - Jan 19"],["Kumbh (Aquarius)","Jan 20 - Feb 18"],["Meen (Pisces)","Feb 19 - Mar 20"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"8px 10px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:12, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:11, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>
          <h2 style={h2}>How Jyotish Is Used in Family Life</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Namkaran","The first letter of a baby&apos;s name is chosen based on the birth Nakshatra — a Jyotishi or panchang identifies the auspicious syllable for the naming ceremony"],["Wedding Muhurat","Among the most important uses of Jyotish — the wedding date and time are chosen based on the bride and groom&apos;s charts to ensure auspiciousness"],["Kundali Milan","Before an arranged marriage, the couple&apos;s birth charts are compared across 36 gunas (qualities) — compatibility is assessed and doshas (afflictions) identified"],["Griha Pravesh","The auspicious time for entering a new home is chosen by a Jyotishi based on the owner&apos;s chart and the current planetary positions"],["Business launches","Many Indian entrepreneurs consult a Jyotishi before launching a business, registering a company, or signing major contracts"],["Health guidance","Some families consult Jyotish during serious illness — specific pujas or gemstones may be recommended to strengthen weak planetary positions"]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Save every family member&apos;s Kundali on OurParampara — including the birth Nakshatra, Rashi, and any key astrological details your family Jyotishi has shared over the years. This is both heritage and practically useful — future generations planning weddings or ceremonies will need this information.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-astrology-kundali-guide-for-families" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>⭐</p>
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

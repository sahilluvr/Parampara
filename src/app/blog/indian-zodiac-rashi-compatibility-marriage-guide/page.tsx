import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Rashi Compatibility for Marriage — A Complete Guide to Indian Zodiac Matching | OurParampara",
  description: "Rashi (Moon sign) compatibility in Vedic astrology is calculated from the exact position of the Moon at the time of birth, not the Sun sign used in Western astrology. This is considered more personall",
  keywords: "Rashi compatibility marriage guide, Indian zodiac matching for marriage, Guna Milan rashi compatibility, 12 rashi marriage matching, Vedic astrology marriage compatibility",
  openGraph: { title: "Rashi Compatibility for Marriage — A Complete Guide to Indian Zodiac Matching", description: "Rashi (Moon sign) compatibility in Vedic astrology is calculated from the exact position of the Moon at the time of birth, not the Sun sign used in Western astrology. This is considered more personall", url: "https://www.ourparampara.com/blog/indian-zodiac-rashi-compatibility-marriage-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-zodiac-rashi-compatibility-marriage-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-zodiac-rashi-compatibility-marriage-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-zodiac-rashi-compatibility-marriage-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-zodiac-rashi-compatibility-marriage-guide" title="Rashi Compatibility for Marriage — A Complete Guide to Indian Zodiac Matching" description="Rashi (Moon sign) compatibility in Vedic astrology is calculated from the exact position of the Moon at the time of birth, not the Sun sign used in Western astrology. This is considered more personall" date="2026-06-20" category="Heritage Guide"
        faqs={[
          { q: "What is Rashi compatibility and how is it different from Western zodiac matching?", a: "Rashi (Moon sign) compatibility in Vedic astrology is calculated from the exact position of the Moon at the time of birth, not the Sun sign used in Western astrology. This is considered more personally accurate in Hindu tradition because the Moon governs the mind and emotions. For marriage matching (Kundali Milan), Rashi compatibility is just one factor among the 36 Gunas (qualities) assessed — but it's often the first and most accessible compatibility check families perform before a full horoscope matching." },
          { q: "What is Guna Milan and how many points are needed for a good match?", a: "Guna Milan (also called Ashtakoot Milan) is the traditional 36-point compatibility system used in Hindu marriage matching, assessing eight categories: Varna (spiritual compatibility), Vashya (mutual attraction/control), Tara (health and wellbeing), Yoni (sexual compatibility), Graha Maitri (mental compatibility), Gana (temperament), Bhakoot (family welfare), and Nadi (genetic health/progeny). A score of 18+ out of 36 is generally considered acceptable for marriage, 24+ is considered very good, and below 18 is traditionally discouraged, though many families today weigh this alongside other factors rather than as an absolute rule." },
          { q: "Which Rashi pairs are considered most compatible for marriage?", a: "Generally compatible Rashi pairings in Vedic astrology include: Mesh (Aries) with Simha (Leo) or Dhanu (Sagittarius) — fire signs sharing similar energy; Vrishabh (Taurus) with Kanya (Virgo) or Makar (Capricorn) — earth signs valuing stability; Mithun (Gemini) with Tula (Libra) or Kumbh (Aquarius) — air signs sharing intellectual connection; Kark (Cancer) with Vrishchik (Scorpio) or Meen (Pisces) — water signs sharing emotional depth. However, a full Kundali Milan considering all 36 Gunas, not Rashi compatibility alone, is the traditional standard for serious marriage matching." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>♈</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Rashi Compatibility for Marriage — A Complete Guide to Indian Zodiac Matching</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 20, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Before a wedding date is even discussed, many Hindu families begin with a quieter, older question: do the two horoscopes match? Rashi (Moon sign) compatibility is one of the oldest and most widely practised forms of marriage compatibility checking in Indian tradition — a system rooted in Vedic astrology that families have relied on for generations to assess emotional, mental, and even genetic compatibility between a prospective couple. This guide explains how it works.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Rashi compatibility uses the Moon's position at birth (not the Sun sign) to assess marriage compatibility. Full matching uses Guna Milan (Ashtakoot) — a 36-point system across 8 categories. 18+ points is acceptable, 24+ is considered very good. Generally compatible pairs: fire signs (Mesh, Simha, Dhanu) together, earth signs (Vrishabh, Kanya, Makar) together, air signs (Mithun, Tula, Kumbh) together, water signs (Kark, Vrishchik, Meen) together.</p>
          </div>

          <h2 style={h2}>The 12 Rashis (Moon Signs)</h2>
          <p style={s}>Mesh (Aries), Vrishabh (Taurus), Mithun (Gemini), Kark (Cancer), Simha (Leo), Kanya (Virgo), Tula (Libra), Vrishchik (Scorpio), Dhanu (Sagittarius), Makar (Capricorn), Kumbh (Aquarius), Meen (Pisces). Each Rashi is associated with specific personality traits, ruling planets, and elemental qualities (fire, earth, air, water) that form the basis of compatibility assessment.</p>
          <h2 style={h2}>The 8 Gunas of Ashtakoot Milan</h2>
          <p style={s}>Varna (1 point — spiritual/work compatibility), Vashya (2 points — mutual influence), Tara (3 points — health and general wellbeing), Yoni (4 points — physical/sexual compatibility), Graha Maitri (5 points — mental friendship and intellectual compatibility), Gana (6 points — temperament: deva/manushya/rakshasa nature), Bhakoot (7 points — family welfare and prosperity), Nadi (8 points — genetic health, considered the most critical for healthy progeny). Together these total 36 points.</p>
          <h2 style={h2}>Manglik Dosha — A Special Consideration</h2>
          <p style={s}>Beyond Rashi and Guna Milan, many families also check for Manglik Dosha — a specific placement of Mars (Mangal) in the horoscope believed to create challenges in marriage if one partner is Manglik and the other is not. Traditional matching often seeks two Manglik partners together, or specific remedial rituals (like Kumbh Vivah) performed before marriage if only one partner has this placement.</p>
          <h2 style={h2}>How Modern Families Use This Today</h2>
          <p style={s}>Many contemporary Hindu families use Rashi and Guna Milan as one input among several — alongside personal compatibility, family values, and practical life-fit — rather than as an absolute deciding factor. Online tools and family astrologers (Jyotishis) both remain common ways to check Kundali Milan today, with many families requesting a written report (Milan Patrika) to keep as part of the marriage planning process.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family performed Kundali Milan before your own wedding, the matching report (Milan Patrika) is a meaningful document worth preserving — record the astrologer's name, the points scored, and any remedies suggested. These details are often the very first 'paperwork' of a marriage and rarely survive being saved long-term unless deliberately preserved.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-zodiac-rashi-compatibility-marriage-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>♈</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, names and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

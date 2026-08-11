import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pongal vs Makar Sankranti — Same Day, Different Traditions: A Complete Guide | OurParampara",
  description: "Both celebrate the Sun's transit into Capricorn (Makara) on January 14. Both are harvest festivals thanking the completed winter harvest. Both involve ritual bathing, new clothes, special sweets, and ",
  keywords: "Pongal vs Makar Sankranti, difference Pongal Sankranti, Makar Sankranti regional variations India, Indian harvest festivals guide, January 14 festivals India",
  openGraph: { title: "Pongal vs Makar Sankranti — Same Day, Different Traditions: A Complete Guide", description: "Both celebrate the Sun's transit into Capricorn (Makara) on January 14. Both are harvest festivals thanking the completed winter harvest. Both involve ritual bathing, new clothes, special sweets, and ", url: "https://www.ourparampara.com/blog/pongal-vs-makar-sankranti-differences-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=pongal-vs-makar-sankranti-differences-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=pongal-vs-makar-sankranti-differences-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/pongal-vs-makar-sankranti-differences-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="pongal-vs-makar-sankranti-differences-guide" title="Pongal vs Makar Sankranti — Same Day, Different Traditions: A Complete Guide" description="Both celebrate the Sun's transit into Capricorn (Makara) on January 14. Both are harvest festivals thanking the completed winter harvest. Both involve ritual bathing, new clothes, special sweets, and " date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What do Pongal and Makar Sankranti have in common?", a: "Both celebrate the Sun's transit into Capricorn (Makara) on January 14. Both are harvest festivals thanking the completed winter harvest. Both involve ritual bathing, new clothes, special sweets, and kite flying (especially Gujarat-Rajasthan). Both mark the beginning of the Sun's northward journey (Uttarayan) — an auspicious period." },
          { q: "What are the four days of Pongal?", a: "Day 1 Bhogi (January 13): burning old household items. Day 2 Thai Pongal (January 14): cooking sweet rice in clay pot outdoors until it overflows with cries of 'Pongalo Pongal!'. Day 3 Mattu Pongal: cattle worship, Jallikattu in some areas. Day 4 Kaanum Pongal: family outings and visits." },
          { q: "How do different Indian regions celebrate Makar Sankranti?", a: "Gujarat/Rajasthan: kite flying (Uttarayan) with Til Gud sweets. Punjab: Lohri bonfire (January 13). Assam: Bhogali Bihu harvest feast. West Bengal: Poush Sankranti with Pithe-Puli rice cakes. Maharashtra: Til Gud with 'Til Gud ghya, god god bola'. Andhra Pradesh/Karnataka: Muggulu rangoli and kite flying." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>☀️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Pongal vs Makar Sankranti — Same Day, Different Traditions: A Complete Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>January 14 is one of India's most fascinating calendar days — the same solar event celebrated as Pongal in Tamil Nadu, Makar Sankranti in North/West India, Lohri in Punjab, Bhogali Bihu in Assam, and Poush Sankranti in Bengal. Each region responds to the same astronomical moment with entirely different traditions.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>January 14 festivals: Pongal (Tamil Nadu, 4 days, sweet rice dish), Makar Sankranti (North/West India, kite flying, sesame-jaggery sweets), Lohri (Punjab, bonfire January 13), Bhogali Bihu (Assam, harvest feast), Poush Sankranti (Bengal, Pithe-Puli). All celebrate the Sun's entry into Capricorn and end of winter harvest.</p>
          </div>

          <h2 style={h2}>The Pongal Dish</h2>
          <p style={s}>Tamil Pongal's central ritual: sweet rice cooked in a clay pot outdoors until it overflows — the overflow is auspicious, celebrated with cries of 'Pongalo Pongal!' The dish is cooked with sugarcane and turmeric plant decorations. After the ritual, a savoury Ven Pongal (rice-lentil dish) is made for the main meal.</p>
          <h2 style={h2}>Uttarayan — Kite Flying</h2>
          <p style={s}>Gujarat's kite festival (Uttarayan) on January 14: the sky fills with thousands of kites, competitive kite-cutting with sharp manja thread continues dawn to dusk. The International Kite Festival in Ahmedabad attracts kite fliers worldwide.</p>
          <h2 style={h2}>Lohri — Punjab's Harvest Bonfire</h2>
          <p style={s}>Lohri (January 13): community bonfire with bhangra and giddha dancing, popcorn and rewri thrown into the fire, Lohri songs. The first Lohri after a wedding or child's birth is especially celebrated. One of the most joyful Punjabi cultural traditions, widely observed by NRI Punjabi communities abroad.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific harvest festival tradition — which name used, the specific foods prepared, the specific rituals. The regional diversity of India's January 14 festivals reveals how deeply culture is rooted in specific agricultural and geographic contexts.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="pongal-vs-makar-sankranti-differences-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>☀️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your sacred journeys, ceremonies and heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

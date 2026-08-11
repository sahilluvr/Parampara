import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hornbill Festival & Northeast India Tribal Traditions — A Complete Heritage Guide | OurParampara",
  description: "The Hornbill Festival of Nagaland is held December 1-10 at Kisama Heritage Village, 12km from Kohima. It showcases all 17 major Naga tribes with traditional food, music, dance, and crafts. It is the m",
  keywords: "Hornbill Festival guide, Northeast India tribal traditions, Nagaland culture guide, Bihu festival Assam, Manipuri Ras Leela guide, Northeast India indigenous heritage, tribal festivals India",
  openGraph: { title: "Hornbill Festival & Northeast India Tribal Traditions — A Complete Heritage Guide", description: "The Hornbill Festival of Nagaland is held December 1-10 at Kisama Heritage Village, 12km from Kohima. It showcases all 17 major Naga tribes with traditional food, music, dance, and crafts. It is the m", url: "https://www.ourparampara.com/blog/northeast-india-hornbill-festival-tribal-traditions", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=northeast-india-hornbill-festival-tribal-traditions", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=northeast-india-hornbill-festival-tribal-traditions"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/northeast-india-hornbill-festival-tribal-traditions" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="northeast-india-hornbill-festival-tribal-traditions" title="Hornbill Festival & Northeast India Tribal Traditions — A Complete Heritage Guide" description="The Hornbill Festival of Nagaland is held December 1-10 at Kisama Heritage Village, 12km from Kohima. It showcases all 17 major Naga tribes with traditional food, music, dance, and crafts. It is the m" date="2026-06-10" category="Heritage Guide"
        faqs={[
          { q: "When is the Hornbill Festival?", a: "The Hornbill Festival of Nagaland is held December 1-10 at Kisama Heritage Village, 12km from Kohima. It showcases all 17 major Naga tribes with traditional food, music, dance, and crafts. It is the most prominent tribal cultural festival in India." },
          { q: "What are the major tribal festivals of Northeast India?", a: "Key festivals: Hornbill (Nagaland, December), Bihu (Assam — three times yearly), Wangala (Meghalaya Garo tribe, October-November), Sangai Festival (Manipur, November), Ali Ai Ligang (Arunachal Pradesh spring festival), Chapchar Kut (Mizoram, March)." },
          { q: "What is Manipuri Ras Leela?", a: "Manipuri Ras Leela is one of India's most distinctive classical dance forms — a devotional dance enacting Krishna's Rasleela with the Gopis. Performed only in temples on sacred occasions, the costumes (barrel-shaped potloi skirt, stiff ohrni veil) are uniquely Manipuri and extraordinarily beautiful." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🦜</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Hornbill Festival & Northeast India Tribal Traditions — A Complete Heritage Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 10, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Northeast India — comprising eight states — is home to over 200 distinct ethnic groups with festivals, music, food, and traditions representing living heritage that is both vibrant and increasingly important to preserve as modernization accelerates.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Hornbill Festival: December 1-10, Kisama Village, Nagaland — best tribal cultural showcase in India. Other: Bihu (Assam, April), Wangala (Meghalaya October), Sangai (Manipur November). Northeast India is predominantly Christian — Christmas celebrated with elaborate choir traditions.</p>
          </div>

          <h2 style={h2}>Nagaland & Hornbill Festival</h2>
          <p style={s}>The Hornbill Festival brings together all 17 major Naga tribes showcasing distinct traditions — morung displays, traditional food, Naga games, log drum music, and each tribe's dance forms. Tribal warriors in full ceremonial attire create an extraordinary visual spectacle.</p>
          <h2 style={h2}>Bihu — Soul of Assam</h2>
          <p style={s}>Assam celebrates three Bihus: Rongali Bihu (April, New Year), Kongali Bihu (October, lamp-lighting), Bhogali Bihu (January, harvest feast). Bihu dance by women in traditional mekhela-chador to dhol and pepa is one of India's most energetic folk dances.</p>
          <h2 style={h2}>Tribal-Christian Heritage</h2>
          <p style={s}>Much of Northeast India is predominantly Christian — a distinctive tribal-Christian culture emerged: Christmas with elaborate choral traditions (Nagaland has some of the finest choirs in Asia), traditional customs maintained alongside Christian practice.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Northeast India's tribal traditions are among India's most endangered heritages. If your family has Northeast roots, document your tribe's specific traditions — the dance, the festival foods, the songs — before they are lost.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="northeast-india-hornbill-festival-tribal-traditions" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🦜</p>
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

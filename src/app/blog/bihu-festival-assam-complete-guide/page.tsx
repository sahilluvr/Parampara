import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bihu — Complete Guide to Assam's Three Bihu Festivals & Traditions | OurParampara",
  description: "Rongali Bihu (Bohag Bihu, mid-April) — Assamese New Year, spring, planting season. Kongali Bihu (Kati Bihu, October-November) — subdued lamp-lighting when granaries are empty. Bhogali Bihu (Magh Bihu,",
  keywords: "Bihu festival guide, Rongali Bihu Assam, Bihu dance traditions, three Bihu festivals Assam, Bhogali Bihu guide, Assamese New Year traditions, Bihu 2026 date",
  openGraph: { title: "Bihu — Complete Guide to Assam's Three Bihu Festivals & Traditions", description: "Rongali Bihu (Bohag Bihu, mid-April) — Assamese New Year, spring, planting season. Kongali Bihu (Kati Bihu, October-November) — subdued lamp-lighting when granaries are empty. Bhogali Bihu (Magh Bihu,", url: "https://www.ourparampara.com/blog/bihu-festival-assam-complete-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=bihu-festival-assam-complete-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=bihu-festival-assam-complete-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/bihu-festival-assam-complete-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="bihu-festival-assam-complete-guide" title="Bihu — Complete Guide to Assam's Three Bihu Festivals & Traditions" description="Rongali Bihu (Bohag Bihu, mid-April) — Assamese New Year, spring, planting season. Kongali Bihu (Kati Bihu, October-November) — subdued lamp-lighting when granaries are empty. Bhogali Bihu (Magh Bihu," date="2026-06-16" category="Festival Guide"
        faqs={[
          { q: "What are the three Bihu festivals of Assam?", a: "Rongali Bihu (Bohag Bihu, mid-April) — Assamese New Year, spring, planting season. Kongali Bihu (Kati Bihu, October-November) — subdued lamp-lighting when granaries are empty. Bhogali Bihu (Magh Bihu, January) — harvest feast celebrating completed rice harvest." },
          { q: "What is Bihu dance?", a: "Bihu dance is Assam's folk dance performed during Rongali Bihu. Young women in traditional mekhela-chador (two-piece silk garment) perform energetic movements to bihu dhol (drum), pepa (buffalo-horn flute), gogona (jaw harp), and toka (bamboo clapper). Performed in open fields, traditionally as a courtship ritual." },
          { q: "What is Bhogali Bihu?", a: "Bhogali Bihu in January: families feast together and build Bhelaghar (temporary bamboo structures in fields). These are burned the next morning (Bihu day) — ritual fire celebrating harvest completion. The feast includes many varieties of Pitha (rice cakes)." },
        ]}
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌾</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Bihu — Complete Guide to Assam's Three Bihu Festivals & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Bihu is the soul of Assam — marking the agricultural year three times. The Bihu dance — electric, joyful, uniquely Assamese — has become one of India's most recognized folk traditions.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Three Bihus: Rongali (April 14-15, New Year), Kongali (October, lamp-lighting), Bhogali (January 14-15, harvest feast, Uruka bonfire). Bihu dance performed during Rongali — women in mekhela-chador to bihu dhol and pepa.</p>
          </div>

          <h2 style={h2}>Rongali Bihu — Assamese New Year</h2>
          <p style={s}>Rongali Bihu (mid-April): Bihu dance in fields and on stages; gifting of gamosa (hand-woven Assamese cloth with red border on white); husori (visiting homes with songs and dance); feast of traditional Assamese foods.</p>
          <h2 style={h2}>Bihu Pitha — Festival Food</h2>
          <p style={s}>Each Bihu has associated foods. Bhogali Bihu has the most elaborate Pitha tradition — dozens of rice cake varieties: Til Pitha (sesame), Narikol Pitha (coconut), Ghila Pitha, Sunga Pitha (cooked in bamboo). Pitha preparation at Bhogali is a family event lasting days, with grandmothers teaching specific recipes.</p>
          <h2 style={h2}>Bihu for the Assamese Diaspora</h2>
          <p style={s}>For Assamese families abroad, Bihu is the most important cultural anchor. Assamese associations worldwide organize Bihu celebrations in April with dance, music, Assamese food, and gamosa distribution. The gamosa — gifted at Bihu — becomes a tangible symbol of heritage carried far from home.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific Bihu traditions — the specific Pitha varieties made, the gamosa gifting traditions, the Bihu songs your elders sing, and any family Bihu dance performances. Assamese cultural heritage is regionally specific and deeply worth preserving.</p>
          </div>
        
<h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Bihu Songs — Husori</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Husori is the tradition of young men going from house to house in the early morning of Rongali Bihu, singing Bihu songs and blessing the household. The household receives the singers with oil, betel nut, and gifts. Husori songs are a specific genre of Bihu music — traditional melodies with lyrics about spring, romance, and the new year. The tradition of door-to-door singing creates a living community of music-making that few Indian states have preserved as completely as Assam.</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Document your family's Bihu traditions</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Which Pitha varieties does your family make? Which songs are sung? Who taught whom to make Til Pitha? These details are Assamese heritage — record them on OurParampara.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="bihu-festival-assam-complete-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌾</p>
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

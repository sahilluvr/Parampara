import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Navratri Garba & Dandiya — Complete Guide to the Dance, Dress & Traditions | OurParampara",
  description: "Garba is the traditional Gujarati folk dance — clapping, spinning, and graceful footwork in a circle around a central lamp or Goddess image. The name comes from Garbha (womb) — celebrating divine femi",
  keywords: "Navratri Garba guide, Dandiya Raas guide, Garba dance traditions, Navratri dress guide, Gujarati Navratri celebration, Garba music guide, nine nights Navratri traditions",
  openGraph: { title: "Navratri Garba & Dandiya — Complete Guide to the Dance, Dress & Traditions", description: "Garba is the traditional Gujarati folk dance — clapping, spinning, and graceful footwork in a circle around a central lamp or Goddess image. The name comes from Garbha (womb) — celebrating divine femi", url: "https://www.ourparampara.com/blog/navratri-garba-dandiya-guide-complete", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=navratri-garba-dandiya-guide-complete", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=navratri-garba-dandiya-guide-complete"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/navratri-garba-dandiya-guide-complete" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="navratri-garba-dandiya-guide-complete" title="Navratri Garba & Dandiya — Complete Guide to the Dance, Dress & Traditions" description="Garba is the traditional Gujarati folk dance — clapping, spinning, and graceful footwork in a circle around a central lamp or Goddess image. The name comes from Garbha (womb) — celebrating divine femi" date="2026-06-16" category="Festival Guide"
        faqs={[
          { q: "What is the difference between Garba and Dandiya Raas?", a: "Garba is the traditional Gujarati folk dance — clapping, spinning, and graceful footwork in a circle around a central lamp or Goddess image. The name comes from Garbha (womb) — celebrating divine feminine creative energy. Dandiya Raas uses colourful decorated sticks tapped rhythmically between partners. Garba is performed first in the evening; Dandiya in the second half." },
          { q: "What do people wear for Navratri Garba?", a: "Women: chaniya choli — three-piece outfit with flared skirt (chaniya), blouse (choli), and dupatta, embroidered with mirrors. Men: kediyu (embroidered top) with dhoti or churidar. The nine nights each have an associated colour — wearing the day's colour is a popular modern tradition." },
          { q: "Where are the most famous Navratri Garba celebrations?", a: "Most famous: Vadodara (Baroda) — the 'Garba capital of the world'. Ahmedabad, Surat, Rajkot — elaborate community events. Outside Gujarat: NRI community events in USA (New Jersey, Houston, Chicago), UK (Leicester — one of world's largest Garbas), and Canada." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🎭</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Navratri Garba & Dandiya — Complete Guide to the Dance, Dress & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Navratri Garba is one of India's most joyous and visually spectacular traditions — nine nights of devotional dance honouring the Divine Mother in her nine forms. Originating in Gujarat, Garba and Dandiya Raas have become some of the most widely celebrated Indian cultural events worldwide.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Navratri Garba (October): 9 nights of devotional dance. Garba (clapping, spinning in circles) first; Dandiya Raas (stick dance) after. Attire: chaniya choli for women, kediyu-dhoti for men. Nine days each have an associated colour. Most famous: Vadodara, Ahmedabad. Global Garba events held by Indian diaspora communities.</p>
          </div>

          <h2 style={h2}>The Nine Forms of Durga</h2>
          <p style={s}>Navratri honours nine forms of Goddess Durga (Navadurga): Shailputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri, and Siddhidatri. Each represents qualities of the Divine Feminine — the warrior, mother, protector, knowledge-giver. Traditional Garba dancers circle an image or symbol of the Goddess at the centre.</p>
          <h2 style={h2}>Traditional vs Modern Garba</h2>
          <p style={s}>Traditional Garba was performed by women alone in village squares — a devotional, meditative practice of circular movement around the Goddess. Modern Garba has evolved into large-scale events with professional musicians, elaborate costumes, and mixed-gender dancing. The core spirit — celebratory devotion to the Divine Mother — remains.</p>
          <h2 style={h2}>Garba for the Gujarati Diaspora</h2>
          <p style={s}>For Gujarati families abroad, Navratri Garba is the most important annual cultural event. The Leicester UK Garba, New Jersey, Houston, Toronto events have become cultural institutions — children who attend grow up with Garba as a core part of their identity regardless of where they were born.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific Garba traditions — the community event attended for years, the chaniya choli patterns or jewellery worn, the specific Garba tunes that bring back the most vivid memories. Garba is one of the most emotionally resonant traditions in the Gujarati diaspora.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="navratri-garba-dandiya-guide-complete" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🎭</p>
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

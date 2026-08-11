import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ganga Snaan — The Holy Dip: Significance, Best Ghats & How Families Perform It | OurParampara",
  description: "Bathing in the Ganga is believed to wash away sins, purify the soul, and bring the devotee closer to moksha. The river is personified as Goddess Ganga — brought to earth by King Bhagirath's penance to",
  keywords: "Ganga Snaan significance guide, holy dip Ganga guide, Haridwar Ganga bathing, Varanasi ghat guide, Prayagraj Sangam snaan, auspicious time Ganga bath, Ganga ritual significance",
  openGraph: { title: "Ganga Snaan — The Holy Dip: Significance, Best Ghats & How Families Perform It", description: "Bathing in the Ganga is believed to wash away sins, purify the soul, and bring the devotee closer to moksha. The river is personified as Goddess Ganga — brought to earth by King Bhagirath's penance to", url: "https://www.ourparampara.com/blog/ganga-snaan-holy-dip-significance-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=ganga-snaan-holy-dip-significance-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=ganga-snaan-holy-dip-significance-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/ganga-snaan-holy-dip-significance-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="ganga-snaan-holy-dip-significance-guide" title="Ganga Snaan — The Holy Dip: Significance, Best Ghats & How Families Perform It" description="Bathing in the Ganga is believed to wash away sins, purify the soul, and bring the devotee closer to moksha. The river is personified as Goddess Ganga — brought to earth by King Bhagirath's penance to" date="2026-06-16" category="Ritual Guide"
        faqs={[
          { q: "What is the significance of bathing in the Ganga?", a: "Bathing in the Ganga is believed to wash away sins, purify the soul, and bring the devotee closer to moksha. The river is personified as Goddess Ganga — brought to earth by King Bhagirath's penance to liberate his ancestors. Scientific studies have confirmed unusual bacterial-killing properties of Ganga water attributed to its unique mineral composition and high oxygen content." },
          { q: "Which are the most sacred ghats for Ganga Snaan?", a: "Key ghats: Haridwar — Har ki Pauri (most sacred, site of Ganga Aarti). Varanasi — Dashashwamedh Ghat, Manikarnika (cremation ghat), Assi Ghat. Prayagraj — the Sangam (confluence of Ganga, Yamuna, and Saraswati) — considered the most sacred bathing site in India, especially during Kumbh Mela." },
          { q: "What are the most auspicious times for Ganga Snaan?", a: "Makar Sankranti (January 14), Ganga Dashami (May-June), Kartik Purnima (October-November), Kumbh Mela bathing dates, daily at dawn (Brahma Muhurta), and on all full moon days (Purnima)." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Ritual Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🏞️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ganga Snaan — The Holy Dip: Significance, Best Ghats & How Families Perform It</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Ganga Snaan — the holy dip in the sacred Ganga — is one of the most ancient and widely observed ritual practices in Hinduism. Millions take ritual dips at sacred ghats across the Himalayan states, with specific festivals bringing tens of millions for mass bathing. For Indian families, a Ganga Snaan is often one of the most spiritually meaningful experiences of their lives.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Key sites: Haridwar (Har ki Pauri, Ganga Aarti), Varanasi (Dashashwamedh Ghat), Prayagraj Sangam. Most auspicious times: Makar Sankranti, Kartik Purnima, Ganga Dashami, Kumbh Mela dates, daily at dawn. Ritual: three complete immersions, offer Arghya to sun, offer flowers or diya to river.</p>
          </div>

          <h2 style={h2}>The Ritual of Ganga Snaan</h2>
          <p style={s}>Arrive at the ghat at dawn. Take three complete immersions — each time submerging completely while mentally offering sins and karma. Stand facing east and offer Arghya (water scooped in joined hands) to the Sun. Offer flowers or a floating diya to the river as gratitude. Then dress and perform further puja at the ghat if desired.</p>
          <h2 style={h2}>Kumbh Mela — World's Largest Gathering</h2>
          <p style={s}>The Kumbh Mela at Prayagraj — held every 12 years — is the largest peaceful human gathering on earth, with an estimated 200-400 million pilgrims. The most sacred bathing dates (Shahi Snan) see 30-50 million bathing at the Sangam on a single day. UNESCO recognizes the Kumbh Mela as Intangible Cultural Heritage of Humanity.</p>
          <h2 style={h2}>Ganga Snaan for Families</h2>
          <p style={s}>For Indian families, specific Ganga Snaan traditions pass across generations — the specific ghat in Haridwar used for a century, the specific tithi of the annual family bathing, the specific prayers recited. A child's first Ganga Snaan is a significant milestone in many families.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Ganga Snaan traditions — the specific ghat visited, the occasion (Kumbh, annual pilgrimage, after a significant life event), and the prayers said. For many families this is among the most sacred recurring practices of their year.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ganga-snaan-holy-dip-significance-guide" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🏞️</p>
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

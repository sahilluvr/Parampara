import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "North vs South Indian Wedding Rituals — A Complete Comparison Guide | OurParampara",
  description: "Timing: North Indian weddings typically occur at night or evening; South Indian at auspicious daytime muhurat. Duration: North Indian are multi-day (mehendi, sangeet, wedding, reception); South Indian",
  keywords: "North vs South Indian wedding guide, difference North South Indian wedding, Punjabi vs Tamil wedding, Indian regional wedding comparison, Hindu wedding North South differences",
  openGraph: { title: "North vs South Indian Wedding Rituals — A Complete Comparison Guide", description: "Timing: North Indian weddings typically occur at night or evening; South Indian at auspicious daytime muhurat. Duration: North Indian are multi-day (mehendi, sangeet, wedding, reception); South Indian", url: "https://www.ourparampara.com/blog/indian-wedding-rituals-north-vs-south-comparison", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-wedding-rituals-north-vs-south-comparison", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-wedding-rituals-north-vs-south-comparison"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-wedding-rituals-north-vs-south-comparison" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-wedding-rituals-north-vs-south-comparison" title="North vs South Indian Wedding Rituals — A Complete Comparison Guide" description="Timing: North Indian weddings typically occur at night or evening; South Indian at auspicious daytime muhurat. Duration: North Indian are multi-day (mehendi, sangeet, wedding, reception); South Indian" date="2026-06-16" category="Wedding Guide"
        faqs={[
          { q: "What are the main differences between North and South Indian Hindu weddings?", a: "Timing: North Indian weddings typically occur at night or evening; South Indian at auspicious daytime muhurat. Duration: North Indian are multi-day (mehendi, sangeet, wedding, reception); South Indian ceremonies often complete in a few hours. The surrounding ceremonies differ significantly though Saptapadi (seven steps) is central to both." },
          { q: "What is the difference in Kanyadaan between North and South?", a: "North Indian Kanyadaan (gift of the virgin) has the father formally giving his daughter to the groom — considered one of the most meritorious gifts. In South Indian traditions (particularly Tamil Brahmin), the equivalent is Paanigrahanam (the groom taking the bride's hand) — performed differently with different Sanskrit verses but similar core meaning." },
          { q: "How does the Mangalsutra differ across India?", a: "North India: black-beaded gold necklace (designs vary by community). South India: golden pendant called Tali or Thali — its design is distinct for each community (Tamil, Telugu, Kannada, Malayali Talis are all different). Kerala Syrian Christians: the Minnu (cross pendant). The specific Mangalsutra/Tali design is the primary visible marker of married status across Hindu India." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Wedding Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>💒</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>North vs South Indian Wedding Rituals — A Complete Comparison Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>A North Indian and South Indian Hindu wedding are both rooted in the same Vedic tradition — yet they look, sound, and feel dramatically different. Understanding these regional variations illuminates the extraordinary diversity within a single religious tradition.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Key differences: North Indian weddings — evening/night, multi-day (mehendi, sangeet, wedding, reception), baraat procession, Kanyadaan, Saptapadi around fire, Jai Mala, Vidai. South Indian weddings — daytime, shorter ceremony, Paanigrahanam, Tali instead of Mangalsutra, Oonjal swing ceremony in some traditions.</p>
          </div>

          <h2 style={h2}>North Indian Wedding Sequence</h2>
          <p style={s}>Day 1: Mehendi (henna) and Sangeet (music and dance night). Day 2: Baraat (groom procession), Jai Mala (garland exchange), Kanyadaan, Saptapadi (seven steps around sacred fire), Sindoor application, Vidai (bride's departure — one of the most emotionally charged moments). Day 3: Reception. Each community (Punjabi, Rajasthani, UP, Bihar) has specific additional rituals.</p>
          <h2 style={h2}>South Indian Wedding Sequence</h2>
          <p style={s}>Tamil Brahmin: Nichayathartham (engagement), Kasi Yatra, Oonjal (swing ceremony), Maalai Maatral (garland exchange), Paanigrahanam, Saptapadi, Tali tying, Nalangu. Telugu: Talambralu (pouring rice over each other's heads). Kerala: Manthrakodi and Minnu. South Indian weddings typically complete the ceremony in 2-4 hours rather than spreading over multiple days.</p>
          <h2 style={h2}>What Both Traditions Share</h2>
          <p style={s}>Despite regional differences, both traditions share: the Saptapadi (seven sacred steps — most essential ritual), the sacred fire (Agni) as divine witness, family blessings from elders, exchange of garlands as mutual acceptance, and the wedding feast. The spiritual intention — two souls uniting before the divine — is identical across all regional variations.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific wedding traditions — particularly if spanning both North and South Indian backgrounds. The specific way Saptapadi was performed at your parents' wedding, the specific Tali or Mangalsutra design, the songs sung at Vidai — these details make a wedding record a living memory.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-wedding-rituals-north-vs-south-comparison" category="Wedding Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💒</p>
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

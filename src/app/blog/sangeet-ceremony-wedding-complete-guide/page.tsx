import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sangeet Ceremony — Complete Guide to the Indian Pre-Wedding Music Night | OurParampara",
  description: "Complete Sangeet ceremony guide — what Sangeet is, how to plan it, dance performances, who participates, traditional songs vs DJ, Sangeet invitations, outfit ideas, and how modern Indian families celebrate this pre-wedding night.",
  keywords: "Sangeet ceremony guide, Indian wedding Sangeet, how to plan Sangeet, Sangeet dance performances, pre-wedding Sangeet, Sangeet songs Indian wedding, Sangeet ceremony traditions, Indian wedding Sangeet planning",
  openGraph: { title: "Sangeet Ceremony — Complete Guide to the Indian Pre-Wedding Music Night | OurParampara", description: "Complete Sangeet ceremony guide — what Sangeet is, how to plan it, dance performances, who participates, traditional songs vs DJ, Sangeet invitations, outfit ideas, and how modern Indian families celebrate this pre-wedding night.", url: "https://www.ourparampara.com/blog/sangeet-ceremony-wedding-complete-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=sangeet-ceremony-wedding-complete-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=sangeet-ceremony-wedding-complete-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/sangeet-ceremony-wedding-complete-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="sangeet-ceremony-wedding-complete-guide"
        title="Sangeet Ceremony — Complete Guide to the Indian Pre-Wedding Music Night | OurParampara"
        description="Complete Sangeet ceremony guide — what Sangeet is, how to plan it, dance performances, who participates, traditional songs vs DJ, Sangeet invitations, outfit ideas, and how modern Indian families celebrate this pre-wedding night."
        date="2026-07-10"
        category="Wedding Guide"
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
            <div style={{ fontSize:40, marginBottom:14 }}>💃</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Sangeet Ceremony</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Sangeet ceremony — literally 'music' — is the most joyful and least ritualistic of all Indian pre-wedding events. Originally a women-only gathering where the bride's female relatives sang folk songs (some teasing the groom's family, some celebrating the bride's departure, some celebrating new beginnings), the modern Sangeet has evolved into a full family celebration with choreographed dance performances, live music or DJ, elaborate decorations, and a festive dinner. It is, for many families, the event everyone looks forward to most.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Traditional Sangeet — Folk Songs and Women's Gathering</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The original Sangeet was performed the night before the wedding — an intimate women's gathering where aunts, cousins, and grandmothers sang specific songs from the regional tradition. In North India, these included Sohar (birth songs adapted for weddings), Gali (teasing songs directed at the groom's family — quite bawdy in the older tradition), and Mangal songs celebrating the bride's good fortune. The singing was accompanied by dholak (small drum), manjira (cymbals), and clapping. No professional performers — only family members with whatever musical skill they had.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Modern Sangeet — What It Has Become</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Today's urban Sangeet is a different animal — typically held 2-3 days before the wedding, attended by both families and all guests, with professional choreography, lighting, sound systems, and sometimes live performers. The format: each family or group of friends prepares a dance performance to a medley of Bollywood songs, often with a story element connecting the songs to the couple's relationship. Families spend weeks rehearsing. The performances are filmed professionally. The couple performs last — usually the most elaborate act.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>How to Plan the Sangeet</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Timeline:</strong> 2-4 months before wedding — assign performance groups, choose songs, begin rehearsals</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Venue:</strong> Can be at home (most intimate), banquet hall, terrace, or outdoor space</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Format:</strong> Welcome dinner → performances → open dance floor → dinner/desserts. 3-4 hours total</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Performances:</strong> Limit to 6-8 acts of 3-5 minutes each — audiences tire after 45 minutes of performances</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Sound:</strong> Good sound system is essential — either live musician (dholak player + singers) or DJ with a curated playlist</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Traditional element:</strong> Include at least one traditional Sangeet song sung by the grandmothers — this is always the most emotionally resonant moment</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Traditional Sangeet Songs by Region</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Punjab:</strong> Saat rang di chundri, Laung laachi, Gidda songs</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Rajasthan:</strong> Kesariya balam, Padharo mhare des, traditional Rajasthani folk melodies</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Gujarat:</strong> Garba and Dandiya songs — Sangeet often becomes an impromptu Garba night</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Bengal:</strong> Rabindra Sangeet and specific wedding songs from the Bengali tradition</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>South India:</strong> Carnatic classical pieces, regional folk songs, and devotional songs appropriate for the occasion</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Sangeet Outfit Traditions</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Sangeet dress code is typically more colourful and less formal than the wedding day — guests are encouraged to wear bright colours. The bride often wears a different outfit for each performance she is part of, ending with an elaborate lehenga or saree for the final act. Matching outfits for performance groups are common — sisters in matching lehengas, cousins in the same colour family. The groom's family and bride's family often wear different colour themes to create a visual distinction during the friendly competition of performances.</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Record the Sangeet performances</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Video your Sangeet performances carefully — these joyful memories of family dancing together are among the most treasured wedding recordings. Store them on OurParampara alongside the rest of your family's wedding heritage.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="sangeet-ceremony-wedding-complete-guide" category="Wedding Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💃</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals, and cultural heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

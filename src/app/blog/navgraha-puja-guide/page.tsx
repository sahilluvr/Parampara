import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Navgraha Puja — Complete Guide to Worshipping the Nine Planets | OurParampara",
  description: "Complete Navgraha Puja guide — the nine planets in Hindu astrology, which deity rules each planet, specific mantras for each Navgraha, when to perform Navgraha puja, the Navgraha Stotra, and how planetary worship affects your life.",
  keywords: "Navgraha Puja guide, nine planets Hindu puja, Navgraha mantra guide, Shani puja guide, Rahu Ketu puja, Navgraha Stotra, how to do Navgraha puja, planetary puja Hindu, Navagraha temple guide",
  openGraph: { title: "Navgraha Puja — Complete Guide to Worshipping the Nine Planets | OurParampara", description: "Complete Navgraha Puja guide — the nine planets in Hindu astrology, which deity rules each planet, specific mantras for each Navgraha, when to perform Navgraha puja, the Navgraha Stotra, and how planetary worship affects your life.", url: "https://www.ourparampara.com/blog/navgraha-puja-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=navgraha-puja-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=navgraha-puja-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/navgraha-puja-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="navgraha-puja-guide"
        title="Navgraha Puja — Complete Guide to Worshipping the Nine Planets | OurParampara"
        description="Complete Navgraha Puja guide — the nine planets in Hindu astrology, which deity rules each planet, specific mantras for each Navgraha, when to perform Navgraha puja, the Navgraha Stotra, and how planetary worship affects your life."
        date="2026-07-10"
        category="Ritual Guide"
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪐</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Navgraha Puja</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Navgraha Puja — the worship of the nine planets — is a foundational element of Hindu ritual life, performed at the beginning of major samskaras (weddings, housewarmings, thread ceremonies), during astrologically significant periods, and as a regular devotional practice. The nine planets (Navagraha) of Hindu astrology — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu — are understood not as physical celestial bodies alone but as cosmic intelligences whose combined influence shapes the conditions of human life. Propitating them through specific mantras, colours, offerings, and gemstones is said to smooth the karmic path.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Nine Planets — Deities, Days, and Mantras</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Surya (Sun) — Sunday:</strong> Deity Surya; red cloth; red flowers; copper vessel; mantra: 'Om Suryaya Namaha'; stone: Ruby</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Chandra (Moon) — Monday:</strong> Deity Shiva/Parvati; white cloth; white flowers; silver vessel; mantra: 'Om Chandraya Namaha'; stone: Pearl</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Mangal/Kuja (Mars) — Tuesday:</strong> Deity Kartikeya; red cloth; red flowers; copper; mantra: 'Om Mangalaya Namaha'; stone: Red coral</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Budha (Mercury) — Wednesday:</strong> Deity Vishnu; green cloth; green grass; mantra: 'Om Budhaya Namaha'; stone: Emerald</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Guru/Brihaspati (Jupiter) — Thursday:</strong> Deity Vishnu/Brahma; yellow cloth; yellow flowers; mantra: 'Om Gurave Namaha'; stone: Yellow sapphire</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Shukra (Venus) — Friday:</strong> Deity Lakshmi; white/silver cloth; white flowers; mantra: 'Om Shukraya Namaha'; stone: Diamond</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Shani (Saturn) — Saturday:</strong> Deity Yama/Shiva; black/blue cloth; sesame oil lamp; iron vessel; mantra: 'Om Shanaischaraya Namaha'; stone: Blue sapphire</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Rahu (North Node) — Saturday:</strong> No traditional day; dark blue/black; mantra: 'Om Rahave Namaha'; stone: Hessonite garnet</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Ketu (South Node) — Tuesday/Saturday:</strong> Multi-coloured; mantra: 'Om Ketave Namaha'; stone: Cat's eye</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Navgraha Puja Vidhi</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Navgraha Puja is typically performed as part of a larger ceremony (like a Griha Pravesh or wedding) or as a standalone remedial puja when astrological conditions are difficult. The puja involves setting up nine small vessels (representing the nine planets), each filled with the specific grain associated with that planet (wheat for Sun, rice for Moon, red lentils for Mars, green gram for Mercury, chickpeas for Jupiter, white beans for Venus, black sesame for Saturn). Each planet is worshipped in sequence with its specific mantra, flower, and offering.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Shani Puja — The Most Important Navgraha Puja</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Saturn (Shani) receives the most attention in Navgraha worship because his 7.5-year transit (Sade Sati — when Saturn transits the moon sign and the two adjacent signs) is one of the most challenging periods in Hindu astrology. Shani's influence is said to intensify karmic lessons, bring difficulty and testing, and slow progress. Regular Saturday Shani puja — offering sesame oil and black sesame at a Peepal tree, lighting mustard oil lamps, and reciting the Shani Stotra — is prescribed for those under Sade Sati or experiencing Shani Dasha (Saturn period in their chart).</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Navgraha Temples of Tamil Nadu</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The nine Navgraha temples of Tamil Nadu's Kaveri delta region are the most sacred Navgraha pilgrimage sites in India — each temple dedicated to one planet, located within approximately 50km of each other around Kumbakonam. Completing the Navgraha tour (visiting all nine in sequence) is a significant pilgrimage undertaken when one is experiencing difficult planetary periods. The temples: Suryanar Koil (Sun), Thingalur (Moon), Vaitheeswaran Koil (Mars), Thiruvenkadu (Mercury), Alangudi (Jupiter), Kanjanur (Venus), Thirunallar (Saturn — most important, famous for its Shani Stotram and the Nala legend), Thiruvizhi Mizhalai (Rahu), and Keezhperumpallam (Ketu).</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Navgraha puja and family ceremonies</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Every major Hindu samskara (wedding, Griha Pravesh, Upanayana) includes a Navgraha puja at the beginning. Record which planetary periods your family members are in during significant ceremonies — this creates a fascinating astrological family record on OurParampara.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="navgraha-puja-guide" category="Ritual Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪐</p>
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

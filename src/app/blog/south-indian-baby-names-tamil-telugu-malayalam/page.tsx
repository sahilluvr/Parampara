import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "South Indian Baby Names — Tamil, Telugu, Kannada & Malayalam Names with Meanings | OurParampara",
  description: "Popular Tamil baby names include Aravind (lotus), Karthik (associated with Lord Murugan), Vishal (vast/grand), Dhruv (steadfast), Meenakshi (fish-eyed goddess, after the Madurai temple deity), Kaveri ",
  keywords: "South Indian baby names meaning, Tamil baby names 2026, Telugu baby names meaning, Malayalam baby names, Kannada baby names, South Indian naming traditions",
  openGraph: { title: "South Indian Baby Names — Tamil, Telugu, Kannada & Malayalam Names with Meanings", description: "Popular Tamil baby names include Aravind (lotus), Karthik (associated with Lord Murugan), Vishal (vast/grand), Dhruv (steadfast), Meenakshi (fish-eyed goddess, after the Madurai temple deity), Kaveri ", url: "https://www.ourparampara.com/blog/south-indian-baby-names-tamil-telugu-malayalam", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=south-indian-baby-names-tamil-telugu-malayalam", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=south-indian-baby-names-tamil-telugu-malayalam"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/south-indian-baby-names-tamil-telugu-malayalam" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="south-indian-baby-names-tamil-telugu-malayalam" title="South Indian Baby Names — Tamil, Telugu, Kannada & Malayalam Names with Meanings" description="Popular Tamil baby names include Aravind (lotus), Karthik (associated with Lord Murugan), Vishal (vast/grand), Dhruv (steadfast), Meenakshi (fish-eyed goddess, after the Madurai temple deity), Kaveri " date="2026-06-20" category="Heritage Guide"
        faqs={[
          { q: "What are popular Tamil baby names with meanings?", a: "Popular Tamil baby names include Aravind (lotus), Karthik (associated with Lord Murugan), Vishal (vast/grand), Dhruv (steadfast), Meenakshi (fish-eyed goddess, after the Madurai temple deity), Kaveri (the sacred river), Ilakkiya (literature/grace), Tamizh (the Tamil language itself, used as a name), and Sundari (beautiful). Tamil naming often draws from Sangam literature, temple deities specific to Tamil Nadu, and nature." },
          { q: "How do South Indian naming ceremonies differ by region?", a: "While the core Hindu Namkaran principles apply across South India, specific regional traditions differ: Tamil families often perform the ceremony on the 11th or 31st day with the name whispered by the father; Telugu families frequently use the Nakshatrapada (nakshatra-based starting syllable) system similar to North India but with regional priest traditions; Malayali (Kerala) families sometimes combine the naming with the Choroonu (first rice-eating) ceremony for added auspiciousness; Kannada families in Karnataka often hold the ceremony on the 12th day with specific Vedic mantras particular to regional Brahmin traditions." },
          { q: "What are unique Telugu and Kannada baby names?", a: "Popular Telugu names include Sai Charan, Tejas (brilliance), Pranathi (devotion), Spandana (feeling/heartbeat), and Akhila (entire/whole). Popular Kannada names include Chiranjeevi (immortal), Vidya (knowledge), Bhoomika, and Darshan (sight/vision of the divine). Both languages draw heavily from Sanskrit but apply distinct regional pronunciation and naming customs rooted in local temple traditions and classical literature." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌺</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>South Indian Baby Names — Tamil, Telugu, Kannada & Malayalam Names with Meanings</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 20, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>South India's four major linguistic traditions — Tamil, Telugu, Kannada, and Malayalam — each carry their own distinct naming heritage, rooted in classical literature, regional temple deities, and centuries-old Vedic customs. This guide brings together beautiful, meaningful baby names from across South India, helping families honour their specific regional heritage while choosing a name for the next generation.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>South Indian baby names span four major traditions: Tamil (Aravind, Meenakshi, Karthik), Telugu (Tejas, Pranathi, Sai Charan), Kannada (Chiranjeevi, Vidya, Darshan), and Malayalam (often combining Sanskrit roots with Kerala's specific naming customs). Regional naming ceremonies vary — Kerala often combines Namkaran with Choroonu (first rice-eating ceremony) for added significance.</p>
          </div>

          <h2 style={h2}>Tamil Names</h2>
          <p style={s}>Aravind (lotus), Karthik (Lord Murugan), Meenakshi (fish-eyed goddess of Madurai), Kaveri (sacred river), Ilakkiya (literature), Vetri (victory), Tamizh (the language itself), Anbu (love), Arasi (queen), Senthil (Murugan, the red one). Tamil naming often draws on Sangam-era literary words and Shaivite/Murugan temple traditions specific to Tamil Nadu.</p>
          <h2 style={h2}>Telugu Names</h2>
          <p style={s}>Tejas (brilliance), Pranathi (devotion), Sai Charan, Spandana (heartbeat/feeling), Akhila (whole), Manasa (mind/heart), Vamsi (Krishna's flute), Charitha (history/story), Bhargavi (Goddess Lakshmi). Telugu names frequently honour Tirupati's Lord Venkateswara and draw from classical Telugu poetry.</p>
          <h2 style={h2}>Kannada Names</h2>
          <p style={s}>Chiranjeevi (immortal), Vidya (knowledge), Darshan (sacred sight), Bhoomika, Akash, Sanvi, Nakul, Shreyas (auspicious). Kannada naming reflects strong Vedic-Vachana literary influence, with many names drawing from the philosophical poetry of Karnataka's Bhakti movement.</p>
          <h2 style={h2}>Malayalam (Kerala) Names</h2>
          <p style={s}>Achuth (Krishna, the imperishable), Devika, Anjali, Aparna (Parvati), Gokul, Lakshmi-Priya, Nandana. Kerala naming traditions often involve the Choroonu ceremony — the baby's first taste of rice — performed alongside or shortly after the formal naming, considered equally significant in the child's early life milestones.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Whichever South Indian tradition your family follows, the specific temple deity, classical text, or family elder who inspired your child's name is worth recording in detail — these regional naming customs are increasingly rare to find documented outside individual family memory.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="south-indian-baby-names-tamil-telugu-malayalam" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌺</p>
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

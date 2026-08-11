import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sawan Somvar Vrat — Complete Guide to Monday Fasting for Lord Shiva | OurParampara",
  description: "Complete Sawan Somvar vrat guide — why Monday fasts in Shravan month are special, the puja vidhi, mantras, foods allowed and forbidden, Sawan 2026 dates, and the significance of the monsoon month for Shiva devotees.",
  keywords: "Sawan Somvar vrat guide, Shravan Monday fast, Sawan month Shiva fast, Sawan Somvar puja vidhi, Sawan vrat 2026 dates, Monday fast Shiva, Shravan maas significance, Sawan Somvar fasting rules",
  openGraph: { title: "Sawan Somvar Vrat — Complete Guide to Monday Fasting for Lord Shiva | OurParampara", description: "Complete Sawan Somvar vrat guide — why Monday fasts in Shravan month are special, the puja vidhi, mantras, foods allowed and forbidden, Sawan 2026 dates, and the significance of the monsoon month for Shiva devotees.", url: "https://www.ourparampara.com/blog/sawan-somvar-shiva-fast-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=sawan-somvar-shiva-fast-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=sawan-somvar-shiva-fast-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/sawan-somvar-shiva-fast-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="sawan-somvar-shiva-fast-guide"
        title="Sawan Somvar Vrat — Complete Guide to Monday Fasting for Lord Shiva | OurParampara"
        description="Complete Sawan Somvar vrat guide — why Monday fasts in Shravan month are special, the puja vidhi, mantras, foods allowed and forbidden, Sawan 2026 dates, and the significance of the monsoon month for Shiva devotees."
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
            <div style={{ fontSize:40, marginBottom:14 }}>🔱</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Sawan Somvar Vrat</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Sawan Somvar Vrat — fasting on every Monday (Somvar) in the sacred month of Shravan (Sawan) — is one of the most widely observed Hindu religious practices, particularly among women seeking a good husband or those praying for marital happiness. Shravan (July-August) is considered Shiva's most sacred month — the month when he drank the Halahala (poison that emerged from the churning of the cosmic ocean) to save the world, and when the Ganga water held in his matted hair flows most freely. Fasting on Sawan Mondays is believed to bring Shiva's direct blessing and fulfill sincere prayers.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Why Shravan is Shiva's Month</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The mythological basis: during the Samudra Manthan (churning of the cosmic ocean), a deadly poison (Halahala) emerged that would have destroyed all creation. Shiva swallowed the poison, holding it in his throat (which turned blue — hence Neelkantha, the blue-throated one). To cool the poison's burning, all the gods poured water on Shiva's head, and the celestial Ganga in his hair flowed constantly. Shravan is the month when this cosmic cooling happened — and the monsoon rains that fall in Shravan are believed to carry the sanctity of that celestial water. Bathing in or offering rain water to Shiva lingas in Shravan is thus especially auspicious.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Sawan 2026 — Dates and Schedule</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Sawan begins:</strong> July 11, 2026</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>First Sawan Somvar:</strong> July 13, 2026</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Second Sawan Somvar:</strong> July 20, 2026</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Third Sawan Somvar:</strong> July 27, 2026</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Fourth Sawan Somvar:</strong> August 3, 2026</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Fifth Sawan Somvar (some regions):</strong> August 10, 2026</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Sawan ends:</strong> August 9 or 10, 2026 (varies by North/South traditions)</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Sawan Somvar Puja Vidhi</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}><strong>Morning ritual:</strong> Wake before sunrise. Bathe (Sawan is the month of ritual purity). Visit the nearest Shiva temple, preferably before 8 AM. Bring: raw milk, water (ideally from the Ganga or a sacred well), Bel leaves (Shiva's most sacred offering), white flowers (Dhatura, Akanda), Bhasma (sacred ash), Panchamrit, incense, and a small diya.</p>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}><strong>At the Shiva linga:</strong> Pour water first (Jalabhishek), then milk (Dugdha abhishek), then Panchamrit. Offer Bel leaves — always in groups of three, smooth side facing the linga, stem removed. Offer Dhatura flowers (highly auspicious for Shiva). Apply Bhasma. Light incense and diya. Recite the Panchakshara mantra 'Om Namah Shivaya' 108 times.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Fasting Rules and Permitted Foods</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Complete Nirjala fast:</strong> No food or water from sunrise to sunset — most austere form</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Partial fast (most common):</strong> One meal after evening puja, of fasting foods only</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Permitted foods:</strong> Sabudana (tapioca), kuttu flour (buckwheat), singhara flour (water chestnut), potatoes, sweet potatoes, fruits, milk, curd, sendha namak (rock salt), sugar</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Avoid:</strong> Regular salt, grains (rice, wheat, corn), onion, garlic, non-vegetarian food</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Sawan special food:</strong> Many Hindu families avoid non-vegetarian food for the entire month of Sawan — not just on Mondays</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Unmarried Women and the Sawan Vrat</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Sawan Somvar vrat has particular significance for unmarried women — fasting for a good husband is the most commonly cited intention. The belief: Parvati herself fasted and performed intense penance to attain Shiva as her husband, and the Sawan Mondays are the days when Shiva is most responsive to such prayers. The vrat creates a direct connection between the devotee's sincere intention and Shiva's blessing. Many women who maintain this vrat and are subsequently married attribute their good fortune to Shiva's grace.</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Maintain the vrat consistently</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>The Sawan Somvar vrat is most powerful when maintained consistently through all Mondays of the month. If you miss one day due to illness or unavoidable circumstances, continue from the next Monday without feeling that the entire vrat is broken. Shiva's grace encompasses sincere effort.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="sawan-somvar-shiva-fast-guide" category="Ritual Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🔱</p>
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

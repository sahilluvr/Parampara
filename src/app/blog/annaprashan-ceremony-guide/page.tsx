import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Annaprashan Ceremony — Baby's First Rice Feeding Complete Guide | OurParampara",
  description: "Complete Annaprashan ceremony guide — best age and muhurat, samagri list, step-by-step ritual, the 'choosing game', and regional variations across India.",
  keywords: "Annaprashan ceremony guide, baby first rice feeding, Annaprashan samskara, Annaprashan muhurat, Annaprashan samagri list, Mukhe Bhaat, choosing ceremony baby",
  openGraph: {
    title: "Annaprashan Ceremony — Baby's First Rice Feeding Complete Guide | OurParampara",
    description: "Complete Annaprashan ceremony guide — best age and muhurat, samagri list, step-by-step ritual, the 'choosing game', and regional variations across India.",
    url: "https://www.ourparampara.com/blog/annaprashan-ceremony-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=annaprashan-ceremony-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=annaprashan-ceremony-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/annaprashan-ceremony-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="annaprashan-ceremony-guide"
        title="Annaprashan Ceremony — Baby\'s First Rice Feeding Complete Guide | OurParampara"
        description="Complete Annaprashan ceremony guide — best age and muhurat, samagri list, step-by-step ritual, the \'choosing game\', and regional variations across India."
        date="2026-06-01"
        category="Festival Guide"
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Samskara Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🍚</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Annaprashan Ceremony — Baby&apos;s First Rice Feeding Complete Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 11, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Annaprashan (also called Mukhe Bhaat in Bengali families, or Choroonu in Kerala) is the 8th of the 16 Hindu samskaras — the ceremony marking a baby's first taste of solid food, usually rice. It's a joyful milestone celebration that also carries deep spiritual significance, marking the baby's transition from milk-only nutrition to grains — the foundation of life in Indian culture.</p>

          <h2 style={h2}>When to Perform Annaprashan</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>Traditional timing by gender:</p>
            {[["Boys","6th month — typically an even-numbered month from birth"],["Girls","5th or 7th month — typically an odd-numbered month from birth"],["Some families","Choose a date based on the baby's nakshatra or a specific festival like Vasant Panchami"],["Note","The exact timing varies by region and family tradition — always confirm with your family priest"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:0, minWidth:90, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Annaprashan Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Kheer or payasam (rice pudding)","Silver or gold spoon/coin","New clothes for baby","Roli, chandan, akshat","Flowers — marigold","Diya and ghee","Fruits for prasad","Sweets","Items for the 'choosing ceremony' (book, pen, money, gold, soil/clay)","Betel leaves and supari","Coconut","Kalash with water"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Ritual</h2>
          {[
            "Choose an auspicious muhurat — often a festival day, the baby's nakshatra-based date, or a family-significant date",
            "Dress the baby in new clothes — often a traditional outfit in bright colours",
            "Perform a short puja invoking family deities and seeking blessings for the baby's health and prosperity",
            "Prepare kheer or payasam — this is traditionally the first solid food given to the baby",
            "The eldest family member (often a grandparent) feeds the baby the first spoonful of kheer using a silver spoon",
            "Other family members may also offer small tastes, symbolizing collective blessings",
            "Perform the 'choosing ceremony' — explained below",
            "Distribute prasad and sweets to all guests",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>The "Choosing Ceremony"</h2>
          <p style={s}>One of the most fun and anticipated parts of Annaprashan is the "choosing ceremony" (sometimes called Mukhe Bhaat ceremony in Bengali families). A tray with several symbolic objects is placed in front of the baby, and whichever object the baby reaches for or touches first is believed to indicate their future inclination or profession.</p>
          <div style={{ background:C.forestLight, border:`1px solid rgba(26,92,66,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.forest, margin:"0 0 10px" }}>Common items and their meanings:</p>
            {[["Book","Scholar / academic inclination"],["Pen","Writer / intellectual pursuits"],["Money/coin","Wealth / business acumen"],["Gold/jewellery","Prosperity / luxury"],["Soil/clay","Connection to land / real estate"],["Stethoscope (modern)","Doctor / medical profession"],["Rice/grain","Abundance / never going hungry"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(26,92,66,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.forest, margin:0, minWidth:110, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{v}</p>
              </div>
            ))}
          </div>
          <p style={s}>This is taken in good fun rather than as a serious prediction — but it makes for one of the most photographed and talked-about moments of the ceremony, often repeated for years in family stories.</p>

          <h2 style={h2}>Regional Variations</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Bengali families call it 'Mukhe Bhaat' and often hold a larger feast with extended family",
              "In Kerala, the ceremony is called 'Choroonu' and is often performed at a temple",
              "South Indian families may combine this with a Namakaranam-style naming reaffirmation",
              "Punjabi and North Indian families often celebrate this alongside the baby's first haircut planning",
              "Some families add a small puja for Annapurna Devi, the goddess of food and nourishment",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Record what your baby chose during the ceremony, who fed them the first spoonful, and any family stories about previous generations' Annaprashan — these small details become treasured memories years later.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Planning other ceremonies too? See our guides on <Link href="/blog/namkaran-naming-ceremony-guide" style={{ color:C.saffron, fontWeight:600 }}>Namkaran (naming ceremony)</Link> and <Link href="/blog/mundan-ceremony-complete-guide" style={{ color:C.saffron, fontWeight:600 }}>Mundan (first haircut)</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="annaprashan-ceremony-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🍚</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your baby&apos;s Annaprashan</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save what your little one chose, the date, and family memories on OurParampara — forever.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>
              Start preserving for free →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

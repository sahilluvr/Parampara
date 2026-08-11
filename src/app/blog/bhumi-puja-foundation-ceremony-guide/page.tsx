import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bhumi Puja — Complete Foundation Laying Ceremony Guide with Vidhi & Samagri | OurParampara",
  description: "Complete Bhumi Puja guide — significance of worshipping the earth before construction, samagri list, step-by-step vidhi, muhurat selection, and Vastu considerations.",
  keywords: "Bhumi puja vidhi, foundation laying ceremony Hindu, Bhumi puja samagri list, Bhumi pujan muhurat, land worship ceremony, Bhumi puja before construction",
  openGraph: {
    title: "Bhumi Puja — Complete Foundation Laying Ceremony Guide with Vidhi & Samagri | OurParampara",
    description: "Complete Bhumi Puja guide — significance of worshipping the earth before construction, samagri list, step-by-step vidhi, muhurat selection, and Vastu considerations.",
    url: "https://www.ourparampara.com/blog/bhumi-puja-foundation-ceremony-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=bhumi-puja-foundation-ceremony-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=bhumi-puja-foundation-ceremony-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/bhumi-puja-foundation-ceremony-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="bhumi-puja-foundation-ceremony-guide"
        title="Bhumi Puja — Complete Foundation Laying Ceremony Guide with Vidhi & Samagri | OurParampara"
        description="Complete Bhumi Puja guide — significance of worshipping the earth before construction, samagri list, step-by-step vidhi, muhurat selection, and Vastu considerations."
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Ritual Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🏗️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Bhumi Puja — Complete Foundation Laying Ceremony Guide with Vidhi &amp; Samagri</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 24, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Bhumi Puja — literally "earth worship" — is performed before breaking ground for any construction: a home, a commercial building, or even a well. It is an act of reverence toward Bhumi Devi (Mother Earth), seeking her permission to disturb the land and requesting blessings for the construction and those who will live or work in the finished structure. In Indian tradition, no construction is considered complete without this foundational ritual.</p>

          <h2 style={h2}>Significance of Bhumi Puja</h2>
          <p style={s}>The earth is considered sacred in Hindu tradition — all living beings depend on her, and she bears the weight of everything we build. Bhumi Puja acknowledges this relationship: before the first shovel of soil is turned, the family formally asks Mother Earth's forgiveness for disturbing her, and seeks blessings for a safe construction process and a harmonious life in the new space. Many families also believe Bhumi Puja sets the energy foundation for everything built on the land — a house started with a proper puja carries different energy from one that didn't have it.</p>

          <h2 style={h2}>Choosing the Right Muhurat</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["Best months","Chaitra, Vaishakha, Jyeshtha, Magha, Phalguna — generally considered favourable for construction starts"],["Avoid","Ashada, Bhadrapada, Paush (broadly considered inauspicious for new construction starts in many traditions)"],["Best days","Mondays, Wednesdays, Thursdays, and Fridays are typically preferred"],["Avoid","Amavasya (new moon), Rahu Kaal period, and solar/lunar eclipse days"],["Nakshatra preference","Rohini, Mrigashira, Uttara Phalguni, Uttara Ashadha, Uttara Bhadrapada, Revati are generally considered auspicious"],["Best practice","Consult a family priest or astrologer with the proposed date and exact time for a personalized muhurat"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:0, minWidth:120, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0, lineHeight:1.6 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Bhumi Puja Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Ganesh idol or image (puja begins with Ganesh worship)","Bhumi Devi image or a symbolic clay mound","Copper or brass kalash filled with water","Coconut","Mango leaves to adorn the kalash","Roli, chandan, haldi, kumkum","Akshat (unbroken rice grains)","Panchamrit","Flowers — especially marigold","Diya and ghee","Incense sticks","Supari, betel leaves, cloves, cardamom","Sesame seeds (til) and jaggery (for fire offerings)","Silver or gold coin (to be placed at the foundation corner)","Navaratna (nine gems) or substitute items","Sacred water (Ganga Jal if available)"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Bhumi Puja Vidhi</h2>
          {[
            "Mark and clean the construction site — clear the area where the puja will be performed",
            "Set up the puja sthal: place a clean cloth, the kalash (pot of water with mango leaves and coconut), and images of Ganesh and Bhumi Devi",
            "The priest begins with Ganesh Puja — invoking Lord Ganesha to remove obstacles and bless the beginning",
            "Perform Sankalpa (statement of intent) — the landowner declares their name, location, date, and purpose of the puja",
            "Bhumi Devi is invoked with specific mantras, seeking her permission and forgiveness for disturbing the earth",
            "Panchamrit abhishekam is performed on the kalash or clay mound representing Bhumi Devi",
            "Offerings (flowers, roli, akshat, sweets) are made with each round of mantras",
            "A small havan (fire ritual) may be performed, with offerings of sesame, ghee, and grains into the sacred fire",
            "The landowner digs a small ceremonial first cut of earth (Khodai) with a silver or gold implement — symbolizing the formal start of construction",
            "A silver or gold coin is placed at the north-east corner of the proposed foundation — a Vastu tradition for prosperity",
            "Prasad is distributed to all present, followed by a shared meal if customary",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Bhumi Puja is often the only ritual specifically tied to the land a family builds on — document the date, who performed the puja, the priest's name, what was placed at the foundation corner, and any photographs. When the house is eventually sold or passed down, this record becomes part of the home's heritage.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Moving in after construction? See our <Link href="/blog/griha-pravesh-puja-samagri-list" style={{ color:C.saffron, fontWeight:600 }}>Griha Pravesh guide</Link> and <Link href="/blog/vastu-shastra-tips-new-home" style={{ color:C.saffron, fontWeight:600 }}>Vastu Shastra guide for new homes</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="bhumi-puja-foundation-ceremony-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🏗️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document the foundation of your family&apos;s home</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save Bhumi Puja photos, the priest's details, and the date your home's story began on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

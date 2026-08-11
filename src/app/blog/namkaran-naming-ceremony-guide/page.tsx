import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Namkaran Ceremony — Hindu Baby Naming Ritual Complete Guide | OurParampara",
  description: "Complete Namkaran ceremony guide — best day to perform it, naming by nakshatra, samagri list, step-by-step ritual, and how to choose an auspicious name.",
  keywords: "Namkaran ceremony guide, baby naming ceremony Hindu, Namkaran samskara, naming by nakshatra, Namkaran muhurat, Namkaran samagri list",
  openGraph: {
    title: "Namkaran Ceremony — Hindu Baby Naming Ritual Complete Guide | OurParampara",
    description: "Complete Namkaran ceremony guide — best day to perform it, naming by nakshatra, samagri list, step-by-step ritual, and how to choose an auspicious name.",
    url: "https://www.ourparampara.com/blog/namkaran-naming-ceremony-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=namkaran-naming-ceremony-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=namkaran-naming-ceremony-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/namkaran-naming-ceremony-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="namkaran-naming-ceremony-guide"
        title="Namkaran Ceremony — Hindu Baby Naming Ritual Complete Guide | OurParampara"
        description="Complete Namkaran ceremony guide — best day to perform it, naming by nakshatra, samagri list, step-by-step ritual, and how to choose an auspicious name."
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
            <div style={{ fontSize:40, marginBottom:14 }}>👶</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Namkaran Ceremony — Hindu Baby Naming Ritual Complete Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 12, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Namkaran (also called Naamkaran or the naming ceremony) is the second of the 16 Hindu samskaras — sacred rites of passage that mark important life stages. It is the formal ceremony where a newborn baby is given their name, traditionally guided by astrology, family deity, and lineage. Here is everything you need to plan a meaningful Namkaran.</p>

          <h2 style={h2}>When to Perform Namkaran</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>Traditional timing:</p>
            {[["11th day","Most widely followed across North India — also when the family resumes normal religious activities after birth"],["12th day","Common in many South Indian and Maharashtrian families"],["16th day, 27th day, 6 months, or 1st birthday","Alternative timings followed by some communities — always within the first year"],["Note","The exact day is often decided based on the baby's birth nakshatra and family priest's recommendation"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"7px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:0, minWidth:90, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Naming by Nakshatra</h2>
          <p style={s}>In Vedic astrology, each of the 27 nakshatras (lunar constellations) is associated with specific syllables considered auspicious for a baby's first name. Many families consult a priest or astrologer to determine the baby's birth nakshatra and the corresponding starting syllable for the name. This practice — called "rashi naam" — is believed to align the child's name with their cosmic energy for a prosperous life.</p>
          <p style={s}>It's common for a family to have two names: the official "rashi naam" used in horoscope and ceremonies, and a "vyavahारik naam" (call name) used in daily life — often chosen for personal or family significance.</p>

          <h2 style={h2}>Namkaran Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Havan samagri","Havan kund","Ghee","Honey","Gold ring or gold piece (for writing the name)","Rice grains in a plate (for writing name)","Kalash with water","Mango leaves","Coconut","Roli, akshat, chandan","Flowers — marigold","New clothes for baby","Betel leaves and nuts","Sweets for prasad","Cradle (jhula) decorated for the ceremony"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Ritual</h2>
          {[
            "Choose an auspicious muhurat based on the baby's nakshatra, in consultation with a priest or family astrologer",
            "Clean and decorate the puja area; set up the havan kund",
            "Perform Ganesh puja and invoke family deities for blessings",
            "The priest performs a short havan with mantras for the baby's health and long life",
            "The father or eldest family member whispers the chosen name into the baby's right ear three times — this is the moment of naming",
            "Write the baby's name on a plate of rice using a gold ring or stick — a tradition symbolizing the first 'writing' in the child's life",
            "Family members and elders bless the baby, often gifting gold, clothes, or money",
            "The baby is placed in a decorated cradle (jhula) and rocked while a lullaby (lori) is sung — this is often the highlight of the ceremony",
            "Distribute prasad and sweets to all guests",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Tips for Choosing a Name</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Check the recommended starting syllable from the baby's nakshatra/rashi",
              "Consider names of family deities, ancestors, or significant family figures",
              "Ensure the name is easy to pronounce in both your native language and the languages of countries you may live in",
              "Check the numerological value if your family follows numerology traditions",
              "Avoid names that are difficult to spell or commonly mispronounced — this matters more for families settled abroad",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Record the story of how your name was chosen, who chose it, and what it means — these stories often get lost within a generation. Ask your parents about your own Namkaran and write it down for your children to read someday.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="namkaran-naming-ceremony-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>👶</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your child&apos;s naming story forever</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Document the Namkaran ceremony, the meaning behind the name, and family blessings on OurParampara.</p>
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

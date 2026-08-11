import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hindu Baby Naming by Rashi & Nakshatra — Complete Guide for Namkaran | OurParampara",
  description: "Complete guide to naming your baby using Rashi (moon sign) and Nakshatra (birth star) — how the naming letter is determined, popular names by Rashi, and how this connects to the Namkaran ceremony.",
  keywords: "baby naming by Rashi, Nakshatra naming letter, Hindu baby names by Nakshatra, Namkaran naming guide, Rashi based baby names, moon sign baby naming Hindu",
  openGraph: {
    title: "Hindu Baby Naming by Rashi & Nakshatra — Complete Guide for Namkaran | OurParampara",
    description: "Complete guide to naming your baby using Rashi (moon sign) and Nakshatra (birth star) — how the naming letter is determined, popular names by Rashi, and how this connects to the Namkaran ceremony.",
    url: "https://www.ourparampara.com/blog/hindu-baby-naming-rashi-nakshatra-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=hindu-baby-naming-rashi-nakshatra-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=hindu-baby-naming-rashi-nakshatra-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/hindu-baby-naming-rashi-nakshatra-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="hindu-baby-naming-rashi-nakshatra-guide"
        title="Hindu Baby Naming by Rashi & Nakshatra — Complete Guide for Namkaran | OurParampara"
        description="Complete guide to naming your baby using Rashi (moon sign) and Nakshatra (birth star) — how the naming letter is determined, popular names by Rashi, and how this connects to the Namkaran ceremony."
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
            <div style={{ fontSize:40, marginBottom:14 }}>⭐</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Hindu Baby Naming by Rashi &amp; Nakshatra — Complete Guide for Namkaran</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 5, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>In Hindu tradition, a baby's name is often chosen based on the position of the Moon at the time of birth — specifically, the Nakshatra (lunar mansion/birth star) and Rashi (moon sign). Each Nakshatra and its sub-divisions (padas) correspond to specific starting syllables, believed to align the child's name with auspicious cosmic energies. This naming method is traditionally finalized during the Namkaran ceremony.</p>

          <h2 style={h2}>What Are Rashi &amp; Nakshatra?</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["Rashi (Moon Sign)","One of 12 zodiac signs based on the Moon's position at birth — different from the Sun-sign zodiac used in Western astrology"],["Nakshatra (Birth Star)","One of 27 lunar mansions the Moon passes through — each Nakshatra is further divided into 4 padas (quarters)"],["Naming letter","Each Nakshatra pada corresponds to specific starting sounds/syllables considered auspicious for naming a child born under that pada"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:12, padding:"8px 0", borderBottom:`1px solid rgba(200,84,26,0.1)` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:140, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:C.charcoal, margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Popular Names by Rashi</h2>
          <p style={s}>While the Nakshatra pada determines the precise starting syllable, names are often broadly grouped by Rashi for convenience. Here are commonly used starting sounds and example names for each Rashi:</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Mesha (Aries)","Chu, Che, Cho, La — e.g. Chetan, Lavanya"],["Vrishabha (Taurus)","E, U, O, Va, Vi, Vu, Ve, Vo — e.g. Esha, Vivaan"],["Mithuna (Gemini)","Ka, Ki, Ku, Gha, Chha — e.g. Karan, Kiara"],["Karka (Cancer)","Hi, Hu, He, Ho, Da, Di, Du, De, Do — e.g. Heer, Diya"],["Simha (Leo)","Ma, Mi, Mu, Me, Mo, Ta, Ti, Tu, Te, To — e.g. Maya, Tanvi"],["Kanya (Virgo)","Pa, Tha, Pe, Po, Ra, Ri, Ru, Re, Ro — e.g. Priya, Reyansh"],["Tula (Libra)","Ra, Ri, Ru, Re, Ro, Ta, Ti, Tu, Te — e.g. Riya, Tarun"],["Vrishchika (Scorpio)","To, Na, Ni, Nu, Ne, No, Ya, Yi, Yu — e.g. Naina, Yash"],["Dhanu (Sagittarius)","Ye, Yo, Bha, Bhi, Bhu, Dha, Pha, Dha — e.g. Bhavya, Dhruv"],["Makara (Capricorn)","Bho, Ja, Ji, Khi, Khu, Khe, Kho, Ga, Gi — e.g. Jiya, Gauri"],["Kumbha (Aquarius)","Gu, Ge, Go, Sa, Si, Su, Se, So, Da — e.g. Sara, Sahil"],["Meena (Pisces)","Di, Du, Tha, Jha, Da, Cha, Thi, Chha — e.g. Dia, Chahna"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>How to Find Your Baby's Naming Letter</h2>
          {[
            "Note the exact date, time, and place of birth — accuracy matters since Nakshatra padas change every few hours",
            "Consult a family priest, astrologer, or a reliable Panchang/horoscope app to determine the baby's birth Nakshatra and pada",
            "Identify the recommended starting syllable(s) for that specific Nakshatra pada",
            "Browse names — traditional, modern, or family-meaningful — that begin with the recommended syllable",
            "Many families choose a 'Rashi name' (used for astrological/ceremonial purposes) and a separate 'calling name' used in daily life — both are valid traditions",
            "The chosen name is often formally announced during the Namkaran ceremony, sometimes whispered into the baby's ear by the father or grandparent",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Rashi Name vs Calling Name</h2>
          <p style={s}>It's common in many Indian families for a child to have two names: a formal "Rashi name" determined by astrological calculation (used in religious ceremonies, official documents in some cases, and horoscope matching for future events like marriage), and a "calling name" or nickname chosen for everyday use — sometimes based on family preference, a beloved relative's name, or simply how it sounds. Both names are equally valid, and many families find this dual-naming tradition a meaningful blend of astrological tradition and personal choice.</p>

          <h2 style={h2}>Beyond Astrology — Other Naming Traditions</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Naming after grandparents or ancestors — a common way to honor family lineage",
              "Names inspired by the day, festival, or significant event the child was born on",
              "Names reflecting family deities or the family's Ishta Devata (chosen deity)",
              "Regional naming conventions — many South Indian families use the father's name or grandfather's name as part of the child's full name",
              "Sequential or rhyming names for siblings, a tradition in some families",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Record the story behind your child's name — whether it came from a Nakshatra calculation, a beloved grandparent, or a special meaning chosen by the parents. These naming stories are often forgotten within a generation but are deeply meaningful to look back on.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Planning the Namkaran ceremony itself? See our <Link href="/blog/namkaran-naming-ceremony-guide" style={{ color:C.saffron, fontWeight:600 }}>complete Namkaran guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="hindu-baby-naming-rashi-nakshatra-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>⭐</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Save the story behind your child&apos;s name</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Document Nakshatra details, naming ceremonies, and the meaning behind names on OurParampara — for your child to read one day.</p>
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

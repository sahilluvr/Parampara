import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Diwali Puja Steps for Family — Lakshmi Puja Guide | Parampara",
  description: "Complete Diwali Lakshmi-Ganesha puja steps for families with samagri list, muhurat timing, rangoli tips, and how to involve children.",
  keywords: "Diwali puja steps, Lakshmi puja guide, Diwali samagri list, Diwali puja at home, Lakshmi Ganesh puja Diwali, Diwali vidhi",
  openGraph: { title: "Diwali Puja Steps for Family — Lakshmi Puja Guide", description: "Complete Diwali puja guide with samagri list and muhurat.", url: "https://www.ourparampara.com/blog/diwali-puja-steps-for-family", siteName: "Parampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=diwali-puja-steps-for-family", width: 1200, height: 630, alt: "diwali-puja-steps-for-family" }] },
  alternates: { canonical: "https://www.ourparampara.com/blog/diwali-puja-steps-for-family" },
};

export default function Page() {
  const s = { fontSize:16, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:26, fontWeight:600, color:C.charcoal, marginBottom:16, marginTop:40 };
  const li = { fontSize:15, color:"#374151", lineHeight:1.8, marginBottom:8 };

  return (
    <>
      <BlogStructuredData
        slug="diwali-puja-steps-for-family"
        title="Diwali Puja Steps for Family — Lakshmi Puja Guide | Parampara"
        description="Complete Diwali Lakshmi-Ganesha puja steps for families with samagri list, muhurat timing, rangoli tips, and how to involve children."
        date="2026-06-01"
        category="Festival Guide"
        faqs={[
          { q: "What time should Diwali Lakshmi puja be done?", a: "Diwali Lakshmi puja is ideally performed during Pradosh Kaal (1.5 hours after sunset) and Sthir Lagna. The exact time varies by year and location — consult a local panchang for the specific muhurat." },
          { q: "What is needed for Diwali Lakshmi puja?", a: "Essential items include a Lakshmi-Ganesha idol, roli, akshat, yellow flowers, coins, sweets, diya, ghee, incense, and a clean decorated altar. Rangoli at the entrance is traditional." },
          { q: "How do you involve children in Diwali puja?", a: "Children can help decorate diyas, make rangoli, arrange flowers on the altar, ring the bell during aarti, and distribute prasad. Explaining the significance of each step makes it educational." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:"linear-gradient(135deg,#2D1810,#18181B)" }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Festival Guide</span>
            </div>
            <div style={{ fontSize:48, marginBottom:16 }}>🪔</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:16 }}>Diwali Puja Steps for Family — Lakshmi Puja Complete Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 3, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"48px 24px 80px" }}>
          <p style={s}>Diwali — the festival of lights — is the most celebrated Hindu festival, but many families feel uncertain about performing the Lakshmi puja correctly at home. This guide covers everything from the samagri list to the exact puja steps.</p>

          {/* Quick answer box — for AI engine citation */}
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Diwali Lakshmi puja involves 5 steps: (1) Clean and decorate the altar with flowers and rangoli, (2) Light diyas during Pradosh Kaal (1.5 hours after sunset), (3) Place Lakshmi-Ganesha idols with coins and rice, (4) Offer flowers, sweets, and fruits, (5) Recite Lakshmi Stuti or Chalisa and perform aarti. The puja takes 30-45 minutes and can be performed by any family member.</p>
          </div>


          <h2 style={h2}>Diwali Muhurat 2026</h2>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.3)`, borderRadius:14, padding:"20px 24px", marginBottom:24 }}>
            <p style={{ fontSize:14, color:C.charcoal, margin:0 }}>
              <strong>Diwali 2026:</strong> October 20, 2026<br/>
              <strong>Lakshmi Puja Muhurat:</strong> Evening — check your local pandit or a Panchang app for exact timing in your city<br/>
              <strong>Best time:</strong> Pradosh Kaal (just after sunset) on Amavasya
            </p>
          </div>

          <h2 style={h2}>Complete Samagri List</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"20px 24px", marginBottom:24 }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {["Lakshmi-Ganesha idol or photo","Red cloth for chowki","Clay diyas (at least 21)","Mustard oil + cotton wicks","Flowers — marigold, rose","Lotus (if available)","Durva grass","Roli, kumkum, haldi","Akshat (unbroken rice)","Paan and supari","Coconut","Fruits (5 types)","Sweets — kaju katli, ladoo","Coins — gold/silver if available","Camphor for aarti","Incense sticks","Rangoli colors","Kesar (saffron) for tilak"].map(i=>(
                <div key={i} style={{ display:"flex", gap:6 }}><span style={{ color:C.saffron }}>✓</span><span style={{ fontSize:13, color:C.charcoal }}>{i}</span></div>
              ))}
            </div>
          </div>

          <h2 style={h2}>Diwali Puja — Step by Step</h2>
          {[
            ["Clean and decorate the home","On the day of Diwali, clean the entire house. Fill every corner — Lakshmi is said to only enter clean homes. Place rangoli at the main entrance and doorstep. Hang mango leaf toran."],
            ["Set up the puja sthal","Place the Lakshmi-Ganesha idol on a red cloth on the chowki. Arrange all samagri neatly. Fill a small kalash with water, place mango leaves and a coconut on it."],
            ["Light the diyas","Just before the puja, light all diyas around the home — entrance, windows, balcony, kitchen. The home should be glowing with light when Lakshmi arrives."],
            ["Sankalp and ganesh puja","Begin with Ganesh puja. Offer flowers, akshat, and roli to Ganesha. This ensures no obstacles during the puja."],
            ["Kalash puja","Perform puja of the water kalash. Offer flowers and akshat. This represents the presence of all rivers and goddesses."],
            ["Lakshmi puja","This is the main puja. Offer flowers, akshat, roli, haldi, durva grass to Maa Lakshmi. Offer sweets, coins, and fruits. Chant Lakshmi mantras or Shri Sukta (16 verses)."],
            ["Ganesha puja (again)","Offer separately to Ganesha — he and Lakshmi are always worshipped together on Diwali."],
            ["Aarti","Perform Lakshmi aarti with camphor. All family members stand and sing together. Then perform Ganesha aarti."],
            ["Prasad distribution","Distribute sweets and fruits to all family members. Offer coins at Lakshmi's feet symbolizing welcoming prosperity."],
          ].map(([title,desc],i)=>(
            <div key={i} style={{ display:"flex", gap:16, marginBottom:20 }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:"#FFFBEB", border:"2px solid #B45309", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:"#B45309", flexShrink:0, marginTop:2 }}>{i+1}</div>
              <div><h3 style={{ fontFamily:F.serif, fontSize:17, fontWeight:600, color:C.charcoal, marginBottom:6, marginTop:0 }}>{title}</h3><p style={s}>{desc}</p></div>
            </div>
          ))}

          <h2 style={h2}>Lakshmi Mantras</h2>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(180,83,9,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:24 }}>
            <p style={{ fontSize:14, fontFamily:"Georgia,serif", color:C.charcoal, lineHeight:2, margin:0 }}>
              <strong>Lakshmi Beej Mantra:</strong><br/>
              ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः॥<br/><br/>
              <strong>Simple Lakshmi prayer:</strong><br/>
              Om Mahalakshmyai Namah
            </p>
          </div>

          <h2 style={h2}>How to Involve Children</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            {["Let children light the diyas (supervised)","Have them draw the rangoli","Give children the task of placing flowers on the idol","Let them ring the ghanta during aarti","Explain each step in simple language as you do it","Create a Diwali ritual book with their handprints each year"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="diwali-puja-steps-for-family" category="Festival Guide"/>

        <section style={{ background:"#FFFBEB", borderTop:"1px solid rgba(180,83,9,0.15)", padding:"48px 24px" }}>
          <div style={{ maxWidth:600, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:32, marginBottom:12 }}>🪔</p>
            <h2 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:10 }}>Document your family&apos;s Diwali tradition</h2>
            <p style={{ fontSize:15, color:C.gray, marginBottom:24 }}>Every family does Diwali slightly differently. Save your family&apos;s version for generations to come.</p>
            <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"13px 28px", borderRadius:12, fontSize:14, fontWeight:600, textDecoration:"none" }}>
              Save in Parampara — Free →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

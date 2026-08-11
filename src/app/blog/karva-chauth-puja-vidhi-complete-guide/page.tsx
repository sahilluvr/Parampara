import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Karva Chauth Puja Vidhi — Complete Guide with Muhurat & Story | OurParampara",
  description: "Complete Karva Chauth guide — sargi rituals, fasting rules, puja vidhi, moon sighting time, katha, and the thali setup explained step by step.",
  keywords: "Karva Chauth puja vidhi, Karva Chauth fasting rules, Karva Chauth katha, sargi items list, Karva Chauth moonrise time, Karva Chauth thali",
  openGraph: {
    title: "Karva Chauth Puja Vidhi — Complete Guide with Muhurat & Story | OurParampara",
    description: "Complete Karva Chauth guide — sargi rituals, fasting rules, puja vidhi, moon sighting time, katha, and the thali setup explained step by step.",
    url: "https://www.ourparampara.com/blog/karva-chauth-puja-vidhi-complete-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=karva-chauth-puja-vidhi-complete-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=karva-chauth-puja-vidhi-complete-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/karva-chauth-puja-vidhi-complete-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="karva-chauth-puja-vidhi-complete-guide"
        title="Karva Chauth Puja Vidhi — Complete Guide with Muhurat & Story | OurParampara"
        description="Complete Karva Chauth guide — sargi rituals, fasting rules, puja vidhi, moon sighting time, katha, and the thali setup explained step by step."
        date="2026-06-01"
        category="Festival Guide"
        faqs={[
          { q: "What time does Karva Chauth fast end?", a: "The Karva Chauth fast ends after moonrise on the night of Karva Chauth. The wife sights the moon through a sieve, then sees her husband's face through the same sieve before breaking the fast." },
          { q: "What items are needed for Karva Chauth puja?", a: "You need a thali decorated with diya, kumkum, mehendi, bangles, fruits, sweets, a karva (clay pot) filled with water, a sieve (chalni), and a picture or idol of the moon and Gauri." },
          { q: "Can working women do Karva Chauth fast?", a: "Yes. Many working women observe a modified fast — consuming water or fruits while at work, completing the puja and fast-breaking ritual in the evening after moonrise." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Festival Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🌕</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Karva Chauth Puja Vidhi — Complete Guide with Muhurat & Story</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 11, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Karva Chauth is one of the most cherished festivals for married Hindu women across North India — a day-long fast from sunrise to moonrise, observed by wives for the long life and wellbeing of their husbands. The day is rich with rituals, from the pre-dawn sargi to the emotional moment of viewing the moon through a sieve. Here's everything you need for a meaningful Karva Chauth.</p>

          {/* Quick answer box — for AI engine citation */}
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Karva Chauth fast is observed from sunrise to moonrise. At moonrise, the wife sights the moon through a sieve (chalni), then sees her husband's face through the same sieve, and he gives her water to break the fast. The puja thali contains diya, kumkum, mehendi, bangles, fruits, sweets, a karva (clay pot), and a sieve. Moonrise time varies by city — check a local panchang.</p>
          </div>


          <h2 style={h2}>What is Karva Chauth?</h2>
          <p style={s}>Karva Chauth falls on the fourth day after the full moon (Purnima) in the month of Kartik, usually in October or November. "Karva" refers to the earthen pot used in the puja, and "Chauth" means the fourth day. Married women observe a nirjala vrat (fast without water) from sunrise until they sight the moon at night, after which they break their fast by drinking water offered by their husbands.</p>

          <h2 style={h2}>Sargi — The Pre-Dawn Ritual</h2>
          <p style={s}>The day begins before sunrise with sargi — a special meal prepared and given by the mother-in-law to her daughter-in-law. This is eaten before the fast begins (before sunrise) and traditionally includes a mix of foods to sustain energy through the day.</p>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>Common sargi items:</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {["Mathri (savory crackers)","Fenia / vermicelli with milk","Dry fruits — almonds, cashews","Coconut","Fruits — banana, apple","Sweets — halwa, ladoo","Henna (mehendi) for the day","Bangles or jewellery gift"].map(i=>(
                <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                  <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 style={h2}>Karva Chauth Fasting Rules</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "The fast (vrat) starts at sunrise and ends only after sighting the moon at night",
              "It is a nirjala vrat — no food or water is consumed during the day",
              "Pregnant women, elderly, or those with health conditions may modify the fast — drinking water or eating fruits is acceptable with family blessing",
              "Many women apply mehendi the day before or on the morning of Karva Chauth",
              "Wearing red or the wedding saree/lehenga is traditional",
              "Some women observe the fast for the first time after marriage — called the first Karva Chauth — with extra rituals and gifts from in-laws",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Karva Chauth Puja Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Karva (earthen pot) with lid","Sieve (chalni)","Diya and oil/ghee","Roli, chawal (rice)","Mathri and sweets for prasad","Henna","Matthi or halwa for puja thali","Flowers","Incense sticks","Kalash with water","Photo or idol of Goddess Parvati","Currency notes/coins for daan"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Puja Vidhi</h2>
          {[
            "Wake up before sunrise and eat sargi sent by the mother-in-law",
            "Take a bath and dress in festive clothes — red is traditional",
            "Apply mehendi if not done the previous day",
            "In the evening, gather with other women of the family/neighbourhood for the group puja",
            "Set up the puja thali with karva, diya, roli, rice, flowers, and sweets",
            "Listen to or narrate the Karva Chauth Vrat Katha (story)",
            "Perform aarti together as a group",
            "Exchange thalis with other women in a circular pattern (baya phera) — a symbol of shared blessings",
            "After moonrise, view the moon through a sieve, then look at your husband's face through the same sieve",
            "Offer water (arghya) to the moon",
            "The husband offers the first sip of water and food to break the fast",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>The Karva Chauth Katha</h2>
          <p style={s}>The most popular story told on this day is of Veervati, a young queen who fasted for her husband's long life. Pressured by her brothers to break her fast early by tricking her with a false moonrise, she ate before the real moonrise — and her husband fell gravely ill. Through penance and devotion, she eventually restored his life, reinforcing the belief in the power of the vrat when observed with sincerity. Many regional variations of this story exist — ask your elders which version your family tells.</p>

          <h2 style={h2}>Moonrise Timing</h2>
          <p style={s}>The exact moonrise time varies by city and changes every year — it typically falls between 7:30 PM and 8:30 PM IST. Always check a local Panchang or astrology app for the precise time in your city, as the moment of moon sighting is considered the most important part of the ritual.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Every family has its own version of the Karva Chauth katha and its own sargi recipes passed down through generations. Record your mother's or grandmother's version this year — these small variations are what make your family's traditions unique.</p>
          </div>
        
<h2 style={h2}>Karwa Chauth for NRI Families</h2>
          <p style={s}>NRI women observe Karwa Chauth in their local time — the fast is maintained from their local sunrise to their local moonrise. Indian grocery stores in the UK, USA, Canada, and Australia stock specific Karwa Chauth items (karwa pots, red bangles, chalni sieves, Sargi packets) in the weeks before the festival. Indian women's communities abroad gather for communal Karwa Chauth events — celebrating together and waiting for the moon. The festival has become a global marker of North Indian female cultural identity.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Karwa Chauth traditions — the specific Sargi items provided by your family's mother-in-law, the specific moon sighting location, the specific puja thali that has been in the family. Many women describe their first Karwa Chauth as one of the most meaningful initiations into the extended family — worth recording in detail.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="karva-chauth-puja-vidhi-complete-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌕</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family&apos;s Karva Chauth traditions</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your family&apos;s sargi recipes, katha versions, and rituals on OurParampara — so they&apos;re never lost.</p>
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

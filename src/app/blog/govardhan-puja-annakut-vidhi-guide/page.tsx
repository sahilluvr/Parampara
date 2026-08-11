import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Govardhan Puja (Annakut) — Complete Guide to Vidhi, Significance & the Day After Diwali | OurParampara",
  description: "Complete Govardhan Puja guide — the story of Krishna lifting Govardhan Hill, Annakut food-mountain tradition, step-by-step puja vidhi, samagri list, and how families celebrate the day after Diwali.",
  keywords: "Govardhan Puja vidhi, Annakut tradition, Govardhan Puja significance, Govardhan Puja samagri list, Govardhan Puja date 2026, Krishna Govardhan Hill story, Govardhan Puja at home",
  openGraph: {
    title: "Govardhan Puja (Annakut) — Complete Guide to Vidhi, Significance & the Day After Diwali | OurParampa",
    description: "Complete Govardhan Puja guide — the story of Krishna lifting Govardhan Hill, Annakut food-mountain tradition, step-by-step puja vidhi, samagri list, and how families celebrate the day after Diwali.",
    url: "https://www.ourparampara.com/blog/govardhan-puja-annakut-vidhi-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=govardhan-puja-annakut-vidhi-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=govardhan-puja-annakut-vidhi-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/govardhan-puja-annakut-vidhi-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="govardhan-puja-annakut-vidhi-guide"
        title="Govardhan Puja (Annakut) — Complete Guide to Vidhi, Significance & the Day After Diwali | OurParampara"
        description="Complete Govardhan Puja guide — the story of Krishna lifting Govardhan Hill, Annakut food-mountain tradition, step-by-step puja vidhi, samagri list, and how families celebrate the day after Diwali."
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Festival Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>⛰️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Govardhan Puja (Annakut) — Complete Guide to Vidhi, Significance &amp; the Day After Diwali</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 29, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Govardhan Puja, also known as Annakut ("mountain of food"), falls on the day after Diwali (Kartik Shukla Pratipada) and commemorates Lord Krishna's victory over Indra, the god of rain and storms. Families build a symbolic mountain of food offerings and worship a representation of Govardhan Hill — a celebration of gratitude, protection, and abundance.</p>

          <h2 style={h2}>The Story Behind Govardhan Puja</h2>
          <p style={s}>According to the Bhagavata Purana, Indra, angered by Krishna's teachings that discouraged excessive ritual worship of him, unleashed torrential rains upon Vrindavan to punish its residents. Krishna lifted the entire Govardhan Hill on his little finger, providing shelter for the villagers and their cattle for seven days and nights, until Indra acknowledged Krishna's divinity and the rains ceased. The festival celebrates this act of protection and Krishna's assurance that devotion matters more than fear-based ritual.</p>

          <h2 style={h2}>When is Govardhan Puja</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 6px" }}>The day after Diwali</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Govardhan Puja falls on Kartik Shukla Pratipada — the first day of the bright fortnight of Kartik, immediately following Diwali (Lakshmi Puja night). It's also celebrated as Annakut in many regions and coincides with Bhai Dooj preparations in some families.</p>
          </div>

          <h2 style={h2}>Govardhan Puja Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Cow dung (for making the Govardhan Hill model)","Krishna idol or photo","Flowers — especially tulsi leaves","Diya and ghee/oil","Roli, chandan, akshat","A variety of cooked food items for Annakut (56 or 108 dishes traditionally)","Sweets — especially milk-based sweets","Fruits","Incense sticks","Cow (real or symbolic) for Govardhan puja","Small lamps to decorate the hill model","Panchamrit"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Step-by-Step Puja Vidhi</h2>
          {[
            "Early morning, take a purifying bath and wear clean/festive clothes",
            "Make a small hill-shaped model representing Govardhan Hill — traditionally made of cow dung, though many families now use clay, rice flour dough, or simply decorate a photo/idol",
            "Decorate the Govardhan model with flowers, small lamps, and grains — representing the hill's forests and the cows that grazed there",
            "Place small figurines of cows, gopas (cowherds), and Krishna around the model",
            "Prepare Annakut — a large spread of varied food items (sweet and savory), traditionally said to number 56 or 108 dishes, symbolizing the food Krishna's mother prepared for him",
            "Arrange the Annakut spread before the Govardhan model and Krishna idol like an offering",
            "Perform aarti, circling the diya around the Govardhan model and food offerings",
            "Many families also worship cows on this day — feeding and decorating them with garlands and tilak, in honor of Krishna's role as a cowherd protector",
            "Distribute the Annakut prasad among family members, neighbours, and the community",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Simple Home Version</h2>
          <p style={s}>For families without access to cow dung or large kitchens, a simplified Annakut works beautifully: shape a small "hill" from rice flour dough or clay, decorate it with marigold petals and a few small diyas, and arrange whatever dishes you've already prepared for the festival season around it — even 5-7 items capture the spirit. The emphasis is on gratitude and abundance, not the exact count of dishes.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Photograph your Annakut spread each year — over time, this becomes a wonderful record of your family's evolving festival recipes and the Diwali-season dishes that became traditions.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Continuing the Diwali season? See our <Link href="/blog/diwali-puja-steps-for-family" style={{ color:C.saffron, fontWeight:600 }}>Diwali Lakshmi Puja guide</Link> and <Link href="/blog/chhath-puja-vidhi-rituals-complete-guide" style={{ color:C.saffron, fontWeight:600 }}>Chhath Puja guide</Link>.</p>
          </div>
        
<h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Govardhan Parikrama</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Govardhan Hill in Braj (Uttar Pradesh) is itself a sacred pilgrimage site — worshipped as the physical body of Krishna. The Govardhan Parikrama (circumambulation of the hill — 21km) is performed by millions of devotees annually, particularly on Govardhan Puja day when the numbers reach lakhs. The entire Braj region experiences its most sacred day on this occasion, with the Mathura-Vrindavan-Govardhan corridor packed with pilgrims from across India.</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Celebrate Govardhan Puja the day after Diwali</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>In the rush of Diwali preparations and celebrations, Govardhan Puja is often overlooked — but the day after Diwali has its own specific meaning and practice. Make an Annakut with your family, even a small one, and distribute the food.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="govardhan-puja-annakut-vidhi-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>⛰️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family&apos;s Annakut spread</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save your festival recipes, photos, and traditions on OurParampara — for the whole family to enjoy every year.</p>
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

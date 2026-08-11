import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pongal — Complete Guide to Tamil Nadu's Four-Day Harvest Festival | OurParampara",
  description: "Complete Pongal guide — four days explained (Bhogi, Thai Pongal, Mattu Pongal, Kaanum Pongal), Pongal dish recipe, Kolam rangoli, and Tamil family traditions.",
  keywords: "Pongal festival guide, Pongal four days explained, Thai Pongal rituals, Mattu Pongal significance, Pongal date 2027, Pongal dish recipe, Tamil harvest festival",
  openGraph: { title: "Pongal — Tamil Nadu's Four-Day Harvest Festival Guide", description: "Four days explained — Bhogi, Thai Pongal, Mattu Pongal, Kaanum Pongal — with recipes, rituals, and Tamil family traditions.", url: "https://www.ourparampara.com/blog/pongal-festival-guide-four-days-rituals", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=pongal-festival-guide-four-days-rituals", width: 1200, height: 630 }], type: "article" },
  twitter: { card: "summary_large_image", images: ["https://www.ourparampara.com/api/og?slug=pongal-festival-guide-four-days-rituals"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/pongal-festival-guide-four-days-rituals" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="pongal-festival-guide-four-days-rituals" title="Pongal — Complete Guide to Tamil Nadu's Four-Day Harvest Festival" description="Complete Pongal guide — four days explained, Pongal dish recipe, Kolam rangoli, and Tamil family traditions." date="2026-04-06" category="Festival Guide"
        faqs={[
          { q: "When is Pongal 2027?", a: "Pongal 2027 begins on January 14, 2027 (Thai Pongal, the main day). Bhogi Pongal is January 13, Mattu Pongal is January 15, and Kaanum Pongal is January 16." },
          { q: "What is the Pongal dish?", a: "The Pongal dish is a sweet rice dish made by boiling freshly harvested rice with milk and jaggery in a clay pot until it overflows — the overflow symbolizes abundance and prosperity. It is offered to the Sun God before being shared as prasad." },
          { q: "What is the difference between Pongal and Makar Sankranti?", a: "Both Pongal and Makar Sankranti celebrate the Sun's transition into Capricorn (Makara) on January 14 and are harvest festivals. Pongal is specific to Tamil Nadu with its own four-day structure and rituals, while Makar Sankranti is the pan-Indian name for the same solar event, celebrated differently across regions." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🍚</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Pongal — Complete Guide to Tamil Nadu&apos;s Four-Day Harvest Festival</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>April 6, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Pongal is Tamil Nadu&apos;s most important festival — a four-day harvest celebration observed in mid-January, marking the Sun&apos;s transition into Capricorn and the Tamil month of Thai. The word "Pongal" means "to boil over" or "overflow" — referencing the central ritual of boiling freshly harvested rice until it overflows the pot, symbolizing abundance. Pongal is equally celebrated by Tamil communities worldwide, and unlike many Hindu festivals, it is observed across religious communities in Tamil Nadu.</p>

          <h2 style={h2}>The Four Days of Pongal</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:20 }}>
            {[["Day 1 — Bhogi Pongal (Jan 13)","Bhogi marks the last day of Margazhi month. Old and unused items are discarded or burned in a bonfire (Bhogi Mantalu) — symbolizing letting go of the old to make way for the new. Children throw sesame seeds and dried cow dung cakes into the fire while singing folk songs."],["Day 2 — Thai Pongal (Jan 14)","The main Pongal day. New rice is cooked in a clay pot on an open fire, watched until it boils over — the overflow signals a prosperous year ahead. The dish is offered to Surya (the Sun God) with sugarcane, turmeric plant, and banana. Kolam (rangoli made with rice flour) is drawn at the entrance."],["Day 3 — Mattu Pongal (Jan 15)","Dedicated to cattle — cows and bulls are bathed, decorated with flowers and painted horns, and worshipped as essential partners in the harvest. Jallikattu (the traditional bull-taming sport) is held in many villages on this day, particularly in Madurai district."],["Day 4 — Kaanum Pongal (Jan 16)","A day for outings and visiting relatives — the word \"Kaanum\" means \"to see/visit.\" Families gather at rivers, temples, or parks. Sisters pray for their brothers&apos; wellbeing in a ritual similar to Bhai Dooj."]].map(([k,v])=>(
              <div key={k} style={{ padding:"14px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:14, fontWeight:700, color:C.saffron, margin:"0 0 6px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>The Pongal Dish — Recipe</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Ingredients (sweet Sakkarai Pongal):</p>
            <p style={{ fontSize:13, color:"#374151", margin:"0 0 12px" }}>Raw rice, split yellow moong dal, jaggery, milk, water, ghee, cashews, raisins, cardamom, dried ginger</p>
            <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Method:</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Wash and soak rice and dal together. Boil in a mixture of milk and water in a clay pot on an open flame, stirring until soft and thick. Add melted jaggery, mix well. Fry cashews and raisins in ghee and fold in with cardamom. The dish is traditionally cooked on the outdoor fire, with the "Pongal O Pongal!" chant called out as it boils over.</p>
          </div>

          <h2 style={h2}>Kolam — The Threshold Art</h2>
          <p style={s}>Kolam is the traditional Tamil art form of drawing geometric patterns at the home entrance using rice flour — renewed daily during Pongal and many other auspicious days. Pongal Kolams are especially elaborate, often featuring the sun, lotus flowers, and birds. The art is typically passed from mother to daughter, and many Tamil families have distinctive Kolam styles that are considered family heritage. In diaspora communities, Kolam competitions and collaborative drawing sessions have become a way of keeping the tradition alive.</p>

          <h2 style={h2}>Pongal Beyond Tamil Nadu</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Pongal is celebrated as Sankranti in Andhra Pradesh and Telangana with its own distinct traditions","The Sri Lankan Tamil community observes Pongal as Thai Pongal, one of their most significant annual celebrations","Tamil diaspora communities in Singapore, Malaysia, USA, UK, and Canada organize community Pongal events with Sadhya meals and cultural programs","Many Tamil associations abroad organize Kolam competitions and Pongal cooking demonstrations for younger generations","Jallikattu has become a symbol of Tamil cultural identity — even Tamil communities abroad follow the sport on this day"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family&apos;s specific Kolam patterns — photograph them each Pongal and note who taught the design. Many family Kolam patterns are unique and represent decades of artistic tradition passed through women of the household.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Also celebrates January? See our <Link href="/blog/makar-sankranti-festival-guide-rituals-significance" style={{ color:C.saffron, fontWeight:600 }}>Makar Sankranti guide</Link> — the pan-Indian equivalent of the same solar event.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="pongal-festival-guide-four-days-rituals" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🍚</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Document your family&apos;s Pongal traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Save Kolam patterns, Pongal recipes, and harvest memories on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

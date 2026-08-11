import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Onam — Complete Guide to Kerala's Harvest Festival, Sadhya & Pookalam | OurParampara",
  description: "Complete Onam guide — the legend of King Mahabali, Pookalam floral designs, Onam Sadhya feast traditions, Vallamkali boat races, and how families celebrate.",
  keywords: "Onam festival guide, Onam Sadhya traditions, Pookalam designs, King Mahabali legend, Onam date 2026, Kerala harvest festival, Onam rituals significance",
  openGraph: { title: "Onam — Complete Guide to Kerala's Harvest Festival", description: "The legend of King Mahabali, Pookalam, Onam Sadhya, and how Kerala families celebrate.", url: "https://www.ourparampara.com/blog/onam-festival-guide-significance-sadhya-pookalam", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=onam-festival-guide-significance-sadhya-pookalam", width: 1200, height: 630 }], type: "article" },
  twitter: { card: "summary_large_image", images: ["https://www.ourparampara.com/api/og?slug=onam-festival-guide-significance-sadhya-pookalam"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/onam-festival-guide-significance-sadhya-pookalam" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="onam-festival-guide-significance-sadhya-pookalam" title="Onam — Complete Guide to Kerala's Harvest Festival, Sadhya & Pookalam" description="Complete Onam guide — the legend of King Mahabali, Pookalam floral designs, Onam Sadhya feast traditions, Vallamkali boat races, and how families celebrate." date="2026-04-02" category="Festival Guide"
        faqs={[
          { q: "When is Onam 2026?", a: "Onam 2026 (Thiruvonam) falls on August 26, 2026. The full ten-day celebration begins on Atham and culminates on Thiruvonam, the main Onam day." },
          { q: "What is Onam Sadhya?", a: "Onam Sadhya is a grand vegetarian feast served on a banana leaf, traditionally featuring 26 or more dishes including rice, sambar, aviyal, olan, pachadi, payasam, and banana chips. It is the centerpiece of Onam celebrations." },
          { q: "What is Pookalam?", a: "Pookalam is a floral carpet (rangoli made with flowers) created during Onam. Fresh flowers are arranged in concentric circles each day, growing more elaborate over the ten days of the festival." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌸</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Onam — Complete Guide to Kerala&apos;s Harvest Festival, Sadhya &amp; Pookalam</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>April 2, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Onam is Kerala's most beloved festival — a ten-day harvest celebration that marks the mythical annual return of King Mahabali, the beloved demon king whose reign is said to have been a golden era of equality and prosperity. Observed in the Malayalam month of Chingam (typically August-September), Onam brings together the entire Kerala community regardless of religion, with Pookalam (flower carpets), Onam Sadhya (grand feast), and Vallamkali (snake boat races) at its heart.</p>

          <h2 style={h2}>The Legend of King Mahabali</h2>
          <p style={s}>According to Kerala tradition, Mahabali was a just and generous king who ruled over a realm so prosperous and equal that the gods grew jealous. Lord Vishnu, taking the form of the dwarf Vamana, visited Mahabali during a yajna and asked for three paces of land. When granted, Vamana grew to cover earth and sky in two steps, then placed his foot on Mahabali's head — sending him to the underworld. But so great was Mahabali's devotion and virtue that Vishnu granted him one wish: to return to visit his beloved subjects once a year. Onam celebrates this annual return — and the belief that during Onam, Mahabali's spirit is present among the people he loved.</p>

          <h2 style={h2}>The Ten Days of Onam</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Atham (Day 1)","The festival begins — the first ring of the Pookalam is laid. Excitement builds across Kerala."],["Days 2–8","Pookalam grows more elaborate each day. Markets fill with new clothes (Onakkodi) and preparations for the feast begin."],["Uthradom (Day 9)","Eve of Onam — Mahabali is believed to arrive on this day. The most intense preparations happen. Onam gifts are exchanged."],["Thiruvonam (Day 10)","The main Onam day — Pookalam is completed, Onam Sadhya is served, and families gather for the full celebration."],["Avittom & Chathayam","Days 11 and 12 — the festival concludes, and Mahabali returns to the underworld for another year."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", gap:14, padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:160, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Pookalam — The Floral Carpet</h2>
          <p style={s}>Pookalam is the Onam tradition most instantly recognizable outside Kerala — a floor decoration made entirely from fresh flowers, arranged in concentric circles. Starting with a simple ring on Atham, a new layer of flowers is added each day, building into an elaborate mandala by Thiruvonam. Traditional Pookalams use flowers sourced locally: thumba (white), mukkutti (yellow), chethi (red), and kanikkonna (golden shower tree flowers). Making Pookalam together is often a neighborhood activity — women and children gathering flowers in the morning and arranging them collaboratively through the day.</p>

          <h2 style={h2}>Onam Sadhya — The Grand Feast</h2>
          <p style={s}>The Onam Sadhya is one of India's most elaborate vegetarian meals — traditionally 26 or more dishes served on a fresh banana leaf, in a specific order and placement that varies slightly by district. The meal is eaten seated on the floor, beginning from the left side of the leaf.</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Parippu (dal) + ghee","The first item served — poured over rice to begin the meal"],["Sambar","A tamarind-lentil vegetable stew"],["Rasam","A thin pepper-tamarind digestive soup"],["Aviyal","Mixed vegetables in coconut-curd gravy — a Sadhya essential"],["Olan","Ash gourd in coconut milk — subtle and calming"],["Thoran","Stir-fried vegetable with grated coconut"],["Kichadi","Curd-based vegetable dish"],["Pachadi","Fruit or vegetable in sweet curd"],["Inji puli","Ginger-tamarind pickle — sharp and essential"],["Payasam","The sweet finale — at least 2-3 varieties served"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Vallamkali — The Snake Boat Races</h2>
          <p style={s}>Vallamkali (snake boat races) are held on Kerala's backwaters during the Onam season — the most famous being the Nehru Trophy Boat Race on Punnamada Lake in Alappuzha. Long, intricately carved boats (Chundan Vallam) carrying over 100 oarsmen race to drumbeats and the iconic Vanchipattu (boat song). For diaspora families who can't attend in person, watching the Nehru Trophy race broadcast has become an annual Onam tradition.</p>

          <h2 style={h2}>Onam for Kerala Families Abroad</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Diaspora Kerala associations in the US, UK, Gulf, and Australia organize community Onam Sadhya events annually","Online flower delivery for Pookalam arrangements has made the tradition accessible globally","Many families cook a simplified Sadhya at home — even 5-7 key dishes on a banana leaf captures the spirit","Virtual Onam gatherings over video call, with each branch of the family cooking their own Sadhya simultaneously","Children born outside Kerala often encounter Onam first through school cultural events — recording the family's tradition helps deepen their connection"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Every Kerala family has their own Sadhya recipe variations — the exact proportions in the payasam, a secret ingredient in the aviyal, or which flower combinations make the best Pookalam. Document these specifics; they are what distinguish your family&apos;s Onam from any other.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="onam-festival-guide-significance-sadhya-pookalam" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌸</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s Onam traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Save Pookalam photos, Sadhya recipes, and Onam memories on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

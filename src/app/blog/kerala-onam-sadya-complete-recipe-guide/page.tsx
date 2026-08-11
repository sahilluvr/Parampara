import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kerala Onam Sadya — Complete Recipe Guide to All 26 Dishes | OurParampara",
  description: "Complete guide to the Onam Sadya feast — all 26 traditional dishes explained with recipes, the order they are served on the banana leaf, and how to prepare an authentic Sadya at home or abroad.",
  keywords: "Onam Sadya recipe guide, 26 Sadya dishes, Onam feast complete guide, Kerala Sadya banana leaf, Onam Sadya order serving, authentic Sadya recipe, Kerala Onam food traditions",
  openGraph: { title: "Kerala Onam Sadya — Complete Recipe Guide to All 26 Dishes", description: "Complete guide to the Onam Sadya feast — all 26 traditional dishes explained with recipes, the order they are served on the banana leaf, and how to prepare an authentic Sadya at home or abroad.", url: "https://www.ourparampara.com/blog/kerala-onam-sadya-complete-recipe-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=kerala-onam-sadya-complete-recipe-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=kerala-onam-sadya-complete-recipe-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/kerala-onam-sadya-complete-recipe-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="kerala-onam-sadya-complete-recipe-guide" title="Kerala Onam Sadya — Complete Recipe Guide to All 26 Dishes" description="Complete guide to the Onam Sadya feast — all 26 traditional dishes explained with recipes, the order they are served on the banana leaf, and how to prepare an authentic Sadya at home or abroad." date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "How many dishes are in Onam Sadya and what are the key ones?", a: "A traditional Onam Sadya has between 26 and over 64 dishes depending on the region and family. The essential dishes that no Sadya is complete without: Parippu (dal with ghee), Sambar, Rasam, Aviyal (mixed vegetables in coconut-curd), Olan (ash gourd in coconut milk), Thoran (stir-fried vegetable with coconut), Kichadi (curd-vegetable dish), Pachadi (sweet curd dish), Inji puli (ginger-tamarind pickle), and Payasam (at least two types)." },
          { q: "In what order are Onam Sadya dishes served on the banana leaf?", a: "The banana leaf is placed with the tip pointing left. Pickles and chutneys go on the upper left. Banana chips and pappadam go on the upper right. Then dishes are served in a specific sequence: parippu (dal) first with ghee on rice, then vegetables, then sambar, then rasam, then more vegetables, and finally payasam. The meal progresses from savoury to sweet." },
          { q: "How do NRI families make Onam Sadya abroad?", a: "Most NRI families make a simplified Sadya with 8-12 key dishes rather than the full 26. The must-haves are: Aviyal, Olan, Sambar, Rasam, Thoran, one Kichadi or Pachadi, Inji puli, Pappadam, and at least one Payasam. Banana leaves can be found at South Indian and Sri Lankan grocery stores in most Western cities. The cooking is often a family project spread over two days." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Heritage Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🍃</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Kerala Onam Sadya — Complete Recipe Guide to All 26 Dishes</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>9 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>The Onam Sadya is one of the great feast traditions of the world — 26 or more dishes, each with a specific place on the banana leaf, served in a specific sequence, eaten with the right hand while seated on the floor. Every dish has a purpose: the Inji puli to aid digestion, the Rasam to prepare for payasam, the Parippu as the foundation, the Payasam as the joyful conclusion. Understanding the Sadya is understanding the thoughtfulness embedded in Kerala food culture.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>The essential Onam Sadya dishes: Parippu with ghee, Sambar, Rasam, Aviyal, Olan, Thoran, Kichadi, Pachadi, Inji puli, Pulissery, Erissery, Kaalan, Pappadam, Banana chips, Upperi, and at least 2 Payasams. Served on a banana leaf with the tip pointing left, eaten from left to right.</p>
          </div>

          <h2 style={h2}>The Banana Leaf — Setup & Sequence</h2>
          <p style={s}>The banana leaf is the canvas of the Sadya. It is placed with the tip to the left of the diner. Before the meal begins, the leaf is washed with water as a purification. The upper portion of the leaf (closer to the diner) receives pickles, chutneys, and chips. The lower portion receives the main dishes. Rice is placed in the centre. Never fold the banana leaf while eating — it signals displeasure with the host. Fold it away from you at the end to indicate satisfaction.</p>

          <h2 style={h2}>The Essential 26 Dishes — Explained</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Parippu (dal)","Split moong dal cooked with coconut and cumin — the first item served, poured over rice with ghee"],["Sambar","Tamarind-lentil-vegetable stew — a Sadya essential, heartier than North Indian sambar"],["Rasam","Thin pepper-tamarind digestive soup — served after sambar to cleanse the palate"],["Aviyal","The signature Sadya dish — mixed vegetables in coconut-curd-curry leaf gravy. No Sadya is complete without Aviyal."],["Olan","Ash gourd and black-eyed peas cooked in thin coconut milk — subtle and calming"],["Thoran","Stir-fried vegetable (cabbage, beans, or carrot) with grated coconut and mustard"],["Kichadi","Vegetable in thick curd with coconut — slightly tangy"],["Pachadi","Pineapple or mango in sweetened curd — a sweet-savoury transition"],["Pulissery","Ripe mango or pineapple in sour curd curry — distinctly tangy"],["Erissery","Pumpkin and black-eyed peas in roasted coconut — a rich, earthy dish"],["Kaalan","Raw banana or yam in thick sour curd — tangy and dense"],["Inji puli","Ginger-tamarind-jaggery pickle — sharp, complex, and essential for digestion"],["Naranga achar","Lime pickle — sharp accompaniment"],["Manga achar","Raw mango pickle — essential condiment"],["Pappadam","Thin lentil crisp — the first thing to arrive, and crunched throughout the meal"],["Banana chips","Plantain chips fried in coconut oil — a signature Kerala snack"],["Upperi","Fried plantain slices — sweet and crispy"],["Payasam 1","Palada (rice flakes in milk and sugar) — the most classic Onam payasam"],["Payasam 2","Pradhaman (rice or banana in jaggery and coconut milk) — darker and richer"],["Curd","Fresh curd served at the very end — to cool and conclude the meal"],["Buttermilk","Moru — spiced buttermilk served with the final course"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"8px 10px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:12, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:11, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Making Sadya Abroad — Simplified Plan</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Source banana leaves from South Indian, Sri Lankan, or Filipino grocery stores — they freeze well","Start 2 days before: make Inji puli (it improves with time), and soak dal for Parippu","Day before: make Erissery, Kaalan, Pulissery — they taste better the next day","Morning of Sadya: make Aviyal, Olan, Thoran, Sambar, Rasam fresh","Start payasam first as it takes the longest","Pappadam and banana chips can be store-bought — Haldiram&apos;s Kerala Pappadam works well abroad","A 10-dish simplified Sadya captures the spirit — Aviyal, Olan, Sambar, Rasam, Thoran, one Pachadi or Kichadi, Inji puli, Pappadam, and two Payasams"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Every Kerala family has specific Sadya variations — the district-specific Thoran, the grandmother&apos;s particular Aviyal proportion, whether your family makes Ada Pradhaman or Palada as the primary Payasam. Document your family&apos;s specific Sadya recipe list on OurParampara — it is as much heritage as any puja vidhi.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="kerala-onam-sadya-complete-recipe-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🍃</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, recipes and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Panchamrit Abhishekam — Significance, How to Perform & What Each Ingredient Means | OurParampara",
  description: "Panchamrit (five nectars) is a sacred mixture: Dugdha (milk — purity and nourishment), Dadhi (curd — prosperity and fertility), Ghrita (ghee — victory and effulgence), Madhu (honey — sweetness of spee",
  keywords: "Panchamrit Abhishekam guide, what is Panchamrit, Panchamrit significance, how to perform Abhishekam, five ingredients Panchamrit meaning, Panchamrit recipe ritual",
  openGraph: { title: "Panchamrit Abhishekam — Significance, How to Perform & What Each Ingredient Means", description: "Panchamrit (five nectars) is a sacred mixture: Dugdha (milk — purity and nourishment), Dadhi (curd — prosperity and fertility), Ghrita (ghee — victory and effulgence), Madhu (honey — sweetness of spee", url: "https://www.ourparampara.com/blog/panchamrit-abhishekam-significance-ritual-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=panchamrit-abhishekam-significance-ritual-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=panchamrit-abhishekam-significance-ritual-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/panchamrit-abhishekam-significance-ritual-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="panchamrit-abhishekam-significance-ritual-guide" title="Panchamrit Abhishekam — Significance, How to Perform & What Each Ingredient Means" description="Panchamrit (five nectars) is a sacred mixture: Dugdha (milk — purity and nourishment), Dadhi (curd — prosperity and fertility), Ghrita (ghee — victory and effulgence), Madhu (honey — sweetness of spee" date="2026-06-16" category="Ritual Guide"
        faqs={[
          { q: "What is Panchamrit and what are its five ingredients?", a: "Panchamrit (five nectars) is a sacred mixture: Dugdha (milk — purity and nourishment), Dadhi (curd — prosperity and fertility), Ghrita (ghee — victory and effulgence), Madhu (honey — sweetness of speech), and Sharkara (sugar — happiness). The used Panchamrit collected during Abhishekam is distributed as prasad." },
          { q: "What is Abhishekam and why is it performed?", a: "Abhishekam is the ritual bathing of an idol (murti) or Shivalinga with sacred substances — an act of devotion and worship, symbolically purifying and honouring the deity. The substances carry specific meanings: milk for purity, water for purification, honey for sweetness, curd for prosperity." },
          { q: "Which deities receive Panchamrit Abhishekam?", a: "Primarily Lord Shiva (Shivalinga Abhishekam is one of the most common daily rituals at Shiva temples), Lord Ganesha, Lord Vishnu and his avatars, and various forms of the Goddess. Shiva Abhishekam additionally includes bhang in some traditions. Lord Vishnu Abhishekam uses specifically tulsi water." },
        ]}
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
            <div style={{ fontSize:40, marginBottom:14 }}>🏺</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Panchamrit Abhishekam — Significance, How to Perform & What Each Ingredient Means</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Panchamrit Abhishekam is one of the most fundamental acts of Hindu ritual worship — the ceremonial bathing of the deity with a sacred mixture of five nectars. Found in temples across India and performed in homes daily, it is both a deeply practical ritual act and a profound philosophical statement.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Panchamrit: 1 tbsp each of milk + curd + ghee + honey + sugar. Mix and pour slowly over deity's head three times while reciting mantras. Collect the used Panchamrit — it becomes prasad. Ingredients represent: milk (purity), curd (prosperity), ghee (victory), honey (sweetness), sugar (happiness).</p>
          </div>

          <h2 style={h2}>How to Perform Panchamrit Abhishekam at Home</h2>
          <p style={s}>Prepare five small vessels with each ingredient. Invoke the deity. Pour the five ingredients one by one over the deity — milk first, then curd, ghee, honey, sugar. Recite the deity's mantras or simply the name with each pouring. Rinse with clean water. Dry gently. Adorn with flowers, sandalwood, and kumkum. Light a diya and offer incense. Total time: 15-20 minutes.</p>
          <h2 style={h2}>The Spiritual Symbolism</h2>
          <p style={s}>In Vedic understanding, the five Panchamrit ingredients correspond to the five elements: milk to earth, ghee to fire, honey to air, water to sky, curd to water. The Abhishekam is a cosmic offering — returning elements of creation to the divine source. Psychologically, bathing and adorning the deity cultivates devotion and the specific qualities of each ingredient in the devotee's own nature.</p>
          <h2 style={h2}>Panchamrit as Prasad</h2>
          <p style={s}>After Abhishekam, the collected Panchamrit is distributed as sacred prasad — blessed through contact with the deity. Receiving Panchamrit prasad is considered deeply purifying. Prasad from a major temple Abhishekam — particularly a Jyotirlinga — is considered especially potent and is often carried home to family members who could not attend.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific Abhishekam practices — the specific Panchamrit proportions used, the specific mantras recited, the specific deity Abhishekam is performed for, and on what occasions. If an elder is the keeper of the specific ritual sequence, record them explaining it.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="panchamrit-abhishekam-significance-ritual-guide" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🏺</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your sacred journeys, ceremonies and heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

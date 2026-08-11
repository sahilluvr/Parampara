import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Naag Panchami — Complete Guide to Puja Vidhi, Significance & Traditions | OurParampara",
  description: "Complete Naag Panchami guide — significance of snake worship in Hindu tradition, puja vidhi, what to offer, fasting rules, and regional traditions across India.",
  keywords: "Naag Panchami puja vidhi, Naag Panchami significance, snake worship Hindu, Naag Panchami date 2026, Naag Panchami fasting rules, Shravan Panchami guide",
  openGraph: { title: "Naag Panchami — Complete Guide to Puja Vidhi, Significance & Traditions", description: "Complete Naag Panchami guide — significance of snake worship in Hindu tradition, puja vidhi, what to offer, fasting rules, and regional traditions across India.", url: "https://www.ourparampara.com/blog/naag-panchami-puja-vidhi-significance-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=naag-panchami-puja-vidhi-significance-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=naag-panchami-puja-vidhi-significance-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/naag-panchami-puja-vidhi-significance-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="naag-panchami-puja-vidhi-significance-guide" title="Naag Panchami — Complete Guide to Puja Vidhi, Significance & Traditions" description="Complete Naag Panchami guide — significance of snake worship in Hindu tradition, puja vidhi, what to offer, fasting rules, and regional traditions across India." date="2026-06-02" category="Festival Guide"
        faqs={[
          { q: "When is Naag Panchami 2026?", a: "Naag Panchami 2026 falls on July 29, 2026, on the fifth day (Panchami) of the bright fortnight (Shukla Paksha) of the Shravan month. It is one of the most significant days for snake worship in the Hindu calendar." },
          { q: "What is offered to snakes on Naag Panchami?", a: "Traditional offerings to snake idols or live snakes on Naag Panchami include milk, honey, flowers (especially lotus and jasmine), turmeric paste, and sacred grass (durva). Note: wildlife experts advise against feeding milk to live snakes as it is harmful to them — offering to stone or clay idols is the recommended practice." },
          { q: "Why are snakes worshipped in Hinduism?", a: "Snakes hold a sacred place in Hindu tradition as symbols of Lord Shiva (who wears a cobra around his neck), Vishnu (who rests on Shesha Naag), and fertility of the earth. Naags (serpents) are considered protectors of the home and land. Naag Panchami honours these divine serpent beings and seeks their protection for the family." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🐍</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Naag Panchami — Complete Guide to Puja Vidhi, Significance & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 2, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Naag Panchami is the Hindu festival dedicated to snake worship — observed on the fifth day of Shravan month&apos;s bright fortnight. Snakes hold a uniquely sacred place in Hindu tradition: Lord Shiva wears Vasuki the cobra around his neck, Lord Vishnu rests on the divine serpent Shesha, and Krishna danced on the head of Kaliya. Naag Panchami is a day to honour these divine serpent beings, seek their protection, and acknowledge the deep relationship between the natural world and the sacred.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Naag Panchami 2026 is on July 29. The puja involves making or purchasing a clay or silver snake idol, bathing it with milk and water, offering flowers and turmeric paste, lighting a diya, and praying for the family&apos;s protection. Fasting is observed by many women until after the puja.</p>
          </div>

          <h2 style={h2}>Significance of Naag Panchami</h2>
          <p style={s}>The reverence for snakes in Indian culture is ancient and multi-layered. In agricultural societies, snakes protected grain stores from rodents — making them practical guardians of family food. In Hindu cosmology, the Naag (serpent) represents both death and regeneration (the snake that sheds its skin), the kundalini energy at the base of the spine, and the protective force of the divine masculine. Naag Panchami honours all these dimensions — the practical, the ecological, and the cosmic.</p>

          <h2 style={h2}>Naag Panchami Puja Vidhi</h2>
          {["Wake early, take a bath, and clean the puja space","Draw or place a snake image — traditionally drawn with turmeric paste on the wall or door, or use a silver, clay, or stone snake idol","Bathe the snake idol with water, then milk, then water again","Apply turmeric paste and kumkum to the idol","Offer flowers — lotus, jasmine, and marigold are traditional","Light a diya and incense","Offer sweets — kheer or peda are common Naag Panchami prasad","Recite Naag Panchami prayers or mantras — &apos;Om Namo Bhagavate Vasudevaya&apos; is commonly recited","Perform aarti and seek blessings for the family&apos;s protection from snakebite and harm"].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Regional Traditions</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Maharashtra","Women fast and visit snake temples. Snake idols made of clay or drawn on walls with cow dung. Pital (brass) snake worship is common."],["Karnataka","Naga Panchami is one of the most elaborate celebrations in Karnataka — stone snake idols in gardens and fields are worshipped with flowers and milk."],["Kerala","Serpent groves (Sarpa Kavu) are sacred spaces found in many Kerala homes — Naag Panchami involves elaborate rituals at these groves."],["North India","Women observe fasts, visit Shiva temples (where snake imagery is prominent), and offer milk to snake idols or images."],["West Bengal","The goddess Manasa (serpent goddess) is worshipped — her stories are sung and her idol is decorated with great care."],["Andhra Pradesh","Naag Panchami is celebrated as Naga Chaturthi/Panchami with family pujas and visits to Naag temples."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Many Indian families have specific Naag Panchami traditions — a particular snake temple they visit each year, a specific prayer their grandmother recited, or a clay snake idol that has been in the family for generations. These specific family customs are worth documenting on OurParampara before they are forgotten.</p>
          </div>
        
<h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Naga in Hindu Cosmology</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The snake holds an extraordinary place in Hindu cosmic mythology. Shesha Naga (or Adishesha) — the thousand-headed serpent — is the bed on which Vishnu rests in the cosmic ocean between cycles of creation. Vasuki, the serpent king, was used as the rope in the churning of the cosmic ocean. Shiva wears Vasuki around his neck as an ornament — the snake that chose to serve the destroyer of death. Krishna danced on the hood of Kaliya in the Yamuna river, subduing the venomous serpent. The Kundalini energy in yogic tradition is depicted as a serpent coiled at the base of the spine. The snake, in Hindu thought, represents not danger but power — the primal energy of life itself.</p>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="naag-panchami-puja-vidhi-significance-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🐍</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your family&apos;s ceremonies, rituals and memories on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

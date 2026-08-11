import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nowruz — Parsi New Year Traditions, Haft-Seen & Family Customs Guide | OurParampara",
  description: "Complete guide to Nowruz — the Parsi and Zoroastrian New Year, the Haft-Seen table traditions, Jashan prayers, Nowruz foods, and how the Parsi community in India celebrates this ancient festival.",
  keywords: "Nowruz Parsi traditions, Zoroastrian New Year India, Haft-Seen table guide, Parsi Nowruz customs, Nowruz 2026 date, Parsi community traditions India, Jashan ceremony guide",
  openGraph: { title: "Nowruz — Parsi New Year Traditions, Haft-Seen & Family Customs Guide", description: "Complete guide to Nowruz — the Parsi and Zoroastrian New Year, the Haft-Seen table traditions, Jashan prayers, Nowruz foods, and how the Parsi community in India celebrates this ancient festival.", url: "https://www.ourparampara.com/blog/parsi-nowruz-new-year-traditions-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=parsi-nowruz-new-year-traditions-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=parsi-nowruz-new-year-traditions-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/parsi-nowruz-new-year-traditions-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="parsi-nowruz-new-year-traditions-guide" title="Nowruz — Parsi New Year Traditions, Haft-Seen & Family Customs Guide" description="Complete guide to Nowruz — the Parsi and Zoroastrian New Year, the Haft-Seen table traditions, Jashan prayers, Nowruz foods, and how the Parsi community in India celebrates this ancient festival." date="2026-06-13" category="Festival Guide"
        faqs={[
          { q: "When is Nowruz 2026?", a: "Nowruz (the Persian and Zoroastrian New Year) falls on March 20, 2026 — the spring equinox. For Parsi Zoroastrians in India, who follow the Shahenshahi calendar, their New Year (Navroz) falls on August 16, 2026 — about 200 days after the equinox due to calendar differences from when they migrated to India." },
          { q: "What is the Haft-Seen table?", a: "The Haft-Seen (Seven Ss) is a ceremonial table set for Nowruz featuring seven items that begin with the Persian letter S (seen): Sabzeh (sprouted wheat for rebirth), Samanu (wheat pudding for prosperity), Senjed (dried lotus for love), Seer (garlic for health), Seeb (apple for beauty), Somaq (sumac for sunrise), and Serkeh (vinegar for patience). Each item symbolises a wish for the new year." },
          { q: "How do Parsis celebrate Nowruz differently from Persian Nowruz?", a: "Parsi Zoroastrians in India celebrate their Navroz on a different date (August) due to the Shahenshahi calendar, but the rituals are similar in spirit. Parsi Nowruz includes visiting the Agiary (fire temple) for prayers, wearing new white clothes, a special breakfast with Ravo (semolina pudding) and Sev (vermicelli), visiting elders, and a large family feast with Dhansak." },
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
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Nowruz — Parsi New Year Traditions, Haft-Seen & Family Customs Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 13, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>Nowruz — the Persian New Year meaning &apos;New Day&apos; — is one of humanity&apos;s oldest festivals, celebrated for over 3,000 years. For India&apos;s Parsi Zoroastrian community, the descendants of Persian refugees who came to India over a millennium ago, Nowruz (called Navroz in their tradition) is the most joyous celebration of the year — a day of renewal, family, prayer at the Agiary (fire temple), and an elaborate feast that reflects centuries of Persian and Indian cultural fusion.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Parsi Nowruz (Navroz) 2026 is on August 16 (Shahenshahi calendar). Traditions include: Agiary visit in white clothes at dawn, Ravo and Sev breakfast, setting up a symbolic table with auspicious items, visiting elders, and a feast with Dhansak. The day begins and ends with prayers of gratitude.</p>
          </div>

          <h2 style={h2}>The Morning of Nowruz</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Early morning bath","The day begins with a ritual bath — cleansing body and mind for the new year"],["White clothes","Parsis wear white on Nowruz — the colour of purity in Zoroastrian tradition"],["Agiary visit","The Agiary (fire temple) is the first destination — prayers before the sacred fire, offered flowers, sandalwood, and frankincense"],["Ravo breakfast","A sweet semolina pudding made with milk, ghee, sugar, and eggs — the traditional Nowruz breakfast"],["Sev","Fine vermicelli cooked in milk and sugar — served alongside Ravo as the celebratory morning sweet"],["Visiting elders","After breakfast, families visit grandparents and elderly relatives to seek their blessings for the new year"]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:130, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>The Nowruz Table</h2>
          <p style={s}>Like the Persian Haft-Seen, Parsi families set a symbolic table for Nowruz with auspicious items: flowers, a mirror, an egg (symbolising new life), fish in a bowl (prosperity and movement), sugar (sweetness of life), coins (wealth), wine or rose water, a lamp, and fresh fruits. The exact items vary by family tradition — some maintain items passed down for generations, others adapt them over time.</p>

          <h2 style={h2}>Nowruz Foods</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Dhansak","The most iconic Parsi dish — lentils slow-cooked with meat and vegetables, served with caramelised rice. The celebration Nowruz feast centres on Dhansak."],["Patra ni Machhi","Fish steamed in banana leaf with green chutney — a Parsi festive essential for any major celebration"],["Lagan nu Custard","A rich baked egg custard flavoured with nutmeg and vanilla — the signature Parsi dessert for celebrations"],["Ravo","Sweet semolina pudding with milk, ghee, and eggs — the Nowruz breakfast sweet"],["Sev","Fine vermicelli in sweetened milk — the festive morning drink-dessert"],["Chicken Farcha","Spiced fried chicken — a common addition to the Nowruz feast table"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>The Parsi community in India numbers only around 60,000 — one of the smallest religious communities in the world. Documenting your family&apos;s Nowruz traditions, the specific items on your ceremonial table, your grandmother&apos;s Dhansak recipe, and the Agiary your family has visited for generations is an act of cultural preservation with special urgency.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="parsi-nowruz-new-year-traditions-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌸</p>
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

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Andhra & Telugu Traditions — Ugadi, Sankranti & Family Heritage Guide | OurParampara",
  description: "Complete guide to Andhra and Telugu family traditions — Ugadi New Year celebrations, Makar Sankranti with Muggulu and kite flying, Bonalu festival, wedding customs, and Telugu cultural heritage.",
  keywords: "Telugu traditions guide, Ugadi festival guide, Telugu Sankranti customs, Bonalu festival guide, Andhra Pradesh traditions, Telugu wedding customs, Telugu cultural heritage",
  openGraph: { title: "Andhra & Telugu Traditions — Ugadi, Sankranti & Family Heritage Guide", description: "Complete guide to Andhra and Telugu family traditions — Ugadi New Year celebrations, Makar Sankranti with Muggulu and kite flying, Bonalu festival, wedding customs, and Telugu cultural heritage.", url: "https://www.ourparampara.com/blog/andhra-telugu-festivals-traditions-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=andhra-telugu-festivals-traditions-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=andhra-telugu-festivals-traditions-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/andhra-telugu-festivals-traditions-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="andhra-telugu-festivals-traditions-guide" title="Andhra & Telugu Traditions — Ugadi, Sankranti & Family Heritage Guide" description="Complete guide to Andhra and Telugu family traditions — Ugadi New Year celebrations, Makar Sankranti with Muggulu and kite flying, Bonalu festival, wedding customs, and Telugu cultural heritage." date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "When is Ugadi 2026 and how is it celebrated?", a: "Ugadi 2026 falls on March 30, 2026. It is the Telugu and Kannada New Year, observed on the first day of the Chaitra month. Key celebrations include: early morning oil bath, wearing new clothes, visiting the temple, preparing and eating Ugadi Pachadi (a chutney with six tastes), listening to the Panchanga Sravanam (astrological almanac reading for the new year), and a family feast." },
          { q: "What is Ugadi Pachadi and why does it have six tastes?", a: "Ugadi Pachadi is a special chutney eaten on Ugadi containing six different flavours: sweet (jaggery), sour (raw mango or tamarind), bitter (neem flowers), salty, spicy, and astringent. The six tastes represent the experiences of the coming year — that life will contain joy, sorrow, surprise, difficulty, fear, and disgust — and eating all six together prepares one to face whatever the year brings with equanimity." },
          { q: "What is Bonalu festival?", a: "Bonalu is a major festival of the Telangana region, particularly celebrated in Hyderabad, Secunderabad, and surrounding areas. It honours the goddess Mahakali as a protector of the community. Devotees (primarily women) carry pots of cooked rice on their heads to the temple as an offering. The festival involves elaborate processions, traditional music, and community celebrations. It falls during the Ashadha month (June-July)." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌺</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Andhra & Telugu Traditions — Ugadi, Sankranti & Family Heritage Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>Telugu culture — spanning Andhra Pradesh and Telangana — has a rich festival calendar and family tradition that is distinctly South Indian yet uniquely its own. From the philosophical depth of Ugadi Pachadi to the visual splendour of Muggulu (rangoli) at Sankranti, from the devotional intensity of Bonalu to the elaborate multi-day wedding traditions, Telugu heritage is diverse, regional, and deeply connected to the agricultural rhythms of the Deccan plateau.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Key Telugu festivals: Ugadi (Telugu New Year, March 30, 2026), Makar Sankranti (January 14 — kite flying, Muggulu, Pongal cooking, Sesame sweets), and Bonalu (July-August — goddess festival). Telugu weddings are multi-day affairs with Muhurtam (auspicious time), Pellikoduku, and Saptapadi ceremonies.</p>
          </div>

          <h2 style={h2}>Ugadi — Telugu New Year</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Morning rituals","Before sunrise — oil bath (Abhyangana Snanam), wearing new clothes, decorating the entrance with fresh mango leaves and Muggulu"],["Temple visit","Visiting the family temple for the new year&apos;s first darshan — offering flowers, coconut, and new clothes to the deity"],["Ugadi Pachadi","The ritual eating of the six-taste chutney — made with neem flowers, raw mango, jaggery, tamarind, salt, and chilli — symbolising the acceptance of all of life&apos;s experiences"],["Panchanga Sravanam","A community reading of the year&apos;s astrological almanac by a scholar — predicting the season&apos;s rains, harvests, and significant events for the coming year"],["Family feast","Pulihora (tamarind rice), Bobbatlu (sweet stuffed flatbread), Payasam, and a full vegetarian meal with family gathered"]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:140, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Makar Sankranti — The Harvest Festival</h2>
          <p style={s}>Makar Sankranti is celebrated in Andhra Pradesh and Telangana over four days: Bhogi (burning old items), Makar Sankranti (main day — kite flying, pongal cooking, sesame sweets), Kanuma (honouring cattle), and Mukkanuma (meat feast day, particularly in some communities). The Muggulu (rangoli) tradition is at its most elaborate during Sankranti — women draw intricate geometric patterns at the entrance, and competitions are held in many areas. Kite flying on Sankranti morning is a beloved community activity — the skies fill with colourful kites, and children and adults alike participate.</p>

          <h2 style={h2}>Bonalu — Hyderabad&apos;s Goddess Festival</h2>
          <p style={s}>Bonalu (meaning &apos;offering&apos; in Telugu) is the festival where women carry pots of cooked rice (Bonam) on their heads to temples of Mahakali as a thank-you offering for the goddess&apos;s protection of the community. The festival begins at the historic Golconda Fort temple and spreads to neighbourhood temples across Hyderabad and Secunderabad over several weeks. The sight of thousands of women in colourful sarees carrying decorated pots through the streets to the accompaniment of traditional music is one of the most visually distinctive festival processions in South India.</p>

          <h2 style={h2}>Telugu Wedding Traditions</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Pellikoduku and Pellikuturu — pre-wedding ceremonies where the groom and bride are respectively honoured at their own homes","Muhurtam — the auspicious moment for the wedding, calculated precisely by a Jyotishi","Kashi Yatra — the groom&apos;s theatrical &apos;departure to Kashi&apos; (pretending to renounce the world) which the bride&apos;s father stops by offering his daughter in marriage","Jeelakarra Bellam — the couple places a paste of cumin and jaggery on each other&apos;s heads while the mangalsutra is tied — a uniquely Telugu wedding ritual","Talambralu — the couple pours rice and rose petals over each other&apos;s heads — a playful and beloved Telugu wedding moment","Saptapadi — the seven sacred steps around the sacred fire, completing the Hindu marriage ceremony"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family&apos;s Ugadi Pachadi recipe — the specific proportions of each ingredient, which tamarind or raw mango your family uses, any regional variations from your ancestral district. Telugu festival food traditions are district-specific and family-specific — your version is genuinely different from anyone else&apos;s.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="andhra-telugu-festivals-traditions-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌺</p>
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

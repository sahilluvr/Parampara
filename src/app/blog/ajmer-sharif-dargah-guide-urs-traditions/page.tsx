import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ajmer Sharif Dargah — Complete Guide to the Urs, Qawwali & Pilgrimage Traditions | OurParampara",
  description: "Khwaja Moinuddin Chishti (1141-1230 CE) was the founder of the Chishti order of Sufism in South Asia, one of the most influential spiritual figures in Indian history. Known as Garib Nawaz (Benefactor ",
  keywords: "Ajmer Sharif Dargah guide, Ajmer Urs festival guide, Moinuddin Chishti shrine, Ajmer Qawwali traditions, Ajmer Sharif pilgrimage, Dargah visit guide India",
  openGraph: { title: "Ajmer Sharif Dargah — Complete Guide to the Urs, Qawwali & Pilgrimage Traditions", description: "Khwaja Moinuddin Chishti (1141-1230 CE) was the founder of the Chishti order of Sufism in South Asia, one of the most influential spiritual figures in Indian history. Known as Garib Nawaz (Benefactor ", url: "https://www.ourparampara.com/blog/ajmer-sharif-dargah-guide-urs-traditions", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=ajmer-sharif-dargah-guide-urs-traditions", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=ajmer-sharif-dargah-guide-urs-traditions"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/ajmer-sharif-dargah-guide-urs-traditions" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="ajmer-sharif-dargah-guide-urs-traditions" title="Ajmer Sharif Dargah — Complete Guide to the Urs, Qawwali & Pilgrimage Traditions" description="Khwaja Moinuddin Chishti (1141-1230 CE) was the founder of the Chishti order of Sufism in South Asia, one of the most influential spiritual figures in Indian history. Known as Garib Nawaz (Benefactor " date="2026-06-07" category="Heritage Guide"
        faqs={[
          { q: "Who is Moinuddin Chishti and why is Ajmer Sharif important?", a: "Khwaja Moinuddin Chishti (1141-1230 CE) was the founder of the Chishti order of Sufism in South Asia, one of the most influential spiritual figures in Indian history. Known as Garib Nawaz (Benefactor of the Poor), he spent the last years of his life in Ajmer and drew thousands to Islam through his message of universal love and service. His dargah (shrine) in Ajmer is considered one of the holiest sites in Islam in South Asia and is visited by millions of pilgrims annually of all faiths." },
          { q: "What is the Urs festival at Ajmer Sharif?", a: "The Urs (death anniversary — considered in Sufi tradition as the day of union with God) of Khwaja Moinuddin Chishti is the most important event at Ajmer Sharif, observed in the Rajab month of the Islamic calendar. The Urs typically lasts 6 days. It features continuous Qawwali music at the dargah, massive gatherings from across India and South Asia, official government representation, and rituals including the changing of the chadar (ceremonial sheet) on the tomb." },
          { q: "Can people of all religions visit Ajmer Sharif?", a: "Yes — the Ajmer Sharif Dargah explicitly welcomes visitors of all faiths. Hindus, Sikhs, Christians, and people of no particular faith visit alongside Muslim pilgrims. The tradition of the dargah is universal compassion. Visitors should dress modestly, cover their head (scarves available at the entrance), and remove shoes before entering. Men and women have separate areas inside the inner sanctum." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🕌</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ajmer Sharif Dargah — Complete Guide to the Urs, Qawwali & Pilgrimage Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 7, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Ajmer Sharif Dargah — the shrine of Khwaja Moinuddin Chishti — is one of the most revered pilgrimage sites in South Asia, visited by millions of pilgrims of all faiths every year. Located in Rajasthan, it is the spiritual heart of the Chishti Sufi order and a living example of the Indian tradition of cross-religious pilgrimage and devotion.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Ajmer Sharif Dargah is open daily, 24 hours during Urs. Cover head and remove shoes (provided). Both men and women enter but have separate sections. Offer a chadar (ceremonial sheet), rose petals, or incense at the tomb. The Qawwali sessions happen daily at specific times — the most authentic sessions are in the evenings. The Urs festival is the most spiritually charged time to visit.</p>
          </div>

          <h2 style={h2}>Qawwali at Ajmer</h2>
          <p style={s}>Qawwali — the devotional music of the Sufi tradition — at Ajmer Sharif is among the most powerful musical experiences in India. The hereditary Qawwali families (Kawwals) who sing at the dargah have maintained the tradition for generations. The music combines Sufi poetry, call-and-response patterns, and a rising intensity that devotees describe as transporting. Listening to Qawwali at the dargah is not entertainment — it is zikr (remembrance of God) in musical form.</p>
          <h2 style={h2}>What to Do at Ajmer Sharif</h2>
          <p style={s}>Arrive early morning or evening for a less crowded visit. Purchase a chadar (ceremonial sheet) and rose petals from the stalls outside. Enter the main gate (Nizam Gate), walk through the courtyard, and proceed to the inner sanctum (Dargah). Offer the chadar and flowers at the tomb with your prayer. Seek blessings in your own words — the tradition is that Khwaja Sahib's blessings are available to everyone who comes sincerely. Distribute sweets or food to the poor gathered at the dargah as a form of charity.</p>
          <h2 style={h2}>Ajmer for Families</h2>
          <p style={s}>Ajmer Sharif is a meaningful destination for multi-faith Indian families — it models the tradition of spiritual seeking that transcends religious labels. Many Hindu families from Rajasthan have generations of Ajmer Sharif pilgrimage as part of their own tradition. The dargah&apos;s message — that the divine is accessible to all and the greatest virtue is compassion — is one of the most universally applicable spiritual lessons.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has a tradition of visiting Ajmer Sharif — particularly if it crosses religious lines — document this. Multi-faith devotion at Sufi dargahs is one of India's most distinctive and beautiful traditions, and it is worth preserving as heritage that shows what Indian religious culture at its best looks like.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ajmer-sharif-dargah-guide-urs-traditions" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🕌</p>
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

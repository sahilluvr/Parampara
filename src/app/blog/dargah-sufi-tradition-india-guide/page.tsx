import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dargah & Sufi Traditions in India — A Guide to Qawwali, Urs & Shrines | OurParampara",
  description: "A Dargah is the tomb-shrine of a Sufi saint where pilgrims seek blessings. In Sufi tradition, the saint's spiritual power (baraka) continues at their tomb even after death — the day of their death (Ur",
  keywords: "Dargah Sufi traditions India, Qawwali spiritual guide, Nizamuddin Dargah guide, Urs festival India, Haji Ali Dargah guide, Sufi traditions Indian Muslims, dargah visit guide India",
  openGraph: { title: "Dargah & Sufi Traditions in India — A Guide to Qawwali, Urs & Shrines", description: "A Dargah is the tomb-shrine of a Sufi saint where pilgrims seek blessings. In Sufi tradition, the saint's spiritual power (baraka) continues at their tomb even after death — the day of their death (Ur", url: "https://www.ourparampara.com/blog/dargah-sufi-tradition-india-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=dargah-sufi-tradition-india-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=dargah-sufi-tradition-india-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/dargah-sufi-tradition-india-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="dargah-sufi-tradition-india-guide" title="Dargah & Sufi Traditions in India — A Guide to Qawwali, Urs & Shrines" description="A Dargah is the tomb-shrine of a Sufi saint where pilgrims seek blessings. In Sufi tradition, the saint's spiritual power (baraka) continues at their tomb even after death — the day of their death (Ur" date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What is a Dargah?", a: "A Dargah is the tomb-shrine of a Sufi saint where pilgrims seek blessings. In Sufi tradition, the saint's spiritual power (baraka) continues at their tomb even after death — the day of their death (Urs, meaning 'union' — union with God) is more sacred than their birthday. Dargahs across India attract pilgrims of all faiths — one of the most remarkable expressions of India's religious pluralism." },
          { q: "What are the major Sufi orders in India?", a: "India's four major Sufi orders: Chishti (most influential — emphasizing love, music, and service; Ajmer Sharif is its centre), Qadiri, Suhrawardi (Punjab and Sindh), and Naqshbandi (North India, Kashmir — more orthodox, avoiding music). The Chishti order with its embrace of Qawwali and welcome to all people has had the most visible cultural impact on Indian Islam." },
          { q: "What is the significance of Nizamuddin Dargah?", a: "Hazrat Nizamuddin Auliya (1238-1325) was the most prominent Chishti Sufi master in Delhi. His disciples include the poet Amir Khusro, who invented Qawwali. The Nizamuddin Dargah hosts elaborate Thursday evening Qawwali sessions drawing people of all backgrounds — a tradition maintained unbroken for 700 years." },
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
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Dargah & Sufi Traditions in India — A Guide to Qawwali, Urs & Shrines</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Sufism — Islamic mysticism in various forms — has profoundly shaped Indian Muslim culture and broader Indian spiritual life. The dargah tradition, with weekly gatherings, Qawwali music, and welcome for all faiths, represents a distinctly Indian form of Islam that has coexisted with and enriched Hindu, Sikh, and other communities for centuries.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Major Dargahs: Ajmer Sharif (most visited, 15M+ annual pilgrims), Nizamuddin Auliya Delhi (700 years of Thursday Qawwali), Haji Ali Mumbai (sea island dargah), Salim Chishti Fatehpur Sikri. Urs (death anniversary) is the most sacred time to visit. Qawwali performed Thursday evenings at most major dargahs.</p>
          </div>

          <h2 style={h2}>Qawwali — The Music of the Dargah</h2>
          <p style={s}>Qawwali was systematized by Amir Khusro (1253-1325) — poet and disciple of Nizamuddin Auliya. The music combines Sufi poetry in Urdu, Persian, Punjabi, and Braj Bhasha, performed with harmonium and tabla, building in intensity through repetition and call-and-response. The aim is to induce hal — a state of spiritual intoxication, losing oneself in divine presence. The late Nusrat Fateh Ali Khan brought Qawwali to global audiences.</p>
          <h2 style={h2}>India's Most Visited Dargahs</h2>
          <p style={s}>Five significant dargahs: Ajmer Sharif (Rajasthan), Nizamuddin Dargah (Delhi), Haji Ali Dargah (Mumbai — tidal island), Dargah of Shah Waliullah (Delhi), and Salim Chishti (Fatehpur Sikri — where Akbar prayed for an heir). Each has distinctive atmosphere and specific traditions.</p>
          <h2 style={h2}>Dargah Traditions for Non-Muslims</h2>
          <p style={s}>The dargah tradition is explicitly non-exclusionary — most Sufi saints' teachings were addressed to all humanity. Hindus, Sikhs, and Christians regularly visit to seek blessings and make vows. In many parts of India, the local dargah is visited by the whole community regardless of religion — representing India's 'composite culture' (Ganga-Jamuni tehzeeb).</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's connection to dargah and Sufi traditions — whether visiting a specific local dargah for specific occasions, a particular Sufi saint's shrine, or a tradition of listening to specific Qawwalis. Sufi connections often cross religious lines in Indian families — document the specific tradition yours has.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="dargah-sufi-tradition-india-guide" category="Heritage Guide"/>

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

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Karma, Dharma & Moksha — A Family Guide to Core Hindu Philosophy | OurParampara",
  description: "Karma literally means 'action' — every action generates a consequence. The law of karma states every thought, word, and deed creates a corresponding effect — not necessarily in this life, but across l",
  keywords: "karma dharma moksha guide, Hindu philosophy family guide, what is karma explained, dharma meaning Hindu, moksha liberation guide, samsara cycle explained, Hindu concepts for families",
  openGraph: { title: "Karma, Dharma & Moksha — A Family Guide to Core Hindu Philosophy", description: "Karma literally means 'action' — every action generates a consequence. The law of karma states every thought, word, and deed creates a corresponding effect — not necessarily in this life, but across l", url: "https://www.ourparampara.com/blog/shraddha-karma-moksha-hindu-philosophy-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=shraddha-karma-moksha-hindu-philosophy-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=shraddha-karma-moksha-hindu-philosophy-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/shraddha-karma-moksha-hindu-philosophy-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="shraddha-karma-moksha-hindu-philosophy-guide" title="Karma, Dharma & Moksha — A Family Guide to Core Hindu Philosophy" description="Karma literally means 'action' — every action generates a consequence. The law of karma states every thought, word, and deed creates a corresponding effect — not necessarily in this life, but across l" date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What does karma actually mean in Hindu philosophy?", a: "Karma literally means 'action' — every action generates a consequence. The law of karma states every thought, word, and deed creates a corresponding effect — not necessarily in this life, but across lifetimes (samsara). Good karma (punya) arises from right action; bad karma (papa) from wrong action. Full moral responsibility rests on the individual." },
          { q: "What is dharma?", a: "Dharma is the cosmic law or order that maintains the universe. At the individual level, it is righteous duty — one's specific responsibilities based on stage of life (ashrama dharma) and nature (svadharma). The Bhagavad Gita is fundamentally about dharma — Arjuna's crisis of duty and Krishna's teaching about right action." },
          { q: "What is moksha and how is it achieved?", a: "Moksha (liberation) is the ultimate aim of human life — freedom from the cycle of birth and death (samsara). When the soul recognizes its true nature (Atman = Brahman), the cycle ends and the soul merges with the divine. Different paths to moksha: Jnana Yoga (knowledge), Bhakti Yoga (devotion), Karma Yoga (right action), Raja Yoga (meditation)." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>☸️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Karma, Dharma & Moksha — A Family Guide to Core Hindu Philosophy</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Karma, Dharma, and Moksha are the three foundational concepts of Hindu philosophy — shaping everyday decisions, how parents raise children, how individuals face suffering, and how a life is evaluated as well-lived.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Karma: every action generates consequences across lifetimes. Dharma: righteous duty specific to one's role, stage of life, and nature. Moksha: liberation from the cycle of rebirth — the ultimate aim of life. Samsara: the cycle of rebirth. Atman: individual soul. Brahman: universal consciousness. Primary texts: Bhagavad Gita, Upanishads, Yoga Sutras.</p>
          </div>

          <h2 style={h2}>Explaining Karma to Children</h2>
          <p style={s}>Every action is like a seed planted — it grows into a fruit that reflects the nature of the seed. Actions done with love grow beautiful fruits; actions done with selfishness grow painful ones. We may not see the fruit in this lifetime — but the law is reliable. This cultivates ethical sensitivity and personal responsibility without external punishment as the primary motivator.</p>
          <h2 style={h2}>Dharma in Family Life</h2>
          <p style={s}>In Hindu family life, dharma is expressed through specific roles: parent's dharma is to protect and educate; child's dharma is to honour and learn; householder's dharma is to fulfil family duties while maintaining ethical conduct. The four ashramas (Brahmacharya, Grihastha, Vanaprastha, Sannyasa) each have their specific dharma.</p>
          <h2 style={h2}>Moksha — Not Just After Death</h2>
          <p style={s}>Moksha in living yoga traditions is understood as a state of consciousness achievable in this lifetime — the recognition of one's true nature as pure awareness, beyond ego and karma. The Jivanmukta (liberated while living) has achieved moksha while still embodied. This makes spiritual practice an immediate possibility rather than a posthumous hope.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific understanding — how parents and grandparents explained karma, what your family considers dharmic behaviour, how moksha is discussed. Philosophical transmission is one of the most intimate forms of family heritage — the specific way your family understands life's purpose is worth preserving.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="shraddha-karma-moksha-hindu-philosophy-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>☸️</p>
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

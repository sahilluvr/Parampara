import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Parsi Death Rituals — Dokhmenashini, Tower of Silence & Funeral Traditions | OurParampara",
  description: "Dokhmenashini is the traditional Zoroastrian method of disposing of the dead — the body is placed in a Dakhma (Tower of Silence), a circular structure open to the sky, where vultures consume the flesh",
  keywords: "Parsi death rituals guide, Dokhmenashini tradition, Tower of Silence India, Parsi funeral customs, Uthamna ceremony, Muktad prayers Parsi",
  openGraph: { title: "Parsi Death Rituals — Dokhmenashini, Tower of Silence & Funeral Traditions", description: "Dokhmenashini is the traditional Zoroastrian method of disposing of the dead — the body is placed in a Dakhma (Tower of Silence), a circular structure open to the sky, where vultures consume the flesh", url: "https://www.ourparampara.com/blog/parsi-death-rituals-dokhmenashini-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=parsi-death-rituals-dokhmenashini-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=parsi-death-rituals-dokhmenashini-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/parsi-death-rituals-dokhmenashini-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="parsi-death-rituals-dokhmenashini-guide" title="Parsi Death Rituals — Dokhmenashini, Tower of Silence & Funeral Traditions" description="Dokhmenashini is the traditional Zoroastrian method of disposing of the dead — the body is placed in a Dakhma (Tower of Silence), a circular structure open to the sky, where vultures consume the flesh" date="2026-06-15" category="Heritage Guide"
        faqs={[
          { q: "What is Dokhmenashini and the Tower of Silence?", a: "Dokhmenashini is the traditional Zoroastrian method of disposing of the dead — the body is placed in a Dakhma (Tower of Silence), a circular structure open to the sky, where vultures consume the flesh. This practice is based on the Zoroastrian principle that the four sacred elements (fire, earth, water, air) must not be polluted by a corpse, which is considered impure at the moment of death. The bones are then collected in a central pit and dissolved with lime." },
          { q: "What is the Uthamna ceremony?", a: "Uthamna is the Parsi prayer ceremony held on the fourth day after death. It is a community gathering where priests recite extensive Avestan prayers for the soul of the departed. It corresponds to the Zoroastrian belief that the soul remains near the body for three days and begins its journey to the next world on the fourth. The Uthamna is the largest community prayer ceremony in the Parsi tradition of mourning." },
          { q: "What are the Muktad prayers?", a: "Muktad is a 10-day period (the last 10 days of the Zoroastrian year) when Parsis pray for the souls of all deceased family members. Special ritual objects (Afrinagan vessels with fire, flowers, and fruits) are set out, and priests recite prayers for the departed. It is believed that during Muktad, the souls of the departed return to be near their families. Each family has specific names they pray for during Muktad." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🕯️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Parsi Death Rituals — Dokhmenashini, Tower of Silence & Funeral Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 15, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Zoroastrian approach to death is one of the most distinctive in any religious tradition — rooted in the principle that the four sacred elements must not be defiled, and that the soul&apos;s journey after death deserves specific ritual attention. These practices, developed over millennia, are both ancient and — given the small and shrinking Parsi community — increasingly rare in their traditional form.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Parsi death rituals: Dokhmenashini (traditional Tower of Silence burial), Sachkar (ritual purification of the body), Geh-Sarna prayers (prayers before the body is taken), Uthamna (4th day community prayers), Chahrum (monthly prayers), and Muktad (annual 10-day prayer period for all departed souls).</p>
          </div>
          <h2 style={h2}>The Ritual Sequence After Death</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Sachkar","Ritual purification of the body — performed by priests in a specific sequence using water, sandalwood, and prayers"],["Geh-Sarna","Prayers performed beside the body before it is taken to the Dakhma — considered the most important prayers of the sequence"],["Paidast","The corpse-bearers (Nasasalars) carry the body to the Dakhma — they wear white and walk in pairs for ritual purity"],["Uthamna (Day 4)","The major community prayer ceremony — friends, family, and community gather. Priests recite prayers for the departed soul&apos;s journey."],["Chahrum (Monthly)","Monthly prayers on the anniversary of the death — maintaining the connection to the departed"],["Muktad (Annual)","The 10-day annual period of prayers for all departed souls — a collective and family act of remembrance"]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:100, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>The specific names your family prays for during Muktad, the Agiary where your family has performed Uthamna ceremonies for generations, the Nasasalars who have served your family — these are the specific human details of Parsi death traditions worth documenting. As the community shrinks, this institutional knowledge becomes increasingly precious.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="parsi-death-rituals-dokhmenashini-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🕯️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, recipes and heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

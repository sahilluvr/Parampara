import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Parsi Wedding & Navjote — Complete Guide to Zoroastrian Ceremonies in India | OurParampara",
  description: "Navjote (meaning 'new worshipper') is the Zoroastrian initiation ceremony — the equivalent of Upanayanam or Confirmation — where a child (usually between ages 7-15) is formally initiated into the Zoro",
  keywords: "Parsi wedding traditions, Navjote ceremony guide, Zoroastrian initiation India, Parsi Lagan wedding, Parsi community customs, Zoroastrian rituals India",
  openGraph: { title: "Parsi Wedding & Navjote — Complete Guide to Zoroastrian Ceremonies in India", description: "Navjote (meaning 'new worshipper') is the Zoroastrian initiation ceremony — the equivalent of Upanayanam or Confirmation — where a child (usually between ages 7-15) is formally initiated into the Zoro", url: "https://www.ourparampara.com/blog/parsi-wedding-navjote-traditions-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=parsi-wedding-navjote-traditions-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=parsi-wedding-navjote-traditions-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/parsi-wedding-navjote-traditions-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="parsi-wedding-navjote-traditions-guide" title="Parsi Wedding & Navjote — Complete Guide to Zoroastrian Ceremonies in India" description="Navjote (meaning 'new worshipper') is the Zoroastrian initiation ceremony — the equivalent of Upanayanam or Confirmation — where a child (usually between ages 7-15) is formally initiated into the Zoro" date="2026-06-14" category="Heritage Guide"
        faqs={[
          { q: "What is the Navjote ceremony?", a: "Navjote (meaning 'new worshipper') is the Zoroastrian initiation ceremony — the equivalent of Upanayanam or Confirmation — where a child (usually between ages 7-15) is formally initiated into the Zoroastrian faith. The child receives the Sudreh (white inner garment symbolising righteousness) and the Kusti (a sacred cord woven from white wool, wound three times around the waist). From this day, the child is required to pray the Kusti prayers and maintain the cord daily." },
          { q: "What happens at a Parsi Lagan (wedding)?", a: "A Parsi Lagan (wedding) involves two parts: the Adar ceremony (at the fire temple, where the sacred fire witnesses the union) and the Ashirvad ceremony (the main wedding where priests bless the couple). The couple sits behind a curtain, the priests recite Avestan prayers, and at a specific moment the curtain drops and the priests scatter rice (symbolising prosperity) on the couple. The ceremony is conducted in the presence of the sacred fire and takes approximately 2 hours." },
          { q: "What is the Kusti ceremony?", a: "The Kusti is the sacred cord that every initiated Zoroastrian wears wound three times around the waist — tied and untied during prayers, with specific ritualistic movements. The Kusti prayer (Nirang-i-Kusti) is recited multiple times daily — upon waking, before prayers, and at other prescribed times. The act of tying and untying the Kusti while praying is one of the most distinctive and continuous Zoroastrian practices, maintained from the moment of Navjote throughout life." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🔥</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Parsi Wedding & Navjote — Complete Guide to Zoroastrian Ceremonies in India</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 14, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Parsi Zoroastrian community — numbering only around 60,000 in India — is one of the world&apos;s smallest religious communities and one with extraordinary cultural richness. Their ceremonies — the Navjote initiation, the Lagan wedding, the Muktad prayers for the dead — are among the most ancient living ritual traditions in the world, with roots in the Persian empire of 3,000 years ago.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Navjote is the Zoroastrian initiation — the child receives Sudreh (white garment) and Kusti (sacred cord), recites Avestan prayers, and becomes a full member of the faith. Parsi Lagan (wedding) involves Adar ceremony at the fire temple and the Ashirvad blessing ceremony with priests reciting Avestan prayers as rice is scattered on the couple.</p>
          </div>
          <h2 style={h2}>The Navjote Ceremony</h2>
          {["Preparation — the child fasts and bathes ritually before the ceremony","Nahn — a ritual purification bath with nirang (consecrated bull urine — a Zoroastrian purification agent used in specific rituals), then a regular bath","The child is dressed in new white clothes (symbolising purity)","The priest ties the Kusti around the child&apos;s waist for the first time, reciting the Avestan Navjote prayers","The child recites the Zoroastrian confession of faith (Fravarane) declaring their commitment to the Good Religion","Priests recite blessings and the community celebrates","Ashirvad — community elders offer rice and rose petals as blessings"].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document every family member&apos;s Navjote — the date, the priest, the Agiary (fire temple), the prayers recited, and photographs. With the Parsi community facing demographic challenges, the Navjote records and wedding documents of each family are irreplaceable historical and spiritual heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="parsi-wedding-navjote-traditions-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🔥</p>
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

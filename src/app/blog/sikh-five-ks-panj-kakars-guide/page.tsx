import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "The Five Ks (Panj Kakars) — A Complete Guide to Sikh Articles of Faith | OurParampara",
  description: "The Panj Kakars (Five Ks) are articles of faith worn by initiated Sikhs (Amritdharis): Kesh (uncut hair — the form given by God, representing the acceptance of God's will), Kangha (wooden comb — worn ",
  keywords: "Panj Kakars guide, Five Ks Sikhism guide, Kesh Kangha Kara Kachera Kirpan, Sikh articles of faith, why Sikhs wear five Ks, Guru Gobind Singh Five Ks",
  openGraph: { title: "The Five Ks (Panj Kakars) — A Complete Guide to Sikh Articles of Faith", description: "The Panj Kakars (Five Ks) are articles of faith worn by initiated Sikhs (Amritdharis): Kesh (uncut hair — the form given by God, representing the acceptance of God's will), Kangha (wooden comb — worn ", url: "https://www.ourparampara.com/blog/sikh-five-ks-panj-kakars-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=sikh-five-ks-panj-kakars-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=sikh-five-ks-panj-kakars-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/sikh-five-ks-panj-kakars-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="sikh-five-ks-panj-kakars-guide" title="The Five Ks (Panj Kakars) — A Complete Guide to Sikh Articles of Faith" description="The Panj Kakars (Five Ks) are articles of faith worn by initiated Sikhs (Amritdharis): Kesh (uncut hair — the form given by God, representing the acceptance of God's will), Kangha (wooden comb — worn " date="2026-06-18" category="Heritage Guide"
        faqs={[
          { q: "What are the Five Ks and what do they signify?", a: "The Panj Kakars (Five Ks) are articles of faith worn by initiated Sikhs (Amritdharis): Kesh (uncut hair — the form given by God, representing the acceptance of God's will), Kangha (wooden comb — worn in the hair, representing cleanliness and discipline), Kara (steel bracelet — worn on the right wrist, representing the infinite nature of God and the bond with the Guru), Kachera (cotton undergarment — representing moral restraint and dignity), and Kirpan (ceremonial steel sword — representing the duty to defend righteousness and protect the weak)." },
          { q: "Why did Guru Gobind Singh Ji institute the Five Ks?", a: "Guru Gobind Singh Ji instituted the Five Ks at the founding of the Khalsa in 1699 — they create a visible identity for Sikhs and a constant reminder of their commitment to the Khalsa code of conduct (Rehat Maryada). The Five Ks also served a practical purpose in the historical context: Kesh made Sikhs visible and unable to renounce their faith secretly; the Kirpan represented the obligation to resist tyranny; the Kara bound them to the Guru. Together they represent a total commitment to a life of dharma." },
          { q: "What is the Amrit Sanchar ceremony?", a: "Amrit Sanchar (also called Amrit Ceremony or Khande di Pahul) is the Sikh initiation ceremony in which a Sikh takes Amrit (the holy nectar prepared with water and Vashna patashe stirred with a Khanda sword) administered by the Panj Pyaras (Five Beloved) — initiated Sikhs. After taking Amrit, the person becomes an Amritdhari Sikh and is committed to observing the Rehat Maryada (code of conduct), including wearing the Panj Kakars." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪯</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>The Five Ks (Panj Kakars) — A Complete Guide to Sikh Articles of Faith</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Panj Kakars — the Five Ks of Sikhism — are the physical articles of faith that every initiated (Amritdhari) Sikh wears at all times. Instituted by Guru Gobind Singh Ji at the founding of the Khalsa in 1699, they are not merely religious markers but a total philosophy of life expressed in five physical objects.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Five Ks: Kesh (uncut hair — accepting God's will), Kangha (wooden comb — discipline and cleanliness), Kara (steel bracelet — infinity of God and Guru's bond), Kachera (cotton undergarment — moral restraint), Kirpan (ceremonial sword — duty to defend righteousness). Required for Amritdhari Sikhs after Amrit Sanchar initiation ceremony.</p>
          </div>

          <h2 style={h2}>Kesh — The First K</h2>
          <p style={s}>Kesh (uncut hair) is the most visible of the Five Ks and carries the deepest significance. The hair is a gift from the Creator — cutting it represents an interference with God's creation. The dastar (turban) worn over the Kesh is the Sikh's crown of honor — the outward sign of commitment to the Guru and identity as a Khalsa Sikh. For Sikh men and women who take Amrit, maintaining Kesh is among the most fundamental commitments. The decision to take Amrit and tie a dastar is one of the most significant moments in a Sikh's spiritual life.</p>
          <h2 style={h2}>Kirpan — The Fifth K</h2>
          <p style={s}>The Kirpan (ceremonial sword) is perhaps the most misunderstood of the Five Ks in the non-Sikh world. It is not a weapon but a symbol of spiritual and temporal power and the duty of a Sikh to protect the weak and resist oppression. Amritdhari Sikhs wear a Kirpan at all times — its size varies and it is worn under the clothing or on the outside depending on the individual's observance. The Kirpan represents the principle that passive acceptance of injustice is not a Sikh value — the faith requires active engagement with the world.</p>
          <h2 style={h2}>The Five Ks in Family Life</h2>
          <p style={s}>For Sikh families where members take Amrit, the Five Ks become central to daily family life — the morning Kesh maintenance (the Kesh washing and combing, the tying of the turban), the Kara on the wrist that a child notices on a parent's arm from infancy. Teaching children the meaning of each K — not just as rules but as philosophy — is how Sikh identity is transmitted. Each K tells a complete story of Sikh history and values.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document which family members have taken Amrit and observe the Panj Kakars — the specific day they took Amrit, the Gurdwara, the Panj Pyaras who administered it. The Amrit Sanchar and the commitment to the Five Ks is among the most significant spiritual events in a Sikh family's history.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="sikh-five-ks-panj-kakars-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪯</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

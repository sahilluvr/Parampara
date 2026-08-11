import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sikh Baby Names — How the Guru Granth Sahib Chooses Your Child's First Letter | OurParampara",
  description: "In Sikh tradition, the Naamkaran (naming ceremony) involves taking the baby to the Gurdwara, where the Guru Granth Sahib Ji is opened at random (Hukamnama) and the first letter of the first word on th",
  keywords: "Sikh baby names meaning, Guru Granth Sahib naming tradition, Sikh naming ceremony Naamkaran, Punjabi baby names with meaning, Singh Kaur names guide",
  openGraph: { title: "Sikh Baby Names — How the Guru Granth Sahib Chooses Your Child's First Letter", description: "In Sikh tradition, the Naamkaran (naming ceremony) involves taking the baby to the Gurdwara, where the Guru Granth Sahib Ji is opened at random (Hukamnama) and the first letter of the first word on th", url: "https://www.ourparampara.com/blog/sikh-baby-names-guru-granth-sahib-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=sikh-baby-names-guru-granth-sahib-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=sikh-baby-names-guru-granth-sahib-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/sikh-baby-names-guru-granth-sahib-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="sikh-baby-names-guru-granth-sahib-guide" title="Sikh Baby Names — How the Guru Granth Sahib Chooses Your Child's First Letter" description="In Sikh tradition, the Naamkaran (naming ceremony) involves taking the baby to the Gurdwara, where the Guru Granth Sahib Ji is opened at random (Hukamnama) and the first letter of the first word on th" date="2026-06-20" category="Heritage Guide"
        faqs={[
          { q: "How does the Sikh naming tradition work using the Guru Granth Sahib?", a: "In Sikh tradition, the Naamkaran (naming ceremony) involves taking the baby to the Gurdwara, where the Guru Granth Sahib Ji is opened at random (Hukamnama) and the first letter of the first word on the left-hand page becomes the required first letter of the baby's name. This ensures the name is chosen not by parental preference but by divine guidance through the Guru's own words — one of the most distinctive naming traditions in any faith." },
          { q: "Why do all Sikh names end in Singh or Kaur?", a: "Singh (meaning 'lion') is added to the name of every baptised Sikh male, and Kaur (meaning 'princess' or 'lioness') to every Sikh female — a tradition instituted by Guru Gobind Singh Ji at the founding of the Khalsa in 1699. This was a deliberate act of equality: it eliminated caste-based surnames, gave every Sikh woman an equal, dignified identity independent of marriage, and created a single shared family name uniting the entire Sikh community regardless of background." },
          { q: "What are popular Sikh/Punjabi baby names with meanings?", a: "Popular Sikh baby names include Gurnoor (light of the Guru), Harleen (absorbed in God), Jaspreet (one who loves virtue), Simran (meditation/remembrance), Amandeep (light of peace), Manpreet (one who loves with their heart), Navdeep (new light), Gurfateh (victory of the Guru), Ekam (the One), and Sahib (master/lord). Many names directly reflect core Sikh concepts — Waheguru, Naam, Simran — rather than purely aesthetic choices." },
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
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Sikh Baby Names — How the Guru Granth Sahib Chooses Your Child's First Letter</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 20, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Sikh naming tradition is unlike any other — the first letter of a child's name is not chosen by the parents at all, but revealed through the Guru Granth Sahib Ji itself at the Gurdwara. This practice, combined with the universal Singh and Kaur names instituted by Guru Gobind Singh Ji, makes Sikh naming one of the most spiritually meaningful and historically significant traditions in any culture. This guide explains how the tradition works and brings together names loved by Sikh families today.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Sikh naming (Naamkaran): the Guru Granth Sahib Ji is opened at random at the Gurdwara, and the first letter (Mukhwak) of the first word on the page determines the baby's required first letter. Singh (lion) is added for males, Kaur (princess) for females — instituted by Guru Gobind Singh Ji in 1699 to eliminate caste distinction. Popular names: Gurnoor, Harleen, Jaspreet, Simran, Navdeep, Ekam.</p>
          </div>

          <h2 style={h2}>The Naamkaran Ceremony Step by Step</h2>
          <p style={s}>The family brings the newborn to the Gurdwara, usually within the first weeks of life. Ardas (prayer) is offered thanking Waheguru and seeking guidance. The Granthi performs Hukamnama — opening the Guru Granth Sahib Ji at random and reading the passage on the top-left of the open page. The first letter of the first word becomes the required starting letter. The family then chooses or has already prepared a name beginning with that letter. Karah Prasad (sacred sweet) is distributed and the baby's name is announced to the congregation.</p>
          <h2 style={h2}>Names Reflecting Sikh Spiritual Concepts</h2>
          <p style={s}>Simran (remembrance/meditation), Naam (the divine name), Gurfateh (victory of the Guru), Waheguru-inspired names, Amrit (nectar), Akal (timeless/undying), Sat (truth), Ekam (the One/unity). These names directly express core Sikh theological concepts and are chosen by families who want their child's name to be, in itself, a form of daily Simran.</p>
          <h2 style={h2}>Modern Punjabi-Sikh Names</h2>
          <p style={s}>Gurnoor, Harleen, Jaspreet, Manpreet, Navdeep, Rajveer, Armaan, Gurbaaz, Inder, Avneet. These names blend traditional Punjabi sounds with meanings rooted in Sikh values — light, victory, devotion, courage — and remain consistently popular both in Punjab and across the Sikh diaspora worldwide.</p>
          <h2 style={h2}>Singh and Kaur — Living Equality</h2>
          <p style={s}>Beyond their literal meanings (lion, princess), Singh and Kaur represent one of history's earliest deliberate acts of building gender and caste equality directly into a naming system. Every initiated Sikh shares the same family name structure — a radical statement when instituted in 1699, and one that remains a living daily practice in every Sikh family today.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your child's Hukamnama — the exact passage that was read, the letter it revealed, and the name your family chose. This moment, where a random page of scripture shaped your child's identity, is one of the most spiritually distinctive stories in Sikh family heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="sikh-baby-names-guru-granth-sahib-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪯</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, names and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

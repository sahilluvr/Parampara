import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Saptapadi — The Seven Sacred Steps: Complete Guide to the Most Important Hindu Wedding Ritual | OurParampara",
  description: "The seven steps (Saptapadi) are taken around the sacred fire. The seven vows (which vary by region and tradition) broadly cover: First step — nourishment and prosperity; Second step — strength and hea",
  keywords: "Saptapadi guide, seven steps Hindu wedding, seven wedding vows Hindu, Saptapadi significance, Hindu wedding Saptapadi meaning, seven pheras meaning",
  openGraph: { title: "Saptapadi — The Seven Sacred Steps: Complete Guide to the Most Important Hindu Wedding Ritual", description: "The seven steps (Saptapadi) are taken around the sacred fire. The seven vows (which vary by region and tradition) broadly cover: First step — nourishment and prosperity; Second step — strength and hea", url: "https://www.ourparampara.com/blog/saptapadi-seven-steps-wedding-significance", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=saptapadi-seven-steps-wedding-significance", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=saptapadi-seven-steps-wedding-significance"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/saptapadi-seven-steps-wedding-significance" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="saptapadi-seven-steps-wedding-significance" title="Saptapadi — The Seven Sacred Steps: Complete Guide to the Most Important Hindu Wedding Ritual" description="The seven steps (Saptapadi) are taken around the sacred fire. The seven vows (which vary by region and tradition) broadly cover: First step — nourishment and prosperity; Second step — strength and hea" date="2026-06-18" category="Wedding Guide"
        faqs={[
          { q: "What are the seven vows (Saptapadi) in a Hindu wedding?", a: "The seven steps (Saptapadi) are taken around the sacred fire. The seven vows (which vary by region and tradition) broadly cover: First step — nourishment and prosperity; Second step — strength and health; Third step — wealth and abundance; Fourth step — happiness and wellbeing of both families; Fifth step — progeny — children and their wellbeing; Sixth step — the cycle of all seasons together; Seventh step — lifelong friendship, companionship, and the greatest step — the couple are now bound to each other before the divine. After the seventh step, the marriage is legally and spiritually complete." },
          { q: "Is the Saptapadi legally required in India?", a: "Yes — under the Hindu Marriage Act (1955), the Saptapadi (seven steps) is one of the requirements for a valid Hindu marriage. Section 7 of the Act states that a Hindu marriage may be solemnized in accordance with customary rites and ceremonies including the Saptapadi — when such rites include the Saptapadi, the marriage becomes complete and binding upon the seventh step. Without Saptapadi, the marriage may be considered incomplete under Hindu law." },
          { q: "Why is the fire (Agni) the witness of the Hindu wedding?", a: "Agni (fire) in Vedic tradition is the divine witness — the cosmic carrier of offerings between humans and the divine. The presence of fire at the wedding makes the marriage a sacred act witnessed by the divine, not just a social contract. The fire also represents: the hearth of the household the couple is establishing, the transformative power of commitment, and the light and warmth of the love being made permanent. The fire cannot be created and destroyed — it is transformed. Similarly, the Saptapadi is permanent." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Wedding Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🔥</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Saptapadi — The Seven Sacred Steps: Complete Guide to the Most Important Hindu Wedding Ritual</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Saptapadi — the seven sacred steps taken together by bride and groom around the sacred fire — is the most legally and spiritually essential ritual of the Hindu wedding. Everything else can vary across regions, communities, and traditions; the Saptapadi is universal. The marriage is complete upon the seventh step.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Saptapadi: seven steps around the sacred fire, each accompanied by a specific vow. After the seventh step, the marriage is legally and spiritually complete under Hindu law. The bride leads the first six steps in some traditions, the groom in others. The Pandit recites specific mantras for each step. In some traditions, the couple hold the palla (a connecting cloth) while taking the steps.</p>
          </div>

          <h2 style={h2}>Regional Saptapadi Variations</h2>
          <p style={s}>North India: the couple takes seven steps facing the fire — the bride leads for the first few steps (representing the wife leading the household forward), the groom leads the final ones (representing his acceptance of responsibility). South India: the groom leads all seven steps and the bride follows. Telugu tradition: the Talambralu (pouring of rice over each other) happens between the Saptapadi and the conclusion. Tamil tradition: the seven steps are called Sapthapadi and the specific Sanskrit mantras differ from North Indian traditions.</p>
          <h2 style={h2}>The Seven Vows as a Marriage Philosophy</h2>
          <p style={s}>The seven vows of the Saptapadi represent a complete philosophy of marriage: they cover the physical (nourishment, strength), the material (prosperity), the social (family wellbeing), the reproductive (children), the temporal (all seasons, all of life), and the spiritual (friendship and companionship as the highest gift). Unlike wedding vows in other traditions that focus primarily on love and fidelity, the Saptapadi covers the full spectrum of what a marriage involves — making it a remarkably comprehensive commitment.</p>
          <h2 style={h2}>Remembering the Saptapadi</h2>
          <p style={s}>Many Hindu couples discover, years after their wedding, that they cannot recall the specific mantras recited during their Saptapadi — the priest spoke them quickly in Sanskrit and the couple were overwhelmed with emotion and ceremony. Recording the Saptapadi — either as a video of the ceremony or having the priest write down the specific mantras and their meaning — is one of the most meaningful acts of wedding documentation. The couple who understands what they promised in the seven steps understands the foundation of their marriage.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your parents' or grandparents' Saptapadi — if a video exists, preserve it carefully. If not, ask the family priest or a Vedic scholar to write out the specific mantras recited at your family's weddings and their meanings. The Saptapadi is the verbal record of the most important commitment of two people's lives — it is worth understanding and preserving in full.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="saptapadi-seven-steps-wedding-significance" category="Wedding Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🔥</p>
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

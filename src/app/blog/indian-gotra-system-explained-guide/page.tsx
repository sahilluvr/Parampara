import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gotra System Explained — What It Means, Why It Matters & How to Find Yours | OurParampara",
  description: "Gotra is a lineage system in Hindu tradition that traces a family's descent to one of the ancient Vedic sage (Rishi) lineages — there are traditionally seven or eight primary Gotras (Saptarishi), incl",
  keywords: "Gotra system explained, what is gotra Hindu marriage, how to find my gotra, same gotra marriage rules, gotra meaning lineage guide",
  openGraph: { title: "Gotra System Explained — What It Means, Why It Matters & How to Find Yours", description: "Gotra is a lineage system in Hindu tradition that traces a family's descent to one of the ancient Vedic sage (Rishi) lineages — there are traditionally seven or eight primary Gotras (Saptarishi), incl", url: "https://www.ourparampara.com/blog/indian-gotra-system-explained-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-gotra-system-explained-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-gotra-system-explained-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-gotra-system-explained-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-gotra-system-explained-guide" title="Gotra System Explained — What It Means, Why It Matters & How to Find Yours" description="Gotra is a lineage system in Hindu tradition that traces a family's descent to one of the ancient Vedic sage (Rishi) lineages — there are traditionally seven or eight primary Gotras (Saptarishi), incl" date="2026-06-20" category="Heritage Guide"
        faqs={[
          { q: "What is Gotra and why is it important in Hindu marriage?", a: "Gotra is a lineage system in Hindu tradition that traces a family's descent to one of the ancient Vedic sage (Rishi) lineages — there are traditionally seven or eight primary Gotras (Saptarishi), including Bharadwaja, Vashistha, Vishwamitra, Kashyapa, Atri, Jamadagni, and Gautama. In Hindu marriage tradition, marrying within the same Gotra (Sagotra vivah) is traditionally avoided, based on the belief that people of the same Gotra share a common ancestral lineage and are considered siblings in spiritual terms, regardless of how many generations separate them." },
          { q: "How do I find out my family's Gotra?", a: "Your Gotra is inherited from your father's paternal lineage and is traditionally known by family elders — most commonly your father, grandfather, or family priest (purohit). It is often recorded in family religious documents, used during major rituals like weddings and Shradh (ancestor worship), and recited during the Sankalp (formal intention statement) at the beginning of any significant puja. If your family has lost track of this information, family priests in your ancestral hometown or regional temple records sometimes maintain historical Gotra records for specific communities." },
          { q: "Is the same-Gotra marriage rule still followed today?", a: "The traditional rule against same-Gotra marriage is still widely observed in many Hindu communities, particularly in North India, though its strictness varies significantly by region, caste community, and individual family. In some regions (parts of Haryana and Punjab, for example), the rule extends to a broader set of 'forbidden' Gotra combinations within a village. In urban and diaspora communities, the practice is followed by some families as a cultural tradition while others have moved away from it, particularly as exact ancestral lineage tracing becomes harder across generations and geographic moves." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🔱</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Gotra System Explained — What It Means, Why It Matters & How to Find Yours</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 20, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Long before a horoscope is matched or a wedding date is set, one of the first questions many Hindu families ask is quieter and older still: what is your Gotra? This ancient lineage system — tracing a family's descent to one of the original Vedic sage lineages — shapes marriage customs, ritual practice, and a family's sense of ancestral identity. This guide explains what Gotra actually means, why it matters, and how families track and use it today.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Gotra is a Hindu lineage system tracing descent to one of the ancient Vedic Rishi (sage) lineages — traditionally seven or eight Gotras including Bharadwaja, Vashistha, Vishwamitra, Kashyapa, and Atri. It's inherited through the father's line. Sagotra vivah (same-Gotra marriage) is traditionally avoided as people sharing a Gotra are considered spiritual siblings. Gotra is recited during Sankalp at the start of major pujas and weddings.</p>
          </div>

          <h2 style={h2}>The Seven (or Eight) Original Gotras</h2>
          <p style={s}>The Saptarishi Gotras trace to seven legendary Vedic sages: Bharadwaja, Vashistha, Vishwamitra, Kashyapa, Atri, Jamadagni, and Gautama (an eighth, Agastya, is sometimes included). Over thousands of years, these original lineages branched into hundreds of sub-Gotras as families spread across the subcontinent — meaning two families with completely different surnames and regions can share an ancient common Gotra, while families with similar surnames may have entirely different Gotras.</p>
          <h2 style={h2}>Why Gotra Is Recited in Puja</h2>
          <p style={s}>During the Sankalp — the formal statement of intention recited at the beginning of any significant Hindu ritual, from daily puja to weddings to Shradh ceremonies — the priest includes the worshipper's Gotra alongside their name. This act formally places the individual within their ancestral lineage as part of the ritual itself, treating the ceremony as something performed not just by an individual but by an entire chain of ancestors back to the founding sage.</p>
          <h2 style={h2}>Gotra in Marriage Matching</h2>
          <p style={s}>Beyond the basic Sagotra avoidance, some communities also check the Gotra of both the maternal and paternal lines (mother's Gotra, grandmother's Gotra) to ensure there is no overlap at all, a practice sometimes called 'three-Gotra' or 'four-Gotra' avoidance. This reflects the underlying belief that the prohibition exists to prevent marriage between people who, however distantly, share blood ancestry — a concern that predates modern genetic science by thousands of years but reflects a similar underlying logic.</p>
          <h2 style={h2}>Tracking Gotra as Families Modernise</h2>
          <p style={s}>As families move across cities, countries, and generations, Gotra knowledge is increasingly at risk of being lost — many young Hindu adults today do not know their own Gotra without asking a parent or grandparent. Recording it as a formal piece of family information, rather than relying on it being remembered only by the oldest generation, has become an important act of heritage preservation in its own right.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If you don't already have your family's Gotra recorded clearly, ask the eldest member of your family now and document it permanently — including which sage lineage it traces to and any family stories connected to it. This is exactly the kind of detail that quietly disappears within a generation if it isn't written down.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-gotra-system-explained-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🔱</p>
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

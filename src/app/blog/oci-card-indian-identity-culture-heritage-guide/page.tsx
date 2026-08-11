import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "OCI Card & Indian Cultural Identity — What It Means for NRI Families and Their Children | OurParampara",
  description: "Complete guide to OCI card and Indian cultural identity — what the OCI card allows, how it affects property rights, festival participation, and passing Indian heritage to the next generation.",
  keywords: "OCI card Indian cultural identity, OCI card NRI children, OCI card benefits India, Overseas Citizen India cultural rights, OCI card festivals temples India, NRI OCI heritage culture, OCI card second generation Indians",
  openGraph: { title: "OCI Card & Indian Cultural Identity — NRI Family Guide", description: "What the OCI card means for NRI families — practical rights, cultural participation, property, and how it connects second-generation Indians to their heritage.", url: "https://www.ourparampara.com/blog/oci-card-indian-identity-culture-heritage-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=oci-card-indian-identity-culture-heritage-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=oci-card-indian-identity-culture-heritage-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/oci-card-indian-identity-culture-heritage-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="oci-card-indian-identity-culture-heritage-guide" title="OCI Card & Indian Cultural Identity — What It Means for NRI Families and Their Children" description="What the OCI card means for NRI families — practical rights, cultural participation, property, and how it connects second-generation Indians to their heritage." date="2026-04-30" category="Heritage Guide" />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Heritage Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🇮🇳</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>OCI Card &amp; Indian Cultural Identity — What It Means for NRI Families and Their Children</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>April 30, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The OCI (Overseas Citizen of India) card is the Indian government&apos;s formal recognition of the Indian diaspora&apos;s connection to India. For NRI families, it has practical benefits — visa-free entry, property rights, and access to many services in India. But beyond the legal and administrative benefits, many families find that getting their children an OCI card carries a deeper meaning: a formal acknowledgement of their children&apos;s Indian identity, a document that says they belong to India even when they live elsewhere.</p>

          <h2 style={h2}>What the OCI Card Actually Is</h2>
          <p style={s}>OCI stands for Overseas Citizen of India. It is a lifelong, multiple-entry visa that allows foreign nationals of Indian origin (or their descendants) to live and work in India indefinitely. It was introduced in 2005 and replaced the earlier PIO (Person of Indian Origin) card scheme in 2015. The OCI card is NOT dual citizenship — it does not give the right to vote, hold public office, or purchase agricultural land in India. But for most practical cultural and family purposes, it gives OCI holders a near-citizen level of access.</p>

          <h2 style={h2}>Key Benefits for NRI Families</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Lifelong multiple-entry visa","Visit India as many times as you want for any duration — no tourist visa needed, no prior registration for stays up to 180 days"],["Work and study in India","OCI holders can work, study, and carry on business activities in India at par with Indian citizens (with some exceptions)"],["Property rights","Can purchase immovable property in India except agricultural land and plantations"],["Bank accounts and financial services","Can open NRE/NRO accounts, invest in Indian stock markets, and access most financial services"],["Cultural participation","Can participate in all cultural, religious, and heritage activities in India — temple entry, festival participation, cultural events"],["Educational benefits","Children with OCI can study in Indian universities at resident Indian rates in most (not all) institutions"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>OCI Cards for Children Born Abroad</h2>
          <p style={s}>Children born abroad to Indian citizens or OCI holders are eligible for an OCI card from birth. Many NRI families apply for their child&apos;s OCI card within the first year — it simplifies India visits (no tourist visa required), gives the child formal legal standing in India, and serves as a tangible document of their Indian identity. The OCI card needs to be renewed each time a new passport is issued until the child is 20 years old.</p>

          <h2 style={h2}>The Identity Question — What the OCI Card Means Beyond the Document</h2>
          <p style={s}>For second-generation Indians growing up in Western countries, the OCI card often carries a significance beyond its practical benefits. It is an official document that says: India recognises you as belonging here. For children navigating questions of identity — "Am I Indian? Am I British/American/Canadian? Both? Neither?" — the OCI card provides one concrete, documentable answer from the Indian state: you are connected to India, and India acknowledges that connection.</p>
          <p style={s}>Many NRI parents choose to frame the OCI card not just as a travel document but as part of their child&apos;s heritage toolkit — alongside the language, the festivals, the family visits, and the rituals. Some families have a small ceremony around receiving the OCI card, treating it as a milestone of cultural identity alongside birthdays and school graduations.</p>

          <h2 style={h2}>OCI and Temple / Religious Participation in India</h2>
          <p style={s}>OCI card holders can participate fully in religious and cultural life in India — temple entry, festival celebrations, ritual participation, and religious institutions. There are a small number of temples with specific rules about entry for non-Hindus (most notably the Padmanabhaswamy Temple in Kerala and the Guruvayur Temple) where the criteria relate to religion rather than citizenship, but the OCI card itself is not a barrier to any public temple or cultural event.</p>

          <h2 style={h2}>Applying for OCI</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Applications are submitted online at ociservices.gov.in — the portal handles applications from most countries","Documents required: foreign passport, proof of Indian origin (parent&apos;s Indian passport or OCI), birth certificate, photographs","Processing time varies from 4-12 weeks depending on the applicant&apos;s country and the Indian embassy workload","Children&apos;s OCI applications require both parents&apos; documents","OCI cards are now issued as a sticker in the passport and must be updated with each passport renewal (until age 20)","In urgent situations (travel plans), some embassies offer expedited processing for a higher fee"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.15)`, borderRadius:10, padding:"12px 16px", marginTop:20 }}>
            <p style={{ fontSize:12, color:C.charcoal, margin:0, lineHeight:1.6 }}>⚠️ Note: OCI regulations and eligibility rules are updated periodically by the Indian government. Always verify current requirements at ociservices.gov.in or through your nearest Indian embassy before applying. This guide provides general information and does not constitute legal advice.</p>
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>When your child receives their OCI card, photograph it alongside them and write a short note about what this moment means for your family — their Indian heritage, their connection to the country, and what you hope they carry forward from it. Years from now, this simple document and the note beside it will mean more than most certificates they receive.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="oci-card-indian-identity-culture-heritage-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🇮🇳</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Give your children their Indian heritage</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>An OCI card is one thread. OurParampara is where you weave the whole story — rituals, family history, elders&apos; wisdom, and traditions — for your children to carry forward.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

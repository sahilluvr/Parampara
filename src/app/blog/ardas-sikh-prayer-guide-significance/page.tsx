import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ardas — The Sikh Prayer Guide: When, How & Why It's Performed | OurParampara",
  description: "Complete guide to Ardas — the Sikh congregational prayer performed at all important life events, its structure, significance, and how families incorporate it into daily life and ceremonies.",
  keywords: "Ardas Sikh prayer guide, how to perform Ardas, Ardas significance, Sikh prayer at home, Ardas for family ceremonies, daily Ardas guide, Sikh rituals NRI families",
  openGraph: { title: "Ardas — Complete Sikh Prayer Guide", description: "When, how and why Ardas is performed — at weddings, Gurpurab, family ceremonies, and in daily Sikh life.", url: "https://www.ourparampara.com/blog/ardas-sikh-prayer-guide-significance", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=ardas-sikh-prayer-guide-significance", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=ardas-sikh-prayer-guide-significance"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/ardas-sikh-prayer-guide-significance" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="ardas-sikh-prayer-guide-significance" title="Ardas — The Sikh Prayer Guide: When, How & Why It's Performed" description="When, how and why Ardas is performed — at weddings, Gurpurab, family ceremonies, and in daily Sikh life." date="2026-05-06" category="Ritual Guide" />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Ritual Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🙏</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ardas — The Sikh Prayer Guide: When, How &amp; Why It&apos;s Performed</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>May 6, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Ardas is the Sikh congregational prayer — a standing supplication performed at the beginning and end of every religious gathering, every ceremony, every important family moment. The word Ardas comes from the Persian "arz dasht" meaning "a petition" or "a request." It is both a formal prayer and a living conversation with the Divine — encompassing praise of the Gurus, remembrance of those who sacrificed for the faith, and the specific intentions of the present gathering.</p>

          <h2 style={h2}>Structure of Ardas</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Opening — Ik Onkar","Ardas begins with the invocation of Ik Onkar (There is One God) and the opening verse of the Guru Granth Sahib Ji"],["First section — Remembrance of the Gurus","The fixed portion of Ardas — a set text recalling the ten Sikh Gurus and their contributions, passed down unchanged through Sikh history"],["Second section — Martyrs and history","Remembrance of Sikh martyrs, the five Takhts (seats of temporal and spiritual authority), and all places of Sikh pilgrimage"],["Third section — Variable/personal portion","This is the living part of Ardas — where the person leading adds the specific purpose of the gathering, names of those being prayed for, and requests of the Guru"],["Closing","Ardas closes with prayers for the welfare of all humanity: &apos;Nanak naam chardikala, tere bhane sarbat da bhala&apos; (By Nanak&apos;s name, may there always be well-being; O God, by your will, may there be peace for all)"]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>When Is Ardas Performed?</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Daily at home","Many Sikh families perform Ardas after completing Nitnem (daily prayers) in the morning and evening"],["At the Gurdwara","Before and after every programme — kirtan, katha, langar, and any ceremony"],["Weddings (Anand Karaj)","At milni, at the beginning and conclusion of the four Lavan"],["Birth of a child","Ardas is performed at the Gurdwara when naming a newborn — the Naam Karan ceremony"],["Starting something new","A new business, a new home (Griha Pravesh equivalent), a new academic year — Ardas marks all beginnings"],["In times of difficulty","Families gather for Ardas during illness, before surgery, during a crisis — as a collective prayer for strength and guidance"],["Death and mourning","Ardas is performed at the time of death, during the funeral, and during the Bhog ceremony (completion of Akhand Path) after death"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>How to Perform Ardas at Home</h2>
          <ul style={{ paddingLeft:20 }}>
            {["All present stand with hands folded (in respect and supplication) facing the Guru Granth Sahib Ji if present, or facing the direction of Harmandir Sahib (Golden Temple) in Amritsar if no Guru Granth Sahib Ji is present","One person leads — traditionally a family elder, the Granthi, or any Sikh who knows the Ardas. The congregation stands silently with bowed heads.","The first two sections are recited from memory (the fixed portion) — these are the same every time","The third section is spoken aloud with the specific intention: &apos;We ask for your blessings on the occasion of [name the event]&apos;, naming those being prayed for","At the conclusion, everyone says &apos;Waheguru ji ka Khalsa, Waheguru ji ki Fateh&apos; together — affirming the Khalsa belongs to God and victory is God&apos;s","Karah Prasad (sweet semolina offering) is distributed after Ardas as a symbol of divine blessing shared equally among all present"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Ardas for NRI Families Abroad</h2>
          <p style={s}>For Sikh families abroad, Ardas is often the single most portable and adaptable Sikh practice — it requires no special venue, no equipment, and can be performed anywhere with any number of people. Many diaspora families mark every significant moment — a child&apos;s exam results, a new job, a recovery from illness — with a family Ardas at home. Teaching children the Ardas text and its meaning is one of the most impactful ways of transmitting Sikh faith across generations.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Record an elder performing Ardas in their voice — the specific rhythm, the pauses, the emotional inflection that comes from decades of practice is something no printed text can capture. This recording, preserved on OurParampara, teaches the next generation in a way that a written guide cannot.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ardas-sikh-prayer-guide-significance" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🙏</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s prayer traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Record your elder performing Ardas, save your family&apos;s Nitnem tradition, and preserve your Sikh heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

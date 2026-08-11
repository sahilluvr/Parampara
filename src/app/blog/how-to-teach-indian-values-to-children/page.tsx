import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Teach Indian Values to Children — Respect, Dharma & Family Traditions | OurParampara",
  description: "Practical guide for parents on teaching core Indian values to children — respect for elders, dharma, seva, gratitude, festival participation, and building moral character rooted in Indian culture.",
  keywords: "teaching Indian values to children, Indian moral values kids, dharma children guide, respect elders Indian culture, Indian parenting values, Indian cultural values family",
  openGraph: { title: "How to Teach Indian Values to Children — Respect, Dharma & Family Traditions", description: "Practical guide for parents on teaching core Indian values to children — respect for elders, dharma, seva, gratitude, festival participation, and building moral character rooted in Indian culture.", url: "https://www.ourparampara.com/blog/how-to-teach-indian-values-to-children", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=how-to-teach-indian-values-to-children", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=how-to-teach-indian-values-to-children"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/how-to-teach-indian-values-to-children" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="how-to-teach-indian-values-to-children" title="How to Teach Indian Values to Children — Respect, Dharma & Family Traditions" description="Practical guide for parents on teaching core Indian values to children — respect for elders, dharma, seva, gratitude, festival participation, and building moral character rooted in Indian culture." date="2026-06-07" category="Heritage Guide"
        faqs={[
          { q: "What are the core Indian values to teach children?", a: "The core values in Indian cultural tradition include: respect for elders (pranaam culture), dharma (righteous duty), seva (selfless service), gratitude (acknowledging all that one receives), ahimsa (non-violence in thought and action), sattvik living (purity in food, thought, and action), family loyalty, and reverence for knowledge and teachers (guru-shishya tradition)." },
          { q: "How do I teach respect for elders to my child born abroad?", a: "The most effective way is modelling — children learn respect for elders by watching how their parents speak to and treat grandparents. Specific practices: teach the pranaam (touching feet) tradition with explanation of why it is done, encourage regular video calls with grandparents where the child asks questions, explain the meaning behind specific elders being addressed as Dadi, Nani, Chachi — the relational specificity teaches a worldview where relationships are named and honoured." },
          { q: "At what age should Indian values education begin?", a: "From birth. Values are transmitted through the environment before formal teaching is possible. The smell of incense during puja, the sound of prayers in the morning, the experience of being taken to a temple, seeing parents touch elders&apos; feet — all of this imprints before language. Formal age-appropriate explanation can begin from age 3-4, with deeper conversations from age 7-8." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌱</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>How to Teach Indian Values to Children — Respect, Dharma & Family Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 7, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Teaching children values is not a curriculum — it is an atmosphere. The most effective transmission of Indian values to children happens not through explanation but through lived experience: watching a parent touch a grandparent&apos;s feet, sitting in on a puja, participating in festival preparations, hearing stories at bedtime. This guide offers practical approaches for parents who want to be intentional about passing on the values they grew up with.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>The most effective way to teach Indian values to children is modelling (not lecturing), experiential learning through festivals and rituals, storytelling from Indian epics and family history, and regular contact with grandparents. Values absorbed through experience last; values taught as rules are resisted.</p>
          </div>
          <h2 style={h2}>The Core Indian Values Worth Passing On</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Pranaam & respect for elders","The physical act of touching feet is a gesture of humility and acknowledgment that wisdom deserves reverence. Explain the why — not just the what."],["Dharma","Righteous living — doing what is right even when difficult. The Ramayana and Mahabharata are full of characters navigating dharmic dilemmas children can understand."],["Seva","Selfless service — giving without expectation of return. Festival food sharing, helping neighbours, and participating in langar or community meals are practical seva."],["Ahimsa","Non-violence in thought, word, and action. This extends to how one speaks about others, how one treats animals, and how one resolves conflict."],["Gratitude","Thanking God before eating, acknowledging the efforts of those who serve, appreciating nature — gratitude is structured into daily Hindu practice through prayer."],["Family loyalty","The concept of family as one&apos;s primary community and support system. Festivals are the most natural vehicle for this — they are inherently collective."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>
          <h2 style={h2}>Age-by-Age Approach</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["0-3 years","Environment — lullabies in heritage language, festival sights and smells, touching elders&apos; feet as a daily habit, temple visits, Indian music"],["3-6 years","Stories — Ramayana and Mahabharata characters told as bedtime stories. Simple explanations of why we do puja. Involve in festival preparations actively."],["6-10 years","Understanding — explain the meaning behind traditions. What is dharma? Why do we fast? What is the story behind this festival? Children this age love knowing the why."],["10-13 years","Participation with responsibility — let them lead parts of a puja, explain a ritual to a younger cousin, help plan a festival meal. Ownership creates connection."],["13+ years","Dialogue — teenagers resist being told. Ask their opinion on traditions, discuss which ones resonate and why, share your own journey of relationship with these values. Autonomy with access."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 The most important thing</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Children don&apos;t inherit values through lectures. They inherit them through watching people they love live those values. Document your own family&apos;s value stories — the time a grandparent demonstrated extraordinary generosity, the family motto that has been repeated for generations, the specific way your family practices gratitude. These stories are the curriculum.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="how-to-teach-indian-values-to-children" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌱</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your family&apos;s ceremonies, rituals and memories on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

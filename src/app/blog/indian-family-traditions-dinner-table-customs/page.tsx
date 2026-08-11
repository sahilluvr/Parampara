import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indian Family Dinner Table Traditions — Customs, Rituals & What They Mean | OurParampara",
  description: "A guide to Indian family dining traditions — why elders eat first, serving customs, fasting rules, the significance of eating together, and how these traditions are preserved abroad.",
  keywords: "Indian family dining traditions, Indian dinner table customs, eating together Indian culture, Hindu fasting food rules, Indian food traditions NRI, preserve Indian food traditions",
  openGraph: { title: "Indian Family Dinner Table Traditions — Customs, Rituals & What They Mean", description: "A guide to Indian family dining traditions — why elders eat first, serving customs, fasting rules, the significance of eating together, and how these traditions are preserved abroad.", url: "https://www.ourparampara.com/blog/indian-family-traditions-dinner-table-customs", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-family-traditions-dinner-table-customs", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-family-traditions-dinner-table-customs"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-family-traditions-dinner-table-customs" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-family-traditions-dinner-table-customs" title="Indian Family Dinner Table Traditions — Customs, Rituals & What They Mean" description="A guide to Indian family dining traditions — why elders eat first, serving customs, fasting rules, the significance of eating together, and how these traditions are preserved abroad." date="2026-06-08" category="Heritage Guide"
        faqs={[
          { q: "Why do elders eat first in Indian families?", a: "The tradition of elders eating first in Indian families comes from the concept of guru-shishya and elder respect embedded in Hindu culture. Food is considered sacred (annam brahma — food is God), and the eldest members of a family receive the first serving as a mark of respect. In joint families, the serving order traditionally follows age hierarchy." },
          { q: "What is the significance of eating together as a family in Indian culture?", a: "Communal eating is central to Indian family culture. Sharing food is considered one of the deepest forms of connection — the act of eating together, from the same kitchen, prepared by the same hands, is a daily reaffirmation of family bonds. Festival meals are always communal. The concept of jhootha (food touched by another) has complex social meanings that reveal the depth of Indian thinking about food and relationship." },
          { q: "How do NRI families maintain Indian dining traditions abroad?", a: "Common approaches include: maintaining a no-shoes-in-the-kitchen rule, eating at least one meal a day together as a family, cooking Indian food on weekends as a shared family activity, maintaining fasting days and eating specific festival foods on specific occasions, and teaching children to help with food preparation as a cultural transmission practice." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🍽️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Indian Family Dinner Table Traditions — Customs, Rituals & What They Mean</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 8, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>In Indian families, the dinner table is rarely just about food. It is the daily gathering of the household, the space where news is shared, where elders are served first, where the aroma of the day&apos;s cooking signals which festival is approaching, where children absorb the rhythm of family life without even being aware of it. These dining traditions — small, daily, seemingly mundane — are some of the most durable and meaningful cultural transmissions in Indian family life.</p>
          <h2 style={h2}>Core Indian Dining Traditions</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Washing hands before eating","Always — a hygiene and ritual practice. Many families wash hands and feet before sitting to eat, especially for the main meal."],["Elders served first","In traditional joint families, food is served in order of age — eldest grandparents first, then parents, then children. This is a daily enactment of respect."],["Sitting on the floor","Traditional Indian eating is on the floor (on a mat or chatai), which is considered grounding and aids digestion. Many families maintain floor eating during festivals even if they use a table daily."],["Eating with the right hand","The right hand is used for eating across most Indian traditions — the left is considered impure. This practice is deeply ingrained and explained to children from an early age."],["Silence or limited talking during eating","In some traditional families, eating is a semi-sacred act — excessive talking is discouraged. In others, the meal is the main family conversation time. Both approaches reflect specific family cultures."],["Leaving food on the plate is discouraged","Wasting food is considered disrespectful in Indian culture — &apos;annam brahma&apos; (food is God). Children are taught to take only what they will eat."],["Serving is an act of love","In Indian families, the cook (usually but not always the mother or grandmother) serves rather than eating simultaneously. This service is an expression of care, not subordination — understanding this distinction is important."]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:160, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>
          <h2 style={h2}>Festival Food Traditions Worth Preserving</h2>
          <ul style={{ paddingLeft:20 }}>
            {["The specific dishes your family makes only on Diwali — and the family member who makes them","The foods that are never eaten on specific days (no meat on Tuesdays or Saturdays in many families, no onion-garlic on Ekadashi)","The first bite given to the youngest child on their birthday","The specific sweet your family makes for Holi or Eid that no recipe website has exactly right","The grandmother&apos;s way of serving — the specific plating, the order of dishes, the way she placed rotis"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>The dining traditions of a family are often the last to be deliberately preserved because they seem too ordinary — too everyday to document. But ask any NRI who has lost a grandparent what they miss most, and food — the specific taste, the specific smell, the specific way it was served — is almost always in the answer. Document your family&apos;s food traditions now.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-family-traditions-dinner-table-customs" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🍽️</p>
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

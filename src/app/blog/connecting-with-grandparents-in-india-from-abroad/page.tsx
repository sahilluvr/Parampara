import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Keeping Indian Grandparents Connected — Guide for NRI Families Living Abroad | OurParampara",
  description: "Practical guide for NRI families on maintaining meaningful bonds between grandchildren abroad and grandparents in India — rituals, technology, visits, and passing on elder wisdom.",
  keywords: "NRI grandparents India connection, grandchildren abroad grandparents India, maintaining family bonds NRI, elder wisdom preservation NRI, Indian grandparents video call, NRI family connection India",
  openGraph: { title: "Keeping Indian Grandparents Connected — NRI Family Guide", description: "How NRI families maintain meaningful bonds between grandchildren abroad and grandparents in India through rituals, technology, and regular visits.", url: "https://www.ourparampara.com/blog/connecting-with-grandparents-in-india-from-abroad", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=connecting-with-grandparents-in-india-from-abroad", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=connecting-with-grandparents-in-india-from-abroad"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/connecting-with-grandparents-in-india-from-abroad" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="connecting-with-grandparents-in-india-from-abroad" title="Keeping Indian Grandparents Connected — Guide for NRI Families Living Abroad" description="How NRI families maintain meaningful bonds between grandchildren abroad and grandparents in India through rituals, technology, and regular visits." date="2026-04-18" category="Heritage Guide" />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Heritage Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>👴</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Keeping Indian Grandparents Connected — A Guide for NRI Families Living Abroad</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>April 18, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The distance between a grandchild in Toronto and a grandparent in Chandigarh is measured in more than kilometers. It&apos;s measured in the stories never told, the recipes never passed on, the prayers never taught, the wisdom never shared. For most NRI families, this gap is the sharpest edge of the immigrant experience — the thing that no career success or standard of living can fully compensate for. But thousands of families are actively working on it, and certain approaches work better than others.</p>

          <h2 style={h2}>Why the Grandparent Connection Matters</h2>
          <p style={s}>Grandparents are the primary carriers of family-specific knowledge — not "Indian culture" in the generic sense, but your family&apos;s specific recipes, stories, ritual variations, family history, and values. This knowledge doesn&apos;t exist in any book or website. When a grandparent passes away, a portion of your family&apos;s specific heritage goes with them unless it was actively captured. For NRI families, geographic distance makes this loss more acute — the casual daily transmission that happens in a joint family doesn&apos;t occur automatically.</p>

          <h2 style={h2}>Making Video Calls Actually Work</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Same time, same day every week","A recurring calendar slot — Sunday 7 PM India / Saturday 8:30 AM EST — is far more consistent than ad-hoc calls. The predictability matters especially for elderly grandparents who structure their week around it."],["Give children a reason to talk","\"Tell Dadi about your football game\" or \"ask Nana to tell you the story of how he met Nani\" — children stay more engaged when the call has a purpose beyond just saying hello."],["Activity-based calls","Cooking together over video (grandparent in India making the same dish simultaneously), drawing together, reading aloud, or doing puja together creates shared experience rather than just conversation."],["WhatsApp voice notes for elders","Many grandparents are more comfortable with voice notes than live video. A grandchild sending a short daily voice note — \"Dadi, I learned this today\" — and receiving one back builds intimacy without the pressure of scheduled calls."],["Include grandparents in milestones","Share school performances, sports events, and celebrations via video. A grandparent watching a grandchild&apos;s school play on a screen is meaningfully present in a way that photo sharing afterwards is not."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:14, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Capturing Elder Wisdom Before It&apos;s Gone</h2>
          <p style={s}>The most important thing NRI families consistently report wishing they had done — before a grandparent&apos;s health declined or they passed away — was record their voice, their stories, and their knowledge. This doesn&apos;t require elaborate equipment or formal interviews. Some practical approaches:</p>
          <ul style={{ paddingLeft:20 }}>
            {["Ask your parent to record a voice note explaining one family recipe in their own words — their exact language and phrasing carries something that a transcribed recipe doesn&apos;t","Ask grandparents to tell the story of how they met, or what their childhood home looked like, or what they remember of their own grandparents — record it on a phone","On India visits, ask grandparents to show you how they perform a specific puja step-by-step while you film it","Photograph family heirlooms with grandparents explaining what each item is and its history","Ask elders to name all the relatives in old family photos — this is information that will be lost within a generation if not captured now"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>India Visits — Making Them Count</h2>
          <p style={s}>For most NRI families, India visits are too short and too packed with social obligations. Here are ways to ensure grandparent time is deep rather than just frequent:</p>
          <ul style={{ paddingLeft:20 }}>
            {["Give children one-on-one time with grandparents — without parents constantly present. The grandparent-grandchild relationship has its own character that develops differently without parental mediation","Ask grandparents to teach the child one specific thing — how to make one dish, how to do one puja step, how to play a specific game they played as children","Visit the grandparent&apos;s childhood home, neighborhood, or family village if possible — physical places anchor family stories in a way that nothing else does","Create a ritual specific to the visit — a specific restaurant, a specific walk, a specific game — so children look forward to it each time","If grandparents are in good health, include them in at least one activity that is primarily for the children — a park, a fair, a festival — rather than only having children sit in adult conversations"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>When Grandparents Visit You Abroad</h2>
          <p style={s}>Grandparent visits abroad are among the most potent opportunities for cultural transmission — the grandparent is present in the child&apos;s daily life, school routine, and Western context, which makes the cultural bridge concrete rather than abstract. Things that work well: grandparents teaching children to cook in your Western kitchen, grandparents accompanying children to school events, daily puja together in your home, storytelling before bedtime, and regular walks where the grandparent talks about their life.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 The most important thing</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>The grandparent-grandchild relationship is irreplaceable and time-limited. Every conversation recorded, every recipe documented, every story saved is something your children will one day be profoundly grateful for — especially in the years after the grandparent is no longer here. Start now, not when it feels urgent.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="connecting-with-grandparents-in-india-from-abroad" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>👴</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Start capturing your elders&apos; wisdom today</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>OurParampara&apos;s Elder Voice Archive is built exactly for this — record and preserve the stories, recipes, and wisdom of your family elders before they&apos;re lost.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indian Wedding Anniversary Traditions — How Hindu Families Celebrate Milestones | OurParampara",
  description: "A guide to Indian wedding anniversary traditions — significant milestones (25th, 50th), Silver and Golden Jubilee puja ceremonies, renewal of vows traditions, and how NRI families celebrate anniversaries.",
  keywords: "Indian wedding anniversary traditions, Silver Jubilee puja ceremony, Golden Jubilee Hindu wedding, 25th anniversary Indian traditions, wedding anniversary puja vidhi, NRI anniversary traditions",
  openGraph: { title: "Indian Wedding Anniversary Traditions — How Hindu Families Celebrate Milestones", description: "A guide to Indian wedding anniversary traditions — significant milestones (25th, 50th), Silver and Golden Jubilee puja ceremonies, renewal of vows traditions, and how NRI families celebrate anniversar", url: "https://www.ourparampara.com/blog/indian-wedding-anniversary-traditions-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-wedding-anniversary-traditions-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-wedding-anniversary-traditions-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-wedding-anniversary-traditions-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-wedding-anniversary-traditions-guide" title="Indian Wedding Anniversary Traditions — How Hindu Families Celebrate Milestones" description="A guide to Indian wedding anniversary traditions — significant milestones (25th, 50th), Silver and Golden Jubilee puja ceremonies, renewal of vows traditions, and how NRI families celebrate anniversar" date="2026-06-09" category="Heritage Guide"
        faqs={[
          { q: "What is a Silver Jubilee wedding anniversary in Hindu tradition?", a: "A Silver Jubilee (25th wedding anniversary) in Hindu tradition is often marked with a special puja or havan, a re-performance of key wedding rituals, a community feast, and the couple receiving blessings from elders and family. Many families also sponsor a charitable act — feeding the poor or donating to a temple — as a mark of gratitude for 25 years of marriage." },
          { q: "Is there a Hindu ritual for renewing wedding vows?", a: "While formal vow renewal is a Western concept, many Hindu families celebrate significant anniversaries with a Saptapadi — re-performing the seven sacred steps of the Hindu wedding ceremony. A priest performs a shorter version of the full wedding ceremony, the couple re-exchanges garlands, and family gathers to bless them. This is particularly common for 25th and 50th anniversaries." },
          { q: "How do NRI families celebrate wedding anniversaries with family in India?", a: "Common approaches include: video call celebrations with family in India, planning a trip to India that coincides with the anniversary, hosting a local gathering with Indian community friends, performing a brief puja at home to mark the occasion, and sending sweets or gifts to family in India on the day." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>💑</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Indian Wedding Anniversary Traditions — How Hindu Families Celebrate Milestones</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 9, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Wedding anniversaries in Indian tradition carry a weight that goes beyond the Western cake-and-card formula. In a culture where marriage is considered a sacred bond — not just a legal contract but a spiritual union witnessed by fire, elders, and the divine — each year of marriage is an achievement of dharma, and the significant milestones are marked with community, ritual, and gratitude.</p>
          <h2 style={h2}>Significant Anniversary Milestones</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["1st Anniversary","Traditionally celebrated simply — the couple visits the family temple and receives elder blessings. Many families also revisit the wedding venue or recreate the wedding meal."],["5th Anniversary","Some families perform a mini puja with the pandit who conducted the original wedding — renewing blessings on the marriage"],["11th Anniversary","Considered auspicious (11 is a sacred number) — some families sponsor a small community meal or charitable act"],["25th Anniversary — Silver Jubilee","The most commonly celebrated milestone. A full puja or havan, re-performance of some wedding rituals, a large family gathering, and often a community feast or charitable donation."],["50th Anniversary — Golden Jubilee","The most sacred milestone — rare and celebrated with deep reverence. Full re-enactment of the wedding ceremony with all available family present. Considered the highest blessing a couple can receive."],["60th Anniversary — Diamond Jubilee","Called Shasthiabdha Poorthi in South Indian tradition — a major ceremony specifically designed for this milestone, involving elaborate rituals and prayers for the couple&apos;s continued health."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>
          <h2 style={h2}>Silver Jubilee Puja — What Typically Happens</h2>
          <ul style={{ paddingLeft:20 }}>
            {["The couple visits the family temple — the same temple where the wedding was performed if possible","A puja or havan is conducted by a priest — often the same pandit or a disciple of the pandit who performed the original wedding","The couple may re-exchange garlands (varmala) and touch each other&apos;s feet as a mark of mutual respect","Elders bless the couple with akshat (rice) and flowers — a recreation of the blessing rituals from the wedding","A community meal is hosted — friends, family, and often neighbours are invited","Gifts from children and grandchildren — typically new clothes, jewellery, or a significant family trip"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your parents&apos; or grandparents&apos; anniversary celebrations — especially if they are approaching a significant milestone. The stories of their marriage — how they met, what the wedding was like, what kept them together — are the most meaningful heritage a family can preserve. Record it before the opportunity passes.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-wedding-anniversary-traditions-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💑</p>
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

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Eid ul-Adha (Bakrid) — Complete Guide to Qurbani, Prayers & Indian Traditions | OurParampara",
  description: "Eid ul-Adha 2026 is expected around June 7, 2026 (the exact date is confirmed by moon sighting, on the 10th of Dhul Hijjah). It is a national public holiday in India. Eid ul-Adha is the second major E",
  keywords: "Eid ul-Adha guide India, Bakrid traditions India, Qurbani guide Indian Muslims, Eid ul-Adha prayers guide, Bakrid meat distribution, Eid ul-Adha 2026 date",
  openGraph: { title: "Eid ul-Adha (Bakrid) — Complete Guide to Qurbani, Prayers & Indian Traditions", description: "Eid ul-Adha 2026 is expected around June 7, 2026 (the exact date is confirmed by moon sighting, on the 10th of Dhul Hijjah). It is a national public holiday in India. Eid ul-Adha is the second major E", url: "https://www.ourparampara.com/blog/eid-ul-adha-bakrid-guide-traditions", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=eid-ul-adha-bakrid-guide-traditions", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=eid-ul-adha-bakrid-guide-traditions"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/eid-ul-adha-bakrid-guide-traditions" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="eid-ul-adha-bakrid-guide-traditions" title="Eid ul-Adha (Bakrid) — Complete Guide to Qurbani, Prayers & Indian Traditions" description="Eid ul-Adha 2026 is expected around June 7, 2026 (the exact date is confirmed by moon sighting, on the 10th of Dhul Hijjah). It is a national public holiday in India. Eid ul-Adha is the second major E" date="2026-06-18" category="Festival Guide"
        faqs={[
          { q: "When is Eid ul-Adha 2026?", a: "Eid ul-Adha 2026 is expected around June 7, 2026 (the exact date is confirmed by moon sighting, on the 10th of Dhul Hijjah). It is a national public holiday in India. Eid ul-Adha is the second major Eid and is celebrated worldwide by Muslims — it coincides with the annual Hajj pilgrimage in Mecca." },
          { q: "What is Qurbani and how is it performed?", a: "Qurbani (sacrifice) is the act of slaughtering a livestock animal (goat, sheep, cow, or camel — one cow/camel can be shared by 7 people) in commemoration of Ibrahim's (Abraham's) willingness to sacrifice his son Ismail on God's command. The animal must be healthy and of specific minimum age. The meat is divided into three equal portions: one-third for the family, one-third for relatives and friends, one-third for the poor and needy. In India, Qurbani is often performed by a professional qassab (butcher) at specific Qurbangah (designated sacrifice grounds) maintained by the local Muslim community." },
          { q: "How do Indian Muslim families celebrate Eid ul-Adha?", a: "Indian Muslim families celebrate Eid ul-Adha: early morning ghusl (full bath) and new clothes; Eid ul-Adha prayers at the mosque or Eid Gah (open prayer ground); Qurbani (sacrifice) — either performed at home or contributed to a collective arrangement; preparation of meat-based Eid dishes (Biryani, Nihari, Seekh Kebabs, Sheer Khurma); distribution of meat and sweets to neighbours including non-Muslim neighbours; family visits and gathering." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Festival Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🌙</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Eid ul-Adha (Bakrid) — Complete Guide to Qurbani, Prayers & Indian Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Eid ul-Adha — the Festival of Sacrifice — commemorates the supreme test of faith: Ibrahim's willingness to sacrifice his son Ismail at God's command, and God's replacing the child with a ram at the last moment. For Indian Muslim families, it is a festival of deep religious significance, community solidarity, and the spirit of generosity — the Qurbani meat distributed to the poor being one of the most direct expressions of Islamic values in practice.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Eid ul-Adha 2026: approximately June 7 (confirmed by moon sighting on 10th Dhul Hijjah). Day begins: ghusl, new clothes, Eid prayers at mosque or Eid Gah. Qurbani (sacrifice of goat/sheep/cow): meat divided in three — family, relatives, poor. Eid foods: Biryani, Nihari, Seekh Kebab, Sheer Khurma. Distribute meat and sweets to neighbours.</p>
          </div>

          <h2 style={h2}>The Story of Ibrahim and Ismail</h2>
          <p style={s}>The Qurbani commemorates the story of Prophet Ibrahim (Abraham), who received a divine command in a dream to sacrifice his son Ismail. Ibrahim told Ismail, who willingly accepted. As Ibrahim prepared to sacrifice his son, God stopped him and said: 'You have fulfilled the vision — this is how we reward those who do good.' A ram was provided as the sacrifice instead. This story — of complete surrender to God and the reward of that surrender — is the spiritual heart of Eid ul-Adha.</p>
          <h2 style={h2}>Hajj and Eid ul-Adha</h2>
          <p style={s}>Eid ul-Adha coincides with the culminating days of the Hajj pilgrimage at Mecca — the fifth pillar of Islam. On the 10th of Dhul Hijjah, pilgrims at Hajj perform the sacrifice at Mina while Muslims worldwide perform their own Qurbani simultaneously. The collective spiritual significance of millions of Muslims worldwide performing the same sacrifice on the same day is one of the most powerful expressions of the global Muslim Ummah (community).</p>
          <h2 style={h2}>Eid ul-Adha for NRI Muslim Families</h2>
          <p style={s}>NRI Muslim families observe Eid ul-Adha through: arranging Qurbani through local halal butchers or contributing to collective community Qurbanis; attending community Eid prayers; preparing Eid foods at home; and calling family in India. Many NRI families contribute to Qurbani back in their home villages in India as an act of maintaining the family tradition even from abroad. Online Qurbani services facilitate this.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Eid ul-Adha traditions — the specific Qurbani arrangement your family makes each year, the specific meat dishes prepared, the specific people your family distributes meat to. The spirit of generosity and the specific community bonds maintained through Eid ul-Adha are core Muslim family heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="eid-ul-adha-bakrid-guide-traditions" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌙</p>
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

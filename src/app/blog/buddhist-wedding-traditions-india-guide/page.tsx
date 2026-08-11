import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Buddhist Wedding Traditions in India — Ceremonies Across Communities | OurParampara",
  description: "Buddhist weddings in India vary significantly by community (Theravada, Tibetan, Ambedkarite) but share common elements: prayers and blessings from monks or the Sangha, the taking of the five precepts ",
  keywords: "Buddhist wedding traditions India, Theravada wedding ceremony, Tibetan Buddhist wedding, Ambedkarite Buddhist marriage, Buddhist wedding guide, Indian Buddhist marriage customs",
  openGraph: { title: "Buddhist Wedding Traditions in India — Ceremonies Across Communities", description: "Buddhist weddings in India vary significantly by community (Theravada, Tibetan, Ambedkarite) but share common elements: prayers and blessings from monks or the Sangha, the taking of the five precepts ", url: "https://www.ourparampara.com/blog/buddhist-wedding-traditions-india-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=buddhist-wedding-traditions-india-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=buddhist-wedding-traditions-india-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/buddhist-wedding-traditions-india-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="buddhist-wedding-traditions-india-guide" title="Buddhist Wedding Traditions in India — Ceremonies Across Communities" description="Buddhist weddings in India vary significantly by community (Theravada, Tibetan, Ambedkarite) but share common elements: prayers and blessings from monks or the Sangha, the taking of the five precepts " date="2026-06-12" category="Wedding Guide"
        faqs={[
          { q: "What are the essential elements of a Buddhist wedding in India?", a: "Buddhist weddings in India vary significantly by community (Theravada, Tibetan, Ambedkarite) but share common elements: prayers and blessings from monks or the Sangha, the taking of the five precepts together as a couple, an exchange of vows that include Buddhist principles, and a community feast. Unlike Hindu weddings, there is no prescribed ritual framework in the Pali Canon — Buddhist weddings are cultural ceremonies to which Buddhist blessings and principles are applied." },
          { q: "How does a Tibetan Buddhist wedding ceremony work?", a: "Tibetan Buddhist weddings involve astrological consultation to choose an auspicious date, the exchange of ceremonial scarves (khatas) as a gesture of respect and blessing, prayers and blessings from a lama, a family feast with Tibetan foods, and traditional music and dance. The ceremony is as much a community celebration as a spiritual one. Monks may be invited to perform prayers at the home before or after the main ceremony." },
          { q: "What makes an Ambedkarite Buddhist wedding different?", a: "In Ambedkarite Buddhist communities, the wedding is conducted by a Buddhist officiant who leads the couple and guests in the Panchasheel (five precepts), recitation of the Three Jewels, and vows that include Buddhist ethical commitments. The 22 vows of Ambedkar may also be recited. The ceremony is typically simple and focused on ethical commitment rather than elaborate ritual. It explicitly avoids Hindu ritual elements as an expression of the community&apos;s identity." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌸</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Buddhist Wedding Traditions in India — Ceremonies Across Communities</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 12, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Buddhist weddings in India are as diverse as the Buddhist communities themselves — from the elaborate multi-day Tibetan Buddhist ceremonies of Ladakh to the simple, ethics-focused ceremonies of Ambedkarite Buddhist communities in Maharashtra, from Theravada weddings in Tamil Nadu to the wedding customs of Himalayan Buddhist communities in Arunachal Pradesh and Sikkim. Each reflects the intersection of Buddhist principles with the regional and social culture of the community.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Buddhist weddings across Indian communities share: blessings from monks or a Buddhist officiant, Panchasheel (five precepts) recited by the couple, community feast, and an ethical commitment framework. Tibetan Buddhist weddings add astrological timing, khata scarves, and lama blessings. Ambedkarite ceremonies focus on the Panchasheel and 22 vows.</p>
          </div>
          <h2 style={h2}>Wedding Traditions by Community</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Ambedkarite Buddhist wedding","Simple and ethical in focus — Buddhist officiant leads Panchasheel, Three Jewels, and vows. No Hindu elements. Community feast follows. Often conducted at the local vihara."],["Tibetan Buddhist wedding","Astrological date selection, khata exchange, lama prayers and blessings at the family home, traditional Tibetan feast with Losar foods, music and dance. The monastery may perform a separate blessing ceremony."],["Theravada wedding (Tamil Nadu/Sri Lankan communities)","Monk blessings in Pali, exchange of vows with Buddhist ethical commitments, merit-making activities like feeding monks and the poor, and a community vegetarian feast."],["Himalayan Buddhist (Sikkim, Arunachal)","Regional variations involving local deities, community elders, specific ritual foods, and the integration of local cultural elements with Buddhist blessings."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document the specific vows spoken at your family&apos;s Buddhist wedding, the monks or officiant who performed the ceremony, and any specific community customs. Buddhist wedding traditions in India are still developing and each community&apos;s approach is genuinely distinct — your family&apos;s ceremony is worth preserving in detail.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="buddhist-wedding-traditions-india-guide" category="Wedding Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌸</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, recipes and heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

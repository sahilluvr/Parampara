import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Buddha Purnima & Vesak — Complete Guide to Buddhist Traditions in India | OurParampara",
  description: "Complete guide to Buddha Purnima (Vesak) — the triple celebration of Buddha's birth, enlightenment and death, how Indian Buddhist communities celebrate, Bodh Gaya pilgrimage, and family traditions.",
  keywords: "Buddha Purnima guide, Vesak celebration India, Buddha Purnima 2026 date, Bodh Gaya pilgrimage, Indian Buddhist traditions, Buddha Jayanti celebrations",
  openGraph: { title: "Buddha Purnima & Vesak — Complete Guide to Buddhist Traditions in India", description: "Complete guide to Buddha Purnima (Vesak) — the triple celebration of Buddha's birth, enlightenment and death, how Indian Buddhist communities celebrate, Bodh Gaya pilgrimage, and family traditions.", url: "https://www.ourparampara.com/blog/buddha-purnima-vesak-traditions-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=buddha-purnima-vesak-traditions-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=buddha-purnima-vesak-traditions-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/buddha-purnima-vesak-traditions-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="buddha-purnima-vesak-traditions-guide" title="Buddha Purnima & Vesak — Complete Guide to Buddhist Traditions in India" description="Complete guide to Buddha Purnima (Vesak) — the triple celebration of Buddha's birth, enlightenment and death, how Indian Buddhist communities celebrate, Bodh Gaya pilgrimage, and family traditions." date="2026-06-09" category="Festival Guide"
        faqs={[
          { q: "When is Buddha Purnima 2026?", a: "Buddha Purnima 2026 falls on May 12, 2026. It is observed on the full moon day of the Vaisakha month. The day is a national holiday in India." },
          { q: "What are the three events celebrated on Buddha Purnima?", a: "Buddha Purnima celebrates three significant events in the Buddha's life that are all believed to have occurred on the same full moon day of Vaisakha: the birth of Siddhartha Gautama in Lumbini (c. 563 BCE), his attainment of Enlightenment (Bodhi) under the Bodhi tree in Bodh Gaya, and his passing into Parinirvana in Kushinagar." },
          { q: "What is done at Bodh Gaya on Buddha Purnima?", a: "Bodh Gaya in Bihar — the site of the Buddha's enlightenment under the Bodhi tree — is the most sacred Buddhist pilgrimage site in the world. On Buddha Purnima, hundreds of thousands of pilgrims from India, Sri Lanka, Thailand, Japan, Tibet, and around the world gather here for prayers, meditation, circumambulation of the Mahabodhi Temple, and offerings of flowers, incense, and lamps to the Bodhi tree." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>☸️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Buddha Purnima & Vesak — Complete Guide to Buddhist Traditions in India</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 9, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>Buddha Purnima — known as Vesak internationally — is the most sacred day in the Buddhist calendar, celebrating the three most significant events in the life of Siddhartha Gautama: his birth, his enlightenment, and his final passing into Parinirvana. All three are believed to have occurred on the same full moon day of the Vaisakha month, making it a day of extraordinary spiritual significance for over 500 million Buddhists worldwide.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Buddha Purnima 2026 is on May 12. Celebrated by visiting Buddhist temples or monasteries, offering flowers and incense at Buddha statues, meditation, listening to dharma talks, practicing dana (giving), releasing birds or fish (symbolic liberation), and for many Indian Buddhists, pilgrimage to Bodh Gaya.</p>
          </div>

          <h2 style={h2}>How Indian Buddhist Communities Celebrate</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Temple visits and prayers","The day begins with visits to Buddhist viharas, monasteries, or temples. Monks and laypeople gather for prayers, chanting of the Three Jewels (Buddha, Dharma, Sangha), and readings from the Pali Canon or relevant Buddhist texts."],["Offerings","Flowers (especially white flowers symbolising purity), incense, candles, and food are offered at Buddha statues. The five precepts (Pancasila) are reaffirmed by lay Buddhists."],["Dana (giving)","Generosity is a central Buddhist practice. On Buddha Purnima, many families donate food to the poor, give to monasteries, or volunteer for community service as an expression of dana."],["Meditation","Meditation sessions — guided or individual — are central to the day&apos;s spiritual practice. Many viharas organise all-day meditation programmes."],["Bodhi tree worship","In many parts of India and Sri Lanka, Bodhi trees (or their branches, transplanted from the original Bodhi tree in Bodh Gaya) receive special veneration on this day — circumambulation, offering of flowers, and prayer."],["Releasing captive animals","The symbolic liberation of caged birds, fish, or other animals is practised by many Buddhist communities on Vesak — expressing the Buddhist value of compassion for all sentient beings."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Buddhist Communities in India</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Ambedkarite Buddhists","The largest Buddhist community in India — followers of B.R. Ambedkar who converted from Scheduled Caste communities in 1956. Concentrated in Maharashtra, UP, and MP. Celebrate Buddha Purnima and the October 14 Dhamma Chakra Pravartan Diwas."],["Tibetan Buddhists","Communities in Dharamsala, Bylakuppe, Mundgod, and Ladakh. Observe Vesak with Tibetan-specific rituals, prayers in Tibetan monasteries, and the presence of the Dalai Lama at Dharamsala celebrations."],["Theravada Buddhists","Concentrated in Maharashtra, Tamil Nadu, and among communities from Myanmar and Sri Lanka. Follow Pali tradition with specific Vesak rituals including almsgiving and lantern-lighting."],["Himalayan Buddhist communities","In Sikkim, Arunachal Pradesh, and Ladakh — follow Tibetan Buddhist traditions with specific local variations including monastery festivals and community feasts."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family&apos;s specific Buddha Purnima traditions — the vihara or monastery your family visits, the specific suttas or prayers your elders recite, any family pilgrimage to Bodh Gaya or Sarnath. Buddhist heritage in India is diverse and regionally specific — your family&apos;s tradition is worth preserving in detail.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="buddha-purnima-vesak-traditions-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>☸️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, recipes and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Haridwar & Rishikesh — Complete Pilgrimage Guide, Ghats & Ganga Aarti | OurParampara",
  description: "Har ki Pauri (Steps of the Lord) at Haridwar is the most sacred ghat on the Ganga — believed to be the spot where the footprint of Lord Vishnu is embedded in the stone steps, and where a drop of the n",
  keywords: "Haridwar pilgrimage guide, Rishikesh yoga capital guide, Har ki Pauri guide, Ganga Aarti Haridwar, Haridwar Rishikesh family visit, ashram stay Rishikesh",
  openGraph: { title: "Haridwar & Rishikesh — Complete Pilgrimage Guide, Ghats & Ganga Aarti", description: "Har ki Pauri (Steps of the Lord) at Haridwar is the most sacred ghat on the Ganga — believed to be the spot where the footprint of Lord Vishnu is embedded in the stone steps, and where a drop of the n", url: "https://www.ourparampara.com/blog/haridwar-rishikesh-pilgrimage-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=haridwar-rishikesh-pilgrimage-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=haridwar-rishikesh-pilgrimage-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/haridwar-rishikesh-pilgrimage-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="haridwar-rishikesh-pilgrimage-guide" title="Haridwar & Rishikesh — Complete Pilgrimage Guide, Ghats & Ganga Aarti" description="Har ki Pauri (Steps of the Lord) at Haridwar is the most sacred ghat on the Ganga — believed to be the spot where the footprint of Lord Vishnu is embedded in the stone steps, and where a drop of the n" date="2026-06-18" category="Heritage Guide"
        faqs={[
          { q: "What is Har ki Pauri and why is it sacred?", a: "Har ki Pauri (Steps of the Lord) at Haridwar is the most sacred ghat on the Ganga — believed to be the spot where the footprint of Lord Vishnu is embedded in the stone steps, and where a drop of the nectar (Amrita) from the original Kumbh Mela contest fell. The Ganga Aarti performed here every evening is one of the most iconic and moving religious rituals in India. The ghat is the centre of all activity at Haridwar — ritual bathing, immersion of ashes, and the starting point for Char Dham Yatra." },
          { q: "What is the difference between Haridwar and Rishikesh?", a: "Haridwar (Gateway to God) and Rishikesh (Lord of Senses) are 24km apart on the Ganga. Haridwar is a major commercial pilgrimage town — busy, bustling, with intense religious activity, specific ghats for ritual bathing, and the evening Ganga Aarti. Rishikesh is calmer, predominantly yoga and ashram focused — the 'Yoga Capital of the World' with hundreds of yoga centers, ashrams, and a more contemplative atmosphere. Rishikesh is the base for all Himalayan pilgrimages (Char Dham Yatra begins from here)." },
          { q: "What ashrams are notable in Rishikesh?", a: "Notable Rishikesh ashrams: Sivananda Ashram (Divine Life Society, founded by Swami Sivananda — serious yoga and Vedanta study), Parmarth Niketan (one of the largest ashrams, hosts the international Ganga Aarti), Phool Chatti Ashram (traditional, residential sadhana), and the famous Beatles Ashram (Chaurasi Kutia — where the Beatles stayed with Maharishi Mahesh Yogi in 1968, now an eco-park). Many ashrams offer residential programs for families." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌊</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Haridwar & Rishikesh — Complete Pilgrimage Guide, Ghats & Ganga Aarti</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Haridwar and Rishikesh together form the gateway to the Himalayas — the point where the Ganga descends from the mountains to the plains, where the sacred and the spectacular converge. For millions of Indian families, a visit to Haridwar-Rishikesh is the foundational pilgrimage experience that precedes or follows the Char Dham Yatra.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Haridwar: Har ki Pauri ghat (Ganga Aarti at sunset — arrive 30 minutes early), ritual bathing in the Ganga, ashram stays. Rishikesh (24km): Yoga capital, Lakshman Jhula and Ram Jhula suspension bridges, Triveni Ghat Aarti. Ashrams: Parmarth Niketan, Sivananda Ashram. Base camp for all Himalayan pilgrimages. Best time: September-November or February-May.</p>
          </div>

          <h2 style={h2}>The Haridwar Ganga Aarti</h2>
          <p style={s}>The evening Ganga Aarti at Har ki Pauri is performed daily at sunset — the exact time changes by season. Priests in orange robes stand on the ghats and wave massive multi-tiered brass lamps over the river while bells ring, conch shells blow, and devotees release flower diyas onto the water. The reflection of the lamps on the flowing Ganga and the sound rising through the dusk is one of the most profound sensory-spiritual experiences in India. Both banks are crowded — arrive 30-45 minutes early for a good viewing position or take a boat.</p>
          <h2 style={h2}>Rishikesh for Yoga</h2>
          <p style={s}>The Rishikesh yoga scene is the most internationally significant in India — hundreds of yoga schools and ashrams cater to students from across the world. Traditional Hatha Yoga, Iyengar Yoga, Ashtanga, and Kundalini are all taught here. The International Yoga Festival in March draws practitioners from around the world. For Indian families with a yoga practice, a residential yoga retreat at a Rishikesh ashram is one of the most meaningful ways to deepen their practice in its original setting.</p>
          <h2 style={h2}>Haridwar-Rishikesh for Families</h2>
          <p style={s}>For families visiting the Himalayan pilgrimage region: Haridwar is typically the first stop (Ganga darshan and Aarti), Rishikesh the second (ashram experience, Ganga bathing at Triveni Ghat), then onward to the Char Dham. The 3-4 day Haridwar-Rishikesh stay allows time for the Aarti, bathing, temple visits, and the atmosphere of the Ganga in her most accessible Himalayan setting before the more arduous Char Dham trek.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Haridwar/Rishikesh visits — the specific Ganga Aarti you attended, the specific ghat used for bathing, the ashram your family stayed at if any. The first experience of the Ganga at Haridwar is often described as transformative — it is worth recording in detail for the generations who will follow.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="haridwar-rishikesh-pilgrimage-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌊</p>
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

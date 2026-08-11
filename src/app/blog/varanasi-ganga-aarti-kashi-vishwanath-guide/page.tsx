import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Varanasi — Complete Guide to Ganga Aarti, Kashi Vishwanath & Pilgrimage Traditions | OurParampara",
  description: "The Ganga Aarti at Dashashwamedh Ghat is performed every evening at sunset by a team of priests in a highly choreographed ritual — incense, lamps, flowers, conch shells, and fire offered to the river ",
  keywords: "Varanasi pilgrimage guide, Ganga Aarti Varanasi guide, Kashi Vishwanath darshan, Varanasi Ghats guide, significance dying in Kashi, Varanasi family pilgrimage",
  openGraph: { title: "Varanasi — Complete Guide to Ganga Aarti, Kashi Vishwanath & Pilgrimage Traditions", description: "The Ganga Aarti at Dashashwamedh Ghat is performed every evening at sunset by a team of priests in a highly choreographed ritual — incense, lamps, flowers, conch shells, and fire offered to the river ", url: "https://www.ourparampara.com/blog/varanasi-ganga-aarti-kashi-vishwanath-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=varanasi-ganga-aarti-kashi-vishwanath-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=varanasi-ganga-aarti-kashi-vishwanath-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/varanasi-ganga-aarti-kashi-vishwanath-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="varanasi-ganga-aarti-kashi-vishwanath-guide" title="Varanasi — Complete Guide to Ganga Aarti, Kashi Vishwanath & Pilgrimage Traditions" description="The Ganga Aarti at Dashashwamedh Ghat is performed every evening at sunset by a team of priests in a highly choreographed ritual — incense, lamps, flowers, conch shells, and fire offered to the river " date="2026-06-08" category="Heritage Guide"
        faqs={[
          { q: "What is the Ganga Aarti at Varanasi and when is it performed?", a: "The Ganga Aarti at Dashashwamedh Ghat is performed every evening at sunset by a team of priests in a highly choreographed ritual — incense, lamps, flowers, conch shells, and fire offered to the river Ganga. The ceremony lasts approximately 45 minutes and attracts thousands of spectators daily. Boat rides on the Ganga provide the best view. The morning aarti at sunrise is smaller and more meditative. Both are deeply moving experiences." },
          { q: "What is the significance of dying in Kashi (Varanasi)?", a: "In Hindu tradition, dying in Kashi (the ancient name for Varanasi) is believed to grant moksha (liberation from the cycle of birth and death). Lord Shiva himself is believed to whisper the Taraka Mantra into the ear of the dying person in Kashi, releasing the soul. The Manikarnika and Harishchandra Ghats are the cremation ghats — burning continuously for thousands of years. Many Hindu families bring their deceased to Varanasi for cremation, or bring the ashes for immersion in the Ganga." },
          { q: "How do I visit Kashi Vishwanath temple?", a: "The Kashi Vishwanath Temple (Jyotirlinga dedicated to Shiva) in Varanasi has a modern Vishwanath Corridor built around it. Entry is through security checks. Non-Hindus are not permitted inside the main temple. For Hindus: early morning (4-6 AM) for Mangala Aarti is the most auspicious time. Online VIP darshan booking is available. Long queues are common — arrive early or book the VIP darshan slot. The new corridor provides a more organized pilgrimage experience." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪔</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Varanasi — Complete Guide to Ganga Aarti, Kashi Vishwanath & Pilgrimage Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 8, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Varanasi — one of the world's oldest continuously inhabited cities — is the spiritual capital of Hinduism. On the banks of the Ganga, the city of Shiva (known by its ancient names Kashi and Banaras) has been drawing pilgrims for over 3,000 years. Its ghats (river steps), its cremation pyres burning day and night, its temples and narrow lanes — all together create an atmosphere that pilgrims describe as the closest they have come to touching the divine.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Varanasi is open year-round. Best time: October-March (cooler weather). Ganga Aarti at Dashashwamedh Ghat: every evening at sunset — arrive 30 minutes early for a good spot or take a boat. Kashi Vishwanath temple: online booking for darshan. Boat ride on the Ganga at dawn: the most iconic Varanasi experience. Wear comfortable walking shoes for the ghats.</p>
          </div>

          <h2 style={h2}>The Ghats of Varanasi</h2>
          <p style={s}>Varanasi has 84 ghats along the Ganga — each with its own history and significance. The most important: Dashashwamedh Ghat (Ganga Aarti, believed to be where Brahma performed a yajna), Manikarnika Ghat (main cremation ghat — burning continuously for thousands of years), Assi Ghat (the southernmost, popular for yoga and meditation at dawn), and Harishchandra Ghat (smaller cremation ghat). Walking the ghats at dawn is one of the essential Varanasi experiences.</p>
          <h2 style={h2}>Ganga Boat Ride at Dawn</h2>
          <p style={s}>A boat ride on the Ganga at dawn — typically from Dashashwamedh Ghat to Manikarnika and back — is considered one of the most powerful spiritual experiences in India. The sunrise over the city, the sounds of temple bells and morning prayers, the cremation fires at Manikarnika, and the bathers performing morning puja in the river — all witnessed from the water with distance — creates a perspective on human life that visitors describe as profoundly transformative.</p>
          <h2 style={h2}>Varanasi for Families</h2>
          <p style={s}>Varanasi is meaningful for families at specific milestones — after a family elder passes (bringing ashes for Ganga immersion), on a spiritual journey of any kind, or as part of a broader North India pilgrimage. Children can participate in releasing small diyas (floating lamps) on the Ganga at Dashashwamedh Ghat — a simple, beautiful act that connects them to the tradition.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Varanasi visits — particularly the occasion that prompted the visit, the specific ghats visited, and the experiences that stayed. Many families describe Varanasi as the pilgrimage that changed something in them permanently. These experiences are among the most important family heritage records.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="varanasi-ganga-aarti-kashi-vishwanath-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪔</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your sacred journeys, ceremonies and heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tirupati Balaji — Complete Pilgrimage Guide to Darshan, Hair Offering & Traditions | OurParampara",
  description: "Darshan at Tirumala Venkateswara temple is managed by the Tirumala Tirupati Devasthanams (TTD). Special Entry Darshan (SED) tickets can be booked online at tirupatibalaji.ap.gov.in, 120 days in advanc",
  keywords: "Tirupati Balaji pilgrimage guide, Tirupati darshan booking, Venkateswara temple guide, Tirupati hair offering tradition, Tirupati Prasadam ladoo, Tirupati NRI guide",
  openGraph: { title: "Tirupati Balaji — Complete Pilgrimage Guide to Darshan, Hair Offering & Traditions", description: "Darshan at Tirumala Venkateswara temple is managed by the Tirumala Tirupati Devasthanams (TTD). Special Entry Darshan (SED) tickets can be booked online at tirupatibalaji.ap.gov.in, 120 days in advanc", url: "https://www.ourparampara.com/blog/tirupati-balaji-pilgrimage-darshan-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=tirupati-balaji-pilgrimage-darshan-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=tirupati-balaji-pilgrimage-darshan-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/tirupati-balaji-pilgrimage-darshan-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="tirupati-balaji-pilgrimage-darshan-guide" title="Tirupati Balaji — Complete Pilgrimage Guide to Darshan, Hair Offering & Traditions" description="Darshan at Tirumala Venkateswara temple is managed by the Tirumala Tirupati Devasthanams (TTD). Special Entry Darshan (SED) tickets can be booked online at tirupatibalaji.ap.gov.in, 120 days in advanc" date="2026-06-04" category="Heritage Guide"
        faqs={[
          { q: "How do I book darshan at Tirupati Balaji?", a: "Darshan at Tirumala Venkateswara temple is managed by the Tirumala Tirupati Devasthanams (TTD). Special Entry Darshan (SED) tickets can be booked online at tirupatibalaji.ap.gov.in, 120 days in advance for ₹300 per person. Free darshan (Sarva Darshan) requires waiting in queue for 8-20 hours. Accommodation in TTD guest houses can also be booked online. NRI pilgrims have a separate quota — book through the TTD website's NRI section." },
          { q: "Why do people shave their heads at Tirupati?", a: "The tradition of Mottai (tonsure — shaving of the head) at Tirupati is called Mokkupodi in Telugu. Devotees vow to offer their hair to Lord Venkateswara as a symbol of surrendering ego (the head being the seat of pride) in gratitude for wishes fulfilled or as a prayer for blessings. Tirupati's tonsure centre (kalyana katta) shaves over 10,000 heads daily. The hair is collected, processed, and auctioned internationally — generating significant revenue for the temple." },
          { q: "What is the Tirupati Prasadam ladoo?", a: "The Tirupati Laddu (Tirupati Prasadam) is a renowned sweet made from chickpea flour, cashews, sugar, ghee, and cardamom — prepared exclusively in the temple's laddu unit under strict ritual purity conditions. The recipe has been in continuous use for over 300 years and was awarded a Geographical Indication (GI) tag. Pilgrims can purchase 2 laddus per person at the temple. The laddu is considered sacred prasad from Lord Venkateswara." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🛕</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Tirupati Balaji — Complete Pilgrimage Guide to Darshan, Hair Offering & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 4, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>The Venkateswara temple at Tirumala — known as Tirupati Balaji — is the wealthiest religious institution in the world and the most visited pilgrimage site in India, receiving an estimated 50,000-100,000 pilgrims daily. Dedicated to Lord Venkateswara (a form of Vishnu), it sits atop the Tirumala Hills at 853 metres, and the belief that the deity grants the wishes of every sincere devotee has drawn pilgrims from across India and the world for over a thousand years.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Book Special Entry Darshan at tirupatibalaji.ap.gov.in (₹300/person, 120 days advance). Alternatively queue for free Sarva Darshan (8-20 hours). NRI darshan available with separate booking. The Prasadam ladoo (₹50) must be purchased separately. Hair offering at Kalyana Katta is voluntary. Best visited weekdays to avoid weekend crowds.</p>
          </div>

          <h2 style={h2}>The Significance of Venkateswara</h2>
          <p style={s}>Lord Venkateswara is believed to be the manifestation of Vishnu in the current Kali Yuga — the age we are in — come to earth specifically to grant boons to devotees in this age of spiritual difficulty. The Tirumala hills are themselves considered sacred — the seven peaks represent the seven hoods of Adisesha (the divine serpent), and the entire region is treated as a divine domain where no alcohol, leather goods, or non-vegetarian food is permitted.</p>

          <h2 style={h2}>Planning Your Visit</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Getting there","Tirupati city is the base. Flights to Tirupati or Bangalore/Chennai and connect by bus/taxi. Free TTD buses run from Tirupati to Tirumala every few minutes."],["Darshan types","Special Entry Darshan (paid, ₹300 — 4-6 hour wait), Sarva Darshan (free — 8-20 hour wait), Divya Darshan (free — allocated by TTD), NRI Darshan (separate quota for overseas devotees)"],["What to wear","Traditional attire strongly preferred — saree/salwar for women, dhoti/kurta for men. Jeans and shorts are technically allowed but traditional dress is considered appropriate for the sacred space"],["Hair offering","At Kalyana Katta tonsure centre — not mandatory. Those who have made a vow for tonsure should inform the counter staff. Takes about 30-45 minutes."],["Prasadam ladoo","Available at dedicated counters for ₹50 per laddu (2 per person). Also included with Special Entry Darshan tickets."],["Accommodation","TTD guest houses at Tirumala (book online) or hotels in Tirupati city (25km from temple)"]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:120, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Many South Indian families visit Tirupati at specific life milestones — after a child is born, before a wedding, on a birthday or anniversary. The specific vow made, the occasion, and the experience are worth documenting in your family&apos;s heritage record. Tirupati darshan often represents the deepest moment of faith in a family&apos;s year.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="tirupati-balaji-pilgrimage-darshan-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🛕</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s pilgrimage traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your sacred journeys and spiritual traditions on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

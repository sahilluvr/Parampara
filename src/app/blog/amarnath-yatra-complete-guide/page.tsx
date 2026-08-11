import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Amarnath Yatra — Complete Pilgrimage Guide, Registration & Trek Details | OurParampara",
  description: "Amarnath Yatra registration is mandatory. Register at the Shri Amarnath Shrine Board website (shriamarnathjishrine.com) or through designated bank branches. Registration opens approximately 3 months b",
  keywords: "Amarnath Yatra guide, Amarnath pilgrimage 2026, Amarnath Yatra registration, Baltal route Amarnath, Pahalgam route Amarnath, Amarnath helicopter booking",
  openGraph: { title: "Amarnath Yatra — Complete Pilgrimage Guide, Registration & Trek Details", description: "Amarnath Yatra registration is mandatory. Register at the Shri Amarnath Shrine Board website (shriamarnathjishrine.com) or through designated bank branches. Registration opens approximately 3 months b", url: "https://www.ourparampara.com/blog/amarnath-yatra-complete-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=amarnath-yatra-complete-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=amarnath-yatra-complete-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/amarnath-yatra-complete-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="amarnath-yatra-complete-guide" title="Amarnath Yatra — Complete Pilgrimage Guide, Registration & Trek Details" description="Amarnath Yatra registration is mandatory. Register at the Shri Amarnath Shrine Board website (shriamarnathjishrine.com) or through designated bank branches. Registration opens approximately 3 months b" date="2026-06-18" category="Heritage Guide"
        faqs={[
          { q: "How do I register for Amarnath Yatra 2026?", a: "Amarnath Yatra registration is mandatory. Register at the Shri Amarnath Shrine Board website (shriamarnathjishrine.com) or through designated bank branches. Registration opens approximately 3 months before the yatra season (typically June-August). You need a compulsory health certificate from a government-authorized doctor. A yatra permit specifying date and route is issued. The yatra has a daily pilgrim limit." },
          { q: "What are the two trek routes to Amarnath?", a: "Two routes: Pahalgam route (longer, 46km round trip, 3-5 days, more gradual ascent — suitable for families with children and elderly) and Baltal route (shorter, 14km round trip, 1-2 days, steeper — suitable for physically fit pilgrims). Helicopter services are available on both routes from Pahalgam (Neelgrath helipad) and Baltal — reducing the trek to a 1-2 km walk from the helipad to the shrine. Book helicopter well in advance." },
          { q: "What is the significance of the ice Shivalinga?", a: "The Amarnath cave houses a naturally formed ice Shivalinga that waxes and wanes with the moon cycle — growing to full size on Purnima (full moon) and receding on Amavasya (new moon). The shrine is open only in summer when the snow melts sufficiently for access (approximately June to August). Lord Shiva is said to have told the story of creation to Goddess Parvati at this cave — the pigeons that rest near the cave are believed to be immortal witnesses to that divine conversation." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🏔️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Amarnath Yatra — Complete Pilgrimage Guide, Registration & Trek Details</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Amarnath Yatra — the pilgrimage to the ice Shivalinga in the Himalayan cave at 3,888 metres — is one of the most dramatic and spiritually powerful pilgrimages in India. Located in the Kashmir Himalayas, accessible only in summer for approximately 45 days, it draws hundreds of thousands of Shiva devotees each season.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Amarnath Yatra season: June-August annually. Registration mandatory at shriamarnathjishrine.com. Two routes: Pahalgam (46km, 3-5 days) and Baltal (14km, 1-2 days). Helicopter available on both routes. Health certificate mandatory. Temperature at cave: 0-10°C even in summer — carry warm clothes. Daily pilgrim limit enforced.</p>
          </div>

          <h2 style={h2}>Preparing for Amarnath Yatra</h2>
          <p style={s}>Physical preparation: begin walking 4-6 weeks before, including inclines. The Baltal route's steep descent is particularly hard on knees — trekking poles recommended. At high altitude: walk slowly, stay hydrated, avoid alcohol. Carry: warm clothes (multiple layers), raincoat (sudden storms common), trek shoes, first aid, and high-energy snacks. Ponies and palki (palanquin) are available on both routes.</p>
          <h2 style={h2}>The Cave Shrine</h2>
          <p style={s}>The Amarnath cave is approximately 30 metres tall and 15 metres deep. The ice Shivalinga forms naturally from water dripping through the cave roof and freezing in the cold. Next to the main Shivalinga are two smaller ice formations believed to represent Ganesha and Parvati. The darshan inside the cave is brief (5-10 minutes) — the experience of approaching the ice Shivalinga after days of trekking through the Himalayas is described by pilgrims as one of the most moving moments of their lives.</p>
          <h2 style={h2}>Safety and Precautions</h2>
          <p style={s}>The Amarnath Yatra passes through a security-sensitive region. Follow all security protocols. Register biometrics at the base camp. Do not trek at night. Check weather forecasts — yatra is suspended during heavy snowfall or avalanche risk. The Shrine Board maintains medical facilities along the route. Insurance is recommended. Always register your hotel accommodation details with the local police as required.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Amarnath Yatra — the year, which route taken, who came, the weather, the darshan experience, and what the ice Shivalinga looked like on the day of your visit. The Amarnath Yatra is among the most physically demanding pilgrimages in India — completing it is an achievement of faith and endurance worth recording in detail.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="amarnath-yatra-complete-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🏔️</p>
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

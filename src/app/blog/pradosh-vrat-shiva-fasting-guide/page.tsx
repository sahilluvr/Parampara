import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pradosh Vrat — Complete Guide to Shiva's Twilight Fast | OurParampara",
  description: "Complete Pradosh Vrat guide — what Pradosh is, the twilight puja to Shiva, how to perform Pradosh Vrat, the specific benefits of each day's Pradosh, 2026 Pradosh dates, and why this twice-monthly fast is one of Shiva's most powerful vratas.",
  keywords: "Pradosh Vrat guide, Pradosh puja vidhi, Shiva Pradosh fast, Pradosh Vrat 2026 dates, Som Pradosh guide, Shani Pradosh significance, how to do Pradosh Vrat, Trayodashi fast Shiva",
  openGraph: { title: "Pradosh Vrat — Complete Guide to Shiva's Twilight Fast | OurParampara", description: "Complete Pradosh Vrat guide — what Pradosh is, the twilight puja to Shiva, how to perform Pradosh Vrat, the specific benefits of each day's Pradosh, 2026 Pradosh dates, and why this twice-monthly fast is one of Shiva's most powerful vratas.", url: "https://www.ourparampara.com/blog/pradosh-vrat-shiva-fasting-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=pradosh-vrat-shiva-fasting-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=pradosh-vrat-shiva-fasting-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/pradosh-vrat-shiva-fasting-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="pradosh-vrat-shiva-fasting-guide"
        title="Pradosh Vrat — Complete Guide to Shiva's Twilight Fast | OurParampara"
        description="Complete Pradosh Vrat guide — what Pradosh is, the twilight puja to Shiva, how to perform Pradosh Vrat, the specific benefits of each day's Pradosh, 2026 Pradosh dates, and why this twice-monthly fast is one of Shiva's most powerful vratas."
        date="2026-07-10"
        category="Ritual Guide"
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Ritual Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🌙</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Pradosh Vrat</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Pradosh Vrat — observed on the Trayodashi tithi (13th day) of both the bright and dark fortnights of every lunar month — is one of the most powerful and most overlooked Shiva vratas in the Hindu tradition. Pradosh means 'twilight' — the 1.5 hour period before and after sunset. It is during this twilight period that Shiva is believed to be in his most joyful, dancing (Tandava) form, and the puja performed at this time is said to be disproportionately powerful. Fasting through the day and performing puja specifically during the twilight Pradosh period twice a month has been prescribed in the Skanda Purana as one of the most effective means of obtaining Shiva's direct blessings.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Why Pradosh Is Special</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Pradosh mythology: after the churning of the cosmic ocean, the gods were exhausted. They went to Shiva and Parvati on the 13th tithi at twilight to seek rest and blessings. Shiva, pleased with their devotion at this specific moment, promised that whoever worships him during this twilight period on the Trayodashi tithi will receive his special grace. The Pradosh period thus became the most auspicious time for Shiva puja — more powerful, the tradition holds, than other times because Shiva is most joyfully present during this window.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Seven Pradosh Days and Their Specific Benefits</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Sunday (Ravivara Pradosh):</strong> Health and freedom from disease</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Monday (Somvara Pradosh):</strong> Fulfillment of all desires — considered the most auspicious Pradosh</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Tuesday (Mangalvara Pradosh):</strong> Relief from debts and removal of enemies</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Wednesday (Budhavara Pradosh):</strong> Success in education and knowledge</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Thursday (Guruvara Pradosh):</strong> Prosperity, success, and good fortune</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Friday (Shukravara Pradosh):</strong> Love, marital happiness, and good relationships</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Saturday (Shani Pradosh):</strong> Relief from the effects of Saturn (Shani) — particularly powerful for those with Saturn affliction in their horoscope</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Pradosh Vrat Puja Vidhi</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>Fast through the day (one meal is permitted in some traditions). As sunset approaches, bathe and wear clean clothes. Set up the Shiva linga or image. As twilight begins (approximately 1.5 hours before sunset to 1 hour after), perform the main puja: Jalabhishek (water), milk abhishek, Panchamrit abhishek, offer Bel leaves (the most important offering), white flowers, Dhatura, Bhasma. Light a lamp. Recite the Pradosh Stotram or Panchakshara mantra 108 times. Perform Pradakshina (circumambulation) 3 or 7 times. After sunset, the fast is broken with fruits and a light meal.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Som Pradosh — Monday Pradosh</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>When Pradosh falls on a Monday (Somvara), it is called Som Pradosh — considered the most auspicious Pradosh of all, combining the power of Somvara (Monday, Shiva's day) with the Pradosh twilight. Som Pradosh is observed with particular devotion by those praying for marital happiness, good health, or liberation from difficulties. Many families who observe the Sawan Somvar vrat also observe Som Pradosh throughout the year — creating a regular twice-monthly rhythm of Shiva devotion.</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Pradosh is twice every month</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Unlike major festivals that come once a year, Pradosh Vrat offers the opportunity for Shiva's special grace twice every month — a regular spiritual rhythm that consistent observers describe as transformative over time.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="pradosh-vrat-shiva-fasting-guide" category="Ritual Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌙</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals, and cultural heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ram Mandir Ayodhya — Complete Pilgrimage Guide, Significance & Darshan | OurParampara",
  description: "The Ram Mandir at Ayodhya was consecrated in January 2024 — built at the site believed to be Lord Ram's birthplace. Constructed in Nagara architectural style, its consecration after decades of legal a",
  keywords: "Ram Mandir Ayodhya guide, Ayodhya pilgrimage guide, Ram Mandir darshan booking, Ram Navami Ayodhya, Lord Ram birthplace significance, Ayodhya temple pilgrimage",
  openGraph: { title: "Ram Mandir Ayodhya — Complete Pilgrimage Guide, Significance & Darshan", description: "The Ram Mandir at Ayodhya was consecrated in January 2024 — built at the site believed to be Lord Ram's birthplace. Constructed in Nagara architectural style, its consecration after decades of legal a", url: "https://www.ourparampara.com/blog/ram-mandir-ayodhya-pilgrimage-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=ram-mandir-ayodhya-pilgrimage-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=ram-mandir-ayodhya-pilgrimage-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/ram-mandir-ayodhya-pilgrimage-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="ram-mandir-ayodhya-pilgrimage-guide" title="Ram Mandir Ayodhya — Complete Pilgrimage Guide, Significance & Darshan" description="The Ram Mandir at Ayodhya was consecrated in January 2024 — built at the site believed to be Lord Ram's birthplace. Constructed in Nagara architectural style, its consecration after decades of legal a" date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What is the Ram Mandir and why is it significant?", a: "The Ram Mandir at Ayodhya was consecrated in January 2024 — built at the site believed to be Lord Ram's birthplace. Constructed in Nagara architectural style, its consecration after decades of legal and social debate has made it one of the most historically significant temples in modern India." },
          { q: "How do I visit Ram Mandir Ayodhya?", a: "The Ram Mandir is open daily. Book VIP darshan through the official website or Ayodhya Development Authority. Ram Navami and Diwali see the largest gatherings. Ayodhya is connected by train from Delhi, Lucknow, and Varanasi. Ayodhya Dham Junction was renovated with the temple consecration." },
          { q: "What other sites should I visit in Ayodhya?", a: "Key sites: Hanuman Garhi (Hanuman temple with city views), Kanak Bhavan (Sita-Ram temple with gold decor), Ram ki Paidi (Saryu river ghats for ritual bathing), Nageshwarnath Temple (one of Ayodhya's oldest), and Saryu river Aarti at sunset." },
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
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ram Mandir Ayodhya — Complete Pilgrimage Guide, Significance & Darshan</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Ram Mandir at Ayodhya — consecrated in January 2024 — represents the fulfilment of a long-held aspiration for millions of Hindus. For Indian families, an Ayodhya visit is both a spiritual journey and a witness to a historic moment.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Ram Mandir Ayodhya is open daily. Best time: Ram Navami (April) and Diwali (October-November). Nearest railway: Ayodhya Dham Junction. From Lucknow: 135km. Also visit Hanuman Garhi, Kanak Bhavan, Ram ki Paidi. Online darshan booking at shriramjanmbhoomi.in.</p>
          </div>

          <h2 style={h2}>Lord Ram — the Ideal King</h2>
          <p style={s}>Lord Ram is Maryada Purushottam — the ideal man of virtue. His qualities of filial piety, adherence to dharma, compassion, and commitment to justice make him the model of righteous conduct. The Ramayana is one of the most widely known stories in South and Southeast Asian culture.</p>
          <h2 style={h2}>Ayodhya's Sacred Geography</h2>
          <p style={s}>Ayodhya is one of the seven most sacred cities in Hinduism. Its Saryu river, 151 ghats, and dozens of ancient temples span thousands of years of history — it was the capital of the Kosala kingdom ruled by Ram's ancestors.</p>
          <h2 style={h2}>Ram Navami at Ayodhya</h2>
          <p style={s}>On Ram Navami, at the exact moment of Ram's believed birth, the sun's rays are engineered through the Ram Mandir to fall directly on Ram Lalla — a feature incorporated into the temple's architectural design. The scene is described as overwhelming by witnesses.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Ram Mandir visit — the date, who came, what was experienced, and what the visit means to your family. This generation witnesses the beginning of a pilgrimage tradition that may endure for centuries — your visit is part of that living history.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ram-mandir-ayodhya-pilgrimage-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🛕</p>
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

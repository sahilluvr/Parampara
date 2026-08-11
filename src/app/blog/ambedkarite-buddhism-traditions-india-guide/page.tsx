import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ambedkarite Buddhism — Traditions, Conversion Anniversary & Community Practices | OurParampara",
  description: "Dhamma Chakra Pravartan Din (October 14) commemorates the historic day in 1956 when Dr. B.R. Ambedkar led the mass conversion of approximately 600,000 Dalits to Buddhism at Nagpur's Diksha Bhumi. It i",
  keywords: "Ambedkarite Buddhism traditions, Dhamma Chakra Pravartan Din, Navayana Buddhism India, B R Ambedkar Buddhism guide, Buddhist conversion anniversary",
  openGraph: { title: "Ambedkarite Buddhism — Traditions, Conversion Anniversary & Community Practices", description: "Dhamma Chakra Pravartan Din (October 14) commemorates the historic day in 1956 when Dr. B.R. Ambedkar led the mass conversion of approximately 600,000 Dalits to Buddhism at Nagpur's Diksha Bhumi. It i", url: "https://www.ourparampara.com/blog/ambedkarite-buddhism-traditions-india-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=ambedkarite-buddhism-traditions-india-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=ambedkarite-buddhism-traditions-india-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/ambedkarite-buddhism-traditions-india-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="ambedkarite-buddhism-traditions-india-guide" title="Ambedkarite Buddhism — Traditions, Conversion Anniversary & Community Practices" description="Dhamma Chakra Pravartan Din (October 14) commemorates the historic day in 1956 when Dr. B.R. Ambedkar led the mass conversion of approximately 600,000 Dalits to Buddhism at Nagpur's Diksha Bhumi. It i" date="2026-06-11" category="Heritage Guide"
        faqs={[
          { q: "What is Dhamma Chakra Pravartan Din?", a: "Dhamma Chakra Pravartan Din (October 14) commemorates the historic day in 1956 when Dr. B.R. Ambedkar led the mass conversion of approximately 600,000 Dalits to Buddhism at Nagpur's Diksha Bhumi. It is the most sacred day in the Ambedkarite Buddhist calendar — hundreds of thousands of people gather at Diksha Bhumi every year for prayers, speeches, and community celebration." },
          { q: "What is Navayana Buddhism?", a: "Navayana (meaning 'New Vehicle') is the term Dr. Ambedkar used for the form of Buddhism he embraced and presented in his final work 'The Buddha and His Dhamma'. It emphasises social liberation alongside individual spiritual practice, reinterpreting traditional Buddhist concepts through the lens of social justice and equality. It is distinct from Theravada, Mahayana, and Vajrayana Buddhism while drawing on all of them." },
          { q: "How do Ambedkarite Buddhist families observe their faith?", a: "Ambedkarite Buddhist families typically maintain a home shrine with images of Buddha and Dr. Ambedkar, recite the Three Jewels (Buddha, Dhamma, Sangha) and 22 vows taken by Ambedkar, observe Buddha Purnima and October 14 as major celebrations, visit the vihara (Buddhist community centre) for dhamma discourses and puja, and educate children in the principles of social equality and Buddhist practice." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>☸️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ambedkarite Buddhism — Traditions, Conversion Anniversary & Community Practices</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 11, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>On October 14, 1956, at Nagpur&apos;s Diksha Bhumi, Dr. B.R. Ambedkar — the architect of India&apos;s Constitution — led the largest mass religious conversion in modern history: approximately 600,000 people embraced Buddhism together in a single day. This was not merely a change of religion — it was a declaration of human dignity, a rejection of caste discrimination, and the beginning of a new chapter in Indian social history. The communities that made that conversion, and their descendants, have built a living Buddhist tradition with its own practices, celebrations, and heritage.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Ambedkarite Buddhists observe two major commemorations: Buddha Purnima (May — birth, enlightenment, and Parinirvana of the Buddha) and Dhamma Chakra Pravartan Din (October 14 — Ambedkar&apos;s mass conversion at Nagpur). Home shrines feature Buddha and Ambedkar. The 22 vows of Ambedkar are recited at ceremonies.</p>
          </div>
          <h2 style={h2}>The 22 Vows of Dr. Ambedkar</h2>
          <p style={s}>When Dr. Ambedkar converted on October 14, 1956, he also administered 22 vows to the assembled converts — vows that renounced Hinduism, caste discrimination, and Hindu deities, and embraced the Buddha, the Dhamma, and the Sangha. These 22 vows are recited at Buddhist ceremonies, displayed in homes, and memorised by children in Ambedkarite Buddhist families as a foundational expression of their faith identity.</p>
          <h2 style={h2}>Community Practices</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Vihara (Buddhist community centre) visits — for weekly dhamma discourses, puja, and community gatherings","Dhamma Diksha — the formal ceremony of taking refuge in the Three Jewels and receiving the five precepts","Panchasheel — the five ethical precepts recited at the beginning of all Buddhist ceremonies and gatherings","Blue flag with Ashoka Chakra — the symbol of Ambedkarite Buddhism, displayed at homes, viharas, and during processions","Dr. Ambedkar Jayanti (April 14) — as significant a celebration as Buddha Purnima for many Ambedkarite families","Social work and education — seva (service) in the community is understood as an expression of Buddhist practice"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family was among those who converted in 1956 or in subsequent years — document that story. The specific circumstances of your family&apos;s conversion, the family member who led it, their reasons and experiences, are part of one of the most significant social and spiritual movements in modern Indian history. This is living heritage of the highest importance.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ambedkarite-buddhism-traditions-india-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>☸️</p>
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

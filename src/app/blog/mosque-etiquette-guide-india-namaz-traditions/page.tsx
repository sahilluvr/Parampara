import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mosque Visit & Namaz Guide — Etiquette, Traditions & Prayer Times for Indian Muslims | OurParampara",
  description: "The five daily prayers: Fajr (pre-dawn), Zuhr (midday), Asr (afternoon), Maghrib (sunset), Isha (night). Exact times vary by location and season — use Muslim Pro or IslamicFinder for accurate times. F",
  keywords: "mosque etiquette India guide, Namaz guide India, mosque visit dress code, Jumu'ah Friday prayers India, wudu ablution guide, mosque traditions Indian Muslims",
  openGraph: { title: "Mosque Visit & Namaz Guide — Etiquette, Traditions & Prayer Times for Indian Muslims", description: "The five daily prayers: Fajr (pre-dawn), Zuhr (midday), Asr (afternoon), Maghrib (sunset), Isha (night). Exact times vary by location and season — use Muslim Pro or IslamicFinder for accurate times. F", url: "https://www.ourparampara.com/blog/mosque-etiquette-guide-india-namaz-traditions", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=mosque-etiquette-guide-india-namaz-traditions", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=mosque-etiquette-guide-india-namaz-traditions"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/mosque-etiquette-guide-india-namaz-traditions" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="mosque-etiquette-guide-india-namaz-traditions" title="Mosque Visit & Namaz Guide — Etiquette, Traditions & Prayer Times for Indian Muslims" description="The five daily prayers: Fajr (pre-dawn), Zuhr (midday), Asr (afternoon), Maghrib (sunset), Isha (night). Exact times vary by location and season — use Muslim Pro or IslamicFinder for accurate times. F" date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What are the five daily Namaz times?", a: "The five daily prayers: Fajr (pre-dawn), Zuhr (midday), Asr (afternoon), Maghrib (sunset), Isha (night). Exact times vary by location and season — use Muslim Pro or IslamicFinder for accurate times. Friday Jumu'ah prayer replaces Zuhr for men and is performed congregationally with a khutbah (sermon)." },
          { q: "What is Wudu and how is it performed?", a: "Wudu (ritual purification before Namaz): wash hands, rinse mouth, clean nostrils, wash face, wash arms to elbows, wipe head, clean ears, wash feet — all three times each in specific sequence, right side first. Any state that breaks Wudu (passing wind, using toilet, deep sleep) requires repeating before prayer." },
          { q: "Can non-Muslims visit a mosque in India?", a: "Most mosques welcome respectful visitors outside prayer times. Visit outside Jumu'ah, inform mosque staff. Remove shoes, dress modestly (head covering for women), do not walk in front of anyone praying. Major mosques like Jama Masjid Delhi and Mecca Masjid Hyderabad have designated visitor areas." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🕌</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Mosque Visit & Namaz Guide — Etiquette, Traditions & Prayer Times for Indian Muslims</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The mosque is the centre of Muslim community life — daily prayer, Friday congregation, community gathering, and spiritual anchor. For Indian Muslim families, the specific mosque prayed at for generations is part of their heritage as much as any ritual or festival.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Five daily Namaz: Fajr, Zuhr, Asr, Maghrib, Isha. Perform Wudu before prayer. For Jumu'ah (Friday): congregational midday prayer at mosque with khutbah. Mosque visit: remove shoes, dress modestly, women cover head, observe silence during prayers, do not walk in front of anyone praying.</p>
          </div>

          <h2 style={h2}>Jumu'ah — Friday Prayer</h2>
          <p style={s}>The Friday congregational prayer is obligatory for men, recommended for women. Includes two-part khutbah (sermon) followed by two rakats. The atmosphere of hundreds praying in synchrony is one of the most powerful expressions of Muslim communal identity. Friday is sacred — recite Surah Al-Kahf, perform ghusl, make abundant dua.</p>
          <h2 style={h2}>Indian Mosque Architecture</h2>
          <p style={s}>India has some of the world's finest mosque architecture — from Mughal grandeur of Jama Masjid Delhi and Mecca Masjid Hyderabad to the ancient Arab-influenced mosques of Kerala. The Cheraman Juma Mosque in Kerala — built in 629 CE — is India's oldest mosque. The architecture reflects India's diversity: Persian, Mughal, South Indian, and local styles all appear.</p>
          <h2 style={h2}>Teaching Children Namaz</h2>
          <p style={s}>Most families begin teaching Namaz from age 7, making it obligatory by 10. Teaching: memorize Arabic prayer texts (Surah Al-Fatiha and short surahs), learn movements (qiyam, ruku, sujood, julus), understand meaning. Regular mosque attendance and praying alongside parents is the most effective method.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific mosque — its name, history, which family members have prayed there for generations, the imam your family has known. The neighbourhood mosque is often the most important community institution in a Muslim family's life.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="mosque-etiquette-guide-india-namaz-traditions" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🕌</p>
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

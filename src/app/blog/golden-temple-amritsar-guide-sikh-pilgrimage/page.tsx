import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Golden Temple Amritsar — Complete Guide to Sikh Pilgrimage, Langar & Traditions | OurParampara",
  description: "The Golden Temple (Harmandir Sahib) is open 24 hours, 365 days. The most spiritually powerful experience is Amrit Vela — the predawn hours from 3-6 AM when Gurbani kirtan begins and the atmosphere is ",
  keywords: "Golden Temple guide, Harmandir Sahib pilgrimage, Golden Temple langar guide, Amritsar Sikh pilgrimage, Golden Temple visit guide, Amrit Sarovar significance",
  openGraph: { title: "Golden Temple Amritsar — Complete Guide to Sikh Pilgrimage, Langar & Traditions", description: "The Golden Temple (Harmandir Sahib) is open 24 hours, 365 days. The most spiritually powerful experience is Amrit Vela — the predawn hours from 3-6 AM when Gurbani kirtan begins and the atmosphere is ", url: "https://www.ourparampara.com/blog/golden-temple-amritsar-guide-sikh-pilgrimage", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=golden-temple-amritsar-guide-sikh-pilgrimage", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=golden-temple-amritsar-guide-sikh-pilgrimage"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/golden-temple-amritsar-guide-sikh-pilgrimage" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="golden-temple-amritsar-guide-sikh-pilgrimage" title="Golden Temple Amritsar — Complete Guide to Sikh Pilgrimage, Langar & Traditions" description="The Golden Temple (Harmandir Sahib) is open 24 hours, 365 days. The most spiritually powerful experience is Amrit Vela — the predawn hours from 3-6 AM when Gurbani kirtan begins and the atmosphere is " date="2026-06-05" category="Heritage Guide"
        faqs={[
          { q: "What is the best time to visit the Golden Temple?", a: "The Golden Temple (Harmandir Sahib) is open 24 hours, 365 days. The most spiritually powerful experience is Amrit Vela — the predawn hours from 3-6 AM when Gurbani kirtan begins and the atmosphere is transcendent. Gurpurab (Guru Nanak Jayanti) and Baisakhi see the most elaborate celebrations. Weekday mornings are less crowded. The golden reflection on the Amrit Sarovar at dawn and dusk is particularly beautiful." },
          { q: "Is the Golden Temple langar free for everyone?", a: "Yes — langar at the Golden Temple is completely free and serves approximately 100,000 meals daily (and up to 200,000+ on festival days). It is open to all people regardless of religion, caste, nationality, or status. Everyone sits on the floor together in the principle of equality (pangat). The langar operates 24 hours. Volunteers (sevadars) run it entirely through donation and community service." },
          { q: "What should I know before visiting the Golden Temple?", a: "Cover your head — scarves are provided free at the entrance. Remove your shoes — shoe storage is provided. Wash your feet in the pool at the entrance. No tobacco, alcohol, or leather shoes inside the complex. Photography is permitted in the parikrama (circumference walkway) but not inside the inner sanctum. Modest, respectful clothing is expected. Non-Sikhs are warmly welcomed." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪯</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Golden Temple Amritsar — Complete Guide to Sikh Pilgrimage, Langar & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 5, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>The Harmandir Sahib — the Golden Temple of Amritsar — is the holiest site in Sikhism and one of the most visually stunning religious structures in the world. Set in the middle of the Amrit Sarovar (Pool of Nectar) and covered in gilded copper sheets, it glows gold in the Amritsar sun and is reflected perfectly in the sacred waters. But its profound appeal extends far beyond its beauty — the Golden Temple embodies the Sikh principles of equality, seva, and welcome for all of humanity, expressed most tangibly through its langar (free community kitchen) that feeds over 100,000 people daily.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Golden Temple (Harmandir Sahib) is open 24/7, entry free for all. Cover head (scarves provided), remove shoes, wash feet. Best time: predawn (3-6 AM) for kirtan and peaceful atmosphere. Langar (free meals) available 24 hours. Circumambulate the Amrit Sarovar clockwise for darshan. Photography allowed outside inner sanctum.</p>
          </div>

          <h2 style={h2}>History & Significance</h2>
          <p style={s}>The site of the Amrit Sarovar was identified by Guru Nanak Dev Ji himself as sacred ground. Guru Ram Das Ji excavated the sarovar in the 16th century. Guru Arjan Dev Ji built the Harmandir Sahib in the centre of the sarovar and installed the Adi Granth (the first compilation of Sikh scripture) inside. Significantly, Guru Arjan Dev Ji designed the temple with four doors — one on each cardinal direction — to symbolise that the Sikh faith is open to people from all four directions of the world, from all backgrounds and communities.</p>

          <h2 style={h2}>The Golden Temple Experience</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Amrit Vela (3-6 AM)","The most spiritually charged time — the Guru Granth Sahib Ji is brought in procession (Palki Sahib) from the Akal Takht to the Harmandir Sahib. The kirtan begins and the atmosphere is profoundly moving."],["Parikrama (Circumambulation)","Walking the marble parikrama around the Amrit Sarovar clockwise is the central act of darshan. The path is beautifully lit at night and the golden temple reflected in the water at dawn is an unforgettable sight."],["Inner sanctum (Harmandir Sahib)","Queue to enter the inner sanctum where the Guru Granth Sahib Ji rests. Ragis sing continuous kirtan. Matha Tekna (bowing before the scripture) in the presence of the Guru Granth Sahib Ji is the central act of reverence."],["Amrit Sarovar Sanan","Taking a dip in the sacred pool — considered deeply purifying and healing by devotees. Bathing ghats are available for pilgrims."],["Langar","Join the free community meal — sit on the floor in pangat (rows), receive simple dal-roti-vegetables, and experience the Sikh principle of equality made tangible."],["Akal Takht","The seat of temporal Sikh authority — the most important Takht (seat of power) in Sikhism. Located opposite the Harmandir Sahib within the complex."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Many Sikh families have a tradition of visiting the Golden Temple at specific life moments — before a wedding, when facing a major difficulty, on a major anniversary. Document your family&apos;s visits — the dates, the occasions, what was prayed for, and what was experienced. The Golden Temple visits of a family across generations form a thread of devotion that is deeply meaningful.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="golden-temple-amritsar-guide-sikh-pilgrimage" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪯</p>
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

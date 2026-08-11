import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Milad-un-Nabi — The Prophet's Birthday Traditions in Indian Muslim Families | OurParampara",
  description: "Milad-un-Nabi 2026 falls on September 4, 2026 — the 12th of Rabi ul Awwal. It is a national public holiday in India celebrated across Muslim-majority areas.",
  keywords: "Milad-un-Nabi traditions India, Eid Milad Indian Muslims, Prophet Muhammad birthday India, Mehfil-e-Milad guide, Naat recitation traditions, 12 Rabi ul Awwal India",
  openGraph: { title: "Milad-un-Nabi — The Prophet's Birthday Traditions in Indian Muslim Families", description: "Milad-un-Nabi 2026 falls on September 4, 2026 — the 12th of Rabi ul Awwal. It is a national public holiday in India celebrated across Muslim-majority areas.", url: "https://www.ourparampara.com/blog/milad-un-nabi-prophet-birthday-traditions-india", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=milad-un-nabi-prophet-birthday-traditions-india", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=milad-un-nabi-prophet-birthday-traditions-india"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/milad-un-nabi-prophet-birthday-traditions-india" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="milad-un-nabi-prophet-birthday-traditions-india" title="Milad-un-Nabi — The Prophet's Birthday Traditions in Indian Muslim Families" description="Milad-un-Nabi 2026 falls on September 4, 2026 — the 12th of Rabi ul Awwal. It is a national public holiday in India celebrated across Muslim-majority areas." date="2026-06-13" category="Festival Guide"
        faqs={[
          { q: "When is Milad-un-Nabi 2026?", a: "Milad-un-Nabi 2026 falls on September 4, 2026 — the 12th of Rabi ul Awwal. It is a national public holiday in India celebrated across Muslim-majority areas." },
          { q: "How is Milad-un-Nabi celebrated in India?", a: "Indian Muslim families celebrate with Mehfil-e-Milad (devotional gatherings where Naat is recited), decoration of mosques and homes with lights, processions, and distribution of sweets to neighbours of all faiths." },
          { q: "Is Milad-un-Nabi observed by all Muslims?", a: "Celebration is a subject of theological debate. Barelvi and Sufi-oriented Muslims celebrate enthusiastically. Deobandi and Salafi Muslims generally do not observe it, considering it an innovation. Both positions exist within Indian Muslim communities." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🕌</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Milad-un-Nabi — The Prophet's Birthday Traditions in Indian Muslim Families</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 13, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Milad-un-Nabi — the commemoration of the birth of Prophet Muhammad (PBUH) — is one of the most widely celebrated occasions in the Barelvi and Sufi traditions of Indian Islam. Observed on the 12th of Rabi ul Awwal with devotional gatherings, Naat recitation, and the expression of love for the Prophet.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Milad-un-Nabi 2026: September 4. Celebrations: Mehfil-e-Milad, Naat recitation, illumination of mosques and homes, Juloos (processions), distribution of sweets. Observed primarily by Barelvi Muslim families. National holiday in India.</p>
          </div>

          <h2 style={h2}>Mehfil-e-Milad</h2>
          <p style={s}>A devotional gathering where Naat (poetry praising the Prophet) is recited. Begins with Durood (blessings on the Prophet), proceeds through Naats describing his life, concludes with Salaam (devotional standing and salutation). Duration ranges from one hour to an entire night.</p>
          <h2 style={h2}>Naat — Poetry for the Prophet</h2>
          <p style={s}>Naat is devotional poetry in Urdu, Persian, Punjabi and other languages praising the Prophet. Indian classical and devotional singers have produced an extraordinary Naat corpus. Specific Naats of Allama Iqbal, Ameer Khusro, and Hasrat Mohani are deeply part of Indian Muslim family culture.</p>
          <h2 style={h2}>Milad for Indian Muslim Families</h2>
          <p style={s}>In Barelvi households, Milad is a domestic and communal celebration — homes cleaned and decorated, sweet dishes prepared, Mehfil-e-Milad held at home. Children are told stories of the Prophet's life and character.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Milad-un-Nabi traditions — the specific Naats recited, the sweets traditionally prepared, the Mehfil gatherings hosted or attended. Devotional traditions are among the most personal elements of religious heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="milad-un-nabi-prophet-birthday-traditions-india" category="Festival Guide"/>

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

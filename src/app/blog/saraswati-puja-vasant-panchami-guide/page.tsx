import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Saraswati Puja & Vasant Panchami — Complete Guide to Vidhi & Significance | OurParampara",
  description: "Vasant Panchami 2026 falls on February 2, 2026. It is the fifth day (Panchami) of the spring month of Magha — celebrated as the birthday of Goddess Saraswati, the deity of learning, music, arts, and w",
  keywords: "Saraswati puja vidhi, Vasant Panchami guide, Saraswati puja for students, Ayudha Puja guide, Saraswati puja samagri, Vasant Panchami 2026 date",
  openGraph: { title: "Saraswati Puja & Vasant Panchami — Complete Guide to Vidhi & Significance", description: "Vasant Panchami 2026 falls on February 2, 2026. It is the fifth day (Panchami) of the spring month of Magha — celebrated as the birthday of Goddess Saraswati, the deity of learning, music, arts, and w", url: "https://www.ourparampara.com/blog/saraswati-puja-vasant-panchami-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=saraswati-puja-vasant-panchami-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=saraswati-puja-vasant-panchami-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/saraswati-puja-vasant-panchami-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="saraswati-puja-vasant-panchami-guide" title="Saraswati Puja & Vasant Panchami — Complete Guide to Vidhi & Significance" description="Vasant Panchami 2026 falls on February 2, 2026. It is the fifth day (Panchami) of the spring month of Magha — celebrated as the birthday of Goddess Saraswati, the deity of learning, music, arts, and w" date="2026-06-18" category="Festival Guide"
        faqs={[
          { q: "When is Vasant Panchami 2026 and what is celebrated?", a: "Vasant Panchami 2026 falls on February 2, 2026. It is the fifth day (Panchami) of the spring month of Magha — celebrated as the birthday of Goddess Saraswati, the deity of learning, music, arts, and wisdom. It also marks the beginning of spring (Vasant) in North India. Yellow is the colour of the day — representing the mustard fields in bloom." },
          { q: "How do students perform Saraswati Puja?", a: "Students place their books, instruments, and tools before Goddess Saraswati on Vasant Panchami — dedicating their instruments of learning and art to her. The puja involves invoking Saraswati in the books/instruments, offering white flowers (especially white lotus or jasmine), performing aarti, and leaving the books/instruments before her without using them for one day. The next day, with Saraswati's blessing, the student resumes their studies." },
          { q: "What is Ayudha Puja?", a: "Ayudha Puja (worship of tools and instruments) is primarily a South Indian tradition observed on Vijayadashami (Dussehra), related to Saraswati Puja. On this day, all tools — vehicles, machinery, kitchen implements, musical instruments, books, weapons — are cleaned, decorated with flowers and kumkum, and worshipped. The principle is the same as Vasant Panchami: recognizing and honouring the tools through which one earns a livelihood." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>📚</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Saraswati Puja & Vasant Panchami — Complete Guide to Vidhi & Significance</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Goddess Saraswati — the deity of learning, music, arts, and wisdom — is worshipped with particular intensity on Vasant Panchami. For students and artists across India, this is the most personally meaningful festival of the year — a day when books, instruments, and tools are offered to the goddess and studies are dedicated to her.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Vasant Panchami 2026: February 2. Saraswati Puja: place books and instruments before Saraswati, offer white flowers, perform aarti. Students do not study on this day — books dedicated to Saraswati. Next day: resume with Saraswati's blessing. Yellow clothes worn on Vasant Panchami. Saraswati Vandana and Saraswati Chalisa recited.</p>
          </div>

          <h2 style={h2}>The Significance of Saraswati</h2>
          <p style={s}>Saraswati (Saras = flowing, vati = she who has) is the goddess of the flowing, creative word — speech, music, poetry, and knowledge. She is depicted holding a veena (lute), a book (Vedas), a mala (rosary), and a pot of water. She is the patron of all creative and intellectual endeavours. The Saraswati Vandana — 'Ya Kundendu Tushara Hara Dhavala' — is one of the most beautiful Sanskrit prayers, recited at the beginning of the school year and at Vasant Panchami.</p>
          <h2 style={h2}>Vasant Panchami in Schools</h2>
          <p style={s}>In many Indian schools and universities, Vasant Panchami is observed as Saraswati Puja day — books and educational materials are brought to the school, a communal puja is performed, and students are excused from studies for the day as an act of devotion. The day is treated as a celebration of learning itself — a pause to give thanks for education and to dedicate the year ahead to wisdom.</p>
          <h2 style={h2}>Regional Variations</h2>
          <p style={s}>Bengal: Saraswati Puja is one of the most important festivals — elaborate pandal installations with large Saraswati idols, followed by immersion. Bihar and UP: students place books and slates before the goddess. South India: Ayudha Puja (Vijayadashami) is the equivalent. Gujarat: Vasant Panchami observed with yellow food and kite flying. Karnataka: Basant Panchami is celebrated with seasonal spring foods and yellow decorations.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Vasant Panchami traditions — the specific books and instruments placed before Saraswati, the specific prayer recited, whether your family has a particular Saraswati image or idol. For students, the memory of placing their first textbooks before the Goddess at school or home is often one of the first religious memories — worth preserving.</p>
          </div>
        
<h2 style={h2}>Saraswati Puja Samagri List</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {["Saraswati idol or framed image","Yellow flowers — marigold and mustard blooms","Yellow cloth for the puja altar","Roli, chandan, akshat","Diya and ghee","Incense sticks","Books, pens, and musical instruments (to be blessed)","Yellow sweets — kesari halwa, saffron laddoo","Fruits","Betel leaves and supari","White or yellow saree/clothes for the deity","Panchamrit for abhishekam"].map(i=>(
              <div key={i} style={{ display:"flex", gap:6, background:"#fff", padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ color:C.saffron, fontSize:12 }}>✓</span><span style={{ fontSize:13 }}>{i}</span>
              </div>
            ))}
          </div>
<h2 style={h2}>Vidya Arambham — First Letters Ceremony</h2>
          <p style={s}>Many families also mark Vasant Panchami with Vidya Arambham — a young child's very first writing lesson, guided by an elder's hand. It's one of the most touching Saraswati-linked traditions, and detailed enough to deserve its own space: see our <Link href="/blog/saraswati-puja-vidyarambham-guide" style={{ color:C.saffron, fontWeight:600 }}>complete Vidyarambham guide</Link> for the step-by-step ritual, regional names, and diaspora adaptations.</p>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="saraswati-puja-vasant-panchami-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>📚</p>
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

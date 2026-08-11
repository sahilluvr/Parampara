import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Jain Temple (Derasar) Visit Guide — Etiquette, Prayer Rituals & What to Expect | OurParampara",
  description: "Visit on empty stomach or 2+ hours after a light meal. No leather items inside (remove belt, leave leather bags outside). Women should not enter during menstruation in many traditional temples. Wash h",
  keywords: "Jain temple visit guide, Derasar etiquette guide, Jain Puja rituals guide, Chaityavandana guide, Jain temple dress code, visiting Jain temple first time",
  openGraph: { title: "Jain Temple (Derasar) Visit Guide — Etiquette, Prayer Rituals & What to Expect", description: "Visit on empty stomach or 2+ hours after a light meal. No leather items inside (remove belt, leave leather bags outside). Women should not enter during menstruation in many traditional temples. Wash h", url: "https://www.ourparampara.com/blog/jain-temple-visit-guide-derasar-etiquette", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=jain-temple-visit-guide-derasar-etiquette", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=jain-temple-visit-guide-derasar-etiquette"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/jain-temple-visit-guide-derasar-etiquette" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="jain-temple-visit-guide-derasar-etiquette" title="Jain Temple (Derasar) Visit Guide — Etiquette, Prayer Rituals & What to Expect" description="Visit on empty stomach or 2+ hours after a light meal. No leather items inside (remove belt, leave leather bags outside). Women should not enter during menstruation in many traditional temples. Wash h" date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What should I know before visiting a Jain temple?", a: "Visit on empty stomach or 2+ hours after a light meal. No leather items inside (remove belt, leave leather bags outside). Women should not enter during menstruation in many traditional temples. Wash hands and rinse mouth before entering. Dress modestly — white or light-coloured clothing is traditional." },
          { q: "What is Chaityavandana?", a: "Chaityavandana is the Jain prayer ritual — recitation of specific mantras (Navkar Mantra, Logassa sutra) with specific hand gestures (mudras) performed before Tirthankara idols. It takes 15-30 minutes. Full Chaityavandana is performed at dawn, noon, and dusk. A shorter version is appropriate for a general visit." },
          { q: "How do I perform Darshan at a Jain temple?", a: "Remove shoes and leather items outside. Enter with clean hands, mouth rinsed. Approach the idol respectfully — no touching in Shvetambara temples. Stand with hands joined in namaste. Recite Navkar Mantra. Perform three clockwise circumambulations. Exit respectfully." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🙏</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Jain Temple (Derasar) Visit Guide — Etiquette, Prayer Rituals & What to Expect</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Jain Derasar — white marble, exquisitely carved Tirthankara idols in meditation postures, camphor and sandalwood fragrance — is a place of extraordinary serenity. Understanding Jain temple etiquette ensures your visit honours the tradition.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Jain temple visit: visit on empty stomach, no leather items, dress modestly (white preferred). Wash hands and rinse mouth. Stand before Tirthankara idol, recite Navkar Mantra, three clockwise circumambulations. No touching idols in Shvetambara tradition. No photography without permission.</p>
          </div>

          <h2 style={h2}>The Navkar Mantra</h2>
          <p style={s}>The most fundamental Jain prayer: Namo Arihantanam, Namo Siddhanam, Namo Ayariyanam, Namo Uvajjhayanam, Namo Loe Savva Sahunam. Meaning: I bow to the Arihantas, Siddhas, Acharyas, Upadhyayas, and all monks and nuns. Recited at all Jain prayers and auspicious moments.</p>
          <h2 style={h2}>Jain Puja Types</h2>
          <p style={s}>Dravya Puja: physical offerings — flowers, sandalwood, incense, lamps, rice. Bhav Puja: mental worship through prayer and meditation. Abhishek: ritual bathing of the idol with water, milk, and saffron in specific temples. Shvetambara tradition practises elaborate puja with offerings; Digambara only mental worship.</p>
          <h2 style={h2}>Famous Jain Temples</h2>
          <p style={s}>Ranakpur (1,444 uniquely carved marble pillars), Dilwara Mount Abu (finest marble temples in the world), Palitana Gujarat (800+ temples on Shatrunjaya Hill — holiest Jain pilgrimage), Gomateshwara Karnataka (57-foot Bahubali statue), Shravanabelagola Karnataka.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Jain temple visits and puja traditions — the specific Derasar attended for generations, the specific puja performed, the Paryushana fasts maintained by family members. Jain family heritage has extraordinary spiritual depth worth preserving.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="jain-temple-visit-guide-derasar-etiquette" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🙏</p>
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

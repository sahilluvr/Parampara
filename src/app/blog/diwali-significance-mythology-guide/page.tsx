import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Diwali — Complete Guide to the Festival of Lights: Stories, Significance & Traditions | OurParampara",
  description: "Multiple traditions explain Diwali: (1) Ram's return to Ayodhya — the most widely known: after 14 years of exile and defeating Ravana, Lord Ram returns to Ayodhya with Sita and Lakshmana; the citizens",
  keywords: "Diwali significance guide, Diwali mythology stories, why Diwali is celebrated, Diwali five days significance, Diwali Ram return story, Diwali Lakshmi significance",
  openGraph: { title: "Diwali — Complete Guide to the Festival of Lights: Stories, Significance & Traditions", description: "Multiple traditions explain Diwali: (1) Ram's return to Ayodhya — the most widely known: after 14 years of exile and defeating Ravana, Lord Ram returns to Ayodhya with Sita and Lakshmana; the citizens", url: "https://www.ourparampara.com/blog/diwali-significance-mythology-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=diwali-significance-mythology-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=diwali-significance-mythology-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/diwali-significance-mythology-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="diwali-significance-mythology-guide" title="Diwali — Complete Guide to the Festival of Lights: Stories, Significance & Traditions" description="Multiple traditions explain Diwali: (1) Ram's return to Ayodhya — the most widely known: after 14 years of exile and defeating Ravana, Lord Ram returns to Ayodhya with Sita and Lakshmana; the citizens" date="2026-06-18" category="Festival Guide"
        faqs={[
          { q: "Why is Diwali celebrated — what are the different stories?", a: "Multiple traditions explain Diwali: (1) Ram's return to Ayodhya — the most widely known: after 14 years of exile and defeating Ravana, Lord Ram returns to Ayodhya with Sita and Lakshmana; the citizens light lamps to welcome them. (2) Lakshmi's birth — on Diwali day (Amavasya of Kartik), Goddess Lakshmi is believed to have emerged from the churning of the cosmic ocean. (3) Narakasura's defeat — Lord Krishna defeats the demon Narakasura on the day before Diwali (celebrated as Naraka Chaturdashi). (4) Mahavira's Nirvana (Jains). (5) Bali's story — in some traditions, Diwali commemorates King Bali's reign, when Vishnu as Vamana pushed him underground." },
          { q: "What are the five days of Diwali?", a: "Five days: Dhanteras (Day 1) — purchase of gold, silver, or cookware is auspicious; worship of Dhanvantari (god of medicine) and Lakshmi; lamp lighting begins. Naraka Chaturdashi/Choti Diwali (Day 2) — early morning oil bath, defeat of Narakasura; in South India this is the main Diwali day. Lakshmi Puja/Diwali (Day 3, main day) — Lakshmi and Ganesha puja in the evening; fireworks; gifts. Govardhan Puja/Annakut (Day 4) — worship of Govardhan and distribution of food; in Marathi communities this is Padva (husbands honour wives). Bhai Dooj (Day 5) — siblings celebrate; sister puts tilak on brother's forehead." },
          { q: "What is the spiritual significance of the Diwali lamp?", a: "The lit lamp (diya) is the central symbol of Diwali — representing the victory of light over darkness, knowledge over ignorance, and good over evil. In Hindu philosophy, the lamp represents the Atman (individual soul) that is never extinguished — the outer lamp is lit to honour the inner light. The tradition of lighting a lamp each day at the entrance of the home is an act of welcoming the divine into the household and of asserting the presence of light against the forces of darkness." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪔</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Diwali — Complete Guide to the Festival of Lights: Stories, Significance & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Diwali — the Festival of Lights — is India's most universally celebrated festival, observed across Hindu, Jain, Sikh, and some Buddhist communities. Its five days carry different stories, different deities, and different rituals — but they share the central symbol of the lamp and the universal human aspiration toward light, prosperity, and the victory of good.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Diwali 2026: approximately October 19 (Kartik Amavasya). Five days: Dhanteras, Naraka Chaturdashi, Lakshmi Puja (main day), Govardhan Puja, Bhai Dooj. Main puja: Lakshmi and Ganesha at Pradosh kaal (after sunset). The five-day sequence honours different deities and tells different stories — understanding all five deepens the festival's meaning.</p>
          </div>

          <h2 style={h2}>Regional Diwali Differences</h2>
          <p style={s}>Diwali looks different across India: North India — Ram's return to Ayodhya is the primary narrative; elaborate sweets, fireworks, Lakshmi puja. South India — Naraka Chaturdashi (Day 2) is the main day; early morning oil bath before sunrise; different sweets (murukku, mixture). West Bengal — Kali Puja on Diwali night (Goddess Kali is worshipped instead of Lakshmi). Gujarat — Diwali is also the Gujarati New Year (Bestu Varas — the day after Diwali). Jain tradition — Mahavira's Nirvana. The same festival, celebrated very differently.</p>
          <h2 style={h2}>Diwali Sweets and Foods</h2>
          <p style={s}>Diwali sweets vary by region: North India — ladoo, barfi, gulab jamun, halwa. West India (Gujarat, Rajasthan) — mathri, gajak, chakli, besan barfi. South India — murukku, mixture, aval, sweet pongal. Andhra/Telangana — Chakram (sweet rice flour rings), Gavvalu (shell-shaped sweet). Bengal — Sandesh, misti doi. The tradition of exchanging sweets and dry fruits between households at Diwali is one of the most community-building aspects of the festival.</p>
          <h2 style={h2}>Diwali Abroad</h2>
          <p style={s}>Diwali has become a globally celebrated festival — from Trafalgar Square in London to Times Square in New York, from Singapore to Fiji. For NRI families, Diwali is the most important annual expression of cultural identity — the decorating of the home with diyas and rangoli, the making of sweets, the Lakshmi puja, and the exchange of gifts with other Indian families. Diwali in the diaspora is also evolving — incorporating elements from multiple regional traditions as Indian communities merge outside India.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific Diwali traditions — the specific sweets made (which family member makes them, the specific recipes), the specific sequence of the Lakshmi puja, which room the family gathers in, the specific diyas that have been in the family for years. Diwali is the most layered and multi-dimensional of all Indian festivals — its specific expression in your family is unique and worth preserving.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="diwali-significance-mythology-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪔</p>
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

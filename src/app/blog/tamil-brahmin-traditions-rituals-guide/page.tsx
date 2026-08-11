import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tamil Brahmin Traditions — Iyer & Iyengar Rituals, Festivals & Family Customs | OurParampara",
  description: "A guide to Tamil Brahmin (Iyer and Iyengar) traditions — Sandhyavandanam, Brahmopadesam, specific festival observances, wedding customs, and the distinct cultural heritage of Tamil Brahmin families.",
  keywords: "Tamil Brahmin traditions, Iyer traditions guide, Iyengar traditions guide, Sandhyavandanam guide, Tamil Brahmin wedding, Brahmopadesam ceremony, Tamil Brahmin festivals",
  openGraph: { title: "Tamil Brahmin Traditions — Iyer & Iyengar Rituals, Festivals & Family Customs", description: "A guide to Tamil Brahmin (Iyer and Iyengar) traditions — Sandhyavandanam, Brahmopadesam, specific festival observances, wedding customs, and the distinct cultural heritage of Tamil Brahmin families.", url: "https://www.ourparampara.com/blog/tamil-brahmin-traditions-rituals-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=tamil-brahmin-traditions-rituals-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=tamil-brahmin-traditions-rituals-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/tamil-brahmin-traditions-rituals-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="tamil-brahmin-traditions-rituals-guide" title="Tamil Brahmin Traditions — Iyer & Iyengar Rituals, Festivals & Family Customs" description="A guide to Tamil Brahmin (Iyer and Iyengar) traditions — Sandhyavandanam, Brahmopadesam, specific festival observances, wedding customs, and the distinct cultural heritage of Tamil Brahmin families." date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What is the difference between Iyer and Iyengar traditions?", a: "Iyers are Tamil Brahmins who are Shaivites — devotees of Lord Shiva — following the Smarta tradition. Iyengars are Vaishnavites — devotees of Lord Vishnu — following either the Vadakalai or Thenkalai traditions of Ramanuja's Sri Vaishnavism. The two communities have distinct temple traditions, marriage customs, food practices (Iyengars traditionally avoid onion and garlic), and ritual procedures, while sharing the Tamil Brahmin cultural framework." },
          { q: "What is Sandhyavandanam?", a: "Sandhyavandanam is the daily ritual prayer practice for male Brahmins, performed three times a day — at dawn (Pratah Sandhya), noon (Madhyahna Sandhya), and dusk (Sayam Sandhya). It involves specific prayers, ritual bathing, mantra recitation, and offering of water to the Sun (Arghya). It is performed after the Upanayanam (sacred thread ceremony) and is considered a daily religious obligation. Many Tamil Brahmin families have maintained this practice for generations." },
          { q: "What is Brahmopadesam?", a: "Brahmopadesam (also called Upanayanam or the sacred thread ceremony) is the initiation ceremony for Brahmin boys, typically performed between ages 7-12. The boy is initiated into the Gayatri Mantra by his father or a family elder, receives the sacred thread (Yajnopavita), and begins the daily practice of Sandhyavandanam. For Tamil Brahmin families, this is one of the most significant samskaras and is celebrated with a large family gathering." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪔</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Tamil Brahmin Traditions — Iyer & Iyengar Rituals, Festivals & Family Customs</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>Tamil Brahmin communities — Iyer and Iyengar — carry one of India&apos;s most distinct and well-preserved cultural traditions. Their food, their Sanskrit-Tamil linguistic blending, their specific festival observances, their wedding rituals, and their daily practice of Sandhyavandanam represent a living tradition of considerable depth. For families within this community, these practices are not merely religious — they are the texture of daily life.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Tamil Brahmin traditions include: Sandhyavandanam (daily prayers 3x/day), Brahmopadesam (sacred thread ceremony), specific Tamil calendar festivals (Karthigai Deepam, Aadi Perukku, Thai Pongal), Iyengar avoidance of onion-garlic, and elaborate multi-day weddings with Vara Puja, Oonjal (swing ceremony), and Saptapadi.</p>
          </div>

          <h2 style={h2}>Daily & Weekly Practices</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Sandhyavandanam","The daily prayer ritual at dawn, noon, and dusk for initiated Brahmin males — one of the most consistent daily religious practices in any Indian tradition"],["Varalakshmi Vratam","Observed by Iyer and Iyengar women in the Shravan month — considered one of the most important pujas of the year"],["Karthigai Deepam","A distinctly South Indian festival of lights (more important than Diwali for many Tamil families) — homes and temples are lit with rows of lamps on the Karthigai full moon"],["Aadi Perukku","A monsoon festival celebrated in the Tamil month of Aadi (July-August) — women offer food to rivers in gratitude for rain and fertility"],["Thai Pongal","The harvest festival in January — cooking the Pongal dish and celebration of the Sun&apos;s transition into Capricorn"]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:140, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Tamil Brahmin Wedding Customs</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Vara Puja — the groom is worshipped before the wedding as an embodiment of Lord Vishnu (for Iyengars) or Lord Shiva (for Iyers)","Kashi Yatra — same as in Telugu tradition — the groom pretends to leave for Kashi and is stopped by the bride&apos;s father","Oonjal — the couple sits on a decorated swing and is blessed by women singing traditional songs (thirumaangalyam or pillai songs)","Exchanging garlands (Maalai Maatral) — the couple exchanges floral garlands three times","Homam — the fire ritual central to the wedding — the couple takes the seven steps (Saptapadi) around the sacred fire","Nalangu — a post-wedding playful ceremony with turmeric water and games between bride and groom"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Iyer vs Iyengar Food Traditions</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Iyer cuisine","Uses onion and garlic in some dishes. Sambar with a specific Iyer spice blend, Rasam as a digestive, specific festival foods like Paal Kozhukattai for Ganesh Chaturthi, and Ada Pradhaman for Onam-adjacent celebrations."],["Iyengar cuisine","Traditionally avoids onion and garlic entirely — substituting asafoetida (hing). Iyengar bakery is famous across Tamil Nadu — bread, biscuits, and snacks made in traditional Iyengar bakeries are a distinct culinary heritage."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family maintains Sandhyavandanam — record a family elder performing it with an explanation of each step and its meaning. This practice, which requires years of learning to perform correctly, is being lost in many families. Even a video recording preserves something that cannot be replaced by any written guide.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="tamil-brahmin-traditions-rituals-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪔</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, recipes and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

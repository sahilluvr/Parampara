import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Godh Bharai — Complete Guide to the Indian Baby Shower Ceremony & Traditions | OurParampara",
  description: "Godh Bharai (literally 'filling of the lap') is the North Indian baby shower ceremony — a celebration held during the seventh month of pregnancy (saptama mase). The name comes from the ritual of placi",
  keywords: "Godh Bharai guide, Indian baby shower traditions, Seemantham South Indian guide, Valaikappu Tamil guide, Godh Bharai ceremony rituals, Indian baby shower gifts",
  openGraph: { title: "Godh Bharai — Complete Guide to the Indian Baby Shower Ceremony & Traditions", description: "Godh Bharai (literally 'filling of the lap') is the North Indian baby shower ceremony — a celebration held during the seventh month of pregnancy (saptama mase). The name comes from the ritual of placi", url: "https://www.ourparampara.com/blog/indian-baby-shower-godh-bharai-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-baby-shower-godh-bharai-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-baby-shower-godh-bharai-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-baby-shower-godh-bharai-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-baby-shower-godh-bharai-guide" title="Godh Bharai — Complete Guide to the Indian Baby Shower Ceremony & Traditions" description="Godh Bharai (literally 'filling of the lap') is the North Indian baby shower ceremony — a celebration held during the seventh month of pregnancy (saptama mase). The name comes from the ritual of placi" date="2026-06-18" category="Heritage Guide"
        faqs={[
          { q: "What is Godh Bharai and when is it performed?", a: "Godh Bharai (literally 'filling of the lap') is the North Indian baby shower ceremony — a celebration held during the seventh month of pregnancy (saptama mase). The name comes from the ritual of placing the expectant mother's lap with fruits, flowers, and gifts as a blessing for the baby. Auspicious items are placed in her lap by older women of the family — representing abundance and blessing for the child. The ceremony is typically organized by the mother's maternal family." },
          { q: "What is Seemantham (South Indian baby shower)?", a: "Seemantham is the South Indian equivalent of Godh Bharai — performed in the seventh month of pregnancy (the specific auspicious muhurat within the seventh month is chosen by a Jyotishi). The ceremony includes the pregnant woman being adorned with flowers, given new clothes and jewellery, having her hair oiled and parted with a sacred object (a porcupine quill in some traditions), being fed specific foods, and being blessed by elder women. Regional variations: Valaikappu (Tamil Nadu — primarily a bangle ceremony), Dohale Jevan (Maharashtra — the woman's cravings are specifically fulfilled)." },
          { q: "What gifts are traditionally given at Godh Bharai?", a: "Traditional Godh Bharai gifts: new clothes for the expectant mother (maternity clothes in auspicious colours — yellow, green, red are common), gold or silver ornaments for the baby, sweets and fruits placed in the lap as ritual offerings, cloth for swaddling, baby's first outfit in a colour considered auspicious, and items for the mother's comfort. Modern Godh Bharai gifts follow similar principles to Western baby showers. Cash gifts wrapped in red cloth are also common." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>👶</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Godh Bharai — Complete Guide to the Indian Baby Shower Ceremony & Traditions</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Godh Bharai is the Indian baby shower — the ceremony in which the expectant mother is celebrated, blessed, and adorned before the birth of her child. In the Indian tradition, the ritual marks the transition of a woman to motherhood and invokes blessings from the family, the community, and the divine for both mother and child.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Godh Bharai: seventh month of pregnancy. North India: items placed in expectant mother's lap by elder women, new clothes, blessing ceremony. South India: Seemantham (Karnataka, Andhra) or Valaikappu (Tamil Nadu — bangle ceremony). Maharashtra: Dohale Jevan (fulfilling mother's cravings). Common to all: elder women's blessings, special foods for the mother, gifts for mother and baby.</p>
          </div>

          <h2 style={h2}>The Ritual Significance</h2>
          <p style={s}>In Hindu tradition, the seventh month of pregnancy is significant — the soul of the child is believed to be fully conscious within the womb by this time. The Seemantham or Godh Bharai ceremony is performed both to bless the mother and to formally welcome the incoming soul with music, prayers, and celebration. Some traditions involve specific music (classical raga, specific devotional songs) played near the mother to provide auspicious impressions (Garbha Sanskar) for the developing child.</p>
          <h2 style={h2}>Foods at Godh Bharai</h2>
          <p style={s}>Traditional Godh Bharai foods are specifically chosen to honour the pregnant woman's cravings and provide nourishment: the Maharashtrian Dohale Jevan specifically serves the mother all the foods she has been craving during pregnancy. Other traditions include: yellow foods (turmeric rice, saffron kheer) for auspiciousness; sweet foods for joy; specific fruits for each month of the pregnancy. The sweet distribution to guests after the ceremony is a key part of the celebration.</p>
          <h2 style={h2}>Godh Bharai for NRI Families</h2>
          <p style={s}>NRI families celebrate Godh Bharai with considerable creativity — the ceremony is adapted to the location while maintaining the essential elements: elder women's blessings, the filling of the lap ritual, special foods, and the community gathering. Many NRI families connect via video call with family in India for the ceremony. Baby shower elements from the local culture (games, gift registry, cake) are often combined with the traditional Indian ceremony elements, creating a hybrid celebration that reflects the NRI family's life.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Godh Bharai traditions — the specific items placed in the lap, the specific songs sung, the specific elder who led the ceremony, and the particular foods made. The Godh Bharai is one of the lifecycle ceremonies most likely to have specific family-specific variations — your family's specific tradition is worth capturing before the elders who maintain it are no longer with us.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-baby-shower-godh-bharai-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>👶</p>
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

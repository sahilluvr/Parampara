import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mehndi & Henna Traditions — Complete Guide to Indian Wedding Mehndi Ceremony | OurParampara",
  description: "Mehndi (henna) applied to a bride's hands and feet is one of the most universal elements of Indian weddings across communities — Hindu, Muslim, and Sikh brides all participate in the mehndi tradition.",
  keywords: "mehndi ceremony guide, Indian wedding mehndi traditions, mehndi night guide, henna patterns significance, Mehndi ceremony North South India, bridal henna guide",
  openGraph: { title: "Mehndi & Henna Traditions — Complete Guide to Indian Wedding Mehndi Ceremony", description: "Mehndi (henna) applied to a bride's hands and feet is one of the most universal elements of Indian weddings across communities — Hindu, Muslim, and Sikh brides all participate in the mehndi tradition.", url: "https://www.ourparampara.com/blog/mehndi-henna-traditions-wedding-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=mehndi-henna-traditions-wedding-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=mehndi-henna-traditions-wedding-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/mehndi-henna-traditions-wedding-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="mehndi-henna-traditions-wedding-guide" title="Mehndi & Henna Traditions — Complete Guide to Indian Wedding Mehndi Ceremony" description="Mehndi (henna) applied to a bride's hands and feet is one of the most universal elements of Indian weddings across communities — Hindu, Muslim, and Sikh brides all participate in the mehndi tradition." date="2026-06-18" category="Wedding Guide"
        faqs={[
          { q: "What is the significance of mehndi in Indian weddings?", a: "Mehndi (henna) applied to a bride's hands and feet is one of the most universal elements of Indian weddings across communities — Hindu, Muslim, and Sikh brides all participate in the mehndi tradition. The significance: (1) The darker the mehndi colour, the deeper the love of the groom — a popular belief that has made ensuring dark mehndi a major wedding-day concern; (2) Mehndi is cooling in Ayurvedic tradition — it is applied to the bride to calm her nerves before the wedding; (3) Mehndi is protective — the intricate designs are believed to ward off the evil eye. In many traditions, the bride is exempt from housework until the mehndi fades — a practical holiday." },
          { q: "What happens at the Mehndi ceremony?", a: "The Mehndi ceremony (Mehndi Night) is typically held one to three days before the wedding. It is organized by the bride's family and attended primarily by women (though this is changing). A professional mehndi artist applies elaborate designs to the bride's hands and feet — the design can take 3-8 hours for a full bridal mehndi. Meanwhile, female guests have mehndi applied (typically simple designs) and are entertained with music, dance, and food. The groom's name is hidden within the bride's mehndi design — finding it on the wedding night is a popular game." },
          { q: "How do South Indian wedding mehndi traditions differ?", a: "In traditional South Indian Hindu weddings (Tamil Brahmin and some others), mehndi is not a pre-wedding ceremony in the North Indian style. Instead, a simple turmeric paste is applied to the bride (and sometimes the groom). The elaborate mehndi tradition is primarily North Indian, Punjabi, and Muslim-influenced. However, with increasing cultural mixing, South Indian urban brides increasingly incorporate mehndi ceremonies into their wedding events. The Maharashtrian Haldi-Kunku ceremony has some similarities." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Wedding Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🌿</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Mehndi & Henna Traditions — Complete Guide to Indian Wedding Mehndi Ceremony</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The mehndi ceremony is one of the most visually beautiful and joyous of all wedding traditions — a pre-wedding celebration that combines the intricate art of henna application with music, dance, and the gathering of women who love and bless the bride.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Mehndi ceremony: held 1-3 days before wedding. Bridal mehndi: 3-8 hours for full hands and feet design (professional mehndi artist). Guests receive simpler mehndi. Groom's name hidden in bride's mehndi pattern — finding it is a wedding game. After ceremony: leave mehndi to dry overnight, scrape (don't wash) for deepest colour. Music, singing, and dancing throughout the night.</p>
          </div>

          <h2 style={h2}>Mehndi Patterns and Meanings</h2>
          <p style={s}>Indian mehndi patterns carry specific symbolic meanings: paisley (mango — fertility and good luck), lotus (purity and divine beauty), peacock (beauty and joy), elephant (wisdom and good fortune), and the bride-groom figures incorporated into elaborate bridal designs. The most elaborate bridal mehndi tells a story — scenes from the wedding ceremony, the couple's faces, symbols meaningful to the family. Regional pattern styles differ significantly: Rajasthani mehndi (bold, intricate, full coverage), Arabic mehndi (floral, flowing, less dense), and contemporary Indo-Arabic fusion styles.</p>
          <h2 style={h2}>Groom's Mehndi</h2>
          <p style={s}>In many North Indian and Muslim communities, the groom also receives mehndi — typically a small amount on the palm or back of the hand. The Punjabi tradition involves the mehndi being brought from the bride's family to the groom's home the night before the wedding — a small ceremony with music and the groom's female relatives receiving it. Some grooms now request more elaborate mehndi as well, reflecting the evolution of wedding traditions.</p>
          <h2 style={h2}>Mehndi for NRI Brides</h2>
          <p style={s}>NRI brides face the challenge of finding skilled mehndi artists in their local area. Most major cities in the UK, USA, Canada, Australia, and UAE have Indian mehndi artists who specialize in bridal work. NRI brides also increasingly order pre-mixed mehndi cones from Indian suppliers and organize family mehndi nights at home. The tradition of older female relatives applying mehndi to younger ones is being revived as a way of transmitting the tradition.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's mehndi traditions — the specific patterns your family traditionally uses, the specific songs sung during the mehndi ceremony, the specific female relatives who apply mehndi. The mehndi night is described by many brides as one of their most joyful pre-wedding memories — worth preserving in both photograph and story.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="mehndi-henna-traditions-wedding-guide" category="Wedding Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌿</p>
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

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sindoor & Mangalsutra — Significance, Traditions & Modern Perspectives | OurParampara",
  description: "Sindoor (vermilion applied in the hair parting) is the primary symbol of a married Hindu woman. Its application by the groom during the wedding (Sindoor Daan — specifically applied at the forehead hai",
  keywords: "sindoor significance Hindu, mangalsutra significance guide, sindoor traditions India, mangalsutra regional variations, sindoor modern perspective, why Hindu women wear sindoor",
  openGraph: { title: "Sindoor & Mangalsutra — Significance, Traditions & Modern Perspectives", description: "Sindoor (vermilion applied in the hair parting) is the primary symbol of a married Hindu woman. Its application by the groom during the wedding (Sindoor Daan — specifically applied at the forehead hai", url: "https://www.ourparampara.com/blog/sindoor-mangalsutra-significance-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=sindoor-mangalsutra-significance-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=sindoor-mangalsutra-significance-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/sindoor-mangalsutra-significance-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="sindoor-mangalsutra-significance-guide" title="Sindoor & Mangalsutra — Significance, Traditions & Modern Perspectives" description="Sindoor (vermilion applied in the hair parting) is the primary symbol of a married Hindu woman. Its application by the groom during the wedding (Sindoor Daan — specifically applied at the forehead hai" date="2026-06-18" category="Heritage Guide"
        faqs={[
          { q: "What is the significance of sindoor in Hindu tradition?", a: "Sindoor (vermilion applied in the hair parting) is the primary symbol of a married Hindu woman. Its application by the groom during the wedding (Sindoor Daan — specifically applied at the forehead hairline in the part/maang) is the final and most binding act of the Hindu marriage ceremony in North India. The significance: sindoor is red (the colour of Shakti — divine feminine power and fertility), it is applied specifically in the maang (hair parting — associated with Surya the Sun), and its removal is traditionally performed only at widowhood. The practice extends back thousands of years." },
          { q: "What are the different regional forms of Mangalsutra?", a: "The Mangalsutra (sacred thread of good fortune) is the necklace tied by the groom during the wedding — it is the primary visible marker of married status across Hindu India. Its form varies dramatically by region and community: North India — black beads and gold pendant (specific designs vary: Maharashtrian has two gold vati pendants, North Indian has various pendant styles); South India — Tali or Thali (a gold pendant whose specific design identifies the bride's community: Tamil, Telugu, Kannada, and Malayali Talis are all distinctly different); Kerala Syrian Christians — the Minnu (cross pendant). The specific family's Tali design is often heirloom jewellery passed through generations." },
          { q: "What is the significance of the Mangalsutra?", a: "The Mangalsutra is tied by the groom around the bride's neck while reciting specific mantras. The act of tying is called Mangalyadharanam (wearing of the auspicious thread). The three knots with which it is tied represent: the groom's body, his parents, and the bride's agreement. The Mangalsutra is worn continuously — removing it even temporarily is considered inauspicious in traditional practice. The black beads in many Mangalsutra designs are believed to protect the couple from evil eye." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>💍</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Sindoor & Mangalsutra — Significance, Traditions & Modern Perspectives</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Sindoor and Mangalsutra are the most visible markers of Hindu marriage — worn daily by married women, they are both spiritual symbols and cultural identity markers. Their significance, the specific forms they take across regions, and the conversations about choice and modernity make them one of the most interesting intersections of tradition and contemporary life in Indian culture.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Sindoor: applied by groom in bride's hair parting during wedding (Sindoor Daan). Red colour = Shakti (divine feminine power). Worn in maang (hair part) daily by married Hindu women in most traditions. Mangalsutra: tied by groom during wedding with three knots. Regional forms differ significantly: North Indian (black beads + gold pendant), South Indian Tali/Thali (specific gold pendant for each community). The specific design is often heirloom jewellery.</p>
          </div>

          <h2 style={h2}>The Debate Around Sindoor and Choice</h2>
          <p style={s}>In contemporary India, sindoor and Mangalsutra are increasingly subjects of conversation about personal choice — many urban married Hindu women choose not to wear sindoor daily, and some choose modern or simplified Mangalsutra designs. This evolution reflects broader changes in women's roles and identities. The tradition itself is not historically universal across all Hindu communities (many South Indian and tribal communities do not use sindoor in the same way), and understanding this complexity helps families navigate the discussion between tradition and individual expression.</p>
          <h2 style={h2}>Sindoor in Film and Culture</h2>
          <p style={s}>Sindoor holds an iconic place in Indian popular culture — the Sindoor Daan scene in Hindi films, the breaking of sindoor at widowhood (depicted in countless films), and the image of the sindoor-wearing wife as the quintessential symbol of domestic devotion. This cultural weight makes sindoor one of the most emotionally and symbolically loaded elements of Indian women's material culture — a simple red powder that carries the entire weight of marriage, femininity, and tradition.</p>
          <h2 style={h2}>Mangalsutra as Heirloom</h2>
          <p style={s}>Many Indian families have Mangalsutra or Tali designs that have been in the family for generations — the grandmother's Tali was worn by the mother and may be worn by the daughter. These specific jewellery pieces carry enormous sentimental and cultural weight. Documenting the specific design of the family's Mangalsutra or Tali — its age, who made it, who has worn it — is a specific act of heritage preservation that many families neglect until it is too late.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific Mangalsutra/Tali — its design, the gold smith or jeweller who made it, who wore it across generations. If your family has a Tali that has been passed down, photograph it and document its history. This specific jewellery piece may be the most tangible link between generations in your family's wedding heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="sindoor-mangalsutra-significance-guide" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💍</p>
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

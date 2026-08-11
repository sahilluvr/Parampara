import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Baraat — Complete Guide to the Indian Groom's Wedding Procession | OurParampara",
  description: "Complete Baraat guide — what the Baraat procession is, traditions across North India, the dhol and band baja, the horse or vintage car, Milni ceremony, Joota Chupaai, and how families plan this spectacular wedding arrival.",
  keywords: "Baraat wedding procession guide, Indian Baraat traditions, dhol Baraat wedding, Baraat on horse, Milni ceremony guide, Joota Chupaai wedding, Baraat planning India, groom procession Indian wedding",
  openGraph: { title: "Baraat — Complete Guide to the Indian Groom's Wedding Procession | OurParampara", description: "Complete Baraat guide — what the Baraat procession is, traditions across North India, the dhol and band baja, the horse or vintage car, Milni ceremony, Joota Chupaai, and how families plan this spectacular wedding arrival.", url: "https://www.ourparampara.com/blog/baraat-wedding-procession-complete-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=baraat-wedding-procession-complete-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=baraat-wedding-procession-complete-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/baraat-wedding-procession-complete-guide" },
};

export default function Page() {
  return (
    <>
      <BlogStructuredData
        slug="baraat-wedding-procession-complete-guide"
        title="Baraat — Complete Guide to the Indian Groom's Wedding Procession | OurParampara"
        description="Complete Baraat guide — what the Baraat procession is, traditions across North India, the dhol and band baja, the horse or vintage car, Milni ceremony, Joota Chupaai, and how families plan this spectacular wedding arrival."
        date="2026-07-10"
        category="Wedding Guide"
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
            <div style={{ fontSize:40, marginBottom:14 }}>🎺</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Baraat</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 10, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>
        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Baraat — the groom's wedding procession — is the most visible, audible, and energetic element of the North Indian Hindu wedding. It is the groom's formal arrival at the wedding venue, accompanied by his family, friends, and a band or dhol players, typically with the groom riding a white horse (or in a vintage car, decorated palanquin, or elephant for elaborate weddings). The Baraat is not just transportation — it is a declaration, a celebration, and a spectacle that announces to the entire neighbourhood that a wedding is happening.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The History and Meaning of the Baraat</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Baraat descends from the ancient Indian tradition of the groom's family formally 'seeking' the bride — the procession represents the formal approach of the groom's family to the bride's family, requesting the gift of the daughter in marriage. The music, dancing, and festivity serve multiple purposes: they announce the arrival (in an era without phones), they express the groom's family's prosperity and joy, and they create a festive atmosphere that begins the wedding's communal celebration.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Elements of the Baraat</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>The Groom (Dulha):</strong> Dressed in sherwani and sehra (floral veil over the face) or safa (elaborate turban), usually on a white horse</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Band Baja:</strong> Brass band playing Bollywood songs and traditional wedding music — the essential Baraat sound</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Dhol:</strong> The rhythmic beat of the dhol drives the dancing — family members dance on either side of the horse</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Barati (procession members):</strong> Family and friends — the more the merrier. A large Baraat is considered auspicious</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Dancing relatives:</strong> Uncles, cousins, and friends dancing alongside the procession — the most photogenic element</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Fireworks:</strong> Anar, fuljhadi, and sparklers held by Baraat members in the evening</li>
          </ul>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>The Milni — Two Families Meet</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>The Milni (literally 'meeting') is the formal ceremony at the wedding venue where the two families officially greet each other. Male relatives of equivalent status from each family garland each other — father to father, brother to brother, maternal uncle to maternal uncle. In many Punjabi families, the exchange involves lifting the relative off the ground — a physically exuberant expression of mutual welcome. The Milni is followed by the formal welcome (Swagatam) of the groom's party with aarti performed by the bride's mother.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Joota Chupaai — The Shoe Stealing Game</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>One of the most beloved wedding traditions: as the groom dismounts and enters the wedding venue, his shoes are stolen by the bride's sisters and female cousins. The groom cannot complete the wedding rituals barefoot — so negotiation begins. The sisters demand gifts (money, jewellery, specific items) in exchange for returning the shoes. The groom's brothers negotiate on his behalf. The back-and-forth — often lasting through the wedding ceremony itself — is one of the great sources of laughter and familial bonding in Indian weddings.</p>
          <h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Regional Baraat Variations</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Punjabi Baraat:</strong> The most elaborate — bhangra dancing alongside the procession, very large Baraats (200-500 people), multi-hour processions</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>Rajasthani Baraat:</strong> Elephant or camel as alternative to horse in some communities; shehnai music; distinctive Rajasthani folk elements</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>UP/Bihar Baraat:</strong> Traditional shehnai and dhol; the groom's face covered with a sehra of flowers or beads</li>
            <li style={{ fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 }}><strong>South Indian equivalent:</strong> No Baraat in the same sense; the groom arrives formally at the wedding hall and the Milni equivalent is performed</li>
          </ul>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Plan the Baraat carefully</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>The Baraat timing matters enormously — starting late creates cascading delays for all wedding rituals. Build in 30 minutes buffer. Designate someone to manage the dhol players and ensure the procession doesn't stop at every corner for too long.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="baraat-wedding-procession-complete-guide" category="Wedding Guide"/>
        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🎺</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals, and cultural heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

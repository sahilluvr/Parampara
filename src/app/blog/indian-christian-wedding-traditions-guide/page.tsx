import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indian Christian Wedding Traditions — Ceremonies, Rituals & Regional Customs | OurParampara",
  description: "An Indian Catholic wedding (called Lagan in Goa) includes: Pre-Cana counselling sessions, the wedding Mass at church with exchange of vows and rings, the Sign of the Cross and blessing of the couple, ",
  keywords: "Indian Christian wedding traditions, Catholic wedding India, Kerala Christian wedding, Goan wedding customs, Northeast India Christian wedding, Indian church wedding guide",
  openGraph: { title: "Indian Christian Wedding Traditions — Ceremonies, Rituals & Regional Customs", description: "An Indian Catholic wedding (called Lagan in Goa) includes: Pre-Cana counselling sessions, the wedding Mass at church with exchange of vows and rings, the Sign of the Cross and blessing of the couple, ", url: "https://www.ourparampara.com/blog/indian-christian-wedding-traditions-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-christian-wedding-traditions-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-christian-wedding-traditions-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-christian-wedding-traditions-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-christian-wedding-traditions-guide" title="Indian Christian Wedding Traditions — Ceremonies, Rituals & Regional Customs" description="An Indian Catholic wedding (called Lagan in Goa) includes: Pre-Cana counselling sessions, the wedding Mass at church with exchange of vows and rings, the Sign of the Cross and blessing of the couple, " date="2026-06-02" category="Wedding Guide"
        faqs={[
          { q: "What is a Catholic wedding ceremony in India?", a: "An Indian Catholic wedding (called Lagan in Goa) includes: Pre-Cana counselling sessions, the wedding Mass at church with exchange of vows and rings, the Sign of the Cross and blessing of the couple, and the Nuptial Mass. The ceremony lasts 1-2 hours. In Goa and Kerala, it is followed by an elaborate reception feast." },
          { q: "How do Kerala Christian weddings differ from other Indian Christian weddings?", a: "Kerala has multiple Christian denominations — Syrian Orthodox, Mar Thoma, CSI, and Catholic — each with distinct wedding traditions. Syrian Christian weddings include the Manthrakodi (bridal sari from groom), the tying of the Minnu (a cross-shaped pendant on a gold chain as the mangalsutra equivalent), and specific church rituals in Malayalam. The wedding feast (Sadya) is an elaborate affair similar to Hindu Onam Sadya." },
          { q: "What is Manthrakodi in Kerala Christian weddings?", a: "Manthrakodi is the silk saree presented by the groom to the bride during the Kerala Christian wedding ceremony. It is draped around the bride during the ceremony as the groom places it on her — the Christian equivalent of the Hindu tradition of gifting new clothes. It is a central ritual in Syrian Christian and many other Kerala Christian weddings." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>💒</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Indian Christian Wedding Traditions — Ceremonies, Rituals & Regional Customs</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 2, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Indian Christianity is ancient — the St. Thomas Christians of Kerala trace their faith to the Apostle Thomas himself, while Goan Christianity dates to the Portuguese colonial era and Northeast Indian Christianity to 19th-century missions. Each community has developed a distinct Christian wedding tradition that blends universal Christian sacraments with deep regional and cultural specificity.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Indian Christian wedding traditions vary significantly by region — Kerala Syrian Christians include the Manthrakodi and Minnu; Goan Catholics have the Lagan with pre-wedding Roce ceremony; Northeast communities have specific village church traditions. All include exchange of vows and rings in church, followed by an elaborate feast.</p>
          </div>
          <h2 style={h2}>Kerala Christian Wedding Traditions</h2>
          {[["Manthrakodi","The silk saree gifted by the groom to the bride — draped around her during the ceremony"],["Minnu","The gold pendant with a cross — the Kerala Christian equivalent of the mangalsutra, tied around the bride&apos;s neck by the groom"],["Church ceremony","The wedding Mass or service in the family church — often conducted in Malayalam with specific denominational prayers"],["Sadya","The post-wedding feast — an elaborate spread on banana leaf similar to Onam Sadya"],["Nilavilakku","Traditional oil lamps lit at the entrance — a symbol of welcome and auspiciousness"]].map(([k,v])=>(
            <div key={k} style={{ display:"flex", gap:12, padding:"10px 0", borderBottom:`1px solid ${C.border}` }}>
              <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:130, flexShrink:0 }}>{k}</p>
              <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
            </div>
          ))}
          <h2 style={h2}>Goan Catholic Wedding — The Lagan</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Roce ceremony — the night before the wedding, family members apply coconut milk (roce) to the bride and groom in separate ceremonies at their respective homes, blessing them for marriage","Church wedding Mass — typically 1.5-2 hours including the Nuptial Mass, exchange of vows, ring exchange, and blessing","Post-wedding feast — Sorpotel, Xacuti, Prawn Curry, and other Goan specialties served to hundreds of guests","The Goa wedding tradition of the couple being driven in a decorated vintage car to the church is a beloved custom"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Save your wedding Mass bulletin, the specific hymns sung, the priest&apos;s name, and the church where generations of your family have married. Indian Christian heritage is as regionally specific and irreplaceable as any other tradition.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-christian-wedding-traditions-guide" category="Wedding Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💒</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, recipes and heritage on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Goan Christian Christmas — Traditions, Midnight Mass & Family Customs | OurParampara",
  description: "Complete guide to Goan Christian Christmas traditions — Midnight Mass, Consoada feast, Kuswar sweets, novena prayers, crib making, and how Indian Christian families celebrate.",
  keywords: "Goan Christmas traditions, Indian Christian Christmas, Midnight Mass India, Consoada feast Goa, Kuswar sweets recipe, Christmas novena India",
  openGraph: { title: "Goan Christian Christmas — Traditions, Midnight Mass & Family Customs", description: "Complete guide to Goan Christian Christmas traditions — Midnight Mass, Consoada feast, Kuswar sweets, novena prayers, crib making, and how Indian Christian families celebrate.", url: "https://www.ourparampara.com/blog/goan-christian-christmas-traditions-india-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=goan-christian-christmas-traditions-india-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=goan-christian-christmas-traditions-india-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/goan-christian-christmas-traditions-india-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="goan-christian-christmas-traditions-india-guide" title="Goan Christian Christmas — Traditions, Midnight Mass & Family Customs" description="Complete guide to Goan Christian Christmas traditions — Midnight Mass, Consoada feast, Kuswar sweets, novena prayers, crib making, and how Indian Christian families celebrate." date="2026-06-01" category="Festival Guide"
        faqs={[
          { q: "What is the Consoada feast in Goan Christmas tradition?", a: "Consoada is the traditional Christmas Eve dinner in Goan Catholic families, eaten after returning from Midnight Mass. It is a grand feast featuring Goan specialties like Sorpotel (pork and offal curry), Sannas (steamed rice cakes), Bebinca (layered coconut dessert), and Fried Fish. The meal begins close to midnight after Mass and continues into Christmas morning with the extended family gathered." },
          { q: "What is Kuswar in Goan Christmas?", a: "Kuswar is the collective name for the assortment of traditional Goan Christmas sweets prepared in the weeks before Christmas. It includes Neureos (fried pastry crescents filled with coconut and jaggery), Pinagri (rice and coconut sweets), Dodol (toffee-like coconut sweet), Bolinhas (coconut and semolina cookies), and many others. Making Kuswar together is a major pre-Christmas family tradition." },
          { q: "How is Christmas celebrated differently in Goa vs the rest of India?", a: "Goa has the largest Catholic population in India (around 25%) and Christmas is celebrated publicly and grandly — churches are elaborately decorated, Midnight Mass draws huge crowds, homes are lit with stars (kandils), and the festival is a public holiday celebrated across religious communities. In contrast, Christmas in most of India is primarily a church-going and home celebration for Christian families, with less widespread public festivity outside Christian-majority areas." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>⛪</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Goan Christian Christmas — Traditions, Midnight Mass & Family Customs</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 1, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>Christmas in Goa is unlike anywhere else in India — and arguably unlike anywhere else in the world. In a state where Christianity has been rooted for over 500 years, the festival carries layers of Portuguese colonial heritage, Konkani cultural identity, and Indian family warmth that create a celebration entirely its own. The smell of Sorpotel cooking for days before Christmas, the sound of carols in Konkani, the midnight walk to the village church under a sky of stars — these are the specific textures of a Goan Christmas that families carry with them wherever they go.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Goan Christmas traditions include: Novena prayers (9 days before Christmas), crib-making at home, Kuswar sweet preparation weeks in advance, Midnight Mass on Christmas Eve, Consoada feast after Mass, and Christmas Day with extended family. Key foods: Sorpotel, Sannas, Bebinca, and Neureos.</p>
          </div>

          <h2 style={h2}>The Novena — Nine Days of Prayer</h2>
          <p style={s}>The Novena to the Infant Jesus is one of the most beloved pre-Christmas traditions in Goan Christian families. Beginning nine days before Christmas (December 16), families gather each evening for prayers, hymns, and readings. In Goa, novenas are often held in homes on a rotating basis — each evening at a different neighbour&apos;s house, with everyone gathering after dinner. The novena prayers in Konkani, Portuguese, and English carry the specific flavour of each family&apos;s faith tradition.</p>

          <h2 style={h2}>Kuswar — The Christmas Sweet Tradition</h2>
          <p style={s}>Making Kuswar is a weeks-long family project. The sweets are prepared in large quantities — not just for the family but to give to neighbours, friends, and visitors who come calling on Christmas Day. The specific combination of sweets in a family&apos;s Kuswar is a signature of that household — which varieties they make, the exact recipes passed down, the specific day each sweet is made. Elderly women in the family are the keepers of this knowledge.</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Neureos","Fried crescent pastries filled with coconut, jaggery, and sesame — the most iconic Goan Christmas sweet"],["Bebinca","A 7-16 layered coconut and egg pudding — rich, time-consuming, and the centerpiece of the Christmas table"],["Dodol","A dark, sticky toffee-like sweet made with coconut milk, jaggery, and rice flour — requires hours of stirring"],["Pinagri","Rice and coconut sweets shaped in moulds — simple but essential"],["Bolinhas","Coconut and semolina cookies — subtly sweet and crumbly"],["Kulkuls","Fried dough curls rolled on a fork — a favourite for children to help make"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Midnight Mass & Consoada</h2>
          <p style={s}>The Midnight Mass (Missa do Galo — Mass of the Rooster) on Christmas Eve is the spiritual heart of the Goan Christmas. Churches fill beyond capacity; the smell of incense, the candlelight, the choir singing in Konkani and Latin — it is one of the most atmospheric religious experiences in India. After Mass, families return home for the Consoada feast — Sorpotel with Sannas, Fried Fish, and whatever specialties the family has prepared. The meal begins close to midnight and extends into Christmas morning.</p>

          <h2 style={h2}>For Indian Christian Families Abroad</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Goan and Indian Christian diaspora communities in the UAE, UK, USA, and Canada organise community Christmas Masses and dinners","Many families ship or carry Kuswar ingredients from India — or source Neureo pastry molds from Indian grocery stores abroad","The tradition of going to Midnight Mass together as a family is maintained wherever Indian Christians live","Sorpotel and Sannas are among the most commonly made Goan Christmas dishes abroad — recipes passed between generations","Teaching children to make Kulkuls or Neureos is one of the most common ways of passing on the Kuswar tradition"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family&apos;s specific Kuswar list — which sweets are made each year, your grandmother&apos;s Bebinca recipe, the specific day Sorpotel is started. These recipes and traditions are Goan Christian heritage as irreplaceable as any ritual.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="goan-christian-christmas-traditions-india-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>⛪</p>
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

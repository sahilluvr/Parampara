import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Preserving Indian Traditions Abroad — Guide for USA, UK & Canada Families | OurParampara",
  description: "Practical guide for Indian immigrant families to keep traditions alive abroad — festival celebrations, teaching kids rituals, finding community, and digital preservation.",
  keywords: "Indian traditions abroad, raise Indian kids in USA, Indian festivals in UK, second generation Indian heritage, Indian diaspora traditions, celebrate Diwali abroad",
  openGraph: {
    title: "Preserving Indian Traditions Abroad — Guide for USA, UK & Canada Families | OurParampara",
    description: "Practical guide for Indian immigrant families to keep traditions alive abroad — festival celebrations, teaching kids rituals, finding community, and digital preservation.",
    url: "https://www.ourparampara.com/blog/preserve-indian-traditions-abroad-usa-uk-canada",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=preserve-indian-traditions-abroad-usa-uk-canada", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=preserve-indian-traditions-abroad-usa-uk-canada"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/preserve-indian-traditions-abroad-usa-uk-canada" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="preserve-indian-traditions-abroad-usa-uk-canada"
        title="Preserving Indian Traditions Abroad — Guide for USA, UK & Canada Families | OurParampara"
        description="Practical guide for Indian immigrant families to keep traditions alive abroad — festival celebrations, teaching kids rituals, finding community, and digital preservation."
        date="2026-06-01"
        category="Festival Guide"
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌍</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Preserving Indian Traditions Abroad — Guide for Families in USA, UK & Canada</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 15, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>For the millions of Indian families living in the USA, UK, Canada, and elsewhere, keeping traditions alive takes deliberate effort. Without the daily presence of grandparents, neighborhood temples, or the natural rhythm of festivals playing out around you, traditions can quietly fade within a single generation. Here's a practical guide to keeping your heritage alive — wherever you live.</p>

          <h2 style={h2}>The Generational Gap Problem</h2>
          <p style={s}>First-generation immigrants often carry strong memories and habits from India. Their children — born or raised abroad — may have only secondhand exposure to festivals, rituals, and language. By the third generation, without active effort, much of the cultural knowledge can be lost entirely. This isn't a failure of any individual family — it's a structural challenge that requires intentional systems to overcome.</p>

          <h2 style={h2}>Practical Steps for Festival Celebrations</h2>
          {[
            "Celebrate festivals on the actual date when possible, even on a weekday — a small puja before/after work matters more than postponing to a convenient weekend",
            "Connect with local Indian community centers, temples, and cultural associations — most cities with significant Indian populations have active groups organizing Diwali, Navratri, and other celebrations",
            "Cook traditional festival foods together as a family activity — children remember tastes and smells long after they forget instructions",
            "Decorate the home for festivals — diyas, rangoli, and lights create lasting visual memories for children",
            "Video call grandparents in India during major festivals so children see and participate in the larger family celebration",
            "Host or attend potlucks with other Indian families — community celebration reinforces that these traditions are shared, not just a private family quirk",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Teaching Kids Rituals and Language</h2>
          <ul style={{ paddingLeft:20 }}>
            {[
              "Explain the 'why' behind rituals, not just the 'how' — children engage more when they understand the meaning behind a tradition",
              "Use simple, age-appropriate language to explain festival stories — Ramayana, Mahabharata, and festival legends as bedtime stories",
              "Enroll in weekend language/culture schools if available — many gurudwaras, temples, and community centers offer these",
              "Make small rituals part of daily life — a short prayer before meals, lighting a diya in the evening — consistency matters more than scale",
              "Involve kids actively in puja — let them help set up the thali, light diyas (with supervision), or recite simple mantras",
              "Visit India during festival seasons when possible — experiencing Diwali or Navratri in India leaves a lasting impression that no explanation abroad can replicate",
            ].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Finding Community</h2>
          <p style={s}>Search for local Hindu temples, gurudwaras, or cultural associations — most major cities in the USA, UK, and Canada have active Indian community organizations that host festival events, language classes, and youth programs. Facebook groups like "Indian Parents in [City]" are often surprisingly active and helpful for finding playdates, festival events, and recommendations for everything from priests to grocery stores carrying festival items.</p>

          <h2 style={h2}>Digital Preservation — The Modern Solution</h2>
          <p style={s}>One of the biggest challenges for diaspora families is that the people who know the most about family traditions — grandparents and elders — are often in India, while the children who need to learn are abroad. A shared digital platform solves this: elders can record voice notes explaining rituals in their own words, family members can document recipes and puja steps with photos, and children growing up abroad can access this knowledge anytime — not just during a once-a-year video call.</p>
          <p style={s}>Recording your parents' voices explaining a ritual, or your grandmother's recipe in her own words, becomes invaluable as time passes. These recordings preserve not just information but accent, tone, and the personal connection that written instructions cannot capture.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Start a family WhatsApp or shared digital space where every festival, every recipe, and every ritual gets documented — even briefly. Ten years from now, this casual archive will be one of your family's most valuable possessions.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="preserve-indian-traditions-abroad-usa-uk-canada" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌍</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Bridge the distance — preserve traditions together</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>OurParampara connects family members across countries — record voice memories, document rituals, and build your family tree together, no matter where everyone lives.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>
              Start preserving for free →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

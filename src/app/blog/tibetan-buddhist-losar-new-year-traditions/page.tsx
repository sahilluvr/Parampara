import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Losar — Tibetan Buddhist New Year Traditions & Celebrations Guide | OurParampara",
  description: "Losar 2026 (Fire Horse New Year) falls on February 17, 2026. Losar is calculated using the Tibetan lunar calendar and falls in January or February each year. It is celebrated by Tibetan Buddhist commu",
  keywords: "Losar Tibetan New Year guide, Losar traditions India, Ladakh Losar celebrations, Tibetan Buddhist festival guide, Losar 2026 date, Tibetan New Year customs",
  openGraph: { title: "Losar — Tibetan Buddhist New Year Traditions & Celebrations Guide", description: "Losar 2026 (Fire Horse New Year) falls on February 17, 2026. Losar is calculated using the Tibetan lunar calendar and falls in January or February each year. It is celebrated by Tibetan Buddhist commu", url: "https://www.ourparampara.com/blog/tibetan-buddhist-losar-new-year-traditions", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=tibetan-buddhist-losar-new-year-traditions", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=tibetan-buddhist-losar-new-year-traditions"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/tibetan-buddhist-losar-new-year-traditions" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="tibetan-buddhist-losar-new-year-traditions" title="Losar — Tibetan Buddhist New Year Traditions & Celebrations Guide" description="Losar 2026 (Fire Horse New Year) falls on February 17, 2026. Losar is calculated using the Tibetan lunar calendar and falls in January or February each year. It is celebrated by Tibetan Buddhist commu" date="2026-06-10" category="Festival Guide"
        faqs={[
          { q: "When is Losar 2026?", a: "Losar 2026 (Fire Horse New Year) falls on February 17, 2026. Losar is calculated using the Tibetan lunar calendar and falls in January or February each year. It is celebrated by Tibetan Buddhist communities in Ladakh, Sikkim, Arunachal Pradesh, Himachal Pradesh (Dharamsala), and the broader Himalayan region." },
          { q: "How is Losar celebrated in India?", a: "In India, Losar is most elaborately celebrated in Dharamsala (home of the Tibetan government in exile), Ladakh, Sikkim, and Tibetan settlements like Bylakuppe and Mundgod. The Dalai Lama typically offers public teachings and blessings at Dharamsala. Celebrations include: Gutor (exorcism ceremony the day before), monastery prayers and rituals, Losar feast with traditional foods, Losar performances of traditional dance and music, and family visits." },
          { q: "What is Guthuk and why is it eaten on Losar?", a: "Guthuk is a traditional Losar soup made with nine different ingredients including rice, dried cheese, meat (or vegetables for vegetarians), peas, wood ear mushrooms, walnuts, and small dough balls. Each dough ball contains a small hidden item (a pebble, wool, chilli, coal, or other objects) that reveals something about the diner's personality or fortune for the coming year — similar to a fortune cookie concept. It is eaten on the evening before Losar as part of the family gathering." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🏔️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Losar — Tibetan Buddhist New Year Traditions & Celebrations Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 10, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Losar — the Tibetan New Year — is one of the most joyous and visually spectacular festivals of the Himalayan Buddhist world. Celebrated by Tibetan communities in Ladakh, Sikkim, Arunachal Pradesh, and Himachal Pradesh, as well as the large Tibetan diaspora centred around Dharamsala, Losar is a three-day celebration of renewal, prayer, family, and the vibrant cultural life of Tibet preserved in India.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Losar 2026 is on February 17. Traditions include: Gutor (exorcism ceremony the evening before), monastery prayers at dawn on Losar day, eating Guthuk soup with hidden fortune objects, wearing traditional Chuba, family feast with Khapse (fried cookies) and Changkol (barley beer), visiting monasteries, and traditional dance and music performances.</p>
          </div>
          <h2 style={h2}>Losar Traditions</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Gutor (Day before Losar)","A monastery ritual for clearing negative energies of the outgoing year — includes Cham dance (masked ritual dance) performed by monks, and the burning of a torma (ritual cake) representing the year&apos;s negativity"],["Losar Day 1 — Lama Losar","Monks and religious leaders celebrate — monastery prayers, offerings, and blessings. The public visits monasteries for blessings from lamas."],["Day 2 — Gyalpo Losar","The king&apos;s new year historically — now the main public and community celebration. Family gatherings, feast, cultural performances, new clothes."],["Day 3 — Choe-kyong Losar","Offerings to the dharma protectors — monastery rituals and the continuation of community celebrations"],["Throughout","Khapse (fried butter cookies in symbolic shapes) are prepared weeks in advance — making Khapse together is a major family tradition. Changkol (a sweet porridge with barley beer) is consumed. Homes are cleaned and decorated with Chemar boxes (barley and butter offerings)."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>The Khapse recipes of different Tibetan families and regions vary — the specific shapes, the flavouring, the exact recipe. If your family makes Khapse for Losar, document the recipe and the tradition. Tibetan cultural heritage preserved in India is itself a precious and vulnerable tradition.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="tibetan-buddhist-losar-new-year-traditions" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🏔️</p>
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

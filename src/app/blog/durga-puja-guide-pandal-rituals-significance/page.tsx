import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Durga Puja — Complete Guide to Bengal's Greatest Festival & Rituals | OurParampara",
  description: "Complete Durga Puja guide — the ten-day celebration, daily rituals from Mahalaya to Vijaya Dashami, pandal traditions, Dhunuchi dance, sindoor khela, and Bengali family customs.",
  keywords: "Durga Puja guide, Durga Puja rituals significance, Mahalaya tradition, pandal hopping, Durga Puja date 2026, sindoor khela ritual, Vijaya Dashami celebration",
  openGraph: { title: "Durga Puja — Complete Guide to Bengal's Greatest Festival", description: "Ten days, Mahalaya to Vijaya Dashami — daily rituals, pandal traditions, Dhunuchi dance, sindoor khela, and Bengali family customs.", url: "https://www.ourparampara.com/blog/durga-puja-guide-pandal-rituals-significance", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=durga-puja-guide-pandal-rituals-significance", width: 1200, height: 630 }], type: "article" },
  twitter: { card: "summary_large_image", images: ["https://www.ourparampara.com/api/og?slug=durga-puja-guide-pandal-rituals-significance"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/durga-puja-guide-pandal-rituals-significance" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="durga-puja-guide-pandal-rituals-significance" title="Durga Puja — Complete Guide to Bengal's Greatest Festival & Rituals" description="Complete Durga Puja guide — ten days from Mahalaya to Vijaya Dashami, pandal traditions, Dhunuchi dance, and sindoor khela." date="2026-04-08" category="Festival Guide"
        faqs={[
          { q: "When is Durga Puja 2026?", a: "Durga Puja 2026 — Mahalaya falls on September 21, 2026. The main four days (Saptami, Ashtami, Navami, Dashami/Vijaya Dashami) fall in October 2026, with Vijaya Dashami on October 20, 2026." },
          { q: "What is sindoor khela?", a: "Sindoor Khela is a ritual on Vijaya Dashami where married women apply sindoor (vermillion) to the Durga idol, then apply it to each other as a blessing for their husbands long life. It is one of the most visually iconic moments of Durga Puja." },
          { q: "What is Dhunuchi Naach?", a: "Dhunuchi Naach is the traditional dance performed before Durga Maa with a clay pot (dhunuchi) filled with burning coconut husks and incense. Devotees carry the smoking pot and dance before the deity, often in a state of devotional trance." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪷</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Durga Puja — Complete Guide to Bengal&apos;s Greatest Festival &amp; Rituals</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>April 8, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Durga Puja is the biggest festival of Bengali Hindus — a ten-day celebration of Goddess Durga&apos;s victory over the demon Mahishasura, centered on the five main days from Saptami through Vijaya Dashami. UNESCO recognized the Durga Puja of Kolkata as an Intangible Cultural Heritage of Humanity in 2021. But beyond Kolkata, Durga Puja is celebrated by Bengali families worldwide with a depth of ritual, art, and community unlike almost any other Indian festival.</p>

          <h2 style={h2}>From Mahalaya to Vijaya Dashami</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Mahalaya (Pitru Amavasya)","The festival begins with Mahalaya — the morning radio broadcast of Mahishasura Mardini (a 90-minute devotional program featuring the Chandipath) is an iconic Bengali tradition. Mahalaya marks the descent of Durga from Kailash to earth. Tarpan (offerings to ancestors) is performed at the river."],["Shashthi (Day 6)","Bodhon — Durga is formally welcomed and the prana-pratishtha (invocation of life into the idol) begins. The eyes of the idol are painted open, a ritual of great importance."],["Saptami (Day 7)","The first of the main four days. Pushpanjali (flower offerings) begins at dawn. Kolabou (banana plant wrapped in sari) is ceremonially bathed."],["Ashtami (Day 8)","The most significant puja day. Sandhi Puja — performed at the juncture of Ashtami and Navami — involves 108 diyas and an animal sacrifice (symbolic in most urban celebrations). Dhunuchi Naach begins."],["Navami (Day 9)","Final day of major rituals. Mahasnan (bathing the idol) and Hom (fire ritual) are performed. Bhog (prasad meal, particularly khichuri and labra) is distributed."],["Vijaya Dashami (Day 10)","The most emotional day. Sindoor Khela — married women apply sindoor to the idol, then to each other. Durga is bid farewell (Bhashan) and the idol is immersed in the river. Devi bids goodbye to return to Kailash for another year."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Pandal Culture</h2>
          <p style={s}>The pandal — an elaborately decorated temporary structure housing the Durga idol — is the centerpiece of community Durga Puja celebrations. In Kolkata, thousands of pandals are built every year, competing for artistic recognition. Pandals range from thematic recreations of temples and monuments to avant-garde art installations. Pandal-hopping (visiting multiple pandals in a single night) is a beloved Kolkata tradition that brings friends and families out in the streets through the early hours of the morning during the main four days.</p>

          <h2 style={h2}>Iconic Rituals</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Pushpanjali","Offering flowers to Durga in the morning, accompanied by Sanskrit shlokas chanted by the priest — families join in simultaneously"],["Bhog","Community prasad meal — khichuri (rice-lentil dish) with labra (mixed vegetables) and mishti doi (sweet curd) — distributed free to all"],["Dhunuchi Naach","Dance before the idol with smoking clay pot — devotional and trance-like, accompanied by dhak drumming"],["Sindoor Khela","Married women apply sindoor to each other after bidding farewell to the idol on Dashami — one of India's most visually iconic ritual moments"],["Mahalaya broadcast","Birendra Krishna Bhadra's 1931 Mahishasura Mardini recording, broadcast on Akashvani radio every Mahalaya morning, is an unbroken 90-year tradition"],["Dhak drumming","The dhak (large barrel drum) is the sound of Durga Puja — its rhythm is inseparable from the festival's atmosphere"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Home Durga Puja vs Community Puja</h2>
          <p style={s}>Many old Bengali families maintain a "Bonedi Bari" Durga Puja — a private, multi-day family puja held in the ancestral home, with rituals and customs specific to that family lineage, sometimes dating back hundreds of years. These family pujas are distinct from community pandal celebrations and carry an even more intimate cultural weight. For diaspora families, maintaining even a simplified home puja — with a small idol, the Chandipath recitation, and bhog — is a powerful way to stay connected to the tradition.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has a Bonedi Bari puja or a specific community pandal associated with your ancestral area, record its history — how many generations your family has been involved, any specific rituals unique to your family&apos;s puja, and the stories behind them. These are among the most endangered pieces of Bengali cultural heritage.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Durga Puja concludes on Vijaya Dashami — also known as Dussehra. See our <Link href="/blog/navratri-puja-guide-9-days" style={{ color:C.saffron, fontWeight:600 }}>Navratri guide</Link> for the pan-India equivalent celebrations.</p>
          </div>
        
<h2 style={h2}>The Durga Puja Idol</h2>
          <p style={s}>The Durga idol is the centerpiece of the festival — made by artisans in the Kumartuli (potter's quarter) of Kolkata who specialize in this work. A traditional Durga idol depicts the ten-armed Goddess slaying Mahishasura (the buffalo demon), with her four children (Lakshmi, Saraswati, Kartik, Ganesha) by her sides. The idol must be made with specific clay including mud from a prostitute's doorstep (symbolising the return of a part of society considered impure to the sacred). After the festival, the idol is immersed in the river (Bisarjan).</p>
<h2 style={h2}>Sindoor Khela</h2>
          <p style={s}>Sindoor Khela (playing with sindoor) is performed on Vijayadashami — the final day. Married women apply sindoor to the feet of Goddess Durga, to each other's foreheads and hairlines, and sing traditional songs. It is one of the most visually distinctive and emotionally moving traditions of Durga Puja — an assertion of the married women's identity, community, and blessing. The scene of hundreds of women in white sarees with red borders applying vermillion to each other while singing in a major Kolkata pandal is extraordinary.</p>
        
<h2 style={{ fontFamily:"'Playfair Display', Georgia, serif", fontSize:24, fontWeight:600, color:"#18181B", marginBottom:14, marginTop:36 }}>Bisarjan — The Farewell</h2>
          <p style={{ fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 }}>On Dashami evening, the Durga idols are carried in procession to the nearest water body — the Ganges in Kolkata, local rivers, lakes, or the sea elsewhere. The immersion procession, accompanied by dhak (drum) beats, dancing, and the chant 'Bolo Durga Maa ki jai,' is one of the most emotionally complex experiences in Indian festive life: a celebration that is also a farewell, a joy that is also a grief. As the idol dissolves in the water, Bengalis call out 'Asche bochor abar hobe' — next year, this will happen again.</p>
          <div style={{ background:"#FFFBEB", border:"1px solid rgba(184,146,42,0.2)", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#B8922A", margin:"0 0 6px" }}>💡 Record your family's Durga Puja traditions</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Which pandal did your family always visit first? Which adda (gathering) happened after Ashtami anjali? These specific family memories of Durga Puja are irreplaceable — record them on OurParampara.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="durga-puja-guide-pandal-rituals-significance" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪷</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s Durga Puja heritage</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Save pandal photos, bhog recipes, and the stories of your family&apos;s puja on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

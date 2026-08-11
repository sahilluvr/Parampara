import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Anand Karaj — Complete Guide to the Sikh Wedding Ceremony & Rituals | OurParampara",
  description: "Complete Anand Karaj guide — the four Lavan (sacred rounds), Ardas, milni ceremony, and how Sikh families perform the wedding ceremony in India and abroad.",
  keywords: "Anand Karaj ceremony guide, Sikh wedding rituals, four Lavan Anand Karaj, Sikh wedding ceremony abroad, Anand Karaj milni, Sikh marriage traditions, Gurdwara wedding guide",
  openGraph: { title: "Anand Karaj — Complete Sikh Wedding Ceremony Guide", description: "The four Lavan, Ardas, milni ceremony and how Sikh families perform Anand Karaj in India and abroad.", url: "https://www.ourparampara.com/blog/anand-karaj-sikh-wedding-ceremony-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=anand-karaj-sikh-wedding-ceremony-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=anand-karaj-sikh-wedding-ceremony-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/anand-karaj-sikh-wedding-ceremony-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="anand-karaj-sikh-wedding-ceremony-guide" title="Anand Karaj — Complete Guide to the Sikh Wedding Ceremony & Rituals" description="The four Lavan, Ardas, milni ceremony and how Sikh families perform Anand Karaj in India and abroad." date="2026-05-04" category="Wedding Guide"
        faqs={[
          { q: "What are the four Lavan in Anand Karaj?", a: "The four Lavan are four rounds around the Sri Guru Granth Sahib Ji, each accompanied by the recitation of a specific verse by Guru Ram Das Ji. Each Lavan represents a stage of the soul's journey toward God: the first is setting out on the path of dharma, the second is meeting the True Guru, the third is the state of divine love, and the fourth is the union with the Divine." },
          { q: "Can Anand Karaj be performed outside a Gurdwara?", a: "Traditionally, Anand Karaj must be performed in the presence of Sri Guru Granth Sahib Ji. This can be at a Gurdwara or at a venue where the Guru Granth Sahib Ji is brought with proper reverence. The Shiromani Gurdwara Parbandhak Committee (SGPC) guidelines specify that Anand Karaj should be performed at the Gurdwara, though many diaspora families arrange the Guru Granth Sahib Ji at appropriate venues abroad." },
          { q: "What is the milni ceremony in a Sikh wedding?", a: "Milni (meaning 'meeting') is the pre-wedding ceremony where the male relatives of the bride and groom formally meet and embrace. Each pairing is announced — fathers embrace, maternal uncles embrace, brothers embrace — while the Granthi reads an Ardas. Garlands and sometimes gifts are exchanged. It is a joyful ceremony that formally unites the two families." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌸</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Anand Karaj — Complete Guide to the Sikh Wedding Ceremony &amp; Rituals</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>May 4, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Anand Karaj — meaning "blissful union" or "act of bliss" — is the Sikh wedding ceremony, formalised by the fourth Sikh Guru, Guru Ram Das Ji. It centres on the Lavan — four sacred rounds around Sri Guru Granth Sahib Ji, accompanied by the recitation of four hymns composed by Guru Ram Das Ji. The ceremony is not merely a social contract between two families — it is a spiritual journey of two souls coming together in the presence of the Guru and the Sangat (congregation).</p>

          {/* Quick answer box — for AI engine citation */}
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Anand Karaj involves four Lavan (sacred rounds) around Sri Guru Granth Sahib Ji, each accompanied by a verse from Guru Ram Das Ji's composition. The couple circles the Guru Granth Sahib Ji clockwise after each Lavan verse is sung by the Ragis. The ceremony concludes with Anand Sahib recitation, final Ardas, and Hukamnama (a random blessing from Guru Granth Sahib Ji). Total duration is approximately 2-3 hours.</p>
          </div>


          <h2 style={h2}>Pre-Wedding Ceremonies</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Roka / Thaka","The informal first agreement between the two families — a meeting where a date is set and the match is confirmed"],["Kurmai (Engagement)","Conducted at the Gurdwara — the groom&apos;s family brings a kirpan, a karha, and sometimes a ring, placing them before the Guru Granth Sahib Ji. An Ardas confirms the engagement."],["Chunni Chadayi","The groom&apos;s family formally welcomes the bride by draping a red chunni (dupatta) over her head"],["Vatna / Haldi","Turmeric and mustard oil paste applied to bride and groom — a shared tradition with Hindu weddings, reflecting the cultural overlap of Punjab"],["Mehndi","Henna applied to the bride&apos;s hands and feet the evening before the wedding"],["Kirtan Sohila","Evening prayers the night before the wedding at both homes"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>The Anand Karaj Ceremony — Step by Step</h2>
          {["Arrival at the Gurdwara — both families gather in the presence of Sri Guru Granth Sahib Ji. The Granthi (reader) leads the congregation in Ardas to formally begin.","Milni — the formal meeting of families, where corresponding male relatives embrace each other while Ardas is recited. Families are introduced pair by pair.","Shabad Kirtan — devotional hymns are sung by the Ragis (musicians) as the congregation settles. The atmosphere is one of calm joy and spiritual presence.","The bride and groom sit before Sri Guru Granth Sahib Ji. The Granthi explains the meaning and significance of Anand Karaj to the congregation.","Pallah Rasam — the bride holds the end of the groom&apos;s palla (scarf), symbolising that she is now in his care and he in hers, under the guidance of the Guru.","The four Lavan begin — the Granthi reads each Lavan verse, followed by the Ragis singing it. After each verse, the couple circles Sri Guru Granth Sahib Ji clockwise, the groom leading and the bride following, holding the palla.","After the fourth Lavan, the couple is seated. Anand Sahib (the Song of Bliss) is recited, followed by the final Ardas that formally completes the marriage.","Hukamnama — a random verse is read from Sri Guru Granth Sahib Ji as the Guru&apos;s blessing and guidance for the new couple.","Langar — the ceremony concludes with a shared meal for all attendees, reinforcing the community and equality central to Sikh values."].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>The Four Lavan — Their Meaning</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["First Lavan","The couple sets out on the path of righteous living — fulfilling duties to family and community, beginning their life together anchored in dharma"],["Second Lavan","The couple meets the True Guru — their hearts fill with divine love and they shed ego in devotion to God"],["Third Lavan","The couple is filled with divine love; the mind no longer wanders but is fixed in loving God&apos;s name"],["Fourth Lavan","The union is complete — the soul finds its home in God. The couple has journeyed together from the world toward the Divine."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Anand Karaj Abroad</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Most major Gurdwaras in the UK, Canada, USA, and Australia can perform Anand Karaj — contact the Granthi well in advance to book the date","Some families choose to bring Sri Guru Granth Sahib Ji to a non-Gurdwara venue (hotel ballroom, family home) — this requires proper preparation of the space with full reverence and must be discussed with the Granthi","For Sikh-non-Sikh interfaith weddings, many families hold both an Anand Karaj and a civil ceremony or the partner&apos;s religious ceremony on the same day or weekend","Most Gurdwaras abroad maintain a wedding coordinator who can help guide families unfamiliar with the full ceremony sequence","Document the exact shabd verses used, the names of the Ragis who performed kirtan, and the date and time of your Anand Karaj — these are meaningful family heritage details"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Save the date, venue, Granthi&apos;s name, and the specific shabad from the Hukamnama received at your Anand Karaj on OurParampara. Many families treasure this verse for life — it is considered the Guru&apos;s personal blessing to the couple.</p>
          </div>
        
<h2 style={h2}>Interfaith Anand Karaj</h2>
          <p style={s}>Anand Karaj is specifically the Sikh wedding ceremony — for couples where at least one partner is Sikh, the ceremony is conducted in the presence of the Guru Granth Sahib Ji with Sikh rituals. Sikh Rehat Maryada (code of conduct) specifies that Anand Karaj should only be performed for two Sikhs. In practice, many Sikh families make individual decisions about interfaith marriages — the SGPC (Shiromani Gurdwara Parbandhak Committee) position is that Anand Karaj is specifically for Sikhs.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Anand Karaj — the Gurdwara where it was performed, the ragis who sang the Lavan, the specific Ardas offered, and the experience of the four rounds. The Anand Karaj is described by those who have been part of it as one of the most moving ceremonies they have witnessed — its documentation preserves that spiritual experience for future generations.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="anand-karaj-sikh-wedding-ceremony-guide" category="Wedding Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌸</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your Anand Karaj memories</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Save your ceremony details, Hukamnama verse, and wedding traditions on OurParampara for your children to treasure.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

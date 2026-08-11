import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nikah Ceremony — Complete Guide to Indian Muslim Wedding Traditions & Rituals | OurParampara",
  description: "Complete Nikah guide — the Islamic marriage ceremony in Indian Muslim tradition, Mehr, Qubool Hai, Walima, and regional customs from Hyderabad, Lucknow, and across India.",
  keywords: "Nikah ceremony guide, Indian Muslim wedding traditions, Nikah rituals guide, Walima ceremony, Muslim wedding India, Mehr in Nikah, Indian Muslim marriage customs",
  openGraph: { title: "Nikah Ceremony — Indian Muslim Wedding Guide", description: "The Islamic marriage ceremony in Indian Muslim tradition — Mehr, Qubool Hai, Walima, and regional customs from across India.", url: "https://www.ourparampara.com/blog/nikah-ceremony-guide-indian-muslim-wedding", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=nikah-ceremony-guide-indian-muslim-wedding", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=nikah-ceremony-guide-indian-muslim-wedding"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/nikah-ceremony-guide-indian-muslim-wedding" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="nikah-ceremony-guide-indian-muslim-wedding" title="Nikah Ceremony — Complete Guide to Indian Muslim Wedding Traditions & Rituals" description="The Islamic marriage ceremony in Indian Muslim tradition — Mehr, Qubool Hai, Walima, and regional customs." date="2026-05-10" category="Wedding Guide"
        faqs={[
          { q: "What is Mehr in the Nikah ceremony?", a: "Mehr (also spelled Mahr) is the mandatory gift that the groom must give to the bride as part of the Nikah contract — it becomes her exclusive property. It can be money, gold, property, or any agreed-upon gift. The amount and nature of Mehr is discussed and agreed upon before the Nikah, written into the Nikah Nama (marriage contract), and can be given immediately or deferred. Mehr is not a bride price but a woman's right within the marriage contract." },
          { q: "What is Qubool Hai in Nikah?", a: "Qubool Hai means 'I accept' in Arabic/Urdu. During the Nikah ceremony, the groom and bride (or her Wali, male guardian, speaking on her behalf if she is absent) each say 'Qubool Hai' three times in the presence of witnesses, confirming their free and willing consent to the marriage. This verbal consent is the essential act that constitutes the Nikah." },
          { q: "What is Walima?", a: "Walima is the wedding reception feast given by the groom's family after the Nikah, traditionally within three days of the marriage. It is a Sunnah (practice of the Prophet) and serves as the official public announcement of the marriage to the community. Walima is typically a large gathering with an elaborate meal, and it is considered important to invite those of all financial backgrounds." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>💍</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Nikah Ceremony — Complete Guide to Indian Muslim Wedding Traditions &amp; Rituals</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>May 10, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>The Nikah — the Islamic marriage ceremony — is at once one of the simplest and most profound ceremonies in any tradition. In its essential form, it requires only a willing bride and groom, two witnesses, a Wali (guardian), agreement on Mehr, and the recitation of Ijab-o-Qubool (offer and acceptance). Yet in Indian Muslim tradition, the Nikah is surrounded by days of celebration, specific regional customs, and family traditions that vary richly from Hyderabad to Lucknow to Kashmir to Kerala.</p>

          <h2 style={h2}>Pre-Nikah Ceremonies</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Rishta (Proposal)","The formal proposal — families meet, the match is discussed, and agreement is reached. In many Indian Muslim families, both families read Fatiha together to bless the union."],["Mangni (Engagement)","The formal engagement ceremony — rings may be exchanged, the Mehr is discussed, and the date is set. More elaborate in some communities, simple in others."],["Mehndi","Henna applied to the bride (and often the groom) in a festive gathering with music and celebration — shared across Hindu, Sikh, and Muslim communities in India"],["Haldi / Ubtan","Turmeric paste applied to the bride — a sub-continental tradition present in Indian Muslim weddings in many regions"],["Mayun / Godhna","The period before the wedding where the bride stays at home, observed with varying customs by region"],["Baraat","The groom&apos;s wedding procession — arriving at the bride&apos;s home or venue with family, music, and celebration"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>The Nikah Ceremony — Step by Step</h2>
          {["The Qazi (Islamic officiant) begins by reciting verses from the Quran and a khutbah (sermon) on the importance of marriage in Islam","The Nikah Nama (marriage contract) is prepared — the Mehr amount, conditions, and witnesses are confirmed and recorded","The Wali (typically the bride&apos;s father or male guardian) gives consent on behalf of the bride (if she is in a separate area) or the bride gives her own consent if present","The groom is asked: &apos;Do you accept this marriage with [bride&apos;s name], with Mehr of [amount]?&apos; — he says &apos;Qubool Hai&apos; (I accept) three times","The bride is asked the same question and says &apos;Qubool Hai&apos; three times (in the presence of the Qazi and female witnesses if in a separate gathering)","Two male Muslim witnesses (or one male and two female witnesses) confirm they have heard the acceptance","The Qazi recites the concluding dua (supplication) for the couple and formally declares the Nikah complete","The Nikah Nama is signed by both parties, the witnesses, and the Qazi — the bride receives her copy","Sweets and dates are distributed among those present as a celebration of the new union"].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>Walima — The Wedding Feast</h2>
          <p style={s}>The Walima is the groom&apos;s family&apos;s feast given to publicly celebrate and announce the marriage — traditionally within three days of the Nikah. It is a Sunnah of the Prophet Muhammad (PBUH) and attending a Walima invitation is considered obligatory. Indian Muslim Walimas are typically grand affairs — elaborate biryani (the centrepiece of Indian Muslim celebration cooking), multiple meat dishes, sweets, and the hosting of a wide community. The Walima is distinct from the Nikah reception and is considered a separate celebration of the completed union.</p>

          <h2 style={h2}>Regional Nikah Traditions Across India</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Hyderabad — known for the most elaborate Nikah celebrations, with multiple days of events, Hyderabadi biryani as the essential feast food, and strong Persian cultural influences in ceremony aesthetics","Lucknow — tehzeeb (refined etiquette) defines Lucknowi Nikah celebrations; the Shayrana (poetic) tradition in wedding songs and the elaborate courtesy protocols between families","Kashmir — Kashmiri Muslim weddings include the Wanwun (wedding songs sung by women), specific Wazwan feast traditions, and the Taash (traditional Kashmiri music) at celebrations","Kerala Mappilas — Arab trading heritage visible in Malabar Muslim weddings; specific Oppana (clapping dance by women) around the bride, distinct food traditions","Punjab — shared cultural overlaps with Sikh and Hindu Punjabi weddings; similar Mehndi and Baraat traditions with Islamic ceremony at the centre"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Save your Nikah Nama details — the date, the Mehr agreed upon, the Qazi&apos;s name, the witnesses — on OurParampara. These are both legal and spiritual records. Many families also preserve the specific dua recited at the Nikah and the Quranic verse the Qazi chose for the khutbah — these choices carry meaning and are worth recording for children and grandchildren.</p>
          </div>
        
<h2 style={h2}>Islamic Marriage Principles</h2>
          <p style={s}>Islamic marriage is based on principles of consent (no marriage without the agreement of both parties), responsibility (the groom takes on financial responsibility for the household), compassion (the Quran describes spouses as 'garments for each other — protection and comfort), and the intention to build a family in accordance with Islamic values. The marriage is a contract — it can be dissolved by divorce or khula (wife-initiated divorce).</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's Nikah traditions — the specific Qazi who performed the Nikah, the Mehr agreed upon, the specific prayers recited, and the Walima celebration. The Nikah Nama (marriage contract) is itself an important family document — preserve it carefully as it is both legal record and family heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="nikah-ceremony-guide-indian-muslim-wedding" category="Wedding Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>💍</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your Nikah and wedding traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Save your Nikah Nama details, wedding photos, and family marriage traditions on OurParampara.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

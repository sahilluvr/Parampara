import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Paryushana Parva — Complete Guide to the Jain Festival of Forgiveness | OurParampara",
  description: "Complete guide to Paryushana Parva — the most sacred Jain festival of forgiveness, 8-day fasting traditions, Michhami Dukkadam, Samvatsari, and how Jain families observe the holy period.",
  keywords: "Paryushana Parva guide, Jain festival of forgiveness, Michhami Dukkadam meaning, Jain fasting traditions, Samvatsari Pratikraman, Paryushana 2026 date",
  openGraph: { title: "Paryushana Parva — Complete Guide to the Jain Festival of Forgiveness", description: "Complete guide to Paryushana Parva — the most sacred Jain festival of forgiveness, 8-day fasting traditions, Michhami Dukkadam, Samvatsari, and how Jain families observe the holy period.", url: "https://www.ourparampara.com/blog/jain-paryushana-parva-guide-fasting-traditions", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=jain-paryushana-parva-guide-fasting-traditions", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=jain-paryushana-parva-guide-fasting-traditions"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/jain-paryushana-parva-guide-fasting-traditions" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="jain-paryushana-parva-guide-fasting-traditions" title="Paryushana Parva — Complete Guide to the Jain Festival of Forgiveness" description="Complete guide to Paryushana Parva — the most sacred Jain festival of forgiveness, 8-day fasting traditions, Michhami Dukkadam, Samvatsari, and how Jain families observe the holy period." date="2026-06-05" category="Festival Guide"
        faqs={[
          { q: "What is Michhami Dukkadam?", a: "Michhami Dukkadam is a phrase in Prakrit meaning 'may all the evil that has been done be fruitless' — it is the Jain greeting and request for forgiveness exchanged on Samvatsari (the last day of Paryushana). Jains seek forgiveness from everyone they may have wronged through thought, word, or deed during the past year. It is offered in person, by message, and in community gatherings." },
          { q: "How long is Paryushana and when does it fall?", a: "Paryushana is observed for 8 days by Shvetambara Jains and 10 days (as Paryushana or Das Lakshana Parva) by Digambara Jains. It falls in the Bhadrapada month of the Hindu calendar — typically August or September. The exact dates vary by year and sect." },
          { q: "What fasting is done during Paryushana?", a: "Fasting during Paryushana ranges from partial to complete abstention. Common practices include: Ekasana (eating only once a day), Biyasana (eating twice), Ayambil (eating only bland, unspiced food once daily — a particularly rigorous practice), Upvas (complete fast with only water), and Atthai (8-day complete fast). The level of fasting is chosen based on individual capacity and devotion." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🙏</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Paryushana Parva — Complete Guide to the Jain Festival of Forgiveness</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 5, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>

          <p style={s}>Paryushana Parva is the holiest period in the Jain calendar — eight days (for Shvetambara Jains) of intensified religious practice, fasting, prayer, and most importantly, the seeking and granting of forgiveness. The festival culminates in Samvatsari — a day when Jains across the world ask forgiveness from everyone they have ever wronged, with the phrase Michhami Dukkadam. There are few more profound community rituals in any tradition.</p>

          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Paryushana is an 8-day Jain festival of forgiveness and spiritual renewal. Key practices: fasting (from Ekasana to Atthai), daily temple visits, Pratikraman (repentance prayers), listening to religious discourses, and ending with Samvatsari — the day of universal forgiveness where Michhami Dukkadam is exchanged with all.</p>
          </div>

          <h2 style={h2}>The Eight Days of Paryushana</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Days 1-7","Intensified religious practices — daily temple visits, fasting, listening to pravachans (religious discourses), reading from Jain scriptures. Shvetambaras listen to the recitation of the Kalpasutra — a sacred text describing the lives of the Tirthankaras."],["Day 5 — Kalpasutra Day","The most celebrated single day during Paryushana for Shvetambaras — the Kalpasutra text is read aloud, culminating in the description of Mahavir&apos;s birth. Elaborate celebrations, processions, and community events mark this day."],["Day 8 — Samvatsari","The most sacred day — a day of complete fasting, Pratikraman (a 3-4 hour repentance ceremony acknowledging all sins committed knowingly and unknowingly over the past year), and the universal exchange of Michhami Dukkadam with everyone — family, friends, colleagues, even strangers."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Pratikraman — The Repentance Ceremony</h2>
          <p style={s}>Pratikraman is performed twice daily by devout Jains and is the centerpiece of Paryushana observance. The ceremony — lasting 2-4 hours — involves reciting prayers that acknowledge all sins committed through thought, word, and action; against living beings of all five senses; knowingly and unknowingly. The Samvatsari Pratikraman on the last day is the annual grand repentance covering the entire year. It is performed at the Jain temple or in large community gatherings.</p>

          <h2 style={h2}>Fasting Practices</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Ekasana","Eating only once a day — the most commonly observed fast during Paryushana"],["Biyasana","Eating twice a day — at specific times only"],["Ayambil","Eating only bland, unspiced, unseasoned food once a day — no oil, ghee, salt, milk, or green vegetables. Considered the most spiritually powerful fasting practice."],["Upvas","Complete fast — water only for 24 hours"],["Atthai","Complete fast for all 8 days of Paryushana — a rare and extraordinarily rigorous practice observed by the most devoted"],["Navapad Oli","A separate 9-day fasting tradition linked to Ayambil, often observed during Paryushana"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Michhami Dukkadam — Universal Forgiveness</h2>
          <p style={s}>On Samvatsari, Jains greet everyone they know with Michhami Dukkadam — seeking forgiveness for any harm caused through thought, word, or deed, knowingly or unknowingly, in this life or previous lives. The response is Tassa Vi Michhami Dukkadam — &apos;may that too be fruitless.&apos; In today&apos;s connected world, Jains send Michhami Dukkadam messages across WhatsApp, email, and social media to everyone they know — one of the most beautiful and specific traditions of any community. The philosophy behind it — that we cause harm we are not aware of, and that actively seeking forgiveness is a spiritual practice — is profound.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document which family members observe Ayambil, who completes Atthai, and the specific prayers your family recites during Pratikraman. The Paryushana practices of an older generation are some of the most endangered elements of Jain family heritage — they require decades of practice to develop and are rarely passed on formally.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="jain-paryushana-parva-guide-fasting-traditions" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🙏</p>
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

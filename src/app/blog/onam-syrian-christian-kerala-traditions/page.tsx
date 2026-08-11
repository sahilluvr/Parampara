import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Onam & Syrian Christian Kerala Traditions — How Kerala Christians Celebrate | OurParampara",
  description: "Yes — Onam is a cultural harvest festival celebrated by all communities in Kerala, including Christians, Muslims, and Hindus. Kerala Christians participate fully in Onam with Pookalam (flower carpets)",
  keywords: "Syrian Christian Kerala traditions, Kerala Christian Onam, Mar Thoma traditions, Kerala Christian wedding, Syrian Christian heritage, Kerala Christianity history",
  openGraph: { title: "Onam & Syrian Christian Kerala Traditions — How Kerala Christians Celebrate", description: "Yes — Onam is a cultural harvest festival celebrated by all communities in Kerala, including Christians, Muslims, and Hindus. Kerala Christians participate fully in Onam with Pookalam (flower carpets)", url: "https://www.ourparampara.com/blog/onam-syrian-christian-kerala-traditions", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=onam-syrian-christian-kerala-traditions", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=onam-syrian-christian-kerala-traditions"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/onam-syrian-christian-kerala-traditions" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="onam-syrian-christian-kerala-traditions" title="Onam & Syrian Christian Kerala Traditions — How Kerala Christians Celebrate" description="Yes — Onam is a cultural harvest festival celebrated by all communities in Kerala, including Christians, Muslims, and Hindus. Kerala Christians participate fully in Onam with Pookalam (flower carpets)" date="2026-06-04" category="Heritage Guide"
        faqs={[
          { q: "Do Kerala Christians celebrate Onam?", a: "Yes — Onam is a cultural harvest festival celebrated by all communities in Kerala, including Christians, Muslims, and Hindus. Kerala Christians participate fully in Onam with Pookalam (flower carpets), Onam Sadya, Vallomkali (boat races), and the wearing of traditional Kerala attire (Kasavu saree). The festival is a marker of Kerala cultural identity that transcends religious boundaries." },
          { q: "Who are the Syrian Christians of Kerala?", a: "Syrian Christians (also called St. Thomas Christians or Nasranis) are one of the oldest Christian communities in the world, tracing their origin to the Apostle Thomas who is said to have arrived in Kerala in 52 CE. They are called Syrian Christians because they historically used the Syriac liturgical language. Today they include multiple denominations — Jacobite Syrian Orthodox, Malankara Orthodox, Mar Thoma, Catholic (Syro-Malabar, Syro-Malankara), and others — each with distinct practices." },
          { q: "What makes Kerala Christian culture unique?", a: "Kerala Christian culture is uniquely a blend of ancient Syriac Christian tradition, indigenous Kerala culture, and centuries of coexistence with Hindu and Muslim communities. The Syrian Christian community historically held a high social status in Kerala, maintained their own caste structure (similar to Hindu varnas), ate fish and meat unlike many other Christian communities in India, and developed a distinctive architectural, literary, and culinary heritage unlike any other Christian community in India." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🕊️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Onam & Syrian Christian Kerala Traditions — How Kerala Christians Celebrate</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 4, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Kerala&apos;s Christian community — particularly the ancient Syrian Christian tradition — represents one of the most fascinating intersections of faith and culture in the world. A community that has been Christian for nearly 2,000 years while remaining deeply rooted in Kerala culture, celebrating Onam, maintaining traditions borrowed from the surrounding Hindu society, and developing its own distinct art, architecture, food, and family customs.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Kerala Christians celebrate Onam fully — Pookalam, Sadya, Vallomkali. Syrian Christians trace their history to 52 CE and the Apostle Thomas. Key traditions include: the Minnu mangalsutra, Manthrakodi wedding sari, church services in Malayalam/Syriac, Easter Sadya, and a rich tradition of Christian-Kerala fusion cuisine.</p>
          </div>
          <h2 style={h2}>Onam in Kerala Christian Families</h2>
          <ul style={{ paddingLeft:20 }}>
            {["Pookalam — flower carpets are made at the entrance of Christian homes just as in Hindu homes — the harvest festival is celebrated as a cultural rather than religious event","Onam Sadya — the elaborate 26-dish feast on banana leaf — is prepared in Christian homes with slight regional variations","Vallomkali (snake boat races) — Christian families participate enthusiastically in the boat race tradition — particularly in Kuttanad (the rice bowl of Kerala) where Christian families have farmed the backwaters for generations","Traditional Kerala attire — Kasavu sarees for women and mundu for men — is worn on Onam day by Christian families as a mark of Kerala cultural identity","The Christian interpretation of Onam focuses on its agricultural and community significance rather than the Mahabali legend"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>
          <h2 style={h2}>Distinctive Syrian Christian Cultural Traditions</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Puttu and Kadala","The classic Syrian Christian breakfast — rice flour steamed cakes with black chickpea curry"],["Kappa and Meen Curry","Tapioca with fish curry — a staple of Christian Kerala homes, particularly in the fishing communities"],["Christmas Plum Cake","Kerala Christians are famous for their fruit cake — made weeks in advance with soaked dried fruits in rum or brandy"],["Appam and Stew","Lacy rice hoppers with mild coconut milk vegetable or meat stew — a beloved Sunday and festival breakfast"],["Fish in coconut milk","Syrian Christian cuisine features fish prepared in ways distinct from other Kerala communities — with specific spice combinations"],["Ancestral homes","Many Syrian Christian families maintain ancestral nalukettu (courtyard houses) — the family home as heritage site"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Syrian Christian family heritage often includes ancient church membership records, family Bible entries of births and deaths going back generations, and specific family connections to particular churches. Document your family&apos;s church history, the specific denomination&apos;s practices your family follows, and the ancestral home if one exists.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="onam-syrian-christian-kerala-traditions" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🕊️</p>
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

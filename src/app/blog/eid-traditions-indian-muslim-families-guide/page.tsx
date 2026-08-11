import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Eid Celebrations — Traditions of Indian Muslim Families for Eid ul-Fitr & Eid ul-Adha | OurParampara",
  description: "Complete guide to Eid traditions of Indian Muslim families — Eid ul-Fitr and Eid ul-Adha customs, Sheer Khurma recipe, family gathering traditions, and celebrating Eid abroad.",
  keywords: "Eid traditions Indian Muslim families, Eid ul-Fitr celebrations India, Eid ul-Adha guide, Sheer Khurma recipe, Indian Muslim festival traditions, Eid abroad NRI Muslim, Muslim family heritage India",
  openGraph: { title: "Eid Celebrations — Indian Muslim Family Traditions Guide", description: "Eid ul-Fitr and Eid ul-Adha customs, Sheer Khurma, family gathering traditions, and celebrating Eid abroad as an NRI.", url: "https://www.ourparampara.com/blog/eid-traditions-indian-muslim-families-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=eid-traditions-indian-muslim-families-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=eid-traditions-indian-muslim-families-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/eid-traditions-indian-muslim-families-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="eid-traditions-indian-muslim-families-guide" title="Eid Celebrations — Traditions of Indian Muslim Families for Eid ul-Fitr & Eid ul-Adha" description="Eid ul-Fitr and Eid ul-Adha customs, Sheer Khurma, family gathering traditions, and celebrating Eid abroad." date="2026-05-08" category="Festival Guide"
        faqs={[
          { q: "What is the difference between Eid ul-Fitr and Eid ul-Adha?", a: "Eid ul-Fitr marks the end of Ramadan, the month of fasting — it is a celebration of spiritual discipline completed. Eid ul-Adha (the Festival of Sacrifice) commemorates Ibrahim's willingness to sacrifice his son as an act of obedience to God, and marks the end of Hajj. Both are major Islamic celebrations, but Eid ul-Adha is considered the greater of the two and involves Qurbani (animal sacrifice) for those who are able." },
          { q: "What is Sheer Khurma and why is it special for Indian Muslims?", a: "Sheer Khurma (meaning 'milk with dates') is a rich vermicelli pudding made with milk, dates, dry fruits, and sugar — the signature sweet of Eid ul-Fitr for Indian Muslim families. It is made in large quantities and shared with neighbours, friends, and relatives of all faiths. Every family has its own recipe variation — the proportion of dates to dry fruits, the thickness of the milk, the specific dry fruits used — making it a deeply personal family tradition." },
          { q: "How do Indian Muslim families celebrate Eid abroad?", a: "NRI Muslim families typically combine Eid namaz at the local mosque, cooking traditional Eid foods (especially Sheer Khurma), wearing new clothes, exchanging Eidi (gifts/money) with children, and reaching out to family in India via video call during the celebration. Many mosques in cities with large Indian Muslim communities organise community Eid gatherings that bring families together." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🌙</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Eid Celebrations — Traditions of Indian Muslim Families for Eid ul-Fitr &amp; Eid ul-Adha</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>May 8, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Eid is the most joyous celebration in the Islamic calendar — and for Indian Muslim families, it carries the distinct flavour of a culture shaped by centuries of subcontinental tradition. Indian Eid celebrations blend universal Islamic practices with deeply regional customs: the specific biryani of Hyderabad, the Sheer Khurma recipes that differ by household, the practice of visiting every relative&apos;s home on Eid morning, the particular way Eidi is given to children. These specific family traditions are what make Eid yours — and what are worth preserving.</p>

          {/* Quick answer box — for AI engine citation */}
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Indian Muslim Eid ul-Fitr traditions include: Ghusl (ritual bath) and new clothes before Eid prayer, Eid namaz at the mosque, Sheer Khurma (vermicelli-milk-dates pudding) as the first food of Eid, visiting all relatives' homes for Eidi (gifts), and distributing Zakat ul-Fitr. Sheer Khurma is made with full-fat milk, vermicelli fried in ghee, dates, dry fruits, cardamom, saffron, and rose water.</p>
          </div>


          <h2 style={h2}>Eid ul-Fitr — The Festival of Breaking the Fast</h2>
          <p style={s}>Eid ul-Fitr arrives at the end of Ramadan — 29 or 30 days of fasting from dawn to sunset, prayer, reflection, and increased charity. The sighting of the new moon announces Eid, and the celebration begins the following morning. The mood is one of gratitude, relief, and collective joy — the community has completed a month of devotion together.</p>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Eid morning — Ghusl and new clothes","Waking before sunrise, bathing (Ghusl), wearing new clothes, and applying attar (perfume) before heading to the mosque"],["Eid Namaz","The special Eid congregational prayer performed at the mosque or an open ground (Idgah) — often the largest gathering of the year in any Muslim community"],["Takbeer","Chanting &apos;Allahu Akbar, Allahu Akbar, La ilaha illallah...&apos; while walking to the Eid prayer — a moving collective expression of faith"],["Sheer Khurma","The first food of Eid morning — the sweet vermicelli-milk-date dessert made in every Indian Muslim home, shared with family and neighbours"],["Visiting relatives","The Eid tradition of visiting every family member&apos;s home — starting with the eldest — eating at each house and collecting Eidi (gifts) as a child"],["Zakat ul-Fitr","Obligatory charity given before Eid prayer — ensuring that the poor can also celebrate Eid with food and joy"]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:140, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Sheer Khurma — The Eid Sweet</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>Classic Sheer Khurma — ingredients</p>
            <p style={{ fontSize:13, color:"#374151", margin:"0 0 12px" }}>Full-fat milk, vermicelli (seviyan), dates (khajoor), ghee, sugar, cardamom, saffron, rose water, and dry fruits — cashews, almonds, pistachios, raisins</p>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 8px" }}>Method</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Fry vermicelli in ghee until golden. Boil milk and reduce to three-quarters. Add fried vermicelli, chopped dates, sugar, and cardamom. Simmer until thick. Add saffron dissolved in warm milk, rose water, and fried dry fruits. Serve warm or chilled. Every family adds their specific touch — more dates, extra saffron, a specific ratio that has been refined over generations.</p>
          </div>

          <h2 style={h2}>Eid ul-Adha — The Festival of Sacrifice</h2>
          <p style={s}>Eid ul-Adha commemorates Prophet Ibrahim&apos;s willingness to sacrifice his son Ismail as an act of submission to God — and God&apos;s mercy in providing a ram in his place. It falls on the 10th of Dhul Hijjah and coincides with the peak of the Hajj pilgrimage in Mecca. The central practice is Qurbani — the ritual sacrifice of a goat, sheep, cow, or camel — with the meat divided into three equal portions: one for the family, one for relatives and neighbours, and one for the poor.</p>
          <ul style={{ paddingLeft:20 }}>
            {["Eid namaz is performed in the morning, then Qurbani begins after the prayer","The family typically shares the Qurbani among relatives and neighbours — distributing fresh meat is a core part of the celebration","Special biryani, kebabs, and meat dishes are prepared — Eid ul-Adha is the time for the most elaborate meat cooking of the year in Indian Muslim households","Children receive Eidi and new clothes just as in Eid ul-Fitr","For NRI families abroad, many arrange collective Qurbani through their local mosque or Islamic organisations that handle the sacrifice and distribution on behalf of the family"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Regional Indian Muslim Eid Traditions</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Hyderabad","Famous for Haleem (a slow-cooked meat and wheat dish) during Ramadan, and the grand Eid biryani. The old city&apos;s Charminar area is the cultural heart of Hyderabadi Eid."],["Lucknow","The tehzeeb (cultured refinement) of Lucknow shows in Eid — formal Eid Milan gatherings, elaborate sheer khurma, and the tradition of exchanging sewaiyan (vermicelli sweets) with neighbours of all faiths."],["Kashmir","Kashmiri Muslims celebrate Eid with Wazwan — a multi-course feast that may include rogan josh, gustaba, and tabak maaz. The collective prayers in the open meadows are a distinctive feature."],["Kerala (Mappila Muslims)","Malabar Eid traditions include Neychoru (ghee rice) and specific Mappila sweets. The influence of Arab trading history is evident in Malabar Muslim food and celebration style."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Your family&apos;s specific Sheer Khurma recipe — the exact proportions your grandmother used, which dry fruits she included, whether she served it warm or cold — is family heritage as specific and irreplaceable as any ritual. Document it on OurParampara with her voice explaining the method if possible. Eid food is memory, identity, and love all in one pot.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="eid-traditions-indian-muslim-families-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🌙</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s Eid traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Save your Sheer Khurma recipe, Eid memories, and family traditions on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Parsi Food Traditions — Dhansak, Patra ni Machhi & Festival Foods Guide | OurParampara",
  description: "Dhansak is the most iconic Parsi dish — a slow-cooked combination of lentils, meat (traditionally mutton), and vegetables, flavoured with a complex spice blend unique to Parsi cuisine. It is cooked on",
  keywords: "Parsi food traditions, Dhansak recipe guide, Patra ni Machhi recipe, Parsi wedding food, Navroze food traditions, Parsi culinary heritage, Lagan nu Custard recipe",
  openGraph: { title: "Parsi Food Traditions — Dhansak, Patra ni Machhi & Festival Foods Guide", description: "Dhansak is the most iconic Parsi dish — a slow-cooked combination of lentils, meat (traditionally mutton), and vegetables, flavoured with a complex spice blend unique to Parsi cuisine. It is cooked on", url: "https://www.ourparampara.com/blog/parsi-food-traditions-dhansak-celebrations", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=parsi-food-traditions-dhansak-celebrations", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=parsi-food-traditions-dhansak-celebrations"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/parsi-food-traditions-dhansak-celebrations" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="parsi-food-traditions-dhansak-celebrations" title="Parsi Food Traditions — Dhansak, Patra ni Machhi & Festival Foods Guide" description="Dhansak is the most iconic Parsi dish — a slow-cooked combination of lentils, meat (traditionally mutton), and vegetables, flavoured with a complex spice blend unique to Parsi cuisine. It is cooked on" date="2026-06-16" category="Heritage Guide"
        faqs={[
          { q: "What is Dhansak and when is it eaten?", a: "Dhansak is the most iconic Parsi dish — a slow-cooked combination of lentils, meat (traditionally mutton), and vegetables, flavoured with a complex spice blend unique to Parsi cuisine. It is cooked on Sundays and served with caramelised brown rice. Dhansak is also the traditional mourning food in Parsi tradition — served at the home on the fourth day after a death (Uthamna day), which is why it is never served at weddings or celebratory occasions." },
          { q: "What is Patra ni Machhi?", a: "Patra ni Machhi (fish in banana leaf) is the centrepiece of the Parsi wedding feast and any celebratory meal. White pomfret fish is coated on both sides with a vibrant green chutney made from coriander, mint, coconut, green chilli, and garlic, then wrapped in banana leaf and steamed. The result is a delicate, perfumed fish dish that is considered among the finest preparations in Indian cuisine." },
          { q: "What is the Lagan nu Custard?", a: "Lagan nu Custard (wedding custard) is the signature Parsi dessert for weddings and celebrations — a baked egg custard flavoured with vanilla, nutmeg, cardamom, and charoli nuts, with a golden caramelised top. It is not a mousse or a cream — it is a firm, sliceable baked pudding with a specific Parsi spicing that makes it completely distinct from Western custards. It is served at virtually every Parsi wedding and celebration." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🍛</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Parsi Food Traditions — Dhansak, Patra ni Machhi & Festival Foods Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 16, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Parsi cuisine is one of India&apos;s most distinctive culinary traditions — a 1,000-year evolution of Persian ingredients and techniques meeting the spices and produce of Gujarat and Maharashtra. The result is a cuisine of extraordinary complexity and specific occasion-linking: Dhansak for Sunday and mourning, Patra ni Machhi for weddings, Ravo for Nowruz morning, Lagan nu Custard for celebrations. Understanding what a Parsi family eats and when is understanding a way of life.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Key Parsi dishes: Dhansak (lentil-meat dish — Sunday and mourning food, never at weddings), Patra ni Machhi (fish in banana leaf — wedding essential), Lagan nu Custard (baked egg custard — celebration dessert), Ravo (semolina pudding — Nowruz breakfast), Chicken Farcha (spiced fried chicken), and Sali Boti (lamb with potato straws).</p>
          </div>
          <h2 style={h2}>Occasion-Specific Parsi Foods</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Sundays","Dhansak with caramelised brown rice — the quintessential Parsi Sunday lunch, cooked in every Parsi home"],["Weddings (Lagan)","Patra ni Machhi, Sali Boti, Chicken Farcha, Pulao Dal, Lagan nu Custard, and various appetizers. Fish is always present at a Parsi wedding."],["Nowruz (New Year)","Ravo (semolina pudding) and Sev (vermicelli in milk) for breakfast — the new year morning meal"],["Navjote","A grand feast for the community — similar to wedding food in its elaborateness"],["Mourning (4th day)","Dhansak — the only occasion when this dish is specifically not eaten at is a wedding. The link between Dhansak and mourning is absolute in Parsi culture."],["Muktad","Specific sweets and foods are prepared and offered at the prayer ceremony for the departed"]].map(([k,v])=>(
              <div key={k} style={{ padding:"10px 14px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}`, display:"flex", gap:12 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:0, minWidth:120, flexShrink:0 }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>
          <h2 style={h2}>Dhansak — The Iconic Recipe</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:"0 0 10px" }}>Dhansak Dal Base (simplified)</p>
            <p style={{ fontSize:13, color:"#374151", margin:"0 0 8px" }}>Four lentils (toor, masoor, chana, val dal), mutton or chicken, pumpkin, tomato, fenugreek leaves, mint, coriander, tamarind, and a complex spice blend including dhansak masala (available from Parsi grocers)</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Pressure cook meat with four lentils, pumpkin, tomato, onion, fenugreek leaves, and spices until completely soft. Blend the lentil-vegetable base until smooth. Add back the meat pieces. Adjust seasoning with tamarind, salt, and sugar. Serve with caramelised brown rice (rice fried in onions and sugar until golden). The Sunday Dhansak smell is one of the defining sensory memories of Parsi childhood.</p>
          </div>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Every Parsi family&apos;s Dhansak recipe is slightly different — the proportion of lentils, the specific vegetables, whether they use mutton or chicken, the exact spice blend. Document your family&apos;s version with your grandmother&apos;s voice if possible. Parsi culinary heritage, like the community itself, is precious and increasingly rare.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="parsi-food-traditions-dhansak-celebrations" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🍛</p>
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

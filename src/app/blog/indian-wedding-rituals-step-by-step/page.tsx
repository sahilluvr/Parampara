import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indian Wedding Rituals Step by Step — Complete Hindu Vivah Guide | Parampara",
  description: "Complete guide to Hindu wedding rituals — from Ganesh puja and Haldi to Saptapadi, Sindoor Daan, and Vidaai. Every step explained with samagri list.",
  keywords: "Indian wedding rituals step by step, Hindu wedding ceremony guide, vivah samagri list, saptapadi steps, sindoor daan meaning, mehndi ceremony, Indian wedding traditions",
  openGraph: { title: "Indian Wedding Rituals Step by Step — Hindu Vivah Guide", description: "Complete Hindu wedding ceremony guide with all rituals explained.", url: "https://www.ourparampara.com/blog/indian-wedding-rituals-step-by-step", siteName: "Parampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-wedding-rituals-step-by-step", width: 1200, height: 630, alt: "indian-wedding-rituals-step-by-step" }] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-wedding-rituals-step-by-step" },
};

export default function Page() {
  const s = { fontSize:16, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:26, fontWeight:600, color:C.charcoal, marginBottom:16, marginTop:40 };
  const h3 = { fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8, marginTop:0 };
  const li = { fontSize:15, color:"#374151", lineHeight:1.8, marginBottom:8 };

  return (
    <>
      <BlogStructuredData
        slug="indian-wedding-rituals-step-by-step"
        title="Indian Wedding Rituals Step by Step — Complete Hindu Vivah Guide | Parampara"
        description="Complete guide to Hindu wedding rituals — from Ganesh puja and Haldi to Saptapadi, Sindoor Daan, and Vidaai. Every step explained with samagri list."
        date="2026-06-01"
        category="Festival Guide"
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:"linear-gradient(135deg,#4A1A6A,#2D1B4E)" }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Wedding Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:16 }}>💒</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:16 }}>Indian Wedding Rituals Step by Step — Complete Hindu Vivah Guide</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 5, 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"48px 24px 80px" }}>
          <p style={s}>A Hindu wedding (Vivah) is not just a ceremony — it is one of the 16 samskaras (sacred rites of passage). Each ritual carries deep spiritual significance, binding two souls and two families together through sacred fire, mantras, and divine witnesses.</p>
          <p style={s}>This guide covers the complete Hindu wedding ceremony from pre-wedding to post-wedding rituals.</p>

          <h2 style={h2}>Pre-Wedding Rituals</h2>
          {[
            ["Roka / Sagai (Engagement)", "The formal announcement of the union. Families exchange gifts and sweets. The boy's family brings a ring, clothes, and sweets to the girl's home. Pandit sets an auspicious date for the wedding.","#FDF0E6","#C8541A"],
            ["Ganesh Puja", "Performed at both families' homes separately. Praying to Lord Ganesha to remove all obstacles from the wedding path. Usually done 1-2 days before the wedding.","#E8F4EE","#1A5C42"],
            ["Haldi Ceremony", "Turmeric paste is applied to both bride and groom at their respective homes. Turmeric purifies and blesses the couple. Friends and family apply haldi and sing folk songs.","#FFFBEB","#B45309"],
            ["Mehndi Ceremony", "Intricate henna designs applied on the bride's hands and feet. The groom's name is hidden in the design. The darker the mehndi, the deeper the love — according to tradition.","#F5F3FF","#7C3AED"],
            ["Sangeet", "Musical evening where both families sing and dance together. Folk songs, film songs, and specially composed songs about the couple. A celebration of the coming union.","#FFF0F0","#DC2626"],
          ].map(([title,desc,bg,color])=>(
            <div key={title} style={{ background:bg, border:`1px solid ${color}25`, borderRadius:14, padding:"18px 20px", marginBottom:14 }}>
              <h3 style={{ ...h3, color }}>{title}</h3>
              <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>{desc}</p>
            </div>
          ))}

          <h2 style={h2}>Wedding Day — Main Ceremony</h2>
          {[
            ["Baraat (Groom's Procession)","The groom arrives on a mare (horse) or decorated car, accompanied by family and friends dancing to dhol music. The groom's face is covered with a sehra (floral veil). The bride's family receives the baraat at the wedding venue."],
            ["Milni","The formal meeting of the two families. Corresponding male relatives from both sides are introduced and exchange garlands or hugs. The families become one."],
            ["Jai Mala (Varmala)","The bride and groom exchange flower garlands — this is their first formal acceptance of each other. The moment is playful, with respective families lifting the bride and groom to make the garland exchange difficult."],
            ["Ganesh Puja at Mandap","The main ceremony begins at the wedding mandap (sacred fire altar). Pandit performs Ganesh puja to invoke blessings for an obstacle-free marriage."],
            ["Kanya Daan","The most emotional ritual. The bride's father places her hand in the groom's hand and gives her away with the words: 'I give you my most precious treasure — protect her, love her, and make her happy.' This moment often brings tears."],
            ["Panigrahana","The groom takes the bride's hand in his. He recites mantras accepting her as his life partner, her joys, sorrows, and responsibilities."],
            ["Havan (Sacred Fire)","The sacred fire (Agni) is lit in the havan kund. Both bride and groom offer ghee and samagri into the fire together. Agni is the divine witness to the marriage."],
            ["Saptapadi (7 Steps)","The most sacred part of the ceremony. The couple takes 7 steps around the fire together, each step representing a vow: 1) Nourishment, 2) Strength, 3) Prosperity, 4) Happiness, 5) Children, 6) Long life, 7) Friendship and companionship. Once 7 steps are completed, the marriage is legally and spiritually complete."],
            ["Sindoor Daan","The groom applies sindoor (vermilion) in the parting of the bride's hair. This marks her as a married woman. One of the most photographed moments of an Indian wedding."],
            ["Mangalsutra","The groom ties a sacred black-beaded necklace (mangalsutra) around the bride's neck — his promise of lifelong protection and love."],
            ["Saptpati / Ashirvad","Elders shower the couple with rice and flower petals. The pandit recites final blessings. The couple takes blessings from all elders by touching their feet."],
          ].map(([title,desc],i)=>(
            <div key={i} style={{ display:"flex", gap:16, marginBottom:20 }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:"#F5F3FF", border:"2px solid #7C3AED", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:"#7C3AED", flexShrink:0, marginTop:2 }}>{i+1}</div>
              <div><h3 style={h3}>{title}</h3><p style={s}>{desc}</p></div>
            </div>
          ))}

          <h2 style={h2}>Vidaai — The Farewell</h2>
          <p style={s}>Vidaai is when the bride leaves her parents&apos; home for the last time as a daughter. She throws puffed rice (laja) backwards over her shoulders — offering her last contribution to her parents&apos; home — while walking away without looking back. The entire family weeps. It is considered the most emotional moment of any Indian wedding.</p>

          <h2 style={h2}>Post-Wedding Rituals</h2>
          <ul style={{ paddingLeft:20, marginBottom:20 }}>
            {["Grihapravesh — bride's first entry into groom's home, she kicks a vessel of rice over the threshold","Aeki-Beki — playful ring-finding game in a vessel of milk and flower petals","Mooh Dikhai — bride's face revealing ceremony with the groom's family","Reception — formal celebration with extended family and friends"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Complete Samagri List</h2>
          <div style={{ background:"#F5F3FF", border:"1px solid rgba(124,58,237,0.2)", borderRadius:14, padding:"20px 24px", marginBottom:24 }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {["Havan kund","Havan samagri (2kg)","Ghee (1kg)","Mango wood for fire","Kalash (2)","Coconuts (7)","Flower garlands (2)","Red and yellow cloth","Sindoor","Mangalsutra","Laja (puffed rice)","Seven betel nuts","Turmeric","Kumkum","Akshat (rice)","Paan leaves (21)","Sacred thread (mauli)","Camphor"].map(i=>(
                <div key={i} style={{ display:"flex", gap:6 }}><span style={{ color:"#7C3AED" }}>✓</span><span style={{ fontSize:13, color:C.charcoal }}>{i}</span></div>
              ))}
            </div>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-wedding-rituals-step-by-step" category="Festival Guide"/>

        <section style={{ background:"#F5F3FF", borderTop:"1px solid rgba(124,58,237,0.15)", padding:"48px 24px" }}>
          <div style={{ maxWidth:600, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:32, marginBottom:12 }}>💒</p>
            <h2 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:10 }}>Document your family&apos;s wedding traditions</h2>
            <p style={{ fontSize:15, color:C.gray, marginBottom:24 }}>Every family has unique wedding customs. Preserve yours for your children and grandchildren.</p>
            <Link href="/auth/signup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"13px 28px", borderRadius:12, fontSize:14, fontWeight:600, textDecoration:"none" }}>
              Save in Parampara — Free →
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

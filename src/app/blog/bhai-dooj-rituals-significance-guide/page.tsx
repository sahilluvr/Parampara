import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bhai Dooj — Complete Guide to Rituals, Significance & the Yama-Yamuna Legend | OurParampara",
  description: "Complete Bhai Dooj guide — the Yama and Yamuna legend, tilak ceremony rituals, regional names like Bhai Phonta and Bhau Beej, and how sisters and brothers celebrate this bond.",
  keywords: "Bhai Dooj rituals, Bhai Dooj significance, Bhai Tika ceremony, Bhai Phonta tradition, Bhai Dooj date 2026, Yama Yamuna legend, Bhai Dooj tilak vidhi",
  openGraph: {
    title: "Bhai Dooj — Complete Guide to Rituals, Significance & the Yama-Yamuna Legend | OurParampara",
    description: "Complete Bhai Dooj guide — the Yama and Yamuna legend, tilak ceremony rituals, regional names like Bhai Phonta and Bhau Beej, and how sisters and brothers celebrate this bond.",
    url: "https://www.ourparampara.com/blog/bhai-dooj-rituals-significance-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=bhai-dooj-rituals-significance-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=bhai-dooj-rituals-significance-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/bhai-dooj-rituals-significance-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="bhai-dooj-rituals-significance-guide"
        title="Bhai Dooj — Complete Guide to Rituals, Significance & the Yama-Yamuna Legend | OurParampara"
        description="Complete Bhai Dooj guide — the Yama and Yamuna legend, tilak ceremony rituals, regional names like Bhai Phonta and Bhau Beej, and how sisters and brothers celebrate this bond."
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
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Festival Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🙏</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Bhai Dooj — Complete Guide to Rituals, Significance &amp; the Yama-Yamuna Legend</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 7, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Bhai Dooj — also known as Bhai Tika, Bhau Beej, or Bhai Phonta in different regions — celebrates the bond between brothers and sisters. Falling on the second day of the bright fortnight of Kartik (typically the day after Govardhan Puja, marking the end of the five-day Diwali celebrations), it's a day of tilak ceremonies, shared meals, and mutual blessings.</p>

          <h2 style={h2}>The Legend of Yama &amp; Yamuna</h2>
          <p style={s}>According to popular legend, Yama — the god of death — visited his sister Yamuna on this day after a long time. Overjoyed, Yamuna welcomed him with a tilak, garlands, and a feast prepared with love. Touched by her affection, Yama granted her a boon: that any brother who receives a tilak from his sister on this day, with love and prayers for his wellbeing, would be blessed with long life and protection from untimely death. This legend is why Bhai Dooj is also called Yama Dwitiya in some regions.</p>

          <h2 style={h2}>Regional Names</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Bhai Tika","North India — most common name for the tilak ceremony"],["Bhau Beej","Maharashtra, Goa — celebrated with similar tilak and feast traditions"],["Bhai Phonta","Bengal — observed one day after Kali Puja"],["Yama Dwitiya","South India — connects directly to the Yama-Yamuna legend"],["Bhai Tika (Nepal)","One of the most significant days of Tihar, the Nepali equivalent of Diwali"]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>Bhai Dooj Tilak Vidhi — Step by Step</h2>
          {[
            "The sister prepares a small puja thali with roli, akshat (rice grains), a diya, sweets, and sometimes betel leaves",
            "The brother sits facing the sister, often on a decorated mat or seat",
            "The sister applies tilak on the brother's forehead using roli and rice — in some traditions, a specific pattern or multiple dots are applied",
            "An aarti (lamp) is performed around the brother, and a garland or thread (kalawa) may be tied on his wrist",
            "The sister offers sweets to the brother and feeds him with her own hands — symbolizing care and affection",
            "The brother offers gifts — traditionally cash (shagun), jewellery, or clothes — as a token of gratitude and promise of protection",
            "In Haryana and UP, a dried coconut (gola) wrapped with sacred thread is used during the aarti as part of the ritual",
            "The day often concludes with a special family meal, with married sisters frequently visiting their parental home for the occasion",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>When Siblings Are Apart</h2>
          <p style={s}>Like Raksha Bandhan, Bhai Dooj often falls during a time when siblings live in different cities or countries. Many families adapt: video calls during the tilak moment, couriering a small tilak kit and sweets in advance, or celebrating together during the nearest visit rather than on the exact date. The sentiment — a sister's blessing for her brother's wellbeing — matters more than rigid timing.</p>

          <h2 style={h2}>Holi Bhai Dooj — A Lesser-Known Variant</h2>
          <p style={s}>Some regions also observe a "Holi Bhai Dooj," falling on the second lunar day after Holi — though this variant is far less widely known and isn't mentioned in major traditional treatises on Hindu festivals. Most families that celebrate Bhai Dooj do so in the Kartik (post-Diwali) timeframe, which remains the primary and most widely recognized observance.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has a specific Bhai Dooj tradition — a particular sweet, a family heirloom used in the puja thali, or a story about how siblings reunite for this day — record it. These small rituals often carry generations of meaning that are easy to lose track of.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Completing the Diwali season? See our <Link href="/blog/govardhan-puja-annakut-vidhi-guide" style={{ color:C.saffron, fontWeight:600 }}>Govardhan Puja guide</Link> and <Link href="/blog/raksha-bandhan-rituals-significance" style={{ color:C.saffron, fontWeight:600 }}>Raksha Bandhan guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="bhai-dooj-rituals-significance-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🙏</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Celebrate the sibling bond, every year</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save Bhai Dooj photos, gifts, and memories on OurParampara — a tradition worth keeping close.</p>
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

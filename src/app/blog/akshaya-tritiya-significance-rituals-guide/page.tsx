import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Akshaya Tritiya — Complete Guide to Significance, Rituals & Why It's Auspicious for Gold | OurParampara",
  description: "Complete Akshaya Tritiya guide — meaning of 'never-diminishing', why gold and new ventures are auspicious on this day, rituals and puja vidhi, and the legends associated with this festival.",
  keywords: "Akshaya Tritiya significance, Akshaya Tritiya rituals, Akshaya Tritiya gold buying, Akshaya Tritiya puja vidhi, Akshaya Tritiya date 2026, Akshaya Tritiya auspicious activities",
  openGraph: {
    title: "Akshaya Tritiya — Complete Guide to Significance, Rituals & Why It's Auspicious for Gold | OurParamp",
    description: "Complete Akshaya Tritiya guide — meaning of 'never-diminishing', why gold and new ventures are auspicious on this day, rituals and puja vidhi, and the legends associated with this festival.",
    url: "https://www.ourparampara.com/blog/akshaya-tritiya-significance-rituals-guide",
    siteName: "OurParampara",
    images: [{ url: "https://www.ourparampara.com/api/og?slug=akshaya-tritiya-significance-rituals-guide", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.ourparampara.com/api/og?slug=akshaya-tritiya-significance-rituals-guide"],
  },
  alternates: { canonical: "https://www.ourparampara.com/blog/akshaya-tritiya-significance-rituals-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData
        slug="akshaya-tritiya-significance-rituals-guide"
        title="Akshaya Tritiya — Complete Guide to Significance, Rituals & Why It\'s Auspicious for Gold | OurParampara"
        description="Complete Akshaya Tritiya guide — meaning of \'never-diminishing\', why gold and new ventures are auspicious on this day, rituals and puja vidhi, and the legends associated with this festival."
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
            <div style={{ fontSize:40, marginBottom:14 }}>✨</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Akshaya Tritiya — Complete Guide to Significance, Rituals &amp; Why It&apos;s Auspicious for Gold</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>July 9, 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Akshaya Tritiya falls on the third day of the bright fortnight (Shukla Paksha) of the Vaishakha month — a day whose very name means "never-diminishing." It's considered one of the most auspicious days in the Hindu calendar for beginning new ventures, making significant purchases (especially gold), and performing acts of charity, believed to bring lasting and ever-increasing prosperity.</p>

          <h2 style={h2}>The Meaning Behind &quot;Akshaya&quot;</h2>
          <p style={s}>"Akshaya" translates to "that which never diminishes" or "imperishable." The belief is that any meritorious action — charity, worship, or auspicious purchases — performed on this day yields results that continue to grow rather than fade over time. This is why the day is so closely associated with wealth-related activities: the prosperity gained or invested in is believed to be permanent and ever-multiplying.</p>

          <h2 style={h2}>Mythological Significance</h2>
          <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:14, padding:"18px 20px", marginBottom:20 }}>
            {[["Kubera's blessing","Lord Kubera, the treasurer of the gods, is said to have regained his wealth and position on this day — linking Akshaya Tritiya to financial prosperity"],["Sage Vyasa & Ganesha","Akshaya Tritiya is traditionally regarded as the day Ved Vyasa began narrating the Mahabharata to Lord Ganesha, who wrote it down"],["Parshurama Jayanti","The birth of Lord Parshurama, the sixth avatar of Vishnu, is also celebrated on this day in many traditions"],["Akshaya Patra","In the Mahabharata, Krishna is said to have gifted Draupadi the 'Akshaya Patra' — an inexhaustible vessel of food — on this day"]].map(([k,v])=>(
              <div key={k} style={{ marginBottom:10 }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 4px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.6 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>Why Gold Buying Is Popular</h2>
          <p style={s}>Gold is considered an imperishable metal — it doesn't tarnish, rust, or degrade over time, making it a natural symbol for the "never-diminishing" theme of Akshaya Tritiya. Many families consider purchasing gold (even a small amount — coins, jewellery, or a small ornament) on this day to be an investment in lasting prosperity that will benefit the family for generations. This tradition has also become deeply commercial, with jewellers running major promotions around the date.</p>

          <h2 style={h2}>Common Rituals &amp; Auspicious Activities</h2>
          {[
            "Take a holy bath, ideally before sunrise, and wear clean or new clothes",
            "Perform puja to Lord Vishnu (or Lakshmi-Narayana) and Lord Kubera, offering flowers, incense, and sweets",
            "Read or recite passages associated with the day's significance — particularly relevant for families with a Mahabharata reading tradition",
            "Donate food, clothes, or money to those in need — charity on this day is considered especially impactful",
            "Begin new ventures — many businesses choose this day to launch new projects, sign agreements, or make major purchases",
            "Purchase gold, silver, or other valuables — even symbolic, small purchases are considered meaningful",
            "Perform Griha Pravesh, start construction, or finalize property purchases — this is among the most popular muhurats for real estate transactions",
          ].map((step,i)=>(
            <div key={i} style={{ display:"flex", gap:12, marginBottom:12 }}>
              <span style={{ width:26, height:26, borderRadius:"50%", background:C.saffronLight, border:`2px solid ${C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:C.saffron, flexShrink:0 }}>{i+1}</span>
              <p style={{ fontSize:14, color:"#374151", lineHeight:1.7, margin:0 }}>{step}</p>
            </div>
          ))}

          <h2 style={h2}>If Gold Isn't in the Budget</h2>
          <p style={s}>Not every family can or wants to purchase gold each year — and the underlying tradition doesn't require it. The spirit of Akshaya Tritiya is about beginning something meaningful with intention: starting a savings habit, planting a tree, beginning a new skill or course, donating to a cause you care about, or simply setting an intention for the coming year. Many families find these alternatives equally meaningful, particularly as a way to teach children about the day's significance beyond commercial messaging.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family has a tradition of buying gold on Akshaya Tritiya — even a small coin each year — keep a record of each purchase and the year it was made. Over decades, this becomes both a family financial record and a lovely tradition to pass down with its history intact.</p>
          </div>

          <div style={{ marginTop:32, padding:"16px 20px", background:C.ivory, borderRadius:12, border:`1px solid ${C.border}` }}>
            <p style={{ fontSize:13, color:C.gray, margin:0 }}>Moving into a new home around this time? See our <Link href="/blog/griha-pravesh-puja-samagri-list" style={{ color:C.saffron, fontWeight:600 }}>Griha Pravesh guide</Link>.</p>
          </div>
        </article>
        <BlogEmailCapture/>
        <RelatedPosts currentSlug="akshaya-tritiya-significance-rituals-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>✨</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Record what never diminishes</h2>
            <p style={{ fontSize:14, color:"#374151", marginBottom:20, lineHeight:1.7 }}>Save family heirlooms, gold purchase history, and Akshaya Tritiya traditions on OurParampara.</p>
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

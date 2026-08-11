import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Jain Diwali — Mahavir Nirvana Significance & How Jains Celebrate Differently | OurParampara",
  description: "Jains celebrate Diwali to commemorate the Nirvana (liberation) of Lord Mahavira — the 24th and last Tirthankara of the current cosmic cycle — which occurred on the Diwali night (Kartik Amavasya) in 52",
  keywords: "Jain Diwali significance, Mahavir Nirvana Diwali, Jain Diwali traditions, how Jains celebrate Diwali, Jain Diwali prayers, Diwali Jain vs Hindu",
  openGraph: { title: "Jain Diwali — Mahavir Nirvana Significance & How Jains Celebrate Differently", description: "Jains celebrate Diwali to commemorate the Nirvana (liberation) of Lord Mahavira — the 24th and last Tirthankara of the current cosmic cycle — which occurred on the Diwali night (Kartik Amavasya) in 52", url: "https://www.ourparampara.com/blog/jain-diwali-mahavir-nirvana-significance-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=jain-diwali-mahavir-nirvana-significance-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=jain-diwali-mahavir-nirvana-significance-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/jain-diwali-mahavir-nirvana-significance-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="jain-diwali-mahavir-nirvana-significance-guide" title="Jain Diwali — Mahavir Nirvana Significance & How Jains Celebrate Differently" description="Jains celebrate Diwali to commemorate the Nirvana (liberation) of Lord Mahavira — the 24th and last Tirthankara of the current cosmic cycle — which occurred on the Diwali night (Kartik Amavasya) in 52" date="2026-06-07" category="Festival Guide"
        faqs={[
          { q: "Why do Jains celebrate Diwali?", a: "Jains celebrate Diwali to commemorate the Nirvana (liberation) of Lord Mahavira — the 24th and last Tirthankara of the current cosmic cycle — which occurred on the Diwali night (Kartik Amavasya) in 527 BCE in Pavapuri, Bihar. The lamps lit on Diwali represent the spiritual light of Mahavira's teachings that continued after his physical liberation. This is distinct from the Hindu Diwali which celebrates Lakshmi and Lord Rama's return to Ayodhya." },
          { q: "How is Jain Diwali different from Hindu Diwali?", a: "Both traditions observe Diwali with lamps and celebration, but the spiritual intention differs. Hindu Diwali centres on Lakshmi worship, wealth and prosperity. Jain Diwali focuses on the Nirvana of Mahavira and the spiritual light of his teachings. Jains perform a specific Mahavira Nirvana Puja, recite passages from Jain texts, and the day is also New Year's Day in the Jain calendar — marked with the start of new account books (a commercial tradition in Jain business families)." },
          { q: "What is the Jain New Year and how is it celebrated?", a: "The day after Diwali (Kartik Shukla Pratipada) is Jain New Year — called Bestu Varas in Gujarat. Business families perform a Chopada Puja (worship of new account books), and the new year is celebrated with family gatherings, new clothes, and visits to the temple. This tradition of beginning new accounts on Jain New Year has been maintained by Jain merchant families for centuries." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🪔</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Jain Diwali — Mahavir Nirvana Significance & How Jains Celebrate Differently</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 7, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>On the night of Diwali, while most of India lights lamps for Goddess Lakshmi, the Jain community lights lamps for a different reason: to commemorate the Nirvana (liberation) of Lord Mahavira, the 24th Tirthankara, who attained moksha on this very night in 527 BCE. This convergence of the Hindu and Jain celebrations on the same night of the year — each with their own distinct meaning — is one of the beautiful coincidences of the Indian calendar.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Jains celebrate Diwali to mark Mahavira&apos;s Nirvana (527 BCE). Traditions include: Mahavira Nirvana Puja at the temple, lighting diyas to symbolise the spiritual light of his teachings, Chopada Puja (new account books) on Jain New Year the next day, and family celebration with strictly vegetarian sweets and gatherings.</p>
          </div>
          <h2 style={h2}>Mahavira Nirvana Puja</h2>
          <p style={s}>The central religious act of Jain Diwali is the Mahavira Nirvana Puja performed at the Jain temple. Devotees gather before the image or idol of Mahavira, offer flowers (or rice, in traditions that avoid flower plucking), recite the Navkar Mantra, and listen to discourses on Mahavira&apos;s life and teachings. The lamp lighting that follows represents the spiritual light that Mahavira&apos;s teachings continue to provide even after his physical liberation.</p>
          <h2 style={h2}>Chopada Puja — New Year Traditions</h2>
          <ul style={{ paddingLeft:20 }}>
            {["The day after Diwali is Jain New Year (Bestu Varas) — the start of the Vira Samvat calendar year","Chopada Puja (worship of new account books) is performed — new ledgers are begun with the Navkar Mantra written on the first page","This tradition reflects the Jain community&apos;s historic role as merchants and traders — the account book is a sacred object","New clothes are worn, elders are visited, and sweets are shared — the festive dimension of the new year is similar to other communities","Many Jain families also perform Lakshmi Puja in the evening, reflecting the integrated nature of Jain and Hindu cultural life in many communities"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>If your family maintains the Chopada Puja tradition — document it. The specific prayers, the new account book ritual, the date when your family has historically begun new accounts — these commercial-spiritual traditions are uniquely Jain and worth preserving.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="jain-diwali-mahavir-nirvana-significance-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🪔</p>
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

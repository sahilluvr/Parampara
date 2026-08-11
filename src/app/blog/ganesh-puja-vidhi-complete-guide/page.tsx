import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ganesh Puja Vidhi — Complete Step-by-Step Guide for Home & Ceremonies | OurParampara",
  description: "Ganesh Puja (Shodashopachara — 16-step worship) at home: 1) Invoke Ganesha into the idol (Avahana), 2) Offer a seat (Asana), 3) Wash the idol with water (Padya), 4) Offer water for sipping (Achamana),",
  keywords: "Ganesh puja vidhi, how to do Ganesh puja at home, Ganesh puja samagri list, Shodashopachara puja guide, Ganesh puja mantras, Ganesh puja without priest",
  openGraph: { title: "Ganesh Puja Vidhi — Complete Step-by-Step Guide for Home & Ceremonies", description: "Ganesh Puja (Shodashopachara — 16-step worship) at home: 1) Invoke Ganesha into the idol (Avahana), 2) Offer a seat (Asana), 3) Wash the idol with water (Padya), 4) Offer water for sipping (Achamana),", url: "https://www.ourparampara.com/blog/ganesh-puja-vidhi-complete-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=ganesh-puja-vidhi-complete-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=ganesh-puja-vidhi-complete-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/ganesh-puja-vidhi-complete-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="ganesh-puja-vidhi-complete-guide" title="Ganesh Puja Vidhi — Complete Step-by-Step Guide for Home & Ceremonies" description="Ganesh Puja (Shodashopachara — 16-step worship) at home: 1) Invoke Ganesha into the idol (Avahana), 2) Offer a seat (Asana), 3) Wash the idol with water (Padya), 4) Offer water for sipping (Achamana)," date="2026-06-18" category="Ritual Guide"
        faqs={[
          { q: "How do I perform Ganesh Puja at home step by step?", a: "Ganesh Puja (Shodashopachara — 16-step worship) at home: 1) Invoke Ganesha into the idol (Avahana), 2) Offer a seat (Asana), 3) Wash the idol with water (Padya), 4) Offer water for sipping (Achamana), 5) Ritual bath with Panchamrit (Snana), 6) Dress with new clothes or sacred thread (Vastra), 7) Apply sandalwood paste and kumkum (Gandha), 8) Offer flowers (Pushpa), 9) Light incense (Dhupa), 10) Light a lamp (Deepa), 11) Offer food/sweets (Naivedya), 12) Offer water after food (Achamaniya), 13) Offer betel leaf (Tambula), 14) Wave camphor lamp (Aarti/Nirajanam), 15) Circumambulate three times (Pradakshina), 16) Full prostration (Sashtanga Namaskara)." },
          { q: "What is the best time to do Ganesh Puja?", a: "Ganesh Puja can be performed at any time but is especially auspicious during Brahma Muhurta (predawn), at sunrise, and at midday. On Ganesh Chaturthi, puja is performed in the morning after the idol is installed. Tuesday and Wednesday are the most auspicious days for Ganesh worship. Puja should not be performed facing south — face east or north." },
          { q: "What samagri is needed for Ganesh Puja?", a: "Ganesh Puja samagri: Ganesha idol or image, red flowers (especially red hibiscus), durva grass (3-bladed sacred grass — the most important offering to Ganesha), modak or ladoo (his favourite sweet), red sandalwood paste (raktha chandan), kumkum, akshat (unbroken rice), incense sticks, ghee lamp, camphor, coconut, betel leaves, and Panchamrit (milk, curd, ghee, honey, sugar) for Abhishekam." },
        ]}
      />
      <Navbar/>
      <main>
        <section style={{ paddingTop:100, paddingBottom:48, background:C.charcoal }}>
          <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
            <div style={{ display:"flex", gap:8, marginBottom:16 }}>
              <Link href="/blog" style={{ fontSize:12, color:"rgba(255,255,255,0.4)", textDecoration:"none" }}>Blog</Link>
              <span style={{ color:"rgba(255,255,255,0.2)" }}>›</span>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>Ritual Guide</span>
            </div>
            <div style={{ fontSize:40, marginBottom:14 }}>🐘</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Ganesh Puja Vidhi — Complete Step-by-Step Guide for Home & Ceremonies</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 18, 2026</span><span>·</span><span>7 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>Ganesh Puja is the first and most auspicious puja in the Hindu tradition — Lord Ganesha, the remover of obstacles and lord of beginnings, is invoked before every ceremony, every new venture, and every important life event. Knowing how to perform Ganesh Puja correctly is one of the most practically useful pieces of ritual knowledge an Indian family can have.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>Ganesh Puja Shodashopachara (16 steps): Avahana, Asana, Padya, Achamana, Snana, Vastra, Gandha, Pushpa, Dhupa, Deepa, Naivedya, Achamaniya, Tambula, Aarti, Pradakshina, Sashtanga Namaskara. Essential offerings: durva grass, red flowers, modak. Best day: Tuesday or Wednesday. Best time: morning.</p>
          </div>

          <h2 style={h2}>Why Durva Grass?</h2>
          <p style={s}>Durva (three-bladed sacred grass) is the single most important offering to Lord Ganesha — more valued than flowers or sweets. The specific legend holds that Ganesha was protected from the heat of a demon's curse by the cooling properties of durva. 21 sprigs of durva offered while reciting Ganesha's 21 names is the most complete offering. Durva is available at most Indian grocery stores and can be grown at home.</p>
          <h2 style={h2}>The 21 Names of Ganesha</h2>
          <p style={s}>The Ganesh Namaskara — recitation of 21 names of Ganesha while offering 21 durva sprigs — is the complete Ganesh puja in itself. The names include: Sumukha, Ekadanta, Kapila, Gajakarnaka, Lambodara, Vikata, Vighnanashana, Vinayaka, Dhurta, Vakratunda, Ganadhyaksha, Bhalachandra, Gajanana, Heramba, Skandapurvaja, Dvaimatura, Munijuta, Siddha, Vighnaharta, Balachandra, Gajendra.</p>
          <h2 style={h2}>Ganesh Puja in Family Life</h2>
          <p style={s}>Ganesh Puja anchors the beginning of every family ceremony — the opening puja of a Griha Pravesh, the first puja of Navratri, the puja before a wedding, before Saraswati Puja on the first day of school. Teaching children to perform even a simplified Ganesh Puja — offering durva, reciting Om Ganeshaya Namaha, performing a simple aarti — is one of the most transferable pieces of ritual heritage a parent can pass on.</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Document your family's specific Ganesh Puja sequence — the specific mantras recited, the specific number of modaks offered, the specific occasions when your family performs Ganesh Puja. This ritual knowledge, transmitted from parent to child, is one of the most continuous threads in Indian family heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="ganesh-puja-vidhi-complete-guide" category="Ritual Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🐘</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, rituals and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

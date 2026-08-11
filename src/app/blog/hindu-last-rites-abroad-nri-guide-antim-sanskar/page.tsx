import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hindu Last Rites Abroad — What NRI Families Need to Know When a Parent Dies | OurParampara",
  description: "A compassionate guide for NRI families on Hindu last rites abroad — what to do when a parent dies in India while you're away, or when an Indian passes away outside India.",
  keywords: "Hindu funeral rites abroad, last rites NRI India, antim sanskar outside India, what to do when parent dies India NRI, Hindu death rituals abroad, NRI parent death guide, Shradh abroad NRI",
  openGraph: { title: "Hindu Last Rites Abroad — NRI Family Guide", description: "A compassionate guide for NRI families — what to do when a parent dies in India while you're away, or when an Indian passes away outside India.", url: "https://www.ourparampara.com/blog/hindu-last-rites-abroad-nri-guide-antim-sanskar", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=hindu-last-rites-abroad-nri-guide-antim-sanskar", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=hindu-last-rites-abroad-nri-guide-antim-sanskar"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/hindu-last-rites-abroad-nri-guide-antim-sanskar" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="hindu-last-rites-abroad-nri-guide-antim-sanskar" title="Hindu Last Rites Abroad — What NRI Families Need to Know When a Parent Dies" description="A compassionate guide for NRI families on Hindu last rites abroad — what to do when a parent dies in India while you're away, or when an Indian passes away outside India." date="2026-04-22" category="Heritage Guide"
        faqs={[
          { q: "Can Hindu last rites be performed abroad?", a: "Yes. The core antim sanskar rituals — Antyesti (cremation), Asthi Visarjan (immersion of ashes), and Shradh — can all be adapted for performance abroad. Many Hindu temples in the USA, UK, Canada, and Australia have arrangements for cremation and can connect families with priests. Ashes can also be transported to India for immersion in sacred rivers." },
          { q: "What should an NRI do immediately when a parent dies in India?", a: "First, book the earliest available flight to India. Contact the nearest Indian embassy or consulate for emergency travel documents if needed. The family in India can proceed with the body preparation and first-night rituals. In Hindu tradition, cremation should happen within 24 hours if possible, but can be delayed 2-3 days if an immediate family member (especially the eldest son) is travelling." },
          { q: "Can Shradh be performed outside India?", a: "Yes. Shradh rituals can be performed anywhere — at home or near any body of water. Many Hindu priests abroad are experienced in guiding families through Shradh. The Pitru Paksha period is the traditional time for Shradh, but annual Shradh on the death anniversary can be performed year-round with a qualified priest." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>🕯️</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Hindu Last Rites Abroad — What NRI Families Need to Know When a Parent Dies</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>April 22, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>One of the most disorienting experiences an NRI can face is the death of a parent or family elder in India while they are thousands of miles away, or the death of an Indian family member in their country of residence where the familiar infrastructure of Hindu last rites doesn&apos;t exist. This guide is written with compassion for families in that moment — a practical reference for what to do, what can be adapted, and what can wait.</p>

          <div style={{ background:"#EFF6FF", border:`1px solid #BFDBFE`, borderRadius:12, padding:"16px 20px", marginBottom:24 }}>
            <p style={{ fontSize:14, fontWeight:600, color:"#1D4ED8", margin:"0 0 6px" }}>A note before reading</p>
            <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>Grief doesn&apos;t pause for logistics. If you are in the middle of a loss right now, please know that the rituals will find a way to be performed — imperfectly, at distance, adapted to circumstances. Every tradition within Hinduism acknowledges that intention and love matter more than perfect procedure. Read what you need and leave the rest for later.</p>
          </div>

          <h2 style={h2}>When a Parent Dies in India While You&apos;re Abroad</h2>
          <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
            {[["Immediately","Contact your airline and explain the bereavement situation — most airlines have bereavement fares or will waive change fees. Contact the Indian embassy for an emergency visa or document assistance if needed."],["Within hours","The family in India can begin preparations. In Hindu tradition, the body should not be left alone. The family will perform the initial rituals — lighting a diya near the head, placing tulsi in the mouth, and keeping vigil."],["Cremation timing","Ideally within 24 hours in Hindu tradition, but most families wait for the eldest son or a key family member to arrive — up to 2-3 days is generally acceptable. Many families keep the body in a mortuary or at home with ice until travel is possible."],["If you cannot make it in time","This is more common than families acknowledge. The rituals can proceed without you — your participation in the Shradh and 13-day rituals (Tehrahvi) matters just as much. Many priests perform a distance ritual for family members who are unable to travel."]].map(([k,v])=>(
              <div key={k} style={{ padding:"12px 16px", background:C.ivory, borderRadius:10, border:`1px solid ${C.border}` }}>
                <p style={{ fontSize:13, fontWeight:700, color:C.saffron, margin:"0 0 5px" }}>{k}</p>
                <p style={{ fontSize:13, color:"#374151", margin:0, lineHeight:1.7 }}>{v}</p>
              </div>
            ))}
          </div>

          <h2 style={h2}>The Key Antim Sanskar Rituals</h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
            {[["Antyesti (Cremation)","The central ritual — the body is cremated, traditionally by the eldest son lighting the pyre. Cremation must occur for asthi visarjan to follow."],["Asthi Visarjan","Immersion of the collected ashes and bone fragments in a sacred river — ideally the Ganga at Haridwar or Prayagraj, but any sacred water body is accepted."],["Shradh (13 days)","A period of mourning rituals, including pind daan (offerings of rice balls) and feeding Brahmins or the poor, performed over 13 days."],["Tehrahvi (13th day)","The concluding ceremony — community gathering, prayers, and the formal end of the acute mourning period."],["Asthi/Pind Daan at Gaya","Many families visit Gaya in Bihar to perform pind daan at the Vishnupad temple — considered especially powerful for ancestral liberation."],["Annual Shradh","Performed every year on the death anniversary (tithi), either at home or near a water body, with a priest offering prayers."]].map(([k,v])=>(
              <div key={k} style={{ display:"flex", flexDirection:"column", gap:2, background:"#fff", padding:"10px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, fontWeight:700, color:C.saffron }}>{k}</span>
                <span style={{ fontSize:12, color:"#374151" }}>{v}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>When an Indian Family Member Dies Abroad</h2>
          <p style={s}>When a family member passes away in the USA, UK, Canada, or Australia, the immediate practical steps involve the country&apos;s legal system — registering the death, engaging a funeral home, and deciding whether to cremate locally or transport the body to India.</p>
          <ul style={{ paddingLeft:20 }}>
            {["Most Hindu families choose local cremation — it is faster, less expensive than body repatriation, and the ashes can be taken to India for Asthi Visarjan on a subsequent trip","Hindu temples in most major cities (Fremont CA, Houston TX, Southall London, Brampton Ontario) have connections with priests experienced in antim sanskar — contact the temple first","Many funeral homes in areas with large Indian communities have worked with Hindu families before and can accommodate rituals like keeping the body at home for one night, allowing family to perform the anointment","The 13-day Shradh period can be observed wherever the family is — daily prayers, lighting a diya, abstaining from celebrations, and feeding others in the deceased&apos;s memory","Asthi Visarjan can be performed in any large river — the ocean, the Thames, the Hudson — as a temporary measure, with a more traditional immersion in India on the next visit"].map(i=><li key={i} style={li}>{i}</li>)}
          </ul>

          <h2 style={h2}>Transporting Ashes to India</h2>
          <p style={s}>Most airlines permit transporting cremated remains in carry-on luggage in a sealed urn. You will need a death certificate and a cremation certificate from the country where the cremation took place. No special import permit is required to bring ashes into India. When arriving at an Indian airport, declare the ashes at customs — carry all documentation. The ashes are then typically taken to Haridwar, Prayagraj, or the family&apos;s ancestral sacred location for immersion.</p>

          <h2 style={h2}>Performing Shradh Outside India</h2>
          <p style={s}>Shradh — the annual memorial ritual for a deceased family member — can be performed anywhere in the world. The essential elements are: a priest (or the family elder performing with guidance), pind daan (rice ball offerings), tarpan (water offerings with sesame), and feeding others in the deceased&apos;s memory. Many Hindu priests abroad are fully capable of performing Shradh. In cities without a local priest, video-call guidance from a priest in India is an accepted modern adaptation.</p>

          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Document while you can</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>One of the most meaningful things families do in the period after a loss is record the elder&apos;s stories — while memories are fresh and family is gathered. Ask elders who are present to share what they remember about the person who has passed. These recordings, stored on OurParampara, become irreplaceable family heritage.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="hindu-last-rites-abroad-nri-guide-antim-sanskar" category="Heritage Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>🕯️</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve the memories of those you have loved</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>OurParampara&apos;s Elder Voice Archive and Memory Vault are built to capture and preserve what your elders leave behind. Start before it&apos;s needed.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

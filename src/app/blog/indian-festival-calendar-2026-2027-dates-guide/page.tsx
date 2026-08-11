import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import BlogStructuredData from "@/components/marketing/BlogStructuredData";
import RelatedPosts from "@/components/marketing/RelatedPosts";
import BlogEmailCapture from "@/components/marketing/BlogEmailCapture";
import { C, F } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Indian Festival Calendar 2026-2027 — Complete List of Hindu, Sikh, Muslim & Christian Dates | OurParampara",
  description: "Key Hindu festivals: Maha Shivaratri (Feb 26, 2026), Holi (Mar 4, 2026), Ram Navami (Apr 7, 2026), Raksha Bandhan (Aug 28, 2026), Janmashtami (Aug 16, 2026), Ganesh Chaturthi (Sep 14, 2026 approx.), N",
  keywords: "Indian festival calendar 2026, Hindu festival dates 2026 2027, Indian holidays calendar 2026, festival list India 2026, religious calendar India 2026",
  openGraph: { title: "Indian Festival Calendar 2026-2027 — Complete List of Hindu, Sikh, Muslim & Christian Dates", description: "Key Hindu festivals: Maha Shivaratri (Feb 26, 2026), Holi (Mar 4, 2026), Ram Navami (Apr 7, 2026), Raksha Bandhan (Aug 28, 2026), Janmashtami (Aug 16, 2026), Ganesh Chaturthi (Sep 14, 2026 approx.), N", url: "https://www.ourparampara.com/blog/indian-festival-calendar-2026-2027-dates-guide", siteName: "OurParampara", images: [{ url: "https://www.ourparampara.com/api/og?slug=indian-festival-calendar-2026-2027-dates-guide", width:1200, height:630 }], type:"article" },
  twitter: { card:"summary_large_image", images:["https://www.ourparampara.com/api/og?slug=indian-festival-calendar-2026-2027-dates-guide"] },
  alternates: { canonical: "https://www.ourparampara.com/blog/indian-festival-calendar-2026-2027-dates-guide" },
};

export default function Page() {
  const s = { fontSize:15, color:"#374151", lineHeight:1.9, marginBottom:20 };
  const h2 = { fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:14, marginTop:36 };
  const li = { fontSize:14, color:"#374151", lineHeight:1.8, marginBottom:8 };
  return (
    <>
      <BlogStructuredData slug="indian-festival-calendar-2026-2027-dates-guide" title="Indian Festival Calendar 2026-2027 — Complete List of Hindu, Sikh, Muslim & Christian Dates" description="Key Hindu festivals: Maha Shivaratri (Feb 26, 2026), Holi (Mar 4, 2026), Ram Navami (Apr 7, 2026), Raksha Bandhan (Aug 28, 2026), Janmashtami (Aug 16, 2026), Ganesh Chaturthi (Sep 14, 2026 approx.), N" date="2026-06-20" category="Festival Guide"
        faqs={[
          { q: "What are the major Hindu festival dates for 2026-2027?", a: "Key Hindu festivals: Maha Shivaratri (Feb 26, 2026), Holi (Mar 4, 2026), Ram Navami (Apr 7, 2026), Raksha Bandhan (Aug 28, 2026), Janmashtami (Aug 16, 2026), Ganesh Chaturthi (Sep 14, 2026 approx.), Navratri (Oct 2-11, 2026), Dussehra (Oct 11, 2026), Diwali (Oct 19-20, 2026), Chhath Puja (Oct 26-29, 2026). For 2027, dates shift earlier in most cases due to the lunar calendar — always confirm exact dates closer to the year as they are calculated using the Panchang (Hindu lunar calendar)." },
          { q: "Why do Hindu festival dates change every year?", a: "Most Hindu festivals follow the lunisolar Hindu calendar (Panchang), which is based on both the moon's phases and the sun's position — unlike the fixed Gregorian calendar. This means festival dates shift by roughly 10-12 days earlier each year relative to the Gregorian calendar, with periodic adjustment months (Adhik Maas) added to keep festivals aligned with their associated seasons. This is why Diwali, Holi, and most Hindu festivals fall on different Gregorian dates every year." },
          { q: "What are the major Sikh, Muslim, and Christian festival dates for 2026?", a: "Sikh: Guru Gobind Singh Jayanti (Jan 6, 2026), Baisakhi (Apr 13-14, 2026), Guru Nanak Jayanti (Nov, date varies by lunar calendar). Muslim: Ramadan begins approximately March 1, 2026, Eid ul-Fitr (~Mar 30), Eid ul-Adha/Bakrid (~Jun 7), Muharram (~Jun 26), Milad-un-Nabi (~Sep 4). Christian: Easter (Apr 5, 2026), Christmas (Dec 25, fixed every year). Islamic dates shift approximately 10-11 days earlier each Gregorian year since the Islamic calendar is purely lunar." },
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
            <div style={{ fontSize:40, marginBottom:14 }}>📅</div>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.2, marginBottom:14 }}>Indian Festival Calendar 2026-2027 — Complete List of Hindu, Sikh, Muslim & Christian Dates</h1>
            <div style={{ display:"flex", gap:16, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
              <span>By Parampara Team</span><span>·</span><span>June 20, 2026</span><span>·</span><span>8 min read</span>
            </div>
          </div>
        </section>

        <article style={{ maxWidth:760, margin:"0 auto", padding:"40px 24px 80px" }}>
          <p style={s}>With festivals spanning Hindu, Sikh, Muslim, Christian, Jain, Buddhist, and Parsi traditions — each following different calendar systems — keeping track of every important date across a year can be genuinely difficult, especially for multi-faith families or those planning celebrations and travel in advance. This guide brings together the major festival dates for 2026 and 2027 across all of India's major religious traditions in one place.</p>
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"14px 18px", marginBottom:24 }}>
            <p style={{ fontSize:12, fontWeight:700, color:"#16A34A", margin:"0 0 6px", textTransform:"uppercase", letterSpacing:0.5 }}>Quick Answer</p>
            <p style={{ fontSize:14, color:"#374151", margin:0, lineHeight:1.7 }}>2026 major dates: Maha Shivaratri (Feb 26), Holi (Mar 4), Ram Navami (Apr 7), Baisakhi (Apr 13), Eid ul-Fitr (~Mar 30), Raksha Bandhan (Aug 28), Janmashtami (Aug 16), Eid ul-Adha (~Jun 7), Navratri (Oct 2-11), Dussehra (Oct 11), Diwali (Oct 19), Chhath Puja (Oct 26-29), Christmas (Dec 25). Hindu and Islamic dates shift yearly due to lunar calendars — always verify exact dates closer to the date via the Panchang.</p>
          </div>

          <h2 style={h2}>Hindu Festival Calendar 2026</h2>
          <p style={s}>Makar Sankranti (Jan 14), Vasant Panchami (Feb 2), Maha Shivaratri (Feb 26), Holi (Mar 4), Chaitra Navratri (Mar 30-Apr 7), Ram Navami (Apr 7), Hanuman Jayanti (Apr 11), Akshaya Tritiya (Apr-May, varies), Raksha Bandhan (Aug 28), Janmashtami (Aug 16), Ganesh Chaturthi (mid-September, varies), Sharad Navratri (Oct 2-11), Dussehra/Vijayadashami (Oct 11), Karwa Chauth (Oct 20), Diwali (Oct 19), Govardhan Puja (Oct 20-21), Bhai Dooj (Oct 21), Chhath Puja (Oct 26-29). Always confirm exact dates close to the season as the Panchang determines final dates regionally.</p>
          <h2 style={h2}>Sikh Festival Calendar 2026</h2>
          <p style={s}>Guru Gobind Singh Jayanti (Jan 6), Maghi (Jan 14), Hola Mohalla (early March, day after Holi), Baisakhi (Apr 13-14 — Sikh New Year and Khalsa founding anniversary), Guru Nanak Jayanti (November, exact date varies by Nanakshahi lunar calendar). Major Gurdwara celebrations including Akhand Path and Nagar Kirtan are typically held around these key dates.</p>
          <h2 style={h2}>Muslim Festival Calendar 2026</h2>
          <p style={s}>Ramadan begins approximately March 1, 2026 (confirmed by moon sighting), Eid ul-Fitr approximately March 30, Eid ul-Adha/Bakrid approximately June 7, Islamic New Year (Muharram) approximately June 26, Ashura (10th Muharram) approximately July 5, Milad-un-Nabi approximately September 4. All Islamic dates are confirmed by moon sighting and may shift by a day depending on regional sighting committees.</p>
          <h2 style={h2}>Christian, Jain, Buddhist & Parsi Dates 2026</h2>
          <p style={s}>Christian: Good Friday (Apr 3), Easter Sunday (Apr 5), Christmas (Dec 25). Jain: Mahavir Jayanti (Apr, varies), Paryushana Parva (Aug-Sep, 8-10 days), Jain Diwali coinciding with Hindu Diwali. Buddhist: Buddha Purnima/Vesak (May 12). Parsi: Nowruz (Mar 20 for Persian calendar; Parsi Shahenshahi Navroz around Aug 16).</p>
          <div style={{ background:C.goldLight, border:`1px solid rgba(184,146,42,0.2)`, borderRadius:12, padding:"16px 20px", marginTop:20 }}>
            <p style={{ fontSize:14, fontWeight:600, color:C.gold, margin:"0 0 6px" }}>💡 Family tradition tip</p>
            <p style={{ fontSize:13, color:"#374151", margin:0 }}>Save this calendar and add the festivals your family actually celebrates to your Parampara Family Calendar — so reminders, rituals, and the specific way your household marks each occasion are all preserved together in one place, not just generic dates.</p>
          </div>
        </article>

        <BlogEmailCapture/>
        <RelatedPosts currentSlug="indian-festival-calendar-2026-2027-dates-guide" category="Festival Guide"/>

        <section style={{ background:C.saffronLight, borderTop:`1px solid rgba(200,84,26,0.15)`, padding:"40px 24px" }}>
          <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center" }}>
            <p style={{ fontSize:28, marginBottom:10 }}>📅</p>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Preserve your family&apos;s traditions</h2>
            <p style={{ fontSize:14, color:C.gray, marginBottom:20, lineHeight:1.7 }}>Document your ceremonies, names and heritage on OurParampara — for every generation.</p>
            <Link href="/auth/signup" style={{ display:"inline-block", padding:"13px 32px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>Start preserving for free →</Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

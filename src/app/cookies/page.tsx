import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { C, F } from "@/lib/constants";

export default function CookiesPage() {
  return (
    <>
      <Navbar/>
      <main style={{ paddingTop:120, paddingBottom:80, background:C.ivory }}>
        <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:C.saffron, marginBottom:12 }}>Legal</p>
          <h1 style={{ fontFamily:F.display, fontSize:"clamp(32px,5vw,52px)", fontWeight:600, color:C.charcoal, marginBottom:8 }}>Cookie Policy</h1>
          <p style={{ fontSize:14, color:C.gray, marginBottom:48 }}>Last updated: June 3, 2026</p>

          {[
            ["What are cookies?", "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and provide a better experience."],
            ["Cookies we use", "Parampara uses only essential cookies:\n• Authentication cookies: keep you logged in during your session (Supabase auth tokens)\n• Preference cookies: remember your family settings and UI preferences\n• Security cookies: protect against CSRF attacks\n\nWe do NOT use advertising, tracking, or analytics cookies that follow you across websites."],
            ["Third-party cookies", "Razorpay (our payment processor) may set cookies during the checkout process. These are governed by Razorpay's privacy policy."],
            ["Managing cookies", "You can control cookies through your browser settings. However, disabling essential cookies will prevent you from logging in and using the platform. Most browsers allow you to: view cookies stored, delete specific cookies, block cookies from specific sites."],
            ["No consent required", "As we only use strictly necessary cookies, we are not required to obtain consent under applicable laws. We do not serve advertising cookies or third-party trackers."],
            ["Contact", "For cookie-related queries: ourparamparaofficial@gmail.com"],
          ].map(([title, content]) => (
            <div key={title} style={{ marginBottom:32, padding:24, background:C.white, borderRadius:16, border:`1px solid ${C.border}` }}>
              <h2 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:10 }}>{title}</h2>
              <p style={{ fontSize:15, color:C.gray, lineHeight:1.9, margin:0, whiteSpace:"pre-line" }}>{content}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}

import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { C, F } from "@/lib/constants";

const Section = ({ title, children }: { title:string; children:React.ReactNode }) => (
  <div style={{ marginBottom:36 }}>
    <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:12 }}>{title}</h2>
    <div style={{ fontSize:15, color:C.gray, lineHeight:1.9 }}>{children}</div>
  </div>
);

export default function PrivacyPage() {
  return (
    <>
      <Navbar/>
      <main style={{ paddingTop:120, paddingBottom:80, background:C.ivory }}>
        <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:C.saffron, marginBottom:12 }}>Legal</p>
          <h1 style={{ fontFamily:F.display, fontSize:"clamp(32px,5vw,52px)", fontWeight:600, color:C.charcoal, marginBottom:8 }}>Privacy Policy</h1>
          <p style={{ fontSize:14, color:C.gray, marginBottom:48 }}>Last updated: June 3, 2026 · Effective immediately</p>

          <Section title="1. Who we are">
            <p>Parampara (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a digital heritage platform for Indian and South Asian families, operated from Chandigarh, India. Our website is <strong>ourparampara.com</strong>. Contact us at <a href="mailto:ourparamparaofficial@gmail.com" style={{ color:C.saffron }}>ourparamparaofficial@gmail.com</a>.</p>
          </Section>

          <Section title="2. What data we collect">
            <p><strong>Account data:</strong> Name, email address, phone number (if you sign up via OTP), and family name when you create an account.</p>
            <p style={{ marginTop:10 }}><strong>Family data:</strong> Ritual entries, family member details (names, roles, birthdates, anniversaries), media uploads (photos, videos, voice memos), and festival preferences you provide.</p>
            <p style={{ marginTop:10 }}><strong>Usage data:</strong> Pages visited, features used, and device/browser information collected automatically via standard server logs.</p>
            <p style={{ marginTop:10 }}><strong>Payment data:</strong> Payment transactions are processed by Razorpay. We do not store card numbers or banking details. We receive only a payment confirmation and transaction ID.</p>
          </Section>

          <Section title="3. How we use your data">
            <p>We use your data to: provide and improve the Parampara platform, send birthday and festival reminders you opt into, process payments, send account-related emails, and respond to support requests. We do not sell your data to third parties.</p>
          </Section>

          <Section title="4. Data sharing">
            <p>We share data only with: <strong>Supabase</strong> (database hosting), <strong>Vercel</strong> (platform hosting), <strong>Razorpay</strong> (payment processing), and <strong>Anthropic</strong> (AI features, if you use them). All providers are bound by data processing agreements.</p>
          </Section>

          <Section title="5. Data security">
            <p>All data is encrypted in transit (TLS/HTTPS) and at rest. Family data is isolated using Row Level Security — only family members you invite can access your family&apos;s data. We do not have access to your family&apos;s ritual content.</p>
          </Section>

          <Section title="6. Your rights">
            <p>You may request access to, correction of, or deletion of your personal data at any time by emailing <a href="mailto:ourparamparaofficial@gmail.com" style={{ color:C.saffron }}>ourparamparaofficial@gmail.com</a>. Account deletion removes all associated data within 30 days.</p>
          </Section>

          <Section title="7. Cookies">
            <p>We use only essential cookies for authentication and session management. We do not use advertising or tracking cookies. See our <a href="/cookies" style={{ color:C.saffron }}>Cookie Policy</a> for details.</p>
          </Section>

          <Section title="8. Contact">
            <p>For any privacy-related queries, contact us at <a href="mailto:ourparamparaofficial@gmail.com" style={{ color:C.saffron }}>ourparamparaofficial@gmail.com</a> or write to: Parampara, Chandigarh, India.</p>
          </Section>
        </div>
      </main>
      <Footer/>
    </>
  );
}

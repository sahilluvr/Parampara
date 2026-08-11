import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { C, F } from "@/lib/constants";

const Section = ({ title, children }: { title:string; children:React.ReactNode }) => (
  <div style={{ marginBottom:36 }}>
    <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:12 }}>{title}</h2>
    <div style={{ fontSize:15, color:C.gray, lineHeight:1.9 }}>{children}</div>
  </div>
);

export default function TermsPage() {
  return (
    <>
      <Navbar/>
      <main style={{ paddingTop:120, paddingBottom:80, background:C.ivory }}>
        <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:C.saffron, marginBottom:12 }}>Legal</p>
          <h1 style={{ fontFamily:F.display, fontSize:"clamp(32px,5vw,52px)", fontWeight:600, color:C.charcoal, marginBottom:8 }}>Terms &amp; Conditions</h1>
          <p style={{ fontSize:14, color:C.gray, marginBottom:48 }}>Last updated: June 3, 2026 · Effective immediately</p>

          <Section title="1. Acceptance of terms">
            <p>By accessing or using Parampara (&quot;the Service&quot;), you agree to be bound by these Terms. If you do not agree, do not use the Service.</p>
          </Section>
          <Section title="2. Description of service">
            <p>Parampara is a digital heritage platform that enables families to document rituals, manage family members, store memories, and access AI-powered ritual guidance. The Service is provided &quot;as is&quot; and may be updated or modified at any time.</p>
          </Section>
          <Section title="3. Accounts and eligibility">
            <p>You must be 18 years or older to create an account. You are responsible for maintaining the security of your account credentials. You agree to provide accurate information and not to impersonate others.</p>
          </Section>
          <Section title="4. User content">
            <p>You retain ownership of all content you upload (rituals, photos, voice memos). By uploading content, you grant Parampara a limited licence to store and display it solely for providing the Service to you. We do not use your family content for training AI models.</p>
          </Section>
          <Section title="5. Prohibited use">
            <p>You agree not to: use the Service for illegal purposes, upload content that violates third-party rights, attempt to reverse-engineer or hack the platform, or use the Service to harm others.</p>
          </Section>
          <Section title="6. Payments and subscriptions">
            <p>Pro plan subscriptions are billed monthly or annually via Razorpay. Subscriptions auto-renew until cancelled. You may cancel at any time from your account settings. See our Refund Policy for refund eligibility.</p>
          </Section>
          <Section title="7. Limitation of liability">
            <p>Parampara is not liable for any indirect, incidental, or consequential damages arising from your use of the Service. Our total liability is limited to the amount you paid in the 3 months preceding any claim.</p>
          </Section>
          <Section title="8. Termination">
            <p>We may suspend or terminate accounts that violate these Terms. You may delete your account at any time from account settings.</p>
          </Section>
          <Section title="9. Governing law">
            <p>These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Chandigarh, India.</p>
          </Section>
          <Section title="10. Contact">
            <p>For any questions, contact <a href="mailto:ourparamparaofficial@gmail.com" style={{ color:C.saffron }}>ourparamparaofficial@gmail.com</a>.</p>
          </Section>
        </div>
      </main>
      <Footer/>
    </>
  );
}

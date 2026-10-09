import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { C, F } from "@/lib/constants";

export default function RefundPage() {
  return (
    <>
      <Navbar/>
      <main style={{ paddingTop:120, paddingBottom:80, background:C.ivory }}>
        <div style={{ maxWidth:760, margin:"0 auto", padding:"0 24px" }}>
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:C.saffron, marginBottom:12 }}>Legal</p>
          <h1 style={{ fontFamily:F.display, fontSize:"clamp(32px,5vw,52px)", fontWeight:600, color:C.charcoal, marginBottom:8 }}>Refund Policy</h1>
          <p style={{ fontSize:14, color:C.gray, marginBottom:48 }}>Last updated: June 3, 2026</p>

          {[
            ["7-day money-back guarantee", "If you are not satisfied with Parampara Pro within 7 days of your first payment, we will issue a full refund — no questions asked. Email ourparamparaofficial@gmail.com with your transaction ID within 7 days of purchase."],
            ["Monthly subscriptions", "For monthly subscribers beyond the 7-day window, we do not offer pro-rated refunds for unused days. Your access continues until the end of the billing period after cancellation."],
            ["Annual subscriptions", "For annual subscribers who cancel after 7 days, we offer a pro-rated refund for the remaining full months unused, minus a 10% processing fee. Contact us within 30 days of payment."],
            ["How to request a refund", "Email ourparamparaofficial@gmail.com with: your registered email address, transaction ID from Razorpay, and reason for refund. We process refunds within 5-7 business days. Refunds are credited to the original payment method."],
            ["Non-refundable cases", "Refunds are not available for: accounts terminated due to Terms of Service violations, requests made after the refund window, or partial months on monthly plans."],
            ["Contact", "For refund queries: ourparamparaofficial@gmail.com · Parampara, Chandigarh, India"],
          ].map(([title, content]) => (
            <div key={title} style={{ marginBottom:32, padding:24, background:C.white, borderRadius:16, border:`1px solid ${C.border}` }}>
              <h2 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:10 }}>{title}</h2>
              <p style={{ fontSize:15, color:C.gray, lineHeight:1.9, margin:0 }}>{content}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}

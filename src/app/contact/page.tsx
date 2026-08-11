"use client";
import { useState } from "react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { C, F } from "@/lib/constants";
import toast from "react-hot-toast";


export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sending, setSending] = useState(false);
  function u(k:string, v:string) { setForm(f=>({...f,[k]:v})); }

  const inp: React.CSSProperties = { width:"100%", padding:"12px 16px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:14, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box" };
  const lbl: React.CSSProperties = { fontSize:13, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSending(true);
    try {
      // Send via Resend email API
      const res = await fetch("/api/email/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success || data.demo) {
        toast.success("Message sent! We'll reply within 24 hours. 🙏");
        setForm({ name:"", email:"", subject:"", message:"" });
      } else {
        throw new Error(data.error || "Failed to send");
      }
    } catch {
      // Fallback — open mailto
      const subject = encodeURIComponent(form.subject || "Contact from Parampara");
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.open(`mailto:ourparamparaofficial@gmail.com?subject=${subject}&body=${body}`);
      toast.success("Opening your email app to send the message 📧");
    }
    setSending(false);
  }

  return (
    <>
      <Navbar/>
      <main>
        {/* Hero */}
        <section style={{ paddingTop:120, paddingBottom:60, background:C.ivory, textAlign:"center" }}>
          <div style={{ maxWidth:600, margin:"0 auto", padding:"0 24px" }}>
            <p style={{ fontSize:12, fontWeight:600, letterSpacing:2, textTransform:"uppercase", color:C.saffron, marginBottom:14 }}>Get In Touch</p>
            <h1 style={{ fontFamily:F.display, fontSize:"clamp(32px,5vw,56px)", fontWeight:600, color:C.charcoal, lineHeight:1.12, marginBottom:16, letterSpacing:"-1px" }}>
              We&apos;d love to hear<br/><em style={{ fontStyle:"italic", color:C.saffronMid }}>from you</em>
            </h1>
            <p style={{ fontSize:16, color:C.gray, lineHeight:1.8 }}>Questions, feedback, or just want to share your family&apos;s story — we&apos;re here.</p>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding:"40px 24px 80px", background:C.cream }}>
          <div style={{ maxWidth:1000, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1.5fr", gap:48, alignItems:"start" }} className="contact-grid">

            {/* Left — contact info */}
            <div>
              <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:24 }}>Talk to us</h2>

              {/* WhatsApp */}
              <a href="https://wa.me/919878966563" target="_blank" rel="noopener noreferrer"
                style={{ display:"flex", alignItems:"center", gap:14, background:"#25D366", borderRadius:14, padding:"16px 20px", marginBottom:14, textDecoration:"none", boxShadow:"0 8px 24px rgba(37,211,102,0.25)" }}>
                <span style={{ fontSize:26 }}>💬</span>
                <div>
                  <p style={{ fontSize:14, fontWeight:700, color:"#fff", margin:0 }}>WhatsApp Us</p>
                  <p style={{ fontSize:12, color:"rgba(255,255,255,0.8)", margin:0 }}>Usually within an hour</p>
                </div>
              </a>

              {[
                ["📧","Email","ourparamparaofficial@gmail.com","mailto:ourparamparaofficial@gmail.com"],
                ["📍","Location","Chandigarh, India","#"],
                ["⏰","Hours","Mon–Sat, 9AM–7PM IST","#"],
              ].map(([icon,label,value,href]) => (
                <a key={label} href={href} style={{ display:"flex", gap:12, alignItems:"flex-start", padding:"14px 16px", background:C.white, borderRadius:12, marginBottom:10, border:`1px solid ${C.border}`, textDecoration:"none" }}>
                  <span style={{ fontSize:20, flexShrink:0 }}>{icon}</span>
                  <div>
                    <p style={{ fontSize:11, fontWeight:700, letterSpacing:1, textTransform:"uppercase", color:C.saffron, margin:0, marginBottom:2 }}>{label}</p>
                    <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{value}</p>
                  </div>
                </a>
              ))}

              {/* FAQ link */}
              <div style={{ marginTop:24, padding:"16px 20px", background:C.saffronLight, borderRadius:12, border:`1px solid rgba(200,84,26,0.15)` }}>
                <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:"0 0 6px" }}>Looking for quick answers?</p>
                <a href="/#faq" style={{ fontSize:13, color:C.saffron, fontWeight:500 }}>Browse our FAQ →</a>
              </div>
            </div>

            {/* Right — form */}
            <div style={{ background:C.white, borderRadius:20, padding:"32px 28px", border:`1px solid ${C.border}`, boxShadow:"0 4px 24px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:24 }}>Send a message</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:16 }} className="form-grid-2">
                  <div>
                    <label style={lbl}>Your name *</label>
                    <input value={form.name} onChange={e=>u("name",e.target.value)} placeholder="Priya Sharma" required style={inp}/>
                  </div>
                  <div>
                    <label style={lbl}>Email address *</label>
                    <input type="email" value={form.email} onChange={e=>u("email",e.target.value)} placeholder="you@family.com" required style={inp}/>
                  </div>
                </div>

                <div style={{ marginBottom:16 }}>
                  <label style={lbl}>Subject</label>
                  <select value={form.subject} onChange={e=>u("subject",e.target.value)} style={inp}>
                    <option value="">Select a topic…</option>
                    <option>General question</option>
                    <option>Technical issue</option>
                    <option>Billing / payment</option>
                    <option>Feature request</option>
                    <option>Partnership</option>
                    <option>Press / media</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom:24 }}>
                  <label style={lbl}>Message *</label>
                  <textarea value={form.message} onChange={e=>u("message",e.target.value)} placeholder="Tell us how we can help..." required rows={5}
                    style={{...inp, resize:"vertical", lineHeight:1.6}}/>
                </div>

                <button type="submit" disabled={sending}
                  style={{ width:"100%", padding:"14px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:F.sans, opacity:sending?0.7:1, transition:"opacity 0.2s" }}>
                  {sending ? "Sending…" : "Send message 🙏"}
                </button>

                <p style={{ fontSize:11, color:C.gray, textAlign:"center", marginTop:12 }}>
                  We reply within 24 hours · ourparamparaofficial@gmail.com
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

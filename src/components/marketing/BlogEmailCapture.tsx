"use client";
import { useState, useEffect } from "react";
import { C, F } from "@/lib/constants";


function BlogAd({ publisherId, slot }: { publisherId: string; slot: string }) {
  useEffect(() => {
    try { ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({}); } catch(e) {}
  }, []);
  return (
    <div style={{ margin:"32px 24px", textAlign:"center" }}>
      <ins
        className="adsbygoogle"
        style={{ display:"block", textAlign:"center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={publisherId}
        data-ad-slot={slot}
      />
    </div>
  );
}

export default function BlogEmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"done"|"error">("idle");
  const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "";
  const AD_SLOT = process.env.NEXT_PUBLIC_ADSENSE_SLOT_DISPLAY || "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status !== "idle") return;
    setStatus("loading");
    try {
      // Use the existing contact API as a simple lead capture
      // (Resend is already wired — this sends an internal notification)
      const res = await fetch("/api/email/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Blog subscriber",
          email: email.trim(),
          subject: "New blog subscriber",
          message: `New subscriber from blog: ${email.trim()} — ${typeof window !== "undefined" ? window.location.pathname : ""}`,
        }),
      });
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div style={{ background: C.saffronLight, border: `1px solid rgba(200,84,26,0.2)`, borderRadius: 14, padding: "20px 24px", margin: "40px 0", textAlign: "center" }}>
        <p style={{ fontSize: 24, margin: "0 0 6px" }}>🙏</p>
        <p style={{ fontSize: 15, fontWeight: 600, color: C.charcoal, margin: "0 0 4px" }}>You&apos;re in!</p>
        <p style={{ fontSize: 13, color: C.gray, margin: 0 }}>We&apos;ll send you our best ritual guides and heritage tips.</p>
      </div>
    );
  }

  return (
    <>
    <div style={{ background: C.saffronLight, border: `1px solid rgba(200,84,26,0.2)`, borderRadius: 14, padding: "20px 24px", margin: "40px 0" }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: C.saffron, textTransform: "uppercase", letterSpacing: 0.8, margin: "0 0 6px" }}>Free monthly guide</p>
      <p style={{ fontSize: 16, fontWeight: 600, color: C.charcoal, margin: "0 0 4px" }}>Get our best ritual guides delivered to you</p>
      <p style={{ fontSize: 13, color: C.gray, margin: "0 0 14px" }}>Puja samagri lists, festival guides, and family heritage tips — once a month, no spam.</p>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          style={{
            flex: 1, minWidth: 200, padding: "10px 14px", fontSize: 14,
            border: `1px solid ${C.border}`, borderRadius: 10, outline: "none",
            fontFamily: F.sans, background: "#fff", color: C.charcoal,
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "10px 20px", background: `linear-gradient(135deg,${C.saffron},#B8922A)`,
            color: "#fff", border: "none", borderRadius: 10, fontSize: 14,
            fontWeight: 700, cursor: status === "loading" ? "wait" : "pointer",
            fontFamily: F.sans, whiteSpace: "nowrap",
          }}
        >
          {status === "loading" ? "..." : "Subscribe free →"}
        </button>
      </form>
      {status === "error" && <p style={{ fontSize: 12, color: "#DC2626", margin: "8px 0 0" }}>Something went wrong — try emailing us directly at ourparamparaofficial@gmail.com</p>}
    </div>
    </>
  );
}

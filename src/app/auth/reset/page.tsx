"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import NextImage from "next/image";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", charcoal:"#18181B", gray:"#71717A", white:"#fff", ivory:"#FAF7F2", forest:"#1A5C42" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };
const inp: React.CSSProperties = { width:"100%", padding:"12px 14px", border:`1.5px solid ${C.border}`, borderRadius:10, fontSize:14, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box" };

function ResetContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mode, setMode] = useState<"request"|"update">("request");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Detect if user arrived via reset link (has code param or hash token)
    const code = searchParams.get("code");
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (code || hash.includes("access_token")) {
      setMode("update");
    }
  }, [searchParams]);

  // Countdown after successful update
  useEffect(() => {
    if (done && mode === "update") {
      const t = setInterval(() => {
        setCountdown(n => {
          if (n <= 1) { clearInterval(t); router.push("/auth/login?hint=password_updated"); }
          return n - 1;
        });
      }, 1000);
      return () => clearInterval(t);
    }
  }, [done, mode, router]);

  async function getSupabase() {
    const { createBrowserClient } = await import("@supabase/ssr");
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }

  async function handleRequest(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) { setError("Please enter your email address"); return; }
    setLoading(true); setError("");
    try {
      // Use our branded API route
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to send reset email");
      setDone(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send reset email. Please try again.");
    }
    setLoading(false);
  }

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 6) { setError("Password must be at least 6 characters"); return; }
    if (password !== confirm) { setError("Passwords don't match"); return; }
    setLoading(true); setError("");
    try {
      const sb = await getSupabase();

      // Case 1: PKCE-style ?code= param (rare for admin-generated recovery links,
      // but handle it in case Supabase's behavior changes or a different flow is used)
      const code = searchParams.get("code");
      if (code) {
        const { error: exchErr } = await sb.auth.exchangeCodeForSession(code);
        if (exchErr) throw new Error("Reset link has expired or was already used. Please request a new one.");
      } else {
        // Case 2: hash-based recovery link (#access_token=...&refresh_token=...&type=recovery)
        // This is the format generateLink({type:"recovery"}) actually produces.
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        if (hash.includes("access_token")) {
          const params = new URLSearchParams(hash.replace(/^#/, ""));
          const access_token = params.get("access_token");
          const refresh_token = params.get("refresh_token");
          if (access_token && refresh_token) {
            const { error: sessErr } = await sb.auth.setSession({ access_token, refresh_token });
            if (sessErr) throw new Error("Reset link has expired or was already used. Please request a new one.");
          } else {
            throw new Error("Reset link is invalid. Please request a new one.");
          }
        } else {
          // No code and no hash tokens — check if a session already exists
          // (e.g. detectSessionInUrl already consumed it on initial page load)
          const { data: { session } } = await sb.auth.getSession();
          if (!session) throw new Error("Reset link is invalid or has expired. Please request a new one.");
        }
      }

      const { error: updateErr } = await sb.auth.updateUser({ password });
      if (updateErr) throw updateErr;
      // Sign out after password update so user must login fresh
      await sb.auth.signOut();
      setDone(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to update password. Please request a new reset link.");
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#1A0800,#2D1810)", display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ width:"100%", maxWidth:420, background:C.white, borderRadius:24, overflow:"hidden", boxShadow:"0 40px 80px rgba(0,0,0,0.4)" }}>
        {/* Header */}
        <div style={{ background:"linear-gradient(135deg,#C8541A,#B8922A)", padding:"32px 28px 28px", textAlign:"center" }}>
          <Link href="/">
            <NextImage src="/logo.png" alt="OurParampara" width={56} height={56} style={{ borderRadius:"50%", objectFit:"cover", marginBottom:12, cursor:"pointer" }}/>
          </Link>
          <h1 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:"#fff", margin:0 }}>
            {mode === "update" ? "Set new password" : "Reset password"}
          </h1>
          <p style={{ fontSize:13, color:"rgba(255,255,255,0.7)", marginTop:6, margin:"8px 0 0" }}>
            {mode === "update" ? "Choose a strong new password" : "We'll send a reset link to your inbox"}
          </p>
        </div>

        <div style={{ padding:"28px 28px 32px" }}>
          {/* Request sent */}
          {done && mode === "request" && (
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize:52, marginBottom:16 }}>📧</div>
              <h2 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:10 }}>Check your inbox</h2>
              <p style={{ fontSize:13, color:C.gray, lineHeight:1.7, marginBottom:8 }}>
                We sent a reset link to <strong style={{ color:C.charcoal }}>{email}</strong>
              </p>
              <p style={{ fontSize:13, color:C.gray, lineHeight:1.7, marginBottom:20 }}>
                Click the link in the email to set a new password.
              </p>
              <p style={{ fontSize:12, color:C.gray }}>
                Didn&apos;t receive it?{" "}
                <button onClick={()=>setDone(false)} style={{ background:"none", border:"none", color:C.saffron, fontWeight:600, cursor:"pointer", fontSize:12, padding:0 }}>
                  Try again
                </button>{" "}or check your spam folder.
              </p>
              <Link href="/auth/login" style={{ display:"inline-block", marginTop:20, fontSize:13, color:C.saffron, fontWeight:600, textDecoration:"none" }}>
                ← Back to sign in
              </Link>
            </div>
          )}

          {/* Password updated */}
          {done && mode === "update" && (
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize:52, marginBottom:16 }}>✅</div>
              <h2 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:10 }}>Password updated!</h2>
              <p style={{ fontSize:13, color:C.gray, lineHeight:1.7, marginBottom:20 }}>
                Your password has been updated successfully. Redirecting to sign in in <strong>{countdown}s</strong>…
              </p>
              <Link href="/auth/login?hint=password_updated"
                style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"12px 28px", borderRadius:12, fontSize:13, fontWeight:700, textDecoration:"none" }}>
                Sign in now →
              </Link>
            </div>
          )}

          {/* Request form */}
          {!done && mode === "request" && (
            <form onSubmit={handleRequest}>
              {error && (
                <div style={{ background:"#FEF2F2", border:"1px solid rgba(220,38,38,0.2)", borderRadius:9, padding:"10px 14px", fontSize:13, color:"#DC2626", marginBottom:16 }}>
                  {error}
                </div>
              )}
              <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Email address</label>
              <input type="email" value={email} onChange={e=>{setEmail(e.target.value);setError("");}} placeholder="your@email.com" required autoFocus style={{...inp, marginBottom:20}}/>
              <button type="submit" disabled={loading}
                style={{ width:"100%", padding:"13px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:12, fontSize:14, fontWeight:700, cursor:loading?"not-allowed":"pointer", fontFamily:F.sans, opacity:loading?0.8:1 }}>
                {loading ? "Sending…" : "Send reset link →"}
              </button>
              <p style={{ textAlign:"center", marginTop:16, fontSize:13, color:C.gray }}>
                Remembered it?{" "}
                <Link href="/auth/login" style={{ color:C.saffron, fontWeight:600, textDecoration:"none" }}>Sign in</Link>
              </p>
            </form>
          )}

          {/* Update form */}
          {!done && mode === "update" && (
            <form onSubmit={handleUpdate}>
              {error && (
                <div style={{ background:"#FEF2F2", border:"1px solid rgba(220,38,38,0.2)", borderRadius:9, padding:"10px 14px", fontSize:13, color:"#DC2626", marginBottom:16 }}>
                  {error}{" "}
                  {error.includes("expired") && (
                    <Link href="/auth/reset" style={{ color:C.saffron, fontWeight:600 }}>Request new link →</Link>
                  )}
                </div>
              )}
              <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>New password</label>
              <input type="password" value={password} onChange={e=>{setPassword(e.target.value);setError("");}} placeholder="Minimum 6 characters" required autoFocus style={{...inp, marginBottom:14}}/>
              <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Confirm new password</label>
              <input type="password" value={confirm} onChange={e=>{setConfirm(e.target.value);setError("");}} placeholder="Repeat new password" required style={{...inp, marginBottom:20}}/>
              <button type="submit" disabled={loading}
                style={{ width:"100%", padding:"13px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:12, fontSize:14, fontWeight:700, cursor:loading?"not-allowed":"pointer", fontFamily:F.sans, opacity:loading?0.8:1 }}>
                {loading ? "Updating password…" : "Update password →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ResetPage() {
  return <Suspense><ResetContent/></Suspense>;
}

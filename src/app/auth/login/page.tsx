"use client";
import { initPlanFromEmail } from "@/lib/plan";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", forest:"#1A5C42", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#FFFFFF", border:"rgba(184,146,42,0.15)" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };
const inp: React.CSSProperties = { width:"100%", padding:"12px 14px", border:"1px solid rgba(0,0,0,0.1)", borderRadius:9, fontSize:14, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box" };

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const HAS_SUPABASE = !!(SUPABASE_URL && SUPABASE_KEY && !SUPABASE_URL.includes("your_") && !SUPABASE_KEY.includes("your_"));

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";
  const urlError = searchParams.get("error");
  const urlHint  = searchParams.get("hint");
  // Sync plan from callback redirect
  useEffect(() => {
    const planFromUrl = searchParams.get("plan");
    const emailFromUrl = searchParams.get("email");
    if (planFromUrl) localStorage.setItem("parampara_plan", planFromUrl);
    if (emailFromUrl) localStorage.setItem("parampara_user_email", emailFromUrl);
  }, []);

  const [error, setError] = useState(
    urlHint === "password_updated" ? "Password updated successfully! Please sign in with your new password." :
    urlHint === "please_try_again" ? "Google sign-in needs one more try — please click Sign in with Google again." :
    urlError === "auth_failed" ? "Google sign-in failed. Please try again." :
    urlError === "no_code" ? "Sign-in was cancelled. Please try again." :
    urlError === "callback_failed" ? "Something went wrong. Please try again." :
    urlError ? "Sign-in failed. Please try again." : ""
  );
  const [method, setMethod] = useState<"email"|"google">("email");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault(); setError(""); setLoading(true);
    try {
      if (HAS_SUPABASE) {
        const { createBrowserClient } = await import("@supabase/ssr");
        const sb = createBrowserClient(SUPABASE_URL!, SUPABASE_KEY!);
        const { data, error: signInErr } = await sb.auth.signInWithPassword({ email: email.trim(), password });
        if (signInErr) {
          if (signInErr.message.includes("Invalid login credentials") || signInErr.message.includes("invalid_credentials")) {
            throw new Error("Incorrect email or password. Please try again.");
          }
          if (signInErr.message.includes("Email not confirmed")) {
            throw new Error("Please check your email and click the confirmation link before signing in.");
          }
          throw new Error(signInErr.message);
        }
        if (!data.user) throw new Error("Login failed. Please try again.");
        // Restore family name
        const { data: families } = await sb.from("families").select("name").eq("created_by", data.user.id).limit(1).maybeSingle();
        if (families?.name) localStorage.setItem("parampara_family_name", families.name);
        localStorage.setItem("parampara_user_email", email.trim());
        localStorage.setItem("parampara_initialized", "true");
        // Read plan from Supabase user metadata (set by admin)
        if (data.user.user_metadata?.plan) {
          localStorage.setItem("parampara_plan", data.user.user_metadata.plan);
        }
        initPlanFromEmail(email?.trim());
      } else {
        await new Promise(r=>setTimeout(r,800));
        localStorage.setItem("parampara_user_email", email.trim());
        localStorage.setItem("parampara_initialized", "true");
        initPlanFromEmail(email?.trim());
      }
      toast.success("Welcome back! 🪔");
      router.push(redirectTo);
    } catch(err:unknown) {
      setError(err instanceof Error ? err.message : "Login failed. Please try again.");
    }
    setLoading(false);
  }

  async function handleGoogle() {
    setLoading(true); setError("");
    try {
      if (HAS_SUPABASE) {
        const { createBrowserClient } = await import("@supabase/ssr");
        const sb = createBrowserClient(SUPABASE_URL!, SUPABASE_KEY!);
        const { error: oauthErr } = await sb.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: "https://www.ourparampara.com/auth/callback",
            queryParams: {
              access_type: "offline",
              prompt: "select_account",
            },
          },
        });
        if (oauthErr) throw new Error(oauthErr.message);
        return;
      }
      await new Promise(r=>setTimeout(r,900));
      toast.success("Signed in 🪔");
      router.push(redirectTo);
    } catch(err:unknown) {
      setError(err instanceof Error ? err.message : "Google sign-in failed");
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight:"100vh", background:C.ivory, display:"flex", flexDirection:"column", fontFamily:F.sans }}>
      <div style={{ padding:"16px 20px", display:"flex", alignItems:"center", gap:12, borderBottom:`1px solid ${C.border}`, background:C.white }} className="mobile-header">
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:C.gray, textDecoration:"none" }}>
          <ArrowLeft size={15}/> Back
        </Link>
        <span style={{ fontFamily:F.serif, fontSize:16, fontWeight:700, color:C.saffron, marginLeft:"auto" }}>🪔 Parampara</span>
      </div>

      <div style={{ display:"flex", flex:1 }}>
        {/* Left panel */}
        <div style={{ flex:1, background:"linear-gradient(135deg,#18181B,#2D1810)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:48, position:"relative", overflow:"hidden" }} className="left-panel">
          <div style={{ position:"absolute", fontSize:180, opacity:0.04, fontFamily:F.serif, top:"50%", left:"50%", transform:"translate(-50%,-50%)", color:"#B8922A" }}>ॐ</div>
          <div style={{ position:"relative", textAlign:"center", maxWidth:320 }}>
            <div style={{ fontSize:52, marginBottom:16 }}>🪔</div>
            <h2 style={{ fontFamily:F.serif, fontSize:28, fontWeight:600, color:"#fff", marginBottom:12, lineHeight:1.2 }}>Welcome back</h2>
            <p style={{ fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.8 }}>Your family&apos;s heritage is waiting. Sign in to continue preserving your traditions.</p>
          </div>
        </div>

        {/* Right form */}
        <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:"24px 20px", overflowY:"auto" }}>
          <div style={{ width:"100%", maxWidth:400 }}>
            <Link href="/" style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:13, color:C.gray, textDecoration:"none", marginBottom:24 }} className="desktop-back">
              <ArrowLeft size={15}/> Back to home
            </Link>

            <h1 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, marginBottom:6 }}>Sign in</h1>
            <p style={{ color:C.gray, fontSize:13, marginBottom:20 }}>Access your family&apos;s heritage space</p>

            {error && (
              <div style={{ background:"#FEF2F2", border:"1px solid rgba(220,38,38,0.2)", borderRadius:9, padding:"12px 14px", marginBottom:16, fontSize:13, color:"#DC2626", display:"flex", justifyContent:"space-between", gap:8 }}>
                <span style={{ lineHeight:1.5 }}>{error}</span>
                <button onClick={()=>setError("")} style={{ background:"none", border:"none", cursor:"pointer", color:"#DC2626", fontSize:18, lineHeight:1 }}>×</button>
              </div>
            )}

            {!HAS_SUPABASE && (
              <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:9, padding:"10px 14px", marginBottom:16, fontSize:12, color:C.saffron }}>
                ℹ️ Demo mode — any email/password will work
              </div>
            )}

            {/* Method tabs — Email + Google only */}
            <div style={{ display:"flex", gap:3, background:"#F0EBE3", borderRadius:12, padding:4, marginBottom:20 }}>
              {([["email","✉️  Email"],["google","G  Google"]] as [typeof method,string][]).map(([m,label])=>(
                <button key={m} onClick={()=>{ setMethod(m as typeof method); setError(""); }}
                  style={{ flex:1, padding:"10px 4px", borderRadius:9, border:"none", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:F.sans, background:method===m?C.white:"transparent", color:method===m?C.charcoal:C.gray, boxShadow:method===m?"0 1px 4px rgba(0,0,0,0.1)":"none", transition:"all 0.2s" }}>
                  {label}
                </button>
              ))}
            </div>

            {method==="email" && (
              <form onSubmit={handleEmailLogin}>
                <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Email</label>
                <input type="email" value={email} onChange={e=>{ setEmail(e.target.value); setError(""); }} placeholder="you@family.com" required autoComplete="email" style={{...inp,marginBottom:12}}/>
                <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Password</label>
                <div style={{ position:"relative", marginBottom:8 }}>
                  <input type={showPass?"text":"password"} value={password} onChange={e=>{ setPassword(e.target.value); setError(""); }} placeholder="Your password" required autoComplete="current-password" style={{...inp,paddingRight:44}}/>
                  <button type="button" onClick={()=>setShowPass(v=>!v)} style={{ position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:C.gray,display:"flex" }}>
                    {showPass?<EyeOff size={16}/>:<Eye size={16}/>}
                  </button>
                </div>
                <div style={{ textAlign:"right", marginBottom:20 }}>
                  <Link href="/auth/reset" style={{ fontSize:12, color:C.saffron, textDecoration:"none" }}>Forgot password?</Link>
                </div>
                <button type="submit" disabled={loading} style={{ width:"100%", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:10, padding:"13px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:F.sans, opacity:loading?0.7:1 }}>
                  {loading ? "Signing in…" : "Sign in →"}
                </button>
              </form>
            )}

            {method==="google" && (
              <button onClick={handleGoogle} disabled={loading}
                style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:12, background:C.white, border:"1.5px solid rgba(0,0,0,0.12)", borderRadius:12, padding:"14px", fontSize:15, fontWeight:600, cursor:"pointer", fontFamily:F.sans, opacity:loading?0.7:1 }}>
                <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                {loading ? "Connecting…" : "Continue with Google"}
              </button>
            )}

            <p style={{ textAlign:"center", fontSize:13, color:C.gray, marginTop:20 }}>
              Don&apos;t have an account? <Link href="/auth/signup" style={{ color:C.saffron, fontWeight:600, textDecoration:"none" }}>Create one free</Link>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .left-panel{display:flex!important} .mobile-header{display:none!important} .desktop-back{display:inline-flex!important}
        @media(max-width:768px){.left-panel{display:none!important}.mobile-header{display:flex!important}.desktop-back{display:none!important}}
      `}</style>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", color:"#71717A" }}>Loading…</div>}>
      <LoginForm/>
    </Suspense>
  );
}

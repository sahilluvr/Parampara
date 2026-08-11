"use client";
import { initPlanFromEmail } from "@/lib/plan";
import { registerFamilySpace } from "@/lib/families";
import { useState, Suspense } from "react";
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

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isPro = searchParams.get("plan") === "pro";
  const inviteCode = searchParams.get("invite") || "";
  const inviteFamilyName = searchParams.get("family") || "";
  const [method, setMethod] = useState<"email"|"google">("email");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", password:"", familyName:"", religion:"Hindu", region:"North India" });
  const [error, setError] = useState("");
  function u(k:string, v:string){ setForm(f=>({...f,[k]:v})); setError(""); }

  async function handleEmailNext(e: React.FormEvent) {
    e.preventDefault(); setError("");
    if (!form.name.trim()) return setError("Please enter your name");
    if (!form.email.trim() || !form.email.includes("@")) return setError("Please enter a valid email address");
    if (form.password.length < 8) return setError("Password must be at least 8 characters");
    setStep(2);
  }

  async function handleGoogle() {
    setLoading(true); setError("");
    try {
      if (HAS_SUPABASE) {
        const { createBrowserClient } = await import("@supabase/ssr");
        const sb = createBrowserClient(SUPABASE_URL!, SUPABASE_KEY!);
        const { error: oauthErr } = await sb.auth.signInWithOAuth({
          provider: "google",
          options: { redirectTo: "https://www.ourparampara.com/auth/callback" },
        });
        if (oauthErr) throw new Error(oauthErr.message);
        return;
      }
      await new Promise(r=>setTimeout(r,900));
      setStep(2);
    } catch(err:unknown) {
      setError(err instanceof Error ? err.message : "Google sign-in failed");
    }
    setLoading(false);
  }

  async function handleFinalStep(e: React.FormEvent) {
    e.preventDefault(); setError("");
    if (!inviteCode && !form.familyName.trim()) return setError("Family name is required");
    setLoading(true);
    try {
      if (HAS_SUPABASE && form.email) {
        const { createBrowserClient } = await import("@supabase/ssr");
        const sb = createBrowserClient(SUPABASE_URL!, SUPABASE_KEY!);
        const { data: authData, error: authErr } = await sb.auth.signUp({
          email: form.email.trim(),
          password: form.password,
          options: {
            data: { name: form.name.trim(), family_name: form.familyName.trim() },
            emailRedirectTo: "https://www.ourparampara.com/auth/verify",
          },
        });
        if (authErr) {
          if (authErr.message.includes("already registered") || authErr.message.includes("already exists")) {
            throw new Error("An account with this email already exists. Please sign in instead.");
          }
          throw new Error(authErr.message);
        }
        if (!authData.user) throw new Error("Account creation failed. Please try again.");

        // Supabase returns an obfuscated success (no error) when signing up with an
        // email that's already registered AND confirmed — the giveaway is an empty
        // identities array. Without this check, the rest of the flow proceeds using
        // the EXISTING user's id, silently mixing this signup into their old account
        // (old family spaces, old data, etc.)
        if (authData.user.identities && authData.user.identities.length === 0) {
          throw new Error("An account with this email already exists. Please sign in instead.");
        }

        if (inviteCode) {
          // ── JOIN existing family via invite code ──
          try {
            const { data: familyRow, error: famErr } = await sb
              .from("families").select("*").eq("invite_code", inviteCode).maybeSingle();
            if (famErr || !familyRow) throw new Error("Invalid or expired invite code.");

            const { error: joinErr } = await sb.from("family_members").insert({
              family_id: familyRow.id,
              user_id: authData.user.id,
              name: form.name.trim(),
              relation: "Member",
              role: "Contributor",
              religion: familyRow.religion || "Hindu",
              region: familyRow.region || "India",
              joined_at: new Date().toISOString(),
            });
            if (joinErr) throw new Error("Could not join family: " + joinErr.message);

            localStorage.setItem("parampara_family_name", familyRow.name || inviteFamilyName || "Family");
            localStorage.setItem("parampara_family_id", familyRow.id);
            localStorage.setItem("parampara_user_email", form.email.trim());
            localStorage.setItem("parampara_user_name", form.name.trim());
            localStorage.setItem("parampara_initialized", "true");
            localStorage.setItem("parampara_pending_join_code", inviteCode); // picked up after email verification
            registerFamilySpace({
              id: familyRow.id,
              name: familyRow.name || inviteFamilyName || "Family",
              inviteCode: familyRow.invite_code || inviteCode,
              religion: familyRow.religion, region: familyRow.region,
              role: "Member",
            });
            initPlanFromEmail(form.email?.trim());
          } catch (joinError) {
            // Fall back to creating own family if join fails — better than leaving user stuck
            console.error("Invite join failed during signup:", joinError);
            const fallbackCode = (form.familyName.trim() || "FAMILY").toUpperCase().replace(/[^A-Z]/g,"").slice(0,6) + "-" + Math.random().toString(36).substring(2,6).toUpperCase();
            const { data: family } = await sb.from("families").insert({
              name: form.familyName.trim() || "My Family", invite_code: fallbackCode,
              religion: form.religion, region: form.region, created_by: authData.user.id,
            }).select().single();
            localStorage.setItem("parampara_family_name", form.familyName.trim() || "My Family");
            localStorage.setItem("parampara_family_id", family?.id || "local");
            localStorage.setItem("parampara_user_email", form.email.trim());
            localStorage.setItem("parampara_user_name", form.name.trim());
            localStorage.setItem("parampara_initialized", "true");
            if (family?.id) {
              registerFamilySpace({
                id: family.id,
                name: form.familyName.trim() || "My Family",
                inviteCode: fallbackCode,
                religion: form.religion, region: form.region,
                role: "Admin",
              });
            }
            initPlanFromEmail(form.email?.trim());
            toast.error(joinError instanceof Error ? joinError.message : "Could not join the family — created your own family space instead.", { duration: 6000 });
          }
        } else {
          // ── Create new family record ──
          const newFamilyCode = form.familyName.toUpperCase().replace(/[^A-Z]/g,"").slice(0,6) + "-" + Math.random().toString(36).substring(2,6).toUpperCase();
          const { data: family, error: familyCreateErr } = await sb.from("families").insert({
            name: form.familyName.trim(), invite_code: newFamilyCode,
            religion: form.religion, region: form.region, created_by: authData.user.id,
          }).select().single();
          if (familyCreateErr || !family?.id) {
            console.error("signup: family creation failed", familyCreateErr);
            throw new Error("Could not create your family space. Please try again — if this keeps happening, contact support.");
          }
          // Insert the admin's own family_members row so they appear in their
          // family's member list and "already a member" checks work correctly.
          // This previously had NO error handling at all — a failure here (as
          // happened when this insert referenced a column that doesn't exist
          // in the database) left the user with a family that has zero
          // members, completely invisible to them until they tried adding a
          // member or viewing the tree. Now it throws so the signup flow
          // surfaces the problem immediately instead of completing "successfully"
          // into a broken state.
          const { error: ownMemberErr } = await sb.from("family_members").insert({
            family_id: family.id,
            user_id: authData.user.id,
            name: form.name.trim(),
            relation: "Self",
            role: "Admin",
            religion: form.religion, region: form.region,
            email: form.email.trim(),
            joined_at: new Date().toISOString(),
          });
          if (ownMemberErr) {
            console.error("signup: admin family_members row failed", ownMemberErr);
            throw new Error("Your account was created, but we couldn't finish setting up your family space. Please contact support — your family name was " + form.familyName.trim());
          }
          localStorage.setItem("parampara_family_name", form.familyName.trim());
          localStorage.setItem("parampara_family_id", family?.id || "local");
          localStorage.setItem("parampara_user_email", form.email.trim());
          localStorage.setItem("parampara_user_name", form.name.trim());
          localStorage.setItem("parampara_initialized", "true");
          if (family?.id) {
            registerFamilySpace({
              id: family.id,
              name: form.familyName.trim(),
              inviteCode: newFamilyCode,
              religion: form.religion, region: form.region,
              role: "Admin",
            });
          }
          initPlanFromEmail(form.email?.trim());
        }
      } else {
        localStorage.removeItem("parampara_initialized");
        localStorage.setItem("parampara_family_name", form.familyName.trim());
        localStorage.setItem("parampara_user_name", form.name.trim());
        localStorage.setItem("parampara_initialized", "true");
        initPlanFromEmail(form.email?.trim());
        await new Promise(r=>setTimeout(r,800));
      }
      // Send welcome email (non-blocking)
      if (form.email) {
        // Send branded verification email (replaces Supabase default)
        fetch("/api/auth/send-verification", {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({ email:form.email.trim(), name:form.name.trim(), familyName:form.familyName.trim() })
        }).catch(()=>{});
      }
      toast.success(inviteCode ? `Welcome! You've joined ${inviteFamilyName || "the family"} 🪔` : `Welcome to Parampara, ${form.familyName}! 🪔`);
      router.push("/dashboard");
    } catch(err:unknown) {
      const msg = err instanceof Error ? err.message : "Signup failed. Please try again.";
      if (msg.includes("not configured") || msg.includes("Invalid URL")) {
        localStorage.setItem("parampara_family_name", inviteFamilyName || form.familyName.trim() || "My Family");
        localStorage.setItem("parampara_user_name", form.name.trim());
        localStorage.setItem("parampara_initialized", "true");
        initPlanFromEmail(form.email?.trim());
        toast.success(`Welcome to Parampara! 🪔`);
        router.push("/dashboard");
        return;
      }
      setError(msg);
      setLoading(false);
    }
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
          <div style={{ position:"relative", textAlign:"center", maxWidth:360 }}>
            <div style={{ fontSize:52, marginBottom:16 }}>🪔</div>
            <h2 style={{ fontFamily:F.serif, fontSize:32, fontWeight:600, color:"#fff", marginBottom:14, lineHeight:1.2 }}>Preserve your family&apos;s legacy</h2>
            <p style={{ fontSize:14, color:"rgba(255,255,255,0.4)", lineHeight:1.8, marginBottom:28 }}>Join families who document rituals, traditions, and cultural heritage.</p>
            {['"My children in the US now perform rituals correctly."','"The AI samagri generator saved us before Diwali."','"3 generations of traditions, all in one place."'].map((q,i)=>(
              <div key={i} style={{ background:"rgba(255,255,255,0.05)", borderRadius:10, padding:"10px 14px", marginBottom:8, textAlign:"left" }}>
                <p style={{ fontSize:12, color:"rgba(255,255,255,0.5)", fontStyle:"italic", margin:0 }}>{q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:"24px 20px", overflowY:"auto" }}>
          <div style={{ width:"100%", maxWidth:420 }}>
            <Link href="/" style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:13, color:C.gray, textDecoration:"none", marginBottom:24 }} className="desktop-back">
              <ArrowLeft size={15}/> Back to home
            </Link>

            <div style={{ marginBottom:20 }}>
              <h1 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, margin:0 }}>
                {step===1 ? "Create account" : "Set up your family"}
              </h1>
              <p style={{ color:C.gray, fontSize:13, marginTop:5 }}>
                Step {step} of 2 {isPro && <span style={{ background:C.saffronLight, color:C.saffron, fontSize:11, padding:"2px 8px", borderRadius:20, marginLeft:6 }}>Pro plan</span>}
              </p>
              <div style={{ display:"flex", gap:4, marginTop:10 }}>
                {[1,2].map(s=><div key={s} style={{ height:3, flex:1, borderRadius:3, background:step>=s?C.saffron:"rgba(200,84,26,0.15)" }}/>)}
              </div>
            </div>

            {error && (
              <div style={{ background:"#FEF2F2", border:"1px solid rgba(220,38,38,0.2)", borderRadius:9, padding:"12px 14px", marginBottom:16, fontSize:13, color:"#DC2626", display:"flex", justifyContent:"space-between", gap:8, alignItems:"flex-start" }}>
                <span style={{ lineHeight:1.5 }}>
                  {error}
                  {error.includes("already exists") && (
                    <>
                      {" "}
                      <Link href={inviteCode ? `/auth/login?redirect=${encodeURIComponent(`/join?code=${inviteCode}&family=${encodeURIComponent(inviteFamilyName)}`)}` : "/auth/login"} style={{ color:"#DC2626", textDecoration:"underline", fontWeight:600 }}>
                        Sign in →
                      </Link>
                    </>
                  )}
                </span>
                <button onClick={()=>setError("")} style={{ background:"none", border:"none", cursor:"pointer", color:"#DC2626", fontSize:18, lineHeight:1, flexShrink:0 }}>×</button>
              </div>
            )}

            {!HAS_SUPABASE && step===1 && (
              <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:9, padding:"10px 14px", marginBottom:16, fontSize:12, color:C.saffron }}>
                ℹ️ <strong>Demo mode</strong> — Add Supabase env vars to Vercel for real accounts
              </div>
            )}

            {step===1 && (
              <>
                {/* Method tabs — Email + Google only */}
                <div style={{ display:"flex", gap:3, background:"#F0EBE3", borderRadius:12, padding:4, marginBottom:20 }}>
                  {([["email","✉️  Email"],["google","G  Google"]] as [typeof method,string][]).map(([m,label])=>(
                    <button key={m} onClick={()=>{ setMethod(m); setError(""); }}
                      style={{ flex:1, padding:"10px 4px", borderRadius:9, border:"none", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:F.sans, background:method===m?C.white:"transparent", color:method===m?C.charcoal:C.gray, boxShadow:method===m?"0 1px 4px rgba(0,0,0,0.1)":"none", transition:"all 0.2s" }}>
                      {label}
                    </button>
                  ))}
                </div>

                {method==="email" && (
                  <form onSubmit={handleEmailNext}>
                    <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Full name *</label>
                    <input value={form.name} onChange={e=>u("name",e.target.value)} placeholder="e.g., Priya Sharma" required style={{...inp,marginBottom:12}}/>
                    <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Email *</label>
                    <input type="email" value={form.email} onChange={e=>u("email",e.target.value)} placeholder="you@family.com" required autoComplete="email" style={{...inp,marginBottom:12}}/>
                    <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>
                      Password * <span style={{ fontSize:11, fontWeight:400, color:C.gray }}>(min 8 characters)</span>
                    </label>
                    <div style={{ position:"relative", marginBottom:20 }}>
                      <input type={showPass?"text":"password"} value={form.password} onChange={e=>u("password",e.target.value)} placeholder="Create a strong password" minLength={8} required autoComplete="new-password" style={{...inp,paddingRight:44}}/>
                      <button type="button" onClick={()=>setShowPass(v=>!v)} style={{ position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:C.gray,display:"flex" }}>
                        {showPass?<EyeOff size={16}/>:<Eye size={16}/>}
                      </button>
                    </div>
                    <button type="submit" disabled={loading} style={{ width:"100%", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:10, padding:"13px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:F.sans, opacity:loading?0.7:1 }}>
                      Continue →
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

                <p style={{ textAlign:"center", fontSize:13, color:C.gray, marginTop:18 }}>
                  Already have an account? <Link href="/auth/login" style={{ color:C.saffron, fontWeight:600, textDecoration:"none" }}>Sign in</Link>
                </p>
              </>
            )}

            {step===2 && (
              <form onSubmit={handleFinalStep}>
                {inviteCode ? (
                  <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:12, padding:"14px 16px", marginBottom:16 }}>
                    <p style={{ fontSize:13, fontWeight:600, color:C.saffron, margin:"0 0 4px" }}>🎉 You&apos;re joining a family</p>
                    <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>You&apos;ll be added to <strong>{inviteFamilyName || "the family"}</strong> after creating your account.</p>
                  </div>
                ) : (
                  <>
                    <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Family name *</label>
                    <input value={form.familyName} onChange={e=>u("familyName",e.target.value)} placeholder="e.g., Sharma Family, Patel Parivar" required style={{...inp,marginBottom:12}}/>
                  </>
                )}
                {!inviteCode && (
                <>
                <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Religion / Dharma</label>
                <select value={form.religion} onChange={e=>u("religion",e.target.value)} style={{...inp,marginBottom:12}}>
                  {["Hindu","Sikh","Muslim","Christian","Jain","Buddhist","Other"].map(r=><option key={r}>{r}</option>)}
                </select>
                <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Home region</label>
                <select value={form.region} onChange={e=>u("region",e.target.value)} style={{...inp,marginBottom:20}}>
                  {["North India","South India","East India","West India","Bengal","Punjab","Gujarat","Maharashtra","Tamil Nadu","Kerala","Rajasthan","Chandigarh","Pan India","Diaspora / Abroad"].map(r=><option key={r}>{r}</option>)}
                </select>
                </>
                )}
                <button type="submit" disabled={loading} style={{ width:"100%", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:10, padding:"13px", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:F.sans, marginBottom:10, opacity:loading?0.7:1 }}>
                  {loading ? "Creating your space…" : "Create family space 🪔"}
                </button>
                <button type="button" onClick={()=>setStep(1)} style={{ width:"100%", background:"none", border:"none", color:C.gray, fontSize:13, cursor:"pointer", fontFamily:F.sans }}>← Back</button>
              </form>
            )}

            <p style={{ textAlign:"center", fontSize:11, color:C.gray, marginTop:16, lineHeight:1.5 }}>
              By signing up you agree to our <Link href="/terms" style={{ color:C.saffron }}>Terms</Link> &amp; <Link href="/privacy" style={{ color:C.saffron }}>Privacy Policy</Link>.
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

export default function SignupPage() {
  return (
    <Suspense fallback={<div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", color:"#71717A" }}>Loading…</div>}>
      <SignupForm/>
    </Suspense>
  );
}

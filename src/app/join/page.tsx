"use client";
import { getUserFast } from "@/lib/authCache";
import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { joinFamily, normalizeInviteCode } from "@/lib/families";
import { savePendingInvite, clearPendingInvite, previewInvite } from "@/lib/invite";

const C = { saffron:"#D6246E", saffronLight:"#FCE8F0", forest:"#0F7A73", ivory:"#F8F6FC", charcoal:"#1C1733", gray:"#625C7A", white:"#fff", border:"rgba(122,63,217,0.15)", red:"#DC2626" };
const F = { serif:"'Bricolage Grotesque',system-ui,sans-serif", sans:"'Inter',system-ui,sans-serif" };

type Phase = "loading" | "needAuth" | "joining" | "joined" | "already" | "invalid" | "error" | "manual";

const page: React.CSSProperties = { minHeight:"100vh", background:C.ivory, display:"flex", alignItems:"center", justifyContent:"center", padding:24, fontFamily:F.sans };
const card: React.CSSProperties = { background:C.white, borderRadius:20, padding:"36px 32px", maxWidth:440, width:"100%", border:`1px solid ${C.border}`, boxShadow:"0 8px 40px rgba(0,0,0,0.06)", textAlign:"center" };
const primaryBtn: React.CSSProperties = { display:"block", width:"100%", textAlign:"center", padding:"14px", background:`linear-gradient(135deg,${C.saffron},#7A3FD9)`, color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, fontFamily:F.sans, textDecoration:"none", cursor:"pointer", boxSizing:"border-box" };
const outlineBtn: React.CSSProperties = { display:"block", width:"100%", textAlign:"center", padding:"13px", border:`1.5px solid ${C.saffron}`, background:"transparent", borderRadius:12, fontSize:14, fontWeight:600, color:C.saffron, textDecoration:"none", cursor:"pointer", fontFamily:F.sans, boxSizing:"border-box" };

function JoinPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = normalizeInviteCode(searchParams.get("code"));
  const familyNameFromUrl = (searchParams.get("family") || "").slice(0, 80);

  const [phase, setPhase] = useState<Phase>("loading");
  const [familyName, setFamilyName] = useState(familyNameFromUrl);
  const [errorMsg, setErrorMsg] = useState("");
  const [manualCode, setManualCode] = useState(code);
  const [isAuthed, setIsAuthed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const started = useRef(false);

  const runJoin = useCallback(async (joinCode: string) => {
    setPhase("joining"); setErrorMsg("");
    try {
      const fam = await joinFamily(joinCode, familyNameFromUrl);
      clearPendingInvite();
      setFamilyName(fam.name);
      if (fam.alreadyMember) {
        setPhase("already");
      } else {
        setPhase("joined");
        toast.success(`Joined ${fam.name}! 🎉`);
        setTimeout(() => router.replace("/dashboard"), 1200);
      }
    } catch (err) {
      const status = (err as Error & { status?: number }).status;
      const msg = err instanceof Error ? err.message : "Could not join this family.";
      if (status === 401) { savePendingInvite(joinCode, familyNameFromUrl); setIsAuthed(false); setPhase("needAuth"); return; }
      setErrorMsg(msg);
      setPhase(status === 404 ? "invalid" : "error");
    }
  }, [familyNameFromUrl, router]);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    (async () => {
      let user = null;
      try {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        if (url && key) {
          const { createBrowserClient } = await import("@supabase/ssr");
          const sb = createBrowserClient(url, key);
          user = (await getUserFast(sb as unknown as import("@supabase/supabase-js").SupabaseClient)).data.user;
        }
      } catch { /* treat as signed out */ }
      setIsAuthed(!!user);

      if (!code) { setPhase("manual"); return; }

      // Validate the code first so a typo is caught before anyone signs up
      const preview = await previewInvite(code);
      if (preview.valid === false) {
        setErrorMsg("This invite link isn't valid any more. Ask the person who invited you to send a fresh link, or enter the code below.");
        setPhase("invalid");
        return;
      }
      if (preview.familyName) setFamilyName(preview.familyName);

      if (!user) {
        savePendingInvite(code, preview.familyName || familyNameFromUrl);
        setPhase("needAuth");
        return;
      }
      await runJoin(code);
    })();
  }, [code, familyNameFromUrl, runJoin]);

  async function handleManual(e: React.FormEvent) {
    e.preventDefault();
    const c = normalizeInviteCode(manualCode);
    if (!c) return toast.error("Please enter an invite code");
    if (!isAuthed) {
      setSubmitting(true);
      const preview = await previewInvite(c);
      setSubmitting(false);
      if (preview.valid === false) { setErrorMsg("That code doesn't match any family. Please check it and try again."); setPhase("invalid"); return; }
      // Put the code in the URL so the sign-in/sign-up links carry it
      router.replace(`/join?code=${encodeURIComponent(c)}${preview.familyName ? `&family=${encodeURIComponent(preview.familyName)}` : ""}`);
      if (preview.familyName) setFamilyName(preview.familyName);
      savePendingInvite(c, preview.familyName || "");
      setManualCode(c);
      setPhase("needAuth");
      return;
    }
    setSubmitting(true);
    await runJoin(c);
    setSubmitting(false);
  }

  const activeCode = normalizeInviteCode(manualCode) || code;
  const joinPath = `/join?code=${encodeURIComponent(activeCode)}${familyName ? `&family=${encodeURIComponent(familyName)}` : ""}`;

  const header = (emoji: string, title: string, sub?: React.ReactNode) => (
    <div style={{ marginBottom:22 }}>
      <div style={{ width:56, height:56, borderRadius:"50%", background:"linear-gradient(135deg,#D6246E,#7A3FD9)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, margin:"0 auto 14px" }}>{emoji}</div>
      <h1 style={{ fontFamily:F.serif, fontSize:23, fontWeight:600, color:C.charcoal, margin:0 }}>{title}</h1>
      {sub && <p style={{ fontSize:14, color:C.gray, marginTop:8, lineHeight:1.6 }}>{sub}</p>}
    </div>
  );

  const manualForm = () => (
    <form onSubmit={handleManual} style={{ textAlign:"left", marginTop:8 }}>
      <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Invite code</label>
      <input
        value={manualCode}
        onChange={e=>setManualCode(e.target.value.toUpperCase())}
        placeholder="e.g. SHARM-X4K2 or paste the invite link"
        autoCapitalize="characters" autoCorrect="off" spellCheck={false}
        style={{ width:"100%", padding:"12px 16px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:16, fontFamily:"monospace", background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box", letterSpacing:1.5, textAlign:"center", marginBottom:14 }}
      />
      <button type="submit" disabled={submitting} style={{ ...primaryBtn, opacity:submitting?0.7:1 }}>
        {submitting ? "Checking…" : "Join Family Space →"}
      </button>
    </form>
  );

  if (phase === "loading" || phase === "joining") {
    return (
      <div style={page}><div style={card}>
        <div style={{ fontSize:48, marginBottom:16 }}>🪔</div>
        <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>
          {phase === "joining" ? `Joining ${familyName || "family"}…` : "Loading invite…"}
        </h2>
        <p style={{ fontSize:14, color:C.gray, margin:0 }}>Just a moment.</p>
      </div></div>
    );
  }

  if (phase === "joined" || phase === "already") {
    return (
      <div style={page}><div style={card}>
        <div style={{ fontSize:48, marginBottom:16 }}>{phase === "joined" ? "🎉" : "✅"}</div>
        <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>
          {phase === "joined" ? "Welcome to the family!" : "You're already a member"}
        </h2>
        <p style={{ fontSize:14, color:C.gray, marginBottom:24 }}>
          {phase === "joined" ? <>You&apos;ve joined <strong>{familyName}</strong>. Taking you to your dashboard…</> : <>You&apos;re already part of <strong>{familyName || "this family"}</strong> — we&apos;ve switched you to it.</>}
        </p>
        <Link href="/dashboard" style={primaryBtn}>Go to Dashboard →</Link>
      </div></div>
    );
  }

  if (phase === "needAuth") {
    return (
      <div style={page}><div style={card}>
        {header("🪔", "Join a Family Space",
          familyName ? <>You&apos;ve been invited to join <strong style={{ color:C.saffron }}>{familyName}</strong></> : "You've been invited to a family space on Parampara")}
        <div style={{ background:C.saffronLight, border:`1px solid rgba(214,36,110,0.2)`, borderRadius:12, padding:"14px 16px", marginBottom:20 }}>
          <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>Invite code: <strong style={{ fontFamily:"monospace", letterSpacing:1 }}>{activeCode}</strong></p>
          <p style={{ fontSize:13, color:C.gray, margin:"6px 0 0" }}>Create an account or sign in — you&apos;ll be added to the family automatically.</p>
        </div>
        <Link href={`/auth/signup?invite=${encodeURIComponent(activeCode)}&family=${encodeURIComponent(familyName)}`} style={{ ...primaryBtn, marginBottom:12 }}>
          Create account &amp; join →
        </Link>
        <Link href={`/auth/login?redirect=${encodeURIComponent(joinPath)}`} style={outlineBtn}>
          Already have an account? Sign in →
        </Link>
      </div></div>
    );
  }

  // manual / invalid / error
  return (
    <div style={page}><div style={card}>
      {phase === "manual" && header("🪔", "Join a Family Space", "Enter the invite code a family member shared with you.")}
      {phase === "invalid" && header("⚠️", "Invite not found")}
      {phase === "error" && header("⚠️", "Couldn't join yet")}
      {errorMsg && (
        <div style={{ background:"#FEF2F2", border:"1px solid rgba(220,38,38,0.2)", borderRadius:10, padding:"12px 14px", marginBottom:16, fontSize:13, color:C.red, lineHeight:1.5, textAlign:"left" }}>
          {errorMsg}
        </div>
      )}
      {phase === "error" && activeCode && (
        <button onClick={()=>runJoin(activeCode)} style={{ ...primaryBtn, marginBottom:16 }}>Try again</button>
      )}
      {manualForm()}
      <p style={{ fontSize:13, color:C.gray, marginTop:20 }}>
        <Link href={isAuthed ? "/dashboard" : "/"} style={{ color:C.saffron, textDecoration:"none", fontWeight:600 }}>
          {isAuthed ? "← Back to dashboard" : "← Back to home"}
        </Link>
      </p>
    </div></div>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center" }}>Loading…</div>}>
      <JoinPageContent/>
    </Suspense>
  );
}

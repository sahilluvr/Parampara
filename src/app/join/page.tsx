"use client";
import { notifyInviteJoined } from "@/lib/notifications";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { joinFamily, getAllFamilies } from "@/lib/families";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", forest:"#1A5C42", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", border:"rgba(184,146,42,0.15)" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

function JoinPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";
  const familyNameFromUrl = searchParams.get("family") || "";
  const [loading, setLoading] = useState(false);
  const [manualCode, setManualCode] = useState(code);
  const [alreadyMember, setAlreadyMember] = useState(false);

  const [autoJoining, setAutoJoining] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean|null>(null); // null = checking

  useEffect(() => {
    (async () => {
      const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!SUPABASE_URL || !SUPABASE_KEY) { setIsAuthenticated(false); return; }
      const { createBrowserClient } = await import("@supabase/ssr");
      const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
      const { data: { user } } = await sb.auth.getUser();
      setIsAuthenticated(!!user);

      if (code && user) {
        const existing = getAllFamilies().find(f => f.inviteCode === code);
        if (existing) { setAlreadyMember(true); return; }

        try {
          setAutoJoining(true);
          const family = await joinFamily(code, familyNameFromUrl);
          toast.success(`Joined ${family.name}! 🎉`);
          notifyInviteJoined(localStorage.getItem("parampara_user_name")||user.email?.split("@")[0]||"You", family.id, family.name);
          router.push("/dashboard");
        } catch (err) {
          // Already a member, or join failed — fall back to manual form
          if (err instanceof Error && err.message.includes("already a member")) {
            setAlreadyMember(true);
          }
          setAutoJoining(false);
        }
      } else if (code && !user) {
        const existing = getAllFamilies().find(f => f.inviteCode === code);
        if (existing) setAlreadyMember(true);
      }
    })();
  }, [code]);

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault();
    if (!manualCode.trim()) return toast.error("Please enter an invite code");
    setLoading(true);
    try {
      const family = await joinFamily(manualCode.trim().toUpperCase(), familyNameFromUrl);
      toast.success(`Joined ${family.name}! 🎉`);
      notifyInviteJoined(localStorage.getItem("parampara_user_name")||"You", family.id, family.name);
      router.push("/dashboard");
    } catch(err:unknown) {
      toast.error(err instanceof Error ? err.message : "Invalid invite code");
    }
    setLoading(false);
  }

  if (autoJoining) {
    return (
      <div style={{ minHeight:"100vh", background:C.ivory, display:"flex", alignItems:"center", justifyContent:"center", padding:24, fontFamily:F.sans }}>
        <div style={{ background:C.white, borderRadius:20, padding:40, maxWidth:400, width:"100%", textAlign:"center", border:`1px solid ${C.border}` }}>
          <div style={{ fontSize:48, marginBottom:16 }}>🪔</div>
          <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Joining family…</h2>
          <p style={{ fontSize:14, color:C.gray, margin:0 }}>Just a moment.</p>
        </div>
      </div>
    );
  }

  if (alreadyMember) {
    return (
      <div style={{ minHeight:"100vh", background:C.ivory, display:"flex", alignItems:"center", justifyContent:"center", padding:24, fontFamily:F.sans }}>
        <div style={{ background:C.white, borderRadius:20, padding:40, maxWidth:400, width:"100%", textAlign:"center", border:`1px solid ${C.border}` }}>
          <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
          <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Already a member!</h2>
          <p style={{ fontSize:14, color:C.gray, marginBottom:24 }}>You&apos;re already part of <strong>{familyNameFromUrl}</strong>.</p>
          <Link href="/dashboard" style={{ display:"block", padding:"12px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:12, fontSize:14, fontWeight:600, color:"#fff", textDecoration:"none" }}>Go to Dashboard →</Link>
        </div>
      </div>
    );
  }

  if (isAuthenticated === null) {
    return (
      <div style={{ minHeight:"100vh", background:C.ivory, display:"flex", alignItems:"center", justifyContent:"center", padding:24, fontFamily:F.sans }}>
        <div style={{ background:C.white, borderRadius:20, padding:40, maxWidth:400, width:"100%", textAlign:"center", border:`1px solid ${C.border}` }}>
          <div style={{ fontSize:48, marginBottom:16 }}>🪔</div>
          <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Loading invite…</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight:"100vh", background:C.ivory, display:"flex", alignItems:"center", justifyContent:"center", padding:24, fontFamily:F.sans }}>
      <div style={{ background:C.white, borderRadius:20, padding:40, maxWidth:440, width:"100%", border:`1px solid ${C.border}`, boxShadow:"0 8px 40px rgba(0,0,0,0.06)" }}>
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <div style={{ width:56, height:56, borderRadius:"50%", background:"linear-gradient(135deg,#C8541A,#B8922A)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, margin:"0 auto 14px" }}>🪔</div>
          <h1 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, margin:0 }}>Join a Family Space</h1>
          {familyNameFromUrl && (
            <p style={{ fontSize:15, color:C.gray, marginTop:6 }}>You&apos;ve been invited to join <strong style={{ color:C.saffron }}>{familyNameFromUrl}</strong></p>
          )}
        </div>

        {isAuthenticated ? (
          <form onSubmit={handleJoin}>
            <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Invite Code</label>
            <input
              value={manualCode}
              onChange={e=>setManualCode(e.target.value.toUpperCase())}
              placeholder="e.g. SHARM-X4K2"
              style={{ width:"100%", padding:"12px 16px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:16, fontFamily:"monospace", background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box", letterSpacing:2, textAlign:"center", marginBottom:20 }}
            />
            <button type="submit" disabled={loading}
              style={{ width:"100%", padding:"14px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:F.sans, opacity:loading?0.7:1 }}>
              {loading ? "Joining…" : "Join Family Space →"}
            </button>
          </form>
        ) : (
          <div>
            <div style={{ background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:12, padding:"16px 18px", marginBottom:20, textAlign:"center" }}>
              <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>
                Invite code: <strong style={{ fontFamily:"monospace", letterSpacing:1 }}>{code}</strong>
              </p>
              <p style={{ fontSize:13, color:C.gray, margin:"6px 0 0" }}>
                Sign in or create an account to join this family space — we&apos;ll add you automatically.
              </p>
            </div>
            <Link href={`/auth/signup?invite=${code}&family=${encodeURIComponent(familyNameFromUrl)}`}
              style={{ display:"block", textAlign:"center", padding:"14px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", borderRadius:12, fontSize:15, fontWeight:700, fontFamily:F.sans, textDecoration:"none", marginBottom:12 }}>
              Create account & join →
            </Link>
            <Link href={`/auth/login?redirect=${encodeURIComponent(`/join?code=${code}&family=${encodeURIComponent(familyNameFromUrl)}`)}`}
              style={{ display:"block", textAlign:"center", padding:"13px", border:`1.5px solid ${C.saffron}`, borderRadius:12, fontSize:14, fontWeight:600, color:C.saffron, textDecoration:"none" }}>
              Already have an account? Sign in →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center" }}>Loading…</div>}>
      <JoinPageContent/>
    </Suspense>
  );
}

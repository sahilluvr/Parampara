"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", gold:"#B8922A", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", border:"rgba(184,146,42,0.15)" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"verifying"|"success"|"error">("verifying");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { createBrowserClient } = await import("@supabase/ssr");
        const sb = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        // Case 1: PKCE-style ?code= param
        const code = searchParams.get("code");
        if (code) {
          const { error } = await sb.auth.exchangeCodeForSession(code);
          if (error) throw new Error("This verification link has expired or was already used. Please request a new one.");
          setStatus("success");
          setTimeout(() => router.push("/dashboard"), 1500);
          return;
        }

        // Case 2: hash-based tokens (#access_token=...&refresh_token=...&type=invite|signup|magiclink)
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        if (hash.includes("access_token")) {
          const params = new URLSearchParams(hash.replace(/^#/, ""));
          const access_token = params.get("access_token");
          const refresh_token = params.get("refresh_token");
          if (access_token && refresh_token) {
            const { error } = await sb.auth.setSession({ access_token, refresh_token });
            if (error) throw new Error("This verification link has expired or was already used. Please request a new one.");
            setStatus("success");
            setTimeout(() => router.push("/dashboard"), 1500);
            return;
          }
        }

        // Case 3: maybe a session already exists (detectSessionInUrl handled it)
        const { data: { session } } = await sb.auth.getSession();
        if (session) {
          setStatus("success");
          setTimeout(() => router.push("/dashboard"), 1500);
          return;
        }

        throw new Error("This verification link is invalid or has expired. Please sign in — if your email isn't verified yet, request a new verification link from your account.");
      } catch (err) {
        setStatus("error");
        setErrorMsg(err instanceof Error ? err.message : "Verification failed. Please try signing in.");
      }
    })();
  }, [searchParams, router]);

  return (
    <div style={{ minHeight:"100vh", background:C.ivory, display:"flex", alignItems:"center", justifyContent:"center", padding:24, fontFamily:F.sans }}>
      <div style={{ background:C.white, borderRadius:20, padding:40, maxWidth:420, width:"100%", textAlign:"center", border:`1px solid ${C.border}`, boxShadow:"0 8px 40px rgba(0,0,0,0.06)" }}>
        {status === "verifying" && (
          <>
            <div style={{ fontSize:48, marginBottom:16 }}>🪔</div>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Verifying your email…</h2>
            <p style={{ fontSize:14, color:C.gray, margin:0 }}>Just a moment.</p>
          </>
        )}
        {status === "success" && (
          <>
            <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Email verified!</h2>
            <p style={{ fontSize:14, color:C.gray, margin:0 }}>Taking you to your dashboard…</p>
          </>
        )}
        {status === "error" && (
          <>
            <div style={{ fontSize:48, marginBottom:16 }}>⚠️</div>
            <h2 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:12 }}>Verification link issue</h2>
            <p style={{ fontSize:14, color:"#71717A", marginBottom:24, lineHeight:1.6 }}>{errorMsg}</p>
            <Link href="/auth/login" style={{ display:"inline-block", padding:"12px 28px", background:`linear-gradient(135deg,${C.saffron},${C.gold})`, borderRadius:10, fontSize:14, fontWeight:700, color:"#fff", textDecoration:"none" }}>
              Go to Sign In →
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div style={{ minHeight:"100vh", background:C.ivory }} />}>
      <VerifyContent />
    </Suspense>
  );
}

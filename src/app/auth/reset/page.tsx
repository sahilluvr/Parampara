"use client";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

// One page for the whole "forgot password" journey:
//   1. no token in the URL → ask for the email and send the link
//   2. ?token_hash=…&type=recovery (our email) → choose a new password; the
//      token is redeemed only on submit, so link scanners can't burn it
//   3. legacy links (?code=… or #access_token=…) from older emails still work
const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SB_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function sb() {
  const { createBrowserClient } = await import("@supabase/ssr");
  return createBrowserClient(SB_URL!, SB_KEY!);
}

type Mode = "request" | "sent" | "set" | "done";

function strength(p: string) {
  let s = 0;
  if (p.length >= 8) s++; if (p.length >= 12) s++;
  if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++; if (/\d/.test(p)) s++; if (/[^A-Za-z0-9]/.test(p)) s++;
  return Math.min(s, 4);
}

function ResetInner() {
  const router = useRouter();
  const params = useSearchParams();
  const tokenHash = params.get("token_hash");
  const code = params.get("code");
  const [mode, setMode] = useState<Mode>("request");
  const [email, setEmail] = useState(params.get("email") || "");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (tokenHash || code || hash.includes("access_token") || hash.includes("type=recovery")) setMode("set");
    if (hash.includes("error_code=otp_expired")) { setMode("request"); setError("That reset link has expired. Enter your email and we'll send a fresh one."); }
  }, [tokenHash, code]);

  async function requestLink(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError("Please enter a valid email address.");
    setBusy(true);
    try {
      const res = await fetch("/api/auth/reset-password", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email.trim() }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Couldn't send the email. Please try again.");
      if (data.fallback && SB_URL && SB_KEY) {
        const client = await sb();
        await client.auth.resetPasswordForEmail(email.trim(), { redirectTo: `${window.location.origin}/auth/reset` });
      }
      setMode("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't send the email. Please try again.");
    }
    setBusy(false);
  }

  async function setNewPassword(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password.length < 8) return setError("Use at least 8 characters.");
    if (password !== confirm) return setError("The two passwords don't match.");
    setBusy(true);
    try {
      const client = await sb();
      // Establish the recovery session (only now, on submit)
      if (tokenHash) {
        const { error: vErr } = await client.auth.verifyOtp({ token_hash: tokenHash, type: "recovery" });
        if (vErr) throw Object.assign(new Error(vErr.message), { expired: true });
      } else if (code) {
        const { error: cErr } = await client.auth.exchangeCodeForSession(code);
        if (cErr) throw Object.assign(new Error(cErr.message), { expired: true });
      } else {
        const h = new URLSearchParams(window.location.hash.replace(/^#/, ""));
        const at = h.get("access_token"), rt = h.get("refresh_token");
        if (at && rt) {
          const { error: sErr } = await client.auth.setSession({ access_token: at, refresh_token: rt });
          if (sErr) throw Object.assign(new Error(sErr.message), { expired: true });
        } else {
          const { data } = await client.auth.getSession();
          if (!data.session) throw Object.assign(new Error("missing session"), { expired: true });
        }
      }
      const { error: uErr } = await client.auth.updateUser({ password });
      if (uErr) {
        if (/different from the old|same/i.test(uErr.message)) throw new Error("Please choose a password you haven't used before.");
        if (/weak|short|characters/i.test(uErr.message)) throw new Error("That password is too weak — try a longer one with a number or symbol.");
        throw new Error(uErr.message);
      }
      window.history.replaceState(null, "", "/auth/reset");
      setMode("done");
      setTimeout(() => router.replace("/dashboard"), 1800);
    } catch (err) {
      const e2 = err as Error & { expired?: boolean };
      if (e2.expired) {
        setMode("request");
        setError("This reset link has expired or was already used. Enter your email and we'll send a fresh one.");
      } else setError(e2.message || "Couldn't update your password. Please try again.");
    }
    setBusy(false);
  }

  const s = strength(password);
  const sColors = ["#E6E1F0", "#DC2626", "#F59E0B", "#0F7A73", "#0F7A73"];
  const sLabels = ["", "Weak", "Okay", "Strong", "Very strong"];

  return (
    <main className="rp">
      <div className="rp-card">
        <Link href="/" className="rp-brand">🪔 OurParampara</Link>

        {mode === "request" && (
          <form onSubmit={requestLink} noValidate>
            <h1>Forgot your password?</h1>
            <p className="rp-sub">Enter the email you signed up with and we&apos;ll send you a link to choose a new one.</p>
            {error && <p className="rp-err" role="alert">{error}</p>}
            <label htmlFor="rp-email">Email</label>
            <input id="rp-email" type="email" autoComplete="email" inputMode="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@family.com" autoFocus/>
            <button className="rp-btn" disabled={busy}>{busy ? "Sending…" : "Send reset link"}</button>
            <p className="rp-foot"><Link href="/auth/login">Back to sign in</Link></p>
          </form>
        )}

        {mode === "sent" && (
          <div>
            <div className="rp-icon">📬</div>
            <h1>Check your email</h1>
            <p className="rp-sub">If an account exists for <strong>{email.trim()}</strong>, a reset link is on its way. It works once and expires in 1 hour.</p>
            <p className="rp-sub" style={{ fontSize: 14 }}>Nothing after a few minutes? Check spam or promotions, or try again.</p>
            <button className="rp-btn rp-btn-ghost" onClick={() => { setMode("request"); setError(""); }}>Send again</button>
            <p className="rp-foot"><Link href="/auth/login">Back to sign in</Link></p>
          </div>
        )}

        {mode === "set" && (
          <form onSubmit={setNewPassword} noValidate>
            <h1>Choose a new password</h1>
            <p className="rp-sub">Make it at least 8 characters. You&apos;ll be signed in straight after.</p>
            {error && <p className="rp-err" role="alert">{error}</p>}
            <label htmlFor="rp-pw">New password</label>
            <div className="rp-pw">
              <input id="rp-pw" type={show ? "text" : "password"} autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} autoFocus/>
              <button type="button" onClick={() => setShow(v => !v)} aria-label={show ? "Hide password" : "Show password"}>{show ? <EyeOff size={18}/> : <Eye size={18}/>}</button>
            </div>
            {password && (
              <div className="rp-meter" aria-live="polite">
                {[1, 2, 3, 4].map(i => <span key={i} style={{ background: i <= s ? sColors[s] : "#E6E1F0" }}/>)}
                <em>{sLabels[s]}</em>
              </div>
            )}
            <label htmlFor="rp-pw2">Confirm new password</label>
            <input id="rp-pw2" type={show ? "text" : "password"} autoComplete="new-password" value={confirm} onChange={e => setConfirm(e.target.value)}/>
            <button className="rp-btn" disabled={busy}>{busy ? "Saving…" : "Save new password"}</button>
          </form>
        )}

        {mode === "done" && (
          <div>
            <div className="rp-icon">✅</div>
            <h1>Password updated</h1>
            <p className="rp-sub">You&apos;re signed in. Taking you to your family space…</p>
            <Link href="/dashboard" className="rp-btn" style={{ display: "block", textAlign: "center", textDecoration: "none" }}>Go to dashboard</Link>
          </div>
        )}
      </div>
      <style>{`
        .rp { min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px; background-color:#120C2E; background-image:radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.6px); background-size:22px 22px; font-family:'Inter',system-ui,sans-serif; }
        .rp-card { width:100%; max-width:420px; background:#fff; border-radius:24px; padding:32px 28px; box-shadow:0 30px 80px -30px rgba(0,0,0,0.7); color:#1C1733; }
        .rp-brand { display:inline-block; font-family:'Bricolage Grotesque',system-ui,sans-serif; font-weight:800; font-size:18px; color:#1C1733; text-decoration:none; margin-bottom:22px; }
        .rp h1 { font-family:'Bricolage Grotesque',system-ui,sans-serif; font-weight:800; font-size:28px; letter-spacing:-0.02em; margin:0 0 8px; }
        .rp-sub { color:#625C7A; font-size:15px; line-height:1.6; margin:0 0 18px; }
        .rp label { display:block; font-size:14px; font-weight:600; margin:14px 0 6px; }
        .rp input { width:100%; box-sizing:border-box; padding:13px 14px; border:1.5px solid #E6E1F0; border-radius:12px; font-size:16px; font-family:inherit; color:#1C1733; background:#F8F6FC; outline:none; }
        .rp input:focus { border-color:#D6246E; background:#fff; }
        .rp-pw { position:relative; }
        .rp-pw input { padding-right:46px; }
        .rp-pw button { position:absolute; right:8px; top:50%; transform:translateY(-50%); background:none; border:none; color:#625C7A; cursor:pointer; padding:6px; display:flex; }
        .rp-meter { display:flex; align-items:center; gap:6px; margin-top:8px; }
        .rp-meter span { flex:1; height:5px; border-radius:3px; transition:background .2s; }
        .rp-meter em { font-style:normal; font-size:12px; color:#625C7A; min-width:72px; text-align:right; }
        .rp-btn { width:100%; margin-top:20px; padding:14px; border:none; border-radius:12px; background:#D6246E; color:#fff; font-size:16px; font-weight:700; cursor:pointer; font-family:inherit; }
        .rp-btn:hover { background:#B0175A; }
        .rp-btn:disabled { opacity:.65; cursor:wait; }
        .rp-btn:focus-visible, .rp input:focus-visible { outline:3px solid #FFB224; outline-offset:2px; }
        .rp-btn-ghost { background:#F1EDF8; color:#1C1733; }
        .rp-btn-ghost:hover { background:#E6E1F0; }
        .rp-err { background:#FEF2F2; color:#B42318; border-radius:10px; padding:10px 12px; font-size:14px; line-height:1.5; margin:0 0 8px; }
        .rp-foot { text-align:center; margin:18px 0 0; font-size:14px; }
        .rp-foot a { color:#D6246E; font-weight:600; text-decoration:none; }
        .rp-icon { font-size:40px; margin-bottom:10px; }
      `}</style>
    </main>
  );
}

export default function ResetPage() {
  return <Suspense fallback={<main style={{ minHeight: "100vh", background: "#120C2E" }}/>}><ResetInner/></Suspense>;
}

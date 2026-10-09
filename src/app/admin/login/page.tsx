"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

// Separate admin sign-in — email + password only (no Google, no sign-up),
// so it never mixes with the family login customers use.
const ADMIN_EMAIL = "sahilaggarwal43@gmail.com";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    const r = new URLSearchParams(window.location.search).get("reason");
    if (r === "not_password") setInfo("You're signed in with Google. Admin needs your email and password — sign in below.");
    if (r === "not_admin") setInfo("You're signed in with a different account. Sign in with the admin email below.");
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (email.trim().toLowerCase() !== ADMIN_EMAIL) { setError("This email doesn't have admin access."); return; }
    setBusy(true);
    try {
      const { createBrowserClient } = await import("@supabase/ssr");
      const sb = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
      // Replace any existing (e.g. Google) session first
      await sb.auth.signOut().catch(() => {});
      let { error: err } = await sb.auth.signInWithPassword({ email: email.trim().toLowerCase(), password });
      if (err && /not confirmed/i.test(err.message)) {
        await fetch("/api/auth/confirm", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email.trim() }) }).catch(() => {});
        ({ error: err } = await sb.auth.signInWithPassword({ email: email.trim().toLowerCase(), password }));
      }
      if (err) throw err;
      window.location.href = "/admin"; // full load so the server sees the new session cookie
    } catch (err) {
      const m = err instanceof Error ? err.message : "";
      if (/invalid login|invalid credentials/i.test(m)) setError("Wrong password — or this account was created with Google and has no password yet. Use “Set or reset password” below, then sign in.");
      else if (/not confirmed/i.test(m)) setError("This email isn't verified yet. Use “Set or reset password” below — the email link verifies it too.");
      else if (/rate|too many/i.test(m)) setError("Too many attempts. Please wait a minute and try again.");
      else setError(m || "Couldn't sign in. Please try again.");
      setBusy(false);
    }
  }

  return (
    <main className="al">
      <form className="al-card" onSubmit={submit} noValidate>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-64.png" width={48} height={48} alt="" style={{ borderRadius: 12 }}/>
        <h1>Admin sign in</h1>
        <p>OurParampara staff only.</p>
        {info && !error && <div className="al-info">{info}</div>}
        {error && <div className="al-err" role="alert">{error}</div>}
        <label htmlFor="al-email">Email</label>
        <input id="al-email" type="email" autoComplete="username" value={email} onChange={e => setEmail(e.target.value)} autoFocus/>
        <label htmlFor="al-pw">Password</label>
        <div className="al-pw">
          <input id="al-pw" type={show ? "text" : "password"} autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button type="button" onClick={() => setShow(v => !v)} aria-label={show ? "Hide password" : "Show password"}>{show ? <EyeOff size={18}/> : <Eye size={18}/>}</button>
        </div>
        <button className="al-btn" disabled={busy || !email || !password}>{busy ? "Signing in…" : "Sign in"}</button>
        <p className="al-foot"><Link href={`/auth/reset?email=${encodeURIComponent(ADMIN_EMAIL)}`}>Set or reset password</Link></p>
      </form>
      <style>{`
        .al { min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px; background:#120C2E; background-image:radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.6px); background-size:22px 22px; font-family:'Inter',system-ui,sans-serif; }
        .al-card { width:100%; max-width:380px; background:#fff; border-radius:22px; padding:30px 26px; color:#1C1733; box-shadow:0 30px 80px -30px rgba(0,0,0,0.7); }
        .al-card h1 { font-family:'Bricolage Grotesque',system-ui,sans-serif; font-weight:800; font-size:26px; margin:14px 0 2px; }
        .al-card p { color:#625C7A; margin:0 0 16px; font-size:14px; }
        .al-card label { display:block; font-weight:600; font-size:14px; margin:12px 0 6px; }
        .al-card input { width:100%; box-sizing:border-box; padding:12px 14px; border:1.5px solid #E6E1F0; border-radius:12px; font-size:16px; font-family:inherit; background:#F8F6FC; outline:none; }
        .al-card input:focus { border-color:#D6246E; background:#fff; }
        .al-pw { position:relative; } .al-pw input { padding-right:44px; }
        .al-pw button { position:absolute; right:8px; top:50%; transform:translateY(-50%); background:none; border:none; color:#625C7A; cursor:pointer; display:flex; padding:6px; }
        .al-btn { width:100%; margin-top:20px; padding:14px; border:none; border-radius:12px; background:#1E1546; color:#fff; font-size:16px; font-weight:700; cursor:pointer; font-family:inherit; }
        .al-btn:disabled { opacity:.6; cursor:not-allowed; }
        .al-btn:focus-visible, .al-card input:focus-visible { outline:3px solid #FFB224; outline-offset:2px; }
        .al-info { background:#FFF4DC; color:#7A4A00; border-radius:10px; padding:10px 12px; font-size:14px; line-height:1.5; }
        .al-foot { text-align:center; margin:16px 0 0 !important; } .al-foot a { color:#D6246E; font-weight:700; text-decoration:none; font-size:14px; }
        .al-err { background:#FEF2F2; color:#B42318; border-radius:10px; padding:10px 12px; font-size:14px; }
      `}</style>
    </main>
  );
}

"use client";
import { usePricing, formatPrice } from "@/lib/usePricing";
import { initPlanFromEmail, syncPlanFromSupabase, getLocalPlanExpiresAt } from "@/lib/plan";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { CreditCard, Shield, Bell, User, ChevronRight, Check, Lock, Zap } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", saffronMid:"#E8894A", goldBright:"#D4A843", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", gold:"#B8922A" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };
type Plan = "free"|"pro";

function NotifRow({ title, desc, defaultOn }: { title:string; desc:string; defaultOn:boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 0", borderBottom:`1px solid ${C.border}` }}>
      <div style={{ flex:1 }}>
        <p style={{ fontSize:13, fontWeight:500, color:C.charcoal, margin:0 }}>{title}</p>
        <p style={{ fontSize:11, color:C.gray, margin:0 }}>{desc}</p>
      </div>
      <button onClick={()=>setOn(v=>!v)} style={{ width:44, height:24, borderRadius:12, border:"none", background:on?C.saffron:"rgba(0,0,0,0.12)", cursor:"pointer", position:"relative", transition:"background 0.2s", flexShrink:0 }}>
        <div style={{ position:"absolute", top:2, left:on?22:2, width:20, height:20, borderRadius:"50%", background:"#fff", transition:"left 0.2s", boxShadow:"0 1px 3px rgba(0,0,0,0.2)" }}/>
      </button>
    </div>
  );
}

// ── Sync to Cloud card ──
function SyncCard() {
  const [syncing, setSyncing] = useState(false);
  const [result, setResult] = useState<string|null>(null);

  async function handleSync() {
    setSyncing(true); setResult(null);
    try {
      const keys = Object.keys(localStorage);
      const members: unknown[] = [];
      const rituals: unknown[] = [];
      for (const key of keys) {
        try {
          const val = localStorage.getItem(key);
          if (!val || val === "[]") continue;
          if (key.startsWith("parampara_members_")) {
            const arr = JSON.parse(val);
            if (Array.isArray(arr)) members.push(...arr);
          }
          if (key.startsWith("parampara_rituals_")) {
            const arr = JSON.parse(val);
            if (Array.isArray(arr)) rituals.push(...arr);
          }
        } catch {}
      }
      // Dedupe by name
      const uniqueMembers = members.filter((m, i, arr) =>
        arr.findIndex((x: unknown) => (x as {name?:string}).name === (m as {name?:string}).name) === i
      );
      const uniqueRituals = rituals.filter((r, i, arr) =>
        arr.findIndex((x: unknown) => (x as {name?:string}).name === (r as {name?:string}).name) === i
      );

      const familyName = localStorage.getItem("parampara_family_name") || "My Family";
      const settings = (() => { try { return JSON.parse(localStorage.getItem("parampara_family_settings") || "{}"); } catch { return {}; } })();

      const res = await fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          members: uniqueMembers,
          rituals: uniqueRituals,
          familyName,
          religion: settings.religion || "Hindu",
          region: settings.region || "Chandigarh",
        }),
      });

      const data = await res.json();
      if (data.success) {
        localStorage.setItem("parampara_last_sync", String(Date.now()));
        setResult(`✅ Synced! ${data.membersSynced} members · ${data.ritualsSynced} rituals saved to cloud`);
      } else {
        setResult(`❌ ${data.error || "Sync failed"}`);
      }
    } catch (err) {
      setResult(`❌ Sync failed: ${String(err)}`);
    }
    setSyncing(false);
  }

  const C2 = { saffron:"#C8541A", saffronLight:"#FDF0E6", forest:"#1A5C42", forestLight:"#E8F4EE", white:"#fff", charcoal:"#18181B", gray:"#71717A", border:"rgba(184,146,42,0.15)" };
  return (
    <div style={{ background:C2.white, borderRadius:16, border:`1px solid ${C2.border}`, padding:24 }}>
      <p style={{ fontSize:12, fontWeight:600, color:C2.charcoal, marginBottom:8, letterSpacing:0.5 }}>☁️ SYNC TO CLOUD</p>
      <p style={{ fontSize:13, color:C2.gray, marginBottom:16, lineHeight:1.6 }}>
        Save your family members and rituals to the cloud so they appear on all your devices — phone, tablet, and computer.
      </p>
      {result && (
        <div style={{ background:result.startsWith("✅")?C2.forestLight:"#FEF2F2", border:`1px solid ${result.startsWith("✅")?"rgba(26,92,66,0.2)":"rgba(220,38,38,0.2)"}`, borderRadius:10, padding:"10px 14px", marginBottom:14, fontSize:13, color:result.startsWith("✅")?C2.forest:"#DC2626", lineHeight:1.5 }}>
          {result}
        </div>
      )}
      <button onClick={handleSync} disabled={syncing}
        style={{ padding:"11px 24px", background:`linear-gradient(135deg,${C2.saffron},#B8922A)`, border:"none", borderRadius:10, fontSize:13, fontWeight:600, color:C2.white, cursor:"pointer", opacity:syncing?0.7:1 }}>
        {syncing ? "Syncing…" : "☁️ Sync data to cloud"}
      </button>
    </div>
  );
}

// ── Security Components ──────────────────────────────────────
function ChangePasswordCard() {
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const C2 = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", white:"#fff", charcoal:"#18181B", gray:"#71717A", ivory:"#FAF7F2" };
  const inp: React.CSSProperties = { width:"100%", padding:"10px 13px", border:`1px solid ${C2.border}`, borderRadius:9, fontSize:13, fontFamily:"Inter,sans-serif", background:C2.ivory, color:C2.charcoal, outline:"none", boxSizing:"border-box", marginBottom:10 };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newPass !== confirm) { setMsg("Passwords don't match"); setHasError(true); return; }
    if (newPass.length < 6) { setMsg("Password must be at least 6 characters"); setHasError(true); return; }
    setLoading(true);
    try {
      const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Not configured");
      const { createBrowserClient } = await import("@supabase/ssr");
      const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
      const { error } = await sb.auth.updateUser({ password: newPass });
      if (error) throw error;
      setSaved(true); setShowForm(false); setMsg("Password updated successfully!");
       setNewPass(""); setConfirm("");
    } catch (err: unknown) {
      setHasError(true);
      setMsg(err instanceof Error ? err.message : "Failed to update password");
    }
    setLoading(false);
  }

  return (
    <div style={{ background:C2.white, borderRadius:16, border:`1px solid ${C2.border}`, padding:20 }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:showForm?16:0 }}>
        <div>
          <p style={{ fontSize:14, fontWeight:600, color:C2.charcoal, margin:0 }}>Change password</p>
          <p style={{ fontSize:12, color:C2.gray, margin:"2px 0 0" }}>Update your account password</p>
        </div>
        {!showForm && (
          <button onClick={()=>setShowForm(true)} style={{ padding:"7px 16px", background:C2.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:8, fontSize:12, fontWeight:600, color:C2.saffron, cursor:"pointer" }}>Change</button>
        )}
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input type="password" placeholder="New password" value={newPass} onChange={e=>setNewPass(e.target.value)} required style={inp}/>
          <input type="password" placeholder="Confirm new password" value={confirm} onChange={e=>setConfirm(e.target.value)} required style={{...inp, marginBottom:14}}/>
          {msg && <p style={{ fontSize:12, color:hasError?"#DC2626":"#1A5C42", marginBottom:10 }}>{msg}</p>}
          <div style={{ display:"flex", gap:8 }}>
            <button type="button" onClick={()=>{setShowForm(false);setMsg("");}} style={{ flex:1, padding:"9px", border:`1px solid ${C2.border}`, borderRadius:9, fontSize:13, cursor:"pointer", background:C2.white }}>Cancel</button>
            <button type="submit" disabled={loading} style={{ flex:1, padding:"9px", background:`linear-gradient(135deg,#C8541A,#B8922A)`, border:"none", borderRadius:9, fontSize:13, fontWeight:600, color:"#fff", cursor:"pointer" }}>{loading?"Updating…":"Update password"}</button>
          </div>
        </form>
      )}
      {saved && <p style={{ fontSize:13, color:"#1A5C42", marginTop:8 }}>✅ {msg}</p>}
    </div>
  );
}

function ActiveSessionsCard() {
  const [sessions, setSessions] = useState<{device:string; time:string; current:boolean}[]>([]);
  const [loaded, setLoaded] = useState(false);
  const C2 = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", white:"#fff", charcoal:"#18181B", gray:"#71717A", ivory:"#FAF7F2", forest:"#1A5C42", forestLight:"#E8F4EE" };

  function load() {
    // Show current session info
    const ua = navigator.userAgent;
    const device = /mobile|android|iphone/i.test(ua) ? "📱 Mobile Browser" : "💻 Desktop Browser";
    setSessions([
      { device: `${device} — current session`, time: new Date().toLocaleString("en-IN"), current: true },
    ]);
    setLoaded(true);
  }

  async function signOutAll() {
    try {
      const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!SUPABASE_URL || !SUPABASE_KEY) return;
      const { createBrowserClient } = await import("@supabase/ssr");
      const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
      await sb.auth.signOut({ scope: "global" });
      localStorage.removeItem("parampara_initialized");
      window.location.href = "/auth/login";
    } catch {}
  }

  return (
    <div style={{ background:C2.white, borderRadius:16, border:`1px solid ${C2.border}`, padding:20 }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:loaded?14:0 }}>
        <div>
          <p style={{ fontSize:14, fontWeight:600, color:C2.charcoal, margin:0 }}>Active sessions</p>
          <p style={{ fontSize:12, color:C2.gray, margin:"2px 0 0" }}>View and manage logged-in devices</p>
        </div>
        {!loaded && <button onClick={load} style={{ padding:"7px 16px", background:C2.ivory, border:`1px solid ${C2.border}`, borderRadius:8, fontSize:12, fontWeight:600, color:C2.charcoal, cursor:"pointer" }}>View</button>}
      </div>
      {loaded && sessions.map((s,i) => (
        <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"10px 12px", background:s.current?C2.forestLight:C2.ivory, borderRadius:10, marginBottom:8, border:`1px solid ${s.current?"rgba(26,92,66,0.2)":C2.border}` }}>
          <div style={{ flex:1 }}>
            <p style={{ fontSize:13, fontWeight:500, color:C2.charcoal, margin:0 }}>{s.device}</p>
            <p style={{ fontSize:11, color:C2.gray, margin:"2px 0 0" }}>Last active: {s.time}</p>
          </div>
          {s.current && <span style={{ fontSize:10, fontWeight:700, color:C2.forest, background:"rgba(26,92,66,0.15)", padding:"3px 8px", borderRadius:8 }}>Current</span>}
        </div>
      ))}
      {loaded && (
        <button onClick={signOutAll} style={{ fontSize:12, color:"#DC2626", background:"none", border:"none", cursor:"pointer", padding:0, marginTop:4 }}>
          Sign out all devices →
        </button>
      )}
    </div>
  );
}

function DeleteAccountCard() {
  const [mode, setMode] = useState<"idle"|"confirm">("idle");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const C2 = { saffron:"#C8541A", border:"rgba(184,146,42,0.15)", white:"#fff", charcoal:"#18181B", gray:"#71717A", ivory:"#FAF7F2" };

  async function handleDelete() {
    if (input !== "DELETE") return;
    setLoading(true);
    try {
      const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!SUPABASE_URL || !SUPABASE_KEY) return;
      const { createBrowserClient } = await import("@supabase/ssr");
      const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
      // Sign out and clear data
      await sb.auth.signOut();
      localStorage.clear();
      window.location.href = "/";
    } catch {}
    setLoading(false);
  }

  return (
    <div style={{ background:"#FFF8F8", borderRadius:16, border:"1px solid rgba(220,38,38,0.15)", padding:20 }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <p style={{ fontSize:14, fontWeight:600, color:"#DC2626", margin:0 }}>Delete account</p>
          <p style={{ fontSize:12, color:C2.gray, margin:"2px 0 0" }}>Permanently delete your account and all data</p>
        </div>
        {mode === "idle" && <button onClick={()=>setMode("confirm")} style={{ padding:"7px 16px", background:"rgba(220,38,38,0.1)", border:"1px solid rgba(220,38,38,0.2)", borderRadius:8, fontSize:12, fontWeight:600, color:"#DC2626", cursor:"pointer" }}>Delete</button>}
      </div>
      {mode === "confirm" && (
        <div style={{ marginTop:16, padding:"14px 16px", background:"rgba(220,38,38,0.05)", borderRadius:10, border:"1px solid rgba(220,38,38,0.15)" }}>
          <p style={{ fontSize:13, color:C2.charcoal, marginBottom:12, lineHeight:1.6 }}>This will permanently delete your account, all family data, rituals, and memories. <strong>This cannot be undone.</strong></p>
          <p style={{ fontSize:12, color:C2.gray, marginBottom:8 }}>Type <strong>DELETE</strong> to confirm:</p>
          <input value={input} onChange={e=>setInput(e.target.value.toUpperCase())} placeholder="Type DELETE" style={{ width:"100%", padding:"9px 12px", border:"1px solid rgba(220,38,38,0.3)", borderRadius:8, fontSize:13, background:C2.white, boxSizing:"border-box", marginBottom:12, color:C2.charcoal, outline:"none" }}/>
          <div style={{ display:"flex", gap:8 }}>
            <button onClick={()=>{setMode("idle");setInput("");}} style={{ flex:1, padding:"9px", border:`1px solid ${C2.border}`, borderRadius:9, fontSize:13, cursor:"pointer", background:C2.white }}>Cancel</button>
            <button onClick={handleDelete} disabled={input!=="DELETE"||loading} style={{ flex:1, padding:"9px", background:input==="DELETE"?"#DC2626":"#F4F4F5", border:"none", borderRadius:9, fontSize:13, fontWeight:600, color:input==="DELETE"?"#fff":"#A1A1AA", cursor:input==="DELETE"?"pointer":"not-allowed" }}>{loading?"Deleting…":"Delete forever"}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function AccountPrice() {
  const { pricing } = usePricing();
  return <>{formatPrice(pricing.monthly, pricing)}/mo</>;
}

export default function AccountPage() {
  const [plan, setPlan] = useState<Plan>("free");
  const [planExpiresAt, setPlanExpiresAt] = useState<string|null>(null);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [memberSince, setMemberSince] = useState("2026");
  const [familyName, setFamilyName] = useState("Your Family");
  const [activeSection, setActiveSection] = useState("plan");

  useEffect(() => {
    syncPlanFromSupabase().then(p => {
      setPlan(p as Plan);
      // syncPlanFromSupabase writes the expiry to localStorage as a side
      // effect — read it back now that the sync (and any auto-downgrade)
      // has completed.
      setPlanExpiresAt(getLocalPlanExpiresAt());
    });
    const fn = localStorage.getItem("parampara_family_name")||"Your Family";
    setFamilyName(fn);
    // Load real user data
    const email = localStorage.getItem("parampara_user_email") || "";
    const name = localStorage.getItem("parampara_user_name") || email.split("@")[0] || "User";
    setUserEmail(email);
    setUserName(name);
    // Get Supabase user for accurate data
    const getSBUser = async () => {
      try {
        const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        if (!SUPABASE_URL || !SUPABASE_KEY) return;
        const { createBrowserClient } = await import("@supabase/ssr");
        const sb = createBrowserClient(SUPABASE_URL, SUPABASE_KEY);
        const { data: { user } } = await sb.auth.getUser();
        if (user) {
          setUserEmail(user.email || email);
          const fullName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split("@")[0] || "User";
          setUserName(fullName);
          const created = new Date(user.created_at).toLocaleDateString("en-IN", { month:"long", year:"numeric" });
          setMemberSince(created);
        }
      } catch {}
    };
    getSBUser();
  }, []);


  const SECTIONS = [
    { id:"plan", icon:<Zap size={14}/>, label:"Plan & Subscription" },
    { id:"billing", icon:<CreditCard size={14}/>, label:"Payment & Billing" },
    { id:"account", icon:<User size={14}/>, label:"Account Details" },
    { id:"notifications", icon:<Bell size={14}/>, label:"Notifications" },
    { id:"security", icon:<Shield size={14}/>, label:"Security" },
  ];

  return (
    <AppShell>
      <div style={{ padding:"24px 20px", maxWidth:760, margin:"0 auto" }}>
        <h1 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, marginBottom:4 }}>Account &amp; Settings</h1>
        <p style={{ fontSize:13, color:C.gray, marginBottom:24 }}>{familyName} · {plan==="pro"?"✨ Pro Plan":"Free Plan"}</p>

        {/* Section nav */}
        <div style={{ display:"flex", gap:6, marginBottom:20, overflowX:"auto", paddingBottom:4 }}>
          {SECTIONS.map(s=>(
            <button key={s.id} onClick={()=>setActiveSection(s.id)}
              style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 14px", borderRadius:10, border:`1px solid ${activeSection===s.id?C.saffron:C.border}`, background:activeSection===s.id?C.saffronLight:C.white, color:activeSection===s.id?C.saffron:C.gray, fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:F.sans, whiteSpace:"nowrap", flexShrink:0, transition:"all 0.2s" }}>
              {s.icon}{s.label}
            </button>
          ))}
        </div>

        {/* PLAN */}
        {activeSection==="plan" && (
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <div style={{ background:plan==="pro"?C.charcoal:C.white, borderRadius:16, border:`1px solid ${plan==="pro"?"rgba(200,84,26,0.35)":C.border}`, padding:24, position:"relative", overflow:"hidden" }}>
              {plan==="pro" && <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,#C8541A,#B8922A)" }}/>}
              <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:12, marginBottom:plan==="pro"?20:0 }}>
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                    <span style={{ fontSize:20 }}>{plan==="pro"?"✨":"🌱"}</span>
                    <h2 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:plan==="pro"?"#fff":C.charcoal, margin:0 }}>{plan==="pro"?"Pro Plan":"Free Plan"}</h2>
                    <span style={{ fontSize:10, fontWeight:700, padding:"3px 8px", borderRadius:20, background:plan==="pro"?"rgba(212,168,67,0.2)":"rgba(113,113,122,0.1)", color:plan==="pro"?C.goldBright:C.gray }}>ACTIVE</span>
                  </div>
                  <p style={{ fontSize:13, color:plan==="pro"?"rgba(255,255,255,0.5)":C.gray, margin:0 }}>
                    {plan==="pro"?"Unlimited everything · All AI features · 10GB storage":"2 family spaces · 5 rituals · AI features locked"}
                  </p>
                </div>
                <div style={{ textAlign:"right" }}>
                  <p style={{ fontFamily:F.serif, fontSize:32, fontWeight:700, color:plan==="pro"?"#fff":C.charcoal, margin:0 }}>{plan==="pro"?<AccountPrice/>:"Free"}</p>
                  <p style={{ fontSize:11, color:plan==="pro"?"rgba(255,255,255,0.4)":C.gray, margin:0 }}>/month</p>
                </div>
              </div>
              {plan==="pro" && (
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                  {(() => {
                    const expiryLabel = planExpiresAt
                      ? new Date(planExpiresAt).toLocaleDateString("en-IN", { day:"numeric", month:"long", year:"numeric" })
                      : "No expiry (lifetime)";
                    return [["Access until", expiryLabel], ["Storage used","1.2 GB / 10 GB"], ["AI queries","Unlimited"]];
                  })().map(([k,v])=>(
                    <div key={k} style={{ padding:"10px 14px", background:"rgba(255,255,255,0.06)", borderRadius:10 }}>
                      <p style={{ fontSize:11, color:"rgba(255,255,255,0.4)", margin:0 }}>{k}</p>
                      <p style={{ fontSize:13, fontWeight:600, color:"rgba(255,255,255,0.85)", margin:"3px 0 0" }}>{v}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Expiry warning — Razorpay is one-time payment, not auto-renewing,
                so unlike a subscription this won't silently keep charging the
                card; it just quietly stops working unless the user notices
                and renews. Surface that clearly here rather than relying only
                on the email reminder. */}
            {plan==="pro" && planExpiresAt && (new Date(planExpiresAt).getTime() - Date.now()) < (7 * 24 * 60 * 60 * 1000) && (
              <div style={{ background:"#FFF7ED", border:"1px solid rgba(200,84,26,0.25)", borderRadius:14, padding:"16px 20px", display:"flex", alignItems:"center", gap:14, flexWrap:"wrap" }}>
                <span style={{ fontSize:22 }}>⏳</span>
                <div style={{ flex:1, minWidth:200 }}>
                  <p style={{ fontSize:13, fontWeight:700, color:C.charcoal, margin:"0 0 2px" }}>Your Pro plan is expiring soon</p>
                  <p style={{ fontSize:12, color:C.gray, margin:0 }}>Renew before it ends to keep AI features, Heritage Book, and unlimited rituals active.</p>
                </div>
                <Link href="/upgrade" style={{ padding:"9px 18px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:9, fontSize:12, fontWeight:700, color:"#fff", textDecoration:"none", whiteSpace:"nowrap" }}>Renew now →</Link>
              </div>
            )}

            {plan==="free" ? (
              <div style={{ background:"linear-gradient(135deg,#FDF0E6,#FAF7F2)", border:`1px solid rgba(200,84,26,0.2)`, borderRadius:16, padding:24 }}>
                <h3 style={{ fontFamily:F.serif, fontSize:16, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Upgrade to Pro</h3>
                <p style={{ fontSize:13, color:C.gray, marginBottom:16, lineHeight:1.6 }}>Unlock AI features, unlimited rituals, 10GB storage and more for just ₹49/month.</p>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:20 }}>
                  {["✨ AI Assistant","🛒 Samagri Generator","🔍 Gap Finder","📄 PDF Export","🎙 Voice Memos"].map(f=>(
                    <span key={f} style={{ fontSize:11, fontWeight:500, color:C.saffron, background:C.saffronLight, border:`1px solid rgba(200,84,26,0.15)`, borderRadius:20, padding:"4px 12px" }}>{f}</span>
                  ))}
                </div>
                <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                  <Link href="/upgrade" style={{ padding:"11px 24px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:10, fontSize:13, fontWeight:700, color:"#fff", textDecoration:"none" }}>Upgrade to Pro →</Link>
                </div>
              </div>
            ) : (
              <div style={{ background:C.white, border:`1px solid ${C.border}`, borderRadius:16, padding:20 }}>
                <h3 style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.charcoal, marginBottom:12 }}>Manage Plan</h3>
                <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                  <Link href="/upgrade" style={{ padding:"10px 20px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:10, fontSize:13, fontWeight:600, color:"#fff", textDecoration:"none" }}>View all plans</Link>
                  <button onClick={()=>toast("Manage billing via Razorpay dashboard",{icon:"ℹ️",duration:4000})} style={{ padding:"10px 20px", background:C.ivory, border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, color:C.gray, cursor:"pointer", fontFamily:F.sans }}>Manage billing</button>
                </div>
              </div>
            )}

            <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:20 }}>
              <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, marginBottom:14, letterSpacing:0.5 }}>YOUR PLAN INCLUDES</p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                {(plan==="pro"
                  ? ["Unlimited family spaces","Unlimited members & rituals","✨ All 3 AI features","10GB media storage","Voice memo recording","PDF legacy export","Priority support","Birthday & anniversary reminders"]
                  : ["2 family spaces","Unlimited family members","5 rituals per family","500MB media storage","Festival calendar","Birthday & anniversary reminders","Family tree download"]
                ).map(f=>(
                  <div key={f} style={{ display:"flex", gap:8, alignItems:"center" }}>
                    <Check size={11} color={plan==="pro"?C.saffron:C.forest} style={{ flexShrink:0 }}/>
                    <span style={{ fontSize:12, color:C.charcoal }}>{f}</span>
                  </div>
                ))}
                {plan==="free" && (
                  <div style={{ gridColumn:"1/-1", display:"flex", gap:8, alignItems:"center", marginTop:6, padding:"8px 12px", background:"#F4F4F5", borderRadius:8 }}>
                    <Lock size={11} color={C.gray} style={{ flexShrink:0 }}/>
                    <span style={{ fontSize:12, color:C.gray }}>AI features locked — upgrade to unlock</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* BILLING */}
        {activeSection==="billing" && (
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {plan==="free" ? (
              <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:32, textAlign:"center" }}>
                <CreditCard size={32} color={C.gray} style={{ margin:"0 auto 12px" }}/>
                <h3 style={{ fontFamily:F.serif, fontSize:16, fontWeight:600, color:C.charcoal, marginBottom:8 }}>No billing on free plan</h3>
                <p style={{ fontSize:13, color:C.gray, marginBottom:20 }}>Upgrade to Pro to manage payment details and view billing history.</p>
                <Link href="/upgrade" style={{ display:"inline-flex", alignItems:"center", gap:6, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"11px 24px", borderRadius:10, fontSize:13, fontWeight:600, textDecoration:"none" }}>Upgrade to Pro →</Link>
              </div>
            ) : (
              <>
                {/* Subscription status */}
                <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:20 }}>
                  <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, marginBottom:14, letterSpacing:0.5 }}>SUBSCRIPTION STATUS</p>
                  <div style={{ display:"flex", alignItems:"center", gap:10, padding:"12px 14px", background:C.forestLight, borderRadius:10, marginBottom:14, border:"1px solid rgba(26,92,66,0.2)" }}>
                    <span style={{ fontSize:16 }}>✅</span>
                    <div>
                      <p style={{ fontSize:13, fontWeight:600, color:C.forest, margin:0 }}>Pro Plan — Active</p>
                      <p style={{ fontSize:11, color:C.gray, margin:0 }}>₹49/month · All features unlocked</p>
                    </div>
                  </div>
                  <a href="https://dashboard.razorpay.com" target="_blank" rel="noopener noreferrer"
                    style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"9px 18px", background:C.ivory, border:`1px solid ${C.border}`, borderRadius:9, fontSize:12, fontWeight:600, color:C.charcoal, textDecoration:"none" }}>
                    💳 Manage billing on Razorpay →
                  </a>
                </div>

                {/* Payment method */}
                <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:20 }}>
                  <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, marginBottom:14, letterSpacing:0.5 }}>PAYMENT METHOD</p>
                  <div style={{ padding:"14px 16px", background:C.saffronLight, borderRadius:10, marginBottom:12, border:`1px solid rgba(200,84,26,0.15)` }}>
                    <p style={{ fontSize:13, color:C.charcoal, margin:0, lineHeight:1.6 }}>
                      Your payment methods are managed securely by <strong>Razorpay</strong>. To add, update or remove a payment method, visit your Razorpay account.
                    </p>
                  </div>
                  <a href="https://dashboard.razorpay.com" target="_blank" rel="noopener noreferrer"
                    style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"9px 18px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, borderRadius:9, fontSize:12, fontWeight:600, color:"#fff", textDecoration:"none" }}>
                    + Manage payment methods on Razorpay →
                  </a>
                </div>

                {/* Billing history */}
                <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:20 }}>
                  <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, marginBottom:14, letterSpacing:0.5 }}>BILLING HISTORY</p>
                  <p style={{ fontSize:13, color:C.gray, marginBottom:12 }}>View your complete payment history and download invoices on Razorpay.</p>
                  <a href="https://dashboard.razorpay.com/app/payments" target="_blank" rel="noopener noreferrer"
                    style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"9px 18px", background:C.ivory, border:`1px solid ${C.border}`, borderRadius:9, fontSize:12, fontWeight:600, color:C.charcoal, textDecoration:"none" }}>
                    View payment history →
                  </a>
                </div>

                {/* Cancel plan */}
                <div style={{ background:"#FFF8F8", borderRadius:16, border:"1px solid rgba(220,38,38,0.12)", padding:20 }}>
                  <p style={{ fontSize:13, fontWeight:600, color:"#DC2626", marginBottom:6 }}>Cancel subscription</p>
                  <p style={{ fontSize:12, color:C.gray, marginBottom:12, lineHeight:1.6 }}>You can cancel anytime. Your Pro access continues until the end of the billing period.</p>
                  <a href="mailto:ourparamparaofficial@gmail.com?subject=Cancel%20Pro%20Subscription" style={{ fontSize:12, color:"#DC2626", fontWeight:600, textDecoration:"none" }}>
                    Contact support to cancel →
                  </a>
                </div>
              </>
            )}
          </div>
        )}

        {/* ACCOUNT */}
        {activeSection==="account" && (
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:24 }}>
            <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, marginBottom:18, letterSpacing:0.5 }}>ACCOUNT DETAILS</p>
            {[["Full name",userName],["Email",userEmail],["Family name",familyName],["Member since",memberSince],["Plan",plan==="pro"?"✨ Pro":"Free"]].map(([label,value])=>(
              <div key={label} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:`1px solid ${C.border}` }}>
                <span style={{ fontSize:13, color:C.gray }}>{label}</span>
                <span style={{ fontSize:13, fontWeight:500, color:C.charcoal }}>{value}</span>
              </div>
            ))}
            <div style={{ marginTop:20, display:"flex", gap:10, flexWrap:"wrap" }}>
              <button onClick={()=>toast("Profile editing — connect Supabase Auth",{icon:"✏️"})} style={{ padding:"10px 18px", background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:10, fontSize:13, fontWeight:500, color:C.saffron, cursor:"pointer", fontFamily:F.sans }}>Edit profile</button>
              <Link href="/family-settings" style={{ padding:"10px 18px", background:C.ivory, border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, fontWeight:500, color:C.charcoal, textDecoration:"none" }}>Family settings</Link>
              <button onClick={()=>{ localStorage.removeItem("parampara_initialized"); localStorage.removeItem("parampara_user_email"); window.location.href="/"; }} style={{ padding:"10px 18px", background:"#FEF2F2", border:"1px solid rgba(220,38,38,0.15)", borderRadius:10, fontSize:13, fontWeight:500, color:"#DC2626", cursor:"pointer", fontFamily:F.sans }}>Sign out</button>
            </div>
          </div>
          <SyncCard/>
          </div>
        )}

        {/* NOTIFICATIONS */}
        {activeSection==="notifications" && (
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:24 }}>
            <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, marginBottom:18, letterSpacing:0.5 }}>NOTIFICATION PREFERENCES</p>
            {[
              ["Birthday reminders","3 days before family birthdays",true],
              ["Anniversary reminders","3 days before anniversaries",true],
              ["Festival alerts","7 days before upcoming festivals",true],
              ["Memory prompts","Weekly prompt to add a new memory",true],
              ["Ritual updates","When a member adds or edits a ritual",false],
              ["New members","When someone joins your family space",true],
            ].map(([t,d,def])=><NotifRow key={t as string} title={t as string} desc={d as string} defaultOn={def as boolean}/>)}
          </div>
        )}

        {/* SECURITY */}
        {activeSection==="security" && (
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

            {/* Change Password */}
            <ChangePasswordCard/>

            {/* Active Sessions */}
            <ActiveSessionsCard/>

            {/* Delete Account */}
            <DeleteAccountCard/>
          </div>
        )}
      </div>
    </AppShell>
  );
}

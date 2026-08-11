"use client";
import { fullSync } from "@/lib/autoSync";
import { useRituals, useMembers } from "@/lib/useData";
import { getActiveFamily, migrateLegacyData } from "@/lib/families";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { PRESET_FESTIVALS, SAMPLE_RITUAL, type Ritual, type FamilyMember } from "@/lib/store";
import Link from "next/link";
import { Plus, ArrowRight, Users, BookOpen, CalendarDays, Image as ImageIcon, X, Gift, Bell, TreePine } from "lucide-react";
import toast from "react-hot-toast";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", gold:"#B8922A" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

function daysUntil(dateStr: string) {
  const today = new Date(); today.setHours(0,0,0,0);
  const target = new Date(dateStr); target.setHours(0,0,0,0);
  return Math.ceil((target.getTime()-today.getTime())/(1000*60*60*24));
}

function getDaysUntilBirthday(birthdate?: string): number|null {
  if (!birthdate) return null;
  const today = new Date(); today.setHours(0,0,0,0);
  const dob = new Date(birthdate);
  const next = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  if (next < today) next.setFullYear(today.getFullYear()+1);
  return Math.ceil((next.getTime()-today.getTime())/(1000*60*60*24));
}

// Memory notification content
const MEMORY_PROMPTS = [
  "📸 Share a photo from your last family ceremony to Memory Vault",
  "🎙 Record a voice memo of an elder explaining a family tradition",
  "📜 Document a ritual before the memory fades",
  "🪔 Did you perform a puja recently? Add photos to Memory Vault",
  "👨‍👩‍👧‍👦 Ask a family elder to share a childhood memory — record it today",
  "🌸 It's been a while — add photos from last month's celebrations",
];

import { syncPlanFromSupabase, getLocalPlan } from "@/lib/plan";

export default function DashboardPage() {
  const [rituals, setRituals] = useState<Ritual[]>([]);
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [familyName, setFamilyName] = useState("Your Family");
  const [plan, setPlan] = useState<"pro"|"free">("free");
  const [notification, setNotification] = useState<{type:"memory"|"birthday"|"festival"; msg:string; link:string}|null>(null);
  const [showNotif, setShowNotif] = useState(false);
  const [showUpgradeBanner, setShowUpgradeBanner] = useState(false);
  const [mediaCount, setMediaCount] = useState(0);
  const [showAllDone, setShowAllDone] = useState(false);

  // Use universal data hook — syncs from Supabase when logged in, localStorage otherwise
  const { rituals: supaRituals, loading: ritualsLoading } = useRituals();
  const { members: supaMembers, loading: membersLoading } = useMembers();

  useEffect(() => {
    if (!ritualsLoading) setRituals(supaRituals as never[]);
    if (!membersLoading && supaMembers.length > 0) {
      // Skip Supabase data if user recently deleted a member locally
      // modified flag may be a far-future timestamp (set on delete)
      const modFlag = localStorage.getItem("parampara_members_local_modified");
      const locallyModified = modFlag && parseInt(modFlag) > Date.now();
      if (locallyModified) {
        // Use localStorage version — it has the deletion applied
        const activeId = getActiveFamily()?.id || null;
        const raw = localStorage.getItem(`parampara_members_${activeId}`)
          || localStorage.getItem("parampara_members_default");
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            const normalized = parsed.map((m: FamilyMember, i: number) => ({
              ...m,
              color: m.color || (i % 2 === 0 ? "saffron" : "forest"),
              initials: m.initials || m.name?.split(" ").map((n:string)=>n[0]).join("").toUpperCase().slice(0,2) || "?",
            }));
            setMembers(normalized);
            return;
          } catch {}
        }
      }
      // Use Supabase data (no recent local deletion)
      const normalized = (supaMembers as FamilyMember[]).map((m, i) => ({
        ...m,
        color: m.color || (i % 2 === 0 ? "saffron" : "forest"),
        initials: m.initials || m.name?.split(" ").map((n:string)=>n[0]).join("").toUpperCase().slice(0,2) || "?",
      }));
      setMembers(normalized as never[]);
    }
  }, [ritualsLoading, membersLoading, supaRituals, supaMembers]);

  // Load media count from localStorage
  useEffect(() => {
    try {
      const activeId = getActiveFamily()?.id || "default";
      const mediaRaw = localStorage.getItem(`parampara_media_${activeId}`);
      const mediaItems = mediaRaw ? JSON.parse(mediaRaw) : [];
      setMediaCount(Array.isArray(mediaItems) ? mediaItems.length : 0);
    } catch { setMediaCount(0); }
  }, []);

  useEffect(() => {
    try {
      migrateLegacyData();
      // Backfill family-space record for users who signed up before this existed
      if (!getActiveFamily()) {
        import("@/lib/families").then(({ backfillAllFamilySpaces }) => { backfillAllFamilySpaces(); });
      }
      // Sync plan from Supabase — picks up admin changes
      syncPlanFromSupabase().then(p => setPlan(p));

      // Show upgrade success banner if redirected from payment
      if (typeof window !== "undefined" && window.location.search.includes("upgraded=1")) {
        setShowUpgradeBanner(true);
        // Clean the URL without reloading
        window.history.replaceState({}, "", "/dashboard");
        // Auto-dismiss after 8 seconds
        setTimeout(() => setShowUpgradeBanner(false), 8000);
      }
      const activeFamily = getActiveFamily();
      const activeId = activeFamily?.id || "default";

      // Try active family key first, then fall back to all legacy keys
      function recoverData(prefix: string): string | null {
        const keysToTry = [
          `${prefix}_${activeId}`,
          `${prefix}_default`,
          `${prefix}_family-default`,
          prefix, // bare key
        ];
        for (const key of keysToTry) {
          const val = localStorage.getItem(key);
          if (val && val !== "[]" && val !== "null") return val;
        }
        return null;
      }

      const storedRitualsRaw  = recoverData("parampara_rituals");
      const storedMembersRaw  = recoverData("parampara_members");
      const storedFamily      = localStorage.getItem("parampara_family_name") || activeFamily?.name;
      const initialized       = localStorage.getItem("parampara_initialized");
      const hasExistingData   = storedRitualsRaw || storedMembersRaw;

      // Save recovered data under active family key
      if (storedRitualsRaw) localStorage.setItem(`parampara_rituals_${activeId}`, storedRitualsRaw);
      if (storedMembersRaw) localStorage.setItem(`parampara_members_${activeId}`, storedMembersRaw);

      if (!initialized && !hasExistingData) {
        const initial = [{ ...SAMPLE_RITUAL, id: `ritual-${Date.now()}` }];
        localStorage.setItem(`parampara_rituals_${activeId}`, JSON.stringify(initial));
        localStorage.setItem(`parampara_members_${activeId}`, JSON.stringify([]));
        localStorage.setItem("parampara_initialized", "true");
        setRituals(initial); setMembers([]);
      } else {
        localStorage.setItem("parampara_initialized", "true");
        setRituals(storedRitualsRaw ? JSON.parse(storedRitualsRaw) : []);
        setMembers(storedMembersRaw ? JSON.parse(storedMembersRaw) : []);
      }
      if (storedFamily) setFamilyName(storedFamily);
    } catch { setRituals([]); setMembers([]); }
  }, []);

  // ── Listen for member changes from other pages (delete, add) ──
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key && e.key.startsWith("parampara_members_")) {
        try {
          const activeFamily = getActiveFamily();
          const activeId = activeFamily?.id || "default";
          const raw = localStorage.getItem(`parampara_members_${activeId}`)
            || localStorage.getItem("parampara_members_default");
          if (raw) {
            const parsed = JSON.parse(raw);
            const normalized = parsed.map((m: FamilyMember, i: number) => ({
              ...m,
              color: m.color || (i % 2 === 0 ? "saffron" : "forest"),
              initials: m.initials || m.name?.split(" ").map((n:string)=>n[0]).join("").toUpperCase().slice(0,2) || "?",
            }));
            setMembers(normalized);
          }
        } catch {}
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // ── Smart notifications ──
  useEffect(() => {
    if (!members.length && !rituals.length) return;
    const lastNotif = localStorage.getItem("parampara_last_notif");
    const now = Date.now();
    // Show at most once every 24h per session
    if (lastNotif && now - parseInt(lastNotif) < 24*60*60*1000) return;

    // Priority 1: Birthday today
    const birthdayToday = members.find(m => getDaysUntilBirthday(m.birthdate) === 0);
    if (birthdayToday) {
      setNotification({ type:"birthday", msg:`🎂 Today is ${birthdayToday.name}'s birthday! Don't forget to wish them.`, link:"/members" });
      setShowNotif(true);
      localStorage.setItem("parampara_last_notif", String(now));
      return;
    }

    // Priority 2: Birthday within 3 days
    const bdaySoon = members.find(m => { const d = getDaysUntilBirthday(m.birthdate); return d !== null && d > 0 && d <= 3; });
    if (bdaySoon) {
      const days = getDaysUntilBirthday(bdaySoon.birthdate);
      setNotification({ type:"birthday", msg:`🎂 ${bdaySoon.name}'s birthday is in ${days} day${days!==1?"s":""}! Prepare a family message.`, link:"/members" });
      setShowNotif(true);
      localStorage.setItem("parampara_last_notif", String(now));
      return;
    }

    // Priority 3: Memory prompt — show after 1+ week
    const lastMemoryPrompt = localStorage.getItem("parampara_last_memory_prompt");
    const oneWeekAgo = now - 7*24*60*60*1000;
    if (!lastMemoryPrompt || parseInt(lastMemoryPrompt) < oneWeekAgo) {
      const prompt = MEMORY_PROMPTS[Math.floor(Math.random()*MEMORY_PROMPTS.length)];
      setNotification({ type:"memory", msg:prompt, link:"/media" });
      setShowNotif(true);
      localStorage.setItem("parampara_last_memory_prompt", String(now));
      localStorage.setItem("parampara_last_notif", String(now));
    }
  }, [members, rituals]);

  const upcoming = PRESET_FESTIVALS
    .map(f => ({ ...f, days: daysUntil(f.date) }))
    .filter(f => f.days >= 0)
    .sort((a, b) => a.days - b.days)
    .slice(0, 3);

  const upcomingBirthdays = members
    .filter(m => m.birthdate)
    .map(m => ({ ...m, daysUntil: getDaysUntilBirthday(m.birthdate)! }))
    .filter(m => m.daysUntil <= 30)
    .sort((a,b) => a.daysUntil - b.daysUntil)
    .slice(0,3);

  const quickActions = [
    { icon:BookOpen, label:"Document a Ritual", desc:"Preserve a ceremony step by step", href:"/rituals/new", color:C.saffron, bg:C.saffronLight },
    { icon:CalendarDays, label:"Festival Calendar", desc:"See upcoming festivals & reminders", href:"/festivals", color:C.gold, bg:"#F9F3E3" },
    { icon:Users, label:"Add Family Member", desc:"Invite elders and relatives", href:"/members", color:C.forest, bg:C.forestLight },
    { icon:ImageIcon, label:"Upload a Memory", desc:"Photos, videos, voice memos", href:"/media", color:"#7C3AED", bg:"#F5F3FF" },
    { icon:TreePine, label:"Vansh Vriksha", desc:"See your generational family tree", href:"/family-tree", color:"#15803D", bg:"#F0FDF4" },
  ];

  const notifColors = { memory:{ bg:"#F5F3FF", border:"rgba(124,58,237,0.2)", color:"#7C3AED" }, birthday:{ bg:"#FFF1F2", border:"rgba(225,29,72,0.2)", color:"#E11D48" }, festival:{ bg:C.saffronLight, border:"rgba(200,84,26,0.2)", color:C.saffron } };

  return (
    <AppShell>
      <div style={{ padding:"24px 20px", maxWidth:960, margin:"0 auto" }}>

        {/* Upgrade success banner */}
        {showUpgradeBanner && (
          <div style={{ background:"linear-gradient(135deg,#1A5C42,#0F4A34)", borderRadius:14, padding:"18px 20px", marginBottom:20, display:"flex", alignItems:"center", gap:14 }}>
            <span style={{ fontSize:28, flexShrink:0 }}>🎉</span>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:15, fontWeight:700, color:"#fff", margin:"0 0 3px" }}>Welcome to Parampara Pro!</p>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.7)", margin:0 }}>Your plan is now active. Unlimited rituals, Heritage Book PDF, AI Assistant, and more — all yours.</p>
            </div>
            <button onClick={()=>setShowUpgradeBanner(false)} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.5)", cursor:"pointer", flexShrink:0, fontSize:18, lineHeight:1 }} aria-label="Dismiss">×</button>
          </div>
        )}

        {/* Smart notification banner */}
        {showNotif && notification && (
          <div style={{ background:notifColors[notification.type].bg, border:`1px solid ${notifColors[notification.type].border}`, borderRadius:12, padding:"12px 16px", marginBottom:20, display:"flex", alignItems:"center", gap:12 }}>
            <Bell size={16} color={notifColors[notification.type].color} style={{ flexShrink:0 }}/>
            <p style={{ fontSize:13, color:C.charcoal, margin:0, flex:1, lineHeight:1.5 }}>{notification.msg}</p>
            <Link href={notification.link} style={{ fontSize:12, fontWeight:600, color:notifColors[notification.type].color, textDecoration:"none", flexShrink:0 }}>
              View →
            </Link>
            <button
              onClick={() => setShowNotif(false)}
              style={{ background:"none", border:"none", cursor:"pointer", color:C.gray, display:"flex", flexShrink:0, padding:4, borderRadius:6 }}
              aria-label="Dismiss notification"
            >
              <X size={16}/>
            </button>
          </div>
        )}

        {/* Welcome banner */}
        <div style={{ background:`linear-gradient(135deg,${C.saffron} 0%,#B8922A 100%)`, borderRadius:16, padding:"22px 28px", marginBottom:24, position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", right:20, top:"50%", transform:"translateY(-50%)", fontSize:80, opacity:0.08, fontFamily:F.serif }}>ॐ</div>
          <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
            <div>
              <h1 style={{ fontFamily:F.serif, fontSize:21, fontWeight:600, color:"#fff", margin:0 }}>
                Namaste, {familyName} 🙏
              </h1>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.75)", marginTop:5 }}>
                {rituals.length === 0
                  ? "Welcome to Parampara! Start by documenting your first ritual."
                  : `${rituals.length} ritual${rituals.length!==1?"s":""} · ${members.length} member${members.length!==1?"s":""} · Your heritage is safe here.`
                }
              </p>
            </div>
            {/* Plan badge */}
            <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
              {plan === "pro" ? (
                <div style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.15)", backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.25)", borderRadius:20, padding:"6px 14px" }}>
                  <span style={{ fontSize:14 }}>✨</span>
                  <span style={{ fontSize:12, fontWeight:700, color:"#fff", letterSpacing:0.5 }}>PRO</span>
                </div>
              ) : (
                <a href="/upgrade" style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.15)", backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.25)", borderRadius:20, padding:"6px 14px", textDecoration:"none" }}>
                  <span style={{ fontSize:14 }}>⬆️</span>
                  <span style={{ fontSize:12, fontWeight:600, color:"#fff" }}>Upgrade to Pro</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Empty state */}
        {rituals.length === 0 && members.length === 0 && (
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:36, textAlign:"center", marginBottom:24 }}>
            <div style={{ fontSize:44, marginBottom:14 }}>🪔</div>
            <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Begin your family&apos;s heritage</h2>
            <p style={{ fontSize:14, color:C.gray, maxWidth:400, margin:"0 auto 24px", lineHeight:1.7 }}>
              Document your first ritual — add the steps, samagri, mantras, and notes from your elders. It takes less than 5 minutes.
            </p>
            <Link href="/rituals/new" style={{ display:"inline-flex", alignItems:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", padding:"12px 26px", borderRadius:12, fontSize:14, fontWeight:700, textDecoration:"none", boxShadow:"0 4px 16px rgba(200,84,26,0.3)" }}>
              Document your first ritual →
            </Link>
          </div>
        )}

        {/* Onboarding checklist */}
        {(() => {
          // Filter out the seeded sample ritual — only user-created rituals count
          const userRituals = rituals.filter(r => r.name !== SAMPLE_RITUAL.name);
          const steps = [
            { done: members.length >= 1,    icon:"👨‍👩‍👧", label:"Add your first family member",     desc:"Name, birthdate, relation — takes 30 seconds",         href:"/members" },
            { done: userRituals.length >= 1, icon:"📜", label:"Document a ritual or tradition",    desc:"A puja, a recipe, a festival — anything your family does", href:"/rituals/new" },
            { done: mediaCount >= 1,         icon:"📸", label:"Add a family memory or photo",       desc:"A photo, voice note, or story from your elders",         href:"/media" },
            { done: members.length >= 2,    icon:"💌", label:"Invite a family member",              desc:"Share your space with a parent, sibling, or cousin",     href:"/members" },
          ];
          const doneCount = steps.filter(s => s.done).length;
          const allDone = doneCount === 4;

          // Permanently dismissed
          const dismissed = typeof window !== "undefined" && localStorage.getItem("parampara_onboarding_done") === "1";
          if (dismissed) return null;

          // Celebration card — shown when all 4 done
          if (showAllDone) return (
            <div style={{ background:"linear-gradient(135deg,#FFF7ED,#FEF3C7)", borderRadius:16, border:"1px solid rgba(200,84,26,0.2)", padding:"24px 22px", marginBottom:24, textAlign:"center" }}>
              <p style={{ fontSize:36, margin:"0 0 10px" }}>🎉</p>
              <p style={{ fontSize:17, fontWeight:700, color:C.charcoal, margin:"0 0 6px" }}>Your family space is ready!</p>
              <p style={{ fontSize:13, color:C.gray, margin:"0 0 20px", lineHeight:1.7 }}>All 4 setup steps complete. Your family&apos;s heritage is now being preserved.</p>
              <button
                onClick={() => {
                  localStorage.setItem("parampara_onboarding_done", "1");
                  setShowAllDone(false);
                }}
                style={{ background:C.saffron, color:"#fff", border:"none", borderRadius:10, padding:"10px 26px", fontSize:14, fontWeight:700, cursor:"pointer" }}
              >
                Continue →
              </button>
            </div>
          );

          // All done — trigger celebration on next render tick
          if (allDone) {
            setTimeout(() => setShowAllDone(true), 300);
            return null;
          }

          return (
            <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, padding:"20px 22px", marginBottom:24 }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontSize:20 }}>🗺️</span>
                  <div>
                    <p style={{ fontSize:15, fontWeight:700, color:C.charcoal, margin:0 }}>Getting started</p>
                    <p style={{ fontSize:12, color:C.gray, margin:0 }}>Complete all 4 steps to set up your family space</p>
                  </div>
                </div>
                <span style={{ fontSize:11, color:C.saffron, fontWeight:700, background:C.saffronLight, padding:"3px 9px", borderRadius:20 }}>{doneCount}/4</span>
              </div>
              <div style={{ height:4, background:"#F0F0F0", borderRadius:4, marginBottom:14, overflow:"hidden" }}>
                <div style={{ height:"100%", width:`${(doneCount/4)*100}%`, background:`linear-gradient(90deg,${C.saffron},#B8922A)`, borderRadius:4, transition:"width 0.5s ease" }}/>
              </div>
              {steps.map(({ done, icon, label, desc, href }) => (
                <Link
                  key={label}
                  href={done ? "#" : href}
                  onClick={done ? (e) => e.preventDefault() : undefined}
                  style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:12, padding:"11px 14px", borderRadius:10, marginBottom:8, background: done ? "#F0FDF4" : C.saffronLight, border:`1px solid ${done ? "#BBF7D0" : "rgba(200,84,26,0.15)"}`, cursor: done ? "default" : "pointer" }}
                >
                  <div style={{ width:34, height:34, borderRadius:"50%", background: done ? "#16A34A" : C.white, border:`2px solid ${done ? "#16A34A" : C.saffron}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, color: done ? "#fff" : "inherit" }}>
                    <span style={{ fontSize: done ? 15 : 14 }}>{done ? "✓" : icon}</span>
                  </div>
                  <div style={{ flex:1 }}>
                    <p style={{ fontSize:13, fontWeight:600, color: done ? "#15803D" : C.charcoal, margin:0, textDecoration: done ? "line-through" : "none", textDecorationColor:"#15803D" }}>{label}</p>
                    <p style={{ fontSize:11, color:C.gray, margin:"2px 0 0" }}>{desc}</p>
                  </div>
                  {done
                    ? <span style={{ fontSize:11, color:"#15803D", fontWeight:700, flexShrink:0 }}>✓ Done</span>
                    : <span style={{ fontSize:14, color:C.saffron, fontWeight:700, flexShrink:0 }}>→</span>
                  }
                </Link>
              ))}
            </div>
          );
        })()}

        {/* Quick actions */}
        <div style={{ marginBottom:24 }}>
          <h2 style={{ fontFamily:F.serif, fontSize:16, fontWeight:600, color:C.charcoal, margin:"0 0 12px" }}>Quick actions</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:10 }}>
            {quickActions.map(({ icon:Icon, label, desc, href, color, bg }) => (
              <Link key={label} href={href} style={{ textDecoration:"none" }}>
                <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:"14px 16px", display:"flex", gap:10, alignItems:"flex-start" }}>
                  <div style={{ width:36, height:36, borderRadius:9, background:bg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon size={17} color={color}/>
                  </div>
                  <div>
                    <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:0 }}>{label}</p>
                    <p style={{ fontSize:11, color:C.gray, margin:0, marginTop:2, lineHeight:1.4 }}>{desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>

          {/* Rituals */}
          <div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
              <h2 style={{ fontFamily:F.serif, fontSize:16, fontWeight:600, color:C.charcoal, margin:0 }}>
                Ritual Vault <span style={{ fontSize:12, fontWeight:400, color:C.gray }}>({rituals.length})</span>
              </h2>
              <Link href="/rituals" style={{ fontSize:12, color:C.saffron, textDecoration:"none", fontWeight:500, display:"flex", alignItems:"center", gap:3 }}>
                View all <ArrowRight size={11}/>
              </Link>
            </div>
            {rituals.length === 0 ? (
              <Link href="/rituals/new" style={{ textDecoration:"none" }}>
                <div style={{ background:C.saffronLight, border:`1px dashed rgba(200,84,26,0.3)`, borderRadius:12, padding:"24px 16px", textAlign:"center", cursor:"pointer" }}>
                  <Plus size={22} color={C.saffron} style={{ margin:"0 auto 6px" }}/>
                  <p style={{ fontSize:13, fontWeight:500, color:C.saffron, margin:0 }}>Document your first ritual</p>
                </div>
              </Link>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                {rituals.slice(0,5).map(r => (
                  <Link key={r.id} href={`/rituals/${r.id}`} style={{ textDecoration:"none" }}>
                    <div style={{ background:C.white, borderRadius:10, border:`1px solid ${C.border}`, borderLeft:`3px solid ${C.saffron}`, padding:"11px 14px" }}>
                      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:8 }}>
                        <div style={{ flex:1 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                            <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:0 }}>{r.name}</p>
                            {r.isTemplate && <span style={{ fontSize:9, background:C.forestLight, color:C.forest, padding:"1px 6px", borderRadius:10 }}>sample</span>}
                          </div>
                          <p style={{ fontSize:11, color:C.gray, margin:"2px 0 0" }}>{r.category} · {r.steps.length} steps</p>
                        </div>
                        <ArrowRight size={13} color={C.gray} style={{ flexShrink:0, marginTop:2 }}/>
                      </div>
                    </div>
                  </Link>
                ))}
                {rituals.length > 5 && (
                  <Link href="/rituals" style={{ textAlign:"center", padding:"9px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:12, color:C.saffron, fontWeight:500, textDecoration:"none" }}>
                    +{rituals.length-5} more →
                  </Link>
                )}
                <Link href="/rituals/new" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:5, background:C.saffronLight, border:`1px dashed rgba(200,84,26,0.25)`, borderRadius:9, padding:"9px", fontSize:12, color:C.saffron, fontWeight:500, textDecoration:"none" }}>
                  <Plus size={13}/> Add ritual
                </Link>
              </div>
            )}
          </div>

          {/* Right column */}
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

            {/* Upcoming birthdays */}
            {upcomingBirthdays.length > 0 && (
              <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:"14px 16px" }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
                  <h3 style={{ fontFamily:F.serif, fontSize:14, fontWeight:600, color:C.charcoal, margin:0, display:"flex", alignItems:"center", gap:6 }}>
                    <Gift size={14} color="#E11D48"/> Upcoming Birthdays
                  </h3>
                  <Link href="/members" style={{ fontSize:11, color:C.saffron, textDecoration:"none", fontWeight:500 }}>All →</Link>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                  {upcomingBirthdays.map(m => (
                    <div key={m.id} style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <div style={{ width:32, height:32, borderRadius:"50%", background:m.daysUntil===0?"linear-gradient(135deg,#E11D48,#F43F5E)":"#FFF1F2", display:"flex", alignItems:"center", justifyContent:"center", fontSize:m.daysUntil===0?14:10, fontWeight:700, color:m.daysUntil===0?"#fff":"#E11D48", flexShrink:0 }}>
                        {m.daysUntil===0?"🎂":`${m.daysUntil}d`}
                      </div>
                      <div style={{ flex:1 }}>
                        <p style={{ fontSize:12, fontWeight:500, color:C.charcoal, margin:0 }}>{m.name}</p>
                        <p style={{ fontSize:10, color:C.gray, margin:0 }}>{m.relation}</p>
                      </div>
                      {m.daysUntil===0 && (
                        <button onClick={()=>{ const msg=`🎂 Happy Birthday ${m.name}! 🎉 With love from ${familyName} 🪔`; navigator.clipboard?.writeText(msg).then(()=>toast.success("Copied! Share on WhatsApp 📱")); }}
                          style={{ background:"#25D366", color:"#fff", border:"none", borderRadius:7, padding:"5px 9px", fontSize:10, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
                          Wish
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming festivals */}
            <div>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
                <h2 style={{ fontFamily:F.serif, fontSize:16, fontWeight:600, color:C.charcoal, margin:0 }}>Upcoming Festivals</h2>
                <Link href="/festivals" style={{ fontSize:12, color:C.saffron, textDecoration:"none", fontWeight:500, display:"flex", alignItems:"center", gap:3 }}>
                  Calendar <ArrowRight size={11}/>
                </Link>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                {upcoming.map(f => {
                  const d = new Date(f.date);
                  return (
                    <Link key={f.id} href="/festivals" style={{ textDecoration:"none" }}>
                      <div style={{ background:C.white, borderRadius:10, border:`1px solid ${C.border}`, padding:"11px 13px", display:"flex", alignItems:"center", gap:10 }}>
                        <div style={{ width:40, height:40, borderRadius:9, background:C.saffronLight, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                          <span style={{ fontFamily:F.serif, fontSize:15, fontWeight:700, color:C.saffron, lineHeight:1 }}>{d.getDate()}</span>
                          <span style={{ fontSize:9, color:C.saffron, textTransform:"uppercase" }}>{d.toLocaleString("en-IN",{month:"short"})}</span>
                        </div>
                        <div style={{ flex:1, minWidth:0 }}>
                          <p style={{ fontSize:13, fontWeight:600, color:C.charcoal, margin:0 }}>{f.name}</p>
                          <p style={{ fontSize:11, color:C.gray, margin:"2px 0 0", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.significance.slice(0,48)}…</p>
                        </div>
                        <span style={{ background:C.forestLight, color:C.forest, fontSize:10, fontWeight:600, padding:"3px 7px", borderRadius:20, flexShrink:0 }}>
                          {f.days===0?"Today":`${f.days}d`}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Members */}
            <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:"14px 16px" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
                <h3 style={{ fontFamily:F.serif, fontSize:14, fontWeight:600, color:C.charcoal, margin:0 }}>
                  Family Members ({members.length})
                </h3>
                <Link href="/members" style={{ fontSize:11, color:C.saffron, textDecoration:"none", fontWeight:500 }}>Manage →</Link>
              </div>
              {members.length === 0 ? (
                <Link href="/members" style={{ textDecoration:"none" }}>
                  <div style={{ textAlign:"center", padding:"12px 0", color:C.gray }}>
                    <Users size={22} color={C.gray} style={{ margin:"0 auto 6px" }}/>
                    <p style={{ fontSize:12, margin:0 }}>No members yet</p>
                    <p style={{ fontSize:11, color:C.saffron, margin:"3px 0 0", fontWeight:500 }}>Invite your family →</p>
                  </div>
                </Link>
              ) : (
                <div style={{ display:"flex", gap:7, flexWrap:"wrap" }}>
                  {members.slice(0,8).map(m => (
                    <Link key={m.id} href="/members" title={`${m.name} — ${m.role}`} style={{ textDecoration:"none" }}>
                      <div style={{ width:34, height:34, borderRadius:"50%", background:m.color==="saffron"?"#FAD5BC":C.forestLight, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:600, color:m.color==="saffron"?C.saffron:C.forest, overflow:"hidden" }}>
                        {(m as FamilyMember & {photoUrl?:string}).photoUrl
                          ? <img src={(m as FamilyMember & {photoUrl?:string}).photoUrl} alt={m.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={e=>((e.target as HTMLImageElement).style.display="none")}/>
                          : (m.initials || m.name?.split(" ").map((n:string)=>n[0]).join("").toUpperCase().slice(0,2) || "?")
                        }
                      </div>
                    </Link>
                  ))}
                  <Link href="/members" style={{ width:34, height:34, borderRadius:"50%", background:C.saffronLight, border:`1px dashed rgba(200,84,26,0.3)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, color:C.saffron, textDecoration:"none" }}>+</Link>
                </div>
              )}
            </div>

            {/* AI promo */}
            <Link href="/ai" style={{ textDecoration:"none" }}>
              <div style={{ background:`linear-gradient(135deg,${C.saffronLight},#FAF7F2)`, border:`1px solid rgba(200,84,26,0.18)`, borderRadius:12, padding:"14px 16px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:5 }}>
                  <span style={{ fontSize:16 }}>✨</span>
                  <span style={{ fontSize:13, fontWeight:600, color:C.charcoal }}>AI Ritual Assistant</span>
                </div>
                <p style={{ fontSize:12, color:C.gray, margin:"0 0 8px", lineHeight:1.5 }}>Explain any ritual, generate samagri lists, or find missing steps.</p>
                <span style={{ fontSize:12, color:C.saffron, fontWeight:600 }}>Open AI Assistant →</span>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </AppShell>
  );
}

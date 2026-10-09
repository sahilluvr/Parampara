"use client";
import { fullSync } from "@/lib/autoSync";
import { useRituals, useMembers } from "@/lib/useData";
import { getActiveFamily, migrateLegacyData, isRealFamilyId, getInviteLink, canShareInvite } from "@/lib/families";
import HeritageBookCover from "@/components/pricing/HeritageBookCover";
import { petalBurst } from "@/components/ui/Joy";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { PRESET_FESTIVALS, SAMPLE_RITUAL, type Ritual, type FamilyMember } from "@/lib/store";
import Link from "next/link";
import { Plus, ArrowRight, Users, BookOpen, CalendarDays, Image as ImageIcon, X, Gift, Bell, TreePine, UserPlus } from "lucide-react";
import toast from "react-hot-toast";

const F = { serif:"'Bricolage Grotesque',system-ui,sans-serif", sans:"'Inter',system-ui,sans-serif" };
const D = { sindoor:"#D6246E", sindoorLight:"#FCE8F0", ink:"#1C1733", muted:"#625C7A", haldi:"#FFB224", tulsi:"#0F7A73", tulsiLight:"#E3F4F2", paper:"#F8F6FC", line:"#E6E1F0" };

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
  const [userName, setUserName] = useState("");
  useEffect(() => { setUserName(localStorage.getItem("parampara_user_name") || ""); }, []);
  // Celebrate finishing setup
  useEffect(() => {
    if (!showAllDone) return;
    const w = window.innerWidth;
    [0.3, 0.5, 0.7].forEach((f, i) => setTimeout(() => petalBurst(w * f, window.innerHeight * 0.35, 20), i * 160));
  }, [showAllDone]);

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
        const raw = localStorage.getItem(`parampara_members_${activeId}`);
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

      // Active family key first. Legacy keys are only consulted when no real
      // family space is active — otherwise a newly joined family was filled
      // with (and then synced) another family's members and rituals.
      function recoverData(prefix: string): string | null {
        const keysToTry = activeFamily && isRealFamilyId(activeFamily.id)
          ? [`${prefix}_${activeId}`]
          : [`${prefix}_${activeId}`, `${prefix}_default`, `${prefix}_family-default`, prefix];
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
          const raw = localStorage.getItem(`parampara_members_${activeId}`);
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

  const userRituals = rituals.filter(r => r.name !== SAMPLE_RITUAL.name);
  const nextFestival = upcoming[0];
  const nextBirthday = upcomingBirthdays[0];
  const isPro = plan === "pro";

  function copyInviteLink() {
    const active = getActiveFamily();
    if (!canShareInvite(active)) { toast.error("Open Family Spaces to finish setting up your invite link."); return; }
    const link = getInviteLink(active!);
    navigator.clipboard?.writeText(link)
      .then(() => toast.success("Invite link copied — paste it in your family WhatsApp group"))
      .catch(() => toast(link, { duration: 8000 }));
  }

  const shortcuts = [
    { icon:BookOpen, label:"Rituals", href:"/rituals" },
    { icon:Users, label:"Members", href:"/members" },
    { icon:TreePine, label:"Family tree", href:"/family-tree" },
    { icon:CalendarDays, label:"Festivals", href:"/festivals" },
    { icon:ImageIcon, label:"Memories", href:"/media" },
  ];

  const notifColors = { memory:{ bg:"#F6F1FB", border:"rgba(109,74,160,0.2)", color:"#6D4AA0" }, birthday:{ bg:"#FDF1F3", border:"rgba(190,40,70,0.2)", color:"#BE2846" }, festival:{ bg:D.sindoorLight, border:"rgba(214,36,110,0.2)", color:D.sindoor } };

  return (
    <AppShell>
      <div className="dash" style={{ fontFamily:F.sans, color:D.ink }}>

        {showUpgradeBanner && (
          <div role="status" style={{ background:D.tulsi, borderRadius:14, padding:"16px 18px", marginBottom:20, display:"flex", alignItems:"center", gap:14 }}>
            <span style={{ fontSize:26, flexShrink:0 }}>🎉</span>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:15, fontWeight:700, color:"#fff", margin:"0 0 2px" }}>Welcome to Parampara Pro</p>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.8)", margin:0 }}>Your plan is active. The Heritage Book, AI ritual assistant, Mannats and unlimited family spaces are ready to use.</p>
            </div>
            <button onClick={()=>setShowUpgradeBanner(false)} style={{ background:"none", border:"none", color:"rgba(255,255,255,0.7)", cursor:"pointer", fontSize:20, lineHeight:1 }} aria-label="Dismiss">×</button>
          </div>
        )}

        {showNotif && notification && (
          <div style={{ background:notifColors[notification.type].bg, border:`1px solid ${notifColors[notification.type].border}`, borderRadius:12, padding:"11px 14px", marginBottom:20, display:"flex", alignItems:"center", gap:12 }}>
            <Bell size={16} color={notifColors[notification.type].color} style={{ flexShrink:0 }}/>
            <p style={{ fontSize:14, margin:0, flex:1, lineHeight:1.5 }}>{notification.msg}</p>
            <Link href={notification.link} style={{ fontSize:13, fontWeight:600, color:notifColors[notification.type].color, textDecoration:"none", flexShrink:0 }}>Open</Link>
            <button onClick={() => setShowNotif(false)} style={{ background:"none", border:"none", cursor:"pointer", color:D.muted, display:"flex", padding:4 }} aria-label="Dismiss notification"><X size={16}/></button>
          </div>
        )}

        {/* Family banner */}
        <header className="dash-hero">
          <div style={{ minWidth:0, position:"relative", zIndex:1 }}>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.7)", margin:"0 0 6px" }}>Namaste{userName ? `, ${userName.split(" ")[0]}` : ""} 🙏</p>
            <h1 style={{ fontFamily:F.serif, fontSize:"clamp(30px,4.4vw,46px)", fontWeight:800, margin:0, lineHeight:1.02, letterSpacing:"-0.03em", color:"#fff" }}>{familyName}</h1>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginTop:14 }}>
              <span className="dash-stat"><b>{userRituals.length}</b> ritual{userRituals.length===1?"":"s"}</span>
              <span className="dash-stat"><b>{members.length}</b> member{members.length===1?"":"s"}</span>
              {isPro ? <span className="dash-stat" style={{ background:D.haldi, color:D.ink }}><b>Pro</b></span> : <Link href="/upgrade?billing=yearly" className="dash-stat dash-stat-link">Free plan · see Pro</Link>}
            </div>
          </div>
          <div className="dash-head-actions" style={{ position:"relative", zIndex:1 }}>
            <button onClick={copyInviteLink} className="dash-hero-ghost">
              <UserPlus size={16}/> Invite family
            </button>
            <Link href="/rituals/new" className="dash-hero-gold">
              <Plus size={16}/> Save a ritual
            </Link>
          </div>
        </header>

        {/* First-run: tell new people exactly what to do */}
        {members.length === 0 && (
          <div role="region" aria-label="Get started" className="dash-welcome">
            <h2>Let&apos;s set up your family — it takes 2 minutes</h2>
            <p>Add the people closest to you. Your family tree builds itself as you go.</p>
            <ol className="dash-wsteps">
              <li><Link href="/members?add=Self"><span className="n">1</span><span><b>Add yourself</b><small>Your name and a photo</small></span></Link></li>
              <li><Link href="/members?add="><span className="n">2</span><span><b>Add your family</b><small>Mother, father, children, Dadi…</small></span></Link></li>
              <li><button onClick={copyInviteLink}><span className="n">3</span><span><b>Invite them</b><small>Send one link on WhatsApp</small></span></button></li>
            </ol>
          </div>
        )}

        {/* Coming up */}
        <div role="region" aria-label="Coming up" className="dash-upnext">
          {nextFestival ? (
            <Link href="/festivals" className="dash-tile">
              <span className="dash-tile-date"><b>{new Date(nextFestival.date).getDate()}</b>{new Date(nextFestival.date).toLocaleString("en-IN",{month:"short"})}</span>
              <span style={{ minWidth:0 }}>
                <span className="dash-tile-k">{nextFestival.days===0 ? "Today" : `In ${nextFestival.days} day${nextFestival.days===1?"":"s"}`}</span>
                <span className="dash-tile-t">{nextFestival.name}</span>
              </span>
            </Link>
          ) : (
            <Link href="/festivals" className="dash-tile"><span className="dash-tile-ico">🪔</span><span><span className="dash-tile-k">Festivals</span><span className="dash-tile-t">See the calendar</span></span></Link>
          )}
          {nextBirthday ? (
            <Link href="/members" className="dash-tile">
              <span className="dash-tile-ico">🎂</span>
              <span style={{ minWidth:0 }}>
                <span className="dash-tile-k">{nextBirthday.daysUntil===0 ? "Birthday today" : `Birthday in ${nextBirthday.daysUntil} day${nextBirthday.daysUntil===1?"":"s"}`}</span>
                <span className="dash-tile-t">{nextBirthday.name}</span>
              </span>
            </Link>
          ) : (
            <Link href="/members" className="dash-tile">
              <span className="dash-tile-ico">🎂</span>
              <span><span className="dash-tile-k">Birthdays</span><span className="dash-tile-t">Add family birthdays</span></span>
            </Link>
          )}
          {members.length < 2 ? (
            <button onClick={copyInviteLink} className="dash-tile" style={{ textAlign:"left" }}>
              <span className="dash-tile-ico">💌</span>
              <span><span className="dash-tile-k">Better together</span><span className="dash-tile-t">Copy your invite link</span></span>
            </button>
          ) : (
            <Link href="/media" className="dash-tile">
              <span className="dash-tile-ico">🎙</span>
              <span><span className="dash-tile-k">This week</span><span className="dash-tile-t">Record an elder&apos;s story</span></span>
            </Link>
          )}
        </div>

        {/* Getting started */}
        {(() => {
          const steps = [
            { done: members.length >= 1,     label:"Add a family member",       desc:"Pick who they are, type their name — done", href:"/members?add=" },
            { done: userRituals.length >= 1, label:"Save your first ritual",    desc:"A puja, a festival custom, a family recipe", href:"/rituals/new" },
            { done: mediaCount >= 1,         label:"Add a photo or voice note", desc:"From a ceremony, or an elder telling a story", href:"/media" },
            { done: members.length >= 2,     label:"Invite a relative",         desc:"Parents, siblings or cousins can add what they know", href:"/members" },
          ];
          const doneCount = steps.filter(s => s.done).length;
          const dismissed = typeof window !== "undefined" && localStorage.getItem("parampara_onboarding_done") === "1";
          if (dismissed) return null;
          if (showAllDone) return (
            <div className="dash-card" style={{ textAlign:"center", marginBottom:24 }}>
              <p style={{ fontSize:32, margin:"0 0 8px" }}>🎉</p>
              <p style={{ fontSize:17, fontWeight:700, margin:"0 0 6px" }}>Your family space is set up</p>
              <p style={{ fontSize:14, color:D.muted, margin:"0 0 18px" }}>Keep adding rituals as they happen — every festival is a chance to save one.</p>
              <button onClick={() => { localStorage.setItem("parampara_onboarding_done", "1"); setShowAllDone(false); }} className="pp-btn-primary" style={{ display:"inline-block", padding:"10px 24px", fontSize:14 }}>Done</button>
            </div>
          );
          if (doneCount === 4) { setTimeout(() => setShowAllDone(true), 300); return null; }
          return (
            <div role="region" className="dash-card" style={{ marginBottom:24 }} aria-label="Getting started">
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, marginBottom:12 }}>
                <h2 style={{ fontSize:16, fontWeight:700, margin:0 }}>Set up your family space</h2>
                <span style={{ fontSize:13, color:D.muted }}>{doneCount} of 4 done</span>
              </div>
              <div style={{ height:6, background:"#ECE6F6", borderRadius:6, marginBottom:8, overflow:"hidden" }}>
                <div style={{ height:"100%", width:`${(doneCount/4)*100}%`, background:D.tulsi, borderRadius:6, transition:"width .4s ease" }}/>
              </div>
              <ol style={{ listStyle:"none", padding:0, margin:0 }}>
                {steps.map((st, i) => (
                  <li key={st.label}>
                    <Link href={st.done ? "#" : st.href} onClick={st.done ? (e) => e.preventDefault() : undefined} className={`dash-step${st.done ? " is-done" : ""}`} aria-disabled={st.done}>
                      <span className="dash-step-n">{st.done ? "✓" : i + 1}</span>
                      <span style={{ flex:1, minWidth:0 }}>
                        <span style={{ display:"block", fontSize:14, fontWeight:600 }}>{st.label}</span>
                        <span style={{ display:"block", fontSize:13, color:D.muted, marginTop:1 }}>{st.desc}</span>
                      </span>
                      {!st.done && <ArrowRight size={16} color={D.sindoor} style={{ flexShrink:0 }}/>}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          );
        })()}

        <div className="dash-main">
          {/* Ritual vault */}
          <div role="region" aria-label="Ritual vault">
            <div className="dash-sec-head">
              <h2>Ritual vault</h2>
              <Link href="/rituals">View all <ArrowRight size={13}/></Link>
            </div>
            {rituals.length === 0 ? (
              <Link href="/rituals/new" className="dash-empty">
                <span style={{ fontSize:34 }}>📜</span>
                <span style={{ fontSize:16, fontWeight:700, color:D.ink }}>Save your first ritual</span>
                <span style={{ fontSize:14, color:D.muted, maxWidth:340, lineHeight:1.55 }}>Write down the steps, samagri and mantras the way your elders do it. Five minutes now saves a phone call at 2 AM later.</span>
              </Link>
            ) : (
              <div className="dash-card" style={{ padding:0, overflow:"hidden" }}>
                {rituals.slice(0,6).map(r => (
                  <Link key={r.id} href={`/rituals/${r.id}`} className="dash-row">
                    <span className="dash-row-ico">{r.category?.toLowerCase().includes("festival") ? "🪔" : r.category?.toLowerCase().includes("samskar") ? "🌼" : "📜"}</span>
                    <span style={{ flex:1, minWidth:0 }}>
                      <span style={{ display:"flex", alignItems:"center", gap:6 }}>
                        <span style={{ fontSize:15, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{r.name}</span>
                        {r.isTemplate && <span style={{ fontSize:11, background:D.tulsiLight, color:D.tulsi, padding:"1px 7px", borderRadius:999, flexShrink:0 }}>sample</span>}
                      </span>
                      <span style={{ display:"block", fontSize:13, color:D.muted, marginTop:2 }}>{r.category} · {r.steps.length} step{r.steps.length===1?"":"s"}</span>
                    </span>
                    <ArrowRight size={15} color="#A9A3C2" style={{ flexShrink:0 }}/>
                  </Link>
                ))}
                <Link href="/rituals/new" className="dash-row" style={{ color:D.sindoor, fontWeight:600, fontSize:14, justifyContent:"center" }}>
                  <Plus size={15}/> Save another ritual
                </Link>
              </div>
            )}

            <nav aria-label="Shortcuts" className="dash-shortcuts">
              {shortcuts.map(({ icon:Icon, label, href }) => (
                <Link key={label} href={href}><Icon size={18} color={D.sindoor}/>{label}</Link>
              ))}
            </nav>
          </div>

          {/* Side */}
          <aside style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {!isPro && (
              <Link href="/upgrade?billing=yearly" className="dash-pro">
                <HeritageBookCover familyName={familyName} width={84}/>
                <span style={{ minWidth:0 }}>
                  <span style={{ display:"block", fontSize:15, fontWeight:700, color:"#fff", lineHeight:1.35 }}>
                    {userRituals.length > 0
                      ? `Turn your ${userRituals.length} ritual${userRituals.length===1?"":"s"} into ${familyName}'s Heritage Book`
                      : `Give ${familyName} a Heritage Book`}
                  </span>
                  <span style={{ display:"block", fontSize:13, color:"rgba(255,255,255,0.72)", margin:"6px 0 10px", lineHeight:1.5 }}>Print-ready book, AI ritual help and Mannats with Pro.</span>
                  <span style={{ display:"inline-block", fontSize:13, fontWeight:700, color:D.ink, background:D.haldi, padding:"6px 12px", borderRadius:8 }}>See Pro</span>
                </span>
              </Link>
            )}

            <div role="region" className="dash-card" aria-label="Family members">
              <div className="dash-sec-head" style={{ marginBottom:12 }}>
                <h2 style={{ fontSize:16 }}>Family</h2>
                <Link href="/members">Manage</Link>
              </div>
              {members.length === 0 ? (
                <p style={{ fontSize:14, color:D.muted, margin:0 }}>No one here yet. <Link href="/members" style={{ color:D.sindoor, fontWeight:600 }}>Add a family member</Link></p>
              ) : (
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  {members.slice(0,10).map(m => (
                    <Link key={m.id} href="/members" title={`${m.name}${m.relation ? ` — ${m.relation}` : ""}`} className="dash-avatar" style={{ background:m.color==="saffron"?"#FAD3E3":D.tulsiLight, color:m.color==="saffron"?D.sindoor:D.tulsi }}>
                      {(m as FamilyMember & {photoUrl?:string}).photoUrl
                        ? <img src={(m as FamilyMember & {photoUrl?:string}).photoUrl} alt={m.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={e=>((e.target as HTMLImageElement).style.display="none")}/>
                        : (m.initials || m.name?.split(" ").map((n:string)=>n[0]).join("").toUpperCase().slice(0,2) || "?")}
                    </Link>
                  ))}
                  <button onClick={copyInviteLink} className="dash-avatar" style={{ background:"#fff", border:`1.5px dashed ${D.line}`, color:D.sindoor, cursor:"pointer" }} aria-label="Copy invite link"><UserPlus size={15}/></button>
                </div>
              )}
              {nextBirthday && nextBirthday.daysUntil === 0 && (
                <button onClick={()=>{ const msg=`🎂 Happy Birthday ${nextBirthday.name}! 🎉 With love from ${familyName} 🪔`; navigator.clipboard?.writeText(msg).then(()=>toast.success("Birthday wish copied — share it on WhatsApp")); }}
                  className="pp-btn-secondary" style={{ marginTop:14, width:"100%", fontSize:14, padding:"10px" }}>
                  <Gift size={14} style={{ verticalAlign:"-2px", marginRight:6 }}/>Copy a wish for {nextBirthday.name}
                </button>
              )}
            </div>

            <div role="region" className="dash-card" aria-label="Upcoming festivals">
              <div className="dash-sec-head" style={{ marginBottom:8 }}>
                <h2 style={{ fontSize:16 }}>Festivals</h2>
                <Link href="/festivals">Calendar</Link>
              </div>
              {upcoming.map(f => (
                <Link key={f.id} href="/festivals" className="dash-fest">
                  <span style={{ fontSize:14, fontWeight:600, flex:1, minWidth:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{f.name}</span>
                  <span style={{ fontSize:13, color:D.muted, flexShrink:0 }}>{f.days===0 ? "Today" : `${new Date(f.date).toLocaleString("en-IN",{day:"numeric",month:"short"})} · ${f.days}d`}</span>
                </Link>
              ))}
            </div>

            {isPro && (
              <Link href="/ai" className="dash-card" style={{ textDecoration:"none", color:D.ink, display:"block" }}>
                <span style={{ display:"block", fontSize:15, fontWeight:700, marginBottom:4 }}>✨ Ask the ritual assistant</span>
                <span style={{ display:"block", fontSize:13, color:D.muted, lineHeight:1.5 }}>Samagri lists, meanings, missing steps.</span>
              </Link>
            )}
          </aside>
        </div>
      </div>

      <style>{`
        .dash { padding:28px 20px 48px; max-width:1040px; margin:0 auto; }
        .dash-hero { display:flex; align-items:flex-end; justify-content:space-between; gap:20px; flex-wrap:wrap; margin-bottom:18px; padding:28px; border-radius:24px; background-color:#120C2E; background-image:radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.6px); background-size:20px 20px; position:relative; overflow:hidden; }
        .dash-hero::after { content:""; position:absolute; right:-80px; top:-120px; width:360px; height:360px; border-radius:50%; background:radial-gradient(circle, rgba(214,36,110,0.35), transparent 65%); }
        .dash-stat { font-size:13px; color:rgba(255,255,255,0.85); background:rgba(255,255,255,0.1); padding:5px 12px; border-radius:999px; text-decoration:none; }
        .dash-stat b { color:#fff; font-weight:800; }
        .dash-stat-link:hover { background:rgba(255,255,255,0.18); }
        .dash-hero-gold, .dash-hero-ghost { display:inline-flex; align-items:center; gap:8px; padding:12px 18px; border-radius:12px; font-size:14px; font-weight:700; text-decoration:none; cursor:pointer; font-family:inherit; border:none; }
        .dash-hero-gold { background:${D.haldi}; color:#120C2E; }
        .dash-hero-gold:hover { background:#FFC24D; }
        .dash-hero-ghost { background:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.22); }
        .dash-hero-ghost:hover { background:rgba(255,255,255,0.16); }
        .dash-hero-gold:focus-visible, .dash-hero-ghost:focus-visible, .dash-stat-link:focus-visible { outline:3px solid ${D.haldi}; outline-offset:2px; }
        .dash-head-actions { display:flex; gap:10px; flex-wrap:wrap; }
        .dash-welcome { background:#FFF4DC; border:2px solid #FFB224; border-radius:24px; padding:24px; margin-bottom:20px; animation:dwIn .5s cubic-bezier(.2,.7,.2,1) both; }
        .dash-welcome h2 { font-family:${F.serif}; font-weight:800; font-size:clamp(22px,3vw,28px); letter-spacing:-0.02em; margin:0 0 6px; }
        .dash-welcome p { margin:0 0 16px; color:${D.muted}; font-size:16px; }
        .dash-wsteps { list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
        .dash-wsteps a, .dash-wsteps button { display:flex; gap:12px; align-items:center; width:100%; text-align:left; background:#fff; border:1.5px solid #FFE1A3; border-radius:18px; padding:16px; text-decoration:none; color:${D.ink}; cursor:pointer; font-family:inherit; transition:transform .2s ease, border-color .2s ease; }
        .dash-wsteps a:hover, .dash-wsteps button:hover { transform:translateY(-3px); border-color:#D6246E; }
        .dash-wsteps .n { width:40px; height:40px; border-radius:50%; background:#D6246E; color:#fff; display:flex; align-items:center; justify-content:center; font-family:${F.serif}; font-weight:800; font-size:18px; flex-shrink:0; }
        .dash-wsteps b { display:block; font-size:16px; } .dash-wsteps small { display:block; color:${D.muted}; font-size:13px; margin-top:2px; }
        @keyframes dwIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
        @media (max-width:760px) { .dash-wsteps { grid-template-columns:1fr; } }
        .dash-upnext { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:24px; }
        .dash-tile { display:flex; align-items:center; gap:12px; background:#fff; border:1px solid ${D.line}; border-radius:18px; padding:14px 16px; text-decoration:none; color:${D.ink}; font-family:inherit; cursor:pointer; min-width:0; }
        .dash-tile:hover { border-color:#CFC6E6; }
        .dash-tile:focus-visible, .dash-row:focus-visible, .dash-step:focus-visible, .dash-pro:focus-visible { outline:3px solid ${D.haldi}; outline-offset:2px; }
        .dash-tile-ico { width:40px; height:40px; border-radius:10px; background:${D.paper}; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; }
        .dash-tile-date { width:40px; height:40px; border-radius:10px; background:${D.sindoorLight}; color:${D.sindoor}; display:flex; flex-direction:column; align-items:center; justify-content:center; font-size:10px; flex-shrink:0; line-height:1.1; }
        .dash-tile-date b { font-family:${F.serif}; font-size:16px; }
        .dash-tile-k { display:block; font-size:12px; color:${D.muted}; }
        .dash-tile-t { display:block; font-size:15px; font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .dash-card { background:#fff; border:1px solid ${D.line}; border-radius:20px; padding:18px 18px; }
        .dash-step { display:flex; align-items:center; gap:12px; padding:12px 4px; text-decoration:none; color:${D.ink}; border-top:1px solid #EFEAF8; }
        .dash-step.is-done { opacity:.6; cursor:default; }
        .dash-step-n { width:28px; height:28px; border-radius:50%; border:1.5px solid ${D.line}; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; color:${D.muted}; flex-shrink:0; }
        .dash-step.is-done .dash-step-n { background:${D.tulsi}; border-color:${D.tulsi}; color:#fff; }
        .dash-main { display:grid; grid-template-columns:minmax(0,1.7fr) minmax(0,1fr); gap:20px; align-items:start; }
        .dash-sec-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }
        .dash-sec-head h2 { font-family:${F.serif}; font-size:22px; font-weight:800; letter-spacing:-0.02em; margin:0; }
        .dash-sec-head a { font-size:13px; color:${D.sindoor}; text-decoration:none; font-weight:600; display:inline-flex; align-items:center; gap:4px; }
        .dash-row { display:flex; align-items:center; gap:12px; padding:14px 16px; text-decoration:none; color:${D.ink}; border-top:1px solid #EFEAF8; }
        .dash-row:first-child { border-top:none; }
        .dash-row:hover { background:#FAF8FE; }
        .dash-row-ico { width:36px; height:36px; border-radius:10px; background:${D.paper}; display:flex; align-items:center; justify-content:center; font-size:18px; flex-shrink:0; }
        .dash-empty { display:flex; flex-direction:column; align-items:center; text-align:center; gap:8px; padding:36px 20px; background:#fff; border:1.5px dashed #D9D1EC; border-radius:16px; text-decoration:none; }
        .dash-shortcuts { display:grid; grid-template-columns:repeat(5,1fr); gap:8px; margin-top:16px; }
        .dash-shortcuts a { display:flex; flex-direction:column; align-items:center; gap:6px; padding:12px 6px; background:#fff; border:1px solid ${D.line}; border-radius:12px; font-size:12px; font-weight:600; color:${D.ink}; text-decoration:none; text-align:center; }
        .dash-shortcuts a:hover { border-color:#CFC6E6; }
        .dash-pro { display:flex; gap:16px; align-items:center; background:${D.ink}; border-radius:16px; padding:20px 18px 20px 22px; text-decoration:none; }
        .dash-avatar { width:38px; height:38px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; text-decoration:none; overflow:hidden; border:none; font-family:inherit; }
        .dash-fest { display:flex; align-items:center; gap:10px; padding:10px 0; border-top:1px solid #EFEAF8; text-decoration:none; color:${D.ink}; }
        .dash-fest:first-of-type { border-top:none; }
        @media (max-width: 860px) {
          .dash-main { grid-template-columns:1fr; }
          .dash-upnext { grid-template-columns:1fr; }
        }
        @media (max-width: 520px) {
          .dash { padding:20px 14px 40px; }
          .dash-head-actions { width:100%; }
          .dash-head-actions > * { flex:1; justify-content:center; }
          .dash-shortcuts { grid-template-columns:repeat(5,1fr); gap:6px; }
          .dash-shortcuts a { font-size:11px; padding:10px 2px; }
        }
      `}</style>
    </AppShell>
  );
}

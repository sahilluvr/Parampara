"use client";
import { getUserFast } from "@/lib/authCache";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, BookOpen, CalendarDays, Image as ImageIcon, Users,
  Sparkles, LogOut, Settings, Menu, X, Bell, Plus, Home, Mic, Heart, TreePine
} from "lucide-react";
import { migrateLegacyData, getActiveFamily, getAllFamilies, setActiveFamily, ensureLocalOwner, backfillAllFamilySpaces } from "@/lib/families";
import { processPendingInvite } from "@/lib/invite";
import toast from "react-hot-toast";
import UpgradeNudge from "@/components/billing/UpgradeNudge";
import { syncPlanFromSupabase, getLocalPlan } from "@/lib/plan";
import AddToHomeScreen from "@/components/ui/AddToHomeScreen";
import { getNotifications, markAllRead, markRead, getUnreadCount, type Notification } from "@/lib/notifications";

const C = { saffron:"#D6246E", saffronLight:"#FCE8F0", border:"rgba(122,63,217,0.1)", ivory:"#F8F6FC", charcoal:"#1C1733", gray:"#625C7A", white:"#fff", forestLight:"#E3F4F2", forest:"#0F7A73" };
const F = { serif:"'Bricolage Grotesque',system-ui,sans-serif", sans:"'Inter',system-ui,sans-serif" };

function PlanBadge() {
  const [plan, setPlan] = useState<"pro"|"free">("free");
  useEffect(() => {
    setPlan(getLocalPlan());
    syncPlanFromSupabase().then(p => setPlan(p));
  }, []);
  if (plan === "pro") {
    return (
      <div style={{ margin:"8px 12px", padding:"10px 12px", background:"rgba(255,178,36,0.12)", borderRadius:12, display:"flex", alignItems:"center", gap:10 }}>
        <span style={{ fontSize:11, fontWeight:800, color:"#120C2E", background:"#FFB224", padding:"2px 8px", borderRadius:999 }}>Pro</span>
        <span style={{ fontSize:12, color:"rgba(255,255,255,0.75)" }}>All features unlocked</span>
      </div>
    );
  }
  return (
    <Link href="/upgrade?billing=yearly" className="shell-pro" style={{ margin:"8px 12px", padding:"12px 14px", background:"#FFB224", borderRadius:14, display:"block", textDecoration:"none" }}>
      <span style={{ display:"block", fontSize:13, fontWeight:800, color:"#120C2E" }}>Get your Heritage Book</span>
      <span style={{ display:"block", fontSize:12, color:"#2C2163", marginTop:2 }}>Upgrade to Pro</span>
    </Link>
  );
}

// Grouped so the 12 destinations are scannable; `pro` marks what Pro unlocks.
const NAV_GROUPS: { title: string; items: { href: string; icon: typeof LayoutDashboard; label: string; pro?: boolean }[] }[] = [
  { title: "Home", items: [
    { href:"/dashboard",      icon:LayoutDashboard, label:"Dashboard" },
  ]},
  { title: "Family", items: [
    { href:"/members",        icon:Users,           label:"Family Members" },
    { href:"/family-tree",    icon:TreePine,        label:"Family Tree" },
    { href:"/spaces",         icon:Home,            label:"Family Spaces" },
  ]},
  { title: "Traditions", items: [
    { href:"/rituals",        icon:BookOpen,        label:"Ritual Vault" },
    { href:"/festivals",      icon:CalendarDays,    label:"Festivals" },
    { href:"/calendar",       icon:CalendarDays,    label:"Family Calendar" },
    { href:"/mannats",        icon:Heart,           label:"Mannats", pro:true },
  ]},
  { title: "Memories", items: [
    { href:"/media",          icon:ImageIcon,       label:"Memory Vault" },
    { href:"/voice-archive",  icon:Mic,             label:"Voice Archive" },
    { href:"/heritage-book",  icon:BookOpen,        label:"Heritage Book", pro:true },
    { href:"/ai",             icon:Sparkles,        label:"AI Assistant", pro:true },
  ]},
];
const NAV = NAV_GROUPS.flatMap(g => g.items);

function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifs, setNotifs] = useState<Notification[]>([]);
  const [unread, setUnread] = useState(0);
  const C2 = { saffron:"#D6246E", saffronLight:"#FCE8F0", border:"rgba(122,63,217,0.15)", charcoal:"#1C1733", gray:"#625C7A", white:"#fff", ivory:"#F8F6FC" };

  function refresh() {
    const n = getNotifications();
    setNotifs(n);
    setUnread(getUnreadCount());
  }

  useEffect(() => {
    refresh();
    window.addEventListener("parampara_notification", refresh);
    // Also refresh on storage change (other tabs)
    window.addEventListener("storage", (e) => { if (e.key === "parampara_notifications") refresh(); });
    return () => { window.removeEventListener("parampara_notification", refresh); };
  }, []);

  function handleOpen() { setOpen(o => !o); }
  function handleMarkAll() { markAllRead(); refresh(); }

  function timeAgo(d: string) {
    const diff = Date.now() - new Date(d).getTime();
    const m = Math.floor(diff/60000);
    if (m < 1) return "Just now";
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m/60);
    if (h < 24) return `${h}h ago`;
    return `${Math.floor(h/24)}d ago`;
  }

  const typeEmoji: Record<string,string> = { member_added:"👤", invite_joined:"🎉", ritual_added:"📜", system:"🔔" };

  return (
    <div style={{ position:"relative" }}>
      <button onClick={handleOpen}
        style={{ background:"none", border:"none", cursor:"pointer", color:C2.gray, display:"flex", padding:4, position:"relative" }}>
        <Bell size={18}/>
        {unread > 0 && (
          <span style={{ position:"absolute", top:-3, right:-3, width:16, height:16, borderRadius:"50%", background:"#DC2626", color:"#fff", fontSize:9, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", lineHeight:1 }}>
            {unread > 9 ? "9+" : unread}
          </span>
        )}
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div onClick={()=>setOpen(false)} style={{ position:"fixed", inset:0, zIndex:98 }}/>
          {/* Dropdown */}
          <div style={{ position:"absolute", top:36, right:-8, width:320, maxWidth:"calc(100vw - 32px)", background:C2.white, borderRadius:16, border:`1px solid ${C2.border}`, boxShadow:"0 12px 40px rgba(0,0,0,0.12)", zIndex:99, overflow:"hidden" }}>
            {/* Header */}
            <div style={{ padding:"14px 16px", borderBottom:`1px solid ${C2.border}`, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <p style={{ fontSize:13, fontWeight:700, color:C2.charcoal, margin:0 }}>Notifications {unread > 0 && <span style={{ background:"#DC2626", color:"#fff", fontSize:9, fontWeight:700, padding:"1px 6px", borderRadius:10, marginLeft:6 }}>{unread}</span>}</p>
              {unread > 0 && <button onClick={handleMarkAll} style={{ fontSize:11, color:C2.saffron, fontWeight:600, background:"none", border:"none", cursor:"pointer" }}>Mark all read</button>}
            </div>
            {/* List */}
            <div style={{ maxHeight:320, overflowY:"auto" }}>
              {notifs.length === 0 ? (
                <div style={{ padding:"32px 20px", textAlign:"center" }}>
                  <p style={{ fontSize:24, margin:"0 0 8px" }}>🔔</p>
                  <p style={{ fontSize:13, color:C2.gray, margin:0 }}>No notifications yet</p>
                </div>
              ) : notifs.map(n => (
                <div key={n.id} onClick={()=>{ markRead(n.id); refresh(); }}
                  style={{ padding:"12px 16px", borderBottom:`1px solid rgba(0,0,0,0.04)`, background:n.read?"transparent":C2.saffronLight, cursor:"pointer", display:"flex", gap:10, alignItems:"flex-start" }}>
                  <span style={{ fontSize:18, flexShrink:0 }}>{typeEmoji[n.type]||"🔔"}</span>
                  <div style={{ flex:1, minWidth:0 }}>
                    <p style={{ fontSize:13, fontWeight:n.read?400:600, color:C2.charcoal, margin:"0 0 2px", lineHeight:1.4 }}>{n.title}</p>
                    <p style={{ fontSize:11, color:C2.gray, margin:"0 0 3px", lineHeight:1.4 }}>{n.body}</p>
                    <p style={{ fontSize:10, color:C2.gray, margin:0, opacity:0.6 }}>{timeAgo(n.createdAt)}</p>
                  </div>
                  {!n.read && <div style={{ width:7, height:7, borderRadius:"50%", background:"#DC2626", flexShrink:0, marginTop:4 }}/>}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [familyName, setFamilyName] = useState("Family");
  const [familyCount, setFamilyCount] = useState(1);
  const [isProPlan, setIsProPlan] = useState(true); // avoid flashing Pro tags before plan loads

  useEffect(() => {
    // Migrate legacy single-family data to new multi-family system
    migrateLegacyData();
    // Sync plan from Supabase on every load (catches admin changes)
    setIsProPlan(getLocalPlan() === "pro");
    syncPlanFromSupabase().then(p => setIsProPlan(p === "pro"));
    const active = getActiveFamily();
    if (active) setFamilyName(active.name);
    else {
      const fn = localStorage.getItem("parampara_family_name");
      if (fn) setFamilyName(fn);
    }
    setFamilyCount(getAllFamilies().length);
  }, [pathname]); // refresh on route change

  // Keep the sidebar in step when families change (join, leave, switch, rename)
  useEffect(() => {
    function onFamiliesChanged() {
      const active = getActiveFamily();
      if (active) setFamilyName(active.name);
      setFamilyCount(getAllFamilies().length);
    }
    window.addEventListener("parampara_families_changed", onFamiliesChanged);
    return () => window.removeEventListener("parampara_families_changed", onFamiliesChanged);
  }, []);

  // Once per page load: scope local data to the signed-in account, finish any
  // invite that was started while signed out (signup → verify, Google sign-in,
  // "sign in" detour), and refresh the family list from Supabase so invite
  // codes, names and roles are never stale.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        if (!url || !key) return;
        const { createBrowserClient } = await import("@supabase/ssr");
        const sb = createBrowserClient(url, key);
        const { data: { user } } = await getUserFast(sb as unknown as import("@supabase/supabase-js").SupabaseClient);
        if (!user || cancelled) return;

        const wasReset = ensureLocalOwner(user.id);
        if (!localStorage.getItem("parampara_user_id")) localStorage.setItem("parampara_user_id", user.id);

        let joinedName: string | null = null;
        try {
          const joined = await processPendingInvite();
          if (joined && !joined.alreadyMember) joinedName = joined.name;
          else if (joined) toast.success(`You're already in ${joined.name} — switched to it ✅`);
        } catch (err) {
          toast.error(err instanceof Error ? err.message : "We couldn't finish joining the family. Please open the invite link again.", { duration: 7000 });
        }

        const lastRefresh = parseInt(sessionStorage.getItem("parampara_spaces_refreshed_at") || "0");
        if (wasReset || joinedName || Date.now() - lastRefresh > 5 * 60 * 1000) {
          await backfillAllFamilySpaces();
          sessionStorage.setItem("parampara_spaces_refreshed_at", String(Date.now()));
        }
        if (cancelled) return;

        if (joinedName) {
          toast.success(`Joined ${joinedName}! 🎉`);
          window.location.href = "/dashboard";
        } else if (wasReset) {
          // Page rendered with the previous account's cached data — reload cleanly
          window.location.reload();
        }
      } catch (e) {
        console.warn("AppShell account sync failed:", e);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);
  function onNav() { setMobileOpen(false); }

  async function handleSignOut() {
    if (!confirm("Sign out of Parampara?")) return;
    // Previously this only cleared a few localStorage keys and never ended the
    // Supabase session — the user stayed signed in (and invite links opened
    // "signed out" still joined as the old account).
    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (url && key) {
        const { createBrowserClient } = await import("@supabase/ssr");
        await createBrowserClient(url, key).auth.signOut();
      }
    } catch (e) { console.warn("signOut failed:", e); }
    localStorage.removeItem("parampara_initialized"); localStorage.removeItem("parampara_user_email"); localStorage.removeItem("parampara_user_name");
    sessionStorage.removeItem("parampara_spaces_refreshed_at");
    window.location.href = "/";
  }

  // Dark indigo sidebar: the app's navigation chrome recedes and the
  // content area (light) carries the family's information.
  const Sidebar = ({ onClose }: { onClose?: () => void }) => (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"#120C2E", color:"#fff" }}>
      <div style={{ padding:"18px 16px 14px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <Link href="/dashboard" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
          <Image src="/logo.png" alt="OurParampara" width={34} height={34} style={{ borderRadius:10, objectFit:"cover" }}/>
          <span style={{ fontFamily:F.serif, fontSize:18, fontWeight:800, color:"#fff", letterSpacing:"-0.02em" }}>OurParampara</span>
        </Link>
        {onClose && (
          <button onClick={onClose} aria-label="Close menu" style={{ background:"none", border:"none", cursor:"pointer", color:"rgba(255,255,255,0.7)", display:"flex" }}>
            <X size={20}/>
          </button>
        )}
      </div>

      {/* Active family — click to manage spaces */}
      <Link href="/spaces" className="shell-fam" style={{ margin:"4px 12px 6px", padding:"10px 12px", background:"rgba(255,255,255,0.06)", borderRadius:14, display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
        <div style={{ width:34, height:34, borderRadius:10, background:"#D6246E", display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, color:"#fff", fontWeight:800, flexShrink:0, fontFamily:F.serif }}>
          {familyName.charAt(0).toUpperCase()}
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ fontSize:13, fontWeight:700, color:"#fff", margin:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{familyName}</p>
          <p style={{ fontSize:11, color:"rgba(255,255,255,0.55)", margin:0 }}>{familyCount} space{familyCount!==1?"s":""} · switch</p>
        </div>
      </Link>

      <nav aria-label="Main" style={{ flex:1, padding:"4px 10px 8px", overflowY:"auto" }}>
        {NAV_GROUPS.map(group => (
          <div key={group.title} style={{ marginTop:12 }}>
            {group.title !== "Home" && <p style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,0.4)", padding:"4px 12px 4px", margin:0 }}>{group.title}</p>}
            {group.items.map(({ href, icon:Icon, label, pro }) => {
              const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
              return (
                <Link key={href} href={href} onClick={onNav} aria-current={active ? "page" : undefined} className={`shell-nav${active ? " is-active" : ""}`} style={{
                  display:"flex", alignItems:"center", gap:11, padding:"9px 12px",
                  borderRadius:12, marginBottom:2, textDecoration:"none",
                  background: active ? "#fff" : "transparent",
                  color: active ? "#120C2E" : "rgba(255,255,255,0.78)",
                  fontWeight: active ? 700 : 500,
                  fontSize: 14, fontFamily: F.sans,
                }}>
                  <Icon size={17} style={{ flexShrink:0, color: active ? "#D6246E" : "inherit" }}/>
                  <span style={{ flex:1 }}>{label}</span>
                  {pro && !isProPlan && <span style={{ fontSize:10, fontWeight:800, color:"#120C2E", background:"#FFB224", padding:"1px 7px", borderRadius:999 }}>Pro</span>}
                </Link>
              );
            })}
          </div>
        ))}
        <style>{`
          .shell-nav:not(.is-active):hover{background:rgba(255,255,255,0.08) !important;color:#fff !important}
          .shell-nav:focus-visible,.shell-fam:focus-visible,.shell-pro:focus-visible,.shell-foot:focus-visible{outline:3px solid #FFB224;outline-offset:1px}
          .shell-fam:hover{background:rgba(255,255,255,0.1) !important}
          .shell-foot:hover{color:#fff !important}
        `}</style>
      </nav>

      <div style={{ padding:"8px 0 12px", borderTop:"1px solid rgba(255,255,255,0.08)" }}>
        <PlanBadge/>
        <div style={{ padding:"0 12px" }}>
          {[
            { href:"/account", icon:Settings, label:"Account & Plan" },
            { href:"/family-settings", icon:Settings, label:"Family Settings" },
          ].map(({ href, icon:Icon, label }) => (
            <Link key={href} href={href} onClick={onNav} className="shell-foot" style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 12px", borderRadius:8, textDecoration:"none", fontSize:13, color:"rgba(255,255,255,0.6)", marginBottom:1 }}>
              <Icon size={14}/> {label}
            </Link>
          ))}
          <button onClick={handleSignOut} className="shell-foot" style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 12px", borderRadius:8, background:"none", border:"none", cursor:"pointer", fontSize:13, color:"rgba(255,255,255,0.6)", fontFamily:F.sans, width:"100%" }}>
            <LogOut size={14}/> Sign out
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div style={{ display:"flex", height:"100vh", background:C.ivory, overflow:"hidden" }}>

        {/* Desktop sidebar */}
        <aside style={{ width:240, flexShrink:0 }} className="sidebar-desktop">
          <Sidebar/>
        </aside>

        {/* Mobile overlay sidebar */}
        {mobileOpen && (
          <div style={{ position:"fixed", inset:0, zIndex:500, display:"flex" }}>
            <div style={{ flex:1, background:"rgba(0,0,0,0.5)" }} onClick={()=>setMobileOpen(false)}/>
            <div style={{ width:270, background:"#120C2E", height:"100%", boxShadow:"4px 0 24px rgba(0,0,0,0.25)", overflow:"hidden" }}>
              <Sidebar onClose={()=>setMobileOpen(false)}/>
            </div>
          </div>
        )}

        {/* Main content */}
        <div style={{ flex:1, display:"flex", flexDirection:"column", minWidth:0, overflow:"hidden" }}>

          {/* Top bar */}
          <header style={{ height:56, borderBottom:`1px solid ${C.border}`, background:C.white, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 16px", flexShrink:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              {/* Hamburger — mobile only */}
              <button onClick={()=>setMobileOpen(true)} className="menu-btn"
                style={{ background:"none", border:"none", cursor:"pointer", color:C.charcoal, display:"none", alignItems:"center", padding:4 }}>
                <Menu size={22}/>
              </button>
              <span style={{ fontFamily:F.serif, fontSize:17, fontWeight:700, color:C.charcoal, letterSpacing:"-0.01em" }} className="page-title">
                {NAV.find(n => pathname === n.href || (n.href !== "/dashboard" && pathname.startsWith(n.href)))?.label || "Parampara"}
              </span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <NotificationBell/>
              <Link href="/rituals/new" style={{ display:"flex", alignItems:"center", gap:5, background:"#D6246E", color:"#fff", border:"none", borderRadius:10, padding:"8px 14px", fontSize:13, fontWeight:700, textDecoration:"none" }}>
                <Plus size={13}/> Add Ritual
              </Link>
            </div>
          </header>

          {/* Page content */}
          <main style={{ flex:1, overflowY:"auto" }}>
            {children}
          </main>
        </div>
      </div>

      <style>{`
        @media(min-width:768px){
          .sidebar-desktop{display:flex!important;flex-direction:column;}
          .menu-btn{display:none!important}
        }
        @media(max-width:767px){
          .sidebar-desktop{display:none!important}
          .menu-btn{display:flex!important}
        }
      `}</style>
      <UpgradeNudge/>
    </>
  );
}

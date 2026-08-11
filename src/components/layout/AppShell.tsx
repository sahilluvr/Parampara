"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, BookOpen, CalendarDays, Image as ImageIcon, Users,
  Sparkles, LogOut, Settings, Menu, X, Bell, Plus, Home, Mic, Heart, TreePine
} from "lucide-react";
import { migrateLegacyData, getActiveFamily, getAllFamilies, setActiveFamily } from "@/lib/families";
import { syncPlanFromSupabase, getLocalPlan } from "@/lib/plan";
import AddToHomeScreen from "@/components/ui/AddToHomeScreen";
import { getNotifications, markAllRead, markRead, getUnreadCount, type Notification } from "@/lib/notifications";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.1)", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", forestLight:"#E8F4EE", forest:"#1A5C42" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

function PlanBadge() {
  const [plan, setPlan] = useState<"pro"|"free">("free");
  useEffect(() => {
    setPlan(getLocalPlan());
    syncPlanFromSupabase().then(p => setPlan(p));
  }, []);
  if (plan === "pro") {
    return (
      <div style={{ margin:"8px 12px", padding:"8px 12px", background:"linear-gradient(135deg,rgba(200,84,26,0.15),rgba(184,146,42,0.1))", border:"1px solid rgba(200,84,26,0.2)", borderRadius:10, display:"flex", alignItems:"center", gap:8 }}>
        <span style={{ fontSize:14 }}>✨</span>
        <div>
          <p style={{ fontSize:11, fontWeight:700, color:"#E8894A", margin:0 }}>Pro Plan</p>
          <p style={{ fontSize:10, color:C.gray, margin:0 }}>All features unlocked</p>
        </div>
      </div>
    );
  }
  return (
    <Link href="/upgrade" style={{ margin:"8px 12px", padding:"8px 12px", background:"rgba(200,84,26,0.06)", border:"1px solid rgba(200,84,26,0.12)", borderRadius:10, display:"flex", alignItems:"center", gap:8, textDecoration:"none" }}>
      <span style={{ fontSize:14 }}>⬆️</span>
      <div>
        <p style={{ fontSize:11, fontWeight:600, color:C.saffron, margin:0 }}>Free Plan</p>
        <p style={{ fontSize:10, color:C.gray, margin:0 }}>Upgrade to unlock AI</p>
      </div>
    </Link>
  );
}

const NAV = [
  { href:"/dashboard",      icon:LayoutDashboard, label:"Dashboard"       },
  { href:"/rituals",        icon:BookOpen,        label:"Ritual Vault"    },
  { href:"/festivals",      icon:CalendarDays,    label:"Festivals"       },
  { href:"/calendar",       icon:CalendarDays,    label:"Family Calendar" },
  { href:"/ai",             icon:Sparkles,        label:"AI Assistant"    },
  { href:"/media",          icon:ImageIcon,           label:"Memory Vault"    },
  { href:"/voice-archive",  icon:Mic,             label:"Voice Archive"   },
  { href:"/heritage-book",  icon:BookOpen,        label:"Heritage Book"   },
  { href:"/members",        icon:Users,           label:"Family Members"  },
  { href:"/family-tree",    icon:TreePine,        label:"Vansh Vriksha"   },
  { href:"/mannats",        icon:Heart,           label:"Mannats"         },
  { href:"/spaces",         icon:Home,            label:"Family Spaces"   },
];

function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifs, setNotifs] = useState<Notification[]>([]);
  const [unread, setUnread] = useState(0);
  const C2 = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", charcoal:"#18181B", gray:"#71717A", white:"#fff", ivory:"#FAF7F2" };

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

  useEffect(() => {
    // Migrate legacy single-family data to new multi-family system
    migrateLegacyData();
    // Sync plan from Supabase on every load (catches admin changes)
    syncPlanFromSupabase();
    const active = getActiveFamily();
    if (active) setFamilyName(active.name);
    else {
      const fn = localStorage.getItem("parampara_family_name");
      if (fn) setFamilyName(fn);
    }
    setFamilyCount(getAllFamilies().length);
  }, [pathname]); // refresh on route change

  useEffect(() => { setMobileOpen(false); }, [pathname]);
  function onNav() { setMobileOpen(false); }

  function handleSignOut() {
    if (confirm("Sign out of Parampara?")) {
      localStorage.removeItem("parampara_initialized"); localStorage.removeItem("parampara_user_email"); localStorage.removeItem("parampara_user_name");
      window.location.href = "/";
    }
  }

  const Sidebar = ({ onClose }: { onClose?: () => void }) => (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:C.white }}>
      {/* Logo */}
      <div style={{ padding:"20px 16px", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <Link href="/dashboard" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
          <Image src="/logo.png" alt="OurParampara" width={34} height={34} style={{ borderRadius:"50%", objectFit:"cover" }}/>
          <div>
            <span style={{ fontFamily:F.serif, fontSize:17, fontWeight:700, color:C.charcoal }}>OurParampara</span>
            <div style={{ fontSize:9, color:"#B8922A", letterSpacing:1.2, textTransform:"uppercase" }}>Heritage Platform</div>
          </div>
        </Link>
        {onClose && (
          <button onClick={onClose} style={{ background:"none", border:"none", cursor:"pointer", color:C.gray, display:"flex" }}>
            <X size={20}/>
          </button>
        )}
      </div>

      {/* Active family — click to manage spaces */}
      <Link href="/spaces" style={{ margin:"12px 12px 4px", padding:"10px 12px", background:C.saffronLight, borderRadius:10, display:"flex", alignItems:"center", gap:10, textDecoration:"none", border:`1px solid rgba(200,84,26,0.15)` }}>
        <div style={{ width:32, height:32, borderRadius:"50%", background:"linear-gradient(135deg,#C8541A,#B8922A)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, color:"#fff", fontWeight:700, flexShrink:0 }}>
          {familyName.charAt(0).toUpperCase()}
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <p style={{ fontSize:12, fontWeight:600, color:C.charcoal, margin:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{familyName}</p>
          <p style={{ fontSize:10, color:"#B8922A", margin:0 }}>{familyCount} space{familyCount!==1?"s":""} · Tap to manage</p>
        </div>
      </Link>

      {/* Navigation */}
      <nav style={{ flex:1, padding:"8px 12px", overflowY:"auto" }}>
        <p style={{ fontSize:10, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", color:C.gray, padding:"8px 4px 4px" }}>Menu</p>
        {NAV.map(({ href, icon:Icon, label }) => {
          const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
          return (
            <Link key={href} href={href} onClick={onNav} style={{
              display:"flex", alignItems:"center", gap:10, padding:"10px 12px",
              borderRadius:10, marginBottom:2, textDecoration:"none",
              background: active ? C.saffronLight : "transparent",
              color: active ? C.saffron : C.gray,
              fontWeight: active ? 600 : 400,
              fontSize: 13, fontFamily: F.sans,
              borderLeft: active ? `3px solid ${C.saffron}` : "3px solid transparent",
              transition: "all 0.15s",
            }}>
              <Icon size={16} style={{ flexShrink:0 }}/>
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom links */}
      <div style={{ padding:"8px 0 8px", borderTop:`1px solid ${C.border}` }}>
        <PlanBadge/>
        <div style={{ padding:"0 12px" }}>
        {[
          { href:"/account", icon:Settings, label:"Account & Plan" },
          { href:"/family-settings", icon:Settings, label:"Family Settings" },
        ].map(({ href, icon:Icon, label }) => (
          <Link key={href} href={href} onClick={onNav} style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 12px", borderRadius:8, textDecoration:"none", fontSize:12, color:C.gray, marginBottom:2 }}>
            <Icon size={13}/> {label}
          </Link>
        ))}
        <button onClick={handleSignOut} style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 12px", borderRadius:8, background:"none", border:"none", cursor:"pointer", fontSize:12, color:"#DC2626", fontFamily:F.sans, width:"100%" }}>
          <LogOut size={13}/> Sign out
        </button>
        <p style={{ fontSize:10, color:C.gray, textAlign:"center", marginTop:8, opacity:0.5 }}>परंपरा — tradition lives on</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div style={{ display:"flex", height:"100vh", background:C.ivory, overflow:"hidden" }}>

        {/* Desktop sidebar */}
        <aside style={{ width:224, borderRight:`1px solid ${C.border}`, flexShrink:0 }} className="sidebar-desktop">
          <Sidebar/>
        </aside>

        {/* Mobile overlay sidebar */}
        {mobileOpen && (
          <div style={{ position:"fixed", inset:0, zIndex:500, display:"flex" }}>
            <div style={{ flex:1, background:"rgba(0,0,0,0.5)" }} onClick={()=>setMobileOpen(false)}/>
            <div style={{ width:260, background:C.white, height:"100%", boxShadow:"-4px 0 24px rgba(0,0,0,0.15)", overflow:"hidden" }}>
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
              <span style={{ fontFamily:F.serif, fontSize:15, fontWeight:600, color:C.charcoal }} className="page-title">
                {NAV.find(n => pathname === n.href || (n.href !== "/dashboard" && pathname.startsWith(n.href)))?.label || "Parampara"}
              </span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <NotificationBell/>
              <Link href="/rituals/new" style={{ display:"flex", alignItems:"center", gap:5, background:`linear-gradient(135deg,#C8541A,#B8922A)`, color:"#fff", border:"none", borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:600, textDecoration:"none" }}>
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
    </>
  );
}

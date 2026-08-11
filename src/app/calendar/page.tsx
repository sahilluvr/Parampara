"use client";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { Bell, BellOff, Copy, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { getActiveFamily } from "@/lib/families";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", gold:"#B8922A", goldLight:"#F9F3E3", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", cream:"#F5F0E8" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

type CalEvent = { id:string; title:string; date:string; type:"birthday"|"anniversary"|"festival"|"ritual"; emoji:string; person?:string; whatsapp?:string; daysUntil:number; };

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const WEEKDAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const FESTIVALS_2026 = [
  { name:"Raksha Bandhan", date:"2026-08-28", emoji:"🪢" },
  { name:"Janmashtami",    date:"2026-09-04", emoji:"🦚" },
  { name:"Ganesh Chaturthi",date:"2026-09-14",emoji:"🐘" },
  { name:"Navratri Begins",date:"2026-10-11", emoji:"🙏" },
  { name:"Dussehra",       date:"2026-10-20", emoji:"🏹" },
  { name:"Diwali",         date:"2026-11-08", emoji:"🪔" },
  { name:"Bhai Dooj",      date:"2026-11-11", emoji:"👫" },
  { name:"Guru Nanak Jayanti",date:"2026-11-24",emoji:"☬" },
  { name:"Christmas",      date:"2026-12-25", emoji:"🎄" },
  { name:"New Year",       date:"2027-01-01", emoji:"🎆" },
  { name:"Makar Sankranti",date:"2027-01-14", emoji:"🪁" },
  { name:"Lohri",          date:"2027-01-13", emoji:"🔥" },
  { name:"Vasant Panchami",date:"2027-01-23", emoji:"📚" },
  { name:"Holi",           date:"2027-03-02", emoji:"🎨" },
  { name:"Baisakhi",       date:"2027-04-14", emoji:"🌾" },
  { name:"Eid ul-Fitr",    date:"2027-03-31", emoji:"☪️" },
];

function daysUntil(dateStr:string):number {
  const today = new Date(); today.setHours(0,0,0,0);
  const d = new Date(dateStr); d.setHours(0,0,0,0);
  const diff = Math.ceil((d.getTime()-today.getTime())/(1000*60*60*24));
  return diff;
}

function nextOccurrence(monthDay:string):string {
  const today = new Date(); today.setHours(0,0,0,0);
  const [,month,day] = monthDay.split("-").map(Number);
  let year = today.getFullYear();
  let d = new Date(year,month-1,day);
  if (d < today) d = new Date(year+1,month-1,day);
  return d.toISOString().split("T")[0];
}

export default function CalendarPage() {
  const [events, setEvents]     = useState<CalEvent[]>([]);
  const [reminders, setReminders] = useState<Set<string>>(new Set());
  const [copied, setCopied]     = useState<string|null>(null);
  const [view, setView]         = useState<"upcoming"|"month">("upcoming");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear]   = useState(new Date().getFullYear());
  const [filter, setFilter]     = useState<"all"|"birthday"|"anniversary"|"festival">("all");

  useEffect(() => {
    const all: CalEvent[] = [];
    // Load members for birthdays + anniversaries
    try {
      const keys = Object.keys(localStorage).filter(k=>k.startsWith("parampara_members_"));
      for (const key of keys) {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        const members = JSON.parse(raw);
        for (const m of members) {
          if (m.birthdate) {
            const next = nextOccurrence(m.birthdate);
            const age = new Date().getFullYear() - new Date(m.birthdate).getFullYear();
            all.push({
              id: `bday-${m.id||m.name}`,
              title: `${m.name}'s Birthday`,
              date: next,
              type: "birthday",
              emoji: "🎂",
              person: m.name,
              daysUntil: daysUntil(next),
              whatsapp: `🎂 Happy Birthday ${m.name}! Wishing you joy and blessings on your special day 🪔 With love from the family 💕`
            });
          }
          if (m.anniversary) {
            const next = nextOccurrence(m.anniversary);
            all.push({
              id: `anni-${m.id||m.name}`,
              title: `${m.name}'s Anniversary`,
              date: next,
              type: "anniversary",
              emoji: "💑",
              person: m.name,
              daysUntil: daysUntil(next),
              whatsapp: `💑 Happy Anniversary ${m.name}! Wishing you a lifetime of love and togetherness 🪔 With blessings from the family 💕`
            });
          }
        }
      }
    } catch {}

    // Add festivals
    for (const f of FESTIVALS_2026) {
      const days = daysUntil(f.date);
      if (days > -30) { // show past 30 days too
        all.push({ id:`fest-${f.name}`, title:f.name, date:f.date, type:"festival", emoji:f.emoji, daysUntil:days });
      }
    }

    // Sort by days until
    all.sort((a,b)=>a.daysUntil-b.daysUntil);
    setEvents(all);

    // Load reminders
    try {
      const r = localStorage.getItem(`parampara_cal_reminders_${getActiveFamily()?.id || "default"}`);
      if (r) setReminders(new Set(JSON.parse(r)));
    } catch {}
  }, []);

  function toggleReminder(id:string) {
    const n = new Set(reminders);
    n.has(id) ? n.delete(id) : n.add(id);
    setReminders(n);
    localStorage.setItem(`parampara_cal_reminders_${getActiveFamily()?.id || "default"}`, JSON.stringify(Array.from(n)));
    toast.success(n.has(id) ? "Reminder set 🔔" : "Reminder removed");
  }

  function copyWhatsApp(event:CalEvent) {
    if (!event.whatsapp) return;
    navigator.clipboard?.writeText(event.whatsapp).then(()=>{
      setCopied(event.id);
      toast.success("WhatsApp message copied! 📱");
      setTimeout(()=>setCopied(null), 2500);
    });
  }

  function getDayLabel(days:number) {
    if (days === 0) return { text:"Today! 🎉", color:"#DC2626", bg:"#FEF2F2" };
    if (days === 1) return { text:"Tomorrow", color:"#D97706", bg:"#FFFBEB" };
    if (days < 0)   return { text:`${Math.abs(days)}d ago`, color:"#A1A1AA", bg:"#F4F4F5" };
    if (days <= 7)  return { text:`In ${days} days`, color:C.saffron, bg:C.saffronLight };
    return { text:`${days} days`, color:C.gray, bg:"#F4F4F5" };
  }

  function formatDate(d:string) {
    return new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"long"});
  }

  const filtered = events.filter(e => {
    if (filter === "all") return true;
    return e.type === filter;
  });

  const upcomingFiltered = filtered.filter(e => e.daysUntil >= -7).slice(0, 30);

  // Calendar month view
  const daysInMonth = new Date(currentYear, currentMonth+1, 0).getDate();
  const firstDay    = new Date(currentYear, currentMonth, 1).getDay();
  const today       = new Date();

  function getEventsForDay(day:number):CalEvent[] {
    const dateStr = `${currentYear}-${String(currentMonth+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
    return events.filter(e => e.date === dateStr);
  }

  // Stats
  const thisWeek  = events.filter(e=>e.daysUntil>=0&&e.daysUntil<=7).length;
  const thisMonth = events.filter(e=>e.daysUntil>=0&&e.daysUntil<=30).length;
  const birthdays = events.filter(e=>e.type==="birthday").length;

  return (
    <AppShell>
      <div style={{ padding:"20px", maxWidth:720, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20, flexWrap:"wrap", gap:10 }}>
          <div>
            <h1 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, margin:0 }}>Family Calendar</h1>
            <p style={{ fontSize:13, color:C.gray, marginTop:3 }}>Birthdays, anniversaries & festivals</p>
          </div>
          <div style={{ display:"flex", gap:6 }}>
            {(["upcoming","month"] as const).map(v=>(
              <button key={v} onClick={()=>setView(v)}
                style={{ padding:"7px 14px", borderRadius:9, border:`1px solid ${view===v?C.saffron:C.border}`, background:view===v?C.saffronLight:"transparent", color:view===v?C.saffron:C.gray, fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
                {v === "upcoming" ? "📋 Upcoming" : "📅 Month"}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:20 }}>
          {[["This week",thisWeek,"📅"],["This month",thisMonth,"🗓️"],["Birthdays",birthdays,"🎂"]].map(([label,val,emoji])=>(
            <div key={label as string} style={{ background:C.white, borderRadius:12, padding:"14px 12px", border:`1px solid ${C.border}`, textAlign:"center" }}>
              <p style={{ fontSize:20, margin:0 }}>{emoji}</p>
              <p style={{ fontFamily:F.serif, fontSize:22, fontWeight:700, color:C.saffron, margin:"4px 0 0" }}>{val}</p>
              <p style={{ fontSize:11, color:C.gray, margin:0 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display:"flex", gap:6, marginBottom:16, overflowX:"auto", paddingBottom:4 }}>
          {(["all","birthday","anniversary","festival"] as const).map(f=>(
            <button key={f} onClick={()=>setFilter(f)}
              style={{ padding:"6px 14px", borderRadius:20, border:`1px solid ${filter===f?C.saffron:C.border}`, background:filter===f?C.saffronLight:"transparent", color:filter===f?C.saffron:C.gray, fontSize:12, fontWeight:filter===f?700:400, cursor:"pointer", fontFamily:F.sans, whiteSpace:"nowrap", flexShrink:0 }}>
              {f==="all"?"All":f==="birthday"?"🎂 Birthdays":f==="anniversary"?"💑 Anniversaries":"🪔 Festivals"}
            </button>
          ))}
        </div>

        {/* MONTH VIEW */}
        {view === "month" && (
          <div style={{ background:C.white, borderRadius:16, border:`1px solid ${C.border}`, overflow:"hidden", marginBottom:16 }}>
            {/* Month nav */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 20px", borderBottom:`1px solid ${C.border}` }}>
              <button onClick={()=>{ const d=new Date(currentYear,currentMonth-1); setCurrentMonth(d.getMonth()); setCurrentYear(d.getFullYear()); }}
                style={{ background:"none", border:"none", cursor:"pointer", color:C.gray, display:"flex" }}><ChevronLeft size={18}/></button>
              <p style={{ fontFamily:F.serif, fontSize:16, fontWeight:600, color:C.charcoal, margin:0 }}>{MONTHS[currentMonth]} {currentYear}</p>
              <button onClick={()=>{ const d=new Date(currentYear,currentMonth+1); setCurrentMonth(d.getMonth()); setCurrentYear(d.getFullYear()); }}
                style={{ background:"none", border:"none", cursor:"pointer", color:C.gray, display:"flex" }}><ChevronRight size={18}/></button>
            </div>
            {/* Weekday headers */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", padding:"8px 12px 4px" }}>
              {WEEKDAYS.map(d=><p key={d} style={{ fontSize:11, fontWeight:600, color:C.gray, textAlign:"center", margin:0 }}>{d}</p>)}
            </div>
            {/* Days grid */}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", padding:"4px 12px 14px", gap:2 }}>
              {Array.from({length:firstDay}).map((_,i)=><div key={`empty-${i}`}/>)}
              {Array.from({length:daysInMonth}).map((_,i)=>{
                const day = i+1;
                const isToday = today.getDate()===day && today.getMonth()===currentMonth && today.getFullYear()===currentYear;
                const dayEvents = getEventsForDay(day);
                return (
                  <div key={day} style={{ minHeight:44, padding:"4px 2px", borderRadius:8, background:isToday?C.saffronLight:"transparent", textAlign:"center", position:"relative" }}>
                    <p style={{ fontSize:13, fontWeight:isToday?700:400, color:isToday?C.saffron:C.charcoal, margin:0 }}>{day}</p>
                    <div style={{ display:"flex", justifyContent:"center", gap:2, flexWrap:"wrap", marginTop:2 }}>
                      {dayEvents.slice(0,3).map(e=>(
                        <span key={e.id} title={e.title} style={{ fontSize:12, lineHeight:1 }}>{e.emoji}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* UPCOMING VIEW */}
        {view === "upcoming" && (
          <div>
            {upcomingFiltered.length === 0 ? (
              <div style={{ background:C.white, borderRadius:14, border:`1px solid ${C.border}`, padding:"40px 24px", textAlign:"center" }}>
                <p style={{ fontSize:32, marginBottom:10 }}>📅</p>
                <p style={{ fontSize:15, fontWeight:600, color:C.charcoal }}>No events found</p>
                <p style={{ fontSize:13, color:C.gray }}>Add family members with birthdates to see birthdays here</p>
                <Link href="/members" style={{ display:"inline-block", marginTop:16, padding:"10px 20px", background:C.saffronLight, border:`1px solid rgba(200,84,26,0.2)`, borderRadius:10, fontSize:13, fontWeight:600, color:C.saffron, textDecoration:"none" }}>Add family members →</Link>
              </div>
            ) : upcomingFiltered.map(event => {
              const label = getDayLabel(event.daysUntil);
              const isToday = event.daysUntil === 0;
              return (
                <div key={event.id} style={{ background:C.white, borderRadius:14, border:`2px solid ${isToday?"#DC2626":event.daysUntil<=7&&event.daysUntil>=0?C.saffron:C.border}`, marginBottom:10, overflow:"hidden" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 16px" }}>
                    <div style={{ width:44, height:44, borderRadius:12, background:isToday?"#FEF2F2":event.type==="birthday"?"#FDF0E6":event.type==="anniversary"?"#F5F3FF":C.forestLight, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>
                      {event.emoji}
                    </div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:0 }}>{event.title}</p>
                      <p style={{ fontSize:12, color:C.gray, margin:"2px 0 0" }}>{formatDate(event.date)}</p>
                    </div>
                    <div style={{ display:"flex", gap:6, alignItems:"center", flexShrink:0 }}>
                      <span style={{ fontSize:11, fontWeight:700, background:label.bg, color:label.color, padding:"3px 10px", borderRadius:20 }}>{label.text}</span>
                      <button onClick={()=>toggleReminder(event.id)}
                        style={{ background:reminders.has(event.id)?C.saffronLight:"#F4F4F5", border:"none", borderRadius:8, padding:"6px 8px", cursor:"pointer", display:"flex", alignItems:"center", color:reminders.has(event.id)?C.saffron:C.gray }}>
                        {reminders.has(event.id)?<Bell size={14}/>:<BellOff size={14}/>}
                      </button>
                    </div>
                  </div>
                  {/* WhatsApp template */}
                  {event.whatsapp && (
                    <div style={{ padding:"10px 16px 14px", borderTop:`1px solid ${C.border}`, background:C.ivory }}>
                      <p style={{ fontSize:12, color:C.gray, margin:"0 0 6px" }}>💬 Ready-to-send WhatsApp message:</p>
                      <p style={{ fontSize:12, color:C.charcoal, margin:"0 0 8px", lineHeight:1.5, background:C.white, padding:"8px 12px", borderRadius:8, border:`1px solid ${C.border}` }}>{event.whatsapp}</p>
                      <button onClick={()=>copyWhatsApp(event)}
                        style={{ display:"flex", alignItems:"center", gap:6, background:copied===event.id?"#25D366":C.saffron, color:"#fff", border:"none", borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:F.sans, transition:"background 0.2s" }}>
                        {copied===event.id?<><Check size={12}/>Copied!</>:<><Copy size={12}/>Copy for WhatsApp</>}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Add members prompt */}
        <div style={{ background:C.white, borderRadius:12, border:`1px solid ${C.border}`, padding:16, marginTop:8 }}>
          <p style={{ fontSize:13, color:C.charcoal, margin:"0 0 8px", fontWeight:500 }}>📌 Make it personal</p>
          <p style={{ fontSize:12, color:C.gray, margin:"0 0 10px" }}>Add birthdates and anniversaries to family members to see them here with WhatsApp reminders.</p>
          <Link href="/members" style={{ fontSize:12, fontWeight:600, color:C.saffron, textDecoration:"none" }}>Add family members →</Link>
        </div>
      </div>
    </AppShell>
  );
}

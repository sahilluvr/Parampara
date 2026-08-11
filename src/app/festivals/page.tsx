"use client";
import { useState, useEffect } from "react";
import AppShell from "@/components/layout/AppShell";
import { PRESET_FESTIVALS, type Festival } from "@/lib/store";
import { Bell, BellOff, ChevronDown, ChevronUp, X, Plus, Trash2, Filter } from "lucide-react";
import toast from "react-hot-toast";
import { getActiveFamily } from "@/lib/families";

const C = { saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)", forest:"#1A5C42", forestLight:"#E8F4EE", gold:"#B8922A", goldLight:"#F9F3E3", ivory:"#FAF7F2", charcoal:"#18181B", gray:"#71717A", white:"#fff", cream:"#F5F0E8" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

const RELIGIONS = ["All", "Hindu", "Sikh", "Muslim", "Christian", "Jain", "Buddhist", "Custom"];

const RELIGION_META: Record<string, { color: string; bg: string; emoji: string }> = {
  Hindu:    { color:"#C8541A", bg:"#FDF0E6", emoji:"🪔" },
  Sikh:     { color:"#1A5C42", bg:"#E8F4EE", emoji:"☬" },
  Muslim:   { color:"#1D4ED8", bg:"#EFF6FF", emoji:"☪️" },
  Christian:{ color:"#7C3AED", bg:"#F5F3FF", emoji:"✝️" },
  Jain:     { color:"#B45309", bg:"#FFFBEB", emoji:"🕉️" },
  Buddhist: { color:"#0369A1", bg:"#E0F2FE", emoji:"☸️" },
  Custom:   { color:"#71717A", bg:"#F4F4F5", emoji:"⭐" },
};

// Extended festival list with multiple religions
const ALL_PRESET_FESTIVALS: Festival[] = [
  // ── Hindu ──
  ...PRESET_FESTIVALS,
  // Additional Hindu
  { id:"holi",          name:"Holi",           date:"2027-03-02", religion:"Hindu",   isCustom:false, significance:"Festival of colors celebrating triumph of good over evil and arrival of spring.",        ritualSteps:["Apply gulal and abir colors","Sing folk songs","Offer thandai","Visit neighbors","Evening puja"], food:"Thandai, gujiya, malpua, puran poli.", samagri:["Gulal","Abir","Pichkari","Flowers","Sweets"] },
  { id:"makar-sankranti",name:"Makar Sankranti",date:"2027-01-14",religion:"Hindu",   isCustom:false, significance:"Solar festival marking the sun's entry into Capricorn. Celebrated with kites and sesame.",  ritualSteps:["Take early morning bath","Offer sesame to sun","Fly kites","Donate til-gur","Family feast"], food:"Til ladoo, khichdi, gajak, revdi.", samagri:["Sesame seeds","Jaggery","Kite","Til-gur"] },
  { id:"teej",          name:"Teej",            date:"2026-08-31", religion:"Hindu",  isCustom:false, significance:"Women's festival celebrating the monsoon, married women pray for their husbands.",          ritualSteps:["Women fast all day","Apply mehndi","Wear green/red dress","Puja with flowers","Evening feast"], food:"Ghevar, kheer, puri halwa.", samagri:["Mehndi","Green bangles","Flowers","Sindoor","Fruits"] },
  { id:"karva-chauth",  name:"Karva Chauth",    date:"2026-10-29", religion:"Hindu",  isCustom:false, significance:"Married women fast from sunrise to moonrise for their husband's long life.",               ritualSteps:["Sargi meal before sunrise","Full day fast","Evening puja","See moon through sieve","Break fast"], food:"Sargi foods: fruits, mathri, sweets.", samagri:["Karva pot","Sieve","Diya","Sindoor","Bangles"] },
  { id:"bhai-dooj",     name:"Bhai Dooj",       date:"2026-11-11", religion:"Hindu",  isCustom:false, significance:"Sisters pray for brothers' long life, similar to Raksha Bandhan.",                       ritualSteps:["Sister applies tilak","Aarti of brother","Share sweets","Exchange gifts","Family meal"], food:"Home cooked meal by sister.", samagri:["Roli","Akshat","Diya","Sweets","Flowers"] },
  { id:"chhath-puja",   name:"Chhath Puja",     date:"2026-11-15", religion:"Hindu",  isCustom:false, significance:"Ancient Vedic festival dedicated to the Sun god, celebrated near rivers and water bodies.", ritualSteps:["Nahay khay — purifying bath","Kharna fast","Evening arghya to sun","Morning arghya at sunrise","Break fast"], food:"Thekua, kheer, fruits.", samagri:["Bamboo basket","Sugarcane","Thekua","Fruits","Diya"] },
  { id:"ganesh-chaturthi",name:"Ganesh Chaturthi",date:"2026-09-14",religion:"Hindu", isCustom:false, significance:"Birthday of Lord Ganesha. Celebrated for 10 days with idol installation and immersion.",   ritualSteps:["Install Ganesha idol","Prana pratishtha puja","Daily aarti twice","Offer modak","Visarjan on 10th day"], food:"Modak, karanji, puran poli.", samagri:["Ganesha idol","Durva grass","Red flowers","Modak","Coconut"] },
  { id:"vasant-panchami",name:"Vasant Panchami",date:"2027-01-23", religion:"Hindu",  isCustom:false, significance:"Saraswati Puja — goddess of knowledge, music and arts. Students pray for wisdom.",          ritualSteps:["Wear yellow clothes","Saraswati puja","Place books for blessing","Fly kites","Eat yellow sweets"], food:"Boondi ladoo, kesari halwa, yellow rice.", samagri:["Yellow flowers","Books","Pen","Saraswati idol","Diya"] },
  // ── Sikh ──
  { id:"guru-nanak-jayanti",name:"Guru Nanak Jayanti",date:"2026-11-24",religion:"Sikh",isCustom:false,significance:"Birthday of Guru Nanak Dev Ji, founder of Sikhism. Celebrated with Prabhat Pheris and langar.",ritualSteps:["Prabhat Pheri at dawn","Akhand path completion","Nagar kirtan","Visit Gurudwara","Langar seva"],food:"Kada prasad, langar food, kheer.",samagri:["Gutka Sahib","Kirpan","Flowers","Karah prasad ingredients"]},
  { id:"baisakhi",      name:"Baisakhi",         date:"2027-04-14", religion:"Sikh",   isCustom:false, significance:"Sikh new year and harvest festival. Commemorates formation of Khalsa Panth in 1699.",     ritualSteps:["Visit Gurudwara","Akhand path","Nagar kirtan","Bhangra/gidda","Langar"],                        food:"Kada prasad, langar, sarson da saag.", samagri:["Rumala sahib","Flowers","Karah prasad"] },
  { id:"lohri",         name:"Lohri",            date:"2027-01-13", religion:"Sikh",   isCustom:false, significance:"Harvest festival of Punjab marking the end of winter. Celebrated with bonfire and folk songs.", ritualSteps:["Light bonfire at dusk","Offer til/gur/rewri","Sing Lohri songs","Bhangra/gidda","Community feast"], food:"Til, gajak, rewri, popcorn, gur.",     samagri:["Wood for bonfire","Sesame","Jaggery","Rewri","Popcorn"] },
  { id:"gurpurab-gobind",name:"Guru Gobind Singh Jayanti",date:"2027-01-06",religion:"Sikh",isCustom:false,significance:"Birthday of the 10th Sikh Guru who founded the Khalsa and gave Sikhs their identity.",ritualSteps:["Visit Gurudwara","Akhand path","Ardas","Langar seva","Kirtan"],food:"Kada prasad, langar.",samagri:["Flowers","Rumala sahib"]},
  // ── Muslim ──
  { id:"eid-ul-fitr",   name:"Eid ul-Fitr",      date:"2027-03-31", religion:"Muslim", isCustom:false, significance:"Festival marking end of Ramadan fasting month. Celebration of gratitude, charity and family.",ritualSteps:["Eid namaz in morning","New clothes","Give Zakat-ul-fitr","Visit family","Feast together"],      food:"Seviyan, sheer khurma, biryani, haleem.", samagri:["New clothes","Zakat amount","Dates","Attar"] },
  { id:"eid-ul-adha",   name:"Eid ul-Adha",      date:"2026-05-27", religion:"Muslim", isCustom:false, significance:"Festival of sacrifice commemorating Ibrahim's willingness to sacrifice his son.",             ritualSteps:["Eid namaz","Qurbani","Distribute meat in three parts","Visit family","Feast"],                  food:"Biryani, qorma, kebabs, sheer khurma.", samagri:["Sacrificial animal","Clothes","Dates"] },
  { id:"muharram",      name:"Muharram",          date:"2026-07-07", religion:"Muslim", isCustom:false, significance:"Islamic new year and day of Ashura. Observed with fasting and remembrance.",                 ritualSteps:["Fast on 9th and 10th","Quran recitation","Charitable giving","Community prayers"],               food:"Fast food: dates, water. Break fast with biryani.", samagri:["Quran","Prayer mat","Tasbih"] },
  { id:"ramadan",       name:"Ramadan Begins",    date:"2027-03-01", religion:"Muslim", isCustom:false, significance:"Holy month of fasting, prayer, reflection and community.",                                   ritualSteps:["Sehri before dawn","Fast all day","Iftaar at sunset","Tarawih prayers","Quran recitation"],       food:"Dates, fruit chaat, samosas at iftaar.", samagri:["Dates","Prayer mat","Quran","Tasbih"] },
  // ── Jain ──
  { id:"paryushana",    name:"Paryushana",        date:"2026-09-10", religion:"Jain",   isCustom:false, significance:"Most important Jain festival — 8 days of fasting, prayer, forgiveness and self-reflection.", ritualSteps:["Fast for 8 days","Daily prayers","Pratikraman","Ask forgiveness","Samvatsari — universal forgiveness"], food:"Simple sattvic food or complete fast.", samagri:["Kalash","Flowers","Incense","Puja thali"] },
  { id:"mahavir-jayanti",name:"Mahavir Jayanti",  date:"2027-04-10", religion:"Jain",   isCustom:false, significance:"Birthday of Lord Mahavira, the 24th Tirthankara and founder of modern Jainism.",             ritualSteps:["Abhishek of idol","Procession","Prayers at temple","Charitable giving","Fast"],                   food:"Sattvic food, no root vegetables.", samagri:["Flowers","Incense","Holy water","Kalash"] },
  // ── Christian ──
  { id:"christmas",     name:"Christmas",         date:"2026-12-25", religion:"Christian",isCustom:false,significance:"Birth of Jesus Christ. Celebrated with midnight mass, family gatherings and gift exchange.",ritualSteps:["Midnight mass on Christmas Eve","Morning prayers","Exchange gifts","Family feast","Carol singing"],food:"Plum cake, roast chicken, cookies.", samagri:["Christmas tree","Decorations","Candles","Gifts"]},
  { id:"easter",        name:"Easter",            date:"2027-04-04", religion:"Christian",isCustom:false,significance:"Resurrection of Jesus Christ. Most important Christian holiday.",                           ritualSteps:["Good Friday prayers","Fasting","Easter Sunday mass","Easter egg hunt","Family feast"],food:"Hot cross buns, Easter eggs, lamb.", samagri:["Easter eggs","Cross","Candles","White clothes"]},
  // ── Buddhist ──
  { id:"buddha-purnima",name:"Buddha Purnima",    date:"2027-05-13", religion:"Buddhist",isCustom:false,significance:"Birth, enlightenment and death of Gautama Buddha. Most sacred day in Buddhism.",             ritualSteps:["Visit temple","Offer flowers","Light incense and candles","Meditate","Release birds/animals"],    food:"Kheer (traditional), vegetarian food.", samagri:["Flowers","Incense","Candles","Dharma texts"] },
];

function daysUntil(dateStr: string) {
  const t = new Date(); t.setHours(0,0,0,0);
  const d = new Date(dateStr); d.setHours(0,0,0,0);
  return Math.ceil((d.getTime()-t.getTime())/(1000*60*60*24));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day:"numeric", month:"long", year:"numeric" });
}

function getDayLabel(days: number) {
  if (days === 0) return { text:"Today!", color:"#DC2626", bg:"#FEF2F2" };
  if (days === 1) return { text:"Tomorrow", color:"#D97706", bg:"#FFFBEB" };
  if (days <= 7)  return { text:`In ${days} days`, color:"#C8541A", bg:"#FDF0E6" };
  if (days < 0)   return { text:"Passed", color:"#A1A1AA", bg:"#F4F4F5" };
  return { text:`${days} days`, color:"#71717A", bg:"#F4F4F5" };
}

export default function FestivalsPage() {
  const [customFests, setCustomFests]   = useState<Festival[]>([]);
  const [expanded, setExpanded]         = useState<string|null>(null);
  const [reminders, setReminders]       = useState<Set<string>>(new Set());
  const [showForm, setShowForm]         = useState(false);
  const [deleteId, setDeleteId]         = useState<string|null>(null);
  const [filter, setFilter]             = useState<string>("My Religion");
  const [search, setSearch]             = useState("");
  const [userReligion, setUserReligion] = useState("Hindu");
  const [form, setForm] = useState({ name:"", date:"", significance:"", food:"", religion:"Custom" });

  useEffect(() => {
    // Get religion from active family or profile
    const active = getActiveFamily();
    const rel = active?.religion || localStorage.getItem("parampara_religion") || "Hindu";
    setUserReligion(rel);

    try {
      const s = localStorage.getItem(`parampara_custom_festivals_${getActiveFamily()?.id || "default"}`);
      const r = localStorage.getItem("parampara_reminders");
      if (s) setCustomFests(JSON.parse(s));
      if (r) setReminders(new Set(JSON.parse(r)));
    } catch {}
  }, []);

  function saveCustom(updated: Festival[]) {
    setCustomFests(updated);
    localStorage.setItem(`parampara_custom_festivals_${getActiveFamily()?.id || "default"}`, JSON.stringify(updated));
  }

  function saveReminders(updated: Set<string>) {
    setReminders(updated);
    localStorage.setItem("parampara_reminders", JSON.stringify(Array.from(updated)));
  }

  function toggleReminder(id: string) {
    const n = new Set(reminders);
    n.has(id) ? n.delete(id) : n.add(id);
    saveReminders(n);
    toast.success(n.has(id) ? "Reminder set! 🔔" : "Reminder removed");
  }

  function addCustomFestival(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.date) return toast.error("Name and date are required");
    const f: Festival = {
      id: `custom-${Date.now()}`,
      name: form.name.trim(), date: form.date,
      religion: form.religion || "Custom",
      significance: form.significance.trim() || "Custom family festival",
      ritualSteps: [], food: form.food.trim(), samagri: [], isCustom: true,
    };
    saveCustom([...customFests, f]);
    setForm({ name:"", date:"", significance:"", food:"", religion:"Custom" });
    setShowForm(false);
    toast.success(`${f.name} added! 🗓️`);
  }

  // Build full list
  const allFestivals = [
    ...ALL_PRESET_FESTIVALS.map(f => ({ ...f, days: daysUntil(f.date) })),
    ...customFests.map(f => ({ ...f, days: daysUntil(f.date) })),
  ].sort((a,b) => a.days - b.days);

  // Apply filter
  const filtered = allFestivals.filter(f => {
    const matchSearch = !search || f.name.toLowerCase().includes(search.toLowerCase());
    let matchFilter = true;
    if (filter === "My Religion") matchFilter = f.religion === userReligion || f.isCustom;
    else if (filter === "Today & This Week") matchFilter = f.days >= 0 && f.days <= 7;
    else if (filter === "This Month") matchFilter = f.days >= 0 && f.days <= 30;
    else if (filter !== "All") matchFilter = f.religion === filter;
    return matchSearch && matchFilter;
  });

  // Stats
  const upcoming7  = allFestivals.filter(f => f.days >= 0 && f.days <= 7).length;
  const upcoming30 = allFestivals.filter(f => f.days >= 0 && f.days <= 30).length;
  const myReligionCount = allFestivals.filter(f => f.religion === userReligion).length;

  const inp: React.CSSProperties = { width:"100%", padding:"10px 13px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, fontFamily:F.sans, background:C.ivory, color:C.charcoal, outline:"none", boxSizing:"border-box" };

  return (
    <AppShell>
      {/* Add festival modal */}
      {showForm && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:C.white, borderRadius:20, padding:"28px 24px", width:"100%", maxWidth:460, position:"relative" }}>
            <button onClick={()=>setShowForm(false)} style={{ position:"absolute", top:14, right:14, background:"none", border:"none", cursor:"pointer", color:C.gray, fontSize:20 }}>×</button>
            <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:20 }}>Add Custom Festival</h2>
            <form onSubmit={addCustomFestival}>
              <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Festival name *</label>
              <input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="e.g., Kul Devi Puja" required style={{...inp,marginBottom:14}}/>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:14 }}>
                <div>
                  <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Date *</label>
                  <input type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} required style={inp}/>
                </div>
                <div>
                  <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Religion</label>
                  <select value={form.religion} onChange={e=>setForm(f=>({...f,religion:e.target.value}))} style={inp}>
                    {["Custom","Hindu","Sikh","Muslim","Christian","Jain","Buddhist"].map(r=><option key={r}>{r}</option>)}
                  </select>
                </div>
              </div>
              <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Significance</label>
              <textarea value={form.significance} onChange={e=>setForm(f=>({...f,significance:e.target.value}))} placeholder="What does this festival mean to your family?" rows={2} style={{...inp,resize:"vertical",marginBottom:14}}/>
              <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Traditional food</label>
              <input value={form.food} onChange={e=>setForm(f=>({...f,food:e.target.value}))} placeholder="e.g., Kheer, Puri" style={{...inp,marginBottom:20}}/>
              <div style={{ display:"flex", gap:10 }}>
                <button type="button" onClick={()=>setShowForm(false)} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, cursor:"pointer", color:C.gray, background:C.white, fontFamily:F.sans }}>Cancel</button>
                <button type="submit" style={{ flex:1, padding:"11px", background:`linear-gradient(135deg,${C.saffron},#B8922A)`, border:"none", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer", color:"#fff", fontFamily:F.sans }}>Add Festival</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div style={{ padding:"24px 20px", maxWidth:720, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20, flexWrap:"wrap", gap:10 }}>
          <div>
            <h1 style={{ fontFamily:F.serif, fontSize:22, fontWeight:600, color:C.charcoal, margin:0 }}>Festival Calendar</h1>
            <p style={{ fontSize:13, color:C.gray, marginTop:3 }}>Showing {filtered.length} festivals · {userReligion} profile</p>
          </div>
          <button onClick={()=>setShowForm(true)} style={{ display:"flex", alignItems:"center", gap:6, background:C.saffron, color:"#fff", border:"none", borderRadius:9, padding:"9px 16px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
            <Plus size={13}/> Add Custom
          </button>
        </div>

        {/* Stats row */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:20 }}>
          {[
            { label:"This week", value:upcoming7, emoji:"📅" },
            { label:"This month", value:upcoming30, emoji:"🗓️" },
            { label:`${userReligion} festivals`, value:myReligionCount, emoji:"🪔" },
          ].map(({ label, value, emoji }) => (
            <div key={label} style={{ background:C.white, borderRadius:12, padding:"14px 12px", border:`1px solid ${C.border}`, textAlign:"center" }}>
              <p style={{ fontSize:20, margin:0 }}>{emoji}</p>
              <p style={{ fontFamily:F.serif, fontSize:22, fontWeight:700, color:C.saffron, margin:"4px 0 0" }}>{value}</p>
              <p style={{ fontSize:11, color:C.gray, margin:0 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div style={{ position:"relative", marginBottom:14 }}>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search festivals…"
            style={{ width:"100%", padding:"10px 16px 10px 40px", border:`1px solid ${C.border}`, borderRadius:10, fontSize:13, fontFamily:F.sans, background:C.white, color:C.charcoal, outline:"none", boxSizing:"border-box" }}/>
          <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", fontSize:14 }}>🔍</span>
        </div>

        {/* Filter tabs */}
        <div style={{ display:"flex", gap:6, marginBottom:20, overflowX:"auto", paddingBottom:4 }}>
          {["My Religion", "All", "Today & This Week", "This Month", ...RELIGIONS.filter(r=>r!=="All" && r!=="Custom")].map(r => {
            const meta = RELIGION_META[r];
            const isActive = filter === r;
            return (
              <button key={r} onClick={()=>setFilter(r)}
                style={{ display:"flex", alignItems:"center", gap:5, padding:"7px 14px", borderRadius:20, border:`1px solid ${isActive?(meta?.color||C.saffron):C.border}`, background:isActive?(meta?.bg||C.saffronLight):C.white, color:isActive?(meta?.color||C.saffron):C.gray, fontSize:12, fontWeight:isActive?700:400, cursor:"pointer", fontFamily:F.sans, whiteSpace:"nowrap", flexShrink:0, transition:"all 0.15s" }}>
                {meta?.emoji && <span>{meta.emoji}</span>}
                {r === "My Religion" ? `My Religion (${userReligion})` : r}
              </button>
            );
          })}
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <div style={{ background:C.white, borderRadius:14, border:`1px solid ${C.border}`, padding:"40px 24px", textAlign:"center" }}>
            <p style={{ fontSize:32, marginBottom:10 }}>🔍</p>
            <p style={{ fontSize:15, fontWeight:600, color:C.charcoal, marginBottom:6 }}>No festivals found</p>
            <p style={{ fontSize:13, color:C.gray }}>Try a different filter or add a custom festival</p>
          </div>
        )}

        {/* Festival list */}
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {filtered.map(f => {
            const dayLabel = getDayLabel(f.days);
            const meta = RELIGION_META[f.religion] || RELIGION_META.Custom;
            const isExp = expanded === f.id;
            const hasReminder = reminders.has(f.id);
            const isPast = f.days < 0;

            return (
              <div key={f.id} style={{ background:C.white, borderRadius:14, border:`1px solid ${f.days===0?"#DC2626":f.days<=7&&f.days>=0?C.saffron:C.border}`, overflow:"hidden", opacity:isPast?0.6:1 }}>
                {/* Festival row */}
                <div style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 16px", cursor:"pointer" }}
                  onClick={()=>setExpanded(isExp ? null : f.id)}>
                  {/* Religion badge */}
                  <div style={{ width:40, height:40, borderRadius:10, background:meta.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>
                    {meta.emoji}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                      <p style={{ fontSize:14, fontWeight:600, color:C.charcoal, margin:0 }}>{f.name}</p>
                      <span style={{ fontSize:10, fontWeight:700, background:meta.bg, color:meta.color, padding:"2px 8px", borderRadius:20, flexShrink:0 }}>{f.religion}</span>
                      {f.isCustom && <span style={{ fontSize:10, fontWeight:600, background:"#F4F4F5", color:C.gray, padding:"2px 8px", borderRadius:20 }}>Custom</span>}
                    </div>
                    <div style={{ display:"flex", gap:12, alignItems:"center", marginTop:3, flexWrap:"wrap" }}>
                      <p style={{ fontSize:11, color:C.gray, margin:0 }}>{formatDate(f.date)}</p>
                      <span style={{ fontSize:11, fontWeight:600, background:dayLabel.bg, color:dayLabel.color, padding:"1px 8px", borderRadius:10 }}>{dayLabel.text}</span>
                    </div>
                  </div>
                  <div style={{ display:"flex", gap:6, alignItems:"center", flexShrink:0 }}>
                    {!isPast && (
                      <button onClick={e=>{e.stopPropagation();toggleReminder(f.id);}}
                        style={{ background:hasReminder?C.saffronLight:"#F4F4F5", border:"none", borderRadius:8, padding:"6px 8px", cursor:"pointer", display:"flex", alignItems:"center", color:hasReminder?C.saffron:C.gray }}>
                        {hasReminder ? <Bell size={14}/> : <BellOff size={14}/>}
                      </button>
                    )}
                    {f.isCustom && (
                      <button onClick={e=>{e.stopPropagation();setDeleteId(f.id);}}
                        style={{ background:"#FEF2F2", border:"none", borderRadius:8, padding:"6px 8px", cursor:"pointer", display:"flex", alignItems:"center", color:"#DC2626" }}>
                        <Trash2 size={14}/>
                      </button>
                    )}
                    {isExp ? <ChevronUp size={16} color={C.gray}/> : <ChevronDown size={16} color={C.gray}/>}
                  </div>
                </div>

                {/* Expanded details */}
                {isExp && (
                  <div style={{ borderTop:`1px solid ${C.border}`, padding:"16px 16px 18px" }}>
                    {f.significance && (
                      <p style={{ fontSize:13, color:C.charcoal, lineHeight:1.7, marginBottom:f.ritualSteps?.length?16:0 }}>{f.significance}</p>
                    )}
                    {f.ritualSteps && f.ritualSteps.length > 0 && (
                      <div style={{ marginBottom:12 }}>
                        <p style={{ fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", color:C.saffron, marginBottom:8 }}>Ritual Steps</p>
                        {f.ritualSteps.map((s,i)=>(
                          <div key={i} style={{ display:"flex", gap:10, marginBottom:6 }}>
                            <span style={{ width:20, height:20, borderRadius:"50%", background:C.saffronLight, color:C.saffron, fontSize:10, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{i+1}</span>
                            <span style={{ fontSize:13, color:C.charcoal, lineHeight:1.5 }}>{s}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {f.food && (
                      <div style={{ background:C.goldLight, borderRadius:10, padding:"10px 14px", marginBottom:10 }}>
                        <p style={{ fontSize:11, fontWeight:700, color:C.gold, margin:"0 0 4px" }}>🍽️ TRADITIONAL FOOD</p>
                        <p style={{ fontSize:13, color:C.charcoal, margin:0 }}>{f.food}</p>
                      </div>
                    )}
                    {f.samagri && f.samagri.length > 0 && (
                      <div style={{ background:C.forestLight, borderRadius:10, padding:"10px 14px" }}>
                        <p style={{ fontSize:11, fontWeight:700, color:C.forest, margin:"0 0 6px" }}>🛒 SAMAGRI NEEDED</p>
                        <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                          {f.samagri.map(s=>(
                            <span key={s} style={{ fontSize:12, background:C.white, border:`1px solid rgba(26,92,66,0.2)`, borderRadius:20, padding:"3px 10px", color:C.charcoal }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Delete confirm */}
      {deleteId && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:C.white, borderRadius:16, padding:28, maxWidth:320, width:"100%" }}>
            <h3 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Remove festival?</h3>
            <p style={{ fontSize:13, color:C.gray, marginBottom:20 }}>This custom festival will be permanently removed.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>setDeleteId(null)} style={{ flex:1, padding:"10px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, cursor:"pointer", background:C.white, fontFamily:F.sans }}>Cancel</button>
              <button onClick={()=>{ saveCustom(customFests.filter(f=>f.id!==deleteId)); setDeleteId(null); toast.success("Removed"); }} style={{ flex:1, padding:"10px", background:"#DC2626", border:"none", borderRadius:9, fontSize:13, fontWeight:600, cursor:"pointer", color:"#fff", fontFamily:F.sans }}>Remove</button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}

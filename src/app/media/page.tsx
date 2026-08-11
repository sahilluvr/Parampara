"use client";
import { getActiveFamily, migrateLegacyData } from "@/lib/families";
import { useState, useEffect, useRef, useCallback } from "react";
import AppShell from "@/components/layout/AppShell";
import {
  Upload, Mic, Square, Heart, ImageIcon, Video, Music,
  X, Plus, Trash2, Camera, Play, Download, ZoomIn,
  ChevronLeft, ChevronRight, Pause, Volume2
} from "lucide-react";
import toast from "react-hot-toast";

const C = {
  saffron:"#C8541A", saffronLight:"#FDF0E6", border:"rgba(184,146,42,0.15)",
  forest:"#1A5C42", forestLight:"#E8F4EE", ivory:"#FAF7F2",
  charcoal:"#18181B", gray:"#71717A", white:"#fff",
};
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

type MediaType = "photo"|"video"|"audio";
type MediaItem = {
  id: string; type: MediaType; label: string;
  ritual: string; date: string; reactions: number;
  previewUrl?: string; // object URL — lives only in this session
  dataUrl?: string;    // base64 — persisted in localStorage for photos <1MB
};

const TYPE_CFG = {
  photo: { icon: ImageIcon, color: C.saffron,  bg: C.saffronLight, label:"Photo"  },
  video: { icon: Video,     color: "#7C3AED",  bg: "#F5F3FF",      label:"Video"  },
  audio: { icon: Music,     color: C.forest,   bg: C.forestLight,  label:"Audio"  },
};

const inp: React.CSSProperties = {
  width:"100%", padding:"10px 13px", border:`1px solid ${C.border}`, borderRadius:9,
  fontSize:13, fontFamily:F.sans, background:C.ivory, color:C.charcoal,
  outline:"none", boxSizing:"border-box",
};

/* ─── Lightbox ──────────────────────────────────────────────── */
function Lightbox({
  items, index, onClose, onPrev, onNext, onDelete,
}: {
  items: MediaItem[]; index: number;
  onClose:()=>void; onPrev:()=>void; onNext:()=>void;
  onDelete:(id:string)=>void;
}) {
  const item = items[index];
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // keyboard nav
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  // reset play state when switching items
  useEffect(() => { setPlaying(false); }, [index]);

  const src = item.previewUrl || item.dataUrl || "";

  function download() {
    if (!src) { toast.error("File not available for download in this session. Please re-upload."); return; }
    const a = document.createElement("a");
    a.href = src;
    a.download = `${item.label}.${item.type === "photo" ? "jpg" : item.type === "video" ? "mp4" : "webm"}`;
    a.click();
    toast.success("Download started!");
  }

  function togglePlay() {
    const el = videoRef.current || audioRef.current;
    if (!el) return;
    if (el.paused) { el.play(); setPlaying(true); }
    else { el.pause(); setPlaying(false); }
  }

  return (
    <div
      onClick={onClose}
      style={{
        position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:500,
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      }}
    >
      {/* Top bar */}
      <div
        onClick={e=>e.stopPropagation()}
        style={{
          position:"fixed", top:0, left:0, right:0, height:56,
          background:"rgba(0,0,0,0.7)", backdropFilter:"blur(8px)",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          padding:"0 20px", zIndex:10,
        }}
      >
        <div>
          <p style={{ fontSize:14, fontWeight:600, color:"#fff", margin:0 }}>{item.label}</p>
          <p style={{ fontSize:11, color:"rgba(255,255,255,0.45)", margin:0 }}>{item.ritual} · {item.date}</p>
        </div>
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          <button onClick={download}
            style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:500, color:"#fff", cursor:"pointer" }}>
            <Download size={13}/> Download
          </button>
          <button onClick={()=>{ onDelete(item.id); onClose(); }}
            style={{ display:"flex", alignItems:"center", gap:6, background:"rgba(220,38,38,0.2)", border:"1px solid rgba(220,38,38,0.3)", borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:500, color:"#F87171", cursor:"pointer" }}>
            <Trash2 size={13}/> Delete
          </button>
          <button onClick={onClose}
            style={{ width:36, height:36, borderRadius:"50%", background:"rgba(255,255,255,0.1)", border:"none", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
            <X size={18} color="#fff"/>
          </button>
        </div>
      </div>

      {/* Main media area */}
      <div onClick={e=>e.stopPropagation()} style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", width:"100%", padding:"72px 80px 24px" }}>
        {item.type === "photo" && src && (
          <img src={src} alt={item.label}
            style={{ maxWidth:"100%", maxHeight:"100%", objectFit:"contain", borderRadius:8, boxShadow:"0 20px 60px rgba(0,0,0,0.5)" }}/>
        )}

        {item.type === "photo" && !src && (
          <div style={{ textAlign:"center", color:"rgba(255,255,255,0.4)" }}>
            <ImageIcon size={64} style={{ marginBottom:16, opacity:0.3 }}/>
            <p style={{ fontSize:14 }}>Image not available in this session.</p>
            <p style={{ fontSize:12, marginTop:6 }}>Re-upload the file to view it.</p>
          </div>
        )}

        {item.type === "video" && src && (
          <div style={{ position:"relative", maxWidth:"100%", maxHeight:"100%" }}>
            <video
              ref={videoRef}
              src={src}
              controls
              style={{ maxWidth:"90vw", maxHeight:"70vh", borderRadius:8, boxShadow:"0 20px 60px rgba(0,0,0,0.5)" }}
              onPlay={()=>setPlaying(true)}
              onPause={()=>setPlaying(false)}
            />
          </div>
        )}

        {item.type === "video" && !src && (
          <div style={{ textAlign:"center", color:"rgba(255,255,255,0.4)" }}>
            <Video size={64} style={{ marginBottom:16, opacity:0.3 }}/>
            <p style={{ fontSize:14 }}>Video not available in this session.</p>
            <p style={{ fontSize:12, marginTop:6 }}>Re-upload the file to view it.</p>
          </div>
        )}

        {item.type === "audio" && (
          <div onClick={e=>e.stopPropagation()}
            style={{ background:"rgba(255,255,255,0.06)", borderRadius:20, padding:48, textAlign:"center", minWidth:320, border:"1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ width:80, height:80, borderRadius:"50%", background:C.forestLight, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px", cursor:src?"pointer":"default" }}
              onClick={src ? togglePlay : undefined}>
              {playing
                ? <Pause size={32} color={C.forest}/>
                : <Play size={32} color={C.forest} fill={C.forest}/>
              }
            </div>
            <p style={{ fontSize:16, fontWeight:600, color:"#fff", margin:"0 0 6px" }}>{item.label}</p>
            <p style={{ fontSize:12, color:"rgba(255,255,255,0.4)", marginBottom:24 }}>{item.ritual} · {item.date}</p>
            {src
              ? <audio ref={audioRef} src={src} controls style={{ width:"100%", marginBottom:16 }} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)}/>
              : <p style={{ fontSize:12, color:"rgba(255,255,255,0.3)", marginBottom:16 }}>Re-upload to play in this session</p>
            }
            <div style={{ display:"flex", gap:8, justifyContent:"center" }}>
              <Volume2 size={14} color="rgba(255,255,255,0.3)"/>
              <span style={{ fontSize:11, color:"rgba(255,255,255,0.3)" }}>Use the player controls above</span>
            </div>
          </div>
        )}
      </div>

      {/* Prev / Next */}
      {items.length > 1 && (
        <>
          <button onClick={e=>{e.stopPropagation();onPrev();}}
            style={{ position:"fixed", left:16, top:"50%", transform:"translateY(-50%)", width:44, height:44, borderRadius:"50%", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", zIndex:10 }}>
            <ChevronLeft size={20} color="#fff"/>
          </button>
          <button onClick={e=>{e.stopPropagation();onNext();}}
            style={{ position:"fixed", right:16, top:"50%", transform:"translateY(-50%)", width:44, height:44, borderRadius:"50%", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", zIndex:10 }}>
            <ChevronRight size={20} color="#fff"/>
          </button>
        </>
      )}

      {/* Index */}
      <div style={{ position:"fixed", bottom:20, left:"50%", transform:"translateX(-50%)", fontSize:12, color:"rgba(255,255,255,0.35)", zIndex:10 }}>
        {index+1} / {items.length}
      </div>
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export default function MediaPage() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const [lightboxIndex, setLightboxIndex] = useState<number|null>(null);
  const [filter, setFilter] = useState("All");
  const [showUpload, setShowUpload] = useState(false);
  const [deleteId, setDeleteId] = useState<string|null>(null);
  const [recording, setRecording] = useState(false);
  const [recTime, setRecTime] = useState(0);
  const [caption, setCaption] = useState("");
  const [ritual, setRitual] = useState("General");
  const fileRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout|null>(null);
  const mediaRecRef = useRef<MediaRecorder|null>(null);
  const audioChunks = useRef<BlobPart[]>([]);

  /* load from storage — scoped to active family */
  useEffect(() => {
    migrateLegacyData();
    const familyId = getActiveFamily()?.id || "default";
    const mediaKey = `parampara_media_${familyId}`;
    const likesKey = `parampara_likes_${familyId}`;
    try {
      const raw = localStorage.getItem(mediaKey);
      const likes = localStorage.getItem(likesKey);
      if (raw) {
        const parsed: MediaItem[] = JSON.parse(raw);
        // Restore previewUrl from dataUrl if missing
        const restored = parsed.map(item => ({
          ...item,
          previewUrl: item.previewUrl || item.dataUrl || undefined,
        }));
        setItems(restored);
      } else {
        setItems([]); // Clear items when switching families
      }
      if (likes) setLiked(new Set(JSON.parse(likes)));
      else setLiked(new Set());
    } catch {}
  }, []);

  /* Get the family-scoped storage keys */
  function getStorageKeys() {
    const familyId = getActiveFamily()?.id || "default";
    return {
      mediaKey: `parampara_media_${familyId}`,
      likesKey: `parampara_likes_${familyId}`,
    };
  }

  /* persist — save all data including previewUrl (now always dataUrl, not objectURL) */
  function persist(list: MediaItem[]) {
    const { mediaKey } = getStorageKeys();
    try {
      // Keep previewUrl since we now always store as dataUrl
      localStorage.setItem(mediaKey, JSON.stringify(list));
    } catch (err) {
      // localStorage quota exceeded — try storing without large dataUrls
      console.warn("Storage full, storing metadata only:", err);
      const slim = list.map(({ dataUrl: _, previewUrl: __, ...rest }) => rest);
      localStorage.setItem(mediaKey, JSON.stringify(slim));
      toast.error("Storage limit reached. Some media previews may not persist.");
    }
  }

  function saveItems(list: MediaItem[]) { setItems(list); persist(list); }
  function saveLikes(set: Set<string>) {
    const { likesKey } = getStorageKeys();
    setLiked(set);
    localStorage.setItem(likesKey, JSON.stringify(Array.from(set)));
  }

  /* file upload */
  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files?.length) return;
    const added: MediaItem[] = [];
    let done = 0;
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    const fileArr = Array.from(files);
    const tooLarge = fileArr.filter(f => f.size > MAX_SIZE);
    if (tooLarge.length > 0) {
      toast.error(`${tooLarge.map(f=>f.name).join(", ")} is too large. Max 5MB per file.`);
      const valid = fileArr.filter(f => f.size <= MAX_SIZE);
      if (!valid.length) { e.target.value = ""; return; }
    }
    const validFiles = fileArr.filter(f => f.size <= MAX_SIZE);
    if (!validFiles.length) { e.target.value = ""; return; }
    validFiles.forEach(file => {
      const type: MediaType = file.type.startsWith("video/") ? "video" : file.type.startsWith("audio/") ? "audio" : "photo";
      const id = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const base: MediaItem = {
        id, type,
        label: caption || file.name.replace(/\.[^.]+$/, ""),
        ritual, date: new Date().toLocaleDateString("en-IN",{month:"short",year:"numeric"}),
        reactions:0,
      };
      // Always read as dataUrl so it persists across sessions
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        base.dataUrl = dataUrl;
        base.previewUrl = dataUrl; // use dataUrl as preview too
        added.push(base); done++;
        if (done === validFiles.length) finalize(added);
      };
      reader.onerror = () => {
        toast.error(`Failed to read ${file.name}`);
        done++;
        if (done === validFiles.length && added.length > 0) finalize(added);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  }

  function finalize(added: MediaItem[]) {
    const updated = [...added, ...items];
    saveItems(updated);
    setShowUpload(false); setCaption("");
    toast.success(`${added.length} file${added.length!==1?"s":""} added! 📸`);
  }

  /* voice memo recording */
  async function toggleRecord() {
    if (recording) {
      mediaRecRef.current?.stop();
      clearInterval(timerRef.current!);
      setRecording(false); setRecTime(0);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio:true });
      const mr = new MediaRecorder(stream);
      mediaRecRef.current = mr;
      audioChunks.current = [];
      mr.ondataavailable = e => audioChunks.current.push(e.data);
      mr.onstop = () => {
        stream.getTracks().forEach(t=>t.stop());
        const blob = new Blob(audioChunks.current, { type:"audio/webm" });
        const url = URL.createObjectURL(blob);
        const memo: MediaItem = {
          id:`memo-${Date.now()}`, type:"audio",
          label: caption || `Voice memo ${new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}`,
          ritual, date: new Date().toLocaleDateString("en-IN",{month:"short",year:"numeric"}),
          reactions:0, previewUrl: url,
        };
        const updated = [memo, ...items];
        saveItems(updated);
        setCaption("");
        toast.success("Voice memo saved! 🎙");
      };
      mr.start();
      setRecording(true);
      timerRef.current = setInterval(() => setRecTime(p=>p+1), 1000);
    } catch {
      toast.error("Microphone access denied. Please allow mic permission.");
    }
  }

  function deleteItem(id: string) {
    const updated = items.filter(i=>i.id!==id);
    saveItems(updated); setDeleteId(null);
    if (lightboxIndex !== null) setLightboxIndex(null);
    toast.success("Memory removed");
  }

  /* filtered list for display */
  const filtered = items.filter(it => {
    if (filter==="All") return true;
    if (filter==="Photos") return it.type==="photo";
    if (filter==="Videos") return it.type==="video";
    if (filter==="Audio") return it.type==="audio";
    return it.ritual===filter;
  });

  /* lightbox helpers */
  const openLightbox = useCallback((filteredIdx: number) => setLightboxIndex(filteredIdx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevItem = useCallback(() => setLightboxIndex(i => i===null?null:(i-1+filtered.length)%filtered.length), [filtered.length]);
  const nextItem = useCallback(() => setLightboxIndex(i => i===null?null:(i+1)%filtered.length), [filtered.length]);

  const mins = Math.floor(recTime/60);
  const secs = (recTime%60).toString().padStart(2,"0");

  return (
    <AppShell>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
          onDelete={deleteItem}
        />
      )}

      {/* ── Delete confirm ── */}
      {deleteId && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
          <div style={{ background:C.white, borderRadius:16, padding:28, maxWidth:340, width:"100%" }}>
            <h3 style={{ fontFamily:F.serif, fontSize:18, fontWeight:600, color:C.charcoal, marginBottom:8 }}>Remove this memory?</h3>
            <p style={{ fontSize:13, color:C.gray, marginBottom:24 }}>This will permanently remove it from your Memory Vault.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>setDeleteId(null)} style={{ flex:1, padding:"11px", border:`1px solid ${C.border}`, borderRadius:9, fontSize:13, cursor:"pointer", color:C.gray, background:C.white, fontFamily:F.sans }}>Cancel</button>
              <button onClick={()=>deleteItem(deleteId)} style={{ flex:1, padding:"11px", background:"#DC2626", border:"none", borderRadius:9, fontSize:13, fontWeight:600, cursor:"pointer", color:"#fff", fontFamily:F.sans }}>Remove</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Upload modal ── */}
      {showUpload && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:24 }}>
          <div style={{ background:C.white, borderRadius:20, padding:32, width:"100%", maxWidth:440, position:"relative" }}>
            <button onClick={()=>setShowUpload(false)} style={{ position:"absolute", top:16, right:16, background:"none", border:"none", cursor:"pointer", color:C.gray }}><X size={20}/></button>
            <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:20 }}>Upload Memory</h2>
            <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Caption</label>
            <input value={caption} onChange={e=>setCaption(e.target.value)} placeholder="e.g., Diwali 2025 with the family" style={{...inp,marginBottom:12}}/>
            <label style={{ fontSize:12, fontWeight:600, color:C.charcoal, display:"block", marginBottom:6 }}>Related ritual</label>
            <select value={ritual} onChange={e=>setRitual(e.target.value)} style={{...inp,marginBottom:24}}>
              {["General","Namkaran","Griha Pravesh","Diwali","Navratri","Holi","Mundan","Wedding","Raksha Bandhan","Other"].map(r=><option key={r}>{r}</option>)}
            </select>
            <input ref={fileRef} type="file" multiple accept="image/*,video/*,audio/*" onChange={handleFiles} style={{ display:"none" }}/>
            <button onClick={()=>fileRef.current?.click()}
              style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:8, background:`linear-gradient(135deg,${C.saffron},#B8922A)`, color:"#fff", border:"none", borderRadius:10, padding:"13px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
              <Camera size={16}/> Choose Files
            </button>
            <p style={{ fontSize:11, color:C.gray, textAlign:"center", marginTop:10 }}>Photos · Videos · Audio · Max 100MB each</p>
          </div>
        </div>
      )}

      {/* ── Page content ── */}
      <div style={{ padding:"24px", maxWidth:1000, margin:"0 auto" }}>

        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
          <div>
            <h1 style={{ fontFamily:F.serif, fontSize:24, fontWeight:600, color:C.charcoal, margin:0 }}>Memory Vault</h1>
            <p style={{ fontSize:13, color:C.gray, marginTop:4 }}>{items.length} memor{items.length!==1?"ies":"y"} preserved</p>
          </div>
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={toggleRecord}
              style={{ display:"flex", alignItems:"center", gap:6, padding:"9px 14px", borderRadius:9, border:`1px solid ${recording?"rgba(220,50,50,0.3)":C.border}`, background:recording?"#FEF2F2":C.white, color:recording?"#DC2626":C.gray, cursor:"pointer", fontSize:13, fontWeight:500, fontFamily:F.sans }}>
              {recording ? <Square size={13}/> : <Mic size={13}/>}
              {recording ? `● ${mins}:${secs}` : "Voice Memo"}
            </button>
            <button onClick={()=>setShowUpload(true)}
              style={{ display:"flex", alignItems:"center", gap:6, background:C.saffron, color:"#fff", border:"none", borderRadius:9, padding:"9px 16px", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
              <Upload size={13}/> Upload
            </button>
          </div>
        </div>

        {/* Recording bar */}
        {recording && (
          <div style={{ background:"#FEF2F2", border:"1px solid rgba(220,50,50,0.2)", borderRadius:12, padding:14, marginBottom:16, display:"flex", alignItems:"center", gap:14 }}>
            <div style={{ display:"flex", alignItems:"flex-end", gap:2, height:28 }}>
              {Array.from({length:12},(_,i)=>(
                <div key={i} style={{ width:3, borderRadius:2, background:"#F87171", animation:`rb 0.6s ${i*0.07}s ease-in-out infinite`, height:10 }}/>
              ))}
            </div>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:13, fontWeight:600, color:"#DC2626", margin:0 }}>● Recording {mins}:{secs}</p>
              <input value={caption} onChange={e=>setCaption(e.target.value)} placeholder="Caption for this memo…"
                style={{ fontSize:12, color:C.gray, background:"none", border:"none", outline:"none", fontFamily:F.sans, marginTop:2, width:"100%" }}/>
            </div>
            <button onClick={toggleRecord} style={{ background:"#DC2626", color:"#fff", border:"none", borderRadius:8, padding:"8px 14px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
              ■ Stop & Save
            </button>
          </div>
        )}

        {/* Filters */}
        <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
          {["All","Photos","Videos","Audio"].map(f=>(
            <button key={f} onClick={()=>setFilter(f)}
              style={{ padding:"6px 14px", borderRadius:20, fontSize:12, fontWeight:500, border:`1px solid ${filter===f?"#C8541A":"rgba(200,84,26,0.2)"}`, background:filter===f?C.saffron:C.white, color:filter===f?"#fff":C.gray, cursor:"pointer", transition:"all 0.15s" }}>
              {f}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {items.length === 0 && (
          <div style={{ textAlign:"center", padding:"60px 24px", background:C.white, borderRadius:16, border:`1px solid ${C.border}` }}>
            <div style={{ fontSize:48, marginBottom:12 }}>📸</div>
            <h2 style={{ fontFamily:F.serif, fontSize:20, fontWeight:600, color:C.charcoal, marginBottom:8 }}>No memories yet</h2>
            <p style={{ fontSize:13, color:C.gray, maxWidth:360, margin:"0 auto 24px", lineHeight:1.6 }}>Upload photos, videos, or record voice memos to preserve your family&apos;s precious moments.</p>
            <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
              <button onClick={()=>setShowUpload(true)} style={{ display:"inline-flex", alignItems:"center", gap:6, background:C.saffron, color:"#fff", border:"none", borderRadius:10, padding:"12px 20px", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:F.sans }}>
                <Upload size={14}/> Upload media
              </button>
              <button onClick={toggleRecord} style={{ display:"inline-flex", alignItems:"center", gap:6, background:C.white, color:C.charcoal, border:`1px solid ${C.border}`, borderRadius:10, padding:"12px 20px", fontSize:13, fontWeight:500, cursor:"pointer", fontFamily:F.sans }}>
                <Mic size={14}/> Record voice memo
              </button>
            </div>
          </div>
        )}

        {items.length > 0 && filtered.length === 0 && (
          <div style={{ textAlign:"center", padding:40, color:C.gray }}>
            <p style={{ fontSize:14 }}>No {filter.toLowerCase()} found.</p>
            <button onClick={()=>setFilter("All")} style={{ marginTop:8, fontSize:12, color:C.saffron, background:"none", border:"none", cursor:"pointer", fontWeight:500 }}>Show all memories</button>
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 && (
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:14 }}>
            {filtered.map((item, fi) => {
              const cfg = TYPE_CFG[item.type];
              const Icon = cfg.icon;
              const isLiked = liked.has(item.id);
              const imgSrc = item.previewUrl || item.dataUrl || "";

              return (
                <div key={item.id}>
                  {/* Thumbnail card */}
                  <div
                    style={{ position:"relative", borderRadius:12, overflow:"hidden", border:`1px solid ${C.border}`, background:C.white, cursor:"pointer", aspectRatio:"1/1" }}
                    onClick={()=>openLightbox(fi)}
                  >
                    {/* Photo thumbnail */}
                    {item.type==="photo" && imgSrc && (
                      <img src={imgSrc} alt={item.label} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
                        onError={e=>{(e.target as HTMLImageElement).style.display="none";}}/>
                    )}

                    {/* Video thumbnail */}
                    {item.type==="video" && imgSrc && (
                      <>
                        <video src={imgSrc} style={{ width:"100%", height:"100%", objectFit:"cover" }} muted preload="metadata"/>
                        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0.3)" }}>
                          <div style={{ width:40, height:40, borderRadius:"50%", background:"rgba(255,255,255,0.9)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                            <Play size={18} color="#18181B" fill="#18181B" style={{ marginLeft:2 }}/>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Audio / no preview fallback */}
                    {(item.type==="audio" || !imgSrc) && (
                      <div style={{ width:"100%", height:"100%", background:cfg.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8 }}>
                        <Icon size={32} color={cfg.color}/>
                        <span style={{ fontSize:10, color:cfg.color, fontWeight:500 }}>{cfg.label}</span>
                      </div>
                    )}

                    {/* Type badge */}
                    <div style={{ position:"absolute", top:7, left:7, background:"rgba(0,0,0,0.55)", borderRadius:20, padding:"2px 8px", display:"flex", alignItems:"center", gap:4 }}>
                      <Icon size={9} color="#fff"/>
                      <span style={{ fontSize:9, color:"#fff", fontWeight:500 }}>{cfg.label}</span>
                    </div>

                    {/* Hover overlay */}
                    <div className="hover-overlay" style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0)", display:"flex", alignItems:"center", justifyContent:"center", gap:10, transition:"background 0.2s" }}>
                      <div style={{ opacity:0, transform:"scale(0.8)", transition:"all 0.2s" }} className="hover-icon">
                        {item.type==="photo" ? <ZoomIn size={22} color="#fff"/> : <Play size={22} color="#fff" fill="#fff"/>}
                      </div>
                    </div>

                    {/* Delete btn */}
                    <button
                      onClick={e=>{e.stopPropagation();setDeleteId(item.id);}}
                      style={{ position:"absolute", top:7, right:7, background:"rgba(220,38,38,0.85)", border:"none", borderRadius:"50%", width:24, height:24, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", opacity:0, transition:"opacity 0.2s" }}
                      className="del-btn"
                    >
                      <Trash2 size={11} color="#fff"/>
                    </button>
                  </div>

                  {/* Caption row */}
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:6, padding:"0 2px" }}>
                    <p style={{ fontSize:11, color:C.gray, margin:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:"calc(100% - 40px)" }}
                      title={item.label}>{item.label}</p>
                    <button
                      onClick={()=>{const n=new Set(liked);n.has(item.id)?n.delete(item.id):n.add(item.id);saveLikes(n);}}
                      style={{ display:"flex", alignItems:"center", gap:2, background:"none", border:"none", cursor:"pointer", padding:0, flexShrink:0 }}>
                      <Heart size={11} fill={isLiked?"#F87171":"none"} color={isLiked?"#F87171":"#CCC"}/>
                      <span style={{ fontSize:10, color:isLiked?"#F87171":C.gray }}>{item.reactions+(isLiked?1:0)}</span>
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Add tile */}
            <div onClick={()=>setShowUpload(true)}
              style={{ aspectRatio:"1/1", background:"transparent", borderRadius:12, border:`1px dashed rgba(200,84,26,0.3)`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", cursor:"pointer", gap:6 }}>
              <Plus size={20} color={C.saffron}/>
              <span style={{ fontSize:11, color:C.saffron, fontWeight:500 }}>Add</span>
            </div>
          </div>
        )}

        <p style={{ textAlign:"center", fontSize:11, color:C.gray, marginTop:24 }}>
          Photos &lt;800KB are saved permanently · Videos &amp; audio available in this browser session · Re-upload to view again
        </p>
      </div>

      <style>{`
        @keyframes rb{0%,100%{height:4px}50%{height:20px}}
        div:has(>.hover-overlay):hover .hover-overlay { background: rgba(0,0,0,0.4) !important; }
        div:has(>.hover-overlay):hover .hover-icon { opacity: 1 !important; transform: scale(1) !important; }
        div:has(>.del-btn):hover .del-btn { opacity: 1 !important; }
      `}</style>
    </AppShell>
  );
}

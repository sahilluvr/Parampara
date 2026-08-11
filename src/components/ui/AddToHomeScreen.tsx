"use client";
import { useState, useEffect } from "react";

export default function AddToHomeScreen() {
  const [show, setShow]       = useState(false);
  const [isIOS, setIsIOS]     = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<Event & { prompt?: ()=>void } | null>(null);

  useEffect(() => {
    // Check if already installed or dismissed
    const isDismissed = localStorage.getItem("parampara_a2hs_dismissed");
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (window.navigator as { standalone?: boolean }).standalone === true;
    if (isDismissed || isStandalone) return;

    // iOS detection
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as { MSStream?: unknown }).MSStream;
    setIsIOS(ios);

    // Android/Chrome install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as Event & { prompt?: ()=>void });
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    // Show iOS prompt after a delay
    if (ios) setTimeout(() => setShow(true), 5000);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  function dismiss() {
    setShow(false);
    setDismissed(true);
    localStorage.setItem("parampara_a2hs_dismissed", "1");
  }

  async function install() {
    if (deferredPrompt?.prompt) {
      deferredPrompt.prompt();
      dismiss();
    }
  }

  if (!show || dismissed) return null;

  return (
    <div style={{ position:"fixed", bottom:80, left:12, right:12, zIndex:500,
      background:"linear-gradient(135deg,#1A0A00,#2D1810)", border:"1px solid rgba(200,84,26,0.3)",
      borderRadius:16, padding:"16px 18px", boxShadow:"0 8px 40px rgba(0,0,0,0.5)",
      display:"flex", alignItems:"center", gap:14 }}>
      {/* Diya icon */}
      <div style={{ width:44, height:44, borderRadius:12, background:"linear-gradient(135deg,#C8541A,#B8922A)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>🪔</div>
      <div style={{ flex:1, minWidth:0 }}>
        <p style={{ fontSize:14, fontWeight:700, color:"#fff", margin:0, fontFamily:"Georgia,serif" }}>Add Parampara to Home Screen</p>
        {isIOS ? (
          <p style={{ fontSize:12, color:"rgba(255,255,255,0.5)", margin:"3px 0 0", lineHeight:1.4 }}>
            Tap <strong style={{ color:"rgba(255,255,255,0.7)" }}>Share</strong> → <strong style={{ color:"rgba(255,255,255,0.7)" }}>Add to Home Screen</strong>
          </p>
        ) : (
          <p style={{ fontSize:12, color:"rgba(255,255,255,0.5)", margin:"3px 0 0" }}>
            Quick access like a native app
          </p>
        )}
      </div>
      <div style={{ display:"flex", gap:8, flexShrink:0 }}>
        <button onClick={dismiss}
          style={{ background:"rgba(255,255,255,0.08)", border:"none", borderRadius:8, padding:"7px 10px", fontSize:12, color:"rgba(255,255,255,0.4)", cursor:"pointer" }}>
          Not now
        </button>
        {!isIOS && (
          <button onClick={install}
            style={{ background:"linear-gradient(135deg,#C8541A,#B8922A)", border:"none", borderRadius:8, padding:"7px 14px", fontSize:12, fontWeight:700, color:"#fff", cursor:"pointer" }}>
            Install
          </button>
        )}
      </div>
    </div>
  );
}

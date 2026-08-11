"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { C, F } from "@/lib/constants";

const NAV_LINKS = [
  { label:"Home",         href:"/"              },
  { label:"About",        href:"/about"         },
  { label:"What We Do",   href:"/what-we-do"    },
  { label:"Blog",         href:"/blog"          },
  { label:"Rituals",      href:"/rituals-services"},
  { label:"Pricing",      href:"/pricing"       },
  { label:"Contact",      href:"/contact"       },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive:true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isHome = pathname === "/";
  const light = !scrolled && isHome; // white text on dark hero

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000,
        transition:"all 0.35s ease",
        background: light ? "transparent" : "rgba(250,247,242,0.97)",
        backdropFilter: light ? "none" : "blur(20px)",
        borderBottom: light ? "none" : "1px solid rgba(184,146,42,0.12)",
        boxShadow: scrolled && !isHome ? "0 4px 30px rgba(0,0,0,0.06)" : "none",
      }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", height:68, display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none", flexShrink:0 }}>
            <NextImage src="/logo.png" alt="OurParampara" width={40} height={40} style={{ borderRadius:"50%", objectFit:"cover" }}/>
            <div>
              <span style={{ fontFamily:F.serif, fontSize:20, fontWeight:700, color:light?"#fff":C.charcoal, letterSpacing:"-0.3px", lineHeight:1 }}>OurParampara</span>
              <div style={{ fontSize:9, letterSpacing:1.5, textTransform:"uppercase", color:light?"rgba(255,255,255,0.65)":C.gold, marginTop:1 }}>Heritage Platform</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display:"flex", alignItems:"center", gap:2 }} className="nav-desktop">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link key={label} href={href} style={{
                  position:"relative",
                  padding:"8px 13px",
                  borderRadius:8,
                  fontSize:13,
                  fontWeight: active ? 600 : 500,
                  color: light
                    ? (active ? "#fff" : "rgba(255,255,255,0.75)")
                    : (active ? C.saffron : C.gray),
                  textDecoration:"none",
                  transition:"all 0.2s",
                  background: !light && active ? C.saffronLight : "transparent",
                }}>
                  {label}
                  {/* Active underline indicator */}
                  {active && (
                    <span style={{
                      position:"absolute",
                      bottom:2, left:"50%",
                      transform:"translateX(-50%)",
                      width:20, height:2,
                      borderRadius:2,
                      background: light ? "#fff" : C.saffron,
                    }}/>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div style={{ display:"flex", alignItems:"center", gap:10 }} className="nav-desktop">
            <Link href="/auth/login" style={{ fontSize:13, fontWeight:500, color:light?"rgba(255,255,255,0.8)":C.gray, padding:"8px 14px", borderRadius:8, textDecoration:"none" }}>
              Sign in
            </Link>
            <Link href="/auth/signup" style={{
              display:"flex", alignItems:"center", gap:6,
              background:"linear-gradient(135deg,#C8541A,#B8922A)",
              color:"#fff", padding:"9px 20px", borderRadius:10,
              fontSize:13, fontWeight:600, textDecoration:"none",
              boxShadow:"0 4px 16px rgba(200,84,26,0.35)",
            }}>
              Start Free →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(v=>!v)} className="nav-mobile"
            style={{ background:"none", border:"none", cursor:"pointer", padding:8, color:light?C.white:C.charcoal, display:"flex" }}>
            {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position:"fixed", top:68, left:0, right:0, bottom:0, zIndex:999,
          background:"rgba(250,247,242,0.98)", backdropFilter:"blur(20px)",
          padding:"16px 20px", overflowY:"auto",
        }} className="nav-mobile">
          <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link key={label} href={href} style={{
                  padding:"13px 16px",
                  fontSize:16, fontWeight: active ? 600 : 500,
                  color: active ? C.saffron : C.charcoal,
                  borderRadius:10,
                  borderLeft: active ? `3px solid ${C.saffron}` : "3px solid transparent",
                  background: active ? C.saffronLight : "transparent",
                  display:"block", textDecoration:"none",
                  marginBottom:2,
                }}>
                  {label}
                </Link>
              );
            })}
          </div>
          <div style={{ marginTop:20, display:"flex", flexDirection:"column", gap:10 }}>
            <Link href="/auth/login" style={{ textAlign:"center", padding:"13px", border:`1px solid rgba(200,84,26,0.2)`, borderRadius:12, fontSize:15, fontWeight:500, color:C.saffron, textDecoration:"none" }}>Sign in</Link>
            <Link href="/auth/signup" style={{ textAlign:"center", padding:"13px", background:"linear-gradient(135deg,#C8541A,#B8922A)", borderRadius:12, fontSize:15, fontWeight:600, color:"#fff", textDecoration:"none", boxShadow:"0 4px 16px rgba(200,84,26,0.3)" }}>Start Free →</Link>
          </div>
        </div>
      )}

      <style>{`
        @media(min-width:901px) { .nav-mobile{display:none!important} }
        @media(max-width:900px) { .nav-desktop{display:none!important} .nav-mobile{display:flex!important} }
      `}</style>
    </>
  );
}

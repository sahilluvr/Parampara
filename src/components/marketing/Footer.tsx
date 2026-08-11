import Link from "next/link";

const C = { saffron:"#C8541A", gold:"#B8922A", charcoal:"#18181B", gray:"#71717A", border:"rgba(255,255,255,0.08)", white:"#fff" };
const F = { serif:"'Playfair Display',Georgia,serif", sans:"'Inter',system-ui,sans-serif" };

export default function Footer() {
  return (
    <footer style={{ background:"#0C0C0E", padding:"56px 28px 28px", fontFamily:F.sans }}>
      <div style={{ maxWidth:1140, margin:"0 auto" }}>
        {/* Top row */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:40, marginBottom:48, paddingBottom:48, borderBottom:`1px solid ${C.border}` }}>

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
              <img src="/logo.png" alt="OurParampara" width={36} height={36} style={{ borderRadius:"50%", objectFit:"cover" }}/>
              <span style={{ fontFamily:F.serif, fontSize:20, fontWeight:700, color:C.white }}>OurParampara</span>
            </div>
            <p style={{ fontSize:13, color:"rgba(255,255,255,0.4)", lineHeight:1.7, marginBottom:16, maxWidth:220 }}>
              Preserving India&apos;s family traditions, one ritual at a time.
            </p>
            <p style={{ fontSize:12, color:"rgba(255,255,255,0.25)" }}>Founded in Chandigarh, India 🇮🇳</p>
          </div>

          {/* Platform */}
          <div>
            <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginBottom:16 }}>Platform</p>
            {[["Features","/what-we-do"],["Rituals & Ceremonies","/rituals-services"],["Pricing","/pricing"],["About Us","/about"]].map(([label,href])=>(
              <Link key={label} href={href} style={{ display:"block", fontSize:13, color:"rgba(255,255,255,0.5)", textDecoration:"none", marginBottom:10, transition:"color 0.2s" }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div>
            <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginBottom:16 }}>Support</p>
            {[["Contact Us","/contact"],["Sign In","/auth/login"],["Sign Up","/auth/signup"]].map(([label,href])=>(
              <Link key={label} href={href} style={{ display:"block", fontSize:13, color:"rgba(255,255,255,0.5)", textDecoration:"none", marginBottom:10 }}>
                {label}
              </Link>
            ))}
            <a href="mailto:ourparamparaofficial@gmail.com" style={{ display:"block", fontSize:13, color:"rgba(255,255,255,0.5)", textDecoration:"none", marginBottom:10 }}>
              ourparamparaofficial@gmail.com
            </a>
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginBottom:16 }}>Legal</p>
            {[["Privacy Policy","/privacy"],["Terms & Conditions","/terms"],["Refund Policy","/refund"],["Cookie Policy","/cookies"]].map(([label,href])=>(
              <Link key={label} href={href} style={{ display:"block", fontSize:13, color:"rgba(255,255,255,0.5)", textDecoration:"none", marginBottom:10 }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
          <p style={{ fontSize:12, color:"rgba(255,255,255,0.2)", margin:0 }}>
            © {new Date().getFullYear()} Parampara. All rights reserved. · Chandigarh, India
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:20, flexWrap:"wrap" }}>
            {[["Privacy","/privacy"],["Terms","/terms"],["Refund","/refund"],["Cookies","/cookies"]].map(([label,href])=>(
              <Link key={label} href={href} style={{ fontSize:11, color:"rgba(255,255,255,0.2)", textDecoration:"none" }}>{label}</Link>
            ))}
            <a href="https://chat.knolli.ai" target="_blank" rel="noopener noreferrer"
              style={{ display:"flex", alignItems:"center", gap:5, fontSize:11, color:"rgba(255,255,255,0.3)", textDecoration:"none", borderLeft:"1px solid rgba(255,255,255,0.1)", paddingLeft:16 }}>
              <span>🤖</span>
              <span>Powered by <strong style={{ color:"rgba(255,255,255,0.5)" }}>Knolli</strong></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

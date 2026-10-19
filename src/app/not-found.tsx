import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight:"100vh", background:"#F8F6FC", display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", padding:24, fontFamily:"'Inter',system-ui,sans-serif" }}>
      <div>
        <div style={{ fontSize:60, marginBottom:16 }}>🪔</div>
        <h1 style={{ fontFamily:"'Bricolage Grotesque',system-ui,sans-serif", fontSize:28, fontWeight:600, color:"#1C1733", marginBottom:8 }}>Page not found</h1>
        <p style={{ color:"#625C7A", marginBottom:28, fontSize:14 }}>This path doesn&apos;t exist in our traditions.</p>
        <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
          <Link href="/dashboard" style={{ background:"linear-gradient(135deg,#D6246E,#7A3FD9)", color:"#fff", padding:"12px 24px", borderRadius:10, fontSize:14, fontWeight:600, textDecoration:"none" }}>
            Go to Dashboard
          </Link>
          <Link href="/" style={{ background:"#fff", color:"#1C1733", padding:"12px 24px", borderRadius:10, fontSize:14, fontWeight:500, textDecoration:"none", border:"1px solid rgba(122,63,217,0.2)" }}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

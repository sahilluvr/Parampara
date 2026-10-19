"use client";
export default function SignOutButton() {
  return (
    <button onClick={async () => {
      const { createBrowserClient } = await import("@supabase/ssr");
      await createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!).auth.signOut();
      window.location.href = "/admin/login";
    }} style={{ color: "#fff", background: "none", fontWeight: 600, fontSize: 14, padding: "8px 14px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, cursor: "pointer", fontFamily: "inherit" }}>
      Sign out
    </button>
  );
}

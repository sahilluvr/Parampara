import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code  = searchParams.get("code");
  const error = searchParams.get("error");
  const next  = searchParams.get("next") ?? "/dashboard";
  const APP   = "https://www.ourparampara.com";

  // OAuth error from provider
  if (error) {
    console.error("OAuth provider error:", error);
    return NextResponse.redirect(`${APP}/auth/login?error=${encodeURIComponent(error)}`);
  }

  if (!code) {
    return NextResponse.redirect(`${APP}/auth/login?error=no_code`);
  }

  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll()    { return cookieStore.getAll(); },
          setAll(cs)  { cs.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); },
        },
      }
    );

    const { data, error: exchErr } = await supabase.auth.exchangeCodeForSession(code);

    if (exchErr) {
      console.error("Code exchange error:", exchErr.message);
      // If PKCE verifier missing — redirect to login cleanly (don't loop)
      if (exchErr.message.includes("code verifier") || exchErr.message.includes("invalid")) {
        return NextResponse.redirect(`${APP}/auth/login?hint=please_try_again`);
      }
      return NextResponse.redirect(`${APP}/auth/login?error=${encodeURIComponent(exchErr.message)}`);
    }

    if (!data.session) {
      return NextResponse.redirect(`${APP}/auth/login?error=no_session`);
    }

    // Fire welcome email for new users (created_at within last 30 seconds)
    try {
      const user = data.user;
      const isNew = user?.created_at && (Date.now() - new Date(user.created_at).getTime()) < 30000;
      if (isNew && user?.email) {
        const name = user.user_metadata?.full_name || user.email.split("@")[0] || "User";
        fetch(`${APP}/api/email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "welcome", to: user.email, userName: name, familyName: "Your Family" }),
        }).catch(() => {});
      }
    } catch {}

    // Sync plan from user metadata
    const plan = data.user?.user_metadata?.plan;
    const email = data.user?.email || "";

    // Redirect with plan hint so client can pick it up
    const url = new URL(`${APP}${next}`);
    if (plan) url.searchParams.set("plan", plan);
    if (email) url.searchParams.set("email", email);

    return NextResponse.redirect(url.toString());

  } catch (err) {
    console.error("Callback exception:", err);
    return NextResponse.redirect(`${APP}/auth/login?hint=please_try_again`);
  }
}

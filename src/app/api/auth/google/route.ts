import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function GET(_req: NextRequest) {
  const cookieStore = await cookies();
  const sb = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll(), setAll: (cs) => cs.forEach(({name,value,options}) => cookieStore.set(name,value,options)) } }
  );
  const { data, error } = await sb.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://www.ourparampara.com/auth/callback",
      queryParams: { access_type: "offline", prompt: "select_account" },
      skipBrowserRedirect: true,
    },
  });
  if (error || !data.url) return NextResponse.redirect("https://www.ourparampara.com/auth/login?error=oauth_failed");
  return NextResponse.redirect(data.url);
}

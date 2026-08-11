import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

// Routes that require authentication
const PROTECTED = [
  "/dashboard", "/members", "/rituals", "/media", "/account",
  "/ai", "/calendar", "/heritage-book", "/mannats", "/voice-archive",
  "/spaces", "/family-settings", "/upgrade",
];

// Public routes (never redirect)
const PUBLIC = [
  "/", "/about", "/pricing", "/contact", "/blog", "/privacy", "/terms",
  "/auth", "/api", "/_next", "/favicon", "/logo", "/icon", "/manifest",
  "/refund", "/cookies", "/what-we-do", "/rituals-services",
];

function isProtected(pathname: string): boolean {
  return PROTECTED.some(p => pathname === p || pathname.startsWith(p + "/"));
}
function isPublic(pathname: string): boolean {
  return PUBLIC.some(p => pathname === p || pathname.startsWith(p));
}

export async function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;

  // OAuth code redirect — ONLY for Supabase OAuth codes (UUID format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
  // Invite codes are short alphanumeric (e.g. SHARM-X4K2) and must NOT be intercepted here
  const code = searchParams.get("code");
  const isOAuthCode = code && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(code);
  if (isOAuthCode && pathname !== "/auth/callback" && pathname !== "/join" && pathname !== "/auth/reset") {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/callback";
    url.searchParams.set("code", code!);
    return NextResponse.redirect(url);
  }

  // Only gate protected routes
  if (!isProtected(pathname)) {
    return NextResponse.next();
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) return NextResponse.next();

  try {
    const response = NextResponse.next();
    const sb = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cs) => cs.forEach(({ name, value, options }) => response.cookies.set(name, value, options)),
      },
    });

    const { data: { user } } = await sb.auth.getUser();

    if (!user) {
      // No session — redirect to login, then back here after login
      // Preserve full path + query string (e.g. /join?code=XXX&family=YYY)
      const loginUrl = new URL("/auth/login", request.url);
      const fullPath = pathname + request.nextUrl.search;
      loginUrl.searchParams.set("redirect", fullPath);
      // Prevent caching so back button doesn't show stale page
      const redirectResponse = NextResponse.redirect(loginUrl);
      redirectResponse.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
      return redirectResponse;
    }

    // Authenticated — set no-store so back button always re-validates
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
    response.headers.set("Pragma", "no-cache");
    return response;

  } catch {
    // On error, let through (don't break the app)
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|logo\\.png|icon|manifest\\.json|.*\\.png|.*\\.svg|.*\\.ico).*)"],
};

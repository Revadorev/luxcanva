import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Skip API routes, static files, _next
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const isRo = host.includes(".ro");
  const isEu = host.includes(".eu");

  // Only act on custom domains
  if (!isRo && !isEu) return NextResponse.next();

  const url = request.nextUrl.clone();
  const currentLang = url.searchParams.get("lang");

  // If user already has a lang param set — respect it, don't override
  if (currentLang === "en" || currentLang === "ro") {
    return NextResponse.next();
  }

  // No lang param yet — set default based on domain
  const defaultLang = isRo ? "ro" : "en";
  url.searchParams.set("lang", defaultLang);
  return NextResponse.redirect(url, { status: 302 });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

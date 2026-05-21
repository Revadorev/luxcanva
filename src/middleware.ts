import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

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

  // Only redirect if domain is .ro or .eu (not vercel.app)
  if (!isRo && !isEu) return NextResponse.next();

  const targetLang = isRo ? "ro" : "en";

  // Check if lang param already set correctly
  const url = request.nextUrl.clone();
  const currentLang = url.searchParams.get("lang");

  if (currentLang === targetLang) return NextResponse.next();

  // Set the correct lang
  url.searchParams.set("lang", targetLang);
  return NextResponse.redirect(url, { status: 302 });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

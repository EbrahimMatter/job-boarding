import { NextRequest, NextResponse } from "next/server";

function getHostname(hostHeader: string | null) {
  if (!hostHeader) return "";
  return hostHeader.split(":")[0].toLowerCase();
}

function isAdminHost(hostname: string) {
  return hostname === "admin.localhost" || hostname.startsWith("admin.");
}

export function proxy(request: NextRequest) {
  const hostname = getHostname(request.headers.get("host"));
  const pathname = request.nextUrl.pathname;

  if (isAdminHost(hostname) && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  const isAdminHost = host?.includes("admin.wazifa.app");
  if (isAdminHost) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: [],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Check if the route is an admin route
  // if (request.nextUrl.pathname.startsWith("/admin")) {
  //   // Check for the auth_token cookie
  //   const authToken = request.cookies.get("auth_token");
  //   // If no token exists, redirect to login
  //   if (!authToken) {
  //     const loginUrl = new URL("/login", request.url);
  //     // Optional: Store the return URL to redirect back after login
  //     loginUrl.searchParams.set("from", request.nextUrl.pathname);
  //     return NextResponse.redirect(loginUrl);
  //   }
  // }
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};

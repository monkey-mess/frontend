import { NextResponse, NextRequest } from "next/server";
import { getToken } from "./shared/cookies";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    // console.log(pathname);
    if (pathname.startsWith("/_next")) {
        return NextResponse.next();
    }
    if (pathname.startsWith("/auth")) {
        return NextResponse.next();
    }
    if (pathname.startsWith("/api")) {
        return NextResponse.next();
    }
    if (pathname.startsWith("/dev")) {
        return NextResponse.next();
    }

    const accessToken = await getToken("access");
    if (!accessToken) {
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    return NextResponse.next();
}
export const config = {
    matcher: `/:path*`,
};

import { clearTokens } from "@/shared/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await clearTokens("all");
    console.log("cookies has been cleared");
    const res = new NextResponse();
    res.cookies.delete("accessToken");
    res.cookies.delete("refreshToken");
    return res;
}

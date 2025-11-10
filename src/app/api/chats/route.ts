import { NextRequest, NextResponse } from "next/server";
import { getToken } from "@/shared/cookies";
import { backendApiUrl } from "../config";

export async function GET(req: NextRequest, res: NextResponse) {
    const accessToken = await getToken("access");
    const response = await fetch(backendApiUrl + "/chats", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response;
}

import { backendApiUrl } from "@/app/api/config";
import { getToken } from "@/shared/cookies";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { chatId: string } }) {
    const { chatId } = await params;
    const accessToken = await getToken("access");

    const response = await fetch(backendApiUrl + `/chats/${chatId}/messages`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response;
    return new Response(null, { status: 202 });
}

import { cookies } from "next/headers";

export async function getToken(type: "access" | "refresh") {
    const cookieStore = await cookies();
    if (type === "access") {
        const token = cookieStore.get("accessToken")?.value;
        if (!token) return "";
        return token;
    }
    if (type === "refresh") {
        const token = cookieStore.get("refreshToken")?.value;
        if (!token) return "";
        return token;
    }
}

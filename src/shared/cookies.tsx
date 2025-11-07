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

export async function setToken(type: "access" | "refresh", token: string) {
    const cookieStore = await cookies();
    if (type === "access") {
        cookieStore.set("accessToken", token, {
            httpOnly: true,
        });
    }
    if (type === "refresh") {
        cookieStore.set("refreshToken", token, {
            httpOnly: true,
        });
    }
}

export async function clearTokens(type: "access" | "refresh" | "all") {
    const cookieStore = await cookies();
    switch (type) {
        case "access": {
            await cookieStore.delete("accessToken");
            break;
        }
        case "refresh": {
            await cookieStore.delete("refreshToken");
            break;
        }
        case "all": {
            await cookieStore.delete("refreshToken");
            await cookieStore.delete("accessToken");
        }
    }
}

import { backendApi } from "@/shared";
import { cookies } from "next/headers";

async function getAccessToken(): Promise<string> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("AccessToken");
    if (accessToken) {
        return accessToken.value;
    }
    return "";
}

export const userApi = backendApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query({
            query: (userId: number) => `/user/${userId}`,
        }),
    }),
});

export const { useGetUserQuery } = userApi;

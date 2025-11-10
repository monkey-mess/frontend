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

export const profileApi = backendApi.injectEndpoints({
    endpoints: (build) => ({
        getProfile: build.query({
            query: (profileId: number) => `/profile/${profileId}`,
        }),
    }),
});

export const { useGetProfileQuery } = profileApi;

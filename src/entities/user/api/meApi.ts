import { nextApi } from "@/shared";

export const meApi = nextApi.injectEndpoints({
    endpoints: (build) => ({
        getMe: build.query({
            query: () => `/user/me`,
        }),
    }),
});
export const { useLazyGetMeQuery } = meApi;

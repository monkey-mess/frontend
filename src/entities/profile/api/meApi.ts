import { nextApi } from "@/shared";

export const meApi = nextApi.injectEndpoints({
    endpoints: (build) => ({
        me: build.query({
            query: () => `/profile/me`,
        }),
    }),
});
export const { useLazyMeQuery } = meApi;

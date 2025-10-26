import { globalApi } from "@/shared";

export const userApi = globalApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query({
            query: (userId: number) => `/user/${userId}`,
        }),
    }),
});

export const { useGetUserQuery } = userApi;

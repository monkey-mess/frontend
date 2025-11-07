import { nextApi } from "@/shared";

export const conversationsApi = nextApi.injectEndpoints({
    endpoint(build) {
        getConversations: build.query({
            query: (currentUserId: number) => `/api/con`,
        });
    },
});

import { nextApi } from "@/shared";
import { IChatApi } from "@/entities/chat/api/IChatApi";

export const chatsApi = nextApi.injectEndpoints({
    endpoints: (build) => ({
        chats: build.query<IChatApi[], void>({
            query: () => `/chats`,
        }),
    }),
});

export const { useChatsQuery, useLazyChatsQuery } = chatsApi;

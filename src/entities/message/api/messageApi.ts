import { nextApi } from "@/shared/";

export interface IMessageApi {
    id: string;
    conversationId: string;
    senderId: string;
    content: string;
    createdAt: string;
}

const messageApi = nextApi.injectEndpoints({
    endpoints: (build) => ({
        messageList: build.query<IMessageApi[], string>({
            query: (chatId: string) => `chats/${chatId}/messages`,
        }),
    }),
    overrideExisting: false,
});

export const { useMessageListQuery } = messageApi;

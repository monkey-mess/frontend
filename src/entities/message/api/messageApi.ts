import { backendApi } from "@/shared/";

/**
 * Тип данных для обмена сообщений с бэкендом
 * @param srcId id отправителя сообщения
 * возможно нужно добавить dstId (для чатов)
 *
 */
export interface IMessageApi {
    srcId: number;
    text: string;
    date: string;
}

/**
 * rtk query
 */
const messageApi = backendApi.injectEndpoints({
    endpoints: (build) => ({
        getMessageList: build.query<IMessageApi[], number>({
            query: (conversationId: number) => `chats/${conversationId}`,
        }),
    }),
    overrideExisting: false,
});

export const { useGetMessageListQuery } = messageApi;

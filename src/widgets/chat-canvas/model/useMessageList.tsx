"use client";
import { mapJSONtoMessage, useMessageListQuery } from "@/entities/message";
import { IMessage } from "@/entities/message";
import { useEffect } from "react";
export function useMessageList(chatId: string | null, offset: number, limit: number): IMessage[] | null {
    let isSkipFetch = false;
    if (chatId === null) {
        isSkipFetch = true;
        chatId = "";
    }

    const { data } = useMessageListQuery(chatId, {
        skip: isSkipFetch,
    });

    useEffect(() => {
        if (data) {
            data.forEach((messageApi) => {
                const message = mapJSONtoMessage(messageApi);
                if (message) {
                    messageList.push(message);
                }
            });
        }
    }, [data]);

    if (isSkipFetch) return null;

    const messageList: IMessage[] = [];

    return messageList;
}

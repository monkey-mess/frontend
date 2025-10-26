"use client";
import { IMessageApi, useGetMessageListQuery } from "@/entities/message";
import { IMessage } from "@/entities/message";
import { IUser } from "@/entities/user";
import { useSelector } from "react-redux";
import { RootState } from "@/shared";

/** Версия, когда будет подгрузка пользователей */
// function mapMessageApiToMessage(messageApi: IMessageApi, users: { [userid: number]: IUser }): IMessage | null {
//     const user = users[messageApi.srcId];
//     if (user === undefined) return null;
//     const message: IMessage = {
//         senderId: user.id,
//         senderUsername: user.username,
//         text: messageApi.text,
//         isMe: false,
//     };
//     return message;
// }

function mapMessageApiToMessage(messageApi: IMessageApi, users: { [userid: number]: IUser }): IMessage | null {
    const message: IMessage = {
        senderId: messageApi.srcId,
        senderUsername: messageApi.srcId + "",
        text: messageApi.text,
        isMe: false,
    };
    return message;
}

export function useMessageList(conversationId: number | null, start: number, limit: number): IMessage[] | null {
    let isSkipFetch = false;
    if (conversationId === null) {
        isSkipFetch = true;
        conversationId = -1;
    }

    const users = useSelector((state: RootState) => state.userState.users);

    const { data } = useGetMessageListQuery(conversationId, {
        skip: isSkipFetch,
    });

    if (isSkipFetch) return null;

    const messageList: IMessage[] = [];

    if (data) {
        data.forEach((messageApi) => {
            const message = mapMessageApiToMessage(messageApi, users);
            if (message) {
                messageList.push(message);
            }
        });
    }
    return messageList;
}

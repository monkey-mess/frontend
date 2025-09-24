"use client";
import { useEffect, useState } from "react";
import { IMessageAPI, createMessage, getMessageList } from "@/entities/message";
import { IMessage } from "@/entities/message";
import { getUser } from "@/entities/user/api/getUser";
import { IUser } from "@/entities/user";

export function useMessageList(): IMessage[] | null {
    const [messageList, setMessageList] = useState<IMessageAPI[] | null>(null);

    useEffect(() => {
        getMessageList().then((response) => {
            let messageAPIList: IMessageAPI[] = response;
            let messageList: IMessage[] = [];

            messageList.forEach((messageAPI) => {
                let message = createMessage();
            });

            setMessageList(response);
        });
    }, []);

    return null;
}

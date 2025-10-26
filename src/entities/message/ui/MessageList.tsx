"use client";

import { IMessage } from "../model/message";
import { Message } from "./Message";
import "./MessageList.css";

export function MessageList({ messageList }: { messageList: IMessage[] | null }) {
    if (messageList === null) return <> loading </>;
    return (
        <div className="message-list">
            {messageList?.map((_message, index) => (
                <Message message={_message} key={index} />
            ))}
        </div>
    );
}

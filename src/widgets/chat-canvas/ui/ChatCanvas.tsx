"use client";
import { MessageList } from "@/entities/message";
import { MessageInput } from "./MessageInput";
import "./ChatCanvas.css";
import { useMessageList } from "../model/useMessageList";

export function ChatCanvas({ chatId }: { chatId: string | null }) {
    const messageList = useMessageList(chatId, 0, 100);
    if (chatId) {
        return (
            <div className="chat-canvas">
                <MessageList messageList={messageList} />
                <MessageInput />
            </div>
        );
    }

    return <></>;
}

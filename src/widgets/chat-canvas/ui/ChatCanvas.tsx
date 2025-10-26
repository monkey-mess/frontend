"use client";
import { MessageList } from "@/entities/message";
import { MessageInput } from "./MessageInput";
import "./ChatCanvas.css";
import { useMessageList } from "../model/useMessageList";

/**
 * @param conversationId по нему будет фетчиться чат
 */
export function ChatCanvas({ conversationId }: { conversationId: number | null }) {
    const messageList = useMessageList(conversationId, 0, 100);
    if (conversationId) {
        return (
            <div className="chat-canvas">
                <MessageList messageList={messageList} />
                <MessageInput />
            </div>
        );
    }

    return <></>;
}

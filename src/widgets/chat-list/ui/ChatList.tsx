"use client";
import { IChatPreview, ChatPreview } from "@/entities/chat-preview";
import "./ChatList.css";

export function ChatList() {
    const chatPreviews: IChatPreview[] = [];

    return (
        <div className="chat-list">
            {chatPreviews?.map((_chatPreview, index) => (
                <ChatPreview chatPreview={_chatPreview} key={index} />
            ))}
        </div>
    );
}

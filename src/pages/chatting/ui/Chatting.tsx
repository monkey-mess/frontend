"use client";
import { ChatList } from "@/widgets/chat-list";
import { ChatCanvas } from "@/widgets/chat-canvas";
import { useChatsQuery } from "../api/chatsApi";
import { useEffect } from "react";

export default function Chatting() {
    const chatsQuery = useChatsQuery();
    useEffect(() => {
        if (chatsQuery.data) {
            console.log(chatsQuery.data);
        }
    }, [chatsQuery]);

    if (chatsQuery.isLoading) {
        return (
            <>
                <ChatList />
            </>
        );
    }
    if (chatsQuery.isError) {
        return <>error in pages/chatting/ui/chatting.tsx</>;
    }
    return (
        <>
            <ChatList />
            <ChatCanvas chatId={chatsQuery.data[0].id} />
        </>
    );
}

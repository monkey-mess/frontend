"use client";
import { getMessageList, IMessageAPI, MessageList } from "@/entities/message";
import { MessageInput } from "./MessageInput";
import "./ChatCanvas.css";
import { useMessageList } from "../model/useMessageList";
import { useState } from "react";

/**
 * @param chatID по нему будет фетчиться чат
 */
export function ChatCanvas({ chatId }: { chatId?: string | number }) {
  chatId = "evilb0gam";
  const test = useMessageList();

  if (chatId) {
    return (
      <div className="chat-canvas">
        <MessageList />
        <MessageInput />
      </div>
    );
  }

  return <></>;
}

"use client";

import { SendMessageForm } from "@/features/send-message";
import "./MessageInput.css";

export function MessageInput() {
  return (
    <div className="message-input">
      <SendMessageForm />
      <div className="buttons">
        <button className="send" />
      </div>
    </div>
  );
}

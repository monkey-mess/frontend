"use client";
import { useRef } from "react";
import "./SendMessageForm.css";

export function SendMessageForm() {
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
    function handleSubmit(): void {
        if (!inputRef) {
            return;
        }
    }

    return (
        <>
            <textarea ref={inputRef} className="send-message-form" placeholder="Write your message..." />
            <button
                onClick={() => {
                    handleSubmit();
                }}
                className="send-button"
            />
        </>
    );
}

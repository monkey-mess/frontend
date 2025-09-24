"use client";

import "./Message.css";
import { IMessage } from "../model/message";

export function Message({ message }: { message: IMessage }) {
  let messageBlockClassName = "message-block";
  message.isMe ? (messageBlockClassName = "message-block current-user") : "";
  return (
    <div className={messageBlockClassName}>
      <div className="avatar"> {message.senderUsername[0]} </div>
      <div className="message-content">
        <div className="username"> {message.senderUsername} </div>
        <div className="message"> {message.text} </div>
      </div>
    </div>
  );
}

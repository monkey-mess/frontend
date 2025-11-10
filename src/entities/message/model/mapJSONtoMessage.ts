import { IMessageApi } from "../api/messageApi";
import { IMessage } from "./message";
export function mapJSONtoMessage(json: IMessageApi): IMessage | null {
    const isMe = true;
    const senderUsername = "senderUsername";
    const senderAvatarURL = "senderAvatarUrl";
    const message: IMessage = {
        id: json.id,
        senderId: json.senderId,
        senderUsername: senderUsername,
        content: json.content,
        createdAt: json.createdAt,
        isMe: isMe,
        senderAvatarURL: senderAvatarURL,
    };

    return message;
}

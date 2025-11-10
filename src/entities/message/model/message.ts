/**
 * Используется для рендера сообщений. Не используется для обмена сообщениями
 */
export interface IMessage {
    id: string;
    senderId: string;
    senderUsername: string;
    senderAvatarURL?: string;
    content: string;
    createdAt: string;
    isMe: boolean;
}

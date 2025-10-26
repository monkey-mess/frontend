/**
 * Используется для рендера сообщений. Не используется для обмена сообщениями
 */
export interface IMessage {
    senderId: number;
    senderUsername: string;
    senderAvatarURL?: string;
    text: string;
    isMe: boolean;
}

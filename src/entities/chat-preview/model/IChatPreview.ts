export interface IChatPreview {
    conversationId: number;
    username: string;
    lastMessage: string | null;
    avatarURL?: string;
    date: string;
}

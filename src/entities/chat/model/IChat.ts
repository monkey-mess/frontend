export interface IChatPreview {
    id: string;
    // type : "private" | "group";
    name: string;
    avatarURL?: string;
    lastMessage: {
        id: string;
        content: string;
        senderId: string;
    };
}

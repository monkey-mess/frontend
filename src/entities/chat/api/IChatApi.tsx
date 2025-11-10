export interface IChatApi {
    id: string;
    type: "private" | "group";
    name: string;
    description: string;
    avatarUrl: string;
    lastMessage: {
        id: string;
        content: string;
        senderId: string;
    };
}

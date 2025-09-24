export interface IMessage {
  // senderId: number;
  senderUsername: string;
  senderHandle: string;
  senderAvatarURL?: string;
  text: string;
  isMe: boolean;
}

/**
 * @param senderHandle строковый id
 */
export function createMessage(): IMessage {
  return {
    senderUsername: "",
    senderHandle: "",
    text: "",
    isMe: false,
  };
}

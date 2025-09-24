// someFile.ts
/**
 * @param {[number]} id // UUID, не используемый пользователем
 * @param {[string]} userHandle // Ссылка на профлиь - пользователь может изменить её
 */
export interface IUser {
  id: number;
  userHandle: string;
  username: string;
  avatarURL?: string;
}
export function createUser(): IUser {
  return { id: 0, userHandle: "", username: "" };
}

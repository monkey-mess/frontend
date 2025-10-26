// someFile.ts
/**
 * @param {[number]} id // UUID пользователя
 * @param {[string]} userHandle // Ссылка на профлиь - пользователь может изменить её (@user)
 */
export interface IUser {
    id: number;
    userHandle: string;
    username: string;
    avatarURL?: string;
}

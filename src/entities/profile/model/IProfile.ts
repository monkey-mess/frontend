// someFile.ts
/**
 * @param {[number]} id // UUID пользователя
 * @param {[string]} profileHandle // Ссылка на профлиь - пользователь может изменить её (@profile)
 */
export interface IProfile {
    id: number;
    profileHandle: string;
    profilename: string;
    avatarURL?: string;
}

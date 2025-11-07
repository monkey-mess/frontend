import { IUser } from "./IUser";

export function mapJSONtoUser(data: any): IUser | null {
    try {
        const currentUser: IUser = {
            id: data["id"],
            userHandle: data["userHandle"],
            username: data["username"],
            avatarURL: data["avatarUrl"],
        };
        return currentUser;
    } catch {
        return null;
    }
}

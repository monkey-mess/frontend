import { IUser } from "@/entities/user";
export function mapJSONtoUser(json: any): IUser | null {
    try {
        const user: IUser = {
            id: json["id"],
            userHandle: json["userHandle"],
            username: json["username"],
            avatarURL: json["avatarURL"],
        };
        return user;
    } catch {
        console.error("Error with parsing json to user");
        return null;
    }
}

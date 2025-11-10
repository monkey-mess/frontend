import { IProfile } from "./IProfile";

export function mapJSONtoProfile(data: any): IProfile | null {
    try {
        const currentProfile: IProfile = {
            id: data["id"],
            profileHandle: data["profileHandle"],
            profilename: data["profilename"],
            avatarURL: data["avatarUrl"],
        };
        return currentProfile;
    } catch {
        return null;
    }
}

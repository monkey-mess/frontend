import { IUser } from "../model/IUser";
import { fakeFetch } from "@/shared";

const fakeUser: IUser = {
  id: 2,
  username: "evilbaaag",
  userHandle: "evilb0gam",
  avatarURL: "avatars/evilb0gam",
};

export function getUser(id: number): Promise<IUser> {
  return fakeFetch<IUser>(fakeUser, "fulfilled").then((data) => {
    return data;
  });
}

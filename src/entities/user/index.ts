import { useGetUserQuery } from "./api/userApi";
export { type IUser } from "./model/IUser";
export { setUser, clearUsers, type IUserSetAction } from "./model/userSlice";
export { type ICurrentUserSetAction, type ICurrentUserState, clearCurrentUser, setCurrentUser } from "./model/currentUserSlice";

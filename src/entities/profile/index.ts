import { useGetProfileQuery } from "./api/profileApi";
export { type IProfile } from "./model/IProfile";
export { setProfile, clearProfiles, type IProfileSetAction } from "./model/profileSlice";
export { type ICurrentProfileSetAction, type ICurrentProfileState, clearCurrentProfile, setCurrentProfile } from "./model/currentProfileSlice";
export { mapJSONtoProfile } from "./model/mapJSONtoProfile";

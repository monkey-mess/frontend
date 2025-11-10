import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "./IProfile";

export interface IProfileState {
    profiles: { [profileId: number]: IProfile };
}

export interface IProfileSetAction {
    profileId: number;
    profile: IProfile;
}

const initialState: IProfileState = {
    profiles: {},
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<IProfileSetAction>) => {
            if (action.payload.profile) {
                state.profiles[action.payload.profileId] = action.payload.profile;
            } else {
                console.error("profile is not defined");
            }
        },
        clearProfiles: (state) => {
            state.profiles = {};
        },
    },
});

export const { setProfile, clearProfiles } = profileSlice.actions;
export default profileSlice.reducer;

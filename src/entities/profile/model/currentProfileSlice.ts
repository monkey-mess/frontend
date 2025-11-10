import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IProfile } from "./IProfile";

// export const { setProfile, clearProfiles } = profileSlice.actions;
// export default profileSlice.reducer;

export interface ICurrentProfileState {
    currentProfile: IProfile | null;
}

const initialState: ICurrentProfileState = {
    currentProfile: null,
};

export interface ICurrentProfileSetAction {
    currentProfile: IProfile | null;
}

const currentProfileSlice = createSlice({
    name: "currentProfile",
    initialState,
    reducers: {
        setCurrentProfile: (state, action: PayloadAction<ICurrentProfileSetAction>) => {
            state.currentProfile = action.payload.currentProfile;
        },
        clearCurrentProfile: (state) => {
            state.currentProfile = null;
        },
    },
});
export const { setCurrentProfile, clearCurrentProfile } = currentProfileSlice.actions;
export default currentProfileSlice.reducer;

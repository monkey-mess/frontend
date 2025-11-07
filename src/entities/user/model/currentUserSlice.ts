import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./IUser";

// export const { setUser, clearUsers } = userSlice.actions;
// export default userSlice.reducer;

export interface ICurrentUserState {
    currentUser: IUser | null;
}

const initialState: ICurrentUserState = {
    currentUser: null,
};

export interface ICurrentUserSetAction {
    user: IUser | null;
}

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<ICurrentUserSetAction>) => {
            state.currentUser = action.payload.user;
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
        },
    },
});
export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;

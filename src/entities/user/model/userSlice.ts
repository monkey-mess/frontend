import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./IUser";

export interface IUserState {
    users: { [userId: number]: IUser };
}

export interface IUserSetAction {
    userId: number;
    user?: IUser;
}

const initialState: IUserState = {
    users: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserSetAction>) => {
            if (action.payload.user) {
                state.users[action.payload.userId] = action.payload.user;
            } else {
                console.error("user is not defined");
            }
        },
        clearUsers: (state) => {
            state.users = {};
        },
    },
});

export const { setUser, clearUsers } = userSlice.actions;
export default userSlice.reducer;

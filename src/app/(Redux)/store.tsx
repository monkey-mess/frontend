import { configureStore } from "@reduxjs/toolkit";
import { globalApi } from "@/shared";
import userSlice from "@/entities/user/model/userSlice";

export const store = configureStore({
    reducer: {
        [globalApi.reducerPath]: globalApi.reducer,
        userState: userSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(globalApi.middleware);
    },
});

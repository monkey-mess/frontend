import { configureStore } from "@reduxjs/toolkit";
import { backendApi, nextApi } from "@/shared";
import userSlice from "@/entities/user/model/userSlice";
import currentUserSlice from "@/entities/user/model/currentUserSlice";

export const store = configureStore({
    reducer: {
        [backendApi.reducerPath]: backendApi.reducer,
        [nextApi.reducerPath]: nextApi.reducer,
        userState: userSlice,
        currentUserState: currentUserSlice,
    },
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware().concat(nextApi.middleware, backendApi.middleware);
        return defaultMiddleware;
    },
});

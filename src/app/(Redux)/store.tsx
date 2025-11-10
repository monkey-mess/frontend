import { configureStore } from "@reduxjs/toolkit";
import { backendApi, nextApi } from "@/shared";
import profileSlice from "@/entities/profile/model/profileSlice";
import currentProfileSlice from "@/entities/profile/model/currentProfileSlice";

export const store = configureStore({
    reducer: {
        [backendApi.reducerPath]: backendApi.reducer,
        [nextApi.reducerPath]: nextApi.reducer,
        profileState: profileSlice,
        currentProfileState: currentProfileSlice,
    },
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware().concat(nextApi.middleware, backendApi.middleware);
        return defaultMiddleware;
    },
});

"use client";
import { useEffect } from "react";
import { store } from "./store";
import { UserProvider } from "./UserProvider";
import { Provider } from "react-redux";
import { useLazyGetMeQuery } from "@/entities/user/api/meApi";
export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <UserProvider>{children}</UserProvider>
        </Provider>
    );
}

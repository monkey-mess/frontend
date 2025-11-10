"use client";
import { store } from "./store";
import { Provider } from "react-redux";
import { ProfileProvider } from "./ProfileProvider";
export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ProfileProvider>{children}</ProfileProvider>
        </Provider>
    );
}

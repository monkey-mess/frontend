"use client";
import { store } from "./store";
import { UserProvider } from "./UserProvider";
import { Provider } from "react-redux";
export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <UserProvider>{children}</UserProvider>
        </Provider>
    );
}

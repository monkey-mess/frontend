"use client";
import { useContext, useState, createContext } from "react";
import { IUser } from "@/entities/user";

interface IUserContext {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}

const UserContext = createContext<IUserContext | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser | null>(null);
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
        </>
    );
}

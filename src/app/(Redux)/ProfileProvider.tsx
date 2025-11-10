"use client";
import { useState, createContext } from "react";
import { IProfile } from "@/entities/profile";

interface IProfileContext {
    profile: IProfile | null;
    setProfile: (profile: IProfile | null) => void;
}

const ProfileContext = createContext<IProfileContext | null>(null);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
    const [profile, setProfile] = useState<IProfile | null>(null);
    return (
        <>
            <ProfileContext.Provider value={{ profile, setProfile }}>{children}</ProfileContext.Provider>
        </>
    );
}

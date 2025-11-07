"use client";
import { mapJSONtoUser, setCurrentUser } from "@/entities/user";
import { useLazyGetMeQuery } from "@/entities/user/api/meApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Init() {
    const [getMeTrigger, getMeQuery] = useLazyGetMeQuery();

    const storeDispatch = useDispatch();
    useEffect(() => {
        getMeTrigger("");
    }, []);
    useEffect(() => {
        const currentUser = mapJSONtoUser(getMeQuery.data);
        if (getMeQuery) storeDispatch(setCurrentUser({ currentUser: currentUser }));
    }, [getMeQuery]);
    return <></>;
}

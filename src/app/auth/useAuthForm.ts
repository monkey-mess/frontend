import { nextApi } from "@/shared";

export interface IRegisterApi {
    profilename: string;
    password: string;
}

export interface ILoginApi {
    profilename: string;
    password: string;
}

const loginFormApi = nextApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (body: ILoginApi) => ({
                url: "/login",
                method: "POST",
                body,
            }),
        }),
    }),
});

const registerFormApi = nextApi.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation({
            query: (body: IRegisterApi) => ({
                url: "/register",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginMutation } = loginFormApi;
export const { useRegisterMutation } = registerFormApi;

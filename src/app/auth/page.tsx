"use client";
import "./page.css";
import { IUser, IUserSetAction, setUser, ICurrentUserSetAction } from "@/entities/user";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { MonkeyLoginSVG, MonkeyPasswordSVG } from "@svg/";

import { useLoginMutation, useRegisterMutation, ILoginApi, IRegisterApi } from "./useAuthForm";
import { useLazyGetMeQuery } from "@/entities/user/api/meApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/shared";
import { setCurrentUser } from "@/entities/user/model/currentUserSlice";

interface IRegisterFormData {
    username: string;
    password: string;
    confirmPassword: string;
}
interface ILoginFormData {
    username: string;
    password: string;
}

export default function Auth() {
    const [register, registerMutation] = useRegisterMutation();
    const [login, loginMutation] = useLoginMutation();
    const [getMe, currentUserQuery, lastPromiseInfo] = useLazyGetMeQuery();
    const storeDispatch = useDispatch();

    const selectedData = useSelector((state: RootState) => state.userState.users);

    useEffect(() => {
        if (loginMutation.isSuccess) {
            getMe("");
        }
    }, [loginMutation]);

    useEffect(() => {
        if (currentUserQuery.isSuccess) {
            // console.log(currentUser.data);
            const currentUser: IUser = {
                id: currentUserQuery.data["id"],
                userHandle: currentUserQuery.data["userHandle"],
                username: currentUserQuery.data["username"],
                avatarURL: currentUserQuery.data["avatarUrl"],
            };
            console.log("CURRENT USER: ", currentUser);
            const userSetAction: IUserSetAction = {
                user: currentUser,
                userId: currentUser.id,
            };
            const currentUserSetAction: ICurrentUserSetAction = {
                user: currentUser,
            };

            storeDispatch(setUser(userSetAction));
            storeDispatch(setCurrentUser(currentUserSetAction));
            redirect("/");
        }
    }, [currentUserQuery]);

    const registerForm = useForm<IRegisterFormData>();
    const loginForm = useForm<ILoginFormData>();

    const registerFormElement = useRef<HTMLFormElement | null>(null);
    const loginFormElement = useRef<HTMLFormElement | null>(null);

    function openRegisterMenu() {
        loginFormElement.current!.style.transform = "translateY(00%)";
        registerFormElement.current!.style.transform = "translateY(00%)";
    }
    function openLoginMenu() {
        loginFormElement.current!.style.transform = "translateY(-100%)";
        registerFormElement.current!.style.transform = "translateY(-100%)";
    }

    function onRegisterSubmit(data: IRegisterFormData) {
        const postData: IRegisterApi = {
            username: data.username,
            password: data.password,
        };
        register(postData);
    }

    function onLoginSubmit(data: ILoginFormData) {
        const postData: ILoginFormData = {
            username: data.username,
            password: data.password,
        };
        login(postData);
    }
    return (
        <div className="auth-page">
            <div className="auth-window">
                <form className="form" ref={registerFormElement} onSubmit={registerForm.handleSubmit(onRegisterSubmit)}>
                    <div className="auth-window__title"> Register </div>
                    <p className="auth-window__error">{registerForm.formState.errors.username?.message}</p>
                    <div className="auth-window__field">
                        <div className="auth-window__input-svg-container">
                            <MonkeyLoginSVG className="auth-window__input-svg" />
                        </div>
                        <input
                            className="auth-window__input"
                            placeholder="login"
                            {...registerForm.register("username", {
                                required: "Required",
                                maxLength: { value: 18, message: "Too long (maximum 18 symbols)" },
                                minLength: { value: 5, message: "Too short (minimum 5 symbols)" },
                            })}
                        />
                    </div>
                    <p className="auth-window__error">{registerForm.formState.errors.password?.message}</p>

                    <div className="auth-window__field">
                        <div className="auth-window__input-svg-container">
                            <MonkeyPasswordSVG className="auth-window__input-svg" />
                        </div>
                        <input
                            className="auth-window__input"
                            placeholder="password"
                            {...registerForm.register("password", {
                                required: "Required",
                                maxLength: { value: 18, message: "Too long (maximum 18 symbols)" },
                                minLength: { value: 5, message: "Too short (minimum 5 symbols)" },
                            })}
                        />
                    </div>
                    <p className="auth-window__error">{registerForm.formState.errors.confirmPassword?.message}</p>

                    <div className="auth-window__field">
                        <div className="auth-window__input-svg-container">
                            <MonkeyPasswordSVG className="auth-window__input-svg" />
                        </div>
                        <input
                            className="auth-window__input"
                            placeholder="confirm password"
                            {...registerForm.register("confirmPassword", {
                                required: "Required",
                                maxLength: { value: 18, message: "Too long (maximum 18 symbols)" },
                                minLength: { value: 5, message: "Too short (minimum 5 symbols)" },
                                validate: (value) => {
                                    if (value === registerForm.getValues().password) return true;
                                    return "Passwords don't match";
                                },
                            })}
                        />
                    </div>
                    <button className="auth-window__submit" type="submit">
                        Register
                    </button>
                    <button
                        className="auth-window__change-form"
                        onClick={() => {
                            openLoginMenu();
                        }}
                        type="button"
                    >
                        Do you have an account?
                    </button>
                </form>

                <form className="form" ref={loginFormElement} onSubmit={loginForm.handleSubmit(onLoginSubmit)}>
                    <div className="auth-window__title"> Login</div>

                    <div className="auth-window__field">
                        <div className="auth-window__input-svg-container">
                            <MonkeyLoginSVG className="auth-window__input-svg" />
                        </div>
                        <input
                            className="auth-window__input auth-window__input_inactive"
                            placeholder="login"
                            {...loginForm.register("username", {
                                required: "Required",
                                maxLength: { value: 18, message: "Too long (maximum 18 symbols)" },
                                minLength: { value: 5, message: "Too short (minimum 5 symbols)" },
                            })}
                        />
                    </div>
                    <div className="auth-window__field">
                        <div className="auth-window__input-svg-container">
                            <MonkeyPasswordSVG className="auth-window__input-svg" />
                        </div>
                        <input
                            className="auth-window__input"
                            placeholder="password"
                            {...loginForm.register("password", {
                                required: "Required",
                                maxLength: { value: 18, message: "Too long (maximum 18 symbols)" },
                                minLength: { value: 5, message: "Too short (minimum 5 symbols)" },
                            })}
                        />
                    </div>

                    <button className="auth-window__submit" type="submit">
                        Login
                    </button>
                    <button
                        className="auth-window__change-form"
                        onClick={() => {
                            openRegisterMenu();
                        }}
                        type="button"
                    >
                        {"Don't you have an account?"}
                    </button>
                </form>
            </div>
        </div>
    );
}

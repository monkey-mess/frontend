"use client";
import "./page.css";
import { IProfile, IProfileSetAction, setProfile, ICurrentProfileSetAction, mapJSONtoProfile } from "@/entities/profile";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { MonkeyLoginSVG, MonkeyPasswordSVG } from "@svg/";

import { useLoginMutation, useRegisterMutation, ILoginApi, IRegisterApi } from "./useAuthForm";
import { useLazyMeQuery } from "@/entities/profile/api/meApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/shared";
import { setCurrentProfile } from "@/entities/profile/model/currentProfileSlice";

interface IRegisterFormData {
    profilename: string;
    password: string;
    confirmPassword: string;
}
interface ILoginFormData {
    profilename: string;
    password: string;
}

export default function Auth() {
    const [register, registerMutation] = useRegisterMutation();
    const [login, loginMutation] = useLoginMutation();
    const [meTrigger, currentProfileQuery] = useLazyMeQuery();
    const storeDispatch = useDispatch();

    const selectedData = useSelector((state: RootState) => state.profileState.profiles);

    useEffect(() => {
        if (loginMutation.isSuccess) {
            meTrigger("");
        }
    }, [loginMutation]);

    useEffect(() => {
        if (currentProfileQuery.isSuccess) {
            const currentProfile = mapJSONtoProfile(currentProfileQuery.data);
            // console.log("CURRENT USER: ", currentProfile);
            if (currentProfile) {
                storeDispatch(
                    setCurrentProfile({
                        currentProfile: currentProfile,
                    })
                );
            }
            redirect("/");
        }
    }, [currentProfileQuery]);

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
            profilename: data.profilename,
            password: data.password,
        };
        register(postData);
    }

    function onLoginSubmit(data: ILoginFormData) {
        const postData: ILoginFormData = {
            profilename: data.profilename,
            password: data.password,
        };
        login(postData);
    }
    return (
        <div className="auth-page">
            <div className="auth-window">
                <form className="form" ref={registerFormElement} onSubmit={registerForm.handleSubmit(onRegisterSubmit)}>
                    <div className="auth-window__title"> Register </div>
                    <p className="auth-window__error">{registerForm.formState.errors.profilename?.message}</p>
                    <div className="auth-window__field">
                        <div className="auth-window__input-svg-container">
                            <MonkeyLoginSVG className="auth-window__input-svg" />
                        </div>
                        <input
                            className="auth-window__input"
                            placeholder="login"
                            {...registerForm.register("profilename", {
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
                            {...loginForm.register("profilename", {
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

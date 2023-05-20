import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Login() {
    const handleChange = (e) => {};
    return (
        <>
            <Head title="Login" />
            <div className="mx-auto w-full min-h-[100vh] flex justify-center items-center bg-black text-white md:px-10 px-3">
                <div className="flex">
                    <div>
                        <img
                            className="mx-auto"
                            src="/images/moonton-white.svg"
                            alt=""
                        />
                        <div className="my-[30px]">
                            <div className="font-semibold text-[26px] mb-3 text-center">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7 text-center">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[300px] sm:w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forInput="password"
                                        value="Password"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        handleChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Link
                                href={route("prototype.dashboard")}
                                >
                                    <Button type="button" variant="primary">
                                        <span className="text-base font-semibold">
                                            Start Watching
                                        </span>
                                    </Button>
                                </Link>
                                <Link href={route("prototype.register")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Create New Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

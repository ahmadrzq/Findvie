import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Register() {
    const handleChange = (e) => {};
    return (
        <>
            <Head title="Sign Up" />
            <div class="mx-auto w-full min-h-[100vh] flex justify-center items-center bg-black text-white md:px-10 px-3">
                <div class="flex">
                    <div>
                        <img
                            src="/images/moonton-white.svg"
                            className="mx-auto"
                            alt=""
                        />
                        <div class="my-[30px]">
                            <div class="font-semibold text-[26px] text-center mb-3">
                                Sign Up
                            </div>
                            <p class="text-base text-[#767676] text-center leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form class="w-[300px] sm:w-[370px]">
                            <div class="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forInput="fullname"
                                        value="Full Name"
                                    />
                                    <TextInput
                                        type="text"
                                        name="fullname"
                                        placeholder="Your fullname..."
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
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
                            <div class="grid space-y-[14px] mt-[30px]">
                                <Link>
                                    <Button type="button" variant="primary">
                                        <span className="text-base font-semibold">
                                            Sign Up
                                        </span>
                                    </Button>
                                </Link>
                                <Link href={route("prototype.login")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Sign In to My Account
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

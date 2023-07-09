import Button from "@/Components/Button";
import Authenticated from "@/Layouts/Authenticated";
import React from "react";
import { Link, usePage } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ flashMessage }) {
    const { auth } = usePage().props;
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <Button type="button" className=" w-40 mb-8">
                    Insert New Movie
                </Button>
            </Link>
            {flashMessage?.message && <FlashMessage message={flashMessage.message}/>}
        </Authenticated>
    );
}

import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, usePage, useForm, router } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

export default function Edit({ movie }) {
    const { auth } = usePage().props;
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        router.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Update Movie : {movie.name}</h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <InputLabel forInput="name" value="Name" />
                <TextInput
                    type="text"
                    name="name"
                    variant="primary-outline"
                    defaultValue={movie.name}
                    onChange={(e) => setData("name", e.target.value)}
                    placeholder="Enter the name of the movie"
                    iserorr={errors.name}
                />
                <InputError message={errors.name} />

                <InputLabel
                    forInput="category"
                    value="Category"
                    className="mt-5"
                />
                <TextInput
                    type="text"
                    name="category"
                    variant="primary-outline"
                    defaultValue={movie.category}
                    onChange={(e) => setData("category", e.target.value)}
                    placeholder="Enter the category of the movie"
                    iserorr={errors.category}
                />
                <InputError message={errors.category} />

                <InputLabel
                    forInput="video_url"
                    value="Video URL"
                    className="mt-5"
                />
                <TextInput
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    defaultValue={movie.video_url}
                    onChange={(e) => setData("video_url", e.target.value)}
                    placeholder="Enter the video url of the movie"
                    iserorr={errors.video_url}
                />
                <InputError message={errors.video_url} />

                <InputLabel
                    forInput="thumbnail"
                    value="Thumbnail"
                    className="mt-5"
                />
                <img
                    src={`/storage/${movie.thumbnail}`}
                    alt=""
                    className="w-40"
                />
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    onChange={(e) =>
                        setData(
                            e.target.name,
                            e.target.type === "file"
                                ? e.target.files[0]
                                : e.target.value
                        )
                    }
                    placeholder="Insert thumbnail of the movie"
                    iserorr={errors.thumbnail}
                />
                <InputError message={errors.thumbnail} />

                <InputLabel forInput="rating" value="Rating" className="mt-5" />
                <TextInput
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    defaultValue={movie.rating}
                    onChange={(e) => setData("rating", e.target.value)}
                    placeholder="Enter the rating of the movie"
                    iserorr={errors.rating}
                />
                <InputError message={errors.rating} />

                <div className="flex flex-row items-center mt-5">
                    <InputLabel
                        forInput="is_featured"
                        value="Is Featured"
                        className="mt-1 mr-3"
                    />
                    <Checkbox
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        checked={movie.is_featured}
                    />
                </div>
                <Button type="submit" className=" mt-5" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}

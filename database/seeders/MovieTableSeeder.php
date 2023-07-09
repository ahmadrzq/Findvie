<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'Avatar 2',
                'slug' => 'avatar-2',
                'category' => 'Action',
                'video_url' => "https://youtu.be/X47sEzHdPI0",
                'thumbnail' => "https://upload.wikimedia.org/wikipedia/id/5/54/Avatar_The_Way_of_Water_poster.jpg",
                'rating' => 4.5,
                'is_featured' => 1
            ], [
                'name' => 'Knives Out',
                'slug' => 'knives-out',
                'category' => 'Mystery',
                'video_url' => "https://youtu.be/qGqiHJTsRkQ",
                'thumbnail' => 'https://i.etsystatic.com/21028910/r/il/cdd6d8/2845936897/il_570xN.2845936897_p1mg.jpg',
                'rating' => 4.4,
                'is_featured' => 0
            ], [
                'name' => 'One Piece',
                'slug' => 'one-piece',
                'category' => 'Animation',
                'video_url' => "https://youtu.be/89JWRYEIG-s",
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/4/44/One_Piece_Film_Red_Visual_Poster.jpg',
                'rating' => 4.8,
                'is_featured' => 0
            ]
        ];

        Movie::insert($movies);
    }
}

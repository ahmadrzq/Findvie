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
                'video_url' => 'https://youtube.com/eo12ihwhw9r82yrew',
                'thumbnail' => 'https://picsum.photos/id/3/300/500',
                'rating' => 4.5,
                'is_featured' => 1
            ], [
                'name' => 'Knives Out',
                'slug' => 'knives-out',
                'category' => 'Mystery',
                'video_url' => 'https://youtube.com/eo12ihwhw9r82yrew',
                'thumbnail' => 'https://picsum.photos/id/4/300/500',
                'rating' => 4.4,
                'is_featured' => 0
            ], [
                'name' => 'One Piece',
                'slug' => 'one-piece',
                'category' => 'Animation',
                'video_url' => 'https://youtube.com/eo12ihwhw9r82yrew',
                'thumbnail' => 'https://picsum.photos/id/5/300/500',
                'rating' => 4.8,
                'is_featured' => 0
            ]
        ];

        Movie::insert($movies);
    }
}

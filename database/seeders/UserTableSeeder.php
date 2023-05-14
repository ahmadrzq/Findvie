<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@mail.com',
            'password' => bcrypt('admin'),
        ]);
        $admin->assignRole('admin');


        $user = User::create([
            'name' => 'zenitsu',
            'email' => 'zenitsu@mail.com',
            'password' => bcrypt('user'),
        ]);
        $user->assignRole('user');
    }
}

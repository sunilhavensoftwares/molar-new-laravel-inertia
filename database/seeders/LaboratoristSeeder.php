<?php

namespace Database\Seeders;

use Database\Factories\LaboratoristFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LaboratoristSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        LaboratoristFactory::new()->count(500)->create();
    }
}

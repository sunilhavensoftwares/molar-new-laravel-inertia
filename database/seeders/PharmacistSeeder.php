<?php

namespace Database\Seeders;

use Database\Factories\PharmacistFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PharmacistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PharmacistFactory::new()->count(500)->create();
    }
}

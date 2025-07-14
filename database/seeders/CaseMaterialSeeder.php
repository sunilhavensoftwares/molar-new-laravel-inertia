<?php

namespace Database\Seeders;

use Database\Factories\CaseMaterialFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CaseMaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CaseMaterialFactory::new()->count(100)->create();
    }
}

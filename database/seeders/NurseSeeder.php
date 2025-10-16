<?php

namespace Database\Seeders;

use Database\Factories\NurseFactory;
use Illuminate\Database\Seeder;

class NurseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        NurseFactory::new()->count(500)->create();
    }
}

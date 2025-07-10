<?php

namespace Database\Seeders;

use Database\Factories\MedicalHistoryFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MedicalHistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MedicalHistoryFactory::new()->count(500)->create();
    }
}

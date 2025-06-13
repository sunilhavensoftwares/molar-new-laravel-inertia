<?php

namespace Database\Seeders;

use Database\Factories\DoctorFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
         \App\Models\Doctor::factory(100)->create();
    }
}

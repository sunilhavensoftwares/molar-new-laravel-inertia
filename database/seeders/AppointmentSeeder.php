<?php

namespace Database\Seeders;

use Database\Factories\AppointmentFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AppointmentFactory::new()->count(500)->create();
    }
}

<?php

namespace Database\Seeders;

use Database\Factories\HolidayFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HolidaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HolidayFactory::new()->count(50)->create();
    }
}

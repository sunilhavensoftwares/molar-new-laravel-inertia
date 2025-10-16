<?php

namespace Database\Seeders;

use Database\Factories\ReceptionistFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReceptionistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ReceptionistFactory::new()->count(500)->create();
    }
}

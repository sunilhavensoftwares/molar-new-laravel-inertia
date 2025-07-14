<?php

namespace Database\Seeders;

use Database\Factories\PatientDocumentFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PatientDocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PatientDocumentFactory::new()->count(100)->create();
    }
}

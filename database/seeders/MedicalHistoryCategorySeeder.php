<?php

namespace Database\Seeders;

use App\Models\MedicalHistoryCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MedicalHistoryCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MedicalHistoryCategory::insert([
            [
                'name' => 'Implant',
                'slug' => 'implant',
            ],
            [
                'name' => 'RCT',
                'slug' => 'rct',
            ],
            [
                'name' => 'Extraction',
                'slug' => 'extraction',
            ],

        ]);
    }
}

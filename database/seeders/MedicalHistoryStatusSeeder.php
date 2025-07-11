<?php

namespace Database\Seeders;

use App\Models\MedicalHistoryStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MedicalHistoryStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MedicalHistoryStatus::insert([
            [
                'name' => 'Completed',
                'color_name' => 'success',
                'status' => 1,

            ],
            [
                'name' => 'In Progress',
                'color_name' => 'danger',
                'status' => 0,
            ],
        ]);
    }
}

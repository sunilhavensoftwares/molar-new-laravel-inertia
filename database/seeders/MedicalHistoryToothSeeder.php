<?php

namespace Database\Seeders;

use App\Models\MedicalHistory;
use App\Models\Tooth;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MedicalHistoryToothSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get all medical histories and teeth
        $medicalHistories = MedicalHistory::all();
        $toothIds = Tooth::pluck('id')->toArray();

        foreach ($medicalHistories as $medicalHistory) {
            // Attach 1 to 5 random teeth to each medical history
            $randomToothIds = collect($toothIds)->random(rand(1, 5))->unique();

            $medicalHistory->teeth()->syncWithoutDetaching($randomToothIds);
        }
    }
}

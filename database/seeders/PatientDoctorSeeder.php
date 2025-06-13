<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Patient;
use App\Models\Doctor;
use Illuminate\Support\Facades\DB;

class PatientDoctorSeeder extends Seeder
{
    public function run(): void
    {
        // Example: associate each patient with 1–3 random doctors
        $patientIds = Patient::pluck('id');
        $doctorIds = Doctor::pluck('id');

        foreach ($patientIds as $patientId) {
            $assignedDoctors = $doctorIds->random(rand(1, 3));
            foreach ($assignedDoctors as $doctorId) {
                DB::table('patient_doctors')->insertOrIgnore([
                    'patient_id' => $patientId,
                    'doctor_id' => $doctorId,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}

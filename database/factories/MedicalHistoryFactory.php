<?php

namespace Database\Factories;

use App\Models\Doctor;
use App\Models\MedicalHistoryCategory;
use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MedicalHistory>
 */
class MedicalHistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $patient = Patient::inRandomOrder()->first();
        $doctor = Doctor::inRandomOrder()->first();
        $doctor = Doctor::inRandomOrder()->first();
        $medical_history_category = MedicalHistoryCategory::inRandomOrder()->first();
        return [
            'patient_id' =>$patient->id,
            'medical_history_category_id' =>$medical_history_category->id,
            'title' =>$this->faker->sentence(2),
            'description' =>$this->faker->paragraph(4),
            'date' => fake()->dateTimeBetween('-1 year', '+1 year')->format('Y-m-d'),
            'doctor_id' =>$doctor->id,
            'status'=> rand(0,1)
        ];
    }
}

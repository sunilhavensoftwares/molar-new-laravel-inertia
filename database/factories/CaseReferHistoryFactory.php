<?php

namespace Database\Factories;

use App\Models\Doctor;
use App\Models\MedicalHistory;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CaseReferHistory>
 */
class CaseReferHistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'patient_id' => Patient::inRandomOrder()->first()->id,
            'medical_history_id' => MedicalHistory::inRandomOrder()->first()->id,
            'from_doctor_id' => Doctor::inRandomOrder()->first()->id,
            'to_doctor_id' => Doctor::inRandomOrder()->first()->id,
            'referrer_user_id' => User::with('roles')->whereHas('roles', fn($q) => $q->where('name', 'admin'))->inRandomOrder()->first()->id

        ];
    }
}
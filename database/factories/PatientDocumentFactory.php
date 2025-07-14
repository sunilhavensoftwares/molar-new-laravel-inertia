<?php

namespace Database\Factories;

use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PatientDocument>
 */
class PatientDocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->name();
        return [
            'patient_id' => Patient::inRandomOrder()->first()->id,
            'date' => fake()->dateTimeBetween('-1 year', '+1 year')->format('Y-m-d'),
            'description' => $name,
            'document_path' => 'https://placehold.co/100x100?text='.$name,
        ];
    }
}

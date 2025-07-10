<?php

namespace Database\Factories;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Holiday>
 */
class HolidayFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
        return [
            'doctor_id' => Doctor::inRandomOrder()->first()->id,
            'date' => fake()->dateTimeBetween('-1 year', '+1 year')->format('Y-m-d'),
        ];
    }
}

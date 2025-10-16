<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Receptionist>
 */
class ReceptionistFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
        $name = fake()->name();
        $name_chr = Arr::map(explode(' ', $name), function ($val) {
            return $val[0];
        });
        $name_chr = strtoupper(implode('', $name_chr));
        return
            [
                'name' => $name,
                'img_url' => 'https://placehold.co/100x100?text=' . $name_chr,
                'email' => fake()->unique()->safeEmail(),
                'address' => fake()->address(),
                'phone' => fake()->phoneNumber(),
                'user_id' => fake()->unique()->randomElement(User::pluck('id')->toArray())
            ];
    }
}

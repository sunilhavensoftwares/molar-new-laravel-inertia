<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->name();
        $name_chr = Arr::map(explode(' ',$name),function($val){
            return $val[0];
        });
        $name_chr = strtoupper(implode('',$name_chr));
        $role = $this->faker->randomElement(['nurse', 'patient', 'receptionist', 'doctor']);
        return [
            'name' => $name,
            'email' =>  strtolower($role . '_' . uniqid() . '@' . $role . '.com'),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'avatar_url' => 'https://placehold.co/100x100?text='.$name_chr , // Random avatar URL
            'last_login' => fake()->dateTimeBetween('-30 days', 'now'),
            'two_step_enabled' => fake()->boolean(),
            'encrypt_detail_enabled' => fake()->boolean(),
            'active' => fake()->boolean(90), // 90% chance of being active
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}

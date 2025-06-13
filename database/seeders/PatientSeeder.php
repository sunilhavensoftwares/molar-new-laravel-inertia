<?php

namespace Database\Seeders;

use App\Models\Patient;
use App\Models\PatientDoctor;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $faker = Faker::create();
        $statusArr = ['soft_deleted', 'active', 'deleted'];
        $patientIds = User::query()->hasRole('patient')->pluck('id')->toArray();
        $patientEmail = User::query()->hasRole('patient')->pluck('email')->toArray();

        // Example: Create 50 records
        for ($i = 0; $i < 50; $i++) {
            $gender = $faker->randomElement(['male', 'female']);
            $birthdate = $faker->dateTimeBetween('-80 years', '-18 years');
            $age = now()->diffInYears($birthdate);

            Patient::create([
                'nID' => rand(1000000000, 9999999999), // use integers here, not strings
                'img_url' => $faker->imageUrl(200, 200, 'people', true),
                'name' => $faker->name($gender),
                'email' => $faker->randomElement($patientEmail),
                'address' => $faker->address,
                'phone' => $faker->phoneNumber,
                'sex' => $gender,
                'birthdate' => $birthdate->format('Y-m-d'),
                'age' => $age,
                'bloodgroup' => $faker->randomElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
                'user_id' => $faker->randomElement($patientIds),
                'status' => $statusArr[array_rand($statusArr)],
                'is_visible' => $faker->boolean(90),
                'is_temporary' => $faker->boolean(10),
            ]);
        }
    }
}

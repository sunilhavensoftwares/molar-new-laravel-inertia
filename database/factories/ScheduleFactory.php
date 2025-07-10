<?php

namespace Database\Factories;

use App\Models\Doctor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Schedule>
 */
class ScheduleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        // Validate that the end time is after the start time
        $s_time = fake()->time('H:i');
        $s_time_arr = explode(':', $s_time);
        $e_time_arr = explode(':', fake()->time('H:i'));
        $e_time = date('H:i', mktime($e_time_arr[0] + 1, $e_time_arr[1], 0, 0, 0, 0));

        if (strtotime($e_time) < strtotime($s_time)) {
            $e_time = date('H:i', strtotime($s_time) + 900);
        }

        // Validate that the end time key is not less than the start time key
        $s_time_key = fake()->numberBetween(0, 100);
        $appointment_interval = fake()->numberBetween(5, 60);
        $appt_max_dur = fake()->numberBetween(1, 60);
        if($appt_max_dur > $appointment_interval){
            $appt_max_dur = $appointment_interval;
        }
        
        return [
            'doctor_id' => Doctor::inRandomOrder()->first()->id,
            'weekday' => fake()->numberBetween(0, 6),
            's_time' => $s_time,
            'e_time' => $e_time,
            's_time_key' => $s_time_key,
            'duration' => fake()->numberBetween(15, 60),
            'status' => fake()->randomElement([0, 1]),
            'aslot_type' => fake()->randomElement([0,1]),
            'appointment_interval' => $appointment_interval ,
            'appt_max_dur' =>$appt_max_dur,
        ];
    }
}

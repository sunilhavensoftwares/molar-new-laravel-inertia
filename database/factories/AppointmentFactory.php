<?php

namespace Database\Factories;

use App\Models\Doctor;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {   
        $start  = fake()->time();
        $end  = fake()->time();
        if($start > $end){
            $end = date('H:i', strtotime($start) + 900);
        }
        $date = fake()->dateTimeBetween('-1 year', '+1 year')->format('Y-m-d');
        $add_date = date('Y-m-d', strtotime($date. ' - 1 day'));
        if($add_date > $date){
            $add_date = $date;
        }
        $is_walk_in = fake()->boolean();
        $rand_status = rand(0,4);
        $s_time_key = rand(1,275);
        $a_slot_type = rand(0,1);
        $alert_type_int= rand(0,2);
        return [
            'patient_id' =>Patient::inRandomOrder()->first()->id,
            'doctor_id' =>Doctor::inRandomOrder()->first()->id,
            'user_id' =>User::whereHas('roles', function ($roleQuery) {
                        $roleQuery->where(function ($q) {
                            $q->where('name', 'like', 'Receptionist%')
                                ->orWhere('name', 'like', 'Admin%');
                        })->whereHas('permissions', function ($permQuery) {
                            $permQuery->where('name', 'edit')
                                ->whereHas('module', function ($moduleQuery) {
                                    $moduleQuery->where('name', 'like', 'Appointment%');
                                });
                        });
                    })->with(['roles' => function ($q) {
                        $q->where('name', 'like', 'Receptionist%')
                            ->orWhere('name', 'like', 'Admin%');
                    }, 'roles.permissions' => function ($q) {
                        $q->where('name', 'edit')->whereHas('module', function ($q2) {
                            $q2->where('name', 'like', 'Appointment%');
                        });
                    }, 'roles.permissions.module'])->first()->id,
            'appointment_date' => $date,
            'is_walk_in' =>$is_walk_in,
            's_time' =>$is_walk_in ? 0 : $start,
            'computed_s_time' => $is_walk_in ? 0 : strtotime($start),
            'e_time' =>$is_walk_in ? 0 : $end,
            'remarks' =>fake()->sentence(),
            'add_date' =>$add_date,
            'registration_time' =>strtotime($add_date),
            's_time_key' =>$s_time_key,
            'status' =>$rand_status,
            'request' =>fake()->name(),
            'aslot_type' =>$a_slot_type,
            'ap_year' =>date('Y', strtotime($date)),
            'ap_month' =>date('m', strtotime($date)),
            'ap_day' =>date('y', strtotime($date)),
            'alert_type_int' =>$alert_type_int,
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Doctor>
 */
class DoctorFactory extends Factory
{
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
        $statusArr = ['soft_deleted','active','deleted'];
        return [
                'img_url'=>'https://placehold.co/100x100?text='.$name_chr,
                'name'=>$name,
                'email'=>fake()->unique()->safeEmail(),
                'address'=>fake()->address(),
                'phone'=>fake()->phoneNumber(),
                'department'=>null,
                'profile'=>$name,
                'is_visible'=>rand(0,1),
                'min_discount'=>rand(100,200),
                'max_discount'=>rand(300,400),
                'x'=>null,
                'y'=>null,
                'user_id'=> fake()->unique()->randomElement(User::pluck('id')->toArray()),
                'status'=>$statusArr[array_rand($statusArr)],
        ];
    }
}

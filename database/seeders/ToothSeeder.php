<?php

namespace Database\Seeders;

use App\Models\Tooth;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ToothSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $insertData=[];
        $name_array=['incisors','canines','premolars','molar'];
        $status_arr = [0,1];
        for ($i=1;$i<33;$i++){
            $status = $status_arr[array_rand($status_arr)];
            $name = $name_array[array_rand($name_array)];
            $insertData[] =  [
                'code'=>$i,
                'name'=>$name,
                'image'=>'https://placehold.co/100x100?text='.$name,
                'status'=>$status
            ];
        }
        Tooth::insert($insertData);
    }
}

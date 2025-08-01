<?php

namespace Database\Seeders;

use App\Models\MedicalHistoryCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
class MedicalHistoryCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $insertData=[];
        $name_array=['Implant','RCT','Extraction'];
        $status_arr = [0,1];
        for ($i=0;$i<count($name_array);$i++){
            $status = $status_arr[array_rand($status_arr)];
            $name = $name_array[$i];
            $insertData[] =  [
                'slug'=>Str::of($name)->slug(),
                'name'=>$name,
                'image'=>'https://placehold.co/100x100?text='.$name,
                'status'=>$status
            ];
        }
        MedicalHistoryCategory::insert($insertData);
    }
}

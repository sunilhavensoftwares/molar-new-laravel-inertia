<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(1000)->create();
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password'=>Hash::make('Admin@123')
        ]);

        $this->call(RoleModulePermissionSeeder::class);
        $this->call(RoleUserSeeder::class);
        $this->call(DoctorSeeder::class);

        $this->call(PatientSeeder::class);

        $this->call(PatientDoctorSeeder::class);
        $this->call(ScheduleSeeder::class);
        $this->call(HolidaySeeder::class);
        $this->call(MedicalHistoryCategorySeeder::class);
        $this->call(MedicalHistorySeeder::class);
    }
}

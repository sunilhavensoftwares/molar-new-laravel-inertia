<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        $this->call(ToothSeeder::class);
        $this->call(MedicalHistoryStatusSeeder::class);
        $this->call(MedicalHistoryCategorySeeder::class);
        $this->call(MedicalHistorySeeder::class);
        $this->call(MedicalHistoryToothSeeder::class);
        $this->call(CaseReferHistorySeeder::class); //CaseReferHistorySeeder
        $this->call(CaseMaterialSeeder::class); //CaseMaterialSeeder
        $this->call(PatientDoctorSeeder::class); //PatientDoctorSeeder
        $this->call(AppointmentSeeder::class); //AppointmentSeeder
    }
}

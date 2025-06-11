<?php

namespace Database\Seeders;

use App\Models\Module;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleModulePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $roles = [
            'admin', 'doctor', 'nurse', 'receptionist', 'accountant', 'laboratorist', 'pharmacist',
        ];

        $modules = [
            'Dashboard', 'User Management', 'Doctors', 'Patient', 'Schedule', 'Appointment',
            'Human Resource', 'Financial Activities', 'Prescription', 'Lab', 'Medicine',
            'Pharmacy', 'Report', 'Email', 'SMS', 'Website', 'Settings',
        ];

        $actions = ['View', 'Add', 'Edit', 'Delete'];

        // Create Roles
        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role], ['label' => ucfirst($role)]);
        }

        // Create Modules & Permissions
        foreach ($modules as $modName) {
            $module = Module::firstOrCreate(['name' => $modName]);

            foreach ($actions as $action) {
                Permission::firstOrCreate([
                    'name' => strtolower($action),
                    'module_id' => $module->id
                ], [
                    'label' => "$action $modName"
                ]);
            }
        }

        // Assign all permissions to admin
        $admin = Role::where('name', 'admin')->first();
        $admin->permissions()->sync(Permission::pluck('id'));

        // Add selective permissions to other roles as needed...
        // Example:
        //get doctor
        $doctor = Role::where('name', 'doctor')->first();
        $doctorPerms = Permission::whereHas('module', function ($q) {
            $q->whereIn('name', ['Patient', 'Appointment', 'Prescription']);
        })->whereIn('name', ['view', 'edit'])->pluck('id');
        $doctor->permissions()->sync($doctorPerms);
    }
}

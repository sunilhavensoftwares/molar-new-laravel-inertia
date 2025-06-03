<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    public function run()
    {
        $roles = [
            'admin',
            'doctor',
            'nurse',
            'receptionist',
            'accountant',
            'laboratorist',
            'pharmacist',
        ];

        $permissions = [
            'view_patients',
            'edit_patients',
            'manage_appointments',
            'view_billing',
            'manage_inventory',
            'lab_tests_access',
            'issue_prescriptions',
        ];

        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role], ['label' => ucfirst($role)]);
        }

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission], ['label' => ucfirst(str_replace('_', ' ', $permission))]);
        }

        // Role-permission mappings
        $rolePermissions = [
            'admin' => $permissions,
            'doctor' => [
                'view_patients',
                'edit_patients',
                'manage_appointments',
                'issue_prescriptions',
            ],
            'nurse' => [
                'view_patients',
                'manage_appointments',
            ],
            'receptionist' => [
                'view_patients',
                'manage_appointments',
            ],
            'accountant' => [
                'view_billing',
            ],
            'laboratorist' => [
                'lab_tests_access',
            ],
            'pharmacist' => [
                'manage_inventory',
                'issue_prescriptions',
            ],
        ];

        foreach ($rolePermissions as $roleName => $perms) {
            $role = Role::where('name', $roleName)->first();
            $permIds = Permission::whereIn('name', $perms)->pluck('id');
            $role->permissions()->sync($permIds);
        }
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;

class RoleUserSeeder extends Seeder
{
    public function run(): void
    {
        $roles = Role::all()->pluck('id', 'name')->mapWithKeys(function ($id, $name) {
            return [strtolower($name) => $id];
        });

        foreach (User::all() as $user) {
            if (str_contains($user->email, 'admin')) {
                $user->roles()->syncWithoutDetaching([$roles['administrator']]);
            } elseif (str_contains($user->email, 'doctor')) {
                $user->roles()->syncWithoutDetaching([$roles['doctor']]);
            } elseif (str_contains($user->email, 'receptionist')) {
                $user->roles()->syncWithoutDetaching([$roles['receptionist']]);
            } else {
                $user->roles()->syncWithoutDetaching([$roles['nurse']]); // Default
            }
        }
    }
}

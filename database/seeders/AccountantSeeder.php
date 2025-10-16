<?php

namespace Database\Seeders;

use Database\Factories\AccountantFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccountantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AccountantFactory::new()->count(500)->create();
    }
}

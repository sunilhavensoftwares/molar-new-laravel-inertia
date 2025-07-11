<?php

namespace Database\Seeders;

use App\Http\Resources\CaseReferHistory;
use Database\Factories\CaseReferHistoryFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CaseReferHistorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CaseReferHistoryFactory::new()->count(100)->create();
    }
}

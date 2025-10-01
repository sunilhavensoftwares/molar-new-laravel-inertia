<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class ClearZiggyCache extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ziggy:clear';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear the cached Ziggy routes';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Cache::forget('ziggy_routes_true');
        Cache::forget('ziggy_routes_false');
        Cache::forget('can_reset_password');
        
        $this->info('Ziggy route cache cleared successfully.');
    }
}

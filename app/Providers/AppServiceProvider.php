<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        try {
            // Inertia::share([
            //     'route' => function () {
            //         $segments = request()->segments();
            //         return [
            //             'url' => is_array($segments) ? $segments : [],
            //         ];
            //     },
            //     'routeUrl' => function () {
            //         $currentRoute = \Route::current();
            //         if ($currentRoute) {
            //             $routeName = \Route::currentRouteName();
            //             return $routeName ? route($routeName, $currentRoute->parameters()) : '';
            //         }
            //         return '';
            //     },
            // ]);
        } catch (\Exception $e) {
            // Handle any exceptions that may occur
            //\Log::error('An error occurred while sharing data with Inertia: ' . $e->getMessage());
        }
    }
}

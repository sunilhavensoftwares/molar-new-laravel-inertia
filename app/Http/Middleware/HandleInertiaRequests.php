<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $this->getOptimizedUser($request),
            ],
            'ziggy' => $this->getOptimizedZiggy($request),
        ];
    }

    /**
     * Get optimized user data to reduce serialization overhead
     */
    private function getOptimizedUser(Request $request)
    {
        $user = $request->user();
        
        if (!$user) {
            return null;
        }

        // Only return essential user data to reduce payload size
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            // Don't load relationships unless specifically needed
        ];
    }

    /**
     * Get cached Ziggy routes for better performance
     */
    private function getOptimizedZiggy(Request $request)
    {
        // Cache Ziggy routes for 1 hour to improve performance
        return \Illuminate\Support\Facades\Cache::remember(
            'ziggy_routes_' . config('app.debug', false),
            3600, // 1 hour
            fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ]
        );
    }
}

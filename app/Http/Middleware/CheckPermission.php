<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;


class CheckPermission {
    public function handle(Request $request, Closure $next, $permission) {
        $user = $request->user();
        // dd($user->hasPermission($permission));
        if ((!$user || !$user->hasPermission($permission)) && $user->roles()->first()->name != 'admin') {
            return Inertia::render('Errors/Unauthorized', [
                'message' => 'You are not authorized to access this page.'
            ])->toResponse($request)->setStatusCode(Response::HTTP_FORBIDDEN);
        }

        return $next($request);
    }
}

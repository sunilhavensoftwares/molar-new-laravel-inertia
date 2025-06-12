<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = User::query()->with('roles');

        $sort = $request->get('sort', 'users.email');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'users.email',
            'roles.name',
            'users.last_login',
            'users.two_step_enabled',
            'users.encrypt_detail_enabled',
            'users.active',
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'users.email';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        if ($request->filled('name')) {
            $query->where('users.name', 'like', '%' . $request->name . '%');
        }

        if ($request->filled('role')) {
            $query->whereHas('roles', function ($q) use ($request) {
                $q->where('roles.name', $request->role);
            });
        }

        // Handle sorting
        if ($sort === 'roles.name') {
            $query->select([
                'users.id',
                'users.name',
                'users.email',
                'users.email_verified_at',
                'users.avatar_url',
                'users.two_step_enabled',
                'users.encrypt_detail_enabled',
                'users.active',
                'users.last_login',
                'users.created_at',
                'users.updated_at',
            ])
                ->leftJoin('role_user', 'users.id', '=', 'role_user.user_id')
                ->leftJoin('roles', 'roles.id', '=', 'role_user.role_id')
                ->groupBy(
                    'users.id',
                    'users.name',
                    'users.email',
                    'users.email_verified_at',
                    'users.avatar_url',
                    'users.two_step_enabled',
                    'users.encrypt_detail_enabled',
                    'users.active',
                    'users.last_login',
                    'users.created_at',
                    'users.updated_at'
                )
                ->orderByRaw("MIN(roles.name) $order");
        } else {
            $query->orderBy($sort, $order);
        }
        $users = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));

        return Inertia::render('Users/Index', [
            'users' => UserResource::collection($users),
            'query' => $request->all(),
            'routeUrl' => route('users.index'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::with(['roles:id,name'])->find($id);
        return Inertia::render('Users/Detail', [
            'user' => new UserResource($user),
            'routeUrl' => route('users.index'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

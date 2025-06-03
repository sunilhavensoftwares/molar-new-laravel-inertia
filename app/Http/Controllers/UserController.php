<?php

namespace App\Http\Controllers;

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
        $query = User::query();

        $sort = $request->get('sort', 'name');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = ['id', 'name', 'email', 'status'];
        if (!in_array($sort, $allowedSorts)) {
            $sort = 'name';
        }
        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }
        if ($request->filled('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->filled('role')) {
           $query->whereHas('roles', function ($q) use ($request) {
                $q->where('name', $request->role);
            });
        }

        $query->orderBy($sort, $order);

        $users = $query->with('roles')->paginate($request->get('perPage', 10))->appends($request->all());

        return Inertia::render('Users/Index', [
            'users' => $users,
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
        //
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

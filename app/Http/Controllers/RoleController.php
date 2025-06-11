<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleResource;
use App\Http\Resources\UserResource;
use App\Models\Module;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::withCount('users')->get();
        $roles = RoleResource::collection($roles);
        return Inertia::render(
            'Roles/Index',
            [
                'roles' => $roles
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Roles/CreateRole',
            [
                'permissions' => ''
            ]
        );
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
    public function show(Role $role, Request $request, $id)
    {
        $role = $role->findOrFail($id);

        $query = $role->users()->latest();

        $sort = $request->get('sort', 'users.name');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = ['users.id', 'users.name', 'users.email', 'users.status'];
        if (!in_array($sort, $allowedSorts)) {
            $sort = 'users.name';
        }
        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }
        if ($request->filled('name')) {
            $query->where('users.name', 'like', '%' . $request->name . '%');
        }

        $query->orderBy($sort, $order);

        $users = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));

        return Inertia::render(
            'Roles/Details',
            [
                'role' => $role,
                'users' => UserResource::collection($users),
                'query' => $request->all(),
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        //get permission ids array from role collection
        $assignedPermissionIds = $role->permissions->pluck('id')->toArray();
        $modules = Module::with(['permissions' => function ($q) {
            $q->orderBy('name');
        }])->get();
        // Format permissions to include whether they're assigned to the role
        $modulesWithPermissions = $modules->map(function ($module) use ($assignedPermissionIds) {
            return [
                'id' => $module->id,
                'name' => $module->name,
                'permissions' => $module->permissions->map(function ($permission) use ($assignedPermissionIds) {
                    return [
                        'id' => $permission->id,
                        'name' => $permission->name,
                        'label' => $permission->label,
                        'assigned' => in_array($permission->id, $assignedPermissionIds),
                    ];
                }),
            ];
        });

        return Inertia::render(
            'Roles/EditRole',
            [
                'role' => $role,
                'modules' => $modulesWithPermissions
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        //
    }
}

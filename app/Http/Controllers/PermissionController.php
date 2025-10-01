<?php

namespace App\Http\Controllers;

use App\Http\Requests\PermissionRequest;
use App\Http\Resources\PermissionResource;
use App\Models\Module;
use App\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class PermissionController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $sort = $request->get('sort', 'permissions.id');
        $order = strtolower($request->get('order', 'desc'));

        $allowedSorts = [
            'permissions.id',
            'permissions.name',
            'permissions.label',
            'modules.name',
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'permissions.id';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        $query = Permission::query()->with('module');

        // Join if needed for filtering or sorting by module
        if ($request->filled('name') || $sort === 'modules.name' || $request->filled('module')) {
            $query->leftJoin('modules', 'permissions.module_id', '=', 'modules.id')
                ->select('permissions.*', 'modules.name as module_name');
        } else {
            $query->with('module');
        }

        // Filtering
        if ($request->filled('name')) {
            $query->where(function ($q) use ($request) {
                $q->where('permissions.name', 'like', '%' . $request->name . '%')
                    ->orWhere('permissions.label', 'like', '%' . $request->name . '%')
                    ->orWhere('modules.name', 'like', '%' . $request->name . '%');
            });
        }

        if ($request->filled('module')) {
            $query->where('modules.name', 'like', '%' . $request->module . '%');
        }

        // Sorting
        if ($sort === 'modules.name') {
            $query->orderBy('modules.name', $order);
        } else {
            $query->orderBy($sort, $order);
        }

        $permissions = $query->paginate($request->get('perPage', 10))
            ->appends($request->query());

        return Inertia::render('Permissions/Index', [
            'permissions' => PermissionResource::collection($permissions),
            'query'       => $request->all(),
            'modules'     => Module::get(),
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, PermissionRequest $permissionRequest) {
        $permission = Permission::create([
            'name' => $request->permission_name,
            'label' => $request->permission_label,
            'module_id' => $request->module_id
        ]);
        if($permission){
            return response()->json(['status' => 200, 'message' => 'Permission Created Successfully']);
        }
        return response()->json(['status' => 400, 'message' => 'Unable to create permission at the moment ! Please try later.']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Permission $permission) {
       
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Permission $permission) {
         if($permission){
            $permission->load('module');
            return response()->json(['permission' => $permission, 'status' => 200]);
        }
        return response()->json(['status' => 404, 'message' => 'Permission not found']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Permission $permission, PermissionRequest $permissionRequest) {
        $permission->name = $request->permission_name;
        $permission->label = $request->permission_label;
        $permission->module_id = $request->module_id;
        if($permission->save()){
            return response()->json(['status' => 200, 'message' => 'Permission Updated Successfully']);
        }
        return response()->json(['status' => 400, 'message' => 'Unable to update permission at the moment ! Please try later.']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission) {
        if($permission->delete()){
            return response()->json(['status' => 200, 'message' => 'Permission Deleted Successfully']);
        }
        return response()->json(['status' => 400, 'message' => 'Unable to delete permission at the moment ! Please try later.']);
    }
}

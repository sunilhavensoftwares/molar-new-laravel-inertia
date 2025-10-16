<?php

namespace App\Http\Controllers;

use App\Http\Requests\HumanResourceFormRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class HumanResourceController extends Controller {
    public function handleRole($human_resource, request $request) {
        $allowedRoles = ['nurse', 'pharmacist', 'laboratorist', 'accountant', 'receptionist'];
        if (!in_array($human_resource, $allowedRoles)) {
            return abort(404);
        }
        $modalClass = 'App\\Models\\' . ucfirst($human_resource);
        $table = $human_resource . 's';
        $query = $modalClass::query();
        $sort = $request->get('sort', $table . '.id');
        $order = strtolower($request->get('order', 'desc'));
        $allowedSorts = [
            $table . '.id',
            $table . '.name',
            $table . '.email',
            $table . '.address',
            $table . '.phone'
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = $table . '.id';
        }
        //dd($sort);
        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'desc';
        }
        // Filtering by name
        if ($request->filled('name')) {
            $query->where($table . '.name', 'like', '%' . $request->name . '%');
        }
        // Sorting
        $query->orderBy($sort, $order);

        $resources = $query
            ->paginate($request->get('perPage', 10))
            ->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render('HumanResources/' . ucfirst($human_resource), [
            "$table" => $resources,
            'query' => $request->all(),
        ]);
    }
    public function store(Request $request, $human_resource, HumanResourceFormRequest $formRequest) {
        $modalClass = 'App\\Models\\' . ucfirst($human_resource);
        $data = $request->only(['name', 'email', 'address', 'phone']);
        $user_data = $request->only(['name', 'email', 'password']);
        // Hash password
        $user_data['password'] = bcrypt($user_data['password']);
        // Handle avatar upload
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/avatars', $fileName); // stores in storage/app/public/avatars
            $fileName = 'avatars/' . $fileName;
            $data['img_url'] = $user_data['avatar_url'] = $fileName;
        }
        $user = User::create($user_data);
        $data['user_id'] = $user->id;
        if ($modalClass::create($data)) {
            return response()->json([
                'status' => 200,
                'message' => ucfirst($human_resource) . ' Created Successfully'
            ]);
        }

        return response()->json([
            'status' => 500,
            'message' => 'Unable to create ' . $human_resource . ' at the moment! Please try later.'
        ]);
    }
    public function edit(Request $request) {
        $human_resource = $request->human_resource;
        $id = $request->id;
        $modalClass = 'App\\Models\\' . ucfirst($human_resource);
        $data = $modalClass::find($id);
        return response()->json([
            'status' => 200,
            'data' => $data
        ]);
    }
    public function update(Request $request, $human_resource, HumanResourceFormRequest $formRequest) {
        $id = $request->id;
        $modalClass = 'App\\Models\\' . ucfirst($human_resource);
        $resource = $modalClass::find($id);
        $data = $request->only(['name', 'email', 'address', 'phone']);
        $user_data = $request->only(['name', 'email']);
        // Hash password
        if ($request->has('password') && $request->password != '') {
            $user_data['password'] = bcrypt($user_data['password']);
        }
        // Handle avatar upload
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $fileName = uniqid() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/avatars', $fileName); // stores in storage/app/public/avatars
            $fileName = 'avatars/' . $fileName;
            $data['img_url'] = $user_data['avatar_url'] = $fileName;
        }
        $user = User::find($resource->user_id);
        $user->update($user_data);
        $data['user_id'] = $resource->user_id;

        //dd($data);
        if ($resource->update($data)) {
            return response()->json([
                'status' => 200,
                'message' => ucfirst($human_resource) . ' updated Successfully'
            ]);
        }

        return response()->json([
            'status' => 500,
            'message' => 'Unable to update ' . $human_resource . ' at the moment! Please try later.'
        ]);
    }
}

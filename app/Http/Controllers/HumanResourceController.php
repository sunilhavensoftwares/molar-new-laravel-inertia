<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HumanResourceController extends Controller
{
    public function handleRole($human_resource){
        $allowedRoles = ['nurse', 'pharmacist', 'laboratorist', 'accountant', 'receptionist'];
        if(!in_array($human_resource,$allowedRoles)){
            return abort(404);
        }
        $resources = User::with('roles')->hasRole($human_resource)->latest()->paginate();
        return Inertia::render('HumanResources/'.ucfirst($human_resource),[
            'users' =>UserResource::collection($resources)
        ]);
    }
}

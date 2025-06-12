<?php

namespace App\Http\Controllers;

use App\Http\Resources\DoctorResource;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
          $query = Doctor::query();

        $sort = $request->get('sort', 'doctors.email');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'doctors.id',
            'doctors.name',
            'doctors.phone',
            'doctors.profile',
            'doctors.is_visible'
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'doctors.name';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        if ($request->filled('name')) {
            $query->where('doctors.name', 'like', '%' . $request->name . '%');
        }
        $query->orderBy($sort, $order);
        $doctors = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render(
            'Doctors/Index',
            [
            'doctors' => DoctorResource::collection($doctors),
            'query' => $request->all(),
            'routeUrl' => route('doctors.index'),
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      
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
    public function show(Doctor $doctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Doctor $doctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Doctor $doctor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor)
    {
        //
    }
}

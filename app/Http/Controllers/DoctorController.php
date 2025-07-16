<?php

namespace App\Http\Controllers;

use App\Http\Resources\DoctorResource;
use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DoctorController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
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
        if ($request->has('date_from') && $request->has('date_to')) {
            $date_from = \Carbon\Carbon::parse($request->date_from)->toDateTimeString();
            $date_to = \Carbon\Carbon::parse($request->date_to)->toDateTimeString();
            $query->whereBetween('created_at', [$date_from, $date_to]);
        }
        $query->orderBy($sort, $order);
        $doctors = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        $currentDate = Date('Y-m-d');
        return Inertia::render(
            'Doctors/Index',
            [
                'doctors' => DoctorResource::collection($doctors),
                'query' => $request->all(),
                'routeUrl' => route('doctors.index'),
                'currentDate' => $currentDate
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Doctor $doctor) {
        return Inertia::render(
            'Doctors/Detail',
            [
                'doctor' => $doctor
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Doctor $doctor) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Doctor $doctor) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctor $doctor) {
        //
    }
    public function updateVisibility(Doctor $doctor, Request $request) {
        $doctor->is_visible = $request->is_visible;
        if ($doctor->save()) {
            return response()->json([
                'message' => 'Doctor ' . $doctor->name . ' is ' . ($request->is_visible ? 'Visible' : 'Hidden') . ' Now',
                'success' => true
            ]);
        }
        return response()->json([
            'message' => 'Unable to update doctor visibility at the moment ! Please try later.',
            'success' => false
        ]);
    }
    public function search(Request $request) {
        $query = Doctor::query()
            ->where('doctors.is_visible', 1)
            ->select('doctors.id', 'doctors.name');

        if ($request->filled('name')) {
            $query->where('doctors.name', 'like', '%' . $request->name . '%');
        }
        $query->orderBy('doctors.name', 'asc');
        $doctors = $query->limit(10)->get()->map(function ($doctor) {
            return [
                'id' => $doctor->id,
                'text' => $doctor->name,
            ];
        });

        return response()->json([
            'results' => $doctors
        ]);
    }
}

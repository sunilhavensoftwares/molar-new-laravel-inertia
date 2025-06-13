<?php

namespace App\Http\Controllers;

use App\Http\Resources\PatientResource;
use App\Models\Patient;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Patient::query();
        $sort = $request->get('sort', 'patients.email');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'patients.id',
            'patients.name',
            'patients.phone',
            'patients.profile',
            'patients.is_visible'
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'patients.name';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        if ($request->filled('name')) {
            $query->where('patients.name', 'like', '%' . $request->name . '%');
        }
        if ($request->has('date_from') && $request->has('date_to')) {
            $date_from = \Carbon\Carbon::parse($request->date_from)->toDateTimeString();
            $date_to = \Carbon\Carbon::parse($request->date_to)->toDateTimeString();
            $query->whereBetween('created_at', [$date_from, $date_to]);
        }
        $query->orderBy($sort, $order);
        $patients = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        $currentDate = Date('Y-m-d');
        return Inertia::render(
            'Patients/Index',
            [
                'patients' => PatientResource::collection($patients),
                'query' => $request->all(),
                'routeUrl' => route('patients.index'),
                'currentDate' => $currentDate
            ]
        );
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
    public function show(Patient $patient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Patient $patient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
        //
    }
}

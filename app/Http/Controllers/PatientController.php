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
        if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
            $patientFilterKey = $request->patientFilterKey;
            $patientFilterValue = $request->patientFilterValue;
            $query->where($patientFilterKey, 'like', $patientFilterValue. '%');
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
        return Inertia::render('Patients/Detail',[
            'patient'=>$patient
        ]);
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
    public function documents(Patient $patient)
    {
        return Inertia::render('Patients/Documents',[
            'patient'=>$patient
        ]);
    }
    public function case_history(Patient $patient)
    {
        return Inertia::render('Patients/CaseHistory',[
            'patient'=>$patient
        ]);
    }
    public function prescription(Patient $patient)
    {
        return Inertia::render('Patients/Prescription',[
            'patient'=>$patient
        ]);
    }
    public function timeline(Patient $patient)
    {
        return Inertia::render('Patients/TimeLine',[
            'patient'=>$patient
        ]);
    }
    public function lab(Patient $patient)
    {
        return Inertia::render('Patients/Lab',[
            'patient'=>$patient
        ]);
    }
     public function payment_history(Patient $patient)
    {
        return Inertia::render('Patients/PaymentHistory',[
            'patient'=>$patient
        ]);
    }
}

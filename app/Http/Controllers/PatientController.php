<?php

namespace App\Http\Controllers;

use App\Http\Resources\MedicalHistoryResource;
use App\Http\Resources\PatientResource;
use App\Models\MedicalHistory;
use App\Models\Patient;
use Faker\Provider\Medical;
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
            $query->where($patientFilterKey, 'like', $patientFilterValue . '%');
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
        return Inertia::render('Patients/Detail', [
            'patient' => $patient
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
        return Inertia::render('Patients/Documents', [
            'patient' => $patient
        ]);
    }
    public function case_history(Patient $patient)
    {
        return Inertia::render('Patients/CaseHistory', [
            'patient' => $patient
        ]);
    }
    public function prescription(Patient $patient)
    {
        return Inertia::render('Patients/Prescription', [
            'patient' => $patient
        ]);
    }
    public function timeline(Patient $patient)
    {
        return Inertia::render('Patients/TimeLine', [
            'patient' => $patient
        ]);
    }
    public function lab(Patient $patient)
    {
        return Inertia::render('Patients/Lab', [
            'patient' => $patient
        ]);
    }
    public function payment_history(Patient $patient)
    {

        $options = [
            [
                'value' => 'تركيب زيركون - Zircon Crown',
                'label' => 'تركيب زيركون - Zircon Crown',
                'data' => [
                    'id' => 156,
                    'price' => 800,
                    'cat_name' => 'تركيب زيركون - Zircon Crown',
                ],
            ],
            [
                'value' => 'تركيبه EMAX - Emax Crown',
                'label' => 'تركيبه EMAX - Emax Crown',
                'data' => [
                    'id' => 157,
                    'price' => 900,
                    'cat_name' => 'تركيبه EMAX - Emax Crown',
                ],
            ],
            [
                'value' => 'كشف استشاري - Cons for Consultant',
                'label' => 'كشف استشاري - Cons for Consultant',
                'data' => [
                    'id' => 131,
                    'price' => 0,
                    'cat_name' => 'كشف استشاري - Cons for Consultant',
                ],
            ],
            [
                'value' => 'ابتسامة مؤقتة - snap on 2',
                'label' => 'ابتسامة مؤقتة - snap on 2',
                'data' => [
                    'id' => 231,
                    'price' => 1500,
                    'cat_name' => 'ابتسامة مؤقتة - snap on 2',
                ],
            ],
            [
                'value' => 'استدعاء - Call a Doctor',
                'label' => 'استدعاء - Call a Doctor',
                'data' => [
                    'id' => 132,
                    'price' => 0,
                    'cat_name' => 'استدعاء - Call a Doctor',
                ],
            ],
            [
                'value' => 'اشعة عادية  - PA & Bitewing X-Ray',
                'label' => 'اشعة عادية - PA & Bitewing X-Ray',
                'data' => [
                    'id' => 133,
                    'price' => 70,
                    'cat_name' => 'اشعة عادية  - PA & Bitewing X-Ray',
                ],
            ],
            [
                'value' => 'اشعة بانوراما -  Panoramic. X-Ray',
                'label' => 'اشعة بانوراما - Panoramic. X-Ray',
                'data' => [
                    'id' => 134,
                    'price' => 150,
                    'cat_name' => 'اشعة بانوراما -  Panoramic. X-Ray',
                ],
            ],
            [
                'value' => 'اشعة تقويم  - Cepha. X-Ray',
                'label' => 'اشعة تقويم - Cepha. X-Ray',
                'data' => [
                    'id' => 135,
                    'price' => 0,
                    'cat_name' => 'اشعة تقويم  - Cepha. X-Ray',
                ],
            ],
            [
                'value' => 'ابتسامة مؤقتة - snap on 1',
                'label' => 'ابتسامة مؤقتة - snap on 1',
                'data' => [
                    'id' => 230,
                    'price' => 900,
                    'cat_name' => 'ابتسامة مؤقتة - snap on 1',
                ],
            ],
            [
                'value' => 'تنظيف - Scaling',
                'label' => 'تنظيف - Scaling',
                'data' => [
                    'id' => 137,
                    'price' => 200,
                    'cat_name' => 'تنظيف - Scaling',
                ],
            ],
            [
                'value' => 'بنج غ ضاحك  - Nitrous Oxide Sedation',
                'label' => 'بنج غ ضاحك - Nitrous Oxide Sedation',
                'data' => [
                    'id' => 139,
                    'price' => 0,
                    'cat_name' => 'بنج غ ضاحك  - Nitrous Oxide Sedation',
                ],
            ],
            [
                'value' => 'حافظ مسافة  - Space. M. (Fixed)',
                'label' => 'حافظ مسافة - Space. M. (Fixed)',
                'data' => [
                    'id' => 140,
                    'price' => 500,
                    'cat_name' => 'حافظ مسافة  - Space. M. (Fixed)',
                ],
            ],
        ];
        return Inertia::render('Patients/PaymentHistory', [
            'patient' => $patient,
            'options' => $options
        ]);
    }
    public function temporary_patients(Request $request)
    {
        $query = Patient::query();
        $query->where('is_temporary', '1');
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
            $query->where($patientFilterKey, 'like', $patientFilterValue . '%');
        }
        $query->orderBy($sort, $order);
        $patients = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        $currentDate = Date('Y-m-d');
        return Inertia::render(
            'Patients/TemporaryPatients',
            [
                'patients' => PatientResource::collection($patients),
                'query' => $request->all(),
                'routeUrl' => route('patients.temporary_patients'),
                'currentDate' => $currentDate
            ]
        );
    }
    public function case_list(Request $request)
    {
        $query = MedicalHistory::with(['patient', 'doctor', 'medical_history_category']);
        $sort = $request->get('sort', 'medical_histories.date');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'medical_histories.id',
            'medical_histories.date',
            'doctors.name',
            'medical_histories.title',
            'medical_history_categories.name',
            'patients.name',

        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'medical_histories.date';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }
        if ($request->filled('name') || in_array($sort, ['doctors.name', 'patients.name', 'medical_history_categories.name'])) {
            $query->select('medical_histories.*')
            ->leftJoin('doctors', 'doctors.id', '=', 'medical_histories.doctor_id')
            ->leftJoin('patients', 'patients.id', '=', 'medical_histories.patient_id')
            ->leftJoin('medical_history_categories', 'medical_history_categories.id', '=', 'medical_histories.medical_history_category_id');
        }
        if ($request->filled('name')) {
            
            $query->where(function ($q) use ($request) {
                $q->where('medical_histories.title', 'like', '%' . $request->name . '%')
                    ->orWhere('doctors.name', 'like', '%' . $request->name . '%')
                    ->orWhere('patients.name', 'like', '%' . $request->name . '%')
                    ->orWhere('medical_history_categories.name', 'like', '%' . $request->name . '%');
            });
        }
        if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
            $patientFilterKey = $request->patientFilterKey;
            $patientFilterValue = $request->patientFilterValue;
            $query->where($patientFilterKey, 'like', $patientFilterValue . '%');
        }
        // Handle sorting
        if (in_array($sort, ['doctors.name', 'patients.name', 'medical_history_categories.name'])) {
            $query->orderByRaw("$sort $order");
        } else {
            $query->orderBy($sort, $order);
        }
        $medical_histories = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render('Patients/CaseList', [
            'medical_histories' => MedicalHistoryResource::collection($medical_histories),
            'query' => $request->all(),
            'routeUrl' => route('patients.case_list'),
        ]);
    }
    public function case_category()
    {
        return Inertia::render('Patients/CaseCategory', []);
    }
    public function tooth()
    {
        return Inertia::render('Patients/Tooth', []);
    }
    public function case_status()
    {
        return Inertia::render('Patients/CaseStatus', []);
    }
    public function case_refer()
    {
        return Inertia::render('Patients/CaseRefer', []);
    }
    public function case_material()
    {
        return Inertia::render('Patients/CaseMaterial', []);
    }
    public function pdocuments()
    {
        return Inertia::render('Patients/Pdocuments', []);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\singleFieldUpdateRequest;
use App\Http\Resources\CaseMaterialResource;
use App\Http\Resources\CaseReferHistory as ResourcesCaseReferHistory;
use App\Http\Resources\CaseReferHistoryResource;
use App\Http\Resources\MedicalHistoryCategoryResource;
use App\Http\Resources\MedicalHistoryResource;
use App\Http\Resources\MedicalHistoryStatusResource;
use App\Http\Resources\PatientDocumentResource;
use App\Http\Resources\PatientResource;
use App\Http\Resources\ToothResource;
use App\Http\Resources\UserResource;
use App\Models\CaseMaterial;
use App\Models\CaseReferHistory;
use App\Models\MedicalHistory;
use App\Models\MedicalHistoryCategory;
use App\Models\MedicalHistoryStatus;
use App\Models\Patient;
use App\Models\PatientDocument;
use App\Models\Tooth;
use App\Services\PaymentOptionsService;
use Faker\Provider\Medical;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
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
    public function show($patient)
    {
        $patient = Patient::select('id')->find($patient);
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
    public function documents($patient)
    {
        JsonResource::withoutWrapping();
        $patient = Patient::select('id', 'name', 'phone', 'email')->with(['documents' => function ($document) {
            $document->select('id', 'patient_id', 'date', 'document_path');
        }])->find($patient);
        
        return Inertia::render('Patients/Documents', [
            'patient' => new PatientResource($patient)
        ]);
    }
    public function case_history($patient, Request $request)
    {
        $patient = Patient::select('id')->find($patient);
        // Optimize eager loading to prevent N+1 queries
        $query = MedicalHistory::with([
            'patient:id,name,phone',
            'doctor:id,name,email', 
            'medical_history_category:id,name,slug',
            'medical_history_statuses:id,name,color_name',
            'teeth:id,name,code'
        ])->where('patient_id', $patient->id);
        $sort = $request->get('sort', 'medical_histories.date');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'medical_histories.id',
            'medical_histories.date',
            'doctors.name',
            'medical_history_categories.name',
            'patients.name',
            'medical_history_statuses.name'

        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'medical_histories.date';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }
        if ($request->filled('name') || in_array($sort, ['doctors.name', 'patients.name', 'medical_history_categories.name', 'medical_history_statuses.name'])) {
            $query->select('medical_histories.*')
                ->leftJoin('doctors', 'doctors.id', '=', 'medical_histories.doctor_id')
                ->leftJoin('patients', 'patients.id', '=', 'medical_histories.patient_id')
                ->leftJoin('medical_history_categories', 'medical_history_categories.id', '=', 'medical_histories.medical_history_category_id')
                ->leftJoin('medical_history_statuses', 'medical_history_statuses.id', '=', 'medical_histories.medical_history_status_id');
        }
        if ($request->filled('name')) {

            $query->where(function ($q) use ($request) {
                $q->Where('doctors.name', 'like', '%' . $request->name . '%')
                    ->orWhere('patients.name', 'like', '%' . $request->name . '%')
                    ->orWhere('medical_history_categories.name', 'like', '%' . $request->name . '%')
                    ->orWhere('medical_history_statuses.name', 'like', '%' . $request->name . '%');
            });
        }
        if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
            $patientFilterKey = $request->patientFilterKey;
            $patientFilterValue = $request->patientFilterValue;
            $query->where($patientFilterKey, 'like', $patientFilterValue . '%');
        }
        // Handle sorting
        if (in_array($sort, ['doctors.name', 'patients.name', 'medical_history_categories.name', 'medical_history_statuses.name'])) {
            $query->orderByRaw("$sort $order");
        } else {
            $query->orderBy($sort, $order);
        }
        $medical_histories = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render('Patients/CaseHistory', [
            'medical_histories' => MedicalHistoryResource::collection($medical_histories),
            'query' => $request->all(),
            'patient_detail' =>$patient
        ]);
    }
    public function prescription($patient)
    {
         $patient = Patient::select('id')->find($patient);
        return Inertia::render('Patients/Prescription', [
            'patient' => $patient
        ]);
    }
    public function timeline($patient)
    {
        $patient = Patient::select('id')->find($patient);
        return Inertia::render('Patients/TimeLine', [
            'patient' => $patient
        ]);
    }
    public function lab($patient)
    {
        $patient = Patient::select('id')->find($patient);
        return Inertia::render('Patients/Lab', [
            'patient' => $patient
        ]);
    }
    public function payment_history($patient)
    {
        $patient = Patient::select('id')->find($patient);
        // Use cached payment options service for better performance
        $options = PaymentOptionsService::getOptions();
        
        return Inertia::render('Patients/PaymentHistory', [
            'patient_detail' => $patient,
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
                'currentDate' => $currentDate
            ]
        );
    }
    public function case_list(Request $request)
    {
        // Optimize eager loading to prevent N+1 queries
        $query = MedicalHistory::with([
            'patient:id,name,phone',
            'doctor:id,name,email', 
            'medical_history_category:id,name,slug',
            'medical_history_statuses:id,name,color_name',
            'teeth:id,name,code'
        ]);
        $sort = $request->get('sort', 'medical_histories.date');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'medical_histories.id',
            'medical_histories.date',
            'doctors.name',
            'medical_history_categories.name',
            'patients.name',
            'medical_history_statuses.name'

        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'medical_histories.date';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }
        if ($request->filled('name') || in_array($sort, ['doctors.name', 'patients.name', 'medical_history_categories.name', 'medical_history_statuses.name'])) {
            $query->select('medical_histories.*')
                ->leftJoin('doctors', 'doctors.id', '=', 'medical_histories.doctor_id')
                ->leftJoin('patients', 'patients.id', '=', 'medical_histories.patient_id')
                ->leftJoin('medical_history_categories', 'medical_history_categories.id', '=', 'medical_histories.medical_history_category_id')
                ->leftJoin('medical_history_statuses', 'medical_history_statuses.id', '=', 'medical_histories.medical_history_status_id');
        }
        if ($request->filled('name')) {

            $query->where(function ($q) use ($request) {
                $q->Where('doctors.name', 'like', '%' . $request->name . '%')
                    ->orWhere('patients.name', 'like', '%' . $request->name . '%')
                    ->orWhere('medical_history_categories.name', 'like', '%' . $request->name . '%')
                    ->orWhere('medical_history_statuses.name', 'like', '%' . $request->name . '%');
            });
        }
        if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
            $patientFilterKey = $request->patientFilterKey;
            $patientFilterValue = $request->patientFilterValue;
            $query->where($patientFilterKey, 'like', $patientFilterValue . '%');
        }
        // Handle sorting
        if (in_array($sort, ['doctors.name', 'patients.name', 'medical_history_categories.name', 'medical_history_statuses.name'])) {
            $query->orderByRaw("$sort $order");
        } else {
            $query->orderBy($sort, $order);
        }
        $medical_histories = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render('Patients/CaseList', [
            'medical_histories' => MedicalHistoryResource::collection($medical_histories),
            'query' => $request->all(),
        ]);
    }
    public function case_category(Request $request)
    {
        $query = MedicalHistoryCategory::query();
        $sort = $request->get('sort', 'medical_history_categories.status');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'medical_history_categories.id',
            'medical_history_categories.name',
            'medical_history_categories.status',
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'medical_history_categories.status';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        if ($request->filled('name')) {
            $query->where('medical_history_categories.name', 'like', '%' . $request->name . '%')
                ->orWhere('medical_history_categories.status', 'like', $request->name . '%');
        }
        $query->orderBy($sort, $order);
        $medical_history_categories = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render('Patients/CaseCategory', [
            'medical_history_categories' => MedicalHistoryCategoryResource::collection($medical_history_categories),
            'query' => $request->all(),
        ]);
    }
    public function tooth(Request $request)
    {
        $query = Tooth::query();
        $sort = $request->get('sort', 'teeth.code');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'teeth.id',
            'teeth.code',
            'teeth.name',
            'teeth.image',
            'teeth.status',
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'teeth.code';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        if ($request->filled('name')) {
            $query->where('teeth.name', 'like', '%' . $request->name . '%')
                ->orWhere('teeth.code', 'like', $request->name . '%');
        }
        $query->orderBy($sort, $order);
        $teeth = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render('Patients/Tooth', [
            'teeth' => ToothResource::collection($teeth),
            'query' => $request->all(),
        ]);
    }
    public function case_status(Request $request)
    {
        $query = MedicalHistoryStatus::query();
        $sort = $request->get('sort', 'medical_history_statuses.name');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'medical_history_statuses.id',
            'medical_history_statuses.color_name',
            'medical_history_statuses.name',
            'medical_history_statuses.status',
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'medical_history_statuses.name';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        if ($request->filled('name')) {
            $query->where('medical_history_statuses.name', 'like', '%' . $request->name . '%')
                ->orWhere('medical_history_statuses.code', 'like', $request->name . '%');
        }
        // if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
        //     $patientFilterKey = $request->patientFilterKey;
        //     $patientFilterValue = $request->patientFilterValue;
        //     $query->where($patientFilterKey, 'like', $patientFilterValue . '%');
        // }
        $query->orderBy($sort, $order);
        $medical_history_statuses = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render('Patients/CaseStatus', [
            'medical_history_statuses' => MedicalHistoryStatusResource::collection($medical_history_statuses),
            'query' => $request->all(),
        ]);
    }
    public function update_status(MedicalHistoryStatus $MedicalHistoryStatus, singleFieldUpdateRequest $request)
    {
        $request->setField('status', ['required', 'in:true,false']);
        return updateSingleField($request, $MedicalHistoryStatus, $field = 'status', $field_display_name = 'Status');
    }
    public function case_refer(Request $request)
    {
        // Optimize eager loading to prevent N+1 queries
        $query = CaseReferHistory::with([
            'patient:id,name,phone',
            'medical_history:id,date',
            'from_doctor:id,name,email',
            'to_doctor:id,name,email',
            'referrer_user:id,name,email'
        ]);
        $sort = $request->get('sort', 'patients.name');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'case_refer_histories.id',
            'patients.name',
            'medical_histories.id',
            'dt_from.name',
            'dt_to.name',
            'users.name',
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'patients.name';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }
        if ($request->filled('name') || in_array($sort, ['dt_from.name', 'dt_to.name', 'patients.name', 'medical_history_statuses.name', 'medical_histories.date', 'users.name', 'medical_histories.id'])) {
            $query->select('case_refer_histories.*')
                ->leftJoin('doctors as dt_from', 'dt_from.id', '=', 'case_refer_histories.from_doctor_id')
                ->leftJoin('doctors as dt_to', 'dt_to.id', '=', 'case_refer_histories.to_doctor_id')
                ->leftJoin('patients', 'patients.id', '=', 'case_refer_histories.patient_id')
                ->leftJoin('medical_histories', 'case_refer_histories.medical_history_id', '=', 'medical_histories.id')
                ->leftJoin('users', 'case_refer_histories.referrer_user_id', '=', 'users.id');
        }
        if ($request->filled('name')) {

            $query->where(function ($q) use ($request) {
                $q->Where('dt_from.name', 'like', '%' . $request->name . '%')
                    ->orWhere('dt_to.name', 'like', '%' . $request->name . '%')
                    ->orWhere('patients.name', 'like', '%' . $request->name . '%')
                    ->orWhere('users.name', 'like', '%' . $request->name . '%');
            });
        }
        if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
            $patientFilterKey = $request->patientFilterKey;
            $patientFilterValue = $request->patientFilterValue;
            $query->where($patientFilterKey, 'like', $patientFilterValue . '%');
        }
        // Handle sorting
        if (in_array($sort, ['dt_from.name', 'dt_to.name', 'patients.name', 'medical_history_statuses.name', 'medical_histories.date', 'users.name'])) {
            $query->orderByRaw("$sort $order");
        } else {
            $query->orderBy($sort, $order);
        }
        $case_refer_histories = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render('Patients/CaseRefer', [
            'case_refer_histories' => CaseReferHistoryResource::collection($case_refer_histories),
            'query' => $request->all(),
        ]);
    }
    public function case_material(Request $request)
    {
        $query = CaseMaterial::query();
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'case_materials.id',
            'case_materials.name',
            'case_materials.stock',
            'case_materials.status'
        ];
        $sort = $request->get('sort', 'case_materials.stock');
        if (!in_array($sort, $allowedSorts)) {
            $sort = 'patients.name';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }
        if ($request->filled('name')) {

            $query->where(function ($q) use ($request) {
                $q->Where('case_materials.name', 'like', '%' . $request->name . '%');
            });
        }
        if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
            $patientFilterKey = $request->patientFilterKey;
            $patientFilterValue = $request->patientFilterValue;
            $query->where($patientFilterKey, 'like', $patientFilterValue . '%');
        }
        // Handle sorting
        $query->orderBy($sort, $order);
        $case_materials = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render('Patients/CaseMaterial', [
            'case_materials' => CaseMaterialResource::collection($case_materials),
            'query' => $request->all(),
        ]);
    }
    public function update_case_material_status(CaseMaterial $caseMaterial, Request $request)
    {
        return updateSingleField($request, $caseMaterial, $field = 'status', $field_display_name = 'Status');
    }
    public function pdocuments(Request $request)
    {
        $query = PatientDocument::with('patient');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'patient_documents.id',
            'patients.name',
            'patient_documents.date',
            'patient_documents.description',
            'patient_documents.status'
        ];
        $sort = $request->get('sort', 'patient_documents.stock');
        if (!in_array($sort, $allowedSorts)) {
            $sort = 'patient_documents.id';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }
        if ($request->filled('name') || in_array($sort, ['patients.name'])) {
            $query->select('patient_documents.*')
                ->leftJoin('patients', 'patients.id', '=', 'patient_documents.patient_id');
        }
        if ($request->filled('name')) {

            $query->where(function ($q) use ($request) {
                $q->Where('patients.name', 'like', '%' . $request->name . '%');
            });
        }

        if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
            $patientFilterKey = $request->patientFilterKey;
            $patientFilterValue = $request->patientFilterValue;
            $query->where($patientFilterKey, 'like', $patientFilterValue . '%');
        }
        // Handle sorting
        if (in_array($sort, ['patients.name'])) {
            $query->orderByRaw("$sort $order");
        } else {
            $query->orderBy($sort, $order);
        }
        $patient_documents = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));
        return Inertia::render('Patients/Pdocuments', [
            'patient_documents' => PatientDocumentResource::collection($patient_documents),
            'query' => $request->all(),
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\AppointmentResource;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AppointmentController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $query = Appointment::with(['doctor:id,name,email', 'patient:id,name,email']);

        $sort = $request->get('sort', DB::raw('concat(appointments.appointment_date, "", appointments.s_time)'));
        $order = strtolower($request->get('order', 'desc'));

        $allowedSorts = [
            'appointments.id',
            'appointments.date_time',
            'appointments.remarks',
            'appointments.status',
            'doctors.name',
            'patients.name',
            'medical_history_statuses.name'
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = DB::raw('concat(appointments.appointment_date, "", appointments.s_time)');
        }
        //dd($sort);
        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        // Filtering by name
        if ($request->filled('name')) {
            $query->where(function ($q) use ($request) {
                $q->whereHas('doctor', fn($q2) => $q2->where('name', 'like', '%' . $request->name . '%'))
                    ->orWhereHas('patient', fn($q2) => $q2->where('name', 'like', '%' . $request->name . '%'))
                    ->orWhere('appointments.remarks', 'like', '%' . $request->name . '%');
            });
        }

        // Filtering by doctor id
        if ($request->has('selectedFilterDoctorId')) {
            $query->where(function ($q4) use ($request) {
                $q4->whereHas('doctor', fn($q5) => $q5->where('id', $request->selectedFilterDoctorId));
            });
        }
        // Filtering by doctor id
        if ($request->has('selectedFilteredDate')) {
            $query->where('appointment_date', $request->selectedFilteredDate);
        }
        
        if ($request->has('status') && $request->has('status') && $request->status!=='all' && $request->status!=='') {
           $query->where('status', 'like', '%' .Appointment::getStatusKeyByValue($request->status). '%');
        }

        // Sorting
        if (in_array($sort, ['doctors.name', 'patients.name'])) {
            $query->leftJoin('doctors', 'doctors.id', '=', 'appointments.doctor_id')
                ->leftJoin('patients', 'patients.id', '=', 'appointments.patient_id')
                ->select('appointments.*')
                ->orderByRaw("$sort $order");
        } elseif ($sort == 'appointments.date_time') {
            $query->orderByRaw("concat(appointment_date, ' ', s_time) $order");
        } else {
            $query->orderBy($sort, $order);
        }

        $appointments = $query
            ->paginate($request->get('perPage', 10))
            ->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));

        return Inertia::render('Appointments/Index', [
            'appointments' => AppointmentResource::collection($appointments),
            'query' => $request->all(),
        ]);
    }

    public function today(Request $request) {
        $query = Appointment::query();
        $query->where('appointment_date', date('Y-m-d'));
        $sort = $request->get('sort', 'appointments.appointment_date');

        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'appointments.id',
            'appointments.date_time',
            'appointments.remarks',
            'appointments.status',
            'doctors.name',
            'patients.name',
            'medical_history_statuses.name'
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'appointments.appointment_date';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        // Filtering by name
        if ($request->filled('name')) {
            $query->where(function ($q) use ($request) {
                $q->whereHas('doctor', fn($q2) =>
                $q2->where('name', 'like', '%' . $request->name . '%'))
                    ->orWhereHas('patient', fn($q2) =>
                    $q2->where('name', 'like', '%' . $request->name . '%'))
                    ->orWhere('appointments.remarks', 'like', '%' . $request->name . '%');
            });
        }

        // Filtering by patient key
        if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
            $query->where($request->patientFilterKey, 'like', $request->patientFilterValue . '%');
        }

        // Sorting
        if (in_array($sort, ['doctors.name', 'patients.name'])) {
            $query->leftJoin('doctors', 'doctors.id', '=', 'appointments.doctor_id')
                ->leftJoin('patients', 'patients.id', '=', 'appointments.patient_id')
                ->select('appointments.*')
                ->orderByRaw("$sort $order");
        } elseif ($sort == 'appointments.date_time') {
            $query->orderByRaw("concat(appointment_date, ' ', s_time) $order");
        } else {
            $query->orderBy($sort, $order);
        }

        // Eager load
        $query->with(['patient', 'doctor']);

        $appointments = $query
            ->paginate($request->get('perPage', 10))
            ->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));

        return Inertia::render('Appointments/Today', [
            'appointments' => AppointmentResource::collection($appointments),
            'query' => $request->all(),
        ]);
    }
    public function upcoming(Request $request) {
        $query = Appointment::query();
        $query->where('appointment_date','>', date('Y-m-d'));
        $sort = $request->get('sort', 'appointments.appointment_date');

        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'appointments.id',
            'appointments.date_time',
            'appointments.remarks',
            'appointments.status',
            'doctors.name',
            'patients.name',
            'medical_history_statuses.name'
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'appointments.appointment_date';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        // Filtering by name
        if ($request->filled('name')) {
            $query->where(function ($q) use ($request) {
                $q->whereHas('doctor', fn($q2) =>
                $q2->where('name', 'like', '%' . $request->name . '%'))
                    ->orWhereHas('patient', fn($q2) =>
                    $q2->where('name', 'like', '%' . $request->name . '%'))
                    ->orWhere('appointments.remarks', 'like', '%' . $request->name . '%');
            });
        }

        // Filtering by patient key
        if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
            $query->where($request->patientFilterKey, 'like', $request->patientFilterValue . '%');
        }

        // Sorting
        if (in_array($sort, ['doctors.name', 'patients.name'])) {
            $query->leftJoin('doctors', 'doctors.id', '=', 'appointments.doctor_id')
                ->leftJoin('patients', 'patients.id', '=', 'appointments.patient_id')
                ->select('appointments.*')
                ->orderByRaw("$sort $order");
        } elseif ($sort == 'appointments.date_time') {
            $query->orderByRaw("concat(appointment_date, ' ', s_time) $order");
        } else {
            $query->orderBy($sort, $order);
        }

        // Eager load
        $query->with(['patient', 'doctor']);

        $appointments = $query
            ->paginate($request->get('perPage', 10))
            ->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));

        return Inertia::render('Appointments/Upcoming', [
            'appointments' => AppointmentResource::collection($appointments),
            'query' => $request->all(),
        ]);
    }
    public function calendar() {
        return Inertia::render('Appointments/Calendar');
    }
    public function request( Request $request) {
         $query = Appointment::query();
        $query->where('status','=', Appointment::getStatusKeyByValue('requested'));
        $sort = $request->get('sort', 'appointments.appointment_date');

        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'appointments.id',
            'appointments.date_time',
            'appointments.remarks',
            'appointments.status',
            'doctors.name',
            'patients.name',
            'medical_history_statuses.name'
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'appointments.appointment_date';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        // Filtering by name
        if ($request->filled('name')) {
            $query->where(function ($q) use ($request) {
                $q->whereHas('doctor', fn($q2) =>
                $q2->where('name', 'like', '%' . $request->name . '%'))
                    ->orWhereHas('patient', fn($q2) =>
                    $q2->where('name', 'like', '%' . $request->name . '%'))
                    ->orWhere('appointments.remarks', 'like', '%' . $request->name . '%');
            });
        }

        // Filtering by patient key
        if ($request->has('patientFilterValue') && $request->has('patientFilterKey')) {
            $query->where($request->patientFilterKey, 'like', $request->patientFilterValue . '%');
        }

        // Sorting
        if (in_array($sort, ['doctors.name', 'patients.name'])) {
            $query->leftJoin('doctors', 'doctors.id', '=', 'appointments.doctor_id')
                ->leftJoin('patients', 'patients.id', '=', 'appointments.patient_id')
                ->select('appointments.*')
                ->orderByRaw("$sort $order");
        } elseif ($sort == 'appointments.date_time') {
            $query->orderByRaw("concat(appointment_date, ' ', s_time) $order");
        } else {
            $query->orderBy($sort, $order);
        }

        // Eager load
        $query->with(['patient', 'doctor']);

        $appointments = $query
            ->paginate($request->get('perPage', 10))
            ->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));

        return Inertia::render('Appointments/Request', [
            'appointments' => AppointmentResource::collection($appointments),
            'query' => $request->all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        //
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
    public function show(Appointment $appointment) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appointment $appointment) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Appointment $appointment) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment) {
        //
    }
}

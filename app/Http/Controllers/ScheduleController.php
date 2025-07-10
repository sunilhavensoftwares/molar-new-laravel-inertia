<?php

namespace App\Http\Controllers;

use App\Http\Resources\HolidayResource;
use App\Http\Resources\ScheduleResource;
use App\Models\Holiday;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Schedule::query()->with('doctor');

        $sort = $request->get('sort', 'schedules.weekday');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'doctor.email',
            'schedules.weekday',
            'schedules.start_time',
            'schedules.end_time',
            'schedules.duration',
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'schedules.weekday';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        if ($request->filled('name')) {
            $query->whereHas('doctor', function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->name . '%');
                $q->orWhere('email', 'like', '%' . $request->name . '%');
            });
        }

        // Handle sorting

        if (in_array($sort, $allowedSorts)) {
            $query->orderBy($sort, $order);
        }

        $schedules = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));

        return Inertia::render(
            'Schedule/Index',
            [
                'schedules' => ScheduleResource::collection($schedules),
                'query' => $request->all(),
                'routeUrl' => route('schedules.index'),
            ]
        );
    }
    /**
     * Display a listing of the resource.
     */
    public function holidays(Request $request)
    {
        $query = Holiday::query()->with('doctor');

        $sort = $request->get('sort', 'holidays.date');
        $order = strtolower($request->get('order', 'asc'));

        $allowedSorts = [
            'holidays.id',
            'doctor.email',
            'holidays.date'
        ];

        if (!in_array($sort, $allowedSorts)) {
            $sort = 'holidays.date';
        }

        if (!in_array($order, ['asc', 'desc'])) {
            $order = 'asc';
        }

        if ($request->filled('name')) {
            $query->whereHas('doctor', function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->name . '%');
                $q->orWhere('email', 'like', '%' . $request->name . '%');
            });
        }

        // Handle sorting

        if (in_array($sort, $allowedSorts)) {
            $query->orderBy($sort, $order);
        }

        $holidays = $query->paginate($request->get('perPage', 10))->appends(array_filter($request->all(), fn($value) => $value !== null && $value !== ''));

        return Inertia::render(
            'Schedule/Holidays',
            [
                'holidays' => HolidayResource::collection($holidays),
                'query' => $request->all(),
                'routeUrl' => route('schedules.holidays'),
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
    public function show(Schedule $schedule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Schedule $schedule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Schedule $schedule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Schedule $schedule)
    {
        //
    }
}

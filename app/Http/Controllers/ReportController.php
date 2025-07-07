<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
public function financial_report(){
    return Inertia::render('Report/FinancialReport');
}
public function doctors_commission(){
    return Inertia::render('Report/DoctorsCommission');
}
public function user_activity_report(){
    return Inertia::render('Report/UserActivityReport');
}
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LabController extends Controller
{
    public function report(){
        return Inertia::render('Lab/Report');
    }
    public function report_templates(){
        return Inertia::render('Lab/ReportTemplates');
    }
}

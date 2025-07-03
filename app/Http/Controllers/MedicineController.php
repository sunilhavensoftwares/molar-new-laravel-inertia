<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MedicineController extends Controller
{
    //
    public function index(){
        return Inertia::render('Medicine/Index');
    }
    public function category(){
        return Inertia::render('Medicine/Category');
    }
}

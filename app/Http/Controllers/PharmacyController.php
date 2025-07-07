<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PharmacyController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Pharmacy/Dashboard');
    }
    public function sales()
    {
        return Inertia::render('Pharmacy/Sales');
    }
    public function expense()
    {
        return Inertia::render('Pharmacy/Expense');
    }
    public function expense_categories()
    {
        return Inertia::render('Pharmacy/ExpenseCategories');
    }
    public function pharmacy_report()
    {
        return Inertia::render('Pharmacy/PharmacyReport');
    }
}

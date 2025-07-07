<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EmailController extends Controller
{
    public function email_list()
    {
        return Inertia::render('Email/EmailList');
    }
}

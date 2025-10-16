<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index()
    {
        return Inertia::render('Notifications/Index');
    }
    public function alarm_messages()
    {
        return Inertia::render('Notifications/AlarmMessages');
    }
}

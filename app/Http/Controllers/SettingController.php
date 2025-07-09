<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
public function general(){
    return Inertia::render('Settings/General');  
}   
public function reminder(){
    return Inertia::render('Settings/Reminder');
}
public function password_backup_page(){
    return Inertia::render('Settings/PasswordBackupPage');
}
public function notification(){
    return Inertia::render('Settings/Notification');
}
public function email(){
    return Inertia::render('Settings/Email');
}
public function payment_gateways(){
    return Inertia::render('Settings/PaymentGateways');
}
}

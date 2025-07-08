<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SmsController extends Controller
{
    public function new_sms()
    {
        return Inertia::render('SMS/NewSms');
    }
    public function sms_settings()
    {
        return Inertia::render('SMS/SmsSettings');
    }
    public function whatsapp_settings()
    {
        return Inertia::render('SMS/WhatsappSettings');
    }
    public function sms_templates()
    {
        return Inertia::render('SMS/SmsTemplates');
    }
    public function whatsapp_reply()
    {
        return Inertia::render('SMS/WhatsappReply');
    }
}

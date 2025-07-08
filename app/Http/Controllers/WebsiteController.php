<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WebsiteController extends Controller
{
    public function slides()
    {
        return Inertia::render('Website/Slides');
    }
    public function services()
    {
        return Inertia::render('Website/Services');
    }
    public function featured_doctors()
    {
        return Inertia::render('Website/FeaturedDoctors');
    }
}

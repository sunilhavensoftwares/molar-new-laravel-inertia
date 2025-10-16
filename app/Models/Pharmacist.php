<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pharmacist extends Model
{
    use HasFactory;
     protected $fillable = [
        'name',
        'email',
        'address',
        'phone',
        'user_id',
        'password',
        'img_url'
    ];
}

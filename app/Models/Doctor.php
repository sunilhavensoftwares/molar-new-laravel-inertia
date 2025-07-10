<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;
    public function schedules(){
        return $this->hasMany(Schedule::class);
    }
    public function holidays(){
        return $this->hasMany(Holiday::class);
    }
    public function medical_history(){
        return $this->hasMany(MedicalHistory::class);
    }
    public function patients(){
        return $this->hasMany(Patient::class);
    }
}

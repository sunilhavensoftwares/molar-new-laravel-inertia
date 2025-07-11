<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseReferHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'medical_history_id',
        'from_doctor_id',
        'to_doctor_id',
        'referrer_user_id',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function medical_history()
    {
        return $this->belongsTo(MedicalHistory::class);
    }

    public function from_doctor()
    {
        return $this->belongsTo(Doctor::class, 'from_doctor_id');
    }

    public function to_doctor()
    {
        return $this->belongsTo(Doctor::class, 'to_doctor_id');
    }

    public function referrer_user()
    {
        return $this->belongsTo(User::class, 'referrer_user_id');
    }
    
}

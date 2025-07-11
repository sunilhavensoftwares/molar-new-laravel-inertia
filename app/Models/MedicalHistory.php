<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicalHistory extends Model
{
    use HasFactory, SoftDeletes;
    const STATUS = [
        1 => 'active',
        0 => 'inactive',
    ];
    public function getStatusNameAttribute()
    {
        return self::STATUS[$this->status] ?? null;
    }

    public function setStatusNameAttribute($value)
    {
        $index = array_search($value, self::STATUS);
        if ($index !== false) {
            $this->attributes['status'] = $index;
        }
    }
    public function medical_history_statuses(){
        return $this->hasOne(MedicalHistoryStatus::class, 'id', 'medical_history_status_id');
    }
    public function medical_history_category()
    {
        return $this->belongsTo(MedicalHistoryCategory::class);
    }
    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }
    public function teeth()
    {
        return $this->belongsToMany(Tooth::class, 'medical_history_tooth');
    }
}

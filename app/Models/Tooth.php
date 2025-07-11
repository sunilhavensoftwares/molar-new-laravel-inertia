<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tooth extends Model
{
    use HasFactory;
    const STATUS = [
        0 => 'inactive',
        1 => 'active'
    ];

    
     public function getStatusNameAttribute() {
        return self::STATUS[$this->status] ?? null;
    }

    public function setStatusNameAttribute($value) {
        $index = array_search($value, self::STATUS);
        if ($index !== false) {
            $this->attributes['status'] = $index;
        }
    }
    public function medicalHistories()
    {
        return $this->belongsToMany(MedicalHistory::class, 'medical_history_tooth');
    }
}

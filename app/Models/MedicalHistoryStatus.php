<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalHistoryStatus extends Model
{
    use HasFactory;
    const STATUS = [
        0 => 'active',
        1 => 'inactive',
    ];
    public function getStatusNameAttribute()
    {
       return self::STATUS[$this->status] ?? null;
    }
    public function medical_history()
    {
        return $this->belongsTo(MedicalHistory::class, 'id', 'medical_history_status_id');
    }
}

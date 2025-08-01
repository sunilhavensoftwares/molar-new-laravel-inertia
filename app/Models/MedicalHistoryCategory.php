<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicalHistoryCategory extends Model
{
    use HasFactory, SoftDeletes;
    const STATUS = [
        1 => 'active',
        0 => 'inactive',
    ];
    public function medical_history()
    {
        return $this->hasMany(MedicalHistory::class);
    }

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
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicalHistoryCategory extends Model
{
    use HasFactory,SoftDeletes;
    public function medical_history(){
        return $this->hasMany(MedicalHistory::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    protected $casts = [
    'aslot_type' => 'integer',
    ];
    const STATUS = [
        '0'=>'pending', 
        '1'=>'confirmed', 
        '2'=>'cancelled', 
        '3'=>'treated', 
        '4'=>'requested'
    ];
    const WALK_IN =[
        '0'=>'no', 
        '1'=>'yes'
    ];
    const ASLOT_TYPE =[
        '0'=>'old_slots_type', 
        '1'=>'new_slots_type'
    ];
    const ALERT_TYPE =[
        '0'=>'other', 
        '1'=>'arrived', 
        '2'=>'attended'
    ];
    public static function getStatusKeyByValue($value): ?string
    {
        return array_flip(self::STATUS)[$value] ?? null;
    }
    public function getAlertTypeAttribute() {
        return self::ALERT_TYPE[$this->alert_type_int] ?? null;
    }

    public function setAlertTypeAttribute($value) {
        $index = array_search($value, self::ALERT_TYPE);
        if ($index !== false) {
            $this->attributes['alert_type_int'] = $index;
        }
    }
    public function getAslotTypeLabelAttribute()
    {
        return self::ASLOT_TYPE[$this->aslot_type] ?? null;
    }

    public function setAslotTypeAttribute($value) {
        $index = array_search($value, self::ASLOT_TYPE);
        if ($index !== false) {
            $this->attributes['aslot_type'] = $index;
        }
    }
     public function getWalkingAttribute() {
        return self::WALK_IN[$this->is_walk_in] ?? null;
    }

    public function setWalkingAttribute($value) {
        $index = array_search($value, self::WALK_IN);
        if ($index !== false) {
            $this->attributes['is_walk_in'] = $index;
        }
    }
     public function getStatusNameAttribute() {
        return self::STATUS[$this->status] ?? null;
    }

    public function setStatusNameAttribute($value) {
        $index = array_search($value, self::STATUS);
        if ($index !== false) {
            $this->attributes['status'] = $index;
        }
    }
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}

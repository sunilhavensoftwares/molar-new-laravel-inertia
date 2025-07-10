<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Schedule extends Model
{
    use HasFactory,SoftDeletes;
    const STATUS = [
        1 => 'active',
        0 => 'inactive',

    ] ;
    const WEEKDAYS = [
        0 => 'Monday',
        1 => 'Tuesday',
        2 => 'Wednesday',
        3 => 'Thursday',
        4 => 'Friday',
        5 => 'Saturday',
        6 => 'Sunday',
    ];
     public function getWeekdayNameAttribute() {
        return self::WEEKDAYS[$this->weekday] ?? null;
    }

    public function setWeekdayNameAttribute($value) {
        $index = array_search($value, self::WEEKDAYS);
        if ($index !== false) {
            $this->attributes['weekday'] = $index;
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
    public function doctor(){
        return $this->belongsTo(Doctor::class);
    }
}

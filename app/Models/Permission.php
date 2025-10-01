<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Permission extends Model
{
    use HasFactory;
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
     protected $fillable = ['name', 'label', 'module_id'];

    public function module()
    {
        return $this->belongsTo(Module::class);
    }
    public function setLabelAttribute($value)
    {
        $this->attributes['label'] = ucfirst($value);
    }
     public function setNameAttribute($value)
    {
        $this->attributes['name'] = Str::slug(strtolower($value),'_');
    }
}

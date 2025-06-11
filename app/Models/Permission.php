<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}

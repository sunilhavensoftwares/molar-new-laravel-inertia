<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermissionRole extends Model
{
    use HasFactory;
    protected $table = 'permission_role';
    public function roles()
    {
        return $this->belongsTo(Role::class);
    }
    public function permissions()
    {
        return $this->belongsTo(Role::class);
    }
}

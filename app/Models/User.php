<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    public function getCreatedAtFormattedAttribute()
    {
        return Carbon::parse($this->created_at)->format('d M Y, H:i A');
    }
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
    public function scopeHasRole($query, $role)
    {
        return $query->whereHas('roles', function ($q) use ($role) {
            $q->where('name', $role);
        });
    }
    public function hasRole($role)
    {
        // Use whereHas to avoid loading all roles into memory
        return $this->roles()->where('name', $role)->exists();
    }

    /**
     * Override toArray to prevent unnecessary serialization of relationships
     */
    public function toArray()
    {
        $array = parent::toArray();
        
        // Remove heavy relationships from serialization unless explicitly loaded
        if (!$this->relationLoaded('roles')) {
            unset($array['roles']);
        }
        
        return $array;
    }
}

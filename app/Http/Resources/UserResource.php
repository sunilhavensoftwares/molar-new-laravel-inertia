<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'    => $this->id,
            'name'  => $this->name,
            'email' => $this->email,
            'avatar_url' =>$this->avatar_url,
            'last_login' =>$this->last_login,
            'two_step_enabled' =>$this->two_step_enabled,
            'encrypt_detail_enabled' =>$this->encrypt_detail_enabled,
            'active' =>$this->active,

            // Relationship: roles
            'roles' => RoleResource::collection($this->whenLoaded('roles')),
        ];
    }
}

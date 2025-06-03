<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return [
            'id'   => $this->id,
            'name' => $this->name,
            'users_count'  => $this->users_count,
            'users' => RoleResource::collection($this->whenLoaded('users')),
        ];
    }
}

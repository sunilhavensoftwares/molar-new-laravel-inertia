<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CaseReferHistoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'patient' => $this->whenLoaded('patient', function ($patient) {
                return [
                    'name' => $patient->name,
                ];
            }),
            'medical_history' => $this->whenLoaded('medical_history', function ($medical_history) {
                return [
                    'id' => $medical_history->id,
                ];
            }),
            'from_doctor' => $this->whenLoaded('from_doctor', function ($from_doctor) {
                return [
                    'name' => $from_doctor->name,
                ];
            }),
            'to_doctor' => $this->whenLoaded('to_doctor', function ($to_doctor) {
                return [
                    'name' => $to_doctor->name,
                ];
            }),
            'referrer_user' => $this->whenLoaded('referrer_user', function ($referrer_user) {
                return [
                    'name' => $referrer_user->name,
                ];
            }),
        ];
    }
}

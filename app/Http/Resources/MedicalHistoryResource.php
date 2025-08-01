<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MedicalHistoryResource extends JsonResource
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
            'title' => $this->title,
            'description' => $this->description,
            'status_formatted' => $this->getStatusNameAttribute(),
            'status' => $this->status,
            'date_formatted' => Carbon::createFromFormat('Y-m-d', $this->date)->format('d M Y'),
            'patient' => $this->whenLoaded('patient', function ($patient) {
                return [
                    'id' => $patient->id,
                    'phone' => $patient->phone,
                    'name' => $patient->name,

                ];
            }),
            'doctor' => $this->whenLoaded('doctor', function ($doctor) {
                return [
                    'id' => $doctor->id,
                    'email' => $doctor->email,
                    'name' => $doctor->name,

                ];
            }),
            'category' => $this->whenLoaded('medical_history_category', function ($medical_history_category) {
                return [
                    'id' => $medical_history_category->id,
                    'name' => $medical_history_category->name,
                    'slug' => $medical_history_category->slug,

                ];
            }),
            'teeth' => $this->whenLoaded('teeth', function ($teeth) {
                return $teeth->map(function ($tooth) {
                    return [
                        'id' => $tooth->id,
                        'name' => $tooth->name,
                        'code' => $tooth->code, // or $tooth->code if slug doesn't exist
                    ];
                });
            }),
            'medical_history_statuses' => $this->whenLoaded('medical_history_statuses', function ($medical_history_statuses) {
                return [
                    'id' => $medical_history_statuses->id,
                    'name' => $medical_history_statuses->name,
                    'color_name' => $medical_history_statuses->color_name,
                ];
            }),
        ];
    }
}

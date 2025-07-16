<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppointmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return array_merge(
                    parent::toArray($request),
                    [
                        'status_formatted' => $this->getStatusNameAttribute(),
                        'appointment_date_formatted' => Carbon::createFromFormat('Y-m-d', $this->appointment_date)->format('d M Y'),
                        's_time_formatted' => Carbon::createFromFormat('H:i:s', $this->s_time)->format('h:i A'),
                        'e_time_formatted' => Carbon::createFromFormat('H:i:s', $this->e_time)->format('h:i A'),
                        'patient' => $this->whenLoaded('patient', function ($patient) {
                            return [
                                'id' => $patient->id,
                                'name' => $patient->name,
                                'email' => $patient->email,
                            ];
                            }),
                            'doctor' => $this->whenLoaded('doctor', function ($doctor) {
                                return [
                                    'id' => $doctor->id,
                                    'name' => $doctor->name,
                                    'email' => $doctor->email,
                                ];
                            }),
                    ]
                );
    }
}

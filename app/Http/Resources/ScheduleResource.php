<?php

namespace App\Http\Resources;

use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ScheduleResource extends JsonResource
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
            // Assuming `doctor` is a relation, we load a DoctorResource or basic array
            'doctor' => $this->whenLoaded('doctor', function () {
                return [
                    'id' => $this->doctor->id,
                    'name' => $this->doctor->name,
                    'email' => $this->doctor->email,
                    'img_url' => $this->doctor->img_url,
                ];
            }),
            'weekday' => $this->weekday, // or use ->getWeekdayNameAttribute() if accessor is set
            'weekday_name' => $this->getWeekdayNameAttribute(), //the name separately
            's_time' => $this->s_time,
            's_time_formatted' => Carbon::createFromFormat('H:i:s', $this->s_time)->format('h:i A'),
            'e_time_formatted' => Carbon::createFromFormat('H:i:s', $this->e_time)->format('h:i A'),
            'e_time' => $this->e_time,
            's_time_key' => $this->s_time_key,
            'duration' => $this->duration,
            'status' => $this->status,
            'status' => $this->getStatusNameAttribute(),
            'aslot_type' => $this->aslot_type,
            'appointment_interval' => $this->appointment_interval,
            'appt_max_dur' => $this->appt_max_dur,
        ];
    }
}

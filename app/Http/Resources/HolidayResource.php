<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HolidayResource extends JsonResource
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
            'date'=>$this->date,
            'date_formatted' => Carbon::createFromFormat('Y-m-d',$this->date)->format('d M Y')
        ];
    }
}

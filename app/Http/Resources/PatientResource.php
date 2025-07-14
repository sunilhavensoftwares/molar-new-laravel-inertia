<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    
    public function toArray(Request $request): array
    {
        return array_merge(parent::toArray($request),[
                'documents' => $this->whenLoaded('documents', function ($documents) {
                    return $documents->map(function ($document) {
                        $document->date_formatted = Carbon::createFromFormat('Y-m-d', $document->date)->format('d M Y');
                        return $document;
                    });
                }),
                
            ]
        );
    }
}

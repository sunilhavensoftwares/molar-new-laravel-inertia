<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class singleFieldUpdateRequest extends FormRequest
{
    protected string $field;
    protected array $rules = [];
    /**
     * Determine if the user is authorized to make this request.
     */
    public function setField(string $field, array $rules): void
    {
        $this->field = $field;
        $this->rules = [$field => $rules];
    }
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return $this->rules;
    }
}

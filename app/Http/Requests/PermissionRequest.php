<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class PermissionRequest extends FormRequest {
    public $response;
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            'module_id'   => 'required',
            'permission_name'  => 'required|max:255',
            'permission_label' => 'required|max:255',
        ];
    }
    protected function failedValidation(Validator $validator) {
        throw new HttpResponseException(response()->json([
            'status' => 422,
            'errors' => $validator->errors(),
        ], 200));
    }
    public function messages(): array
{
    return [
        'module_id.required'        => 'Please select a module name.',
    ];
}
}

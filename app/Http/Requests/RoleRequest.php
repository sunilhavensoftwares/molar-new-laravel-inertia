<?php

namespace App\Http\Requests;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest {
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
            'role_name' => 'required|string|max:255',
            'permissions' => 'required|min:1',
        ];
    }
    public function messages(): array {
        return [
            'role_name.required' => 'Please enter a role name.',
            'permissions.required' => 'Please select at least one permission.',
        ];
    }
    protected function failedValidation(Validator $validator) {
        throw new HttpResponseException(response()->json([
            'status' => 422,
            'message' => 'Please check validation errors',
            'errors' => $validator->errors(),
        ], 200));
    }
}

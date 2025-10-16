<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class HumanResourceFormRequest extends FormRequest {
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
    public function rules(FormRequest $request): array {
        $table = $this->route('human_resource') . 's'; // e.g., "facilitators" or "clients"
        $id = $this->id ?? null; // Assuming you send 'id' in the payload
        $rules = [
            'name' => 'required|string|max:255',
            'email' => "sometimes|required|email|unique:$table,email",
            'password' => 'required|string|min:6',
            'address' => 'required|string',
            'phone' => 'required|string',
            'avatar' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
        ];
        if($id) {
            unset($rules['password']);
            unset($rules['email']);
            $rules['email'] = "sometimes|required|email|unique:$table,email,$id";
            $rules['password'] = 'nullable|string|min:6';
        }
        return $rules;
    }
    protected function failedValidation(Validator $validator) {
        throw new HttpResponseException(response()->json([
            'status' => 422,
            'errors' => $validator->errors(),
        ], 200));
    }
}

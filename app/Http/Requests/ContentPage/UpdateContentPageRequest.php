<?php
namespace App\Http\Requests\ContentPage;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateContentPageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
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
        return [
            'title'     => ['required', 'max:255'],
            'image'     => ['nullable', 'image'],
            'contents'   => ['required'],
            'position'  => ['integer'],
            'seo_title'   => ['required'],
            'seo_keywords'   => ['required'],
            'seo_desscription'   => ['required'],
            'status' => ['required', Rule::in(['0', '1'])]
        ];
    }
}
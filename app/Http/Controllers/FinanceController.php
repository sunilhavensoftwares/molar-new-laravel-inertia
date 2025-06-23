<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FinanceController extends Controller
{
    public function payment()
    {
        $options = [
            [
                'value' => 'تركيب زيركون - Zircon Crown',
                'label' => 'تركيب زيركون - Zircon Crown',
                'data' => [
                    'id' => 156,
                    'price' => 800,
                    'cat_name' => 'تركيب زيركون - Zircon Crown',
                ],
            ],
            [
                'value' => 'تركيبه EMAX - Emax Crown',
                'label' => 'تركيبه EMAX - Emax Crown',
                'data' => [
                    'id' => 157,
                    'price' => 900,
                    'cat_name' => 'تركيبه EMAX - Emax Crown',
                ],
            ],
            [
                'value' => 'كشف استشاري - Cons for Consultant',
                'label' => 'كشف استشاري - Cons for Consultant',
                'data' => [
                    'id' => 131,
                    'price' => 0,
                    'cat_name' => 'كشف استشاري - Cons for Consultant',
                ],
            ],
            [
                'value' => 'ابتسامة مؤقتة - snap on 2',
                'label' => 'ابتسامة مؤقتة - snap on 2',
                'data' => [
                    'id' => 231,
                    'price' => 1500,
                    'cat_name' => 'ابتسامة مؤقتة - snap on 2',
                ],
            ],
            [
                'value' => 'استدعاء - Call a Doctor',
                'label' => 'استدعاء - Call a Doctor',
                'data' => [
                    'id' => 132,
                    'price' => 0,
                    'cat_name' => 'استدعاء - Call a Doctor',
                ],
            ],
            [
                'value' => 'اشعة عادية  - PA & Bitewing X-Ray',
                'label' => 'اشعة عادية - PA & Bitewing X-Ray',
                'data' => [
                    'id' => 133,
                    'price' => 70,
                    'cat_name' => 'اشعة عادية  - PA & Bitewing X-Ray',
                ],
            ],
            [
                'value' => 'اشعة بانوراما -  Panoramic. X-Ray',
                'label' => 'اشعة بانوراما - Panoramic. X-Ray',
                'data' => [
                    'id' => 134,
                    'price' => 150,
                    'cat_name' => 'اشعة بانوراما -  Panoramic. X-Ray',
                ],
            ],
            [
                'value' => 'اشعة تقويم  - Cepha. X-Ray',
                'label' => 'اشعة تقويم - Cepha. X-Ray',
                'data' => [
                    'id' => 135,
                    'price' => 0,
                    'cat_name' => 'اشعة تقويم  - Cepha. X-Ray',
                ],
            ],
            [
                'value' => 'ابتسامة مؤقتة - snap on 1',
                'label' => 'ابتسامة مؤقتة - snap on 1',
                'data' => [
                    'id' => 230,
                    'price' => 900,
                    'cat_name' => 'ابتسامة مؤقتة - snap on 1',
                ],
            ],
            [
                'value' => 'تنظيف - Scaling',
                'label' => 'تنظيف - Scaling',
                'data' => [
                    'id' => 137,
                    'price' => 200,
                    'cat_name' => 'تنظيف - Scaling',
                ],
            ],
            [
                'value' => 'بنج غ ضاحك  - Nitrous Oxide Sedation',
                'label' => 'بنج غ ضاحك - Nitrous Oxide Sedation',
                'data' => [
                    'id' => 139,
                    'price' => 0,
                    'cat_name' => 'بنج غ ضاحك  - Nitrous Oxide Sedation',
                ],
            ],
            [
                'value' => 'حافظ مسافة  - Space. M. (Fixed)',
                'label' => 'حافظ مسافة - Space. M. (Fixed)',
                'data' => [
                    'id' => 140,
                    'price' => 500,
                    'cat_name' => 'حافظ مسافة  - Space. M. (Fixed)',
                ],
            ],
        ];
        return Inertia::render('Finance/Payment',[
            'options'=>$options
        ]);
    }

    public function payment_category()
    {
        return Inertia::render('Finance/PaymentCategory');
    }

    public function expense()
    {
        return Inertia::render('Finance/Expense');
    }

    public function expense_category()
    {
        return Inertia::render('Finance/ExpenseCategory');
    }

    public function diagnostic_type()
    {
        return Inertia::render('Finance/DiagnosticType');
    }
}

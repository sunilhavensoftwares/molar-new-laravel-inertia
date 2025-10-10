<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\FinanceController;
use App\Http\Controllers\HumanResourceController;
use App\Http\Controllers\LabController;
use App\Http\Controllers\MedicineController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\PrescriptionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PharmacyController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SmsController;
use App\Http\Controllers\WebsiteController;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/upload-permissions', function () {
//     $permissions = DB::connection('mysql2')->table('permissions')->get();
//     $permissions =     $permissions->map(function ($permission) {
//         return [
//             'name' => $permission->perm_name,
//             'label' => ucfirst(str_replace('_', ' ', $permission->perm_name)),
//             'module_id' => 1,
//         ];
//     })->toArray();
//     DB::table('permissions')->delete();
//     Permission::insert($permissions);
//     echo 'Permissions uploaded';
// });
// Public routes
Route::get('/', [AuthenticatedSessionController::class, 'create'])->name('home');

// Authenticated routes
Route::middleware('auth')->group(function () {
    
    // Profile Routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit')
        ->middleware(['permission:update_profile', 'permission:sbar_profile']); // Route: 129, Sidebar: 270
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update')
        ->middleware(['permission:update_profile', 'permission:sbar_profile']); // Route: 129, Sidebar: 270
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy')
        ->middleware(['permission:delete_users', 'permission:sbar_profile']); // Route: 133, Sidebar: 270

    // Dashboard Module
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard')
        ->middleware('permission:sbar_dashboard'); // ID: 200

    // User Management Module
    Route::get('/users', [UserController::class, 'index'])->name('users.index')
        ->middleware(['permission:view_users', 'permission:sbar_usrs_view']); // Route: 130, Sidebar: 201
    Route::get('/users/user-detail/{id}', [UserController::class, 'show'])->name('users.show')
        ->middleware(['permission:view_users', 'permission:sbar_usrs_view']); // Route: 130, Sidebar: 201

    // Roles Management
    Route::get('/roles', [RoleController::class, 'index'])->name('roles.index')
        ->middleware(['permission:read_roles', 'permission:sbar_groups_view']); // Route: 1, Sidebar: 203
    Route::get('/roles/role-detail/{id}', [RoleController::class, 'show'])->name('roles.show')
        ->middleware(['permission:read_roles', 'permission:sbar_groups_view']); // Route: 1, Sidebar: 203
    Route::get('/roles/edit-role/{role}', [RoleController::class, 'edit'])->name('roles.edit')
        ->middleware(['permission:update_roles', 'permission:sbar_groups_view']); // Route: 3, Sidebar: 203
    Route::patch('/roles/update-role/{role}', [RoleController::class, 'update'])->name('roles.update')
        ->middleware(['permission:update_roles', 'permission:sbar_groups_view']); // Route: 3, Sidebar: 203
    Route::get('/roles/add-role', [RoleController::class, 'create'])->name('roles.create')
        ->middleware(['permission:add_roles', 'permission:sbar_groups_view']); // Route: 2, Sidebar: 203

    // Permissions Management (Admin only)
    Route::get('/permissions', [PermissionController::class, 'index'])->name('permissions.index')
        ->middleware('is_admin');
    Route::get('/permissions/edit-permission/{permission}', [PermissionController::class, 'edit'])->name('permissions.edit')
        ->middleware('is_admin');
    Route::post('/permissions/add-permission', [PermissionController::class, 'store'])->name('permissions.store')
        ->middleware('is_admin');
    Route::post('/permissions/update-permission/{permission}', [PermissionController::class, 'update'])->name('permissions.update')
        ->middleware('is_admin');
    Route::delete('/permissions/delete-permission/{permission}', [PermissionController::class, 'destroy'])->name('permissions.destroy')
        ->middleware('is_admin');

    // Doctors Module
    Route::get('/doctors', [DoctorController::class, 'index'])->name('doctors.index')
        ->middleware(['permission:read_doctor', 'permission:sbar_doctors_list']); // Route: 5, Sidebar: 204
    Route::get('/doctors/search', [DoctorController::class, 'search'])->name('doctors.search')
        ->middleware(['permission:read_doctor', 'permission:sbar_doctors_list']); // Route: 5, Sidebar: 204
    Route::post('/doctors/{doctor}/visibility', [DoctorController::class, 'updateVisibility'])->name('doctor.updateVisibility')
        ->middleware(['permission:doctor_visibility_appointment', 'permission:sbar_doctors_list']); // Route: 183, Sidebar: 204
    Route::get('/doctors/doctor-detail/{doctor}', [DoctorController::class, 'show'])->name('doctors.show')
        ->middleware(['permission:read_doctor', 'permission:sbar_doctors_list']); // Route: 5, Sidebar: 204
    Route::get('/doctors/treatment-history', [DoctorController::class, 'treatment_history'])->name('doctors.treatment_history')
        ->middleware(['permission:view_treatment_history', 'permission:sbar_doctors_trtmnt_hstry']); // Route: 14, Sidebar: 205

    // Patients Module
    Route::get('/patients', [PatientController::class, 'index'])->name('patients.index')
        ->middleware(['permission:read_patients', 'permission:sbar_ptnt_list']); // Route: 15, Sidebar: 206
    Route::get('/patients/patient-detail/{patient}', [PatientController::class, 'show'])->name('patients.show')
        ->middleware(['permission:read_patients', 'permission:sbar_ptnt_list']); // Route: 15, Sidebar: 206
    Route::get('/patients/patient-detail/{patient}/documents', [PatientController::class, 'documents'])->name('patients.documents')
        ->middleware(['permission:read_paitent_doc', 'permission:sbar_ptnt_documents']); // Route: 25, Sidebar: 199
    Route::get('/patients/patient-detail/{patient}/case-history', [PatientController::class, 'case_history'])->name('patients.case_history')
        ->middleware(['permission:read_case', 'permission:sbar_ptnt_case_manager']); // Route: 21, Sidebar: 198
    Route::get('/patients/patient-detail/{patient}/prescription', [PatientController::class, 'prescription'])->name('patients.prescription')
        ->middleware(['permission:mh_prescription', 'permission:sbar_ptnt_list']); // Route: 192, Sidebar: 206
    Route::get('/patients/patient-detail/{patient}/timeline', [PatientController::class, 'timeline'])->name('patients.timeline')
        ->middleware(['permission:mh_timeline', 'permission:sbar_ptnt_list']); // Route: 195, Sidebar: 206
    Route::get('/patients/patient-detail/{patient}/lab', [PatientController::class, 'lab'])->name('patients.lab')
        ->middleware(['permission:mh_lab', 'permission:sbar_ptnt_list']); // Route: 193, Sidebar: 206
    Route::get('/patients/patient-detail/{patient}/payment-history', [PatientController::class, 'payment_history'])->name('patients.payment_history')
        ->middleware(['permission:mh_payment_history', 'permission:sbar_ptnt_payments']); // Route: 196, Sidebar: 197

    // Additional Patient Routes
    Route::get('/patients/temporary-patients', [PatientController::class, 'temporary_patients'])->name('patients.temporary_patients')
        ->middleware(['permission:register_patient_temporary', 'permission:sbar_ptnt_list']); // Route: 171, Sidebar: 206
    Route::get('/patients/case-list', [PatientController::class, 'case_list'])->name('patients.case_list')
        ->middleware(['permission:read_case', 'permission:sbar_ptnt_case_manager']); // Route: 21, Sidebar: 198
    Route::get('/patients/case-category', [PatientController::class, 'case_category'])->name('patients.case_category')
        ->middleware(['permission:read_case', 'permission:sbar_ptnt_case_manager']); // Route: 21, Sidebar: 198
    Route::get('/patients/tooth', [PatientController::class, 'tooth'])->name('patients.tooth')
        ->middleware(['permission:read_patients', 'permission:sbar_ptnt_list']); // Route: 15, Sidebar: 206
    Route::get('/patients/case-status', [PatientController::class, 'case_status'])->name('patients.case_status')
        ->middleware(['permission:read_case', 'permission:sbar_ptnt_case_manager']); // Route: 21, Sidebar: 198
    Route::post('/patients/case_status/{medical_history_status}/update-status', [PatientController::class, 'update_status'])->name('patients.case_status.update_status')
        ->middleware(['permission:update_case', 'permission:sbar_ptnt_case_manager']); // Route: 23, Sidebar: 198
    Route::get('/patients/case-refer', [PatientController::class, 'case_refer'])->name('patients.case_refer')
        ->middleware(['permission:read_case', 'permission:sbar_ptnt_case_manager']); // Route: 21, Sidebar: 198
    Route::get('/patients/case-material', [PatientController::class, 'case_material'])->name('patients.case_material')
        ->middleware(['permission:read_case', 'permission:sbar_ptnt_case_manager']); // Route: 21, Sidebar: 198
    Route::post('/patients/case_material/{case_material}/update-status', [PatientController::class, 'update_case_material_status'])->name('patients.case_material.update_case_material_status')
        ->middleware(['permission:update_case', 'permission:sbar_ptnt_case_manager']); // Route: 23, Sidebar: 198
    Route::get('/patients/pdocuments', [PatientController::class, 'pdocuments'])->name('patients.pdocuments')
        ->middleware(['permission:read_paitent_doc', 'permission:sbar_ptnt_documents']); // Route: 25, Sidebar: 199
    Route::get('/patients/tags', [PatientController::class, 'tags'])->name('patients.tags')
        ->middleware(['permission:patient_note_tags', 'permission:sbar_ptnt_tags']); // Route: 187, Sidebar: 207

    // Schedules
    Route::get('/schedules/holidays', [ScheduleController::class, 'holidays'])->name('schedules.holidays')
        ->middleware(['permission:view_doctor_holidays', 'permission:sbar_schedule_holidays']); // Route: 10, Sidebar: 209
    Route::resource('/schedules', ScheduleController::class)->except(['holidays'])
        ->middleware(['permission:read_time_schedual', 'permission:sbar_schedule_list']); // Route: 29, Sidebar: 208

    // Appointments
    Route::prefix('/appointments')->name('appointments.')->group(function () {
        Route::get('today', [AppointmentController::class, 'today'])->name('today')
            ->middleware(['permission:appointment_today', 'permission:sbar_apntmnt_todays']); // Route: 147, Sidebar: 212
        Route::get('upcoming', [AppointmentController::class, 'upcoming'])->name('upcoming')
            ->middleware(['permission:appointment_upcoming', 'permission:sbar_apntmnt_upcoming']); // Route: 148, Sidebar: 213
        Route::get('calendar', [AppointmentController::class, 'calendar'])->name('calendar')
            ->middleware(['permission:appointment_calender', 'permission:sbar_apntmnt_calendar']); // Route: 36, Sidebar: 214
        Route::get('request', [AppointmentController::class, 'request'])->name('request')
            ->middleware(['permission:appointment_requests', 'permission:sbar_apntmnt_request']); // Route: 37, Sidebar: 215

        Route::resource('/', AppointmentController::class)->except([
            'today', 'upcoming', 'calendar', 'request'
        ])->middleware(['permission:read_appointments', 'permission:sbar_apntmnt_all']); // Route: 32, Sidebar: 210
    });

    // Human Resources
    Route::prefix('/human-resources')->name('human_resources.')->group(function () {
        Route::get('nurse', [HumanResourceController::class, 'handleRole'])->name('nurse')
            ->middleware(['permission:read_nurse', 'permission:sbar_hr_nurse']); // Route: 39, Sidebar: 216
        Route::get('pharmacist', [HumanResourceController::class, 'handleRole'])->name('pharmacist')
            ->middleware(['permission:read_pharmacist', 'permission:sbar_hr_pharmacist']); // Route: 43, Sidebar: 217
        Route::get('laboratorist', [HumanResourceController::class, 'handleRole'])->name('laboratorist')
            ->middleware(['permission:read_laboratorist', 'permission:sbar_hr_laboratorist']); // Route: 47, Sidebar: 218
        Route::get('accountant', [HumanResourceController::class, 'handleRole'])->name('accountant')
            ->middleware(['permission:read_accountant', 'permission:sbar_hr_accountant']); // Route: 51, Sidebar: 219
        Route::get('receptionist', [HumanResourceController::class, 'handleRole'])->name('receptionist')
            ->middleware(['permission:read_receptionist', 'permission:sbar_hr_receptionist']); // Route: 55, Sidebar: 220
    });

    // Finance
    Route::prefix('/finance')->name('finance.')->group(function () {
        Route::get('payment', [FinanceController::class, 'payment'])->name('payment')
            ->middleware(['permission:read_payments', 'permission:sbar_fa_payments']); // Route: 59, Sidebar: 221
        Route::get('add-payment', [FinanceController::class, 'add_payment'])->name('add_payment')
            ->middleware(['permission:add_payments', 'permission:sbar_fa_add_payment']); // Route: 60, Sidebar: 222
        Route::get('payment-category', [FinanceController::class, 'payment_category'])->name('payment_category')
            ->middleware(['permission:read_Payment_Procedures', 'permission:sbar_fa_payment_procedures']); // Route: 63, Sidebar: 223
        Route::get('expense', [FinanceController::class, 'expense'])->name('expense')
            ->middleware(['permission:read_expenses', 'permission:sbar_fa_expense']); // Route: 67, Sidebar: 225
        Route::get('add-expense', [FinanceController::class, 'add_expense'])->name('add_expense')
            ->middleware(['permission:add_expenses', 'permission:sbar_fa_add_expense']); // Route: 68, Sidebar: 226
        Route::get('expense-category', [FinanceController::class, 'expense_category'])->name('expense_category')
            ->middleware(['permission:read_expenses_category', 'permission:sbar_fa_expense_categories']); // Route: 71, Sidebar: 227
        Route::get('diagnostic-type', [FinanceController::class, 'diagnostic_type'])->name('diagnostic_type')
            ->middleware(['permission:view_diagonstic_type', 'permission:sbar_fa_diag_types']); // Route: 181, Sidebar: 224
    });

    // Prescription
    Route::resource('prescription', PrescriptionController::class)
        ->middleware(['permission:read_Prescription', 'permission:sbar_prescription']); // Route: 76, Sidebar: 228

    // Lab
    Route::prefix('/lab')->name('lab.')->group(function () {
        Route::get('/report', [LabController::class, 'report'])->name('report')
            ->middleware(['permission:read_lap_tests', 'permission:sbar_lab_reports_list']); // Route: 80, Sidebar: 229
        Route::get('/add-report', [LabController::class, 'add_report'])->name('add_report')
            ->middleware(['permission:add_lap_tests', 'permission:sbar_lab_reports_add']); // Route: 81, Sidebar: 230
        Route::get('/report-templates', [LabController::class, 'report_templates'])->name('report_templates')
            ->middleware(['permission:read_Lab_Report_Template', 'permission:sbar_lab_reports_tmplt']); // Route: 84, Sidebar: 231
    });

    // Medicine
    Route::prefix('/medicine')->name('medicine.')->group(function () {
        Route::get('/', [MedicineController::class, 'index'])->name('listing')
            ->middleware(['permission:read_medicine', 'permission:sbar_medicine_list']); // Route: 88, Sidebar: 232
        Route::get('/add', [MedicineController::class, 'add'])->name('add')
            ->middleware(['permission:add_medicine', 'permission:sbar_medicine_add']); // Route: 89, Sidebar: 233
        Route::get('/category', [MedicineController::class, 'category'])->name('category')
            ->middleware(['permission:read_medicine_category', 'permission:sbar_medicine_category']); // Route: 92, Sidebar: 234
        Route::get('/category/add', [MedicineController::class, 'add_category'])->name('add_category')
            ->middleware(['permission:add_medicine_category', 'permission:sbar_medicine_category_add']); // Route: 93, Sidebar: 235
        Route::get('/stock-alert', [MedicineController::class, 'stock_alert'])->name('stock_alert')
            ->middleware(['permission:read_medicine_stock_alert', 'permission:sbar_medicine_stock_alert']); // Route: 96, Sidebar: 236
    });

    // Pharmacy
    Route::prefix('/pharmacy')->name('pharmacy.')->group(function () {
        Route::get('/dashboard', [PharmacyController::class, 'dashboard'])->name('dashboard')
            ->middleware(['permission:pharmacy_dashboard', 'permission:sbar_pharma_dashboard']); // Route: 98, Sidebar: 237
        Route::get('/sales', [PharmacyController::class, 'sales'])->name('sales')
            ->middleware(['permission:read_pharmacy_sales', 'permission:sbar_pharma_sales']); // Route: 99, Sidebar: 238
        Route::get('/sales/add', [PharmacyController::class, 'add_sales'])->name('add_sales')
            ->middleware(['permission:add_pharmacy_sales', 'permission:sbar_pharma_sales_add']); // Route: 100, Sidebar: 239
        Route::get('/expense', [PharmacyController::class, 'expense'])->name('expense')
            ->middleware(['permission:read_pharmacy_expenses', 'permission:sbar_pharma_expense']); // Route: 103, Sidebar: 240
        Route::get('/expense/add', [PharmacyController::class, 'add_expense'])->name('add_expense')
            ->middleware(['permission:add_pharmacy_expenses', 'permission:sbar_pharma_expense_add']); // Route: 104, Sidebar: 241
        Route::get('/expense-categories', [PharmacyController::class, 'expense_categories'])->name('expense_categories')
            ->middleware(['permission:read_pharmacy_expense_category', 'permission:sbar_pharma_expense_categories']); // Route: 107, Sidebar: 242
        Route::get('/pharmacy-report', [PharmacyController::class, 'pharmacy_report'])->name('pharmacy_report')
            ->middleware(['permission:read_pharmacy_report', 'permission:sbar_pharma_report']); // Route: 111, Sidebar: 243
    });

    // Reports
    Route::prefix('/reports')->name('reports.')->group(function () {
        Route::get('/financial-report', [ReportController::class, 'financial_report'])->name('financial_report')
            ->middleware(['permission:read_financial_reports', 'permission:sbar_rprt_Financial_report']); // Route: 113, Sidebar: 244
        Route::get('/user-activity-report', [ReportController::class, 'user_activity_report'])->name('user_activity_report')
            ->middleware(['permission:read_user_activity_reports', 'permission:sbar_rprt_usr_actvty_report']); // Route: 114, Sidebar: 245
        Route::get('/doctors-commission', [ReportController::class, 'doctors_commission'])->name('doctors_commission')
            ->middleware(['permission:read_doctor_commission_reports', 'permission:sbar_rprt_doc_comm']); // Route: 115, Sidebar: 246
        Route::get('/new-patient-report', [ReportController::class, 'new_patient_report'])->name('new_patient_report')
            ->middleware(['permission:new_patient_count', 'permission:sbar_rprt_new_patient']); // Route: 149, Sidebar: 247
    });

    // Email
    Route::prefix('/email')->name('email.')->group(function () {
        Route::get('/new-email', [EmailController::class, 'new_email'])->name('new_email')
            ->middleware(['permission:add_email', 'permission:sbar_email_new']); // Route: 117, Sidebar: 248
        Route::get('/email-list', [EmailController::class, 'email_list'])->name('email_list')
            ->middleware(['permission:read_email', 'permission:sbar_email_sent']); // Route: 116, Sidebar: 249
        Route::get('/email-settings', [EmailController::class, 'email_settings'])->name('email_settings')
            ->middleware(['permission:email_settings', 'permission:sbar_email_settings']); // Route: 119, Sidebar: 250
    });

    // SMS
    Route::prefix('/sms')->name('sms.')->group(function () {
        Route::get('new-sms', [SmsController::class, 'new_sms'])->name('new_sms')
            ->middleware(['permission:add_sms', 'permission:sbar_sms_write']); // Route: 121, Sidebar: 251
        Route::get('sent-sms', [SmsController::class, 'sent_sms'])->name('sent_sms')
            ->middleware(['permission:read_sms', 'permission:sbar_sms_sent']); // Route: 120, Sidebar: 252
        Route::get('sms-settings', [SmsController::class, 'sms_settings'])->name('sms_settings')
            ->middleware(['permission:sms_settings', 'permission:sbar_sms_settings']); // Route: 123, Sidebar: 253
        Route::get('whatsapp-settings', [SmsController::class, 'whatsapp_settings'])->name('whatsapp_settings')
            ->middleware(['permission:sms_settings', 'permission:sbar_sms_settings']); // Route: 123, Sidebar: 253
        Route::get('sms-templates', [SmsController::class, 'sms_templates'])->name('sms_templates')
            ->middleware(['permission:sms_settings', 'permission:sbar_sms_templates']); // Route: 123, Sidebar: 254
        Route::get('auto-feedback', [SmsController::class, 'auto_feedback'])->name('auto_feedback')
            ->middleware(['permission:read_auto_feedback', 'permission:sbar_sms_auto_feedback']); // Route: 154, Sidebar: 255
        Route::get('sent-code', [SmsController::class, 'sent_code'])->name('sent_code')
            ->middleware(['permission:send_code_sms', 'permission:sbar_sms_sent_code']); // Route: 158, Sidebar: 256
        Route::get('whatsapp-reply', [SmsController::class, 'whatsapp_reply'])->name('whatsapp_reply')
            ->middleware(['permission:whatsapp_reply', 'permission:sbar_sms_wtsap_reply']); // Route: 165, Sidebar: 257
    });

    // Website
    Route::prefix('/website')->name('website.')->group(function () {
        Route::get('visit-website', [WebsiteController::class, 'visit'])->name('visit')
            ->middleware(['permission:sbar_wbst_visit']); // Sidebar: 258
        Route::get('website-settings', [WebsiteController::class, 'settings'])->name('settings')
            ->middleware(['permission:sbar_wbst_settings']); // Sidebar: 259
        Route::get('slides', [WebsiteController::class, 'slides'])->name('slides')
            ->middleware(['permission:sbar_wbst_slides']); // Sidebar: 260
        Route::get('services', [WebsiteController::class, 'services'])->name('services')
            ->middleware(['permission:sbar_wbst_service']); // Sidebar: 261
        Route::get('featured-doctors', [WebsiteController::class, 'featured_doctors'])->name('featured_doctors')
            ->middleware(['permission:sbar_wbst_feat_doc']); // Sidebar: 262
    });

    // Settings
    Route::prefix('/settings')->name('settings.')->group(function () {
        Route::get('system-settings', [SettingController::class, 'system_settings'])->name('system_settings')
            ->middleware(['permission:read_system_settings', 'permission:sbar_stngs_system']); // Route: 125, Sidebar: 263
        Route::get('payment-gateways', [SettingController::class, 'payment_gateways'])->name('payment_gateways')
            ->middleware(['permission:read_payment_gateway', 'permission:sbar_stngs_pay_gways']); // Route: 126, Sidebar: 264
        Route::get('language', [SettingController::class, 'language'])->name('language')
            ->middleware(['permission:read_language', 'permission:sbar_stngs_lang']); // Route: 127, Sidebar: 265
        Route::get('reminder', [SettingController::class, 'reminder'])->name('reminder')
            ->middleware(['permission:sbar_stngs_reminder']); // Sidebar: 266
        Route::get('backup-database', [SettingController::class, 'backup_database'])->name('backup_database')
            ->middleware(['permission:read_backup_db', 'permission:sbar_stngs_backup_db']); // Route: 128, Sidebar: 267
        Route::get('password-backup-page', [SettingController::class, 'password_backup_page'])->name('password_backup_page')
            ->middleware(['permission:read_backup_db', 'permission:sbar_stngs_pass_protect']); // Route: 128, Sidebar: 268
        Route::get('2fa-settings', [SettingController::class, 'twofa_settings'])->name('twofa_settings')
            ->middleware(['permission:read_2fa_settings', 'permission:sbar_2fa_settings']); // Route: 141, Sidebar: 269
        Route::get('notification', [SettingController::class, 'notification'])->name('notification')
            ->middleware(['permission:notification_settings', 'permission:sbar_notif_settings']); // Route: 276, Sidebar: 272
        Route::get('email', [SettingController::class, 'email'])->name('email')
            ->middleware(['permission:email_settings', 'permission:sbar_email_settings']); // Route: 119, Sidebar: 250
    });

    // Additional Routes for Sidebar Navigation
    Route::prefix('/monitor')->name('monitor.')->group(function () {
        Route::get('/activities', [UserController::class, 'activities'])->name('activities')
            ->middleware(['permission:read_user_activity_reports', 'permission:sbar_monitor_activities']); // Route: 114, Sidebar: 271
    });

    Route::prefix('/notifications')->name('notifications.')->group(function () {
        Route::get('/', [NotificationController::class, 'index'])->name('index')
            ->middleware(['permission:view_notifications', 'permission:sbar_notif_view']); // Route: 277, Sidebar: 273
        Route::get('/alarm-messages', [NotificationController::class, 'alarm_messages'])->name('alarm_messages')
            ->middleware(['permission:view_alarm_message', 'permission:sbar_notif_alarm_msgs']); // Route: 143, Sidebar: 274
    });
});

require __DIR__ . '/auth.php';

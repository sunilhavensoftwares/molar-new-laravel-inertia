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
use App\Http\Controllers\PatientController;
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

Route::get('/', [AuthenticatedSessionController::class, 'create'])->name('login');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    //dashboard modules
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    //user Management modules
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/user-detail/{id}', [UserController::class, 'show'])->name('users.show');

    Route::get('/roles', [RoleController::class, 'index'])->name('roles.index');
    Route::get('/roles/role-detail/{id}', [RoleController::class, 'show'])->name('roles.show');
    Route::get('/roles/edit-role/{role}', [RoleController::class, 'edit'])->name('roles.edit');
    Route::get('/roles/add-role', [RoleController::class, 'create'])->name('roles.create');
    //Doctors modules
    Route::get('/doctors', [DoctorController::class, 'index'])->name('doctors.index');
    Route::post('/doctors/{doctor}/visibility', [DoctorController::class, 'updateVisibility'])->name('doctor.updateVisibility');
    Route::get('/doctors/doctor-detail/{doctor}', [DoctorController::class, 'show'])->name('doctors.show');
    //Patients modules
    Route::get('/patients', [PatientController::class, 'index'])->name('patients.index');
    Route::get('/patients/patient-detail/{patient}', [PatientController::class, 'show'])->name('patients.show');
    Route::get('/patients/patient-detail/{patient}/documents', [PatientController::class, 'documents'])->name('patients.documents');
    Route::get('/patients/patient-detail/{patient}/case-history', [PatientController::class, 'case_history'])->name('patients.case_history');
    Route::get('/patients/patient-detail/{patient}/prescription', [PatientController::class, 'prescription'])->name('patients.prescription');
    Route::get('/patients/patient-detail/{patient}/timeline', [PatientController::class, 'timeline'])->name('patients.timeline');
    Route::get('/patients/patient-detail/{patient}/lab', [PatientController::class, 'lab'])->name('patients.lab');
    Route::get('/patients/patient-detail/{patient}/payment-history', [PatientController::class, 'payment_history'])->name('patients.payment_history');
    Route::get('/patients/temporary-patients', [PatientController::class, 'temporary_patients'])->name('patients.temporary_patients');
    Route::get('/patients/case-list', [PatientController::class, 'case_list'])->name('patients.case_list');
    Route::get('/patients/case-category', [PatientController::class, 'case_category'])->name('patients.case_category');
    Route::get('/patients/tooth', [PatientController::class, 'tooth'])->name('patients.tooth');
    Route::get('/patients/case-status', [PatientController::class, 'case_status'])->name('patients.case_status');
    Route::get('/patients/case-refer', [PatientController::class, 'case_refer'])->name('patients.case_refer');
    Route::get('/patients/case-material', [PatientController::class, 'case_material'])->name('patients.case_material');
    Route::get('/patients/pdocuments', [PatientController::class, 'pdocuments'])->name('patients.pdocuments');
    //schedules
    Route::get('/schedules/holidays', [ScheduleController::class, 'holidays'])->name('schedules.holidays');
    Route::resource('/schedules', ScheduleController::class)->except(['holidays']);
    //appointments
    Route::prefix('/appointments')->name('appointments.')->group(function () {

        Route::get('today', [AppointmentController::class, 'today'])->name('today');
        Route::get('upcoming', [AppointmentController::class, 'upcoming'])->name('upcoming');
        Route::get('calendar', [AppointmentController::class, 'calendar'])->name('calendar');
        Route::get('request', [AppointmentController::class, 'request'])->name('request');

        Route::resource('/', AppointmentController::class)->except([
            'today',
            'upcoming',
            'calendar',
            'request'
        ]);
    });
    //human resource
    Route::prefix('/human-resources')->name('human_resources.')->group(function () {
        Route::get('{human_resource}', [HumanResourceController::class, 'handleRole'])
            ->where('human_resource', 'nurse|pharmacist|laboratorist|accountant|receptionist')
            ->name('role');
    });
    //finance
    Route::prefix('/finance')->name('finance.')->group(function () {
        Route::get('payment', [FinanceController::class, 'payment'])->name('payment');
        Route::get('payment-category', [FinanceController::class, 'payment_category'])->name('payment_category');
        Route::get('expense', [FinanceController::class, 'expense'])->name('expense');
        Route::get('expense-category', [FinanceController::class, 'expense_category'])->name('expense_category');
        Route::get('diagnostic-type', [FinanceController::class, 'diagnostic_type'])->name('diagnostic_type');
    });
    //prescription
    Route::resource('prescription', PrescriptionController::class);
    //lab
    Route::prefix('/lab')->name('lab.')->group(function () {
        Route::get('/report', [LabController::class, 'report'])->name('report');
        Route::get('/report-templates', [LabController::class, 'report_templates'])->name('report_templates');
    });
    //medicine
    Route::prefix('/medicine')->name('medicine.')->group(function () {
        Route::get('/', [MedicineController::class, 'index'])->name('listing');
        Route::get('/category', [MedicineController::class, 'category'])->name('category');
    });
    //pharmacy
    Route::prefix('/pharmacy')->name('pharmacy.')->group(function () {
        Route::get('/dashboard', [PharmacyController::class, 'dashboard'])->name('dashboard');
        Route::get('/sales', [PharmacyController::class, 'sales'])->name('sales');
        Route::get('/expense', [PharmacyController::class, 'expense'])->name('expense');
        Route::get('/expense-categories', [PharmacyController::class, 'expense_categories'])->name('expense_categories');
        Route::get('/pharmacy-report', [PharmacyController::class, 'pharmacy_report'])->name('pharmacy_report');
    });
    //reports
    Route::prefix('/reports')->name('reports.')->group(function () {
        Route::get('/financial-report', [ReportController::class, 'financial_report'])->name('financial_report');
        Route::get('/doctors-commission', [ReportController::class, 'doctors_commission'])->name('doctors_commission');
        Route::get('/user-activity-report', [ReportController::class, 'user_activity_report'])->name('user_activity_report');
    });
    //email
    Route::prefix('/email')->name('email.')->group(function () {
        Route::get('/email-list', [EmailController::class, 'email_list'])->name('email_list');
    });
    //sms
    Route::prefix('/sms')->name('sms.')->group(function () {
        Route::get('new-sms', [SmsController::class, 'new_sms'])->name('new_sms');
        Route::get('sms-settings', [SmsController::class, 'sms_settings'])->name('sms_settings');
        Route::get('whatsapp-settings', [SmsController::class, 'whatsapp_settings'])->name('whatsapp_settings');
        Route::get('sms-templates', [SmsController::class, 'sms_templates'])->name('sms_templates');
        Route::get('whatsapp-reply', [SmsController::class, 'whatsapp_reply'])->name('whatsapp_reply');
    });
     //website
    Route::prefix('/website')->name('website.')->group(function () {
        Route::get('slides', [WebsiteController::class, 'slides'])->name('slides');
        Route::get('services', [WebsiteController::class, 'services'])->name('services');
        Route::get('featured-doctors', [WebsiteController::class, 'featured_doctors'])->name('featured_doctors');
    });
    //settings
    Route::prefix('/settings')->name('settings.')->group(function () {
        Route::get('general', [SettingController::class, 'general'])->name('general');
        Route::get('reminder', [SettingController::class, 'reminder'])->name('reminder');
        Route::get('password-backup-page', [SettingController::class, 'password_backup_page'])->name('password_backup_page');
        Route::get('notification', [SettingController::class, 'notification'])->name('notification');
        Route::get('email', [SettingController::class, 'email'])->name('email');
        Route::get('payment-gateways', [SettingController::class, 'payment_gateways'])->name('payment_gateways');
        
    });
});

require __DIR__ . '/auth.php';

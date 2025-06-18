<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
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
    
});

require __DIR__ . '/auth.php';

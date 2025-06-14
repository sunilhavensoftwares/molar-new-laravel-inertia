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

});

require __DIR__ . '/auth.php';

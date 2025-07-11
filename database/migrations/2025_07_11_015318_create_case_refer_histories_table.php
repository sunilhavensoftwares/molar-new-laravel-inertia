<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('case_refer_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained()->onDelete('cascade');
            $table->foreignId('medical_history_id')->constrained()->onDelete('cascade');
            $table->foreignId('from_doctor_id')->constrained('doctors')->onDelete('cascade');
            $table->foreignId('to_doctor_id')->constrained('doctors')->onDelete('cascade');
            $table->foreignId('referrer_user_id')->constrained('users')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('case_refer_histories');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained()->onDelete('cascade');
            $table->foreignId('doctor_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->date('appointment_date');
            $table->boolean('is_walk_in')->nullable()->default(0)->comment('0=no, 1=yes');
            $table->time('s_time')->nullable()->default(0);
            $table->integer('computed_s_time',)->default('0');
            $table->time('e_time')->nullable()->default(0);;
            $table->string('remarks', 1000)->nullable()->default('NULL');
            $table->date('add_date');
            $table->unsignedBigInteger('registration_time');
            $table->integer('s_time_key')->nullable()->default('0');
            $table->tinyInteger('status')->default(0)->comment('0=unconfirmed, 1=confirmed, 2=cancelled, 3=treated, 4=requested, 5=pending');
            $table->string('request', 100)->nullable()->default('NULL');
            $table->tinyInteger('aslot_type')->default('0')->comment('0=old_slots_type, 1=new_slots_type');
            $table->integer('ap_year')->nullable()->default(0);
            $table->tinyInteger('ap_month')->nullable()->default(0);
            $table->tinyInteger('ap_day')->nullable()->default(0);
            $table->tinyInteger('alert_type_int')->nullable()->default(0)->comment('0=other, 1=arrived, 2=attended');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Schema::dropIfExists('appointments');
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};

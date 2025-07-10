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
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->constrained()->onDelete('cascade');

            $table->tinyInteger('weekday')->comment('0=Sunday, 6=Saturday');

            $table->time('s_time'); // start time
            $table->time('e_time'); // end time

            $table->tinyInteger('s_time_key'); // if this maps to a predefined time slot
            $table->tinyInteger('duration')->comment('Slot duration in minutes');

            $table->tinyInteger('status')->default(1)->comment('0=inactive, 1=active');
            $table->tinyInteger('aslot_type')->default(0)->comment('0=old_slots_type, 1=new_slots_type');
            $table->tinyInteger('appointment_interval')->default(5)->comment('Step in minutes between slots');
            $table->tinyInteger('appt_max_dur')->default(1)->comment('Max duration of appointment per patient');

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
        Schema::dropIfExists('schedules');
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};

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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('nID', 191);
            $table->string('img_url', 100)->nullable()->default('NULL');
            $table->string('name', 100)->nullable()->default('NULL');
            $table->string('email', 1000)->nullable()->default('NULL');
            $table->string('address', 100)->nullable()->default('NULL');
            $table->string('phone', 100)->nullable()->default('NULL');
            $table->string('sex', 100)->nullable()->default('NULL');
            $table->string('birthdate', 100)->nullable()->default('NULL');
            $table->string('age', 100)->nullable()->default('NULL');
            $table->string('bloodgroup', 100)->nullable()->default('NULL');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->boolean('status')->default(1)->comment('0=>inactive,1=>active');
            $table->boolean('is_visible')->default('1');
            $table->boolean('is_temporary')->default('1')->comment('0=>not temp,1=>temp');
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
          Schema::dropIfExists('patients');
          DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
};

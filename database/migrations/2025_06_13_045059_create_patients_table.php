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
            $table->string('user_id', 100)->nullable()->default('NULL');
            $table->enum('status', ['active', 'deleted', 'soft_deleted'])->default('active');
            $table->boolean('is_visible')->default('1');
            $table->boolean('is_temporary')->default('2');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};

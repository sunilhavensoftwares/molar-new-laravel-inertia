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
        Schema::create('teeth', function (Blueprint $table) {
            $table->id();
            $table->integer('code')->nullable();
            $table->string('name',50)->nullable();
            $table->string('image',50)->nullable();
            $table->boolean('status')->default(0)->comment('0=>inactive,1=>active');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teeth');
    }
};

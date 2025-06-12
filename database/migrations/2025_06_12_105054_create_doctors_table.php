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
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('img_url')->nullable();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('department')->nullable();
            $table->string('profile')->nullable();
            $table->boolean('is_visible');
            $table->decimal('min_discount')->nullable();
            $table->decimal('max_discount')->nullable();
            $table->string('x')->nullable();
            $table->string('y')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->enum('status',['soft_deleted','active','deleted']);
            $table->unique('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};

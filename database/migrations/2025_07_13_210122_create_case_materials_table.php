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
        Schema::create('case_materials', function (Blueprint $table) {
            $table->id();
            $table->string('name',50)->nullable();
            $table->integer('stock')->default(0);
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
        Schema::dropIfExists('case_materials');
    }
};

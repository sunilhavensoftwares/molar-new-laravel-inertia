<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('accountants', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('img_url');
            $table->string('email');
            $table->string('address');
            $table->string('phone');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->boolean('status')->comment('0=>inactive,1=>active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Schema::dropIfExists('user_id');
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        Schema::dropIfExists('accountants');
    }
};

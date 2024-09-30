<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('nobel_prize', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('scientist_id');
            $table->string('year');
            $table->string('description')->nullable();
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('category');
            $table->foreign('scientist_id')->references('id')->on('scientists');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nobel_prize');
    }
};

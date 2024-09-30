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
        Schema::create('achievements', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('descriptipn')->nullable();
            $table->string('publication_date')->nullable();
            $table->unsignedBigInteger('scientist_id');
            $table->unsignedBigInteger('sub_type_id');
            $table->timestamps();

            $table->foreign('scientist_id')->references('id')->on('scientists');
            $table->foreign('sub_type_id')->references('id')->on('sub_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('achievements');
    }
};

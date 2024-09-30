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
        Schema::create('scientists', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('birth_place')->nullable();
            $table->string('nationality');
            $table->date('date_of_birth');
            $table->date('date_of_death')->nullable();
            $table->string('image')->nullable();
            $table->string('biography')->nullable();
            $table->string('quote')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scientists');
    }
};

<?php

use App\Http\Controllers\AchievementController;
use App\Http\Controllers\ScientistColtroller;
use App\Http\Controllers\NobelPrizeController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//view achievement
Route::get('api/achievement', [AchievementController::class, 'index']);
//view nobel_prize
Route::get('api/nobel_prize', [NobelPrizeController::class, 'index']);
//view category
Route::get('api/category', [CategoryController::class, 'index']);

//Scientist
//view
Route::get('api/scientists', [ScientistColtroller::class, 'index']);
//details
Route::get('api/scientists/details/{id}', [ScientistColtroller::class, 'details']);
//delete
Route::post('api/scientists/delete/{id}', [ScientistColtroller::class, 'delete']);
//add
Route::post('api/scientists/create', [ScientistColtroller::class, 'store']);
//update
Route::post('api/scientists/update/{id}', [ScientistColtroller::class, 'update']);
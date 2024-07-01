<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('books', BookController::class);
});
Route::post('/books', [BookController::class, 'store'])->middleware('auth:sanctum');
Route::middleware('auth:api')->group(function () {
    Route::post('/books', [BookController::class, 'store']);
});

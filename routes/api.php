<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::post('/posts', [PostController::class, 'store']);
Route::post('/posts/{id}', [PostController::class, 'update']);

Route::get('/all_posts', [PostController::class, 'index']);
Route::delete('/deletePost/{id}', [PostController::class, 'destroy']);

<?php

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia('Home');
});

Route::get('/users', function () {
    return Inertia('Users', [
        'time' => now()->toDateTimeString()
    ]);
});

Route::get('/settings', function () {
    return Inertia('Settings');
});

Route::post('/logout', function () {
   dd('loggin user');
});

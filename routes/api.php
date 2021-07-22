<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SiswaController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\BukuController;
use App\Http\Controllers\PinjamController;
use App\Http\Controllers\DetailPinjamController;
use App\Http\Controllers\KembaliController;
use App\Http\Controllers\AuthController;

Route::middleware('api')->group(function() {

    Route::post('login', [AuthController::class, 'login']);

    Route::group(['middleware' => ['jwt.verify']], function() {

        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('checkToken', [AuthController::class, 'checkToken']);

        Route::resource('siswa', SiswaController::class);
        
        Route::resource('kelas', KelasController::class);
        
        Route::resource('buku', BukuController::class);
        
        Route::resource('pinjam', PinjamController::class);
        Route::put('pinjam/status/{id_pinjam}', [PinjamController::class, 'updateStatus']);
    
        Route::get('detail/{id_pinjam}', [DetailPinjamController::class, 'show']);
        Route::post('detail', [DetailPinjamController::class, 'store']);
    
        Route::get('kembali', [KembaliController::class, 'index']);
        Route::post('kembali', [KembaliController::class, 'store']);
    });

});
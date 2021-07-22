<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    protected $table = 'siswa';
    protected $fillable = ['nama_siswa', 'tgl_lahir', 'jk', 'alamat', 'id_kelas'];
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKembalisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kembali', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('id_pinjam');
            $table->date('tgl_kembali');
            $table->integer('denda');
            $table->timestamps();

            $table->foreign('id_pinjam')->references('id')->on('pinjam');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kembalis');
    }
}

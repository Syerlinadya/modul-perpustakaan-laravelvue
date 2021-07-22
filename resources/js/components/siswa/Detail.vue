<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Detail</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="m-0">Detail Anggota</h4>
                                </div>
                                <div class="card-body text-justify">
                                    <h5 class="mb-3">{{siswa.nama_siswa}}</h5>

                                    <h6>Tanggal Lahir</h6>
                                    <p class="card-text">{{siswa.tgl_lahir}}</p>

                                    <h6>Jenis Kelamin</h6>
                                    <p class="card-text">{{siswa.jk}}</p>

                                    <h6>Alamat</h6>
                                    <p class="card-text">{{siswa.alamat}}</p>

                                    <h6>Kelas</h6>
                                    <p class="card-text">{{siswa.nama_kelas}}</p>

                                    <router-link class="btn btn-primary" to="/siswa">Kembali</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            siswa : {}
        }
    },
    created() {       
        this.axios.get(`http://localhost:8000/api/siswa/${this.$route.params.id}`, { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                  .then(res => {
                      this.siswa = res.data
                  })
                  .catch(err => console.log(err))
    }
}
</script>
<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Pengembalian</h1>
                        </div>          
                    </div>
                </div>
            </div>
 
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="card card-primary card-outline">
                                <div class="card-body">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="width: 10px">#</th>
                                                <th>Nama Siswa</th>
                                                <th>Denda</th>
                                                <th>Tanggal Kembali</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(k, index) in kembali" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ k.nama_siswa }}</td>
                                                <td>Rp {{ k.denda }}</td>
                                                <td>{{ k.tgl_kembali | moment("DD/MM/YYYY") }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
            kembali : {}
        }
    },
    created() {
        this.axios.get('http://localhost:8000/api/kembali',  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                  .then( res => {
                      this.kembali = res.data
                  })
    }
}
</script>
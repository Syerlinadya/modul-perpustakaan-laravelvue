<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Peminjaman</h1>
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
                                    <router-link class="btn btn-info mb-2" to="/pinjam/tambah">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="width: 10px">#</th>
                                                <th>Nama Siswa</th>
                                                <th>Tanggal Pinjam</th>
                                                <th>Tanggal Kembali</th>
                                                <th>Status</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(p, index) in pinjam" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ p.nama_siswa }}</td>
                                                <td>{{ p.tgl_pinjam | moment("DD/MM/YYYY") }}</td>
                                                <td>{{ p.tgl_kembali | moment("DD/MM/YYYY") }}</td>
                                                <td>
                                                    <span v-if="p.status == 1" class="badge bg-success">Kembali</span>
                                                    <span v-else class="badge bg-danger">Belum kembali</span>
                                                </td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link class="btn btn-success" :to="{ name : 'detailpinjam' , params : { id : p.id } }">Detail</router-link>                                                        
                                                        <!-- <router-link class="btn btn-warning" :to="{ name : 'editpinjam' , params : { id : p.id } }">Edit</router-link>   -->
                                                        <button type="button" @click="hapus(p.id)" class="btn btn-danger">Hapus</button>                                                      
                                                    </div>
                                                </td>
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
            pinjam : []
        }
    },
    created() {        
        this.axios.get('http://localhost:8000/api/pinjam',  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                  .then( res => {
                      this.pinjam = res.data
                  })
    },
    methods : {
        hapus(id) {
            this.axios.delete(`http://localhost:8000/api/pinjam/${id}`,  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                      .then( res => {
                          let i = this.pinjam.map(item => item.id).indexOf(id);
                          this.pinjam.splice(i, 1);
                      });
        }
    }
}
</script>
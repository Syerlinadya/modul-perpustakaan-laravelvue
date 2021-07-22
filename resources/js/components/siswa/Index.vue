<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Anggota</h1>
                        </div>          
                    </div>
                </div>
            </div>
 
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card card-primary card-outline">
                                <div class="card-body">
                                    <router-link class="btn btn-info mb-2" to="/siswa/tambah">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th style="width: 10px">#</th>
                                            <th>Nama Lengkap</th>
                                            <th>Kelas</th>
                                            <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(s, index) in siswa" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ s.nama_siswa }}</td>
                                                <td>{{ s.nama_kelas }}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link class="btn btn-success" :to="{ name : 'detailsiswa' , params : { id : s.id } }">Detail</router-link>                                                        
                                                        <router-link class="btn btn-warning" :to="{ name : 'editsiswa' , params : { id : s.id } }">Edit</router-link>  
                                                        <button type="button" @click="hapus(s.id)" class="btn btn-danger">Hapus</button>                                                      
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
            siswa : []
        }
    },
    created() {
        this.axios.get('http://localhost:8000/api/siswa',  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                  .then( res => {
                      this.siswa = res.data
                  })
    },
    methods : {
        hapus(id) {
            this.axios.delete(`http://localhost:8000/api/siswa/${id}`, { headers : {'Authorization' : 'Bearer ' + this.$store.state.token} })
                      .then( res => {
                          let i = this.siswa.map(item => item.id).indexOf(id);
                          this.siswa.splice(i, 1);
                      });
        }
    }
}
</script>
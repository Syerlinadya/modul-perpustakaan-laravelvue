<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component active="active"></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Buku</h1>
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
                                    <router-link class="btn btn-info mb-2" to="/buku/tambah">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th style="width: 10px">#</th>
                                            <th>Judul</th>
                                            <th>Pengarang</th>
                                            <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(b, index) in buku" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ b.judul }}</td>
                                                <td>{{ b.pengarang }}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link class="btn btn-success" :to="{ name : 'detailbuku' , params : { id : b.id } }">Detail</router-link>                                                        
                                                        <router-link class="btn btn-warning" :to="{ name : 'editbuku' , params : { id : b.id } }">Edit</router-link>  
                                                        <button type="button" @click="hapus(b.id)" class="btn btn-danger">Hapus</button>                                                      
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
            buku : [],
        }
    },
    created() {        
        this.axios.get('http://localhost:8000/api/buku',  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                  .then( res => {
                      this.buku = res.data
                  })
    },
    methods : {
        hapus(id) {
            this.axios.delete(`http://localhost:8000/api/buku/${id}`,  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                      .then( res => {
                          let i = this.buku.map(item => item.id).indexOf(id);
                          this.buku.splice(i, 1);
                      });
        }
    }
}
</script>
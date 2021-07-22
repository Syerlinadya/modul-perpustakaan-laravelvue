<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Form Tambah Data</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-warning">
                                <div class="card-header">
                                    <h3 class="card-title">Detail Peminjaman</h3>
                                </div>
                                <form @submit.prevent="tambah">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <select class="form-control" v-model="detailpinjam.id_buku">
                                                <option v-for="(b, index) in buku" :key="index" :value="b.id">{{b.judul}}</option>
                                            </select>                                            
                                        </div>                                        
                                        <div class="form-group">
                                            <label>Jumlah</label>
                                            <input type="number" class="form-control" v-model="detailpinjam.jumlah">
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Simpan</button>
                                    </div>
                                </form>
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
            buku : {},
            detailpinjam : {
                id_pinjam : this.$route.params.id
            }
        }
    },
    created() {
        this.axios.get('http://localhost:8000/api/buku',  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                  .then(res => {
                      this.buku = res.data
                  })
                  .catch(err => console.log(err));
    },
    methods : {
        tambah() {
            this.axios.post('http://localhost:8000/api/detail', this.detailpinjam,  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                      .then( res => {
                          this.$router.push({ name : 'detailpinjam', params : this.$route.params.id});
                      })
                      .catch( err => console.log(err))
        }
    }
}
</script>
<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Detail Peminjaman</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="m-0">Data buku dipinjam</h4>
                                </div>
                                <div class="card-body">     
                                    <table class="table mb-2">
                                        <thead>
                                            <tr>
                                                <th style="width:10px">#</th>
                                                <th>Judul</th>
                                                <th>Jumlah</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(d, index) in databuku" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ d.judul }}</td>
                                                <td><span class="badge bg-warning rounded-pill">{{ d.jumlah }}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button v-if="databuku.length != 0" class="btn btn-success" @click="kembali" :disabled="disable">Proses Kembali</button>
                                    <p v-else>Belum memilih buku</p>
                                    <router-link v-if="datapinjam.status == 0" :to="{ name : 'tambahdetail' , params : { id : this.$route.params.id }}" class="btn btn-primary">Tambah Buku</router-link>
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
            databuku : {},
            datapinjam : { id_pinjam : this.$route.params.id, status : null}
        }
    },
    mounted() {        
        this.axios.get(`http://localhost:8000/api/detail/${this.$route.params.id}`,  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                  .then(res => {
                      this.databuku = res.data
                  })
                  .catch(err => console.log(err))
        this.axios.get(`http://localhost:8000/api/pinjam/${this.$route.params.id}`,  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                  .then(res => {
                      this.datapinjam.status = res.data.status;
                  })
                  .catch(err => console.log(err));
    },
    computed : {
        disable() {
            if(this.datapinjam.status == 1) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods : {
        kembali() {
            this.axios.post('http://localhost:8000/api/kembali', this.datapinjam,  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                      .then(res => {
                        this.axios.put(`http://localhost:8000/api/pinjam/status/${this.$route.params.id}`,  { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                        this.$router.push('/kembali');                        
                      })
                      .catch(err => console.log(err));
                      
        }
    }
}
</script>
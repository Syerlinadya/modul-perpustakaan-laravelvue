<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Form Edit Data</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-success">
                                <div class="card-header">
                                    <h3 class="card-title">Edit Anggota</h3>
                                </div>
                                <form @submit.prevent="edit">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label>Nama Anggota</label>
                                            <input type="text" class="form-control" v-model="siswa.nama_siswa">
                                        </div>                                        
                                        <div class="form-group">
                                            <label>Tanggal Lahir</label>
                                            <b-form-datepicker id="example-datepicker" class="mb-2" v-model="siswa.tgl_lahir"></b-form-datepicker>
                                        </div>
                                        <div class="form-group">
                                            <div>
                                                <label>Jenis Kelamin</label>
                                            </div>
                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">                                                
                                                <label v-if="siswa.jk == 'L'" class="btn btn-secondary active">
                                                    <input type="radio" value="L" v-model="siswa.jk" checked> Laki-laki                                                   
                                                </label>
                                                <label v-else class="btn btn-secondary">
                                                    <input type="radio" value="L" v-model="siswa.jk"> Laki-laki                                                    
                                                </label>
                                                <label v-if="siswa.jk == 'P' " class="btn btn-secondary active">
                                                    <input type="radio" value="P" v-model="siswa.jk" checked> Perempuan                                                    
                                                </label>
                                                <label v-else class="btn btn-secondary">
                                                    <input type="radio" value="P" v-model="siswa.jk"> Perempuan                                                    
                                                </label>
                                                
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Alamat</label>
                                            <textarea rows="4" class="form-control" v-model="siswa.alamat"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Kelas</label>
                                            <select class="form-control" v-model="siswa.id_kelas">                                                   
                                                <option v-for="k in kelas" :key="k.id" :value="k.id" >{{ k.nama_kelas }}</option>
                                            </select>
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
            siswa : {},
            kelas : {}
        }
    },
    created() {        
        this.axios.get(`http://localhost:8000/api/siswa/${this.$route.params.id}`, { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                  .then((res) => {
                      this.siswa = res.data
                  })
                  .catch(err => console.log(err));
        this.axios.get('http://localhost:8000/api/kelas', { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                  .then( res => {
                      this.kelas = res.data
                  })
                  .catch(err => console.log(err));
    },
    methods : {
        edit() {
            this.axios.patch(`http://localhost:8000/api/siswa/${this.$route.params.id}`, this.siswa, { headers: { 'Authorization': `Bearer ` + this.$store.state.token } })
                      .then( res => {
                          this.$router.push('/siswa');
                      })
                      .catch( err => console.log(err))
        }
    }
}
</script>
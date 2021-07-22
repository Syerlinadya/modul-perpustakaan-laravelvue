<template>
    <div class="login-box">
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                <h2>Perpustakaan Sekolah</h2>
            </div>
            <div class="card-body">
                <p class="login-box-msg">Masukkan Email dan Password</p>

                <form @submit.prevent="login">
                    <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email" v-model="account.email">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                    </div>
                    <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Password" v-model="account.password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            account : {
                email : '',
                password : ''
            }
        }
    },
    mounted() {
        if(this.$store.state.token !== '') {
            this.axios.post('http://localhost:8000/api/checkToken', { token : this.$store.state.token })
                      .then(res => {
                          this.$router.push('/');
                      })
                      .catch(err => {
                          this.$store.commit('clearToken');
                      })
        }
    },
    methods : {
        login() {
            this.axios.post('http://localhost:8000/api/login', this.account)
                      .then(res => {
                          if(res.data.success) {
                              this.$store.commit('setToken', res.data.token);
                              this.$router.push('/');
                          }
                      })
                      .catch(err => console.log(err));
        }
    }
}
</script>
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from '../components/Login.vue';
import Dashboard from '../components/Dashboard.vue';

//siswa
import IndexSiswa from '../components/siswa/Index.vue';
import EditSiswa from '../components/siswa/Edit.vue';
import DetailSiswa from '../components/siswa/Detail.vue';
import TambahSiswa from '../components/siswa/Tambah.vue';

//buku
import IndexBuku from '../components/buku/Index.vue';
import EditBuku from '../components/buku/Edit.vue';
import DetailBuku from '../components/buku/Detail.vue';
import TambahBuku from '../components/buku/Tambah.vue';

//pinjam
import IndexPinjam from '../components/transaksi/peminjaman/Index.vue';
import TambahPinjam from '../components/transaksi/peminjaman/TambahPinjam.vue';
import EditPinjam from '../components/transaksi/peminjaman/Edit.vue';
import DetailPinjam from '../components/transaksi/peminjaman/Detail.vue';
import TambahDetail from '../components/transaksi/peminjaman/TambahDetail.vue';

//kembali
import IndexKembali from '../components/transaksi/pengembalian/Index.vue';



function cekLogin(to, from, next) {
    var isAuthenticated = false;
    if(localStorage.getItem('auth')) {
        isAuthenticated = true;
    }

    if(isAuthenticated) {
        next()
    } else {
        next('/login')
    }
}

export const routes = [
    {
        name : 'login',        
        path : '/login',
        component : Login
    },
    {
        name : 'dashboard',
        beforeEnter : cekLogin,
        path : '/',
        component : Dashboard
    },
    {
        name : 'siswa',
        beforeEnter : cekLogin,
        path : '/siswa',
        component : IndexSiswa
    },
    {
        name : 'tambahsiswa',
        beforeEnter : cekLogin,
        path : '/siswa/tambah',
        component : TambahSiswa
    },
    {
        name : 'editsiswa',
        beforeEnter : cekLogin,
        path : '/siswa/edit/:id',
        component : EditSiswa
    },
    {
        name : 'detailsiswa',
        beforeEnter : cekLogin,
        path : '/siswa/detail/:id',
        component : DetailSiswa
    },
    {
        name : 'buku',
        beforeEnter : cekLogin,
        path : '/buku',
        component : IndexBuku
    },
    {
        name : 'tambahbuku',
        beforeEnter : cekLogin,
        path : '/buku/tambah',
        component : TambahBuku
    },
    {
        name : 'editbuku',
        beforeEnter : cekLogin,
        path : '/buku/edit/:id',
        component : EditBuku
    },
    {
        name : 'detailbuku',
        beforeEnter : cekLogin,
        path : '/buku/detail/:id',
        component : DetailBuku
    },
    {
        name : 'pinjam',
        beforeEnter : cekLogin,
        path : '/pinjam',
        component : IndexPinjam
    },
    {
        name : 'tambahpinjam',
        beforeEnter : cekLogin,
        path : '/pinjam/tambah',
        component : TambahPinjam
    },
    {
        name : 'editpinjam',
        beforeEnter : cekLogin,
        path : '/pinjam/edit/:id',
        component : EditPinjam
    },
    {
        name : 'detailpinjam',
        beforeEnter : cekLogin,
        path : '/pinjam/detail/:id',
        component : DetailPinjam
    },
    {
        name : 'tambahdetail',
        beforeEnter : cekLogin,
        path : '/pinjam/detail/tambah/:id',
        component : TambahDetail
    },
    {
        name : 'kembali',
        beforeEnter : cekLogin,
        path : '/kembali',
        component : IndexKembali
    },
]

const router = new VueRouter({
    mode : 'history',
    routes
});

export default router;
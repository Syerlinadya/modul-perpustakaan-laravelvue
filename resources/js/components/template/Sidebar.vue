<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <router-link to="/dashboard" class="brand-link">
            <span class="brand-text font-weight-light">Perpustakaan</span>        
        </router-link>
        
        <!-- Sidebar -->
        <div class="sidebar">             

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'siswa'}" class="nav-link">
                        <i class="nav-icon fas fa-user-friends"></i>
                        <p>Anggota</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'buku'}" class="nav-link">
                        <i class="nav-icon fas fa-book"></i>
                        <p>Buku</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-exchange-alt"></i>
                    <p>
                        Transaksi
                        <i class="right fas fa-angle-left"></i>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link :to="{name:'pinjam'}" class="nav-link">
                                <i class="fas fa-file-export nav-icon"></i>
                                <p>Peminjaman</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/kembali" class="nav-link">
                                <i class="fas fa-file-import nav-icon"></i>
                                <p>Pengembalian</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
</template>

<script>
export default {
    
}
</script>
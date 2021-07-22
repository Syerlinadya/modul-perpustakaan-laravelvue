require('./bootstrap');

import Vue from 'vue';

import VueAxios from 'vue-axios';
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from './App.vue';

import  router  from './router';
import { store } from "./store.js";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(require('vue-moment'));


Vue.use(VueAxios,axios);


Vue.component('navbar-component', require('./components/template/Navbar.vue').default);
Vue.component('sidebar-component', require('./components/template/Sidebar.vue').default);

const app = new Vue({
    el: '#app',
    store,
    router,
    render : h => h(App)
});

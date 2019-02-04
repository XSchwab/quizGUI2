/**
 * Created by xschw on 04.02.2019.
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import Geometrie from '../components/Geometrie.vue';
import Web from '../components/Web.vue';


Vue.use(Router);

export default new Router({
        scrollBehavior: () => ({ y: 0 }),
    routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {

        path: '/Geometrie',
        name: 'Geometrie',
        component: Geometrie,
    },
    {
        path: '/Web',
        name: 'Web',
        component: Web,
    }

],
});
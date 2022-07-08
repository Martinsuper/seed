import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }, {
        path: '/version',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
    }, {
        path: '/list',
        name: 'list',
        component: () => import('../views/ListView.vue')
    }, {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/DetailView.vue')
    }, {
        path: '/four',
        name: 'FourQuadrants',
        component: () => import('../views/FourQuadrants.vue')
    }, {
        path: '/today',
        name: 'today',
        component: () => import('../views/TodayTask.vue')
    }
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(),
    routes
})

export default router

import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Servey from '../views/Servey.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import store from "../store";

const routes = [
    {
        path: '/',
        redirect: 'dashboard',
        component: DefaultLayout,
        meta: { requireAuth: true},
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/servey',
                name: 'Servey',
                component: Servey
            },
        ]
    },
    {
        path: '/auth',
        redirect: 'login',
        name: 'Auth',
        component: AuthLayout,
        meta: { isGuard: true },
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !store.state.user.token) {
        next({name: 'Login'})
    } else if ( store.state.user.token && to.meta.isGuard) {
        next({name: 'Dashboard'})
    }
    else {
        next();
    }
})

export default router;

import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home' 
import Cart from '@/pages/cart' 
import Me from '@/pages/me' 
import Commodity from '@/pages/commodity' 

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/me',
        component: Me,
    },
    {
        path: '/commodity',
        name: 'commodity',
        component: Commodity,
    },
    
]

const router = new Router({
    routes: constantRouterMap
})

export default router
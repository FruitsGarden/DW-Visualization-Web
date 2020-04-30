

/**
 * 首页
 */

import homePage from '@/pages/home.vue'

const homeModule = [
    {
        path: '/homePage',
        name: 'homePage',
        component: homePage,
    },
]




/**
 * 重定向
 */
export default [
    {path: '/', redirect: '/homepage'},
    ...homeModule,
]
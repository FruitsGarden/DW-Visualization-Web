

/**
 * 首页
 */
import homePage from '@/pages/home.vue'


import datav from '@/pages/datav.vue'

const homeModule = [
    {
        path: '/homePage',
        name: 'homePage',
        component: homePage,
    },
    {
        path: '/datav',
        name: 'datav',
        component: datav,
    },
]

/**
 * 重定向
 */
export default [
    {path: '/', redirect: '/homepage'},
    ...homeModule,
]
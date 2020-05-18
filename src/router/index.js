import Vue from 'vue'
import Router from 'vue-router'

import routerConfig from './routerConfig.js'

import notFound from '@/pages/notFound.vue'


import store from '../store/index.js'


Vue.use(Router)

window.router = new Router({
    routes: [
        {
            path: '*',
            components: notFound,
        },
        ...routerConfig,
    ]
})

export default router


var uv_data  = {
    day: [
        {time: '2010-05-18', value: 100},
        {time: '2010-05-17', value: 100},
        {time: '2010-05-16', value: 100},
        {time: '2010-05-15', value: 100},
    ]
}

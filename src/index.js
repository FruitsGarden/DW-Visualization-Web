






import Vue from 'vue'
import App from './App'

//全局样式
import './style/index.css'
import './style/styleConfig.scss'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)


import ECharts from 'vue-echarts'

import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/map'

import 'echarts/lib/component/title'; //引入标题组件
import 'echarts/lib/component/legend'; //引入图例组件
import 'echarts/lib/component/tooltip'; //引入图例组件
import 'echarts/lib/component/toolbox'; //引入图例组件

Vue.component('chart', ECharts)

import './pages/components/index.js'

import router from './router/index.js'

import store from './store/index.js'

Vue.config.productionTip = false


// /**
//  * 以下是ajax拦截
//  */
// import QS from 'qs'
// import axios from 'axios'

// //设置ajax根路径
// axios.interceptors.request.use(config => {
// 		//token加入请求头
// 		config.headers = {
// 			'Content-Type': 'application/x-www-form-urlencoded'
// 		}
// 		if(config.method === 'post'){
// 			config.data = QS.stringify({
// 				...config.data,
// 			})
// 		}
// 		return config;

// 	},error => {
// 		throw error
// });



new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
})

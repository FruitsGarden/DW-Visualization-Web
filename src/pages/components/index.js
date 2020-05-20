

import Vue from 'vue'
import SvgIcon from './svgIcon.vue'

import lineComponent from './lineComponent.vue'
import funnelComponent from './funnelComponent.vue'
// register globally
Vue.component('svg-icon', SvgIcon)

export {
    lineComponent,
    funnelComponent,
}
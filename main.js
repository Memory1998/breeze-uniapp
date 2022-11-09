import App from './App'

import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

// 分享
import share from '@/common/share.js'
Vue.mixin(share)

// 路由拦截
import '@/router/index'

// UView
import uView from "uview-ui";
Vue.use(uView)
const app = new Vue({
	...App
})
app.$mount()

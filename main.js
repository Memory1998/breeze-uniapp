import App from './App'
import share from '@/common/share'
import store from './store' // store
import Vue from 'vue'
// 路由拦截
import '@/router/index'
// UView
import uView from "uview-ui";

// 分享
Vue.mixin(share)
// UView
Vue.use(uView)
Vue.config.productionTip = false
// store
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()

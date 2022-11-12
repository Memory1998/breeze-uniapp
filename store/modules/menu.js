import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
	namespaced: true,
	state: {
		menus: []
	},
	mutations: {
		setMenus(state, menus) {
			state.menus = menus
			uni.setStorageSync('menus', menus)
		}
	},
	actions: {},
	getters: {
		getMenus(state) {
			state.menus = JSON.parse(uni.getStorageSync('menus'))
			return state.menus
		}
	}
}

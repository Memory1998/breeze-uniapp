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
		}
	},
	actions: {},
	getters: {
		getMenus(state) {
			return state.menus
		}
	}
}

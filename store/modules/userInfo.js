import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store/index'

Vue.use(Vuex)

export default {
	namespaced: true,
	state: {
		userInfo: undefined
	},
	mutations: {
		setUserInfo(state) {
			state.userInfo = JSON.parse(uni.getStorageSync('user_info'))
		}
	},
	actions: {},
	getters: {
		getUsername(state) {
			if (!state.userInfo) {
				uni.reLaunch({
					url: 'login'
				})
			}
			return state.userInfo.username
		}
	}
}

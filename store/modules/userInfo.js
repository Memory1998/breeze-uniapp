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
		setUserInfo(state, userInfo) {
			uni.setStorageSync('user_info', userInfo)
			state.userInfo = userInfo
		}
	},
	actions: {},
	getters: {
		getUsername(state) {
			if (!state.userInfo) {
				uni.reLaunch({
					url: 'login'
				})
				return {}
			}
			return state.userInfo.username
		}
	}
}

import storage from '@/utils/storage'
import {
	wxPhoneLogin,
	wxGetPhone,
	logout,
	wxLogin
} from '@/api/login'


const user = {
	namespaced: true,
	state: {
		accessToken: storage.get('access_token') || '',
		nickName: storage.get('nick_name') || '',
		avatar: storage.get('avatar') ||
			'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
		phone: storage.get('phone'),
		openId: storage.get('openId')
	},

	mutations: {
		SET_ACCESS_TOKEN: (state, accessToken) => {
			state.accessToken = accessToken
			storage.set('access_token', accessToken)
		},
		SET_NICK_NAME: (state, nickName) => {
			state.nickName = nickName
			storage.set('nick_name', nickName)
		},
		SET_AVATAR: (state, avatarUrl) => {
			state.avatarUrl = avatarUrl
			storage.set('avatar', avatarUrl)
		},
		SET_PHONE: (state, phone) => {
			state.phone = phone
			storage.set('phone', phone)
		},
		SET_OPEN_ID: (state, openId) => {
			state.openId = openId
			storage.set('openId', openId)
		}
	},

	actions: {
		logout({
			commit,
			state
		}) {
			return new Promise((resolve, reject) => {
				logout({
					username: state.username
				}).then(() => {
					commit('SET_ACCESS_TOKEN', '')
					commit('SET_AVATAR',
						'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
					)
					commit('SET_NICK_NAME', '')
					commit('SET_PHONE', '')
					commit('SET_OPEN_ID', '')
					storage.clean()
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},
		wxLogin({
			commit,
			state
		}, userInfo) {
			return new Promise((resolve, reject) => {
				wxLogin(userInfo).then((response) => {
					commit('SET_ACCESS_TOKEN', response.data.accessToken);
					commit('SET_PHONE', response.userInfo.phonenumber);
					commit('SET_NICK_NAME', response.userInfo.nickName);
					commit('SET_AVATAR', response.userInfo.avatarUrl);
					commit('SET_OPEN_ID', response.userInfo.openId);
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},
		/**
		 * 登录
		 */
		wxPhoneLogin({
			commit,
			state
		}, code) {
			return new Promise((resolve, reject) => {
				wxPhoneLogin({
					code: code
				}).then((response) => {
					debugger
					commit('SET_ACCESS_TOKEN', response.data.accessToken);
					commit('SET_PHONE', response.data.userInfo.phone);
					commit('SET_NICK_NAME', response.data.userInfo.username);
					commit('SET_AVATAR', response.data.userInfo.avatar);
					commit('SET_OPEN_ID', response.data.userInfo.openId);
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},
		/**
		 * 获取手机号
		 */
		wxGetPhone({
			commit,
			state
		}, code) {
			return new Promise((resolve, reject) => {
				wxGetPhone({
					code: code
				}).then((response) => {
					debugger
					commit('SET_PHONE', response.data.phone);
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		}
	},
	getters: {
		accessToken: (state) => state.userInfo.accessToken,
		avatar: (state) => state.userInfo.avatar,
		nickName: (state) => state.userInfo.nickName,
		phone: (state) => state.userInfo.phone,
		openId: (state) => state.userInfo.openId
	}
}

export default user

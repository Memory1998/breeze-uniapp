import request from '@/request/index'

// 手机号授权
export function wxPhoneLogin(data) {
	return request({
		url: `/breeze/wxPhoneLogin`,
		method: 'POST',
		data: data
	})
}

// 登录
export function wxLogin(data) {
	return request({
		url: `/breeze/wxLogin`,
		method: 'POST',
		data: data
	})
}

// 登出
export function logout(data) {
	return request({
		'url': '/breeze/logout',
		'method': 'GET',
		'data': data
	})
}

// 登出
export function wxGetPhone(data) {
	return request({
		'url': '/breeze/wxGetPhone',
		'method': 'POST',
		'data': data
	})
}

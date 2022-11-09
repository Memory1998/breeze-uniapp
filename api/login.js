import request from '@/request/index'

export function wxLogin(data) {
	return request({
		url: `/jwt/wxLogin`,
		method: 'POST',
		data: data
	})
}

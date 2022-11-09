import request from '@/request/index'

export function wxLogin(data) {
	return this.request({
		url: `/wxLogin`,
		method: 'POST',
		data: data
	})
}

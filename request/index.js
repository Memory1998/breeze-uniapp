import {
	config
} from '@/common/config'
import {
	isWhite
} from '@/utils/permission'

/**
 * toast
 */
const _show_msg = (message) => {
	uni.showToast({
		title: `${message}`,
		icon: 'none',
		duration: 2000
	})
}

/**
 * 请求方法
 */
const _request = (reqBody, resolve, reject) => {
	uni.request({
		url: `${config.base_url}${reqBody.url}`,
		method: reqBody.method || 'get',
		data: reqBody.data,
		header: {
			...config.header
		},
		dataType: reqBody.dataType || 'json',
		timeout: config.timeout || 10000,
		success: (response) => {
			debugger
			if (response.statusCode && response.statusCode === 200) {
				if (response.data.code === 2 && response.data.message) {
					// 警告
					_show_msg(response.data.message)
					return
				} else if (response.data.code === 0 && response.data.message) {
					// 错误
					_show_msg('系统异常')
					return
				} else if (response.data.code === 500) {
					console.error(response)
					_show_msg('服务异常')
					return
				}
				resolve(response.data)
			} else if (response.statusCode === 400) {
				_show_msg('参数解析失败')
			} else if (response.statusCode === 404) {
				_show_msg('请求地址不存在')
			} else if (response.statusCode === 401) {
				_show_msg(response.data.message)
				// TODO 重新登录
			} else if (response.statusCode === 403) {
				_show_msg(response.data.message)
			}
			console.error(response.statusCode)
		},
		fail: (error) => {
			debugger
			if (error.errMsg.includes('Unexpected')) {
				_show_msg('连接服务被拒绝')
			} else if (error.errMsg.includes('timeout')) {
				_show_msg('请求超时')
			}
			reject(error.data)
		}
	})
}

export default function request(reqBody) {
	debugger
	if (isWhite(reqBody.url)) {
		reqBody.header['Authorization'] = "Bearer " + uni.getStorageSync('access_token')
	}
	return new Promise((resolve, reject) => _request(reqBody, resolve, reject))
}

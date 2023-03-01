import config from '@/config'
import {
	toast
} from '@/utils/utils'

let timeout = 10000
const baseUrl = config.baseURL

const request = (config) => {
	config.header = config.header || {}
	// 微信平台标识
	config.header['X-PLATFORM'] = 'wx'
	return new Promise((resolve, reject) => {
		uni.request({
				url: config.baseUrl || baseUrl + config.url,
				method: config.method || 'GET',
				timeout: config.timeout || timeout,
				data: config.data,
				header: config.header,
				dataType: 'json'
			}).then((response) => {
				let [error, res] = response
				if (error) {
					toast('连接失败')
					reject('后端接口连接异常')
					return
				}
				console.log(res.data)
				if (res.data.code === 2 && res.data.message) {
					// 业务逻辑验证警告
					toast('参数错误')
				} else if (res.data.code === 0 && res.data.message) {
					// 业务错误失败
					toast('请求失败')
					reject(res)
				} else if (res.data.code === 500) {
					// 系统错误
					toast('系统异常')
					reject(res)
				}
				resolve(res.data)
			})
			.catch(error => {
				debugger
				if (error.message.includes('Unexpected')) {
					toast('连接服务被拒绝')
				} else if (error.message.includes('timeout')) {
					toast('请求超时')
				} else if (error.response.status === 400) {
					toast('参数解析失败')
				} else if (error.response.status === 404) {
					toast('请求地址不存在')
				} else if (error.response.status === 401) {
					showErrorMsg(error.response, error.response.data.message)
					reLoginConfirm()
				} else if (error.response.status === 403) {
					showErrorMsg(error.response, error.response.data.message)
				}
				console.error(error.response.status)
				reject(error)
			})
	})
}

export default request

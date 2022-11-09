/**
 * 此文件系统请求常量配置
 */


/**
 * 基础路径
 */
let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
	// 开发环境
	BASE_URL = 'http://127.0.0.1:9000'
} else {
	// 正式环境
	BASE_URL = 'http://127.0.0.1:9000'
}

/**
 * 暴露公共参数
 */
export const config = {
	base_url: BASE_URL,
	appId: '',
	appKey: '',
	timeout: 10000,
	header: {
		'content-type': 'application/json',
	},
	whitelisting: [
		'wxLogin'
	]
}

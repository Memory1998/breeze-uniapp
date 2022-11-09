import {
	config
} from '@/common/config.js'

/**
 * 用于跳转前判断是否登录并且不在白名单中
 */
export let hasPermission = (url) => {
	let accessToken = sessionStorage.getItem("access_token")
	return accessToken && (config.whitelisting.indexOf(url) !== -1)
}

/**
 * 判断请求路径在不在白名单中
 */
export let isWhite = (url) => {
	return config.whitelisting.indexOf(url) !== -1
}

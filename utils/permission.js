import config from '@/config'
import storage from '@/utils/storage'

/**
 * 用于跳转前判断是否登录并且不在白名单中
 */
export function hasPermission(url) {
	let accessToken = storage.get('access_token')
	return accessToken || isWhite(url)
}

/**
 * 判断请求路径在不在白名单中
 */
export function isWhite(url) {
	return config.appConfig.whiteList.indexOf(url) !== -1
}

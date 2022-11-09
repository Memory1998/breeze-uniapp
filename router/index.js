import hasPermission from '@/utils/permission'

/**
 * 	页面跳转前进行拦截 
 */
uni.addInterceptor('navigateTo', {
	invoke(e) {
		// invoke根据返回值进行判断是否继续执行跳转
		if (!hasPermission(e.url)) {
			uni.reLaunch({
				url: 'login'
			})
			return false
		}
		return true
	},
	success(e) {
		console.log(e)
	}
})

/**
 * 	页面跳转前进行拦截 
 */
uni.addInterceptor('reLaunch', {
	invoke(e) {
		// invoke根据返回值进行判断是否继续执行跳转
		if (!hasPermission(e.url)) {
			uni.reLaunch({
				url: 'login'
			})
			return false
		}
		return true
	},
	success(e) {
		console.log(e)
	}
})

/**
 * 	页面跳转前进行拦截 
 */
uni.addInterceptor('redirectTo', {
	invoke(e) {
		// invoke根据返回值进行判断是否继续执行跳转
		if (!hasPermission(e.url)) {
			uni.reLaunch({
				url: 'login'
			})
			return false
		}
		return true
	},
	success(e) {
		console.log(e)
	}
})

uni.addInterceptor('switchTab', {
	invoke(e) {
		if (!hasPermission(e.url)) {
			uni.reLaunch({
				url: 'login',
			})
			return false
		}
		return true
	},
	success(e) {
		console.log(e)
	}
})

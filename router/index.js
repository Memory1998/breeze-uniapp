import {
	hasPermission
} from '@/utils/permission'
import {
	toast
} from '@/utils/utils'

uni.addInterceptor('navigateTo', {
	invoke(e) {
		// invoke根据返回值进行判断是否继续执行跳转
		if (!hasPermission(e.url)) {
			toast('不可跳转')
			return false
		}
		return true
	},
	success(e) {
		console.log(e)
	}
})

uni.addInterceptor('reLaunch', {
	invoke(e) {
		// invoke根据返回值进行判断是否继续执行跳转
		if (!hasPermission(e.url)) {
			toast('不可跳转')
			return false
		}
		return true
	},
	success(e) {
		console.log(e)
	}
})

uni.addInterceptor('redirectTo', {
	invoke(e) {
		// invoke根据返回值进行判断是否继续执行跳转
		if (!hasPermission(e.url)) {
			toast('不可跳转')
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
			toast('不可跳转')
			return false
		}
		return true
	},
	success(e) {
		console.log(e)
	}
})

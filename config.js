module.exports = {
	// 请求路径
	baseURL: 'https://2224wa2776.oicp.vip',
	appInfo: {
		// 应用名称
		name: "breeze-app",
		// 应用版本
		version: "1.0.0",
		// 客服电话
		phoneNumber: "114",
		// 隐私政策
		privacyPolicy: {
			title: "隐私政策",
			url: "http://www.baidu.com"
		},
		// 法律声明
		agreements: {
			title: "法律声明",
			url: "http://www.baidu.com"
		}
	},
	appConfig: {
		header: {
			'content-type': 'application/json',
		},
		whiteList: [
			'/pages/mine/index',
			'/pages/index/index',
			'/pages/mine/register/index'
		]
	}
}

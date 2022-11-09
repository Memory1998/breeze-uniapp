<template>
	<view class="content">
		<u-button @tap="toLogin" type="primary">微信一键登录</u-button>
	</view>
</template>
<script>
	import {
		wxLogin
	} from '@/api/login.js'

	export default {
		components: {},
		data() {
			return {}
		},
		async onLoad(option) {},
		methods: {
			// 登录
			toLogin() {
				let that = this
				uni.getUserProfile({
					// desc: 必填 声明获取用户个人信息后的用途 后续会展示在弹窗中
					desc: '用于完善用户资料',
					lang: 'zh_CN',
					success(user) {
						that.loadLoginCode(user);
					}
				})
			},
			loadLoginCode(user) {
				let that = this
				// 获取code 小程序专有，用户登录凭证。
				uni.login({
					provider: 'weixin',
					success(login) {
						that.wxlogin(login.code, user.userInfo)
					}
				});
			},
			async wxlogin(code, user) {
				let data = {
					nickName: user.nickName,
					avatarUrl: user.avatarUrl,
					code: code
				}
				let rep = await wxLogin(data)
				debugger
				if (rep.code === 1) {
					debugger
				}
			}
		}
	}
</script>

<style lang="scss">
	.content {}
</style>

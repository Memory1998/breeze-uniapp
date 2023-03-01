<template>
	<view>
		<button class="avatar_wrapper" open-type="chooseAvatar" @chooseavatar="handChooseAvatar">
			<image class="avatar" :src="userInfo.avatar"></image>
		</button>
		<input type="nickname" v-model="userInfo.nickName" class="register_input" placeholder="请输入昵称" />
		<input v-model="userInfo.phone" class="register_input" disabled placeholder="请输入手机号" />
		<u-button customStyle="margin:0 10%; width: 80%;" @click="register" type="primary" text="提交"></u-button>
	</view>
</template>

<script>
	const defaultAvatarUrl =
		'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

	import {
		toast
	} from '@/utils/utils'

	import config from '@/config'

	export default {
		data() {
			return {
				userInfo: {
					avatar: defaultAvatarUrl,
					nickName: '',
					phone: '',
					minioPrefix: ''
				}
			}
		},
		onLoad() {
			this.userInfo.phone = this.$store.state.userInfo.phone
		},
		methods: {
			/**
			 * 上传头像
			 *
			 * @param {Object} e
			 */
			handChooseAvatar(e) {
				uni.uploadFile({
					url: config.baseUrl + '/uploadMinio',
					filePath: e.detail.avatarUrl,
					name: 'file',
					header: {
						"Content-Type": "multipart/form-data"
					},
					formData: {
						'pathRoot': 'avatar'
					},
					success: (res) => {
						if (res.data) {
							let data = JSON.parse(res.data)
							this.userInfo.avatarUrl = data.minioPrefix + data.minioUrl + '?' + new Date()
								.getMilliseconds()
							this.userInfo.minioPrefix = data.minioPrefix
							this.userInfo.minioUrl = data.minioUrl
						}
					}
				})
			},
			/**
			 * 注册
			 */
			register() {
				if (this.userInfo.avatarUrl === defaultAvatarUrl) {
					toast("请设置头像")
					return
				}
				if (this.userInfo.nickName === '') {
					toast("请设置用户名")
					return
				}
				let _this = this
				uni.login({
					provider: 'weixin',
					success(res) {
						let param = {
							'code': res.code,
							..._this.userInfo
						}
						_this.$store.dispatch('userInfo/wxLogin', param).then((response) => {
							uni.navigateBack({
								delta: 1,
								animationType: 'pop-out',
								animationDuration: 200
							});
						})
					}
				});
			}
		}
	}
</script>
<style>
	.avatar_wrapper {
		padding: 0;
		width: 56px !important;
		border-radius: 8px;
		margin-top: 40px;
		margin-bottom: 40px;
	}

	.register_input {
		margin: 50rpx 50rpx;
	}

	.avatar {
		display: block;
		width: 56px;
		height: 56px;
	}
</style>

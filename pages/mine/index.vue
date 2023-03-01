<template>
	<view class="mine_container" :style="{height: `${windowHeight}px`}">
		<!--顶部个人信息栏-->
		<view class="header">
			<view class="login_group">
				<u--image :showLoading="true" :src="avatar" shape="circle" width="80px" height="80px" mode="widthFix"
					@click="handleHeaderImage" />
			</view>
			<view class="login_group">
				<view v-if="nickName !== ''" @click="handleInfo" class="user_info">
					<view class="username">
						用户名：{{ nickName }}
					</view>
				</view>

				<view @click="handlePhoneLogin" v-else class="login_tip">
					手机号登录
				</view>
				<!-- <view @click="handleUserLogin" v-else class="login_tip"> -->
				<!-- 用户一键登录 -->
				<!-- </view> -->
			</view>
		</view>

		<view class="card_action">
			<view class="card_action_item" @click="handleJIFEN">
				<text class="text">我的积分</text>
			</view>
			<view class="card_action_item" @click="handleKAQUAN">
				<text class="text">我的卡券</text>
			</view>
		</view>

		<!--功能列表-->
		<view class="section_list">
			<view class="list_cell" @click="handleInfo">
				<view class="section_item_box">
					<view class="iconfont icon-wodexinxi_jibenxinxi menu_icon"></view>
					<button>我的信息</button>
				</view>
			</view>

			<view class="list_cell" @click="handlePhoneCall">
				<view class="section_item_box">
					<view class="iconfont icon-lianxiwomen-copy menu_icon"></view>
					<button>联系我们</button>
				</view>
			</view>

			<view class="list_cell">
				<view class="section_item_box">
					<view class="iconfont icon-yonghufankui menu_icon"></view>
					<button open-type="feedback">用户反馈</button>
				</view>
			</view>

			<view class="list_cell">
				<view class="section_item_box">
					<view class="iconfont icon-ico_zaixiankefu menu_icon"></view>
					<button open-type="contact">在线客服</button>
				</view>
			</view>

			<view class="list_cell" @click="handleLogout">
				<view class="section_item_box">
					<view class="iconfont icon-tuichudenglu menu_icon"></view>
					<button>退出登录</button>
				</view>
			</view>
		</view>

		<!--登录弹出框-->
		<u-popup :show="showLogin" mode="center">
			<view class="login_popup">
				<view class="login_popup_text">
					<text>用户登录需要同意</text>
					<text @click="handleAgreement" style="color: #007AFF;">《法律声明》</text>
					<text @click="handlePrivacyPolicy" style="color: #007AFF;">《隐私政策》</text>
				</view>
				<view class="login_popup_button">
					<button @click="handleRefuse">拒绝</button>
					<button type="default" style="background: #007AFF;color: #fff;" open-type="getPhoneNumber"
						@getphonenumber="handleGetPhoneNumber">同意</button>
				</view>
			</view>
		</u-popup>

	</view>
</template>

<script>
	import {
		toast,
		confirm
	} from '@/utils/utils'

	export default {
		data() {
			return {
				// 是否展示登录弹出框
				showLogin: false,
				// 是否使用户登录
				userLogin: true,
				// 全局配置信息
				globalAppInfo: getApp().globalData.appInfo,
			}
		},
		onLoad() {},
		computed: {
			avatar() {
				return this.$store.state.userInfo.avatar
			},
			nickName() {
				return this.$store.state.userInfo.nickName
			},
			windowHeight() {
				return uni.getSystemInfoSync().windowHeight - 50
			}
		},
		methods: {
			/**
			 * 点击头像
			 */
			handleHeaderImage() {},
			/**
			 * 还没想好
			 */
			handleJIFEN() {
				toast('敬请期待......')
			},
			/**
			 * 还没想好
			 */
			handleKAQUAN() {
				toast('敬请期待......')
			},
			/**
			 * 我的信息
			 */
			handleInfo() {
				uni.navigateTo({
					url: '/pages/mine/info/index'
				})
			},
			/**
			 * 联系我们
			 */
			handlePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: this.globalAppInfo.phoneNumber
				});
			},
			/**
			 * 协议
			 */
			handleAgreement() {
				let site = this.globalAppInfo.agreements
				uni.navigateTo(`/pages/common/webview/index?title=${site.title}&url=${site.url}`)
			},
			/**
			 * 声明
			 */
			handlePrivacyPolicy() {
				let site = this.globalAppInfo.privacyPolicy
				uni.navigateTo(`/pages/common/webview/index?title=${site.title}&url=${site.url}`)
			},
			/**
			 * 手机授权登录
			 */
			handlePhoneLogin() {
				this.showLogin = true
				this.userLogin = false
			},
			/**
			 * 用户授权登录
			 */
			handleUserLogin() {
				this.showLogin = true
				this.userLogin = true
			},
			/**
			 * 拒绝用户协议
			 */
			handleRefuse() {
				this.showLogin = false
			},
			/**
			 * 获取用户手机号
			 *
			 * @param {Object} e
			 */
			handleGetPhoneNumber(e) {
				this.showLogin = false
				if (this.userLogin) {
					this.$store.dispatch('userInfo/wxGetPhone', e.detail.code).then(() => {
						uni.reLaunch({
							url: '/pages/mine/register/index'
						})
					})
					return
				}
				this.$store.dispatch('userInfo/wxPhoneLogin', e.detail.code).then(() => {
					uni.reLaunch({
						url: '/pages/index/index'
					})
				})
			},
			/**
			 * 退出登录
			 */
			handleLogout() {
				confirm('退出登录').then(() => {
					this.$store.dispatch('userInfo/logout').then(() => {
						uni.reLaunch('/pages/mine/index')
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.mine_container {
		width: 100%;
		height: 100%;

		.header {
			display: flex;
			justify-items: center;
			align-items: center;

			.login_group {
				padding: 40rpx;
				font-size: 18px;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #666;
				font-size: 30rpx;

				.user_info {
					margin-left: 10px;
				}
			}
		}

		.card_action {
			width: 100%;
			border-radius: 20px;
			text-align: center;
			color: #fff;
			display: flex;
			height: 200rpx;
			justify-content: space-between;
			align-items: center;

			.card_action_item {
				border-radius: 8px;
				margin: 10rpx 50rpx;
				background: #666;
				width: 35%;

				.icon {
					font-size: 28px;
				}

				.text {
					display: block;
					font-size: 13px;
					margin: 8px 0px;
				}
			}
		}

		.section_list {
			height: auto;

			.list_cell {
				text-align: left;
				width: 100%;
				height: 90rpx;
				border: 1rpx solid #eee;
				display: flex;
				align-items: center;
				justify-content: center;

				.section_item_box {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;

					.menu_icon {
						margin: 20rpx;
					}

					button {
						width: 90%;
						background: white;
						border: none;
						text-align: left;
						padding: 0px;
						margin: 0px;
						line-height: 1.3;
						color: #666;
						font-size: 28rpx
					}

					button:after {
						border: none;
						border-radius: 0;
					}
				}
			}
		}
	}

	.login_popup {
		width: 70vw;
		height: 25vh;
		padding: 26rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;

		text {
			font-size: 30rpx;
		}

		.login_popup_text {
			position: absolute;
			top: 16%;
			padding: 24px;

			text {
				font-size: 28rpx;
				color: #555;
			}
		}

		.login_popup_button {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			bottom: 10%;

			button {
				background: #eee;
				border: none;
				margin: 0 10rpx;
				text-align: left;
				color: #666;
				font-size: 25rpx
			}

			button:after {
				border: none;
				border-radius: 0;
			}
		}
	}
</style>

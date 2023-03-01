export default {
	data() {
		return {
			// 分享参数
			share: {
				title: '小程序',
				path: '/pages/index/index',
				imageUrl: '',
				desc: '欢迎使用',
				content: ''
			}
		}
	},
	/**
	 * 分享朋友
	 *
	 * @param {Object} res
	 */
	onShareAppMessage(res) {
		return {
			...this.share,
			success(res) {
				uni.showToast({
					title: '分享成功',
					icon: 'success',
					mask: true,
					duration: 1200
				})
			},
			fail(res) {
				uni.showToast({
					title: '分享失败',
					icon: 'none',
					mask: true,
					duration: 1200
				})
			}
		}
	},
	/**
	 * 分享到朋友圈
	 *
	 * @param {Object} res
	 *
	 */
	onShareTimeline(res) {
		return {
			...this.share,
			success(res) {
				uni.showToast({
					title: '分享成功',
					icon: 'success',
					mask: true,
					duration: 1200
				})
			},
			fail(res) {
				uni.showToast({
					title: '分享失败',
					icon: 'none',
					mask: true,
					duration: 1200
				})
			}
		}
	},

}

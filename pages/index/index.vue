<template>
	<view class="content">
		<view class="swiper">
			<u-swiper :list="bannerList" keyName="image" mode="dot" indicator-pos="bottomRight"></u-swiper>
		</view>
		<view class="grid-body">
			<u-grid :col="4">
				<u-grid-item v-for="(item, index) in menus" :key="index">
					<u-icon :name="item.icon" :size="46"></u-icon>
					<view class="grid-text">{{item.title}}</view>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				menus: [{
						icon: 'photo',
						title: '你好',
						route: ''
					},
					{
						icon: 'photo',
						title: '你好',
						route: ''
					}, {
						icon: 'photo',
						title: '你好',
						route: ''
					}, {
						icon: 'photo',
						title: '你好',
						route: ''
					}, {
						icon: 'photo',
						title: '你好',
						route: ''
					}, {
						icon: 'photo',
						title: '你好',
						route: ''
					}, {
						icon: 'photo',
						title: '你好',
						route: ''
					}
				],
				bannerList: [{
						image: '/static/swiper/swiper1.jpeg',
						title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
					},
					{
						image: '/static/swiper/swiper2.jpeg',
						title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
					},
					{
						image: '/static/swiper/swiper3.jpeg',
						title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
					}
				]
			}
		},
		methods: {
			//开始跳转
			toRoute(type, url) {
				return new Promise((resolve, reject) => {
					uni[type]({
						url: url,
						animationType: 'pop-in',
						animationDuration: 200,
						success(res) {
							resolve(res);
						},
						fail(err) {
							reject(err);
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.swiper {
			padding: 40rpx;
		}

		.grid-body {
			margin: 10px 0;
			width: 90vw;
			margin: 10rpx 5vw;
		}
	}
</style>

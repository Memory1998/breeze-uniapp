<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration" :circular="true" :indicator-color="indicatorColor"
						:indicator-active-color="indicatorActiveColor">
						<swiper-item v-for="(item, index) in bannerList" :key="index" class="swiper-item-content">
							<view class="swiper-item">
								<image class="banner-img" :src="item.imageUrl" mode="aspectFill"
									@click="jumpTo(item.forwardUrl)"></image>
								<text>{{item.forwardUrl}}</text>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			bannerList: {
				type: Array,
				required: true
			},
			indicatorDots: {
				type: Boolean,
				required: true
			}
		},
		data() {
			return {
				autoplay: true,
				interval: 5000,
				duration: 1000,
				indicatorColor: 'rgba(0,0,0,0.10)',
				indicatorActiveColor: '#7F7F7F',
			};
		},
		methods: {
			jumpTo(url) {
				uni.navigateTo({
					url: `bannerWebView?url=${encodeURIComponent(url)}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		width: 100%;
		height: 17.5vh;
	}

	.swiper-item-content {
		width: 100% !important;
	}

	.swiper-item {
		width: 100vw;
		height: 17.5vh;
		border-radius: 24rpx;
		color: #FFFFFF;
	}

	.banner-img {
		width: 100vw;
		height: 17.5vh;
		border-radius: 24rpx;
	}
</style>

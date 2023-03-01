<script>
	import config from './config'
	import store from '@/store'

	export default {
		onLaunch() {
			this.initData()
		},
		onLoad() {},
		onShow() {},
		onHide() {},
		methods: {
			initData() {
				this.globalData.appInfo = config.appInfo
				this.globalData.appConfig = config.appConfig
			}
		}
	}
</script>

/*每个页面公共css */
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";

	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>

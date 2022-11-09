<script>
	export default {
		onLaunch: function() {},
		onShow: function() {},
		onHide: function() {},
		methods: {}
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

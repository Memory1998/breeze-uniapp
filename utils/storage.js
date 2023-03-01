const storage = {
	set: function(key, value) {
		uni.setStorageSync(key, value)
	},
	get: function(key) {
		return uni.getStorageSync(key)
	},
	remove: function(key) {
		uni.removeStorageSync(key);
	},
	clean: function() {
		uni.clearStorageSync()
	}
}

export default storage

<template>
  <view v-if="params.url">
    <web-view :src="`${params.url}`" :webview-styles="webviewStyles"></web-view>
  </view>
</template>

<script>
export default {
  props: {
    src: {
      type: [String],
      default: null
    }
  },
  data() {
    return {
      params: {},
      webviewStyles: {
        progress: {
          color: "#008fc6"
        }
      }
    }
  },
  onLoad(event) {
    this.params = event
    if (!event.title) {
      return
    }
    uni.setNavigationBarTitle({
      title: event.title
    })
  }
}
</script>

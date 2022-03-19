<template>
  <div>
    <div class="origin" v-show="showType">
      <img
          src="@/assets/demo.jpeg"
          :style="originImg"
          alt=""
      />
      <div v-for="item in boxStyle" :style="item"></div>
    </div>
    <div class="large" v-show="!showType">
      <img
          src="@/assets/demo.jpeg"
          :style="largeImg"
          alt=""
      />
      <div v-for="item in boxStyle" :style="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String
    },
    showType: {
      type: Boolean,
      default: true
    },
    zoomRate: {
      type: Number,
      default: 1
    },
    width: {
      type: String,
      default: '400px'
    },
    height: {
      type: String,
      default: '400px'
    },
    boxStyle: {
      type: Array
    },
    lineStyle: {
      type: String,
      default: '1px solid red'
    }
  },
  data() {
    return {
      originImg: {
        width: this.width,
        height: this.height,
      },
      largeImg: {
        width: this.width,
        height: this.height,
      }
    }
  }
}
</script>

<style scoped>
.origin {

}

.large {

}
</style>
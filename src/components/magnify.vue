<template>
  <div>
    <div class="origin" :style="originImg" v-show="showType">
      <img
          src="@/assets/demo.jpeg"
          :style="originImg"
          alt=""
      />
      <div v-for="item in boxStyle" :style="item"></div>
    </div>
    <div class="large" :style="originImg" v-show="!showType">
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
    showType: {
      type: Boolean,
      default: true
    },
    zoomRate: {
      type: Number,
      default: 1
    },
    zoom: {
      type: Array,
      default: [0, 0]
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    boxStyle: {
      type: Array
    }
  },
  data() {
    return {
      originImg: {
        width: this.width,
        height: this.height,
      },
      largeImg: {
        width: this.width * this.zoomRate,
        height: this.height * this.zoomRate,
        transform: `translate(-${this.zoom[0]}px, -${this.zoom[1]}px)`
      }
    }
  }
}
</script>

<style scoped>
.origin {
  position: absolute;
}

.large {
  overflow: hidden;
  position: absolute;
}

/*.imageStyle {*/
/*  display: inline-block;*/
/*  position: absolute;*/
/*}*/
</style>
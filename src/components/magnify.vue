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
      <div v-for="item in box" :style="item"></div>
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
      type: Number
    },
    height: {
      type: Number
    },
    boxStyle: {
      type: Array
    }
  },
  data() {
    return {
      originImg: {
        width: this.width + 'px',
        height: this.height + 'px',
      },
      largeImg: {
        width: this.width * this.zoomRate + 'px',
        height: this.height * this.zoomRate + 'px',
        transform: `translate(-${this.zoom[0]}px, -${this.zoom[1]}px)`
      },
      box: []
    }
  },
  mounted() {
    this.boxHandle()
  },
  methods: {
    boxHandle() {
      this.box = JSON.parse(JSON.stringify(this.boxStyle))
      this.box.forEach(item => {
        item.width = parseInt(item.width) * this.zoomRate + 'px'
        item.height = parseInt(item.height) * this.zoomRate + 'px'
        item.top = parseInt(item.top) * this.zoomRate + 'px'
        item.left = parseInt(item.left) * this.zoomRate + 'px'
      })
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
</style>
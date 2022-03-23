<template>
  <div :style="originImg" style="display: inline-block;">
    <!--<div class="origin" :style="originImg" v-show="showType">-->
    <!--  <img-->
    <!--      :src="img"-->
    <!--      :style="originImg"-->
    <!--      alt=""-->
    <!--  />-->
    <!--  <div v-for="item in boxStyle" :style="item"></div>-->
    <!--</div>-->
    <!--<div class="large" :style="originImg" v-show="!showType">-->
    <!--  <img-->
    <!--      src="@/assets/demo.jpeg"-->
    <!--      :style="largeImg"-->
    <!--      alt=""-->
    <!--  />-->
    <!--  <div v-for="item in box" :style="item"></div>-->
    <!--</div>-->
    <div
        class='origin'
        :style="originImg"
        ref='originImg'
        @mouseenter="enterHandl"
        @mousewheel="handleMousewheel"
        @mousedown="handleMouseDown"
        @mouseout="outHandle"
    >
      <div ref="largeImg">
        <img
            ref=""
            class="img"
            src="@/assets/demo.jpeg"
            :style="{
            transform: `scale(${this.scale}) translate(${this.translateX}px, ${this.translateY}px)`,
            width: showType ? originImg.width : largeImg.width,
            height: showType ? originImg.height : largeImg.height
          }"
            alt=""
        />
        <div v-show="!showType" v-for="item in box" :style="item"></div>
      </div>
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
    img: {
      type: String
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
      type: Array,
      default: []
    }
  },
  data() {
    return {
      originImg: {
        width: this.width + 'px',
        height: this.height + 'px'
      },
      largeImg: {
        width: this.width * this.zoomRate + 'px',
        height: this.height * this.zoomRate + 'px',
        transform: `translate(-${this.zoom[0] * this.zoomRate}px, -${this.zoom[1] * this.zoomRate}px)`
      },
      box: [],
      scale: 1,
      translateX: 0,
      translateY: 0
    }
  },
  mounted() {
    this.boxHandle()
  },
  methods: {
    boxHandle() {
      if (this.boxStyle.length === 0) return
      this.box = JSON.parse(JSON.stringify(this.boxStyle))
      this.box.forEach(item => {
        item.width = parseInt(item.width) * this.zoomRate + 'px'
        item.height = parseInt(item.height) * this.zoomRate + 'px'
        item.top = (parseInt(item.top) - this.zoom[1]) * this.zoomRate + 'px'
        item.left = (parseInt(item.left) - this.zoom[0]) * this.zoomRate + 'px'
      })
    },
    handleMousewheel(event) {
      if (event.wheelDelta < 0) {
        if (this.scale === 0.2 || this.scale < 0.2) {
          this.scale = 0.2
          return
        }
        this.scale -= 0.1
      } else if (event.wheelDelta > 0) {
        if (this.scale === 2 || this.scale > 2) {
          this.scale = 2
          return
        }
        this.scale += 0.1
      }
    },
    handleMouseDown(event) {
      event.preventDefault()
      if (event.target.tagName !== 'IMG') return
      const div = this.showType ? this.$refs.originImg : this.$refs.largeImg
      let originX = event.screenX
      let originY = event.screenY
      let translateX = this.translateX
      let translateY = this.translateY
      const move = (e) => {
        let afterX = e.screenX
        let afterY = e.screenY
        this.translateX = translateX + (afterX - originX) / this.scale
        this.translateY = translateY + (afterY - originY) / this.scale
      }
      div.addEventListener('mousemove', move)
      div.addEventListener('mouseup', () => {
        div.removeEventListener('mousemove', move)
      })
      div.addEventListener('mouseout', () => {
        div.removeEventListener('mousemove', move)
      })
    },
    enterHandl() {
      document.body.style.overflow = 'hidden'
    },
    outHandle() {
      document.body.style.overflow = 'visible'
    }
  }
}
</script>

<style scoped>
.origin {
  overflow: hidden;
  position: relative;
}

.large {
  overflow: hidden;
  position: absolute;
}

/*.img {*/
/*  height: inherit;*/
/*  width: inherit;*/
/*}*/
</style>
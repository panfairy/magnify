<template>
  <div :style="originImg" style="display: inline-block;">
    <div
        class='origin'
        :style="originImg"
        ref='originImg'
        @mousewheel="handleMousewheel"
        @mousedown="handleMouseDown"
    >
      <div
          @mouseenter="enterHandl"
          @mouseout="outHandle"
          ref="largeImg" :style="{
            transform: `scale(${this.scale}) translate(${this.translateX}px, ${this.translateY}px)`,
            width: originImg.width,
            height: originImg.height
          }"
      >
        <img
            class="img"
            src="@/assets/demo.jpeg"
            :style="{
              width: 'inherit',
              height: 'inherit'
            }"
            alt=""
        />
        <div ref="box" v-if="!showType" v-for="item in box" :style="item"></div>
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
    boxStyle: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      width: '',
      height: '',
      originImg: {
        width: '',
        height: ''
      },
      box: [],
      scale: 1,
      translateX: 0,
      translateY: 0
    }
  },
  mounted() {
    window.onload = () => {
      this.boxHandle()
    }
  },
  methods: {
    imgHandle() {
      this.translateX = 0
      this.translateY = 0
      this.scale = 1
    },
    boxHandle() {
      let el = document.getElementsByClassName('img')[0]
      this.width = JSON.parse(JSON.stringify(el.naturalWidth))
      this.height = JSON.parse(JSON.stringify(el.naturalHeight))
      this.originImg.width = this.width + 'px'
      this.originImg.height = this.height + 'px'
      if (this.boxStyle.length === 0) return
      this.box = JSON.parse(JSON.stringify(this.boxStyle))
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
      const div = this.$refs.originImg
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
}
</style>
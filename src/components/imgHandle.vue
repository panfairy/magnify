<template>
  <div
      class='preview-img-div'
      ref='previewImgDiv'
      @mouseenter="enterHandl"
      @mousewheel="handleMousewheel"
      @mousedown="handleMouseDown"
      @mouseout="outHandle"
  >
    <img
        class="img"
        :src="previewImgUrl"
        :style="{
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`
        }"
        alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImgUrl: require('@/assets/' + 'demo.jpeg'),
      scale: 1,
      translateX: 0,
      translateY: 0
    }
  },
  methods: {
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
      if (event.target.tagName !== 'IMG') {
        return false
      }
      const div = this.$refs.previewImgDiv
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
.preview-img-div {
  width: 400px;
  height: 400px;
  border: 1px solid red;
  overflow: hidden;
}

.img {
  width: 400px;
  height: 400px;
}
</style>

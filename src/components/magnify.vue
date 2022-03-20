<template>
  <div>
    <div class="origin" :style="originImg" v-show="showType">
      <img
          :src="getImg"
          :style="originImg"
          alt=""
      />
      <div v-for="item in boxStyle" :style="item"></div>
    </div>
    <div class="large" :style="originImg" v-show="!showType">
      <img
          :src="getImg"
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
      type: Number || String
    },
    height: {
      type: Number || String
    },
    boxStyle: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // public img: string = require(this.img)
      getImg: require('@/assets/' + this.img),
      originImg: {
        width: this.width + 'px',
        height: this.height + 'px',
      },
      largeImg: {
        width: this.width * this.zoomRate + 'px',
        height: this.height * this.zoomRate + 'px',
        transform: `translate(-${this.zoom[0] * this.zoomRate}px, -${this.zoom[1] * this.zoomRate}px)`
      },
      box: []
    }
  },
  mounted() {
    this.boxHandle()
  },
  // computed: {
  //   getImg() {
  //     return {
  //       ...this.img,
  //       img: this.img && require(`../assets/${this.img}`)
  //     }
  //   }
  // },
  methods: {
    // const unit = {
    //   px: 1,
    //   vm: 1 << 1,
    //   vh: 1 << 2,
    //   rem: 1 << 3
    // }
    // getImg() {
    //   const url = '@/assets/demo.jpeg'
    //   return require(url)
    //   const imgUrl = 'demo.jpeg';
    //   let img = require('../assets/'+imgUrl);
    // },
    boxHandle() {
      if (this.boxStyle.length === 0) return
      this.box = JSON.parse(JSON.stringify(this.boxStyle))
      this.box.forEach(item => {
        item.width = parseInt(item.width) * this.zoomRate + 'px'
        item.height = parseInt(item.height) * this.zoomRate + 'px'
        item.top = (parseInt(item.top) - this.zoom[1]) * this.zoomRate + 'px'
        item.left = (parseInt(item.left) - this.zoom[0]) * this.zoomRate + 'px'
      })
    }
    // isObject(x) {
    //   return Object.prototype.toString.call(x) === '[object Object]'
    // },
    // clone(source) {
    //   if (!isObject(source)) return source
    //   let target = {}
    //   for(let i in source) {
    //     if (source.hasOwnProperty(i)) {
    //       if (typeof source[i] === 'object') {
    //         target[i] = clone(source[i])
    //       } else {
    //         target[i] = source[i]
    //       }
    //     }
    //   }
    //   return target
    // }
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
<template>
  <div>
    <button @click="fn()">切换</button>
    <button v-show="rShow" @click="fn1()">放大</button>
    <div v-show="rShow">
      <magnify
          :width="400"
          :height="400"
          :zoom="[50, 50]"
          :zoom-rate="2"
          :img="'demo.jpeg'"
          :box-style="boxStyle"
          :show-type="lShow"
      ></magnify>
      <magnify
          :width="800"
          :height="800"
          :zoom="[100, 100]"
          :zoom-rate="2"
          :img="'logo.png'"
          :box-style="boxStyle"
          :show-type="lShow"
      ></magnify>
    </div>
    <div v-show="!rShow">
      <img-handle></img-handle>
    </div>
  </div>
</template>

<script>
import magnify from "@/components/magnify"
import imgHandle from "@/components/imgHandle";

export default {
  components: {
    magnify,
    imgHandle
  },
  data() {
    return {
      rShow: true,
      lShow: true,
      boxStyle: [
        {
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: '0',
          left: '0',
          border: '3px solid red'
        },
        {
          width: '150px',
          height: '150px',
          position: 'absolute',
          top: '100px',
          left: '100px',
          border: '2px solid red'
        },
        {
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: '200px',
          left: '200px',
          border: '2px solid red'
        }
      ]
    }
  },
  methods: {
    fn() {
      this.rShow = !this.rShow
    },
    fn1() {
      this.lShow = !this.lShow
    }
  },
};
</script>

<style scoped>
</style>

<template>
  <div>
    <button @click="fn()">切换</button>
    <magnify
        :width="400"
        :height="400"
        :zoom="[50, 50]"
        :zoom-rate="2"
        :img="'@/assets/demo.jpeg'"
        :box-style="boxStyle"
        :show-type="lShow"
    ></magnify>
  </div>
</template>

<script>
import magnify from "@/components/magnify"
// import imgHandle from "@/components/imgHandle";

// :img="'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650432800&t=57d38345811f970efc8ef49bf8d49960'"

export default {
  components: {
    magnify,
    // imgHandle
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

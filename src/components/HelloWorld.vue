<template>
  <div>
    <button @click="fn()">切换</button>
    <magnify
        ref="magnify"
        :zoom="[50, 50]"
        :zoom-rate="2"
        :img="'@/assets/demo.jpeg'"
        :box-style="boxStyle"
        :show-type="rShow"
    ></magnify>
  </div>
</template>

<script>
import magnify from "@/components/magnify"
// import imgHandle from "@/components/imgHandle";

export default {
  components: {
    magnify,
    // imgHandle
  },
  data() {
    return {
      rShow: true,
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
      this.$refs.magnify.imgHandle()
    }
  },
};
</script>

<style scoped>
</style>

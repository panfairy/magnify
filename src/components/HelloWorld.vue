<template>
  <div>
    <button @click="fn()">切换</button>
    <magnify
        ref="magnify"
        :img="'@/assets/demo.jpeg'"
        :box-style="boxStyle"
        :show-type="rShow"
    ></magnify>
  </div>
</template>

<script>
import magnify from "@/components/magnify"

export default {
  components: {
    magnify
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
          border: '1px solid red'
        },
        {
          width: '150px',
          height: '150px',
          position: 'absolute',
          top: '100px',
          left: '100px',
          border: '1px solid red'
        },
        {
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: '200px',
          left: '200px',
          border: '1px solid red'
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

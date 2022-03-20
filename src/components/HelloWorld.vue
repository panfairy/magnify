<template>
  <div>
    <button @click="fn()">放大</button>
    <magnify
        :width="400"
        :height="400"
        :zoom="[50, 50]"
        :zoom-rate="2"
        :img="'demo.jpeg'"
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
          border: '3px solid red'
        },
        {
          width: '150px',
          height: '150px',
          position: 'absolute',
          top: '100px',
          left: '100px',
          border: '2px solid red'
        }
      ]
    }
  },
  methods: {
    fn () {
      this.rShow = !this.rShow
    }
  },
};
</script>

<style scoped>
</style>

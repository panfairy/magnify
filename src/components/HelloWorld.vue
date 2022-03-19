<template>
  <div>
<!--    <div class="left">-->
<!--      <img class="leftImg" src="@/assets/demo.jpeg" alt="" />-->
<!--      <div v-show="topShow" class="top" :style="topStyle"></div>-->
<!--      <div>-->
<!--        <button @click="magnify(0, 0)">放大(0, 0)-(100, 100)两倍</button>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div v-show="rShow" class="right">-->
<!--      <img-->
<!--          :style="r_img"-->
<!--          class="rightImg"-->
<!--          src="@/assets/demo.jpeg"-->
<!--          alt=""-->
<!--      />-->
<!--      <div v-show="topShow" class="top" :style="rightStyle"></div>-->
<!--    </div>-->
    <button @click="fn()">放大</button>
    <magnify
        :width="400"
        :height="400"
        :zoom="[0, 0]"
        :zoom-rate="2"
        :box-style="boxStyle"
        :show-type="rShow"
    ></magnify>
    <yuanxian style="position: relative; top:800px;"></yuanxian>
  </div>
</template>

<script>
import magnify from "@/components/magnify";
import yuanxian from "@/components/yuanxian";

export default {
  components: {
    magnify,
    yuanxian
  },
  data() {
    return {
      topStyle: { transform: '' },
      rightStyle: {},
      r_img: {},
      topShow: false,
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
      // this.boxStyle.forEach(item => {
      //   item.transform = `translate(${item.top}, ${item.left})`
      // })
      this.rShow = !this.rShow
    },
    magnify (topX, topY) {
      this.topStyle.transform = `translate(${topX}px, ${topY}px)`
      this.rightStyle = `width: 400px; height: 400px;`
      this.r_img.transform = `translate(-${2 * topX}px, -${2 * topY}px)`
      this.rShow = !this.rShow
      this.topShow = !this.topShow
    }
  },
};
</script>

<style scoped>
  .rightImg {
    display: inline-block;
    width: 800px;
    height: 800px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .right {
    margin-left: 412px;
    /*width: 400px;*/
    /*height: 400px;*/
    width: 800px;
    height: 800px;
    border: 2px solid red;
    position: relative;
    overflow: hidden;
  }

  .top {
    width: 200px;
    height: 200px;
    border: 1px solid red;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
  }

  .leftImg {
    width: 400px;
    height: 400px;
    display: inline-block;
  }

  .left {
    width: 400px;
    height: 400px;
    border: 1px solid teal;
    float: left;
    position: relative;
  }
</style>

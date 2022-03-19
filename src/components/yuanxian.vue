<template>
  <div>
    <div class="left">
      <img class="leftImg" src="@/assets/demo.jpeg" alt="" />
      <div v-show="topShow" class="top" :style="topStyle"></div>
    </div>
    <div v-show="rShow" class="right">
      <img
          :style="r_img"
          class="rightImg"
          src="@/assets/demo.jpeg"
          alt=""
      />
      <div v-show="topShow" class="top" :style="topStyle"></div>
    </div>
    <button style="position: relative; top: 400px;" @click="magnify(0, 0)">123321</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topStyle: { transform: "" },
      r_img: {},
      topShow: false,
      rShow: false,
    };
  },
  methods: {
    magnify (topX, topY) {
      this.topStyle.transform = `translate(${topX}px, ${topY}px)`
      this.r_img.transform = `translate(-${2 * topX}px, -${2 * topY}px)`
      this.rShow = !this.rShow
      this.topShow = !this.topShow
    }
  },
};
</script>

<style scoped>
/* 放大的图片，通过定位将左上角定位到(0,0) */
.rightImg {
  display: inline-block;
  width: 800px;
  height: 800px;
  position: absolute;
  top: 0;
  left: 0;
} /* 右边的区域图片放大空间 */
.right {
  margin-left: 412px;
  width: 400px;
  height: 400px;
  border: 1px solid red;
  position: relative;
  overflow: hidden;
} /* 一个最高层层罩 */
.maskTop {
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
} /* 层罩，通过定位将左上角定位到(0,0) */
.top {
  width: 200px;
  height: 200px;
  background-color: lightcoral;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
} /* 原图的显示 */
.leftImg {
  width: 400px;
  height: 400px;
  display: inline-block;
} /* 原图的容器 */
.left {
  width: 400px;
  height: 400px;
  border: 1px solid teal;
  float: left;
  position: relative;
}
</style>

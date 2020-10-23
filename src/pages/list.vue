<template>
  <view
    class="bg"
    id="list"
    v-if="isShow"
    :style="{ height: windowHeight + 'px', width: windowWidth + 'px' }"
    :animation="animationData"
  >
    <ul>
      <li v-for="(v, i) in list" :key="i">
        <a href="javascript:;" @click="to(v, i)">{{ v.name }}</a>
      </li>
    </ul>
    <view class="icon_close">
      <image @click="close" src="../static/close.png" />
    </view>
  </view>
</template>

<script>
/**
 * 菜单列表
*/
export default {
  name: "",
  data() {
    return {
      list: [
        {
          name: "111",
          link: "index",
        },
        {
          name: "111",
          link: "canIDo",
        },
        {
          name: "222",
          link: "aboutMe",
        },
        {
          name: "333",
          link: "recentWorks",
        },
        {
          name: "444",
          link: "skills",
        },
        {
          name: "555",
          link: "works",
        },
        {
          name: "666",
          link: "gameOver",
        },
      ],
      windowHeight: this.$store.state.windowHeight,
      windowWidth: this.$store.state.windowWidth,
      animationData: {},
      isShow: false,
    };
  },
  methods: {
    to(v, i) {
      uni.navigateTo({
        url: v.link,
        animationType: "slide-in-bottom",
        animationDuration: 200,
      });
    },
    close() {
      this.hideAnimation();
    },
    hideAnimation() {
      var animation = uni.createAnimation({
        duration: 300,
        timingFunction: "linear",
        transformOrigin: "100% 0",
      });
      this.animation = animation;
      animation.scale(1, 1).step();
      this.animationData = animation.export();
      setTimeout(() => {
        animation.scale(0, 0).step();
        this.animationData = this.animation.export();
      }, 300);
    },
    showAnimation() {
      this.isShow = true;
      var animation = uni.createAnimation({
        duration: 300,
        timingFunction: "linear",
        transformOrigin: "100% 0",
      });
      this.animation = animation;
      animation.scale(0, 0).step();
      this.animationData = animation.export();
      setTimeout(() => {
        animation.scale(1, 1).step();
        this.animationData = this.animation.export();
      }, 300);
    },
  },
};
</script>

<style>
#list {
  background-color: rgba(118, 50, 51, 1); /* 浏览器不支持时显示 */
  background-image: linear-gradient(
    rgba(118, 50, 51, 1),
    rgba(118, 50, 51, 0.7)
  );
  flex-direction: row;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
}
.bg ul {
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 90px 0 0 0;
}
.bg li {
  margin-bottom: 36px;
}
.bg li a {
  color: #fff;
  line-height: 20px;
  font-size: 20px;
  letter-spacing: 2px;
}
.bg li:nth-of-type(1) a {
  font-size: 28px;
  font-weight: 500;
}
.icon_close {
  text-align: center;
  height: 1.5rem;
}
.icon_close image {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
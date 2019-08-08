<template>
  <view
    class="bg"
    id="list"
    :style="{height:windowHeight + 'px',width:windowWidth + 'px'}"
    :animation="animationData"
  >
    <ul>
      <li v-for="(v,i) in list">
        <!-- <navigator animation-type="pop-in" animation-duration="300" :url="v.link">{{v.name}}</navigator> -->
        <a href="javascript:;" @click="to(v,i)">{{v.name}}</a>
      </li>
    </ul>
    <view class="icon_close">
      <image @click="close" src="../static/close.png" />
    </view>
  </view>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [
        {
          name: "叶良辰",
          link: "index"
        },
        {
          name: "我会什么",
          link: "canIDo"
        },
        {
          name: "关于我",
          link: "aboutMe"
        },
        {
          name: "我的作品",
          link: "recentWorks"
        },
        {
          name: "我的技能",
          link: "skills"
        },
        {
          name: "工作经历",
          link: "works"
        },
        {
          name: "请联系我",
          link: "gameOver"
        }
      ],
      windowHeight: this.$store.state.windowHeight,
      windowWidth: this.$store.state.windowWidth,
      animationData: {}
    };
  },
  methods: {
    to(v, i) {
      uni.navigateTo({
        url: v.link,
        animationType: "slide-in-bottom",
        animationDuration: 200
      });
    },
    close() {
      uni.navigateTo({
        url: 'index',
        animationType: "slide-in-bottom",
        animationDuration: 200
      });
    }
  },
  onShow: function() {
    var animation = uni.createAnimation({
      duration: 400,
      timingFunction: "linear"
    });
    this.animation = animation;
    animation.scale(0, 0).step();
    this.animationData = animation.export();
    setTimeout(
      function() {
        animation.scale(1, 1).step();
        this.animationData = animation.export();
      }.bind(this),
      400
    );
  }
};
</script>

<style>
.bg {
  background: rgba(118, 50, 51, 0.9);
  flex-direction: row;
  overflow-y: hidden;
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
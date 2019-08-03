<template>
  <view id="rencentWork" :style="{height:windowHeight + 'px',width:windowWidth + 'px'}">
    <view class="tit">
      <view>
        <text class="left">RECENT</text>
        <text class="right">WORKS</text>
      </view>
      <view>
        <image src="../static/about1.png" />
      </view>
    </view>
    <view class="rw_box">
      <view v-for="(v,i) in list">
        <image :src="v.img" />
      </view>
    </view>
    <view class="btn">
      <image @click="next" src="../static/button.png" />
    </view>
  </view>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      windowHeight: this.$store.state.windowHeight,
      windowWidth: this.$store.state.windowWidth,
      list: [
        {
          img: require("../static/img/0130245d3e38cea80120695cbd5c36.gif")
        },
        {
          img: require("../static/img/014ab75d3e38d0a80120695c137b17.gif")
        },
        {
          img: require("../static/img/0170145d3e38cba80120695ccc4669.gif")
        },
        {
          img: require("../static/img/018b865d3e38c9a8012187f44eb478.gif")
        },
        {
          img: require("../static/img/019f835d3e38cba8012187f4d0b9bc.gif")
        },
        {
          img: require("../static/img/01dfbb5d3e38d0a8012187f46d3d9c.gif")
        }
      ]
    };
  },
  methods: {
    next() {
      uni.navigateTo({
        url: "skills"
      });
    }
  }
};
</script>

<style  scoped>
#rencentWork {
  background: #fff;
}
#rencentWork .rw_box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#rencentWork .rw_box view {
  width: 50%;
  height: 140px;
  box-sizing: border-box;
}
#rencentWork .rw_box view image {
  height: 100%;
  width: 100%;
}
</style>
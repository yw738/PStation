<template>
  <view id="gameOve" :style="{height:windowHeight + 'px',width:windowWidth + 'px'}">
    <view class="tit">
      <view>
        <text class="left2">GAME</text>
        <text class="right">OVER</text>
      </view>
      <view>
        <image src="../static/about1.png" />
      </view>
    </view>
    <view class="over_box">
      <image src='../static/over_bg.png'/>
      <view class="tips">
        <text>Please call me</text>
      </view>
      <view class="call_phone">
        <text>18582459245</text>
      </view>
    </view>
    <view class="over_bot">
       <image src='../static/over_bot.png'/>
    </view>
  </view>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      windowHeight: this.$store.state.windowHeight,
      windowWidth: this.$store.state.windowWidth
    };
  },
  methods: {
    next() {
      uni.navigateTo({
        url: "gameOver"
      });
    }
  }
};
</script>

<style scoped>
#gameOve {
  background: #29282e;
}
.over_box{
  text-align: center;
  padding-top: 80px; 
}
.over_box image{
  width: 150px;
  height: 176px;
}
.over_box .tips{
  margin: 40px 0 20px;
  text-align: center;
  font-size: 16px;
  line-height: 18px;
  color: #939297;
  font-weight: 600;
  letter-spacing: 1px;
}
.over_box .call_phone{
  letter-spacing: 8px;
  font-size: 14px;
  color: #ec4c3c;
}
.over_bot{
  position: fixed;
  bottom: 5px;
  left: 0;
  height: 44px;
  width: 100%;
  z-index: 33;
}
.over_bot image{
  width: 100%;
  height: 100%;
}
</style>
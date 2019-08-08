<template>
  <view id="iDo" :style="{height:windowHeight + 'px',width:windowWidth + 'px'}">
    <view class="tit">
      <view>
        <text class="left2">WHAT</text>
        <text class="left2">CAN</text>
        <text class="right">I</text>
        <text class="right">DO</text>
      </view>
      <view>
        <image src="../static/about1.png" />
      </view>
    </view>
    <view class="sec" :animation="animationData">
      <view class="left">
        <view class="box">
          <view class="fk_box active">
            <image src='../static/html5.png' />
          </view>
        </view>
        <view class="box">
          <view class="fk_box">
            <image src='../static/js2.png' />
          </view>
        </view>
      </view>
      <view class="right">
        <view class="box">
          <view class="fk_box ">
            <image src='../static/vuejs2.png' />
          </view>
        </view>
        <view class="box">
          <view class="fk_box">
            <image src='../static/react2.png' />
          </view>
        </view>
      </view>
    </view>
    <view class="img_box" :animation="animationData2">
      <image src='../static/mac.png'/>
    </view>
    <view class="btn">
      <image @click="next" src="../static/button0.png" />
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
      animationData: {},
      animationData2: {},
    };
  },
  methods: {
    next() {
      uni.navigateTo({
        url: "recentWorks"
      });
    }
  },
  onShow: function() {
    var animation = uni.createAnimation({
      duration: 500,
      timingFunction: "linear"
    });
    this.animation = animation;
    animation.translateX(100).step();
    this.animationData = animation.export();
    setTimeout(
      function() {
        animation.translateX(0).step();
        this.animationData = animation.export();
      }.bind(this),
      400
    );
    var animation2 = uni.createAnimation({
      duration: 500,
      timingFunction: "linear"
    });
    this.animation = animation2;
    setTimeout(
      function() {
        animation2.scale(1,1).step();
        this.animationData2 = animation2.export();
      }.bind(this),
      400
    );
  }
};
</script>

<style>
#iDo {
  background: #29282e;
}
#iDo .sec {
  height: 204px;
  box-sizing: border-box;
  padding: 10px 50px;
}
.fk_box {
  width: 64px;
  height: 64px;
  transform: rotate(45deg);
  background: #43424a;
  text-align: center;
  position: relative;
  border-radius: 1px;
}
.fk_box image {
  height: 22px;
  width: 22px;
  position: absolute;
  left: calc(50% - 11px);
  top: calc(50% - 11px);
  transform: rotate(-45deg);
}
.fk_box.active {
  background: #e84c3d;
}
#iDo .box{
    float: left;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#iDo .sec .right{
  float: right;
  margin: 2px 5px 0 0;
}
#iDo .sec .left{
  float: left;
  
}
#iDo .img_box{
  padding: 10px;
  box-sizing: border-box;
  height: 250px;
  transform: scale(0)
}
#iDo .img_box image{
  width: 100%;
  height: 100%;
}
</style>
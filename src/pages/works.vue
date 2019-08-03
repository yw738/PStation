<template>
  <view id="work" :style="{height:windowHeight + 'px',width:windowWidth + 'px'}">
     <view class="tit">
      <view>
        <text class="left">MY</text>
        <text class="right">WORK</text>
      </view>
      <view>
        <image src="../static/about1.png" />
      </view>
    </view>
    <view class="wk_box">
      <view class="box">
        <view class="left">
          <view>
            <image src='../static/work.png'/>
          </view>
        </view>
        <view class="right marL20">
          <view class="time">
            <text >2001.11-TODAY</text>
          </view>
           <view class="time">
            <text>XXX科技有限公司</text>
          </view>
          <view class="txt">
            <text>《爱乐之城》是由达米恩·查泽雷执导，瑞恩·高斯林、艾玛·斯通、约翰·传奇、罗丝玛丽·德薇特、芬·维特洛克、水野索诺娅、J·K·西蒙斯主演的喜剧歌舞片，于2016年12月16日...</text>
          </view>
        </view>
      </view>
       <view class="box">
        <view class="right ">
          <view class="time">
            <text >2001.11-TODAY</text>
          </view>
           <view class="time">
            <text>XXX科技有限公司</text>
          </view>
          <view class="txt">
            <text>《爱乐之城》是由达米恩·查泽雷执导，瑞恩·高斯林、艾玛·斯通、约翰·传奇、罗丝玛丽·德薇特、芬·维特洛克、水野索诺娅、J·K·西蒙斯主演的喜剧歌舞片，于2016年12月16日...</text>
          </view>
        </view>
          <view class="left marL20">
          <view>
            <image src='../static/work.png'/>
          </view>
        </view>
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
  background: #fff;
}
.wk_box{
  padding: 0 12px;
  box-sizing: border-box;
}
.wk_box .box{
  display: inline-block;
  width: 100%;
  margin-bottom: 40px;
}
.wk_box .box>.left,.box>.right{
  float: left;
}
.wk_box .box>.left view{
  width: 156px;
  height: 156px;
  border: 4px solid #fd6357;
  margin-left: 11px;
  box-sizing: border-box;
}
.wk_box .box>.left view image{
  width: 100%;
  height: 100%;
  margin: -15px 0 0 -15px;
}
.wk_box .box>.right{
  width: calc(100% - 156px - 11px - 4px - 20px);
  font-size: 12px;
}
.box>.right .time{
  color: #202020;
  font-weight: 500;
  text-align: right;
}
.box>.right.marL20 .time{
 text-align: left;
}
.box>.right .txt{
  line-height: 18px;
  color: #757575;
  margin-top: 6px;
}
.marL20{
  margin-left: 20px;
}
</style>
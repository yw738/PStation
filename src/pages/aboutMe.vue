<template>
  <view id="about_me" :style="{height:windowHeight + 'px',width:windowWidth + 'px'}">
    <view class="tit">
      <view>
        <text class="left">ABOUT</text>
        <text class="right">ME</text>
      </view>
      <view>
        <image src="../static/about1.png" />
      </view>
    </view>
    <view class="box">
      <view class="top">
        <text>赵日天</text>
        <text class="bron">1998.01.04</text>
      </view>
      <view class="phone">
        <view>
          <image src='../static/QQ.png' />
          <text>738751286</text>
        </view>
        <view>
          <image src='../static/wc.png' />
          <text>18582459245</text>
        </view>
      </view>
      <view class="tips">
        <text>国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。阿里巴巴体验团队倾力打造,设计和前端开发的便捷工具</text>
      </view>
      <view class="skill">
        <view>
          <image src='../static/js.png'/>
        </view>
        <view>
          <image src='../static/vue.png'/>
        </view>
        <view>
          <image src='../static/react.png'/>
        </view>
      </view>
    </view>
    <view class="btn">
      <image @click="toIDo" src='../static/button.png'/>
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
  methods:{
    toIDo(){
       uni.navigateTo({
        url: "canIDo",
      });
    }
  }
};
</script>

<style scope>
#about_me {
  background: #fff;
  overflow-y: hidden;
  background: url('../static/about_g.png')
}
#about_me .box {
  width: 270px;
  padding: 0 15px;
  box-sizing: border-box;
  color: #363636;
  letter-spacing: 1px;
  float: right;
}
.box .top {
  color: #1f1f1f;
  height: 80px;
  line-height: 80px;
  font-size: 26px;
}
.box .top .bron {
  margin-left: 10px;
  font-size: 14px;
  color: #595959;
}
.phone{
  height: 70px;
  box-sizing: border-box;
  padding: 10px 0;
}
.phone>view{
  height: 20px;
  width: 100%;
}
.phone>view:nth-of-type(1){
  margin-bottom: 10px;
}
.phone image{
  float: left;
  height: 20px;
  width: 20px;
}
.phone text{
   float: left;
   height: 100%;
   line-height: 20px;
   margin-left: 8px;
   color: #242424;
   font-size: 13px;
}
.tips{
  padding: 24px 0;
  font-size: 14px;
  line-height: 25px;
  color: #797979;
}
.skill{

  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.skill image{
  height: 60px;
  width: 60px;
}

</style>
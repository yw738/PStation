
<template>
  <view
    id="index"
    :style="{ height: windowHeight + 'px', width: windowWidth + 'px' }"
  >
    <!-- 菜单按钮 -->
    <view class="list" @click="showlist">
      <view class="listBox">
        <view></view>
        <view></view>
        <view></view>
      </view>
    </view>
    <!-- 背景 -->
    <view
      
      class="index_bg"
      :style="{ height: windowHeight + 'px', width: windowWidth + 'px' }"
    />
    <!-- 下一页按钮 -->
    <view class="btn">
      <image @click="next" src="../static/button0.png" />
    </view>
    <view class="index_tips" >
      <view>
        <text>W</text>
        <text>E</text>
      </view>
      <view>
        <text>l</text>
        <text>C</text>
      </view>
      <view>
        <text>O</text>
        <text>M</text>
      </view>
      <view>
        <text>E</text>
        <text>!</text>
      </view>
    </view>
    <List ref="listCom"/>
  </view>
</template>

<script>
/**
 * 首页
*/
import { debuglog } from "util";
import List from "./list"
export default {
  components:{List},
  data() {
    return {
      windowHeight: this.$store.state.windowHeight,
      windowWidth: this.$store.state.windowWidth,
    };
  },
  onLoad() {},
  methods: {
    next() {
      uni.navigateTo({
        url: "aboutMe",
      });
    },
    showlist() {
      // uni.navigateTo({
      //   url: "list",
      // });
      this.$refs.listCom.showAnimation();
    },
  },
};
</script>

<style>
#index {
  overflow-y: hidden;
}
.index_bg {
  background: #17a1ff;
}
.list {
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 99;
  background: #e84c3f;
  /* padding: ; */
  padding: 0.72rem 0.7rem;
  box-sizing: border-box;
}
.listBox {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: column;
}
.listBox view {
  background: #fff;
  width: 100%;
  height: 2px;
}
.index_tips {
  width: 200px;
  height: 380px;
  border: 4px solid #fefefc;
  box-sizing: border-box;
  /* border-top: none; */
  position: fixed;
  left: calc(50% - 100px);
  top: calc(50% - 190px);
  background: rgba(196, 197, 201, 0.1);
}
.index_tips view text {
  float: left;
  width: 50%;
  text-align: center;
  font-size: 36px;
  line-height: 95px;
  color: #fefefc;
  font-weight: bold;
}
</style>

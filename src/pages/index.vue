
<template>
  <view id="index" :style="{height:windowHeight + 'px',width:windowWidth + 'px'}">
    <view>
      <image class="list" @click="list" src="../static/list.png" />
    </view>
    <image
      class="index"
      :style="{height:windowHeight + 'px',width:windowWidth + 'px'}"
      src="https://img.zcool.cn/community/019d9d5aaf0395a80121246d4a1a1b.png@1280w_1l_2o_100sh.png"
    />
    <!-- https://img.zcool.cn/community/019d9d5aaf0395a80121246d4a1a1b.png@1280w_1l_2o_100sh.png -->

    <!-- https://img.zcool.cn/community/019ed25d1ee199a801207640caaaad.jpg@2o.jpg -->
    <view class="btn">
      <image @click="next" src="../static/button0.png" />
    </view>
    <view class="index_tips">
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
  </view>
</template>

<script>
import { debuglog } from "util";
export default {
  data() {
    return {
      windowHeight: this.$store.state.windowHeight,
      windowWidth: this.$store.state.windowWidth
    };
  },
  onLoad() {},
  methods: {
    next() {
      uni.navigateTo({
        url: "aboutMe"
      });
    },
    list() {
      uni.navigateTo({
        url: "list"
      });
    },
  },
};
</script>

<style>
#index {
  overflow-y: hidden;
}

.list {
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
}
.index_tips {
  width: 200px;
  height: 380px;
  border: 4px solid #fefefc;
  box-sizing: border-box;
  border-top: none;
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

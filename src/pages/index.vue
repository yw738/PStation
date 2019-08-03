
<template>
  <view id="index" 
  :style="{height:windowHeight + 'px',width:windowWidth + 'px'}"
  >
    <view>
      <image class="list" @click="list"  src="../static/list.png" />
    </view>
    <image
      class="index"
      :style="{height:windowHeight + 'px',width:windowWidth + 'px'}"
      src="../static/index.png"
    />
    <view class="btn">
      <image @click="next" src="../static/button0.png" />
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
  onLoad() {
   
  },
  methods: {
    next() {
      uni.navigateTo({
        url: "aboutMe",
      });
    },
    list(){
       uni.navigateTo({
        url: "list",
      });
    }
  }
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

</style>

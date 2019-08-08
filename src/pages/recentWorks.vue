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
      <view v-for="(v,i) in list" class="pp">
        <image :src="v.img" />
      </view>
    </view>
    <view class="btn">
      <image @click="next" src="../static/button.png" />
    </view>
  </view>
</template>

<script>
import { setTimeout } from "timers";
import { Promise } from "q";
export default {
  name: "",
  data() {
    return {
      windowHeight: this.$store.state.windowHeight,
      windowWidth: this.$store.state.windowWidth,
      list: [
        {
          img:
            "https://img.zcool.cn/community/0130245d3e38cea80120695cbd5c36.gif"
        },
        {
          img:
            "https://img.zcool.cn/community/01dfbb5d3e38d0a8012187f46d3d9c.gif"
        },
        {
          img:
            "https://img.zcool.cn/community/014ab75d3e38d0a80120695c137b17.gif"
        },
        {
          img:
            "https://img.zcool.cn/community/0170145d3e38cba80120695ccc4669.gif"
        },
        {
          img:
            "https://img.zcool.cn/community/018b865d3e38c9a8012187f44eb478.gif"
        },
        {
          img:
            "https://img.zcool.cn/community/014b715d3e38c8a80120695c1c82d6.gif"
        }
      ]
    };
  },
  methods: {
    next() {
      uni.navigateTo({
        url: "skills"
      });
    },
    timerOut(DOM) {
      return new Promise(resolve => {
        setTimeout(function() {
          DOM.style.transform = "translateX(0)";
          resolve();
        }, 200);
      });
    }
  },
  onReady() {
    let that = this;
    // setTimeout(function() {
      document.querySelector(".rw_box").style.opacity = 1;
      that.timerOut(document.querySelectorAll(".rw_box .pp")[0]).then(() => {
        that.timerOut(document.querySelectorAll(".rw_box .pp")[1]).then(() => {
          that.timerOut(document.querySelectorAll(".rw_box .pp")[2]).then(() => {
              that.timerOut(document.querySelectorAll(".rw_box .pp")[3]).then(() => {
                  that.timerOut(document.querySelectorAll(".rw_box .pp")[4]).then(() => {
                    that.timerOut(document.querySelectorAll(".rw_box .pp")[5]).then(() => {
                    
                    });
                  });
                });
            });
        });
      });
    // }, 200);
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
  opacity: 0;
  transition: all ease 1s;
}
#rencentWork .rw_box view {
  width: 50%;
  height: 140px;
  box-sizing: border-box;
  transform: translateX(300px);
}

#rencentWork .rw_box view image {
  height: 100%;
  width: 100%;
}
.pp {
  transition: all ease 1s;
}
</style>
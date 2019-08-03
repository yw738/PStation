<template>
  <view id="skill" :style="{height:windowHeight + 'px',width:windowWidth + 'px'}">
    <view class="tit">
      <view>
        <text class="left2">MY</text>
        <text class="right">SKILLS</text>
      </view>
      <view>
        <image src="../static/about1.png" />
      </view>
    </view>
    <view class="sk_box">
      <view>
        <canvas canvas-id="canvasPie" style="width:100%;height:100%"></canvas>
      </view>
      <view>
        <canvas canvas-id="canvasPie2" style="width:100%;height:100%"></canvas>
      </view>
      <view>
        <canvas canvas-id="canvasPie3" style="width:100%;height:100%"></canvas>
      </view>
      <view>
        <canvas canvas-id="canvasPie4" style="width:100%;height:100%"></canvas>
      </view>
    </view>
    <view class="more">
      <view class="txt">
        <text>Maybe I will not much,but enough to cope work,study hard,every day</text>
      </view>
      <view>
        <view class="button">MORE</view>
      </view>
    </view>
    <view class="btn">
      <image @click="next" src="../static/button0.png" />
    </view>
  </view>
</template>

<script>
import uCharts from "../static/js/u-charts.min.js";
export default {
  name: "",
  data() {
    return {
      windowHeight: this.$store.state.windowHeight,
      windowWidth: this.$store.state.windowWidth,
      series: {
        data: [
          {
            name: "正确率",
            data: 0.86,
            color: "#e74b3c"
          }
        ],
        title: {
          name: "HTML",
          color: "#e84c3d",
          fontSize: 26
        }
      },
      series2: {
        data: [
          {
            name: "正确率",
            data: 0.8,
            color: "#999999"
          }
        ],
        title: {
          name: "JS",
          color: "#999999",
          fontSize: 26
        }
      },
      series3: {
        data: [
          {
            name: "正确率",
            data: 0.8,
            color: "#999999"
          }
        ],
        title: {
          name: "VUE",
          color: "#999999",
          fontSize: 26
        }
      },
      series4: {
        data: [
          {
            name: "正确率",
            data: 0.76,
            color: "#999999"
          }
        ],
        title: {
          name: "REACT",
          color: "#999999",
          fontSize: 26
        }
      }
    };
  },
  methods: {
    next() {
      uni.navigateTo({
        url: "works"
      });
    },
    showPie(canvasId, data, title, bgColor) {
      this.cWidth = uni.upx2px(360);
      this.cHeight = uni.upx2px(300);
      let _self = this;
      let Color = bgColor || "#4f2f32";
      var canvasPie = new uCharts({
        $this: _self,
        canvasId: canvasId,
        type: "arcbar",
        fontSize: 15,
        legend: { show: false },
        pixelRatio: 1,
        series: data,
        animation: true,
        width: this.cWidth,
        height: this.cHeight,
        dataLabel: true,
        title: title,
        extra: {
          arcbar: {
            type: "circle", //整圆类型进度条图
            width: 12, //圆弧的宽度
            startAngle: 0.5, //整圆类型只需配置起始角度即可
            backgroundColor: Color
          }
        }
      });
    }
  },
  onShow() {
    this.showPie("canvasPie", this.series.data, this.series.title);
    this.showPie("canvasPie2", this.series2.data, this.series2.title, "#39383d");
    this.showPie("canvasPie3", this.series3.data, this.series3.title, "#39383d");
    this.showPie("canvasPie4", this.series4.data, this.series4.title, "#39383d");
  }
};
</script>

<style scoped>
#skill {
  background: #29282e;
}
.sk_box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 330px;
}
.sk_box view {
  width: 50%;
  height: 50%;
  box-sizing: border-box;
}
.more {
  padding: 0 40px;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: #6a6a6a;
  padding: 6px 40px;
}
.more .button {
  background: none;
  border: 2px solid #e84c3d;
  border-radius: 1px;
  color: #e84c3d;
  height: 30px;
  width: 96px;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 30px;
  margin: 20px auto 0;
}
</style>
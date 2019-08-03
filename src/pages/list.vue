<template>
  <view class="bg" id="list" :style="{height:windowHeight + 'px',width:windowWidth + 'px'}">
    <ul>
      <li v-for="(v,i) in list">
        <router-link :to='v.link'>{{v.name}}</router-link>
      </li>
    </ul>
    <view class="icon_close">
     <image src='../static/close.png'/>
    </view>
  </view>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [
        {
          name: "叶良辰",
          link: ""
        },
        {
          name: "我会什么",
          link: ""
        },
        {
          name: "关于我",
          link: ""
        },
        {
          name: "我的作品",
          link: ""
        },
        {
          name: "我的技能",
          link: ""
        },
        {
          name: "工作经历",
          link: ""
        },
        {
          name: "请联系我",
          link: ""
        }
      ],
      windowHeight: this.$store.state.windowHeight,
      windowWidth: this.$store.state.windowWidth
    };
  },
};
</script>

<style>
.bg {
  background: rgba(118,50,51,.9);
  flex-direction: row;
   overflow-y: hidden;
}
.bg ul{
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 90px 0 0 0;
}
.bg li{
  margin-bottom: 36px;
}
.bg li a{
  color: #fff;
  line-height: 20px;
  font-size: 20px;
  letter-spacing: 2px;
}
.bg li:nth-of-type(1) a{
  font-size: 28px;
  font-weight: 500;
}
.icon_close{
  text-align: center;
  height:1.5rem;
}
.icon_close image{
  height: 1.5rem;
  width: 1.5rem;
}
</style>
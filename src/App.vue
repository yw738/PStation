<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
    let that = this;
    uni.getSystemInfo({
      success: function(res) {
        that.$store.commit("width", res);
      }
    });
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {}
};
</script>

<style>
/*每个页面公共css */
* {
  list-style: none;
}
#index,
#about_me,
#list,
#iDo,
#gameOve,
#rencentWork,
#skill,
#work {
  position: fixed;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 3;
}
a {
  text-decoration: none;
}
ul {
  padding: 0;
  margin: 0;
}
.tit {
  text-align: center;

  font-size: 20px;
  line-height: 20px;
  letter-spacing: 1px;
  height: 130px;
  padding: 38px 0;
  box-sizing: border-box;
  font-weight: 600;
}
.tit > view {
  height: 50%;
}
.tit .left {
  color: #3f3f3f;
}
.tit .left2 {
  color: #fff;
  margin-left: 8px;
}
.tit .right {
  color: #e84c3d;
  margin-left: 8px;
}
.tit image {
  height: 12px;
  width: 78px;
}
/* 按钮 */
.btn {
  position: fixed;
  bottom: 26px;
  width: 100%;
  left: 0;
  text-align: center;
  z-index: 66;
}
.btn image {
  height: 34px;
  width: 34px;
}
</style>

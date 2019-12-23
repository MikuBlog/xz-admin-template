<template>
  <div class="icon-box">
    <el-tooltip
      class="item"
      effect="dark"
      content="全屏"
      placement="bottom"
      v-show="defaultConfig.fullScreen"
    >
      <svg-icon
        icon-class="全屏"
        style="width: 24px; height: 24px; top: 1px"
        @click.native="fullScreen"
      />
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFullScreen: false,
      isMini: false
    };
  },
  methods: {
    // 设置全屏与取消全屏
    fullScreen() {
      this.isFullScreen ? this.$cancelFullScreen() : this.$setFullScreen();
      this.isFullScreen = !this.isFullScreen;
    }
  }
};
</script>

<style lang="scss" scoped>
.search-menu-input {
  position: relative;
  display: inline-block;
  top: -8px;
  left: -19px;
}
.el-icon-s-tools,
.el-icon-question,
.el-icon-delete-solid {
  position: relative;
  top: 1px;
  margin-right: 0.8rem;
  font-size: 25px;
}
.el-icon-full-screen,
.el-icon-s-tools,
.iconfullscreenexit,
.el-icon-question {
  cursor: pointer;
  transition: 0.3s;
}
.el-icon-full-screen:active {
  color: rgb(19, 180, 255);
}
.el-icon-s-tools:active {
  color: rgb(19, 180, 255);
}
.el-icon-question:active {
  color: rgb(19, 180, 255);
}
.iconfullscreenexit:active {
  color: rgb(19, 180, 255);
}
.el-icon-full-screen {
  font-size: 22px;
}
</style>
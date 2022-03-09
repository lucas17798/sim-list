<template>
  <div class="header flex-between">
    <div>
      <button class="icon flex-center" title="新窗口">
        <i class="iconfont flex-center icon-add"></i>
      </button>
    </div>
    <div class="drag-header flex1 flex-center">
      <transition>
        <span>标题</span>
      </transition>
    </div>
    <div class="operation-btn flex-items">
      <div>
        <button  class="icon flex-center" title="设置">
          <i class="iconfont flex-center icon-setting"></i>
        </button>
      </div>
      <div>
        <button v-if="isTop" class="icon flex-center" @click="changeTop" title="取消置顶">
          <i class="iconfont flex-center icon-thepin-active"></i>
        </button>
        <button v-else class="icon flex-center" @click="changeTop" title="置顶">
          <i class="iconfont flex-center icon-thepin"></i>
        </button>
      </div>
      <div>
        <button class="icon flex-center close-window" @click="closeWindow" title="关闭">
          <i class="iconfont flex-center icon-close"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {remote} from 'electron'
import {transitCloseWindow} from '../utils/util.js'

export default {
  name: "Header",
  data() {
    return {
      currentWindow: remote.getCurrentWindow(),
      isTop: false,
    }
  },
  mounted() {
  },
  methods: {
    changeTop() {
      if (this.isTop) {
        this.currentWindow.setAlwaysOnTop(false);
        this.isTop = false;
      } else {
        this.currentWindow.setAlwaysOnTop(true);
        this.isTop = true;
      }
    },
    closeWindow() {
      transitCloseWindow()
    }
  }
}
</script>

<style scoped lang="less">
@import "../less/index.less";
.title {
  width: 80px;
  -webkit-app-region: drag;
  -webkit-user-select: none;
  background-color: #42b983;
}
.header-fadein-enter,
.header-fadein-leave-to {
  display: none;
  opacity: 0;
  animation: header-fadein 0.4s reverse;
}
.header-fadein-enter-active,
.header-fadein-leave-active {
  opacity: 0;
  animation: header-fadein 0.4s;
}
@keyframes header-fadein {
  from {
    opacity: 0;
    margin-right: -14px;
  }
  to {
    opacity: 1;
    margin-right: 0;
  }
}
.header {
  height: @iconSize;
  background-color: @white-color;
  button {
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
  }
  a {
    color: initial;
    width: 100%;
    height: 100%;
    outline: none;
  }
  .icon {
    width: @iconSize;
    height: @iconSize;
    .iconfont {
      // 头部icon大小在这里设置
      font-size: @headerIconFontSize;
      padding-bottom: 2px;
    }
  }
  .close-window:hover {
    background-color: @error-color;
    color: @white-color;
  }
  @keyframes fades {
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .drag-header {
    -webkit-app-region: drag;
    height: 36px;
    margin-top: 5px;
    padding-bottom: 5px;
    color: @text-sub-color;
    font-size: 15px;
    font-weight: bold;
    box-sizing: border-box;
  }
}
.thepin {
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s;
  .absolute-box {
    position: absolute;
    top: 0;
    transition: all 0.4s;
  }
}
.thepin-active .absolute-box {
  top: -40px;
}
</style>
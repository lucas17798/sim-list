<template>
  <div v-for="(item, index) in items" :key="index">
    <div class="container flex-between">
      <div class="cont-word" @click="showContent(index)">
        <div class="word flex-left">{{item.title}}</div>
      </div>

      <button class="icon flex-center">
        <i class="iconfont flex-center icon-clock"></i>
      </button>
    </div>
    <transition name="draw">
      <div class="detail" :id="'con-'+index" v-show="index===showIndex"><span>{{item.content}}</span></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {
      showIndex: -1,
      items : [
        {
          title: 'title',
          content: 'content',
          clock: 1
        },
        {
          title: 'title2',
          content: 'content2',
          clock: 2
        }
      ]
    }
  },
  methods: {
    showContent(index) {
      this.showIndex = this.showIndex===index?-1:index
    }
  }
}
</script>

<style scoped lang="less">
@import "../less/index.less";
@height: 40px;
@detail: 2*@height;

.container {
  width: 100%;
  height: @height;
  background-color: #ffffff;
  margin-top: 5px;
  text-align: left;
  border-radius: 6px;
  box-shadow: 1px 1px 3px 1px #2c3e50;
  &:hover {
    box-shadow: 2px 2px 5px 2px #2c3e50;
  }
  .cont-word {
    width: 100%;
    height: 100%;
  }
 .word {
   line-height: @height;
   margin-left: 15px;
   width: 100%;

 }
}
.hide {
  display: none;
}
.detail {
  width: 100%;
  height: @detail;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  margin-top: 2px;
  margin-bottom: 10px;
  span {
    text-align: left;
    font-size: 12px;
    display: block;
    letter-spacing: 2px;
    padding: 10px 10px;
  }
}
.draw-enter-active, .draw-leave-active {
  transition: all 0.5s ease;
}
.draw-enter-from, .draw-leave-to {
  opacity: 0;
  height: 0;
}
</style>
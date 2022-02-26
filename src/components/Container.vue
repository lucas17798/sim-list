<template>
  <div class="container">
    <span>内容</span>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped lang="less">
@height: 40px;

.container {
  width: 100%;
  height: @height;
  background-color: #42b983;
  margin-top: 5px;
  text-align: left;
  /*color: #fff;*/
  /*background-color: #337ab7;*/
  /*display: inline-block;*/
  /*padding: 6px 12px;*/
  /*margin-bottom: 0;*/
  /*font-size: 14px;*/
  /*font-weight: 400;*/
  /*line-height: 1.42857143;*/
  /*text-align: center;*/
  /*white-space: nowrap;*/
  /*text-decoration: none;*/
  /*vertical-align: middle;*/
  /*-ms-touch-action: manipulation;*/
  /*touch-action: manipulation;*/
  /*cursor: pointer;*/
  /*-webkit-user-select: none;*/
  /*-moz-user-select: none;*/
  /*-ms-user-select: none;*/
  /*user-select: none;*/
  /*!*background-image: none;*!*/
  /*border: 1px solid transparent;*/
  border-radius: 6px;
}

.container span {
  line-height: @height;
  margin-left: 15px;
}
</style>
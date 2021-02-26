<template>
  <div class="docker">
    <span class="docker-item docker-item-active">
      <div class="iconfont">&#xe69b;</div>
      <div class="docker-title">首页</div>
    </span>
    <span class="docker-item">
      <div class="iconfont">&#xe6d4;</div>
      <div class="docker-title">购物车</div>
    </span>
    <span class="docker-item">
      <div class="iconfont">&#xe66c;</div>
      <div class="docker-title">订单</div>
    </span>
    <span class="docker-item">
      <div class="iconfont">&#xe603;</div>
      <div class="docker-title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  padding: 0 0.18rem;
  box-sizing: border-box;
  .docker-item-active {
    color: #1fa4fc;
  }
  .docker-item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    .docker-title {
      font-size: 0.2rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
  }
}
</style>

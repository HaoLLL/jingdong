<template>
  <div class="docker">
    <span v-for="(item,index) in dockerList"
      :key="item.icon"
      :class="{'docker-item':true,'docker-item-active':index===0}">
      <div class="iconfont"
        v-html="item.icon"></div>
      <div class="docker-title">{{item.text}}</div>
    </span>
  </div>

</template>
<script>
export default {
  name: 'Docker',
  setup() {
    const dockerList = [
      { icon: '&#xe69b;', text: '首页' },
      { icon: '&#xe6d4;', text: '购物车' },
      { icon: '&#xe66c;', text: '订单' },
      { icon: '&#xe603;', text: '我的' }
    ]
    return {
      dockerList
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';
.docker {
  color: $content-font-color;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
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

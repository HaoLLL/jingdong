<template>
  <div class="position">
    <span class="iconfont position-icon">&#xe615;</span>
    北京理工大学国防科技园2号楼
    <span class="iconfont position-notice">&#xe636;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe600;</span>
    <span class="search-text">山姆会员商店优惠产品</span>
  </div>
  <div class="banner">
    <img class="banner-img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt="">

  </div>
  <div class="icons">
    <div class="icon-item">
      <img class="icon-item-img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="">
      <p class="icon-item-desc">超市便利</p>
    </div>

    <div class="icon-item">
      <img class="icon-item-img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="">
      <p class="icon-item-desc">超市便利</p>
    </div>

    <div class="icon-item">
      <img class="icon-item-img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="">
      <p class="icon-item-desc">超市便利</p>
    </div>

    <div class="icon-item">
      <img class="icon-item-img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="">
      <p class="icon-item-desc">超市便利</p>
    </div>

    <div class="icon-item">
      <img class="icon-item-img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="">
      <p class="icon-item-desc">超市便利</p>
    </div>

    <div class="icon-item">
      <img class="icon-item-img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="">
      <p class="icon-item-desc">超市便利</p>
    </div>

    <div class="icon-item">
      <img class="icon-item-img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="">
      <p class="icon-item-desc">超市便利</p>
    </div>

    <div class="icon-item">
      <img class="icon-item-img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="">
      <p class="icon-item-desc">超市便利</p>
    </div>

    <div class="icon-item">
      <img class="icon-item-img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="">
      <p class="icon-item-desc">超市便利</p>
    </div>

    <div class="icon-item">
      <img class="icon-item-img"
        src="http://www.dell-lee.com/imgs/vue3/超市.png"
        alt="">
      <p class="icon-item-desc">超市便利</p>
    </div>

  </div>
  <div class="gap">

  </div>
</template>
<script>
export default {
  name: 'StaticPart'
}
</script>
<style lang="scss">
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  .icon-item {
    width: 20%;
    .icon-item-img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    .icon-item-desc {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
      color: $content-font-color;
    }
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  .banner-img {
    width: 100%;
  }
}
.search {
  line-height: 0.32rem;
  color: #b7b7b7;
  background: #f5f5f5;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  margin-bottom: 0.12rem;
  .iconfont {
    padding: 0 0.12rem 0 0.16rem;
    position: relative;
    top: 0.02rem;
    display: inline-block;
    font-size: 0.16rem;
  }
  .search-text {
    display: inline-block;
  }
}
.position {
  color: $content-font-color;
  position: relative;
  padding: 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  padding-right: 0.3rem;
  .position-icon {
    margin-right: 0.08rem;
    font-size: 0.2rem;
  }
  .position-notice {
    position: absolute;
    // font-size: 0.2rem;
    right: 0;
  }
}
.gap {
  height: 0.1rem;
  background: $bg-color;
  margin: 0 -0.18rem;
}
</style>

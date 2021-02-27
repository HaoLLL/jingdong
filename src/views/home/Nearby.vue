<template>
  <div class="nearby">
    <h3 class="nearby-title">附近店铺</h3>
    <div class="nearby-item">
      <img src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
        class="nearby-item-img">
      <div class="nearby-content">
        <div class="nearby-content-title">沃尔玛</div>
        <div class="nearby-content-tags">
          <span class="nearby-content-tag">月售出1万</span>
          <span class="nearby-content-tag">月售出1万</span>
          <span class="nearby-content-tag">月售出1万</span>
        </div>
        <p class="nearby-content-highlight">VIP尊享满89减少4元</p>
      </div>

    </div>

    <div class="nearby-item">
      <img src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
        class="nearby-item-img">
      <div class="nearby-content">
        <div class="nearby-content-title">沃尔玛</div>
        <div class="nearby-content-tags">
          <span class="nearby-content-tag">月售出1万</span>
          <span class="nearby-content-tag">月售出1万</span>
          <span class="nearby-content-tag">月售出1万</span>
        </div>
        <p class="nearby-content-highlight">VIP尊享满89减少4元</p>
      </div>

    </div>

    <div class="nearby-item">
      <img src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
        class="nearby-item-img">
      <div class="nearby-content">
        <div class="nearby-content-title">沃尔玛</div>
        <div class="nearby-content-tags">
          <span class="nearby-content-tag">月售出1万</span>
          <span class="nearby-content-tag">月售出1万</span>
          <span class="nearby-content-tag">月售出1万</span>
        </div>
        <p class="nearby-content-highlight">VIP尊享满89减少4元</p>
      </div>

    </div>

    <var>
      <div class="nearby-item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png"
          alt=""
          class="nearby-item-img">
        <div class="nearby-content">
          <div class="nearby-content-title">沃尔玛</div>
          <div class="nearby-content-tags">
            <span class="nearby-content-tag">月售出1万</span>
            <span class="nearby-content-tag">月售出1万</span>
            <span class="nearby-content-tag">月售出1万</span>
          </div>
          <p class="nearby-content-highlight">VIP尊享满89减少4元</p>
        </div>

      </div>

      <div class="nearby-item">
        <img src="http://www.dell-lee.com/imgs/vue3/near.png"
          alt=""
          class="nearby-item-img">
        <div class="nearby-content">
          <div class="nearby-content-title">沃尔玛</div>
          <div class="nearby-content-tags">
            <span class="nearby-content-tag">月售出1万</span>
            <span class="nearby-content-tag">月售出1万</span>
            <span class="nearby-content-tag">月售出1万</span>
          </div>
          <p class="nearby-content-highlight">VIP尊享满89减少4元</p>
        </div>

      </div>
    </var>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';
.nearby {
  .nearby-title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
  }
  .nearby-item {
    display: flex;
    padding-top: 0.12rem;
    .nearby-item-img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
    .nearby-content {
      padding-bottom: 0.12rem;
      flex: 1;
      border-bottom: 1px solid #f1f1f1;

      .nearby-content-title {
        line-height: 0.22rem;
        font-size: 0.16rem;
        color: $content-font-color;
      }
      .nearby-content-tags {
        margin-top: 0.12rem;
        line-height: 0.18rem;
        font-size: 0.13rem;
        color: $content-font-color;
        .nearby-content-tag {
          margin-right: 0.16rem;
        }
      }
      .nearby-content-highlight {
        color: red;
        line-height: 0.18rem;
        font-size: 0.13rem;
        margin: 0.08rem 0 0 0;
      }
    }
  }
}
</style>

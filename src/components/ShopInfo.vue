<template>
  <div class="shop">
    <img :src="item.imgUrl"
      alt=""
      class="shop-img">
    <div class="shop-content">
      <div class="shop-content-title">{{item.name}}</div>
      <div class="shop-content-tags">
        <span class="shop-content-tag">月售:{{item.sales}}</span>
        <span class="shop-content-tag">起送:{{item.expressLimit}}</span>
        <span class="shop-content-tag">基础运费:{{item.expressPrice}}</span>
      </div>
      <p class="shop-content-highlight">{{item.slogan}}</p>
    </div>
  </div>

</template>
<script>
import { ref } from 'vue'
import { get } from '../../utils/request'

const userNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}
export default {
  setup() {
    const { nearbyList, getNearbyList } = userNearbyListEffect()
    getNearbyList()
    return {
      nearbyList
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';
.shop {
  .shop-title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
  }
  .shop-item {
    display: flex;
    padding-top: 0.12rem;
    .shop-item-img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
    }
    .shop-content {
      padding-bottom: 0.12rem;
      flex: 1;
      border-bottom: 1px solid #f1f1f1;

      .shop-content-title {
        line-height: 0.22rem;
        font-size: 0.16rem;
        color: $content-font-color;
      }
      .shop-content-tags {
        margin-top: 0.12rem;
        line-height: 0.18rem;
        font-size: 0.13rem;
        color: $content-font-color;
        .shop-content-tag {
          margin-right: 0.16rem;
        }
      }
      .shop-content-highlight {
        color: red;
        line-height: 0.18rem;
        font-size: 0.13rem;
        margin: 0.08rem 0 0 0;
      }
    }
  }
}
</style>

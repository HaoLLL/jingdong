<template>
  <div class="wrapper">

    <ShopInfo :item="item" />
  </div>
</template>
<script>
import ShopInfo from '../../components/ShopInfo'
export default {
  name: 'Shop',
  components: { ShopInfo },
  setup() {
    const item = {
      _id: 1,
      name: '沃尔玛1',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊享满89减少4元'
    }
    return {
      item
    }
  }
}
</script>
<style scoped>
.wrapper {
  padding: 0 0.18rem;
}
</style>

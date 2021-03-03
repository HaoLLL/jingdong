<template>
  <div class="nearby">
    <h3 class="nearby-title">附近店铺</h3>
    <div class="nearby-item"
      :key="item.id"
      v-for="item in nearbyList">
      <img :src="item.imgUrl"
        alt=""
        class="nearby-item-img">
      <div class="nearby-content">
        <div class="nearby-content-title">{{item.title}}</div>
        <div class="nearby-content-tags">
          <span v-for="(innerItem,index) in item.tags"
            :key="index"
            class="nearby-content-tag">{{innerItem}}</span>
        </div>
        <p class="nearby-content-highlight">{{item.desc}}</p>
      </div>
    </div>

  </div>
</template>
<script>
import {ref} from 'vue'
import { get } from '../../utils/request'
export default {
  setup() {
    const nearbyList=ref([]);
    const getNearbyList = async()=>{
      const result= await get('/api/shop/hot-list')
      if(result?.errno === 0){
        // localStorage.
      }else{

      }
    };
    const nearbyList = [
      {
        id: 1,
        title: '沃尔玛1',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售出1万', '起送0', '基于运费'],
        desc: 'VIP尊享满89减少4元'
      },
      {
        id: 2,
        title: '沃尔玛2',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售出1万', '起送0', '基于运费'],
        desc: 'VIP尊享满89减少4元'
      }
    ]
    return {
      nearbyList
    }
  }
}
</script>
<style lang="scss" scoped>
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

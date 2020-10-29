<template>
  <div class="page-home">
    <!-- header begin -->
    <header class="index-header">
    <a href="mine.html?cpid=0">
       <div class="header-user">
             <div class="user-btn"></div>

       </div>
    </a>
    <div class="header-logo"></div>
    <a href="search.html?cpid=0">
       <div class="header-search"></div>
    </a>
</header>
    <!-- header end -->
  <!-- 轮播图 begin -->
<Swiper class="my-Swiper" @change="onChange">
   <SwiperItem>
     <img src="http://img.manhuadao.cn/upload/AdGroup202005/be1f95e4b388476da4c1cc14108ee492.jpg"  alt="">
   </SwiperItem>
   <SwiperItem>
<img src="http://img.manhuadao.cn/upload/AdGroup202005/04e5499ded0d41fbad60a54ae0712d26.jpg" alt="">
   </SwiperItem>
   <SwiperItem>
<img src="http://img.manhuadao.cn/upload/AdGroup202005/0fe38fc7985d45d28164e5eb45d5983a.png" alt="">
   </SwiperItem>
</Swiper>
  <!-- 轮播图 end -->
  </div>
</template>

<script>
// import Swiper from '@/components/swiper/swiper.vue'
// import SwiperItem from '@/components/swiper/swiperItem.vue'
import { Swiper, SwiperItem } from '@/components/swiper'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    onChange (index) {
      console.log('hello', index)
    }
  }

}
</script>
<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    box-sizing: border-box;
    .user-btn {
      width: 25px;
      height: 25px;
      background: url('../../assets/icon/user-btn.png');
      background-size: 100%;
    }
    .header-logo {
      width: 92px;
      height: 28px;
      background: url('../../assets/logo.png') no-repeat;
      background-size: 100%;
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url('../../assets/icon/search.png');
      background-size: 100%;
    }

  }
  .my-Swiper img {
    width: 100%;
  }

}
</style>

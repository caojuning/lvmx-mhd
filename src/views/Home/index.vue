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
  <br>
<Swiper  class="my-Swiper" @change="onChange" v-if="bannerList.length > 0">
   <SwiperItem v-for="item in bannerList" :key="item.id">
   <img :src="item.imageurl" />
   </SwiperItem>

</Swiper>

  <!-- 轮播图 end -->

  </div>

</template>

<script>
// import Swiper from '@/components/swiper/swiper.vue'
// import SwiperItem from '@/components/swiper/swiperItem.vue'
import { Swiper, SwiperItem } from '@/components/swiper'
import { getBanner } from '@/api/cartoon'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      // 需要一个数据，考虑那几点
      // 数据在哪里，data?props?computed?state?getter?
      // 数据格式，string？object？，number？
      bannerList: []
    }
  },
  methods: {
    onChange (index) {
      console.log('hello', index)
    }
  },
  created () {
    getBanner().then(res => {
      // 漫画岛项目的每个接口都有code字段
      // 这个字段如何是200，这个接口才ok
      if (res.code === 200) {
        this.bannerList = res.info
        // ok
      } else {
        // no ok
        alert(res.code_msg)
      }
      // console.log(res)
    }).catch(err => {
      console.log(err)
      alert('网络异常，请稍后重试')
    })
  }

}
</script>
<style lang="scss" scoped>
@import "@/assets/style/mixins.scss";

.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header {
    @include border-bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    box-sizing: border-box;
    // border-bottom: 1px solid #e9e9e9;

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

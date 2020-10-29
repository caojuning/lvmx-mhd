<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
       <!--
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        -->
        <slot />
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>

</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Swiper',
  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    const that = this
    /* eslint-disable */
  new Swiper('.swiper-container',{
     // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    loop:this.loop,
    autoplay: this.autoplay ? {
      delay: this.autoplay,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    } :false,
    on: {
      //这里面不要使用箭头函数，否则里面的this指向的是当前的组件示例，而不是想要的swiper示例
    slideChangeTransitionEnd: function(){
      // console.log(this.realIndex);//切换结束时，告诉我现在是第几个slide
        //触发一个自定义事件，change
        // this.reaIndex => this swiper 实例
        // this.$emit = > this 当前实例
      that.$emit('change',this.realIndex)
  },
  },
  })
    /* eslint-enable */
  }
}
</script>

<style lang='scss'>
.swiper-container {
    width: 100%;
    height: 180px;
}
.swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin: 0 .13333333rem;
    border-radius: 50%;
    background-color: hsla(0,0%,100%,.7)
}
.swiper-pagination-bullet-active {
    width: .53333333rem;
    height: .26666667rem;
    margin: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUBAMAAAANaGKIAAAAMFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/Pzs7Oyvr68AAADW1tYAAAD///8YAGtvAAAAD3RSTlMABBwyDQgVCyf2zXAQoC3PT9+CAAAAd0lEQVQY02PACQSRAFSIUTS83AUKyksDBcCCojVpSnCQdjwQrDAkqc8YDl6ouQqAFDp1r/wPB7N2qICUimfc/48E/rYVAgVjtP+jgE1HgUaGdaEKrkgVYGAs60QVnJGOXRCrdmwW4XISpuNxeBMzQHAEHWYg4wIAe7Sz99Wx/OUAAAAASUVORK5CYII=) no-repeat 50%;
    background-size: contain
}

</style>

// 引入
import Swiper from './swiper.vue'
import SwiperItem from './swiperItem.vue'
// 暴露
// export default {
//   Swiper,
//   SwiperItem
// }
// ESM 的规范在引入时只是看上去像结构赋值
// 其实不是，需要个命名暴露
export { Swiper, SwiperItem }

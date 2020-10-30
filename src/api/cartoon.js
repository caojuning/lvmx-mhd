// 专门处理漫画相关的
// 1.引入封装好的axios的实例
import request from '../utils/request'
// 一个借口暴露一个

/* 获取轮播图的  */
export const getBanner = () => {
  // return 的是 借口调用之后，axios 返回的promise对象
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web - app',
      adgroupid: 123
    }
  })
}

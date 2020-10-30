// 项目的配置文件
module.exports = {
  devServer: {
    proxy: {
      // key：value
      // key-前缀
      // value-http-proxy-middleware 相同
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
      //   '/migu': {
      //     target: 'http://movie.miguvideo.com',
      //     changeOrigin: true,
      //     // 路径重写
      //     pathRewrite: {
      //       '^/migu': ''
      //     }
      //   }
    }
  }
}

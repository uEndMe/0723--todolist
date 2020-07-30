const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 配置
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 免写
      alias: {
        '@': resolve('src'), 								// 简写
        '@api': resolve('src/api'),
        '@assets': resolve('src/assets'),
        '@common': resolve('src/common'),
        '@components': resolve('src/components'),
        '@filter': resolve('src/filter'),
        '@mock': resolve('src/mock'),
        '@pages': resolve('src/pages'),
        '@router': resolve('src/router'),
        '@store': resolve('src/store'),
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',	// 目标地址
        changeOrigin: true,								// 支持跨域
        pathRewrite: { '^/api': '' }			// 重写
      }
    }
  }
}

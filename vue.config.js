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
        '@pages': resolve('src/pages'),
        '@components': resolve('src/components')
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

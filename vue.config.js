
module.exports = {
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

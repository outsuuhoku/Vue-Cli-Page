const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './'  // 相对路径，适合 GitHub Pages 子文件夹部署
})
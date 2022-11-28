const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // -- 重新設定svg loader --
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(path.join(__dirname, '.', 'src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.module
      .rule('svg-file')
      .test(/.*\.svg$/)
      .exclude.add(path.join(__dirname, '.', 'src/assets/icons/svg'))
      .end()
      .use('file-loader')
      .loader('file-loader')
      .end()
  },
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8888,
    proxy: {
      '^/api': {
        target: 'https://fe-interview-api.unnotech.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})

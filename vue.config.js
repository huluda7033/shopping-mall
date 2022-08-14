const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
        sass: {
            // 全局sass变量	
            //sass-loader 新版本
            additionalData: `@import "~@/assets/scss/index.scss";`
        }
    }
  },
  
})

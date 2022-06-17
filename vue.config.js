const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://staging-api.bloobloom.com/user/v1/sales_channels/website'
  },
})

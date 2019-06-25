const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@pages": path.resolve(__dirname, 'src/pages/'),
        "@components": path.resolve(__dirname, 'src/components/'),
        "@styles": path.resolve(__dirname, 'src/styles/'),
        "@styles-variables": path.resolve(__dirname, 'src/styles/variables.styl'),
        "@common": path.resolve(__dirname, 'src/common'),
        "@assets": path.resolve(__dirname, 'src/assets')
      }
    }
  }
}

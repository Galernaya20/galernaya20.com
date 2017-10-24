const path = require('path')
const gatsbyWebpack = require('gatsby/dist/utils/webpack.config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const directory = path.resolve(__dirname, '../')
const suppliedStage = 'develop'
const program = {
  directory,
}

module.exports = function customiseStorybookConfig(storybookBaseConfig) {
  console.log(storybookBaseConfig)

  return {
    ...storybookBaseConfig,
    module: {
      rules: [
        ...storybookBaseConfig.module.rules,
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader',
          ],
        },
      ],
    },
  }
}

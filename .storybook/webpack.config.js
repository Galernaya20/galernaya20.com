const path = require('path')
const gatsbyWebpack = require('gatsby/dist/utils/webpack.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssnext = require('postcss-cssnext')
const webpack = require('webpack')

const directory = path.resolve(__dirname, '../')
const suppliedStage = 'develop'
const program = {
  directory,
}

module.exports = function customiseStorybookConfig(storybookBaseConfig) {
  return Object.assign({}, storybookBaseConfig, {
    module: {
      rules: [...storybookBaseConfig.module.rules],
    },
  })
}

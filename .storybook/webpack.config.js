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
      rules: [
        ...storybookBaseConfig.module.rules,
        {
          test: /^((?!\.module).)*css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [cssnext()],
              },
            },
          ],
        },
        {
          test: /\.module.css$/,
          use: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [cssnext()],
              },
            },
          ],
        },
      ],
    },
  })
}

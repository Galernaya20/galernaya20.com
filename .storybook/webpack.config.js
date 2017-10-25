const path = require('path')
const gatsbyWebpack = require('gatsby/dist/utils/webpack.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')
const webpack = require('webpack')

const directory = path.resolve(__dirname, '../')
const suppliedStage = 'develop'
const program = {
  directory,
}

module.exports = function customiseStorybookConfig(storybookBaseConfig) {
  return {
    ...storybookBaseConfig,
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
                plugins: () => [postcssNested(), autoprefixer()],
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
                plugins: () => [postcssNested(), autoprefixer()],
              },
            },
          ],
        },
      ],
    },
  }
}

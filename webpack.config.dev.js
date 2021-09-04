const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }
})

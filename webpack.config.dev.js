var webpack = require('webpack');
const merge = require('webpack-merge')

const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'development'

})

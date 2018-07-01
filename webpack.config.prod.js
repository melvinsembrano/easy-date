var path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var uglifyJs = new UglifyJSPlugin();

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './')
  },
  plugins: [
    uglifyJs
  ]
})

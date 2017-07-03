var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'easy-date-light': './src/easy-date.js',
    'easy-date': './src/bundled.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './')
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}

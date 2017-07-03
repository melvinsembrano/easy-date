var path = require('path');
var webpack = require('webpack');
var uglifyJs = new webpack.optimize.UglifyJsPlugin();

module.exports = {
  entry: {
    'easy-date-light': './src/easy-date.js',
    'easy-date': './src/bundled.js'
  },

  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './')
  },

  plugins: [
    uglifyJs
  ],

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

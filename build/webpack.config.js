const cleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path');

const path = url => resolve(__dirname, '..',  url)

module.exports = {
  entry: {
    index: './src/index.ts',
    clipboard: path('src/packages/clipboard'),
    cooick: path('src/packages/cooick'),
    date: path('src/packages/date'),
    decopy: path('src/packages/decopy'),
    localStorage: path('src/packages/localStorage'),
    regExp: path('src/packages/regExp'),
    typeOf: path('src/packages/typeOf'),
    utils: path('src/packages/utils')
  },
  mode: process.env.NODE_ENV,
  output: {
    filename: "[name].js",
    path: path('lib')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'js-hodgepodge': path('src/packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'development' ? [
    new cleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./lib']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ] : [],

  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  
  devServer: {
    contentBase: path('dist'),
    stats: 'errors-only',
    compress: true,
    host: 'localhost',
    port: 8081,
    open: true
  },
}

const cleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path');


module.exports = {
  entry: "./src/index.ts",
  mode: process.env.NODE_ENV,
  output: {
    filename: "index.js",
    path: resolve(__dirname, '..', 'dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
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
  plugins: [
    new cleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ],
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: resolve(__dirname, '..', 'dist'),
    stats: 'errors-only',
    compress: true,
    host: 'localhost',
    port: 8081,
    open: true
  },
}

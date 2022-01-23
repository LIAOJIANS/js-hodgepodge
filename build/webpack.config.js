const cleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path');


module.exports = {
  entry: "./src/index.ts",
  mode: process.env.NODE_ENV,
  output: { 
    filename: "index.js",
    path: resolve(__dirname, '..', 'dist'),
    libraryTarget: 'umd',
    library: 'hodgepodge',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' }
        ]
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

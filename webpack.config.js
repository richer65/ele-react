const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

// 服务器挂在的中间件
// var webpackMiddleware = require("webpack-dev-middleware");
// app.use(webpackMiddleware(...));


module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },
    {
      test: /\.css$/,
      exclude: /^node_modules$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.scss$/,
      exclude: /^node_modules$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings 
      }, {
        loader: "css-loader" // translates CSS into CommonJS 
      }, {
        loader: "sass-loader" // compiles Sass to CSS 
      },]
    },
    {
      //图片处理
      test: /\.(png|svg|jpg|gif)$/,
      exclude: /^node_modules$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    },
    {
      //字体的loader
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      exclude: /^node_modules$/,
      use: [
        'file-loader?name=[name].[ext]'
      ]
    }
    ]
  },
  //方便追踪的开发插件
  devtool: 'inline-source-map',
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    //清除dist
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: false
    })
  ]
};
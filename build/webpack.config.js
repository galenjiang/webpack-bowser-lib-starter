import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const debug = process.env.NODE_ENV.trim() === 'debug';

// 模块导入
module.exports = {

  // 入口文件地址
  entry: {
    index: [
      './src/index',
    ],
    about: [
      './src/about',
    ],
    // vendor: [
    //   'lodash',
    // ],
  },

  output: {
    path: path.resolve(debug ? 'dev' : 'dist'),
    filename: debug ? '[name].js' : '/js/[hash:8].[name].js',
    chunkFilename: debug ? '[chunkhash].js' : '/js/[chunkhash:8].chunk.js',

    // 公共文件生成的地址
    publicPath: debug ? '' : '',
  },

  module: {
    loaders: [

      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },

      // {
      //     test: /\.css$/,
      //     loader: 'style!css!autoprefixer?{browsers:["last 2 versions", "Android >= 4.0"]}'
      // },

      // {
      //     test: /\.scss$/,
      //     loader: 'style!css!autoprefixer?{browsers:["last 2 versions", "Android >= 4.0"]}!sass'
      // },

      // // 图片转化，小于8K自动转化为base64的编码
      // {
      //     test: /\.(png|jpg|gif)$/,
      //     loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
      // },

      // {
      //     test: /\.(woff|eot|ttf)$/i,
      //     loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
      // },
    ],
  },

  resolve: {

    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['', '.js'],

    // 别名，可以直接使用别名来代表设定的路径以及其他
    alias: {
      // components: path.join(__dirname, './src/components'),
    },
  },

  plugins: [

    // 提供全局的变量，在模块中使用无需用require引入
    
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index', 'common'],
    }),

    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      chunks: ['about', 'common'],
    }),

    // 提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['index', 'about'],
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'js/[hash:8].[name].js',
    //   minChunks: Infinity,
    // }),
    // new webpack.DllPlugin({
    //   path: path.join(__dirname, '../', 'dist', 'manifest.json'),
    //   name: '[name]_[chunkhash]',
    //   context: __dirname,
    // }),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   mainfest: console.log(__dirname) || require('../dist/manifest.json'),
    // }),
  ],

};

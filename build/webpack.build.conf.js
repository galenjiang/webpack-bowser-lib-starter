const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const DeclarationBundlerPlugin = require('webpack-plugin-typescript-declaration-bundler');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'cheap-module-source-map' : 'source-map',
  entry: {
    index: './src/index',
  },
  output: {
    path: isDev
      ? path.resolve(__dirname, '..', 'dist')
      : path.resolve(__dirname, '..', 'lib'),
    filename: isDev ? '[name].js' : '[name].[hash:8].js',
    // TODO：库命名
    library: 'MyLibrary',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  externals: {
    // 外部依赖库
    // a: 'aRoot'
    // a: {
    //     commonjs: 'aCommonjs',
    //     commonjs2: 'aCommonjs2',
    //     amd: 'aAmd',
    //     root: 'aRoot'
    // }
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [
              'babel-loader',
              {
                loader: 'ts-loader',
              },
            ],
          },
          {
            test: /\.css/,
            exclude: /node_modules/,
            use: [
              // 待优化，开发环境和生产环境
              // {
              //     loader: 'style-loader',
              // },
              {
                loader: MiniCssExtractPlugin.loader,
                options: {},
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  url: (url, resourcePath) => {
                    return url.includes('http://www.xxx.com')
                  },
                },
              },
              {
                loader: 'postcss-loader',
              },
            ],
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ],
          },
        ],
      },
    ],
  },

  watch: isDev,
  // optimization: {
  //     minimizer: [
  //         /**
  //          * While webpack 5 is likely to come with a CSS minimizer built-in,
  //          * with webpack 4 you need to bring your own. To minify the output,
  //          * use a plugin like optimize-css-assets-webpack-plugin. Setting optimization.
  //          * minimizer overrides the defaults provided by webpack,
  //          * so make sure to also specify a JS minimizer:
  //          **/
  //         new UglifyJsPlugin({
  //             cache: true,
  //             parallel: true,
  //             sourceMap: true // set to true if you want JS source maps
  //         }),
  //         // new OptimizeCSSAssetsPlugin({})
  //     ]
  // },
  stats: 'verbose',
  plugins: (!isDev
    ? [
        new CleanWebpackPlugin({
          root: path.resolve(__dirname, '..'),
          verbose: true,
        }),
      ]
    : []
  ).concat([
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]),
}

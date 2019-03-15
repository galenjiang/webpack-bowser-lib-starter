const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: './examples/index',
  },
  output: {
    path: path.resolve(__dirname, '..', 'dev'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            // dist作为库，不应该用babel再次打包
            exclude: [/node_modules/, /dist/],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/env',
                      {
                        modules: false,
                        debug: true,
                        useBuiltIns: 'usage',
                      },
                    ],
                    '@babel/preset-react',
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dev'),
    host: '0.0.0.0',
    port: 8080,
    clientLogLevel: 'info',
  },

  plugins: [new HtmlWebpackPlugin({})],
}

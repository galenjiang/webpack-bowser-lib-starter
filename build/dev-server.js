import webpack from 'webpack';
import merge from 'webpack-merge';
import WebpackDevServer from 'webpack-dev-server';
import WebpackBrowserPlugin from 'webpack-browser-plugin';
import chalk from 'chalk';
import webpackConfig from './webpack.config';


const config = merge(webpackConfig, {
  entry: {
    index: ['webpack-dev-server/client?http://0.0.0.0:9090/', 'webpack/hot/dev-server']
  },

  devtool: 'eval-source-map',
  
  plugins: [

    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    
    new webpack.HotModuleReplacementPlugin(), new WebpackBrowserPlugin({
    browser: 'chrome',
    port: 9090,
    url: 'http://localhost'
})
  ]
})

new WebpackDevServer(webpack(config), {
  contentBase: 'dev',
  // publicPath: config.output.publicPath,
  // publicPath: '',
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },
  hot: true,
  // proxy: {
  //     "*": "http://localhost:8080"
  // },
  headers: { 'X-Custom-Header': 'yes' },

}).listen(9090, '0.0.0.0', (err) => {
  if (err) throw err;

  console.log(chalk.green('[webpack-dev-server]', 'http://0.0.0.0:9090/'));
});

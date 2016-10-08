// 全局配置
import webpack from 'webpack';
// import chalk from 'chalk';
import webpackConfig from './webpack.config';

const config = Object.create(webpackConfig);

config.plugins.unshift(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  },
}));


webpack(config, (err, stats) => {
  if (err) throw err;

  process.stdout.write(`${stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  })}\n`);
});

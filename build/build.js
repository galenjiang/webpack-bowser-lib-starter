import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge'
// import chalk from 'chalk';
import webpackConfig from './webpack.config';

const ENV = process.env.NODE_ENV.trim();


let config = {};

if (ENV === 'production-dll') {
  
  config = merge({
    entry: {
      vendor: ['lodash']
    },

    output: {
      path: path.join(process.cwd(), 'dist'),
      filename: '[name].dll.js',
      library: 'library_[name]'
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.join(process.cwd(), 'dist', 'manifest.json'),
        name: 'library_[name]',
        context: path.join(process.cwd(), 'dist'),
      }),
    ]
  })

} else {

  config = merge(webpackConfig, {
    resolve: {
      alias: {
        library_vendor: '/library_vendor.js'
      }
    },

    plugins: [
      
      new webpack.DllReferencePlugin({
        context: path.join(process.cwd(), 'dist'),
        manifest: require('../dist/manifest.json'),
        // name: './vendor.dll.js',
      }),

      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),

    ]
  })
}



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

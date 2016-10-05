import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import WebpackBrowserPlugin from 'webpack-browser-plugin'
import chalk from 'chalk'
import webpackConfig from './webpack.config.js'


let config = Object.create(webpackConfig)

// 修改配置
config.entry.main.unshift("webpack-dev-server/client?http://0.0.0.0:9090/", "webpack/hot/dev-server")
config.devtool = 'eval-source-map'
config.plugins.unshift(new webpack.HotModuleReplacementPlugin(), new WebpackBrowserPlugin({
    // browser: 'chrome',
    port: 9090,
    // url: 'http://192.168.0.50'
}))


new WebpackDevServer(webpack(config), {
    contentBase: 'dev',
    // publicPath: config.output.publicPath,
    // publicPath: '',
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    },
    hot: true,
    // proxy: {
    //     "*": "http://localhost:8080"
    // },
    headers: { "X-Custom-Header": "yes" }

}).listen(9090, "0.0.0.0", function (err) {
    if (err) throw err

    console.log(chalk.green("[webpack-dev-server]", "http://0.0.0.0:9090/"))
});

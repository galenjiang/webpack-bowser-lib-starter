const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// TODO.md: Is it needed?
// const DeclarationBundlerPlugin = require('webpack-plugin-typescript-declaration-bundler');

module.exports = {
    mode: 'development',
    devtool: "source-map",
    // Change to your "entry-point".
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    externals: {
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
            // {
            //     // Include ts, tsx, js, and jsx files.
            //     test: /\.(ts|js)x?$/,
            //     exclude: /node_modules/,
            //     use: [
            //         'ts-loader'
            //     ],
            //     enforce: 'pre'
            // },
            {
                oneOf: [
                    {
                        // Include ts, tsx, js, and jsx files.
                        test: /\.(ts|js)x?$/,
                        exclude: /node_modules/,
                        // loader: 'babel-loader',
                        use: [
                            'babel-loader',
                            // {
                            //     loader: 'ts-loader',
                            // }
                        ]
                    },
                    {
                        test: /\.css/,
                        exclude: /node_modules/,
                        use: [
                            // {
                            //     loader: 'style-loader',
                            // },
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    url: (url, resourcePath) => {
                                        return url.includes('www.sogou.com');
                                    },
                                }
                            },
                            {
                                loader: 'postcss-loader',
                            },
                            // {
                            //     loader: 'sass-loader'
                            // }
                        ]
                    },
                    {
                        test: /\.(png|jpg|gif)$/i,
                        use: [
                          {
                            loader: 'url-loader',
                            options: {
                              limit: 8192
                            }
                          }
                        ]
                      }
                ]
            }
        ],
    },
    // optimization: {
    //     minimizer: [
    //         // TODO.md:
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
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        // new DeclarationBundlerPlugin({
        //     moduleName:'my-lib',
        //     out:'./lib/bundle.d.ts',
        // })
    ],

};

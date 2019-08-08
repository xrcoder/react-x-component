/**
 * Created by Rayr Lee on 2017/2/6.
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    mode: 'production',
    entry: ['./example/src/app.js'],
    output: {
        path: path.resolve(__dirname, '../example/build'),
        filename: 'js/[name].[chunkhash:6].js',
        chunkFilename: 'js/[name].[chunkhash:6].js',
        publicPath: '/'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        alias: {
            'react-x-component': path.resolve(__dirname, '../src'),
            'services': path.resolve(__dirname, '../example/src/services')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['react-hot-loader/babel']
                        }
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    warnings: false,
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compressor: {
                        sequences: true,
                        drop_debugger: true,
                        drop_console: true
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', {discardComments: {removeAll: true}}],
                },
                canPrint: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                base: {
                    chunks: 'initial',
                    name: 'base',
                    minChunks: 1,
                    minSize: 30000,
                    maxAsyncRequests: 5,
                    maxInitialRequests: Infinity
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackMd5Hash(),
        new HtmlWebpackPlugin({
            template: './example/index.html',
            filename: path.resolve(__dirname, '../example/build/index.html'),
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/react-x-demo.min.[contenthash:6].css',
            chunkFilename: 'css/react-x-demo.min.[contenthash:6].css'
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

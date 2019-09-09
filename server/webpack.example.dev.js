/**
 * Created by Rayr Lee on 2017/2/6.
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
    mode: 'development',
    entry: ['webpack-hot-middleware/client?reload=true', './example/src/app.js'],
    output: {
        path: path.resolve(__dirname, '../example/dev'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['react-hot-loader/babel']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
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
            },
            {
                test: /\.(md|code)$/,
                use: 'raw-loader',
            }
        ]
    },
    devtool: 'source-map',
    optimization: {
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
        new HtmlWebpackPlugin({
            template: './example/index.html',
            filename: path.resolve(__dirname, '../example/dev/index.html'),
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

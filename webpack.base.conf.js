const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const vueLoader = require('vux-loader')
const VueLoaderPlugin = require('')

const webpackConfig = {
    mode: 'development',
    // entry: './src/index.js',
    entry: {
        app: './src/index.js'
        // print: './src/print.js'
    },
    devtool: 'inline-souce-map',
    devServer: {
        contentBase: './dist',
        // publicPath: '/'
        hot: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    }
}

module.exports = vueLoader.merge(webpackConfig, {
    plugins: ['vue-ui']
})
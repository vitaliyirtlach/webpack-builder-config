const HtmlWebpackPlugin = require('html-webpack-plugin')
const {HotModuleReplacementPlugin } = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const {resolve, join} = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserWebpackPlugin = require("terser-webpack-plugin")

module.exports = {
    context: resolve(__dirname, "src"),
    entry: ["@babel/polyfill", join(__dirname, "src", "index.ts")],
    output: {
        filename: "[name].bundle.js",
        path: resolve(__dirname, "build"),
        publicPath: "/"
    },
    mode: 'development',
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            publicPath: 'assets'
                        }
                    },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    }
                ],
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: 'css-loader',
                    options: { modules: true }
                  },
                  'sass-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                  {
                    loader: 'css-loader',
                    options: { modules: true }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      indentedSyntax: true,
                      sassOptions: {
                        indentedSyntax: true
                      }
                    }
                  }
                ]
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: 'css-loader',
                    options: { modules: true }
                  },
                  'less-loader'
                ]
            },
            {
                test: /\.styl(us)?$/,
                use: [
                  'css-loader',
                  'stylus-loader'
                ]
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, "public", "index.html"),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            },
            inject: true
        }),
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: resolve(__dirname, "public", "assets"),
                to: resolve(__dirname, "build", "public")
            }]
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [new TerserWebpackPlugin()]
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        contentBase: join(__dirname, "build"),
        historyApiFallback: true,
    }
}
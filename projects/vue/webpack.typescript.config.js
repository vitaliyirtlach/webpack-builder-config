const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {HotModuleReplacementPlugin } = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const {resolve, join} = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserWebpackPlugin = require("terser-webpack-plugin")

module.exports = {
    context: resolve(__dirname, "src"),
    entry: ["@babel/polyfill", join(__dirname, "src", "main.ts")],
    output: {
        filename: "[name].bundle.js",
        path: resolve(__dirname, "build"),
        publicPath: "/"
    },
    mode: 'development',
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.js', ".html"],
        alias: {
            "@": resolve(__dirname, "src"),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] }
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.pug$/,
                oneOf: [
                    {
                      resourceQuery: /^\?vue/,
                      use: ['pug-plain-loader']
                    },
                    {
                      use: ['raw-loader', 'pug-plain-loader']
                    }
                  ]
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
                  'vue-style-loader',
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
                  'vue-style-loader',
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
                  'vue-style-loader',
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
                  'vue-style-loader',
                  'css-loader',
                  'stylus-loader'
                ]
            },
            
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
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
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        contentBase: join(__dirname, "build"),
        historyApiFallback: true,
    }
}
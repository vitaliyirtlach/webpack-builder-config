const {join, resolve} = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    context: resolve(__dirname, "src"),
    entry: join(__dirname, "src", "index.tsx"),
    mode:"development",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@": resolve(__dirname, "src")
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-runtime"
                        ]
                    },
                }
            },
            {
                test: /\.tsx?$/i,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
                            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime", "babel-plugin-transform-async-to-generator"]
                        },
                    }, "ts-loader"
                ],
                exclude: "/node_modules/"
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "sass-loader"]
            },
            {
                test: /\.less$/i,
                loader: "less-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  }
                ]
            }
        ]
    },
    devServer: {
        contentBase: join(__dirname, 'build'),
        compress: true,
        port: 3000,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin({
            template: join(__dirname, "public", "index.html"),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true
            }
        }),
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

    output: {
        filename: "[name].bundle.js",
        path: resolve(__dirname, "build"),
        publicPath: "/"
    }
}
import {Configuration} from "webpack"
import { join, resolve } from "path"
import HTMLWebpackPlugin from "html-webpack-plugin"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import TerserWebpackPlugin from "terser-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export default {
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
                  },
                ],
              },
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
} as unknown as Configuration
const {join, dirname, resolve} = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
	entry: join(__dirname, "src", "main.js"),
	resolve: {
		alias: {
			svelte: dirname(require.resolve('svelte/package.json'))
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: resolve(__dirname, "build"),
        publicPath: "/",
        filename: "[name].bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: true
						},
						emitCss: false,
						hotReload: true
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				// required to prevent errors from Svelte on Webpack 5+
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
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
	mode: "development",
	plugins: [
		new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
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
	devtool: 'source-map',
	devServer: {
        port: 5000,
		hot: true,
        contentBase: join(__dirname, "build")
	},
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: 'single',
        minimize: true,
        minimizer: [new TerserWebpackPlugin()]
    },
};
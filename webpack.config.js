const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

/**
 * 原先要設定的 devServer 省略，使用 Webpack4 預設行為。
 * devServer: {
 *   port: 8080,
 *   hot: true,
 * }
 *
 * Webpack4 mode default behavior:
 * - development
 *   - hot module replacement (HMR)
 *   - NamedChunksPlugin
 *   - NamedModulesPlugin
 *
 * - production
 *   - FlagDependencyUsagePlugin
 *   - FlagIncludedChunksPlugin
 *   - ModuleConcatenationPlugin
 *   - NoEmitOnErrorsPlugin
 *   - OccurrenceOrderPlugin
 *   - SideEffectsFlagPlugin
 *   - UglifyJsPlugin
 */

/**
 * manifest?
 *
 */

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/")
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'scripts/main.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js|jsx$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "env", {
                                "targets": { "ie": "11" }
                            }
                        ],
                        "react"
                    ],
                    plugins: ["transform-class-properties"]
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                    }
                }, {
                    loader: "postcss-loader",
                }]
            },
            {
                test: /\.sass$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                    }
                }, {
                    loader: "postcss-loader",
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    }
                }]
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 8192
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "file-loader",
                options: {
                    limit: 8192,
                    name: "/assets/images/[name].[ext]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: "file-loader",
                options: {
                    limit: 8192,
                    name: "/assets/fonts/[name].[ext]"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".sass"],
        modules: [
            "node_modules",
            path.resolve(__dirname, "src/")
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack4 Example",
            template: "./src/index.html",
            filename: "./index.html",
            hash: true,
            cache: false,
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? "assets/styles/main.css" : "assets/styles/main.[hash].css"
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/](devextreme|devextreme-react)[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    performance: {
        hints: false
    }
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");


// const webpack = require('webpack');
// const path = require('path');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {   //----- начало -----
    // Точка входа
    entry: {
        app: './src/index.js'
    },
    // Точка выхода
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    // Подключаемые модули
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                    // {
                    //     loader: 'sass-resources-loader',
                    //     options: {
                    //         resources:  path.resolve(__dirname, './src/assets/scss/_vars.scss'),
                    //     }
                    // }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })],
    // Поключение webpack-dev-server для отладки браузере
    devServer: {

    },

}  // ----- конец -----


// const config = {
//     // Точка входа
//     entry: {
//         app: './src/index.js'
//     },
//     // Точка выхода
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         // filename: 'app.js',
//         // filename: '[name].js',
//         publicPath: '/dist'
//     },
//     // Подключаемые модули
//     module: {
//         rules: []
//     },
//     // Поключение webpack-dev-server для отладки браузере
//     devServer: {
//         // historyApiFallback: true,
//         open: true,
//        //watchFiles: ["./src/*"],
//     },
// }

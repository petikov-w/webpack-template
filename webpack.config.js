const webpack = require('webpack');
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    // Точка входа
    entry: {
        app: './src/index.js'
    },
    // Точка выхода
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: 'app.js',
        // filename: '[name].js',
        publicPath: '/dist'
    },
    // Подключаемые модули
    module: {
        rules: []
    },
    // Поключение webpack-dev-server для отладки браузере
    devServer: {
        // historyApiFallback: true,
        open: true,
       //watchFiles: ["./src/*"],
    },
}

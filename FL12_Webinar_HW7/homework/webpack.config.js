const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV === 'production';
console.log(isProduction);
const webpack_rules = [];
const webpackOption = {
    mode: 'production',
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
    module: {
        rules: webpack_rules
    },
    plugins: isProduction ? [new MiniCssExtractPlugin()] : []
};
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};
let lessLoader = {
    test: /\.less$/,
    use: [
        isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 
        'css-loader', 
        'less-loader'
    ]
}
webpack_rules.push(babelLoader);
webpack_rules.push(lessLoader);
module.exports = webpackOption;
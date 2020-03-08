const path = require("path"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    imageminGifsicle = require("imagemin-gifsicle"),
    imageminPngquant = require("imagemin-pngquant"),
    imageminSvgo = require("imagemin-svgo"),
    imageminMozjpeg = require('imagemin-mozjpeg');
module.exports = (env = {}) => {
    const {
        mode = 'development'
    } = env;
    const isProd = mode === 'production',
        isDev = mode === 'development';
    const getStyleLoaders = () => {
        return [isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    };
    const getPlugins = () => {
        const plugins = [new HtmlWebpackPlugin({
            title: 'FL12_Webinar_HW7',
            buildTime: new Date().toISOString(),
            template: './index.html'
        })];
        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: './css/styles.css'
            }));
        }
        return plugins;
    };
    return {
        mode: isProd ? 'production' : isDev && 'development',
        entry: "./js/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "./js/app.js",
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader'
                },
                //loading images
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: [{
                            loader: 'file-loader',
                            options: {
                                outputPath: 'img',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.90],
                                    speed: 4
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // the webp option will enable WEBP
                                webp: {
                                    quality: 75
                                }
                            }
                        }
                    ]
                },
                //Loading css
                {
                    test: /\.(css)$/,
                    use: getStyleLoaders()
                },
                //Loading Less
                {
                    test: /\.less$/,
                    use: [...getStyleLoaders(), 'less-loader']
                }
            ]
        },
        plugins: getPlugins(),
        devServer: {
            open: true
        }
    };
}
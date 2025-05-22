const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle[contenthash].js',
        clean: true,
    },
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/ ,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/i ,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Weather App',
                filename: 'index.html',
                template: './src/app.html'
            }
        )
    ],
}
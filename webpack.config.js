const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {

    console.log('Env: ', env);

    return {
        entry: './src/main.js',
        output: {
            path: `${__dirname}/dist`,
            filename: 'bundle.js'
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin(),
            new Dotenv()
        ],
        module: {
            rules: [
                {
                    // CSS LOADER
                    test: /.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    // HTML LOADER
                    test: /\.html$/i,
                    loader: 'html-loader'
                },
                {
                    // IMAGE LOADER
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: 'file-loader'
                },
            ]
        },
        mode: env.production ? 'production' : 'development'
    }
}
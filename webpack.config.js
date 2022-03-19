//Nos permite tener acceso a donde nos encontramos dentro de la carpeta, ya sea en locañ o en la nube
const path = require('path');

//Importamos plugin HTML Webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Importamos el Plugin Copy Webpack Plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');


//Modulo que contiene configuraciones para el build y ejecución del proyecto
module.exports = {

    entry: './src/index.js', //Código inicial de donde parte el proyecto
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "100tifico",
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),

        new CopyWebpackPlugin({
            patterns: [{
                from:'./src/styles/styles.css',
                to: './',
            }],
        })
    ]
};
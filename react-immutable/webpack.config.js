const {resolve} = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output:{
        path:resolve(__dirname, 'build'),
        filename:"build.js"
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                exclude:/node_modules/,
                loader:'html-loader',
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        })
    ],
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        host:'localhost',
        port:4000,
        open:true,
    },
    mode:'development'
}
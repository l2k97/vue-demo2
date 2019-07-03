
var path = require("path");
var htmlPlugin=require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
module.exports=
{
    entry:path.resolve(__dirname,"./src/main.js"),
    output: {
        filename: "[name].[hash:8].js",
        path: path.resolve(__dirname,"./dist")
    },
    devServer: {
      hot:true,
      port:8080,
      open:true
    },
    plugins: [
       new htmlPlugin({
           template: path.resolve(__dirname,"./src/index.html"),
           filename: "index.html"
       }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.scss$/,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: "url-loader?limit=8192"
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }


}
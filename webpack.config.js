
var path = require("path");
var htmlPlugin=require("html-webpack-plugin");

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
       })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["style-loader","css-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    }


}
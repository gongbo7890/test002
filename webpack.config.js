//生成独立的主页html文件的插件
var HtmlWebpackPlugin = require("html-webpack-plugin");
//提取css
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	plugins : [
		new HtmlWebpackPlugin({
			template : "./main.html"
		}),
		new ExtractTextPlugin("bundle.css")
	],
	entry : {
		index : "./main.js"
	},
	output : {
		path : "dist",
		filename : "bundle.js"
	},
	module : {
		loaders : [
			{
				test : /\.css/,
				loader : ExtractTextPlugin.extract(["css"])
			}
			,
			{
				test : /\.(jpg|png|gif)/,
				loader : "file?name=imgs/[name].[ext]"
			}
			,{
				test : /\.html/,
				loader : "html"
			}
			,{
				test : /\.ttf/,
				loader : "file?name=fonts/[name].[ext]"
			}
		]

	}
}
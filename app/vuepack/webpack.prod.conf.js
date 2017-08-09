var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ora = require('ora')
var rm = require('rimraf')

var build = {
  index: path.resolve(__dirname, '../assets/index.html'),
  assetsRoot: path.resolve(__dirname, '../assets'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '',
  nodeModulesDirectory: path.join(__dirname, '../../node_modules'),
  staticAssets: path.resolve(__dirname, 'static')
}

var webpackConfig = {
  watch: true,
  entry: {
    app: path.join(__dirname, 'src/main.js')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  output: {
    path: build.assetsRoot,
    filename: path.posix.join(build.assetsSubDirectory, 'js/[name].js'),
    chunkFilename: path.posix.join(build.assetsSubDirectory, 'js/[id].js'),
    publicPath: build.assetsPublicPath
  },
  plugins: [
    // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
    new webpack.optimize.UglifyJsPlugin({
      compress: false,
      mangle: false,
      comments: true,
      beautify: true
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: build.index,
      template: 'app/vuepack/index.html',
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            build.nodeModulesDirectory
          ) !== -1
        )
      }
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: build.staticAssets,
        to: build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
}

// The part where spinner starts and build the webpack
var spinner = ora('building for production...')
spinner.start()

rm(path.join(build.assetsRoot, build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log('  Build complete.\n')
  })
})

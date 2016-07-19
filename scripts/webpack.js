const webpack = require('webpack')
const path = require('path')
const express = require('express')
const fs = require('fs')
const request = require('request')
const argv = require('../src/util/argv')
const packageFile = JSON.parse(fs.readFileSync('./package.json', 'UTF-8'))
const nodeExternals = require('webpack-node-externals')
const _ = require('lodash')


/******************
 *
 * webpack plugins
 *
 ******************/
const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    drop_debugger: true,
    dead_code: true,
    // drop_console: true,
    // warnings: false,
    unused: true
  },
  mangle: {
    except: ['window', 'QT','$super', '$', 'exports', 'require']
  }
})

const chunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: Infinity
})

const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
})

const DefinePluginProduction = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
})

const DefinePluginDevelopment = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
})


/**
 * webpack client config
 * @param clientName
 * @param options
 */
const webpackClientConfigCreator = (clientName, options) =>{


  const config = {
    context: process.cwd(),
    devtool: false,
    entry: {
      'app': [`./src/entry/${clientName}.js`],
      'vendor': [
        "react",
        "react-dom",
        // "react-title-component",
        // "react-tap-event-plugin",
        // "react-swipeable-views",
        "react-router",
        "redux",
        "redux-actions",
        "react-router-redux",
      ]
    },
    output: {
      path: `${process.cwd()}/build/public/${clientName}`,
      publicPath: `/${clientName}/`, // css中的图片地址的前缀, 可以加上域名
      filename: '[name].js'
    },
    resolve: {
      extensions: ['', '.jsx', '.scss', '.js', '.json'],
      modulesDirectories: [
        'node_modules',
        path.resolve(`${process.cwd()}/node_modules`)
      ]
    },
    module: {
      loaders: [
        {
          test: /\.(png|jpg|svg)$/,
          loader: 'url-loader?limit=1024&name=images/[hash].[ext]'
        },
        {
          test: /(\.js|\.jsx)$/,
          exclude: /(node_modules\/)(?!\@heineiuo|react-icons)/, // 排除node_modules但不排除@heineiuo
          loader: 'babel',
          query: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }
      ]
    },
    plugins: []
  }

  config.plugins.push(chunkPlugin)

  return config

}


/**
 * webpack server config
 */
const webpackServerConfigCreator = (serverName) => {

  const serverConfig = {
    context: process.cwd(),
    // devtool: 'inline-source-map',
    // devtool: 'eval',
    devtool: false,
    target: 'node',
    entry: {
      app: [`${process.cwd()}/src/entry/${serverName}.js`]
    },
    output: {
      path: `${process.cwd()}/build/server`,
      filename: `${serverName}.js`
    },
    externals: nodeExternals({
      //whitelist: [ 'node-uuid', 'sha.js']
      whitelist: _.keys(packageFile.devDependencies)
    }),
    resolve: {
      extensions: ['', '.jsx', '.scss', '.js', '.json'],
      modulesDirectories: [
        'node_modules',
      ]
    },
    module: {
      loaders: [
        {
          test: /(\.js|\.jsx)$/,
          exclude: /(node_modules\/)(?!react-inlinestyle)/,
          loader: 'babel',
          query: {
            presets:['es2015','stage-0'],
            plugins: ['transform-runtime']
          }
        }
      ]
    },

    plugins: []
  }

  return serverConfig
}



/**
 * start server
 * @param webpackConfigs
 * @param port
 */
const startServer = (webpackConfigs, port)=>{

  const app = express()

  Object.keys(webpackConfigs).forEach(key=>{

    const config = webpackConfigs[key]
    config.devtool = 'inline-source-map'
    const compiler = webpack(config)
    app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: config.output.publicPath,
      hot: true,
      stats: {
        colors: true
      }
    }))
    app.use(require('webpack-hot-middleware')(compiler))
  })

  app.use('/', express.static(path.join(__dirname, '../build/public')))
  app.use('/api', (req, res, next)=>{


    var apiOptions = {
      method: req.method,
      url: `http://127.0.0.1${req.originalUrl}`,
      qs: req.query,
      body: req.body
    }
    request(apiOptions, function(err, response, body){
      if (err) {
        console.log('请求外部接口失败')
        console.log(err)
        return res.sendStatus(500)
      }

      console.log('请求外部接口成功')
      try {
        res.json(JSON.parse(body))
      } catch(e){
        console.log(body)
        res.sendStatus(502)
      }
    })


  })

  app.listen(port, '127.0.0.1', (err) => {
    if (err) return console.log(err)
    console.log(`Listening at http://0.0.0.0:${port}`)
  })
}


/*******************
 *
 * custom
 *
 *******************/
const webpackClientConfigs = {
  home: webpackClientConfigCreator('home', {notCompress: true})
}

const allWebpackConfigs = Object.assign({}, webpackClientConfigs, {
  api: webpackServerConfigCreator('api')
})

console.log(`argv: ${JSON.stringify(argv)}`)

if (argv.build){
  const config = allWebpackConfigs[argv.build]

  if (argv.compress){
    console.log('compress...')
    config.plugins.push(DefinePluginProduction)
    config.plugins.push(uglifyJsPlugin)
  }

  const compiler = webpack(config)

  compiler.run((err, stats)=>{
    if (err) return console.error(err)
    console.log(`build ${argv.build} success`)
  })
} else {
  startServer(webpackClientConfigs, 8080)
}


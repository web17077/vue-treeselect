// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    showEslintErrorsInOverlay: false,
  },
  bundle: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: [ 'js', 'css' ],
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  lib: {
    env: require('./dev.env'),
    assetsRoot: path.resolve(__dirname, '../lib'),
    assetsPublicPath: '/',
    assetsSubDirectory: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: [ 'js', 'css' ],
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  docs: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../gh-pages/index.html'),
    assetsRoot: path.resolve(__dirname, '../gh-pages'),
    assetsPublicPath: '',
    assetsSubDirectory: 'static',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: [ 'js', 'css' ],
    bundleAnalyzerReport: process.env.npm_config_report,
  },
}

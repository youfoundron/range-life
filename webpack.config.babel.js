import { resolve, join } from 'path'
import { optimize } from 'webpack'
import makeRule from 'webpack-make-rule'

const context = resolve(__dirname)
// entry paths
const src = join(__dirname, 'src')
const index = join(src, 'index.js')
const standard = join(src, 'standard.js')
const alpha = join(src, 'alpha.js')
const values = join(src, 'values.js')
// output
const path = join(__dirname, 'lib')

export default {
  context,
  entry: {
    index,
    standard,
    alpha,
    values
  },
  output: {
    path,
    filename: '[name].js',
    library: 'RangeLife',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      makeRule(/\.js$/, 'standard-loader', {snazzy: true}, 'pre'),
      makeRule(/\.js$/, 'babel-loader')
    ]
  },
  plugins: [
    new optimize.UglifyJsPlugin({
      comments: false
    })
  ],
  stats: {
    chunks: true,
    colors: true,
    hash: true,
    version: false,
    timings: true
  }
}

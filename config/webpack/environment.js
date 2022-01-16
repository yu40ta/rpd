const { environment } = require('@rails/webpacker')

module.exports = environment

// jQuery と Bootstrap の JS を扱えるようにする
const webpack = require('webpack')
environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Popper: ['popper.js', 'default']
  })
) 
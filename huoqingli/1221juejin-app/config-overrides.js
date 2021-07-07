
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = override(
    addWebpackAlias({
        ['@src']: resolve('src'),
        ['@assets']: resolve('src/assets'),
        ['@pages']:resolve(('src/pages'))
    })
)
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
// 修改访问后端的接口地址
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
  BASE_API: '"http://localhost:9001"',
})

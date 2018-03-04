'use strict'

const services = require('./lib/services')
const { loadFiles } = require('./lib/utils')

exports.setup = function (options) {
  const models = loadFiles(options.modelsDir)
  const services = {}


  return {
    models
  }
}
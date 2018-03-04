'use strict'

const fs = require('fs')
const path = require('path')

exports.loadFiles = function loadFiles (path) {
  const fileNames = fs.readdirSync(path)
  const files = {}

  fileNames.forEach(name => {
    name = name.replace('.js', '')
    
    if (name !== 'index') {
      const file = require(path.join(path, name))
      files[name] = file
    }
  })

  return files
}


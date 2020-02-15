const axios = require('axios')
const fse = require('fs-extra')
const moment = require('moment')
const lo = require('lodash')
const repl = require('repl')

const replServer = repl.start({
  prompt: 'bREPL > ',
})

const saveFile = fse.writeFileSync
const loadJson = fse.readJsonSync
const loadFile = (path, options) =>
  fse.readFileSync(path, lo.defaults(options, { encoding: 'utf-8' }))

Object.assign(replServer.context, {
  __: lo,
  axios,
  lo,
  moment,
  fse,
  saveFile,
  loadJson,
  loadFile,
  sf: saveFile,
  lj: loadJson,
  lf: loadFile,
})

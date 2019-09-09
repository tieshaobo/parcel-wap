const fs = require('fs')
const path = require('path')
const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()
const log = console.log
const chalk = require('chalk')

const config = {
  user: 'wangx',
  password: 'wang8328',
  host: '192.168.25.208',
  port: 21,
  localRoot: __dirname + '/build',
  remoteRoot: '/h5/1024/',
  include: [ '*', '**/*' ],
  exclude: [ '*.map' ],
  deleteRemote: true,
  forcePasv: true
}
const ProgressBar = require('progress')
let bar = null
fs.readdir(path.join(__dirname, '/build'), (error, files) => {
  let len = files.length
  bar = new ProgressBar('  ftpUpload [:bar] :rate/bps :current/:total :percent :etas', { total: len })
  deployHandler()
})

function deployHandler() {
  ftpDeploy
    .deploy(config)
    .then((res) => {
      log(chalk.gray.bgGreen(' DONE '))
      log(res)
    })
    .catch((err) => log(err))

  ftpDeploy.on('uploading', (data) => {
    bar.tick()
    if (bar.complete) {
      log(chalk.gray.bgCyan(' UpLoad Complete '))
    }
  })
  ftpDeploy.on('log', (data) => {
    log(chalk.blue(data))
  })
}

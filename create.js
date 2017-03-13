const dependency = 'iterum@1.0.2'
const globalName = 'iterum'
const bluebird = require('bluebird')
const camelCase = require('camel-case')
const capitalize = require('capitalize')
const fs = require('./src/fs')
const buildData = require('./src/build-data')
const read = require('./src/read')
const mkdir = require('./src/mkdir')

const [package, version] = dependency.split('@')

const options = process.argv.slice(2).reduce((opts, arg) => {
    const [, key, value] = arg.match(/^--(\w+)=(.+)$/) || []
    return Object.assign(opts, {
        [key]: value
    })
}, {})
options.globalName = options.globalName || capitalize(camelCase(options.package))

console.log(options)

const mkdirAction = mkdir(options)

const actions = [
    buildData('package.tpl.json', options),
    buildData('bundle.tpl.js', options),
    buildData('index.tpl.js', options),
    read('index.html')
].map(action => Promise.all([mkdir, action]))

const path = `./${options.package}/${options.version}`
Promise.all(actions)
    .then(function(todos) {
        const writeFileActions = todos
            .map(([_, action]) => {
                return fs.writeFile(`${path}/${action.file}`, action.data)
            })
        return Promise.all(writeFileActions)
    })
const bluebird = require('bluebird')
const fs = require('fs')

module.exports = [
    'readFile',
    'writeFile',
    'mkdir'
].reduce((memo, method) => {
    return Object.assign(memo, {
        [method]: bluebird.promisify(fs[method])
    })
}, {})
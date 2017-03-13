const fs = require('./fs')

function mkdir(options) {
    return fs.mkdir(`${options.package}`)
        .catch(() => false)
        .then(() => fs.mkdir(`${options.package}/${options.version}`))
        .then(() => true, () => false)
}

module.exports = mkdir

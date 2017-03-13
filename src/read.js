const fs = require('./fs')

function read(file) {
    return fs.readFile(`./src/templates/${file}`, 'utf8')
        .then(data => ({data, file}))
}

module.exports = read
